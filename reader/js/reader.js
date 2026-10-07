/* The Chai and Conversation reader. A story from a class PDF is written on a
   sheet of paper. Clicking a word shows a slip beside it with the word, how
   to say it in English letters, and its English meaning, the way Onion Skin
   shows a word. Clicking the small number after a
   sentence shows the whole sentence's sound and English. A click outside the
   slip, or Escape, puts it away. Above the paper are a bar with the player
   for the story read aloud, a volume of ten steps and a Download Audio
   button, and the book's drawing.

   The readings are in readings/, one file per PDF, each adding itself to
   READINGS. The address picks one: index.html#beginner-01 opens that
   reading, index.html alone shows the list. */
(function () {
  'use strict';
  var $ = function (id) { return document.getElementById(id); };
  function fa(n) { return String(n).replace(/\d/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'[d]; }); }
  function clean(word) { return word.replace(/[،,.؟?!:;"«»؛()\-–]/g, '').trim(); }
  function scriptOf(r, e) { e.dir = r.dir || 'rtl'; e.lang = r.lang || 'fa'; return e; }
  function entryText(entry) { return entry.text || entry.fa; }
  function wordSoundOn() { return reading.showWordSay === true || reading.showSay !== false; }
  function setTheme(r) {
    document.body.classList.toggle('kurmanji', !!r && r.lang === 'kmr');
    document.body.classList.toggle('persian', persian(r));
  }
  // a Persian reading (Farsi or Dari) has its player bar in Persian too
  function persian(r) { return !!r && (r.lang || 'fa') === 'fa'; }
  function num(n) { return persian(reading) ? fa(n) : String(n); }
  function ltr(e) { e.dir = 'ltr'; e.lang = 'en'; return e; }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  var reading = null;     // the reading open now
  var sentences = [];     // its sentences in order, the title first
  var slipFor = null;     // the word or number the slip belongs to

  // ---------- the list of readings ----------
  // The three sets, side by side (one above the other on a phone), and the
  // groups of readings in each. On the website the class set is locked by a
  // password (see "the class readings on the website" below).
  var SETS = [
    { name: 'Chai and Conversation Fall Bootcamp', shelfName: 'چای و گفت‌وگو · دورهٔ فشردهٔ پاییزی', barName: 'چای و گفت‌وگو',
      lang: 'fa', dir: 'rtl', groups: ['Reading · beginner', 'Reading · advanced'], locked: true,
      shelfGroups: { 'Reading · beginner': 'مبتدی', 'Reading · advanced': 'پیشرفته' },
      shelfTitles: { 'beginner-02': 'آرایِشِ وارونِه · بخش ۱', 'beginner-03': 'آرایِشِ وارونِه · بخش ۲' } },
    { name: 'The Conference of the Birds Abridged in Dari', shelfName: 'منطق‌الطیر · خلاصه به دری', barName: 'منطق‌الطیر · دری',
      lang: 'fa', dir: 'rtl', groups: ['Conference of the Birds · Dari'] },
    { name: 'Dari Grade 9', shelfName: 'زبان و ادبیات دری · صنف نهم', barName: 'دری · صنف نهم',
      lang: 'fa', dir: 'rtl', groups: ['Dari · grade 9'] },
    { name: 'Siya Evînê', shelfName: 'Siya Evînê', lang: 'kmr', dir: 'ltr',
      groups: ['Siya Evînê · Kurmanji'], contents: SIYA_CONTENTS }
  ];
  function setOf(r) {
    return SETS.filter(function (s) { return s.groups.indexOf(r.group) >= 0; })[0] || { name: r.group, groups: [r.group] };
  }
  function shelfLabel(r, set) {
    var number = (r.label.match(/\d+/) || [''])[0];
    return set.lang === 'kmr' ? 'Beşa ' + number :
      (r.id.indexOf('birds-') === 0 ? 'بخش ' : r.id.indexOf('grade9-') === 0 ? 'درس ' : 'هفتهٔ ') + fa(number);
  }
  function shelfCard(label, name, r, set) {
    var card = el(r ? 'a' : 'div', 'card' + (r ? '' : ' card-disabled'));
    if (r) card.href = '#' + r.id;
    else card.setAttribute('aria-disabled', 'true');
    card.appendChild(el('span', 'card-label', label));
    var title = el('span', 'card-fa', name);
    title.dir = set.dir;
    title.lang = set.lang;
    card.appendChild(title);
    return card;
  }
  function showShelf() {
    reading = null;
    hideSlip();
    setTheme(null);
    audio.pause();
    var list = $('list');
    list.textContent = '';
    SETS.forEach(function (set) {
      var col = el('section', 'set' + (set.lang === 'kmr' ? ' set-kurmanji' : ''));
      col.dir = set.dir;
      col.lang = set.lang;
      var heading = el('h1', 'set-name', set.shelfName);
      col.appendChild(heading);
      list.appendChild(col);
      if (set.contents) {
        set.contents.forEach(function (section) {
          col.appendChild(el('h2', 'group', section.name));
          section.chapters.forEach(function (chapter) {
            var r = READINGS.filter(function (reading) { return reading.id === chapter.readingId; })[0];
            col.appendChild(shelfCard(chapter.label, chapter.name, r, set));
          });
        });
        return;
      }
      if (isLocked(set)) { lockForm(col); return; }
      set.groups.forEach(function (g) {
        var mine = READINGS.filter(function (r) { return r.group === g; });
        // a set of one group needs no group heading
        if (mine.length && set.groups.length > 1) col.appendChild(el('h2', 'group', set.shelfGroups[g]));
        mine.forEach(function (r) {
          var name = set.shelfTitles && set.shelfTitles[r.id] ||
            (r.title ? r.title.words.map(function (w) { return clean(w[0]); }).join(' ') : '');
          col.appendChild(shelfCard(shelfLabel(r, set), name, r, set));
        });
      });
    });
    $('reading').hidden = true;
    $('shelf').hidden = false;
    document.title = 'Farsi, Dari and Kurmanji reading';
  }

  // ---------- one reading ----------
  function wordsOf(s, si, into, displayTitle) {
    var displayed = displayTitle ? displayTitle.split(/\s+/) : null;
    s.words.forEach(function (w, ti) {
      if (ti) into.appendChild(document.createTextNode(' '));
      var text = displayed && displayed.length === s.words.length ? displayed[ti] : w[0];
      var span = el('span', 'w', text);
      span.dataset.s = si;
      span.dataset.t = ti;
      into.appendChild(span);
    });
  }
  function openReading(r) {
    reading = r;
    setTheme(r);
    scriptOf(r, $('paper'));
    hideSlip();
    sentences = [r.title || { words: [] }];
    var title = $('title'), story = $('story');
    title.textContent = '';
    story.textContent = '';
    title.hidden = !r.title;
    if (r.title) wordsOf(r.title, 0, title, r.lang === 'kmr' ? r.name : null);
    r.paragraphs.forEach(function (para) {
      // a section heading from the PDF, such as "Chapter 1 (pages 7–9)"
      if (para.heading) {
        story.appendChild(ltr(el('h3', 'section', para.heading)));
        return;
      }
      // a drawing the text points to, four ruled lines tall
      if (para.picture) {
        var fig = el('figure', 'story-pic'), img = el('img');
        img.src = para.picture;
        img.alt = para.alt || '';
        fig.appendChild(img);
        story.appendChild(fig);
        return;
      }
      var p = el('p', 'para');
      para.forEach(function (s, k) {
        var si = sentences.length;
        sentences.push(s);
        if (k) p.appendChild(document.createTextNode(' '));
        wordsOf(s, si, p);
        var end = el('span', 'end'), n = el('button', 'num', r.dir === 'ltr' ? String(si) : fa(si));
        n.type = 'button';
        n.dataset.s = si;
        n.setAttribute('aria-label', 'Sentence ' + si + ' in English');
        end.appendChild(p.lastChild);
        if (r.lang !== 'kmr') end.appendChild(document.createTextNode(' '));
        end.appendChild(n);
        p.appendChild(end);
      });
      story.appendChild(p);
    });
    // above the bar: the set, its group when it has more than one, and the
    // chapter or week, in Persian for a Persian reading
    var set = setOf(r);
    $('where').textContent = r.lang === 'kmr' ? set.name + ' · ' + shelfLabel(r, set) :
      persian(r) && set.barName ? [set.barName].concat(set.shelfGroups ? [set.shelfGroups[r.group]] : [], [shelfLabel(r, set)]).join(' · ') :
      r.group + ' · ' + r.label;
    $('where').dir = persian(r) ? 'rtl' : 'ltr';
    $('download').lastElementChild.textContent = persian(r) ? 'دانلود صدا' : 'Download Audio';
    $('rewind').lastElementChild.textContent = num(1);
    setVolume(volume);
    var key = $('sounds');
    key.textContent = '';
    (r.sounds || []).forEach(function (x) {
      var item = el('span', 'sound');
      item.appendChild(el('b', null, x[0]));
      item.appendChild(document.createTextNode(' ' + x[1]));
      key.appendChild(item);
    });
    key.hidden = !(r.sounds && r.sounds.length);
    // the book's drawing, and the story read aloud, when the reading has them
    var pic = r.picture;
    $('picture').hidden = !pic;
    if (pic) {
      $('picture-img').src = pic.src;
      $('picture-img').alt = pic.alt || '';
      $('picture-note').textContent = pic.note || '';
      $('picture-note').hidden = !pic.note;
    }
    loadSound(r.audio);
    document.querySelector('.spread').classList.toggle('bare', !pic && !r.audio);
    $('shelf').hidden = true;
    $('reading').hidden = false;
    document.title = r.label + ' · ' + r.name;
    window.scrollTo(0, 0);
  }

  // ---------- the slip ----------
  function hideSlip() {
    $('slip').hidden = true;
    slipFor = null;
    [].forEach.call(document.querySelectorAll('#paper .on, #paper .mate, #paper .lit'), function (e) {
      e.classList.remove('on', 'mate', 'lit');
    });
  }
  // A line naming another entry: the Persian, its sound, then its English.
  function pairLine(entry, say) {
    var d = el('div', 'pair');
    d.dir = 'ltr';
    var ph = scriptOf(reading, el('span', 'ph', entryText(entry)));
    d.appendChild(ph);
    if (wordSoundOn()) d.appendChild(el('i', 'ph-say', entry.say || say));
    d.appendChild(el('span', 'eq', '='));
    d.appendChild(el('span', 'en', entry.mean));
    return d;
  }
  function showWord(span) {
    var si = +span.dataset.s, w = sentences[si].words[+span.dataset.t];
    var say = w[1], ids = w.slice(2), slip = $('slip');
    hideSlip();
    slip.textContent = '';
    var word = el('b', 'slip-fa', clean(span.textContent));
    scriptOf(reading, word);
    slip.appendChild(word);
    var own = reading.words[say];
    if (wordSoundOn()) slip.appendChild(ltr(el('i', 'slip-say', own && own.say || say)));
    // the PDF's spoken form, when it differs from the written one
    if (own && ids.indexOf(say) >= 0 && own.spoken && own.spoken !== say) {
      var sp = el('div', 'spoken');
      sp.dir = 'ltr';
      sp.appendChild(el('span', 'tag', 'spoken'));
      sp.appendChild(el('i', null, own.spoken));
      var spFa = el('span', 'sp-fa', own.spokenFa);
      spFa.dir = 'rtl'; spFa.lang = 'fa';
      sp.appendChild(spFa);
      slip.appendChild(sp);
    }
    // the word's own meaning plainly; phrases and other forms as pairs
    var mean = ltr(el('div', 'mean'));
    ids.forEach(function (id) {
      var e = reading.words[id];
      if (!e) return;
      mean.appendChild(id === say ? el('div', 'own', e.mean) : pairLine(e, id));
    });
    slip.appendChild(mean);
    // light up the other words of any phrase this word belongs to here
    span.classList.add('on');
    var phrases = ids.filter(function (id) { return / /.test(reading.words[id] ? entryText(reading.words[id]) : ''); });
    [].forEach.call(document.querySelectorAll('#paper .w[data-s="' + si + '"]'), function (other) {
      if (other === span) return;
      var theirs = sentences[si].words[+other.dataset.t].slice(2);
      if (phrases.some(function (id) { return theirs.indexOf(id) >= 0; })) other.classList.add('mate');
    });
    place(span);
  }
  function showSentence(btn) {
    var si = +btn.dataset.s, s = sentences[si], slip = $('slip');
    hideSlip();
    slip.textContent = '';
    if (reading.showSay !== false) slip.appendChild(ltr(el('i', 'slip-say', s.say)));
    slip.appendChild(ltr(el('div', 'slip-en', s.mean)));
    btn.classList.add('on');
    [].forEach.call(document.querySelectorAll('#paper .w[data-s="' + si + '"]'), function (w) { w.classList.add('lit'); });
    place(btn);
  }
  // under the word, kept inside the paper; above it when there is no room below
  function place(target) {
    var slip = $('slip'), paper = $('paper');
    slipFor = target;
    slip.style.left = '0px';
    slip.style.top = '0px';
    slip.hidden = false;
    var p = paper.getBoundingClientRect(), t = target.getBoundingClientRect();
    var W = paper.clientWidth, H = paper.clientHeight;
    var left = t.left - p.left + t.width / 2 - slip.offsetWidth / 2;
    left = Math.max(8, Math.min(W - slip.offsetWidth - 8, left));
    var top = t.bottom - p.top + 4;
    if (top + slip.offsetHeight > H - 8) top = t.top - p.top - slip.offsetHeight - 4;
    slip.style.left = left + 'px';
    slip.style.top = Math.max(8, top) + 'px';
  }

  $('paper').addEventListener('click', function (e) {
    var target = e.target.closest ? e.target.closest('.w, .num') : null;
    if (!target || $('slip').contains(e.target)) return;
    if (slipFor === target) { hideSlip(); return; }
    if (target.classList.contains('num')) showSentence(target);
    else showWord(target);
  });
  // a press anywhere but the slip, a word or a number puts the slip away
  document.addEventListener('pointerdown', function (e) {
    if ($('slip').hidden || $('slip').contains(e.target)) return;
    if (!(e.target.closest && e.target.closest('#paper .w, #paper .num'))) hideSlip();
  }, true);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') hideSlip(); });
  window.addEventListener('resize', function () { if (slipFor) place(slipFor); });

  // ---------- the story read aloud ----------
  // One button, or the space bar, plays and pauses; another goes back one
  // second; pressing or dragging along the bar jumps.
  //
  // The sound comes in a script, audio/<name>.js, holding the mp3 as text,
  // which is made into a file the page owns. Only then may the volume
  // turn it past 100% when the page is opened straight from the disk: Chrome
  // silences an mp3 from the disk that goes through the mixer. A reading whose
  // sound is not cut yet names its script anyway, and the player stays hidden.
  var audio = $('audio'), dragging = false, soundTag = null, soundUrl = null, wanted = null;
  // with neither a drawing nor sound, the paper stands alone in the middle
  function fitSide() {
    document.querySelector('.spread').classList.toggle('bare', $('picture').hidden && $('player').hidden);
  }
  function loadSound(path) {
    wanted = path || null;
    audio.pause();
    if (soundTag) { soundTag.remove(); soundTag = null; }
    if (soundUrl) { URL.revokeObjectURL(soundUrl); soundUrl = null; }
    audio.removeAttribute('src');
    audio.load();                           // forget the last reading's length
    $('player').hidden = true;
    showTime();
    if (!path) return;
    soundTag = document.createElement('script');
    soundTag.src = path;
    soundTag.onerror = function () { if (path === wanted) fitSide(); };   // not cut yet
    document.head.appendChild(soundTag);
  }
  window.READER_SOUND = function (path, text, iv) {
    if (path !== wanted) return;            // a reading left since
    // a class reading's sound on the website comes encrypted, with its iv
    if (iv) {
      if (unlocked) openWith(unlocked, [iv, text]).then(function (plain) { useSound(path, plain); });
      return;
    }
    useSound(path, bytesOf(text));
  };
  function useSound(path, data) {
    if (path !== wanted) return;
    soundUrl = URL.createObjectURL(new Blob([data], { type: 'audio/mpeg' }));
    audio.src = soundUrl;
    // the Download button saves the same sound as an mp3 named after the reading
    var set = setOf(reading);
    $('download').href = soundUrl;
    $('download').download = [set.name].concat(set.groups.length > 1 ? [reading.group.replace(/ · /g, ' ')] : [], [reading.label])
      .join(' - ').replace(/[\/:*?"<>|]/g, '') + '.mp3';
    $('player').hidden = false;
    fitSide();
    showTime();
  }

  // The volume, 1 to 10, as on the Kurmanji vocab builder. The sound is
  // already evened out, so 7 plays it as it is; 10 is 10/7 of that. A limiter
  // after the volume keeps the loudest moments from crackling when turned up.
  // The browser only lets the sound through its mixer after a click or key,
  // so the mixer is made on the first press of play.
  var volume = 7, mixer = null, gain = null;
  try { volume = Math.max(1, Math.min(10, Number(localStorage.getItem('chai-reader-volume')) || 7)); } catch (e) { /* not needed */ }
  function mixerOn() {
    if (mixer) { if (mixer.state === 'suspended') mixer.resume(); return; }
    var Mixer = window.AudioContext || window.webkitAudioContext;
    if (!Mixer) return;
    try {
      mixer = new Mixer();
      gain = mixer.createGain();
      var limit = mixer.createDynamicsCompressor();
      limit.threshold.value = -2; limit.knee.value = 0; limit.ratio.value = 20;
      limit.attack.value = 0.002; limit.release.value = 0.1;
      mixer.createMediaElementSource(audio).connect(gain).connect(limit).connect(mixer.destination);
    } catch (e) { mixer = null; gain = null; }
    setVolume(volume);
  }
  // ten steps, each a little taller than the one before
  (function drawSteps() {
    for (var n = 1; n <= 10; n++) {
      var step = el('i');
      step.style.height = (5 + n * 1.9) + 'px';
      $('volbars').appendChild(step);
    }
  })();
  function setVolume(n) {
    volume = Math.max(1, Math.min(10, n));
    [].forEach.call($('volbars').children, function (e, i) { e.classList.toggle('on', i < volume); });
    $('volnum').textContent = num(volume);
    $('volume').setAttribute('aria-valuenow', volume);
    $('volume').title = persian(reading) ? 'صدا ' + fa(volume) + ' از ۱۰ (۷ همان صدای ضبط‌شده است)' :
      'Volume ' + volume + ' of 10 (7 plays the recording as it is)';
    // without the mixer the sound can only go down, not past 100%
    if (gain) { gain.gain.value = volume / 7; audio.volume = 1; } else audio.volume = Math.min(1, volume / 7);
    try { localStorage.setItem('chai-reader-volume', String(volume)); } catch (e) { /* not needed */ }
  }
  // a click or a drag across the steps sets the step under the pointer
  var bars = $('volbars'), sliding = false;
  function stepAt(e) {
    var r = bars.getBoundingClientRect();
    setVolume(Math.ceil(Math.min(1, Math.max(0.01, (e.clientX - r.left) / r.width)) * 10));
  }
  $('volume').addEventListener('pointerdown', function (e) {
    sliding = true;
    $('volume').setPointerCapture(e.pointerId);
    stepAt(e);
  });
  $('volume').addEventListener('pointermove', function (e) { if (sliding) stepAt(e); });
  $('volume').addEventListener('pointerup', function () { sliding = false; });
  $('volume').addEventListener('wheel', function (e) {
    e.preventDefault();
    setVolume(volume + (e.deltaY < 0 ? 1 : -1));
  }, { passive: false });
  $('volume').addEventListener('keydown', function (e) {
    var d = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[e.key];
    if (d) { e.preventDefault(); setVolume(volume + d); }
  });
  setVolume(volume);

  function playPause() {
    mixerOn();
    if (audio.paused) audio.play(); else audio.pause();
  }
  $('rewind').addEventListener('click', function () {
    audio.currentTime = Math.max(0, audio.currentTime - 1);
    showTime();
  });
  // the space bar, wherever the focus is, and not also pressing a button
  function soundOn() { return reading && !$('reading').hidden && !$('player').hidden; }
  document.addEventListener('keydown', function (e) {
    if (e.key !== ' ' || !soundOn()) return;
    e.preventDefault();
    if (!e.repeat) playPause();
  });
  document.addEventListener('keyup', function (e) { if (e.key === ' ' && soundOn()) e.preventDefault(); });
  function clock(t) {
    t = Math.floor(isFinite(t) ? t : 0);
    return num(Math.floor(t / 60) + ':' + ('0' + t % 60).slice(-2));
  }
  function showTime() {
    var d = audio.duration;
    $('track-fill').style.width = (d ? audio.currentTime / d * 100 : 0) + '%';
    $('clock').textContent = clock(audio.currentTime) + ' / ' + clock(d);
  }
  audio.addEventListener('timeupdate', showTime);
  audio.addEventListener('loadedmetadata', showTime);
  audio.addEventListener('play', function () { $('player').classList.add('playing'); });
  audio.addEventListener('pause', function () { $('player').classList.remove('playing'); });
  $('play').addEventListener('click', playPause);
  function seek(e) {
    var r = $('track').getBoundingClientRect();
    if (!audio.duration) return;
    audio.currentTime = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)) * audio.duration;
    showTime();
  }
  $('track').addEventListener('pointerdown', function (e) {
    dragging = true;
    $('track').setPointerCapture(e.pointerId);
    seek(e);
  });
  $('track').addEventListener('pointermove', function (e) { if (dragging) seek(e); });
  $('track').addEventListener('pointerup', function () { dragging = false; });

  // ---------- the class readings on the website ----------
  // The website is public, so its copy, made by tools/copy_to_website.py,
  // holds the Chai and Conversation readings and their sound only encrypted
  // with the class password. locked/key.js describes them as READER_LOCK.
  // The shelf asks for the password in place of the set's cards; the right
  // one opens the readings here in the browser, and the page remembers it.
  // Opened from the disk there is no READER_LOCK: every reading is here.
  var LOCK = window.READER_LOCK || null, unlocked = null, trying = false;
  function isLocked(set) { return !!(LOCK && set.locked && !unlocked); }
  function bytesOf(text) {
    var s = atob(text), b = new Uint8Array(s.length);
    for (var i = 0; i < s.length; i++) b[i] = s.charCodeAt(i);
    return b;
  }
  function keyFor(password) {
    var enc = new TextEncoder();
    return crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']).then(function (base) {
      return crypto.subtle.deriveKey({ name: 'PBKDF2', hash: 'SHA-256', salt: enc.encode(LOCK.salt), iterations: LOCK.rounds },
        base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
    });
  }
  function openWith(key, sealed) {         // sealed: [iv, data], both base64
    return crypto.subtle.decrypt({ name: 'AES-GCM', iv: bytesOf(sealed[0]) }, key, bytesOf(sealed[1]));
  }
  // a wrong password fails on the small check, before the readings load
  function unlock(password) {
    return Promise.resolve().then(function () { return keyFor(password); }).then(function (key) {
      return openWith(key, LOCK.check).then(function () {
        unlocked = key;
        try { localStorage.setItem('chai-reader-password', password); } catch (e) { /* not needed */ }
        var tag = document.createElement('script');
        tag.src = LOCK.file;
        document.head.appendChild(tag);
      });
    });
  }
  window.READER_LOCKED = function (sealed) {
    openWith(unlocked, sealed).then(function (plain) {
      JSON.parse(new TextDecoder().decode(plain)).forEach(function (r) { READINGS.push(r); });
      if (!reading) route();               // the shelf, or the class reading the address names
    });
  };
  function lockForm(col) {
    if (trying) return;                    // the remembered password is being tried
    var form = el('form', 'lock'), input = el('input'), go = el('button', null, 'باز کردن'), note = el('p', 'lock-note');
    input.type = 'password';
    input.dir = 'ltr';
    input.autocomplete = 'current-password';
    input.placeholder = 'رمز';
    input.setAttribute('aria-label', 'رمز');
    go.type = 'submit';
    form.appendChild(input);
    form.appendChild(go);
    form.appendChild(note);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      note.textContent = '';
      go.disabled = true;
      unlock(input.value).catch(function () {
        go.disabled = false;
        note.textContent = 'رمز درست نیست.';
        input.select();
      });
    });
    col.appendChild(form);
  }

  // ---------- which reading the address asks for ----------
  function route() {
    var id = decodeURIComponent(location.hash.slice(1));
    var r = READINGS.filter(function (x) { return x.id === id; })[0];
    if (r) openReading(r); else showShelf();
  }
  // the password this browser was given before
  var remembered = null;
  try { remembered = LOCK && localStorage.getItem('chai-reader-password'); } catch (e) { /* not needed */ }
  if (remembered) {
    trying = true;
    unlock(remembered).catch(function () {
      try { localStorage.removeItem('chai-reader-password'); } catch (e) { /* not needed */ }
    }).then(function () {
      trying = false;
      if (!reading && !unlocked) route();
    });
  }
  window.addEventListener('hashchange', route);
  route();
})();
