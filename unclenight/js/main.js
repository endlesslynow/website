/* The game: switching the computer on, searching, watching, and keeping
   track of what has been seen. There is no ending: the player searches and
   watches for as long as they like. */
(function () {
  'use strict';

  var CONFIG = {
    // Which voices play. 'ir': Microsoft's Iranian voices, respelled to
    // sound closer to Dari. 'af': Microsoft's Afghan voices, which are
    // built for Pashto, reading the Dari lines. Add #af or #ir to the
    // address to switch while testing.
    voice: 'ir',
    maxResults: 5,
    // where what the player has seen is remembered in the browser; the
    // demo uses 'jinn.', so the two never mix
    store: 'unclenight.'
  };

  var DATA = window.JINN_DATA;
  var RECS = {};
  DATA.recordings.forEach(function (r) { RECS[r.id] = r; });
  var TOTAL = DATA.recordings.length;
  var engine = JinnSearch.create(DATA.recordings, JinnLexicon);
  var sound = JinnSound;

  // ---------- small helpers ----------
  var $ = function (id) { return document.getElementById(id); };
  var FA = '۰۱۲۳۴۵۶۷۸۹';
  // where each recording was made, as the camcorder writes it over the
  // picture (words spoken in the recordings)
  var PLACE_NAMES = {
    house: 'پیش خانه', snow: 'کوه', courtyard: 'حویلی', canal: 'جوی', room: 'اتاق',
    vineyard: 'باغ تاک', mosque: 'مسجد', orchard: 'باغ', path: 'کوچه', cemetery: 'قبرستان'
  };
  // the person speaking, written at the top of the picture
  var SPEAKER_NAMES = {
    nargis: 'نرگس', aziz: 'عزیز', roqia: 'خاله رقیه', sami: 'سمیع', parwin: 'خاله پروین',
    hamid: 'کاکا حمید', jawad: 'جواد'
  };
  function fa(x) { return String(x).replace(/\d/g, function (d) { return FA[d]; }); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function clock(sec) {
    return fa(pad(Math.floor(sec / 3600) % 24)) + ':' + fa(pad(Math.floor(sec / 60) % 60)) + ':' + fa(pad(sec % 60));
  }
  // The date and time in Kabul now, for the bar at the top of the screen:
  // Kabul is 4½ hours ahead of world time all year, and dates are written
  // in the Afghan solar calendar («۵ میزان ۱۴۰۵»).
  var MONTHS = ['حمل', 'ثور', 'جوزا', 'سرطان', 'اسد', 'سنبله', 'میزان', 'عقرب', 'قوس', 'جدی', 'دلو', 'حوت'];
  function solarDate(gy, gm, gd) {
    var g = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var gy2 = gm > 2 ? gy + 1 : gy;
    var days = 355666 + 365 * gy + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) +
      Math.floor((gy2 + 399) / 400) + gd + g[gm - 1];
    var jy = -1595 + 33 * Math.floor(days / 12053); days %= 12053;
    jy += 4 * Math.floor(days / 1461); days %= 1461;
    if (days > 365) { jy += Math.floor((days - 1) / 365); days = (days - 1) % 365; }
    return days < 186 ? [jy, 1 + Math.floor(days / 31), 1 + days % 31]
      : [jy, 7 + Math.floor((days - 186) / 30), 1 + (days - 186) % 30];
  }
  function kabulNow() {
    var k = new Date(Date.now() + 4.5 * 3600 * 1000);
    var j = solarDate(k.getUTCFullYear(), k.getUTCMonth() + 1, k.getUTCDate());
    $('now-date').textContent = fa(j[2]) + ' ' + MONTHS[j[1] - 1] + ' ' + fa(j[0]);
    $('now-time').textContent = fa(pad(k.getUTCHours())) + ':' + fa(pad(k.getUTCMinutes()));   // no seconds
  }
  function show(id) {
    ['off', 'boot', 'archive', 'player'].forEach(function (v) { $(v).hidden = v !== id; });
  }
  var touch = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  function store(key, value) {
    try {
      if (value === undefined) return JSON.parse(localStorage.getItem(CONFIG.store + key));
      localStorage.setItem(CONFIG.store + key, JSON.stringify(value));
    } catch (e) { return null; }
  }

  // ---------- settings from the address ----------
  var hash = (location.hash || '').slice(1);
  if (hash === 'reset') store('heard', []);
  if ((hash === 'af' || hash === 'ir') && DATA.voiceSets.indexOf(hash) >= 0) CONFIG.voice = hash;
  if (DATA.voiceSets.indexOf(CONFIG.voice) < 0) CONFIG.voice = DATA.voiceSets[0];

  var heard = (store('heard') || []).filter(function (id) { return RECS[id]; });

  // ---------- fitting the monitor to the window ----------
  function fit() {
    // the window's own size, never widened by something sticking out of it
    // (a phone's browser widens innerWidth to fit whatever overflows, which
    // then made the monitor bigger still); on a computer both are the same
    var vw = document.documentElement.clientWidth || window.innerWidth;
    var vh = document.documentElement.clientHeight || window.innerHeight;
    var kbOn = !$('keyboard').hidden;
    // On a phone the monitor sits at the top, the paper under it takes the
    // rest of the height (at least 0.34 screen widths), then a row of keys
    // (44 px, with the gaps and margins 58 px in all), then the keyboard,
    // which spans the whole width. Elsewhere the keyboard matches the
    // monitor and the paper stands to the right of it.
    var narrow = vw < 700;
    var kk = narrow ? (vw - 24) / 650 : 0;
    var tall = 0.75 + 122 / 640 + (kbOn && !narrow ? 210 / 640 : 0) + (narrow ? 0.34 : 0);
    var spare = vh - 24 - (narrow ? 58 : 0) - (kbOn && narrow ? 210 * kk + 10 : 0);
    // wide: the monitor (1.1 screen widths) plus the gap and the paper (0.48)
    var sw = Math.min((vw - 32) / (narrow ? 1.1 : 1.58), spare / tall);
    sw = Math.max(240, Math.floor(sw));
    var k = sw / 640;
    document.documentElement.style.setProperty('--sw', sw + 'px');
    document.documentElement.style.setProperty('--k', k.toFixed(4));
    document.documentElement.style.setProperty('--kk', (narrow ? kk : k).toFixed(4));
    // the recordings are drawn at the screen's real size, so their pixels
    // stay crisp however big the monitor gets
    var cw = Math.max(768, Math.round(sw * (window.devicePixelRatio || 1)));
    ['tv'].forEach(function (id) {
      var c = $(id);
      if (c.width !== cw) { c.width = cw; c.height = Math.round(cw * 0.75); }
    });
    if (sheet) paginate();   // (not yet on the first call, before the paper is set up)
    // resizing wipes a canvas: put a paused or finished picture back
    if (tv && playing && playing.frame && (playing.paused || playing.done))
      tv.draw(playing.frame, { time: performance.now() / 1000, fade: 1, tint: playing.tint });
  }
  window.addEventListener('resize', fit);
  fit();

  // ---------- pictures ----------
  // A scene is made when a recording plays; a thumbnail when it is first
  // shown. Nothing is drawn ahead, so hundreds of recordings start as fast
  // as nine.
  var thumbs = {};
  function sceneFor(id) { return new JinnArt.Scene(RECS[id].place, id, { speaker: RECS[id].speaker }); }
  function thumb(id) {
    if (!thumbs[id]) {
      var src = sceneFor(id).frame(2.2 + id * 0.37, { blink: 0, bob: 0, sway: 0, look: 0, mouth: 0 });
      thumbs[id] = document.createElement('canvas');
      thumbs[id].width = 128; thumbs[id].height = 96;
      thumbs[id].getContext('2d').drawImage(src, 0, 0, 128, 96);
    }
    var c = document.createElement('canvas');
    c.width = 128; c.height = 96;
    c.getContext('2d').drawImage(thumbs[id], 0, 0);
    return c;
  }

  // ---------- the count and the row of seen recordings ----------
  // Up to a dozen recordings: a slot each, with a picture once seen. More
  // than that: a grid of small squares, bright when seen, so hundreds fit.
  function renderSeen(popId) {
    var slots = $('slots');
    slots.textContent = '';
    var many = TOTAL > 12;
    slots.className = many ? 'slots many' : 'slots';
    DATA.recordings.forEach(function (r) {
      var got = heard.indexOf(r.id) >= 0;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = (many ? 'cell' : 'slot') + (got ? ' got' : '') + (popId === r.id ? ' pop' : '');
      b.setAttribute('aria-label', 'فلم ' + fa(r.id));
      if (got) b.addEventListener('click', function () { play(r.id); });
      else b.disabled = true;
      if (!many) {
        if (got) b.appendChild(thumb(r.id));
        var n = document.createElement('span');
        n.textContent = fa(r.id);
        b.appendChild(n);
      } else b.title = fa(r.id);
      slots.appendChild(b);
    });
  }

  function markHeard(id) {
    if (heard.indexOf(id) >= 0) return;
    heard.push(id);
    heard.sort(function (a, b) { return a - b; });
    store('heard', heard);
    renderSeen(id);
  }

  // ---------- the paper ----------
  // A line too long for one sheet is spread over more. Each word gets the
  // number of the sheet it lands on; only that sheet's words are shown,
  // and a tab on the corner turns to the next sheet. The tab and the sheet
  // behind appear only when a line needs them, and only once its words
  // are showing (paused or ended).
  var sheet = { pages: 1, page: 0 };
  function paginate() {
    var paper = $('paper'), subs = $('subs'), spans = subs.querySelectorAll('.w'), i;
    for (i = 0; i < spans.length; i++) { spans[i].style.display = ''; spans[i].removeAttribute('data-page'); }
    sheet.pages = 1;
    if (spans.length && paper.scrollHeight > paper.clientHeight + 1) {
      var cs = getComputedStyle(paper), lh = parseFloat(getComputedStyle(subs).lineHeight);
      var room = paper.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      var perSheet = Math.max(1, Math.floor(room / lh)), top0 = spans[0].offsetTop;
      for (i = 0; i < spans.length; i++) {
        var n = Math.floor(Math.round((spans[i].offsetTop - top0) / lh) / perSheet);
        spans[i].setAttribute('data-page', n);
        sheet.pages = Math.max(sheet.pages, n + 1);
      }
    }
    showSheet(Math.min(sheet.page, sheet.pages - 1));
  }
  function showSheet(n) {
    var spans = $('subs').querySelectorAll('.w'), written = {}, sheets = 0;
    sheet.page = n;
    for (var i = 0; i < spans.length; i++) {
      var pg = +spans[i].getAttribute('data-page') || 0;
      spans[i].style.display = sheet.pages < 2 || pg === n ? '' : 'none';
      if (spans[i].classList.contains('on') && !written[pg]) { written[pg] = 1; sheets++; }
    }
    // the tab only once words have reached a second sheet
    var many = sheets > 1;
    $('paper').classList.toggle('more', many);
    $('page-turn').hidden = !many;
    $('page-count').textContent = fa(n + 1) + '/' + fa(sheet.pages);
  }
  // the sheet with the newest word said so far (in a sentence played by
  // itself, its newest word, or its first before any is said)
  function newestSheet() {
    if (sheet.pages < 2) return 0;
    var on = $('subs').querySelectorAll('.w.on:not(.dim)');
    var s = on.length ? on[on.length - 1] : $('subs').querySelector('.w:not(.dim)');
    return s ? +s.getAttribute('data-page') || 0 : 0;
  }
  // ---------- a word's meaning ----------
  // Clicking a word written on the paper shows how to say it and its English
  // meaning on a slip beside it (game/js/glossary.js). A click outside it, Escape,
  // turning the sheet or playing on puts it away.
  var GLOSS = window.JINN_GLOSSARY || {}, glossFor = null;
  var GLOSS_CLEAN = {};
  Object.keys(GLOSS).forEach(function (w) { GLOSS_CLEAN[engine.clean(w).replace(/ /g, '')] = GLOSS[w]; });
  function entryOf(word) {
    var w = word.replace(/[،.؟!:«»]/g, '');
    return GLOSS[w] || GLOSS_CLEAN[engine.clean(w).replace(/ /g, '')] || null;
  }
  function hideGloss() { $('gloss').hidden = true; glossFor = null; }
  function showGloss(span) {
    if (glossFor === span) { hideGloss(); return; }
    var entry = entryOf(span.textContent);
    if (!entry) { hideGloss(); return; }
    glossFor = span;
    $('gloss-word').textContent = span.textContent.replace(/[،.؟!:«»]/g, '');
    $('gloss-say').textContent = entry.say;
    // one meaning per line; a Dari phrase keeps its own direction
    var box = $('gloss-mean');
    box.textContent = '';
    [].concat(entry.mean).forEach(function (line) {
      var d = document.createElement('div');
      d.dir = 'ltr';
      var m = line.match(/^([^:]*[\u0600-\u06FF][^:]*):\s*(.*)$/);
      if (m) {
        // three separate pieces, so right-to-left and left-to-right never mix
        d.className = 'pair';
        [[m[1], 'ph', 'rtl', 'fa'], ['=', 'eq', 'ltr', ''], [m[2], 'en', 'ltr', 'en']].forEach(function (x) {
          var sp = document.createElement('span');
          sp.textContent = x[0]; sp.className = x[1]; sp.dir = x[2];
          if (x[3]) sp.lang = x[3];
          d.appendChild(sp);
        });
      } else d.textContent = line;
      box.appendChild(d);
    });
    var g = $('gloss'), paper = $('paper');
    g.style.left = '0px'; g.style.top = '0px';   // measure with the whole paper's width to use
    g.hidden = false;
    // under the word, kept inside the paper
    var left = span.offsetLeft + span.offsetWidth / 2 - g.offsetWidth / 2;
    left = Math.max(6, Math.min(paper.clientWidth - g.offsetWidth - 6, left));
    var top = span.offsetTop + span.offsetHeight;
    if (top + g.offsetHeight > paper.clientHeight - 6) top = span.offsetTop - g.offsetHeight;
    top = Math.max(4, Math.min(paper.clientHeight - g.offsetHeight - 4, top));
    g.style.left = left + 'px';
    g.style.top = top + 'px';
  }
  $('subs').addEventListener('click', function (e) {
    var s = e.target.closest ? e.target.closest('.w') : null;
    if (s && s.classList.contains('on')) { sound.key(); showGloss(s); }
    else hideGloss();
  });
  // a press anywhere but the slip or a written word puts the slip away
  // (before any other handler, so nothing can swallow it)
  document.addEventListener('pointerdown', function (e) {
    if ($('gloss').hidden || $('gloss').contains(e.target)) return;
    if (!(e.target.closest && e.target.closest('#subs .w.on'))) hideGloss();
  }, true);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hideGloss(); });

  $('page-turn').addEventListener('click', function () {
    hideGloss();
    sound.key();
    // the next sheet that has words on it
    var on = $('subs').querySelectorAll('.w.on'), last = on.length ? +on[on.length - 1].getAttribute('data-page') : 0;
    showSheet(sheet.page >= last ? 0 : sheet.page + 1);
  });

  // ---------- searching ----------
  var searchedOnce = false;
  function runSearch(query) {
    stopPlayback();
    hideParts();
    show('archive');
    $('q').value = query;
    searchedOnce = true;
    $('go').classList.remove('hint');
    var ids = engine.search(query).ids;
    var found = $('found'), results = $('results');
    found.textContent = '';
    results.textContent = '';
    var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    icon.appendChild(use);
    var msg = document.createElement('span');
    if (!ids.length) {
      sound.none();
      use.setAttribute('href', '#i-none');
      msg.textContent = 'هیچ فلم پیدا نشد';
      found.className = 'found none';
    } else {
      sound.beep();
      use.setAttribute('href', '#i-tape');
      msg.textContent = fa(ids.length) + ' فلم پیدا شد';
      found.className = 'found';
    }
    var count = document.createElement('span');
    count.className = 'found-n';
    count.appendChild(icon);
    count.appendChild(msg);
    found.appendChild(count);
    // more than can be shown: the old computer says it is short of memory
    if (ids.length > CONFIG.maxResults) {
      var err = document.createElement('span');
      err.className = 'found-err';
      err.textContent = 'خطا: رم کم، فقط ' + fa(CONFIG.maxResults) + ' فلم نشان داده میشه';   // error: low RAM, only 5 films showing
      found.appendChild(err);
    }
    ids.slice(0, CONFIG.maxResults).forEach(function (id, i) {
      var r = RECS[id];
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'tile new';
      b.style.animationDelay = (i * 0.08) + 's';
      b.setAttribute('aria-label', 'فلم ' + fa(id));
      b.dataset.id = id;
      var th = document.createElement('div');
      th.className = 'thumb';
      th.appendChild(thumb(id));
      var meta = document.createElement('div');
      meta.className = 'meta';
      meta.innerHTML = '<b>' + fa(id) + '</b><span dir="ltr">' + fa(r.stamp[3]) + '</span>';
      b.appendChild(th);
      b.appendChild(meta);
      b.addEventListener('click', function () { play(id); });
      results.appendChild(b);
    });
    markTiles();
  }
  // an eye on every result already watched; run again on coming back
  function markTiles() {
    Array.prototype.forEach.call($('results').querySelectorAll('.tile'), function (b) {
      var th = b.querySelector('.thumb');
      if (heard.indexOf(+b.dataset.id) < 0 || th.querySelector('.seen-mark')) return;
      var mark = document.createElement('span');
      mark.className = 'seen-mark';
      mark.innerHTML = '<svg><use href="#i-eye"/></svg>';
      th.appendChild(mark);
    });
  }

  $('search-form').addEventListener('submit', function (e) { e.preventDefault(); runSearch($('q').value); });
  $('after-form').addEventListener('submit', function (e) { e.preventDefault(); runSearch($('q2').value); });

  // ---------- watching ----------
  var tv = new JinnCamcorder($('tv'));
  var playing = null;   // { id, audio, motion, start, done, raf, ... }

  function stopPlayback() {
    if (!playing) return;
    cancelAnimationFrame(playing.raf);
    if (playing.audio) { playing.audio.pause(); playing.audio.removeAttribute('src'); playing.audio.load(); }
    playing = null;
  }

  // ---------- one sentence at a time ----------
  // Once a recording has played to its end, a numbered key for each of its
  // sentences appears to the right of the keyboard key. Pressing one plays
  // only that sentence: the tape jumps to just before its first word and
  // stops just after its last. Every recording has about a second of quiet
  // between sentences (0.96 s at the least), so the jump and the stop both
  // land in quiet. The keys stay while the player stays with that
  // recording, and go when they leave it.
  var LEAD = 0.35, TAIL = 0.45;
  var partsFor = 0;   // the recording whose sentence keys are showing
  function sentencesOf(r) {
    var words = r.text.split(' '), parts = [], from = 0;
    words.forEach(function (w, i) {
      if (i === words.length - 1 || /[.؟!?]$/.test(w)) { parts.push([from, i]); from = i + 1; }
    });
    return parts;
  }
  function showParts(id, pressed) {
    var box = $('parts'), parts = sentencesOf(RECS[id]);
    if (partsFor !== id) {
      partsFor = id;
      box.textContent = '';
      if (parts.length > 1) parts.forEach(function (x, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'part-key';
        b.textContent = fa(i + 1);
        b.addEventListener('click', function () { sound.start(); play(id, i); });
        box.appendChild(b);
      });
      box.hidden = parts.length < 2;
      paginate();   // on a phone the keys take room from the paper
    }
    Array.prototype.forEach.call(box.children, function (b, i) { b.setAttribute('aria-pressed', i === pressed ? 'true' : 'false'); });
  }
  function hideParts() {
    if (!partsFor) return;
    partsFor = 0;
    $('parts').textContent = '';
    $('parts').hidden = true;
    paginate();
  }

  // part: the number of one sentence to play by itself (from 0), or none
  // for the whole recording
  function play(id, part) {
    stopPlayback();
    var r = RECS[id], v = r.voices[CONFIG.voice];
    if (partsFor !== id) { hideParts(); part = null; }
    else showParts(id, part);
    var span = part == null ? null : sentencesOf(r)[part];   // its first and last word
    markHeard(id);   // watched once started, even if left before the end
    show('player');
    sound.tape();
    var subs = $('subs');
    subs.textContent = '';
    subs.className = 'subs';
    var words = r.text.split(' ');
    var spans = words.map(function (w, i) {
      var s = document.createElement('span');
      s.className = 'w' + (span && (i < span[0] || i > span[1]) ? ' dim' : '');
      s.textContent = w;
      subs.appendChild(s);
      if (i < words.length - 1) subs.appendChild(document.createTextNode(' '));
      return s;
    });
    // where on the tape to start and stop; the last sentence plays to the end
    var from = span ? Math.max(0, v.words[span[0]][0] - LEAD) : 0;
    var to = span && span[1] < words.length - 1 ? v.words[span[1]][1] + TAIL : Infinity;
    sheet.page = 0;
    hideGloss();
    paginate();
    $('after-form').hidden = true;
    $('again').hidden = true;
    $('pause').hidden = false;
    setPauseIcon(false);
    $('q2').value = '';
    // the camcorder's own writing: place, tape number, date, and a clock
    // that counts on in seconds while the tape plays
    var st = r.stamp, hm = st[3].split(':');
    $('osd-name').textContent = SPEAKER_NAMES[r.speaker] || '';
    $('osd-place').textContent = PLACE_NAMES[r.place] || '';
    $('osd-tape').textContent = 'فلم ' + fa(('00' + id).slice(-3));
    $('stamp-date').textContent = fa(pad(st[2])) + '/' + fa(pad(st[1])) + '/' + fa(pad(st[0] % 100));
    var clockStart = +hm[0] * 3600 + +hm[1] * 60 + (id * 37 + 11) % 60;
    $('stamp-time').textContent = clock(clockStart + Math.floor(from));

    var audio = new Audio('audio/' + CONFIG.voice + '/' + pad(id) + '.mp3');
    audio.preload = 'auto';
    var p = playing = {
      id: id, audio: audio, v: v, spans: spans, motion: new JinnArt.Motion(id * 7 + 1),
      scene: sceneFor(id), started: false, done: false, clock0: performance.now() / 1000 + 0.55,
      lastDraw: 0, silent: false, raf: 0, paused: false, lastT: from,
      tint: JinnArt.tint(r.place), clockStart: clockStart, shownSecond: Math.floor(from),
      part: part, span: span, from: from, to: to
    };
    audio.addEventListener('ended', function () { if (playing === p) finish(p); });
    audio.addEventListener('error', function () { p.silent = true; });
    p.start = function () {
      p.clock0 = performance.now() / 1000;
      function go() {
        if (playing !== p) return;
        if (p.paused) { p.startLater = true; return; }
        if (from) audio.currentTime = from;
        audio.play().then(function () { p.started = true; }, function () { p.silent = true; });
      }
      // the tape can jump only once the sound file says how long it is
      if (!from || audio.readyState >= 1) go();
      else audio.addEventListener('loadedmetadata', go, { once: true });
    };
    setTimeout(function () {
      if (playing !== p) return;
      if (p.paused) { p.startLater = true; return; }
      p.start();
    }, 550);
    // runs until the recording is paused or ends; then the last frame stays
    // on screen, still, like a paused tape
    p.loop = function loop(now) {
      if (playing !== p || p.done || p.paused) return;
      tick(p, now / 1000);
      if (p.done) return;
      p.raf = requestAnimationFrame(loop);
    };
    p.raf = requestAnimationFrame(p.loop);
  }

  // Pausing: the tape stops, and the words said so far appear. Playing on
  // hides them again. The whole line appears when the recording ends.
  function setPauseIcon(paused) {
    $('pause').querySelector('use').setAttribute('href', paused ? '#i-play' : '#i-pause');
    $('pause').setAttribute('aria-label', paused ? 'ببین' : 'ایستاد کو');
  }
  function togglePause() {
    var p = playing;
    if (!p || p.done) return;
    sound.key();
    var now = performance.now() / 1000;
    if (!p.paused) {
      p.paused = true;
      p.pausedAt = now;
      cancelAnimationFrame(p.raf);
      if (p.started && !p.silent) p.audio.pause();
      // the words said so far; in a sentence played by itself, the rest of
      // the line too, faintly
      p.spans.forEach(function (s, i) {
        s.classList.toggle('on', p.lastT >= p.v.words[i][0] - 0.03 || s.classList.contains('dim'));
      });
      showSheet(newestSheet());
      $('subs').classList.add('paused');
      setPauseIcon(true);
    } else {
      p.paused = false;
      p.clock0 += now - p.pausedAt;          // the stand-in clock picks up where it stopped
      if (p.startLater) { p.startLater = false; p.start(); }
      else if (p.started && !p.silent) p.audio.play();
      p.spans.forEach(function (s) { s.classList.remove('on'); });
      hideGloss();
      showSheet(sheet.page);
      $('subs').classList.remove('paused');
      setPauseIcon(false);
      p.raf = requestAnimationFrame(p.loop);
    }
  }
  $('pause').addEventListener('click', togglePause);
  $('tv').addEventListener('click', togglePause);

  function tick(p, now) {
    var v = p.v;
    // the voice's clock; if the sound cannot play, a plain clock stands in
    var t = p.started && !p.silent ? p.audio.currentTime : p.from + Math.max(0, now - p.clock0);
    if (p.silent && t >= v.dur) { finish(p); return; }
    // one sentence by itself: the sound comes in and goes out softly, so
    // the jump and the stop make no click
    if (t >= p.to) { finish(p); return; }
    if (p.span) p.audio.volume = Math.max(0, Math.min(1, (t - p.from) / 0.12, (p.to - t) / 0.2));
    var f = Math.floor(t * 60);
    var level = f < v.mouth.length ? +v.mouth[f] / 9 : 0;
    var first = v.words[0][0], last = v.words[v.words.length - 1][1];
    var speaking = t > first - 0.05 && t < last + 0.1;
    // the picture moves at 24 frames a second, like tape; grain moves faster
    // the face for this moment of the line; a change hides inside a blink
    var face = JinnArt.faceAt(RECS[p.id].faces, v.words, t);
    if (face !== p.face) { if (p.face) p.motion.blinkNow(t); p.face = face; }
    if (now - p.lastDraw > 1 / 24) {
      p.lastDraw = now;
      var st = p.motion.state(t, level, speaking);
      st.expr = face;
      p.frame = p.scene.frame(t, st);
    }
    tv.draw(p.frame, { time: now, fade: Math.min(1, (t - p.from) * 3), tint: p.tint });
    p.lastT = t;
    if (Math.floor(t) !== p.shownSecond) {
      p.shownSecond = Math.floor(t);
      $('stamp-time').textContent = clock(p.clockStart + p.shownSecond);
    }
    if (t >= v.words[v.words.length - 1][0]) markHeard(p.id);
  }

  function finish(p) {
    if (p.done) return;
    p.done = true;
    cancelAnimationFrame(p.raf);
    if (!p.audio.paused) p.audio.pause();   // a sentence played by itself stops here
    markHeard(p.id);
    p.spans.forEach(function (s) { s.classList.add('on'); });
    showParts(p.id, p.part);
    // the sheet where the sentence starts, or the first
    showSheet(p.span ? +p.spans[p.span[0]].getAttribute('data-page') || 0 : 0);
    $('subs').classList.remove('paused');
    $('subs').classList.add('done');
    $('after-form').hidden = false;
    $('again').hidden = false;
    $('pause').hidden = true;
    if (!touch) $('q2').focus();
  }

  $('back').addEventListener('click', function () {
    stopPlayback();
    hideParts();
    markTiles();
    show('archive');
    if (!touch) $('q').focus();
  });
  $('again').addEventListener('click', function () { if (playing) play(playing.id); });

  // ---------- the keyboard ----------
  // Standard Persian layout. Typing on an ordinary keyboard gives the
  // letter printed at the same place here, so no Persian keyboard needs
  // to be installed.
  var ROWS = [
    ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'چ'],
    ['ش', 'س', 'ی', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ک', 'گ'],
    ['ظ', 'ط', 'ز', 'ر', 'ذ', 'د', 'پ', 'و', 'آ', 'ژ']
  ];
  var LATIN = {
    q: 'ض', w: 'ص', e: 'ث', r: 'ق', t: 'ف', y: 'غ', u: 'ع', i: 'ه', o: 'خ', p: 'ح', '[': 'ج', ']': 'چ',
    a: 'ش', s: 'س', d: 'ی', f: 'ب', g: 'ل', h: 'ا', j: 'ت', k: 'ن', l: 'م', ';': 'ک', "'": 'گ',
    z: 'ظ', x: 'ط', c: 'ز', v: 'ر', b: 'ذ', n: 'د', m: 'پ', ',': 'و', '\\': 'پ',
    H: 'آ', C: 'ژ', '?': '؟'
  };
  function persianFor(ch) {
    if (LATIN[ch]) return LATIN[ch];
    if (/[A-Z]/.test(ch) && LATIN[ch.toLowerCase()]) return LATIN[ch.toLowerCase()];
    return ch;
  }
  // The same, by where the key sits rather than the letter printed on it,
  // so a German, French or any other keyboard gives the same Persian
  // letters (the German ü key is where ج is). A keyboard already set to
  // Persian types its own letters.
  var AT = {
    KeyQ: 'ض', KeyW: 'ص', KeyE: 'ث', KeyR: 'ق', KeyT: 'ف', KeyY: 'غ', KeyU: 'ع', KeyI: 'ه', KeyO: 'خ', KeyP: 'ح',
    BracketLeft: 'ج', BracketRight: 'چ',
    KeyA: 'ش', KeyS: 'س', KeyD: 'ی', KeyF: 'ب', KeyG: 'ل', KeyH: 'ا', KeyJ: 'ت', KeyK: 'ن', KeyL: 'م',
    Semicolon: 'ک', Quote: 'گ',
    KeyZ: 'ظ', KeyX: 'ط', KeyC: 'ز', KeyV: 'ر', KeyB: 'ذ', KeyN: 'د', KeyM: 'پ', Comma: 'و', Backslash: 'پ'
  };
  var AT_SHIFT = { KeyH: 'آ', KeyC: 'ژ' };
  function persianAt(e) {
    if (/[\u0600-\u06FF]/.test(e.key || '')) return '';
    return (e.shiftKey && AT_SHIFT[e.code]) || AT[e.code] || '';
  }
  var keyEls = {};
  function activeInput() { return !$('player').hidden && !$('after-form').hidden ? $('q2') : $('q'); }
  function insert(text) {
    var inp = activeInput();
    var s = inp.selectionStart == null ? inp.value.length : inp.selectionStart;
    var e = inp.selectionEnd == null ? s : inp.selectionEnd;
    inp.setRangeText(text, s, e, 'end');
  }
  function backspace() {
    var inp = activeInput();
    var s = inp.selectionStart == null ? inp.value.length : inp.selectionStart;
    var e = inp.selectionEnd == null ? s : inp.selectionEnd;
    if (s === e && s > 0) s -= 1;
    inp.setRangeText('', s, e, 'end');
  }
  function submitActive() {
    var inp = activeInput();
    if (!$('player').hidden && $('after-form').hidden) return;
    runSearch(inp.value);
  }
  function flash(el) { el.classList.add('down'); setTimeout(function () { el.classList.remove('down'); }, 110); }
  function makeKey(label, cls, action, aria) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'key' + (cls ? ' ' + cls : '');
    if (typeof label === 'string') b.textContent = label;
    else b.appendChild(label);
    if (aria) b.setAttribute('aria-label', aria);
    // act on press, and keep the text box focused
    b.addEventListener('pointerdown', function (e) { e.preventDefault(); sound.start(); sound.key(); action(); });
    b.addEventListener('click', function (e) { if (e.detail === 0) { sound.key(); action(); } });
    return b;
  }
  function icon(id) {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var u = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    u.setAttribute('href', '#' + id); s.appendChild(u);
    return s;
  }
  var rows = document.querySelectorAll('#keyboard .krow');
  ROWS.forEach(function (row, ri) {
    row.forEach(function (ch) {
      var k = makeKey(ch, '', function () { insert(ch); }, ch);
      keyEls[ch] = k;
      rows[ri].appendChild(k);
    });
  });
  keyEls[' '] = makeKey('', 'space', function () { insert(' '); }, 'فاصله');
  keyEls.Backspace = makeKey(icon('i-del'), 'wide', backspace, 'پاک');
  keyEls.Enter = makeKey(icon('i-search'), 'wide enter', submitActive, 'پیدا کو');
  // right to left along the bottom: search, space, delete
  rows[3].appendChild(keyEls.Backspace);
  rows[3].appendChild(keyEls[' ']);
  rows[3].appendChild(keyEls.Enter);

  // The keyboard starts put away, which makes the monitor bigger; the key
  // under the paper brings it out, and the X on it puts it away again. The
  // game remembers which the player chose last. Typing on an ordinary
  // keyboard works either way. On a touch screen the phone's own keyboard
  // is kept out of the way while this one is showing.
  function setKeyboard(on) {
    $('keyboard').hidden = !on;
    $('kb-open').setAttribute('aria-pressed', on ? 'true' : 'false');
    ['q', 'q2'].forEach(function (id) {
      if (touch && on) $(id).setAttribute('inputmode', 'none'); else $(id).removeAttribute('inputmode');
    });
    store('keyboard', on);
    fit();
  }
  $('kb-close').addEventListener('click', function () { sound.start(); sound.key(); setKeyboard(false); });
  $('kb-open').addEventListener('click', function () { sound.start(); sound.key(); setKeyboard($('keyboard').hidden); });
  // there is no keyboard key (the owner, 2026-10-07), so the on-screen
  // keyboard is never shown: a computer's own keyboard types Persian by
  // where the keys sit, and a phone uses its own keyboard
  setKeyboard(false);

  // an ordinary keyboard types Persian
  ['q', 'q2'].forEach(function (id) {
    var inp = $(id);
    if (touch && !$('keyboard').hidden) inp.setAttribute('inputmode', 'none');
    inp.addEventListener('keydown', function (e) {
      if (e.ctrlKey || e.metaKey || e.altKey || e.isComposing) return;
      var ch = persianAt(e);
      if (ch) { e.preventDefault(); inp.setRangeText(ch, inp.selectionStart, inp.selectionEnd, 'end'); }
    });
    // keyboards that do not say where a key sits (some phones): by letter
    inp.addEventListener('beforeinput', function (e) {
      if (e.inputType !== 'insertText' || !e.data) return;
      var mapped = e.data.split('').map(persianFor).join('');
      if (mapped !== e.data) { e.preventDefault(); inp.setRangeText(mapped, inp.selectionStart, inp.selectionEnd, 'end'); }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === ' ' && !$('player').hidden && playing && !playing.done &&
        document.activeElement.tagName !== 'INPUT') { e.preventDefault(); togglePause(); return; }
    var k = e.key === 'Backspace' || e.key === 'Enter' || e.key === ' ' ? keyEls[e.key] : keyEls[persianAt(e) || persianFor(e.key)];
    if (k) { flash(k); sound.key(); }
  });

  kabulNow();
  setInterval(kabulNow, 1000);

  // ---------- switching on ----------
  $('power').addEventListener('click', function () {
    sound.power();
    document.body.classList.add('on');
    show('boot');
    $('boot').classList.add('flash');
    setTimeout(renderSeen, 60);
    setTimeout(function () {
      show('archive');
      if (!searchedOnce) $('go').classList.add('hint');
      if (!touch) { var q = $('q'); q.focus(); q.setSelectionRange(q.value.length, q.value.length); }
    }, 2500);
  });
})();
