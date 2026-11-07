/* The daily calendar dialogue. Each day has a file in days/, made by
   make_web_calendar.py in the eReader project. This page loads only today's
   file and shows the dialogue twice, in Kurmanji and in Dari, on two sheets.

   It works like the reader: clicking a word shows a slip with the word, how to
   say it in English letters, and its meaning, with any phrase it belongs to and
   its base form. Clicking the small number after a line shows the line's English
   (and for Dari, the whole line's sound). A click outside the slip, or Escape,
   puts it away.

   Today is the date on this computer. For checking another day, the address can
   name it: calendar/#2026-11-08. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  function fa(n) { return String(n).replace(/\d/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'[d]; }); }
  function clean(word) { return word.replace(/[،,.؟?!:;"«»؛()…]/g, '').trim(); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function ltr(e) { e.dir = 'ltr'; e.lang = 'en'; return e; }
  function two(n) { return (n < 10 ? '0' : '') + n; }

  var day = null, slip = null, slipFor = null;

  // ---------- today's file ----------
  function wanted() {
    var asked = decodeURIComponent(location.hash.slice(1));
    if (/^\d{4}-\d{2}-\d{2}$/.test(asked)) return asked;
    var now = new Date();
    return now.getFullYear() + '-' + two(now.getMonth() + 1) + '-' + two(now.getDate());
  }
  function load() {
    var name = wanted(), tag = document.createElement('script');
    tag.src = 'days/' + name + '.js';
    tag.onerror = function () { show(null); };
    document.head.appendChild(tag);
  }
  window.CALENDAR_DAY = function (data) { show(data); };

  // ---------- one sheet ----------
  function sheet(paper, reading) {
    paper.textContent = '';
    paper.reading = reading;
    var persian = reading.lang === 'fa';
    reading.lines.forEach(function (line, li) {
      var p = el('p', 'line');
      p.appendChild(el('span', 'speaker', line.speaker + ':'));
      line.words.forEach(function (w, ti) {
        p.appendChild(document.createTextNode(' '));
        var span = el('span', 'w', w[0]);
        span.dataset.l = li;
        span.dataset.t = ti;
        p.appendChild(span);
      });
      var end = el('span', 'end'), n = el('button', 'num', persian ? fa(li + 1) : String(li + 1));
      n.type = 'button';
      n.dataset.l = li;
      n.setAttribute('aria-label', 'Line ' + (li + 1) + ' in English');
      end.appendChild(p.lastChild);
      end.appendChild(document.createTextNode(' '));
      end.appendChild(n);
      p.appendChild(end);
      paper.appendChild(p);
    });
  }
  function show(data) {
    day = data;
    hideSlip();
    $('none').hidden = !!data;
    $('date').hidden = !data;
    if (!data) { $('paper-ku').textContent = ''; $('paper-fa').textContent = ''; return; }
    $('date-ku').textContent = data.heading.ku;
    $('date-en').textContent = data.heading.en;
    $('date-fa').textContent = data.heading.fa;
    sheet($('paper-ku'), data.ku);
    sheet($('paper-fa'), data.fa);
    document.title = data.heading.en + ' · Calendar';
  }

  // ---------- the slip ----------
  function hideSlip() {
    if (slip) slip.remove();
    slip = null;
    slipFor = null;
    [].forEach.call(document.querySelectorAll('.paper .on, .paper .mate, .paper .lit'), function (e) {
      e.classList.remove('on', 'mate', 'lit');
    });
  }
  function newSlip(paper) {
    hideSlip();
    slip = el('div', 'slip');
    slip.setAttribute('role', 'status');
    paper.appendChild(slip);
    return slip;
  }
  function inScript(reading, e) { e.dir = reading.dir; e.lang = reading.lang; return e; }
  // a line naming another entry: the word or phrase, its sound, then its English
  function pairLine(reading, entry) {
    var d = el('div', 'pair');
    d.dir = 'ltr';
    d.appendChild(inScript(reading, el('span', 'ph', entry.text)));
    d.appendChild(el('i', 'ph-say', entry.say));
    d.appendChild(el('span', 'eq', '='));
    d.appendChild(el('span', 'en', entry.mean));
    return d;
  }
  function showWord(span) {
    var paper = span.closest('.paper'), reading = paper.reading;
    var li = +span.dataset.l, w = reading.lines[li].words[+span.dataset.t];
    var own = reading.words[w[1]], ids = w.slice(2), s = newSlip(paper);
    s.appendChild(inScript(reading, el('b', 'slip-fa', clean(span.textContent))));
    if (own) s.appendChild(ltr(el('i', 'slip-say', own.say)));
    var mean = ltr(el('div', 'mean'));
    ids.forEach(function (id) {
      var e = reading.words[id];
      if (!e) return;
      mean.appendChild(id === w[1] ? el('div', 'own', e.mean) : pairLine(reading, e));
    });
    s.appendChild(mean);
    // light up the other words of any phrase this word belongs to here
    span.classList.add('on');
    var phrases = ids.filter(function (id) { return id.indexOf('phrase:') === 0; });
    [].forEach.call(paper.querySelectorAll('.w[data-l="' + li + '"]'), function (other) {
      if (other === span) return;
      var theirs = reading.lines[li].words[+other.dataset.t].slice(2);
      if (phrases.some(function (id) { return theirs.indexOf(id) >= 0; })) other.classList.add('mate');
    });
    place(paper, span);
  }
  function showLine(btn) {
    var paper = btn.closest('.paper'), reading = paper.reading, li = +btn.dataset.l;
    var line = reading.lines[li], s = newSlip(paper);
    if (reading.lang === 'fa') s.appendChild(ltr(el('i', 'slip-say', line.say)));
    s.appendChild(ltr(el('div', 'slip-en', line.mean)));
    btn.classList.add('on');
    [].forEach.call(paper.querySelectorAll('.w[data-l="' + li + '"]'), function (w) { w.classList.add('lit'); });
    place(paper, btn);
  }
  // under the word, kept inside the sheet; above it when there is no room below
  function place(paper, target) {
    slipFor = target;
    slip.style.left = '0px';
    slip.style.top = '0px';
    var p = paper.getBoundingClientRect(), t = target.getBoundingClientRect();
    var W = paper.clientWidth, H = paper.clientHeight;
    var left = t.left - p.left + t.width / 2 - slip.offsetWidth / 2;
    left = Math.max(8, Math.min(W - slip.offsetWidth - 8, left));
    var top = t.bottom - p.top + 4;
    if (top + slip.offsetHeight > H - 8) top = t.top - p.top - slip.offsetHeight - 4;
    slip.style.left = left + 'px';
    slip.style.top = Math.max(8, top) + 'px';
  }

  document.addEventListener('click', function (e) {
    var target = e.target.closest ? e.target.closest('.paper .w, .paper .num') : null;
    if (!target || (slip && slip.contains(e.target))) return;
    if (slipFor === target) { hideSlip(); return; }
    if (target.classList.contains('num')) showLine(target); else showWord(target);
  });
  // a press anywhere but the slip, a word or a number puts the slip away
  document.addEventListener('pointerdown', function (e) {
    if (!slip || slip.contains(e.target)) return;
    if (!(e.target.closest && e.target.closest('.paper .w, .paper .num'))) hideSlip();
  }, true);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hideSlip(); });
  window.addEventListener('resize', function () { if (slipFor) place(slipFor.closest('.paper'), slipFor); });
  window.addEventListener('hashchange', function () {
    var old = document.querySelector('script[src^="days/"]');
    if (old) old.remove();
    load();
  });
  load();
})();
