var WEEKLY_LIMIT_HOURS = 25;
var VACATION_OVERTIME_COST = 5;
var SHEET_NAME = 'Work Hours';
var SHEET_HEADERS = ['Date', 'Start', 'End', 'Breaks', 'Hours worked', 'Vacation day', 'Paid with overtime'];
var BACKUP_ROOT_FOLDER = 'work backups';
var WORK_BACKUP_SUBFOLDER = 'work time backups';
var FAMILY_BACKUP_SUBFOLDER = 'family to-do backups';
var FAMILY_SHEET_PROP = 'familySpreadsheetId';
var CLIENT_BACKUP_SUBFOLDER = 'client hours backups';
var CLIENT_SHEET_PROP = 'clientSpreadsheetId';
var CLIENT_SPREADSHEET_NAME = 'Client Hours Weekly';
var LAST_BACKUP_PROP = 'lastBackupDate';

/* ---------- Web app entry points ---------- */

function doGet(e) {
  var params = (e && e.parameter) || {};
  var multi = (e && e.parameters) || {};

  try {
    if (params.action === 'vacation' && params.date) {
      return summaryPage_(addVacationDay(params.date, isChecked_(params.useOvertime)));
    }
    if (params.date && params.start && params.end) {
      var breaks = [];
      var breakStarts = multi.breakStart || [];
      var breakEnds = multi.breakEnd || [];
      var count = Math.max(breakStarts.length, breakEnds.length);
      for (var i = 0; i < count; i++) {
        breaks.push({ start: breakStarts[i] || '', end: breakEnds[i] || '' });
      }
      var result = saveHours(params.date, params.start, params.end, breaks, isChecked_(params.overwrite));
      if (result.needsConfirmation) {
        return confirmPage_(result, params, multi);
      }
      return summaryPage_(result);
    }
  } catch (error) {
    return summaryPage_({ message: error.message, isError: true });
  }

  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Work Hours')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function doPost(e) {
  return doGet(e);
}

function isChecked_(value) {
  var text = String(value || '').toLowerCase();
  return text === 'on' || text === 'true' || text === '1' || text === 'yes';
}

/* ---------- Functions callable from the page ---------- */

function saveHours(dateString, startString, endString, breaks, allowOverwrite) {
  var date = parseDateString_(dateString);
  if (!date) {
    throw new Error('Please pick a valid date.');
  }

  var startMin = parseTimeString_(startString);
  if (startMin === null) {
    throw new Error('Please fill in the start time.');
  }

  var endMin = parseTimeString_(endString);
  if (endMin === null) {
    throw new Error('Please fill in the end time.');
  }

  var breakRanges = [];
  (breaks || []).forEach(function (item) {
    var startText = item && item.start ? String(item.start).trim() : '';
    var endText = item && item.end ? String(item.end).trim() : '';
    if (!startText && !endText) {
      return;
    }
    var breakStart = parseTimeString_(startText);
    var breakEnd = parseTimeString_(endText);
    if (breakStart === null || breakEnd === null) {
      throw new Error('Each break needs both a start time and an end time.');
    }
    breakRanges.push({ startMin: breakStart, endMin: breakEnd });
  });

  var work = computeWork_(startMin, endMin, breakRanges);

  var entry = {
    kind: 'work',
    date: date,
    startMin: startMin,
    endMin: endMin,
    breaks: breakRanges,
    hours: work.workedMinutes / 60
  };

  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    throw new Error('Another save is still running. Please wait a moment and try again.');
  }
  try {
    consolidateTabsLocked_();
    var sheet = getOrCreateSheet_();
    var entries = readRows_(sheet);

    if (!allowOverwrite) {
      var existing = findEntry_(entries, date, 'work');
      if (existing) {
        return {
          needsConfirmation: true,
          isError: false,
          message: 'You already put in hours for ' + formatDateLabel_(date) + ': ' +
            describeEntry_(existing) + '. Do you want to put in the new time (' +
            describeEntry_(entry) + ') instead?'
        };
      }
    }

    var result = insertWorkEntry_(entries, entry);
    writeRows_(sheet, result.entries);

    var message = (result.replaced ? 'Updated ' : 'Saved ') + formatDateLabel_(date) +
      '. You worked ' + formatMinutesLabel_(work.workedMinutes) +
      (work.breakMinutes > 0 ? ' with ' + formatMinutesLabel_(work.breakMinutes) + ' of breaks.' : '.');

    return summarize_(message);
  } finally {
    lock.releaseLock();
  }
}

function addVacationDay(dateString, useOvertime) {
  var date = parseDateString_(dateString);
  if (!date) {
    throw new Error('Please pick a valid date.');
  }

  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    throw new Error('Another save is still running. Please wait a moment and try again.');
  }
  try {
    consolidateTabsLocked_();
    var sheet = getOrCreateSheet_();
    var entries = readRows_(sheet);

    if (useOvertime) {
      var totals = computeTotals_(entries, new Date());
      if (totals.overtimeAvailable < VACATION_OVERTIME_COST) {
        throw new Error(
          'Not enough overtime. A vacation day needs ' + VACATION_OVERTIME_COST +
          ' overtime hours and you have ' + formatMinutesLabel_(Math.round(totals.overtimeAvailable * 60)) + '.'
        );
      }
    }

    var result = insertVacationEntry_(entries, date, useOvertime);
    writeRows_(sheet, result.entries);

    var message = useOvertime
      ? 'Vacation day saved for ' + formatDateLabel_(date) + ' using ' + VACATION_OVERTIME_COST + ' overtime hours.'
      : 'Vacation day saved for ' + formatDateLabel_(date) + '.';

    return summarize_(message);
  } finally {
    lock.releaseLock();
  }
}

function getSummary(message) {
  consolidateIfNeeded_();
  ensureBackupTrigger_();
  return summarize_(message);
}

function summarize_(message) {
  var entries = readRows_(getOrCreateSheet_());
  var totals = computeTotals_(entries, new Date());

  var recent = [];
  for (var i = entries.length - 1; i >= 0 && recent.length < 5; i--) {
    var entry = entries[i];
    var line = formatDateLabel_(entry.date);
    if (entry.kind === 'vacation') {
      line += ' • Vacation day' + (entry.useOvertime ? ' • paid with overtime' : '');
    } else {
      if (entry.startMin !== null && entry.endMin !== null) {
        line += ' • ' + formatTime_(entry.startMin) + ' to ' + formatTime_(entry.endMin);
      }
      line += ' • ' + formatMinutesLabel_(Math.round(entry.hours * 60));
    }
    recent.push(line);
  }

  var vacationCount = 0;
  entries.forEach(function (entry) {
    if (entry.kind === 'vacation') {
      vacationCount++;
    }
  });

  var backup = getBackupStatus_();

  return {
    message: String(message || ''),
    isError: false,
    weekLabel: formatDateLabel_(totals.weekStart) + ' to ' + formatDateLabel_(totals.weekEnd),
    weekTotalLabel: formatMinutesLabel_(Math.round(totals.weekTotal * 60)),
    weekLimit: WEEKLY_LIMIT_HOURS,
    overtimeEarnedLabel: formatMinutesLabel_(Math.round(totals.overtimeEarned * 60)),
    overtimeUsedLabel: formatMinutesLabel_(Math.round(totals.overtimeUsed * 60)),
    overtimeAvailableLabel: formatMinutesLabel_(Math.round(totals.overtimeAvailable * 60)),
    vacationDays: vacationCount,
    recentEntries: recent,
    sheetUrl: SpreadsheetApp.getActiveSpreadsheet().getUrl(),
    backupsOn: backup.on,
    lastBackup: backup.last
  };
}

/* ---------- Pure logic (no spreadsheet access, testable) ---------- */

function parseDateString_(value) {
  if (value && typeof value.getFullYear === 'function' && !isNaN(value.getTime())) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }

  var match = /^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(String(value || '').trim());
  if (!match) {
    return null;
  }

  var year = Number(match[1]);
  var month = Number(match[2]);
  var day = Number(match[3]);
  var date = new Date(year, month - 1, day);

  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    return null;
  }
  return date;
}

function parseTimeString_(value) {
  if (value && typeof value.getHours === 'function' && !isNaN(value.getTime())) {
    return value.getHours() * 60 + value.getMinutes();
  }

  var match = /^(\d{1,2}):(\d{2})$/.exec(String(value || '').trim());
  if (!match) {
    return null;
  }

  var hours = Number(match[1]);
  var minutes = Number(match[2]);
  if (hours > 23 || minutes > 59) {
    return null;
  }
  return hours * 60 + minutes;
}

function computeWork_(startMin, endMin, breakRanges) {
  if (endMin <= startMin) {
    throw new Error('The end time must be after the start time.');
  }

  var sorted = breakRanges.slice().sort(function (a, b) {
    return a.startMin - b.startMin;
  });

  for (var i = 0; i < sorted.length; i++) {
    if (sorted[i].endMin <= sorted[i].startMin) {
      throw new Error('A break must end after it starts.');
    }
    if (sorted[i].startMin < startMin || sorted[i].endMin > endMin) {
      throw new Error('Breaks must be between the start time and the end time.');
    }
  }

  var breakMinutes = 0;
  var currentStart = null;
  var currentEnd = null;

  sorted.forEach(function (range) {
    if (currentEnd === null) {
      currentStart = range.startMin;
      currentEnd = range.endMin;
    } else if (range.startMin <= currentEnd) {
      currentEnd = Math.max(currentEnd, range.endMin);
    } else {
      breakMinutes += currentEnd - currentStart;
      currentStart = range.startMin;
      currentEnd = range.endMin;
    }
  });
  if (currentEnd !== null) {
    breakMinutes += currentEnd - currentStart;
  }

  var workedMinutes = (endMin - startMin) - breakMinutes;
  if (workedMinutes <= 0) {
    throw new Error('The breaks cover the whole work time.');
  }

  return { workedMinutes: workedMinutes, breakMinutes: breakMinutes };
}

function sameDay_(a, b) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function findEntry_(entries, date, kind) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].kind === kind && sameDay_(entries[i].date, date)) {
      return entries[i];
    }
  }
  return null;
}

function sortEntries_(entries) {
  entries.sort(function (a, b) {
    var diff = a.date.getTime() - b.date.getTime();
    if (diff !== 0) {
      return diff;
    }
    return (a.kind === 'work' ? 0 : 1) - (b.kind === 'work' ? 0 : 1);
  });
  return entries;
}

function insertWorkEntry_(entries, entry) {
  var updated = [];
  var replaced = false;

  entries.forEach(function (existing) {
    if (existing.kind === 'work' && sameDay_(existing.date, entry.date)) {
      replaced = true;
    } else {
      updated.push(existing);
    }
  });

  updated.push(entry);
  return { entries: sortEntries_(updated), replaced: replaced };
}

function insertVacationEntry_(entries, date, useOvertime) {
  if (findEntry_(entries, date, 'vacation')) {
    throw new Error(formatDateLabel_(date) + ' is already saved as a vacation day.');
  }

  var updated = entries.concat([{ kind: 'vacation', date: date, useOvertime: !!useOvertime }]);
  return { entries: sortEntries_(updated) };
}

function startOfWeek_(date) {
  var result = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  var day = result.getDay();
  var offset = day === 0 ? 6 : day - 1;
  result.setDate(result.getDate() - offset);
  return result;
}

function computeTotals_(entries, today) {
  var totalsByWeek = {};
  var overtimeUsed = 0;

  entries.forEach(function (entry) {
    if (entry.kind === 'work') {
      var key = startOfWeek_(entry.date).getTime();
      totalsByWeek[key] = (totalsByWeek[key] || 0) + entry.hours;
    } else if (entry.kind === 'vacation' && entry.useOvertime) {
      overtimeUsed += VACATION_OVERTIME_COST;
    }
  });

  var overtimeEarned = 0;
  Object.keys(totalsByWeek).forEach(function (key) {
    overtimeEarned += Math.max(0, totalsByWeek[key] - WEEKLY_LIMIT_HOURS);
  });

  var weekStart = startOfWeek_(today);
  var weekEnd = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate() + 6);

  return {
    weekStart: weekStart,
    weekEnd: weekEnd,
    weekTotal: totalsByWeek[weekStart.getTime()] || 0,
    overtimeEarned: overtimeEarned,
    overtimeUsed: overtimeUsed,
    overtimeAvailable: overtimeEarned - overtimeUsed
  };
}

function formatTime_(totalMinutes) {
  var hours = Math.floor(totalMinutes / 60);
  var minutes = totalMinutes % 60;
  return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
}

function formatMinutesLabel_(totalMinutes) {
  var rounded = Math.round(totalMinutes);
  var hours = Math.floor(rounded / 60);
  var minutes = rounded % 60;
  if (hours === 0) {
    return minutes + ' min';
  }
  if (minutes === 0) {
    return hours + ' h';
  }
  return hours + ' h ' + minutes + ' min';
}

function formatBreaksText_(breakRanges) {
  return breakRanges.map(function (range) {
    return formatTime_(range.startMin) + '-' + formatTime_(range.endMin);
  }).join(', ');
}

function parseBreaksText_(value) {
  var text = String(value || '').trim();
  if (!text) {
    return [];
  }

  var ranges = [];
  text.split(',').forEach(function (part) {
    var match = /^(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})$/.exec(part.trim());
    if (!match) {
      return;
    }
    var startMin = parseTimeString_(match[1]);
    var endMin = parseTimeString_(match[2]);
    if (startMin !== null && endMin !== null) {
      ranges.push({ startMin: startMin, endMin: endMin });
    }
  });
  return ranges;
}

function formatDateLabel_(date) {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return days[date.getDay()] + ' ' + date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();
}

function describeEntry_(entry) {
  var text = '';
  if (entry.startMin !== null && entry.endMin !== null) {
    text = formatTime_(entry.startMin) + ' to ' + formatTime_(entry.endMin) + ', ';
  }
  return text + formatMinutesLabel_(Math.round(entry.hours * 60));
}

/* ---------- Spreadsheet access, one single tab ---------- */

function getOrCreateSheet_() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME, 0);
  }
  if (sheet.getFrozenRows() === 0) {
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function readRows_(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return [];
  }

  var values = sheet.getRange(2, 1, lastRow - 1, SHEET_HEADERS.length).getValues();
  var entries = [];

  values.forEach(function (row) {
    var date = parseDateString_(row[0]);
    if (!date) {
      return;
    }

    if (String(row[5] || '').toLowerCase() === 'yes') {
      entries.push({
        kind: 'vacation',
        date: date,
        useOvertime: String(row[6] || '').toLowerCase() === 'yes'
      });
      return;
    }

    var hours = Number(row[4]);
    if (!isFinite(hours) || hours <= 0) {
      return;
    }

    entries.push({
      kind: 'work',
      date: date,
      startMin: parseTimeString_(row[1]),
      endMin: parseTimeString_(row[2]),
      breaks: parseBreaksText_(row[3]),
      hours: hours
    });
  });

  return entries;
}

function writeRows_(sheet, entries) {
  sheet.getRange(1, 1, 1, SHEET_HEADERS.length).setValues([SHEET_HEADERS]).setFontWeight('bold');

  var lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, SHEET_HEADERS.length).clearContent();
  }
  if (!entries.length) {
    return;
  }

  var rows = entries.map(function (entry) {
    if (entry.kind === 'vacation') {
      return [entry.date, '', '', '', '', 'Yes', entry.useOvertime ? 'Yes' : 'No'];
    }
    return [
      entry.date,
      entry.startMin === null ? '' : formatTime_(entry.startMin),
      entry.endMin === null ? '' : formatTime_(entry.endMin),
      formatBreaksText_(entry.breaks),
      entry.hours,
      '',
      ''
    ];
  });

  sheet.getRange(2, 2, rows.length, 3).setNumberFormat('@');
  sheet.getRange(2, 1, rows.length, SHEET_HEADERS.length).setValues(rows);
  sheet.getRange(2, 1, rows.length, 1).setNumberFormat('ddd d mmm yyyy');
  sheet.getRange(2, 5, rows.length, 1).setNumberFormat('0.##');
}

/* ---------- One-time merge of every old tab into the single tab ---------- */

var CONSOLIDATED_FLAG = 'tabsConsolidated_v1';

function consolidateIfNeeded_() {
  try {
    if (PropertiesService.getDocumentProperties().getProperty(CONSOLIDATED_FLAG)) {
      return;
    }
    var lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) {
      return;
    }
    try {
      consolidateTabsLocked_();
    } finally {
      lock.releaseLock();
    }
  } catch (ignored) {
    // Never let cleanup block saving or loading.
  }
}

function consolidateTabsLocked_() {
  try {
    var props = PropertiesService.getDocumentProperties();
    if (props.getProperty(CONSOLIDATED_FLAG)) {
      return;
    }

    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var target = getOrCreateSheet_();
    var others = spreadsheet.getSheets().filter(function (sheet) {
      return sheet.getSheetId() !== target.getSheetId();
    });

    if (!others.length) {
      props.setProperty(CONSOLIDATED_FLAG, 'yes');
      return;
    }

    var entries = readRows_(target);

    // Rows dated more than a year ahead are old test junk and get dropped.
    var horizon = new Date();
    horizon.setFullYear(horizon.getFullYear() + 1);

    others.forEach(function (sheet) {
      var values = sheet.getDataRange().getValues();
      var isVacationTab = values.length > 0 &&
        String(values[0][1] || '').toLowerCase().indexOf('used') === 0;

      for (var r = 1; r < values.length; r++) {
        var row = values[r];
        var date = parseDateString_(row[0]);
        if (!date || date.getTime() > horizon.getTime()) {
          continue;
        }

        if (isVacationTab || String(row[5] || '').toLowerCase() === 'yes') {
          if (!findEntry_(entries, date, 'vacation')) {
            var overtimeFlag = isVacationTab ? row[1] : row[6];
            entries.push({
              kind: 'vacation',
              date: date,
              useOvertime: String(overtimeFlag || '').toLowerCase() === 'yes'
            });
          }
          continue;
        }

        var startMin = parseTimeString_(row[1]);
        var endMin = parseTimeString_(row[2]);
        var breaks = parseBreaksText_(row[3]);
        var hours = Number(row[4]);

        if (!isFinite(hours) || hours <= 0) {
          // The very first version kept plain hours in the second column.
          var legacyHours = Number(row[1]);
          if (startMin === null && isFinite(legacyHours) && legacyHours > 0) {
            hours = legacyHours;
            endMin = null;
            breaks = [];
          } else {
            continue;
          }
        }

        if (!findEntry_(entries, date, 'work')) {
          entries.push({
            kind: 'work',
            date: date,
            startMin: startMin,
            endMin: endMin,
            breaks: breaks,
            hours: hours
          });
        }
      }
    });

    // Write the merged data first. Old tabs are only deleted after this
    // write succeeds, so a failure can never lose data.
    writeRows_(target, sortEntries_(entries));

    others.forEach(function (sheet) {
      spreadsheet.deleteSheet(sheet);
    });

    props.setProperty(CONSOLIDATED_FLAG, 'yes');
  } catch (ignored) {
    // Never let cleanup block saving or loading. Without the flag set,
    // it simply tries again on the next load.
  }
}

/* ---------- Daily backup into a Drive folder ---------- */

function ensureBackupTrigger_() {
  try {
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
      if (triggers[i].getHandlerFunction() === 'dailyBackup') {
        return;
      }
    }
    ScriptApp.newTrigger('dailyBackup').timeBased().everyDays(1).atHour(3).create();
    // Take the first backup right away so it is visible immediately.
    dailyBackup();
  } catch (ignored) {
    // Trigger setup must never block the app.
  }
}

function getBackupStatus_() {
  try {
    var on = false;
    var triggers = ScriptApp.getProjectTriggers();
    for (var i = 0; i < triggers.length; i++) {
      if (triggers[i].getHandlerFunction() === 'dailyBackup') {
        on = true;
        break;
      }
    }
    if (!on) {
      return { on: false, last: '' };
    }

    var last = PropertiesService.getScriptProperties().getProperty(LAST_BACKUP_PROP) || '';
    return { on: true, last: last };
  } catch (ignored) {
    return { on: false, last: '' };
  }
}

function dailyBackup() {
  var today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
  var month = today.slice(0, 7);
  var root = topFolder_(BACKUP_ROOT_FOLDER);

  backupInto_(root, WORK_BACKUP_SUBFOLDER, month,
    'Work Hours backup ' + today, SpreadsheetApp.getActiveSpreadsheet().getId());

  var familyId = PropertiesService.getScriptProperties().getProperty(FAMILY_SHEET_PROP);
  if (familyId) {
    backupInto_(root, FAMILY_BACKUP_SUBFOLDER, month, 'Family To-Do backup ' + today, familyId);
  }

  var clientId = PropertiesService.getScriptProperties().getProperty(CLIENT_SHEET_PROP);
  if (clientId) {
    backupInto_(root, CLIENT_BACKUP_SUBFOLDER, month, 'Client Hours backup ' + today, clientId);
  }

  PropertiesService.getScriptProperties().setProperty(LAST_BACKUP_PROP, today);
}

function backupInto_(root, subfolderName, month, fileName, fileId) {
  var monthFolder = childFolder_(childFolder_(root, subfolderName), month);
  if (monthFolder.getFilesByName(fileName).hasNext()) {
    return;
  }
  DriveApp.getFileById(fileId).makeCopy(fileName, monthFolder);
}

function topFolder_(name) {
  var folders = DriveApp.getFoldersByName(name);
  if (folders.hasNext()) {
    return folders.next();
  }
  return DriveApp.createFolder(name);
}

function childFolder_(parent, name) {
  var folders = parent.getFoldersByName(name);
  if (folders.hasNext()) {
    return folders.next();
  }
  return parent.createFolder(name);
}

/* ---------- Family To-Do ---------- */

function getFamilies() {
  return familiesPayload_(getFamilySheet_(), '');
}

function addFamily(name) {
  var familyName = String(name || '').trim();
  if (!familyName) {
    throw new Error('Please type a family name.');
  }

  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    throw new Error('Another save is still running. Please wait a moment and try again.');
  }
  try {
    var sheet = getFamilySheet_();
    var rows = readFamilyRows_(sheet);

    for (var i = 0; i < rows.length; i++) {
      if (rows[i].family.toLowerCase() === familyName.toLowerCase()) {
        throw new Error('The family "' + rows[i].family + '" is already on the list.');
      }
    }

    rows.push({ family: familyName, task: '', done: false, id: '' });
    writeFamilyRows_(sheet, rows);
    return familiesPayload_(sheet, 'Added the family "' + familyName + '".');
  } finally {
    lock.releaseLock();
  }
}

function addTask(familyName, text) {
  var taskText = String(text || '').trim();
  if (!taskText) {
    throw new Error('Please type what needs to be done.');
  }

  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    throw new Error('Another save is still running. Please wait a moment and try again.');
  }
  try {
    var sheet = getFamilySheet_();
    var rows = insertTask_(readFamilyRows_(sheet), String(familyName || ''), {
      task: taskText,
      done: false,
      id: newId_()
    });
    writeFamilyRows_(sheet, rows);
    return familiesPayload_(sheet, 'Added a to-do for ' + familyName + '.');
  } finally {
    lock.releaseLock();
  }
}

function setTaskDone(id, done) {
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    throw new Error('Another save is still running. Please wait a moment and try again.');
  }
  try {
    var sheet = getFamilySheet_();
    var rows = setDone_(readFamilyRows_(sheet), String(id || ''), !!done);
    writeFamilyRows_(sheet, rows);
    return familiesPayload_(sheet, '');
  } finally {
    lock.releaseLock();
  }
}

/* ----- pure family logic (testable) ----- */

function groupFamilies_(rows) {
  var families = [];
  var byKey = {};

  rows.forEach(function (row) {
    var key = row.family.toLowerCase();
    var family = byKey[key];
    if (!family) {
      family = { name: row.family, tasks: [] };
      byKey[key] = family;
      families.push(family);
    }
    if (row.task) {
      family.tasks.push({ id: row.id, text: row.task, done: row.done });
    }
  });

  return families;
}

function insertTask_(rows, familyName, taskRow) {
  var key = String(familyName || '').trim().toLowerCase();
  var lastIndex = -1;
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].family.toLowerCase() === key) {
      lastIndex = i;
    }
  }
  if (lastIndex === -1) {
    throw new Error('That family is not on the list any more. Please reload the page.');
  }

  var updated = rows.slice();
  updated.splice(lastIndex + 1, 0, {
    family: rows[lastIndex].family,
    task: taskRow.task,
    done: !!taskRow.done,
    id: taskRow.id
  });
  return updated;
}

function setDone_(rows, id, done) {
  var found = false;
  var updated = rows.map(function (row) {
    if (row.task && row.id === id) {
      found = true;
      return { family: row.family, task: row.task, done: done, id: row.id };
    }
    return row;
  });
  if (!found) {
    throw new Error('That to-do was not found. Please reload the page.');
  }
  return updated;
}

function newId_() {
  return String(new Date().getTime()) + '-' + Math.floor(Math.random() * 1000000);
}

/* ----- family spreadsheet access ----- */

var FAMILY_HEADERS = ['Family', 'To-do', 'Done', 'Id'];

function getFamilySheet_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty(FAMILY_SHEET_PROP);
  var spreadsheet = null;

  if (id) {
    try {
      spreadsheet = SpreadsheetApp.openById(id);
    } catch (gone) {
      spreadsheet = null;
    }
  }
  if (!spreadsheet) {
    spreadsheet = SpreadsheetApp.create('Family To-Do');
    props.setProperty(FAMILY_SHEET_PROP, spreadsheet.getId());
  }

  var sheet = spreadsheet.getSheets()[0];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(FAMILY_HEADERS);
    sheet.getRange(1, 1, 1, FAMILY_HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function readFamilyRows_(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return [];
  }

  var values = sheet.getRange(2, 1, lastRow - 1, FAMILY_HEADERS.length).getValues();
  var rows = [];

  values.forEach(function (row) {
    var family = String(row[0] || '').trim();
    if (!family) {
      return;
    }
    rows.push({
      family: family,
      task: String(row[1] || '').trim(),
      done: String(row[2] || '').toLowerCase() === 'yes',
      id: String(row[3] || '')
    });
  });

  return rows;
}

function writeFamilyRows_(sheet, rows) {
  sheet.getRange(1, 1, 1, FAMILY_HEADERS.length).setValues([FAMILY_HEADERS]).setFontWeight('bold');

  var lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, FAMILY_HEADERS.length).clearContent();
  }
  if (!rows.length) {
    return;
  }

  var values = rows.map(function (row) {
    return [row.family, row.task, row.task ? (row.done ? 'Yes' : 'No') : '', row.id];
  });

  var range = sheet.getRange(2, 1, values.length, FAMILY_HEADERS.length);
  range.setNumberFormat('@');
  range.setValues(values);
}

function familiesPayload_(sheet, message) {
  return {
    families: groupFamilies_(readFamilyRows_(sheet)),
    sheetUrl: sheet.getParent().getUrl(),
    message: String(message || '')
  };
}

/* ---------- Client hours ---------- */

function getClients() {
  return clientsPayload_(getClientSpreadsheet_(), '');
}

function addClient(name, weeklyHours) {
  var clientName = String(name || '').trim();
  if (!clientName) {
    throw new Error('Please type a client name.');
  }

  var weekly = parseHoursValue_(weeklyHours);
  if (weekly === null) {
    throw new Error('Please fill in the weekly hours like 5:00.');
  }

  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    throw new Error('Another save is still running. Please wait a moment and try again.');
  }
  try {
    var spreadsheet = getClientSpreadsheet_();
    var listSheet = clientListSheet_(spreadsheet);
    var clients = readClientList_(listSheet);

    for (var i = 0; i < clients.length; i++) {
      if (clients[i].name.toLowerCase() === clientName.toLowerCase()) {
        throw new Error('The client "' + clients[i].name + '" is already on the list.');
      }
    }

    var today = new Date();
    clients.push({
      name: clientName,
      weeklyHours: weekly,
      startDate: new Date(today.getFullYear(), today.getMonth(), today.getDate())
    });
    writeClientList_(listSheet, clients);
    return clientsPayload_(spreadsheet, 'Added the client "' + clientName + '".');
  } finally {
    lock.releaseLock();
  }
}

function addClientHours(name, dateString, hours) {
  var date = parseDateString_(dateString);
  if (!date) {
    throw new Error('Please pick a valid date.');
  }

  var value = parseHoursValue_(hours);
  if (value === null) {
    throw new Error('Please fill in the hours you worked like 4:30.');
  }

  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) {
    throw new Error('Another save is still running. Please wait a moment and try again.');
  }
  try {
    var spreadsheet = getClientSpreadsheet_();
    var clients = readClientList_(clientListSheet_(spreadsheet));

    var client = null;
    for (var i = 0; i < clients.length; i++) {
      if (clients[i].name.toLowerCase() === String(name || '').trim().toLowerCase()) {
        client = clients[i];
        break;
      }
    }
    if (!client) {
      throw new Error('That client is not on the list any more. Please reload the page.');
    }

    var logSheet = clientLogSheet_(spreadsheet);
    var weekStart = startOfWeek_(date);
    var logs = upsertClientLog_(readClientLogs_(logSheet), client.name, weekStart, value);
    writeClientLogs_(logSheet, logs);

    var message = 'Added ' + formatMinutesLabel_(Math.round(value * 60)) + ' for ' +
      client.name + ' in the week of ' + formatDateLabel_(weekStart) + '.';
    return clientsPayload_(spreadsheet, message);
  } finally {
    lock.releaseLock();
  }
}

/* ----- pure client logic (testable) ----- */

function parseHoursValue_(value) {
  var text = String(value === undefined || value === null ? '' : value).trim();
  if (!text) {
    return null;
  }

  var num;
  var match = /^(\d{1,3}):([0-5]?\d)$/.exec(text);
  if (match) {
    num = Number(match[1]) + Number(match[2]) / 60;
  } else if (/^\d{1,3}$/.test(text)) {
    num = Number(text);
  } else {
    return null;
  }

  if (!isFinite(num) || num <= 0 || num > 24 * 7) {
    return null;
  }
  // Stored as hours, rounded to the nearest whole minute.
  return Math.round(num * 60) / 60;
}

function upsertClientLog_(logs, clientName, weekStart, hours) {
  var key = clientName.toLowerCase();
  var updated = logs.slice();

  for (var i = 0; i < updated.length; i++) {
    if (updated[i].client.toLowerCase() === key && sameDay_(updated[i].weekStart, weekStart)) {
      updated[i] = {
        client: updated[i].client,
        weekStart: updated[i].weekStart,
        hours: updated[i].hours + hours
      };
      return updated;
    }
  }

  updated.push({ client: clientName, weekStart: weekStart, hours: hours });
  updated.sort(function (a, b) {
    var diff = a.weekStart.getTime() - b.weekStart.getTime();
    if (diff !== 0) {
      return diff;
    }
    return a.client.localeCompare(b.client);
  });
  return updated;
}

function computeClientTotals_(client, logs, today) {
  var weekStart = startOfWeek_(today);
  var firstWeek = startOfWeek_(client.startDate);
  var weekMs = 7 * 24 * 60 * 60 * 1000;

  // Rounded, not floored, so a daylight saving shift cannot lose a week.
  var weeksCount = Math.round((weekStart.getTime() - firstWeek.getTime()) / weekMs) + 1;
  if (weeksCount < 1) {
    weeksCount = 1;
  }

  var workedTotal = 0;
  var workedThisWeek = 0;
  logs.forEach(function (log) {
    if (log.client.toLowerCase() !== client.name.toLowerCase()) {
      return;
    }
    workedTotal += log.hours;
    if (sameDay_(log.weekStart, weekStart)) {
      workedThisWeek += log.hours;
    }
  });

  var workedBefore = workedTotal - workedThisWeek;
  var carry = (weeksCount - 1) * client.weeklyHours - workedBefore;
  var owedThisWeek = Math.max(0, client.weeklyHours + carry);
  var remainingThisWeek = Math.max(0, owedThisWeek - workedThisWeek);

  return {
    weekStart: weekStart,
    carry: carry,
    workedThisWeek: workedThisWeek,
    owedThisWeek: owedThisWeek,
    remainingThisWeek: remainingThisWeek
  };
}

/* ----- client spreadsheet access ----- */

var CLIENT_LIST_HEADERS = ['Client', 'Weekly hours', 'Start date'];
var CLIENT_LOG_HEADERS = ['Client', 'Week of', 'Hours worked'];

function getClientSpreadsheet_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty(CLIENT_SHEET_PROP);
  var spreadsheet = null;

  if (id) {
    try {
      spreadsheet = SpreadsheetApp.openById(id);
    } catch (gone) {
      spreadsheet = null;
    }
  }
  if (!spreadsheet) {
    spreadsheet = SpreadsheetApp.create(CLIENT_SPREADSHEET_NAME);
    spreadsheet.getSheets()[0].setName('Clients');
    props.setProperty(CLIENT_SHEET_PROP, spreadsheet.getId());
  }

  clientListSheet_(spreadsheet);
  clientLogSheet_(spreadsheet);
  return spreadsheet;
}

function clientListSheet_(spreadsheet) {
  return clientTab_(spreadsheet, 'Clients', CLIENT_LIST_HEADERS, 0);
}

function clientLogSheet_(spreadsheet) {
  return clientTab_(spreadsheet, 'Hours', CLIENT_LOG_HEADERS, 1);
}

function clientTab_(spreadsheet, name, headers, position) {
  var sheet = spreadsheet.getSheetByName(name);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(name, position);
  }
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function readClientList_(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return [];
  }

  var values = sheet.getRange(2, 1, lastRow - 1, CLIENT_LIST_HEADERS.length).getValues();
  var clients = [];

  values.forEach(function (row) {
    var name = String(row[0] || '').trim();
    var weekly = Number(row[1]);
    if (!name || !isFinite(weekly) || weekly <= 0) {
      return;
    }
    var startDate = parseDateString_(row[2]);
    if (!startDate) {
      var today = new Date();
      startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    }
    clients.push({ name: name, weeklyHours: weekly, startDate: startDate });
  });

  return clients;
}

function writeClientList_(sheet, clients) {
  sheet.getRange(1, 1, 1, CLIENT_LIST_HEADERS.length).setValues([CLIENT_LIST_HEADERS]).setFontWeight('bold');

  var lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, CLIENT_LIST_HEADERS.length).clearContent();
  }
  if (!clients.length) {
    return;
  }

  var rows = clients.map(function (client) {
    return [client.name, client.weeklyHours, client.startDate];
  });

  sheet.getRange(2, 1, rows.length, CLIENT_LIST_HEADERS.length).setValues(rows);
  sheet.getRange(2, 2, rows.length, 1).setNumberFormat('0.##');
  sheet.getRange(2, 3, rows.length, 1).setNumberFormat('ddd d mmm yyyy');
}

function readClientLogs_(sheet) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) {
    return [];
  }

  var values = sheet.getRange(2, 1, lastRow - 1, CLIENT_LOG_HEADERS.length).getValues();
  var logs = [];

  values.forEach(function (row) {
    var client = String(row[0] || '').trim();
    var date = parseDateString_(row[1]);
    var hours = Number(row[2]);
    if (!client || !date || !isFinite(hours) || hours <= 0) {
      return;
    }
    logs.push({ client: client, weekStart: startOfWeek_(date), hours: hours });
  });

  return logs;
}

function writeClientLogs_(sheet, logs) {
  sheet.getRange(1, 1, 1, CLIENT_LOG_HEADERS.length).setValues([CLIENT_LOG_HEADERS]).setFontWeight('bold');

  var lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, CLIENT_LOG_HEADERS.length).clearContent();
  }
  if (!logs.length) {
    return;
  }

  var rows = logs.map(function (log) {
    return [log.client, log.weekStart, log.hours];
  });

  sheet.getRange(2, 1, rows.length, CLIENT_LOG_HEADERS.length).setValues(rows);
  sheet.getRange(2, 2, rows.length, 1).setNumberFormat('ddd d mmm yyyy');
  sheet.getRange(2, 3, rows.length, 1).setNumberFormat('0.##');
}

function clientsPayload_(spreadsheet, message) {
  var clients = readClientList_(clientListSheet_(spreadsheet));
  var logs = readClientLogs_(clientLogSheet_(spreadsheet));
  var today = new Date();

  var items = clients.map(function (client) {
    var totals = computeClientTotals_(client, logs, today);
    return {
      name: client.name,
      weeklyLabel: formatMinutesLabel_(Math.round(client.weeklyHours * 60)),
      owedLabel: formatMinutesLabel_(Math.round(totals.owedThisWeek * 60)),
      workedLabel: formatMinutesLabel_(Math.round(totals.workedThisWeek * 60)),
      remainingLabel: formatMinutesLabel_(Math.round(totals.remainingThisWeek * 60)),
      carryHours: totals.carry,
      carryLabel: formatMinutesLabel_(Math.round(Math.abs(totals.carry) * 60))
    };
  });

  return {
    clients: items,
    sheetUrl: spreadsheet.getUrl(),
    message: String(message || '')
  };
}

/* ---------- Result pages for form submissions from the website ---------- */

function summaryPage_(summary) {
  var isError = !!summary.isError;
  var title = isError ? 'Oops' : 'Saved!';

  var statsHtml = '';
  var sheetLink = '';
  if (!isError) {
    statsHtml =
      '<dl>' +
      statRow_('This week', summary.weekTotalLabel + ' of ' + summary.weekLimit + ' h') +
      statRow_('Overtime you can use', summary.overtimeAvailableLabel) +
      statRow_('Overtime earned all time', summary.overtimeEarnedLabel) +
      statRow_('Overtime used on vacation', summary.overtimeUsedLabel) +
      statRow_('Vacation days', String(summary.vacationDays)) +
      '</dl>';
    if (summary.sheetUrl) {
      sheetLink = '<a class="sheet" target="_blank" rel="noopener" href="' + escapeHtml_(summary.sheetUrl) + '">Open the Google Sheet</a>';
    }
    if (summary.backupsOn) {
      sheetLink += '<p class="backup">' + escapeHtml_(
        summary.lastBackup
          ? 'Backups are on. Last backup ' + summary.lastBackup + '.'
          : 'Backups are on. First backup is on its way.'
      ) + '</p>';
    }
  }

  var html =
    '<!doctype html><html lang="en"><head><base target="_top"><meta charset="utf-8">' +
    '<title>' + title + '</title>' +
    '<style>' +
    'body{font-family:Arial,Helvetica,sans-serif;max-width:440px;margin:0 auto;padding:24px 20px;background:#fdf1f3;color:#3d2228;font-size:19px;line-height:1.45;}' +
    'p.msg{font-size:22px;font-weight:800;padding:18px;border-radius:14px;margin:0 0 18px;color:#ffffff;' +
    (isError ? 'background:#9f1220;' : 'background:#dd3d45;') + '}' +
    'dl{margin:0 0 18px;background:#ffffff;border:3px solid #f0a8b4;border-radius:14px;padding:16px 18px;}' +
    'dt{font-size:15px;color:#8a4a57;margin-top:12px;}dt:first-child{margin-top:0;}' +
    'dd{margin:2px 0 0;font-size:22px;font-weight:800;color:#3d2228;}' +
    'button{min-height:58px;width:100%;border:0;border-radius:14px;font-size:21px;font-weight:800;color:#fff;background:#e96b12;cursor:pointer;margin-bottom:14px;}' +
    'a.sheet{display:block;text-align:center;padding:16px;border:3px solid #dd3d45;border-radius:14px;background:#ffffff;color:#dd3d45;font-size:19px;font-weight:800;text-decoration:none;}' +
    'p.backup{margin:14px 0 0;text-align:center;font-size:14px;color:#8a4a57;}' +
    '</style></head><body>' +
    '<p class="msg">' + escapeHtml_(summary.message) + '</p>' +
    statsHtml +
    '<button onclick="history.back()">Go back</button>' +
    sheetLink +
    '</body></html>';

  return HtmlService.createHtmlOutput(html)
    .setTitle(title)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function confirmPage_(info, params, multi) {
  var query = 'date=' + encodeURIComponent(params.date) +
    '&start=' + encodeURIComponent(params.start) +
    '&end=' + encodeURIComponent(params.end);

  (multi.breakStart || []).forEach(function (value) {
    query += '&breakStart=' + encodeURIComponent(value);
  });
  (multi.breakEnd || []).forEach(function (value) {
    query += '&breakEnd=' + encodeURIComponent(value);
  });
  query += '&overwrite=1';

  var yesUrl = ScriptApp.getService().getUrl() + '?' + query;

  var html =
    '<!doctype html><html lang="en"><head><base target="_top"><meta charset="utf-8">' +
    '<title>Are you sure?</title>' +
    '<style>' +
    'body{font-family:Arial,Helvetica,sans-serif;max-width:440px;margin:0 auto;padding:24px 20px;background:#fdf1f3;color:#3d2228;font-size:19px;line-height:1.45;}' +
    'p.msg{font-size:22px;font-weight:800;padding:18px;border-radius:14px;margin:0 0 18px;background:#ffffff;border:3px solid #e96b12;color:#3d2228;}' +
    'a.yes{display:block;text-align:center;min-height:58px;padding:16px;border-radius:14px;font-size:21px;font-weight:800;color:#fff;background:#dd3d45;text-decoration:none;margin-bottom:14px;}' +
    'button{min-height:58px;width:100%;border:3px solid #dd3d45;border-radius:14px;font-size:21px;font-weight:800;color:#dd3d45;background:#ffffff;cursor:pointer;}' +
    '</style></head><body>' +
    '<p class="msg">' + escapeHtml_(info.message) + '</p>' +
    '<a class="yes" href="' + escapeHtml_(yesUrl) + '">Yes, put in the new time</a>' +
    '<button onclick="history.back()">No, keep the old time</button>' +
    '</body></html>';

  return HtmlService.createHtmlOutput(html)
    .setTitle('Are you sure?')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function statRow_(label, value) {
  return '<dt>' + escapeHtml_(label) + '</dt><dd>' + escapeHtml_(value) + '</dd>';
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
