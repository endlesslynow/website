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
    // key: the book's address (index.html#book-birds); cover: its picture;
    // colour: the cloth of the cover under the picture
    { key: 'birds', cover: 'pictures/cover_birds.jpg', colour: '#1e3a6e', english: 'Conference of the Birds',
      name: 'The Conference of the Birds Abridged in Dari', tabName: 'Conference of the Birds', shelfName: 'منطق‌الطیر · خلاصه به دری', barName: 'منطق‌الطیر · دری',
      lang: 'fa', dir: 'rtl', groups: ['Conference of the Birds · Dari'] },
    { key: 'crossing', cover: 'pictures/cover_crossing.jpg', colour: '#7d0f0f', english: 'Crossing Persia',
      name: 'Crossing Persia', shelfName: 'گذر از پارس', barName: 'گذر از پارس',
      lang: 'fa', dir: 'rtl', groups: ['Crossing Persia · Dari'] },
    { key: 'grade9', cover: 'pictures/cover_grade9.jpg', colour: '#2f4a3a', english: 'Dari Grade 9',
      name: 'Dari Grade 9', shelfName: 'زبان و ادبیات دری · صنف نهم', barName: 'دری · صنف نهم',
      lang: 'fa', dir: 'rtl', groups: ['Dari · grade 9'] },
    { key: 'chai', cover: 'pictures/cover_chai.jpg', colour: '#0e5a63', english: 'Chai and Conversation',
      name: 'Chai and Conversation Fall Bootcamp', shelfName: 'چای و گفت‌وگو · دورهٔ فشردهٔ پاییزی', barName: 'چای و گفت‌وگو',
      lang: 'fa', dir: 'rtl', groups: ['Reading · beginner', 'Reading · advanced'], locked: true,
      shelfGroups: { 'Reading · beginner': 'مبتدی', 'Reading · advanced': 'پیشرفته' },
      shelfTitles: { 'beginner-02': 'آرایِشِ وارونِه · بخش ۱', 'beginner-03': 'آرایِشِ وارونِه · بخش ۲' } },
    { key: 'siya', cover: 'pictures/lang_kurmanji.jpg', colour: '#8a1c1c', english: 'Siya Evînê',
      name: 'Siya Evînê', shelfName: 'Siya Evînê', lang: 'kmr', dir: 'ltr',
      groups: ['Siya Evînê · Kurmanji'], contents: SIYA_CONTENTS }
  ];
  function setOf(r) {
    return SETS.filter(function (s) { return s.groups.indexOf(r.group) >= 0; })[0] || { name: r.group, groups: [r.group] };
  }
  function shelfLabel(r, set) {
    var number = (r.label.match(/\d+/) || [''])[0];
    return set.lang === 'kmr' ? 'Beşa ' + number :
      (r.id.indexOf('birds-') === 0 ? 'بخش ' : r.id.indexOf('grade9-') === 0 ? 'درس ' :
       r.id.indexOf('crossing-day-') === 0 ? 'روز ' : r.id.indexOf('crossing-') === 0 ? 'پست ' : 'هفتهٔ ') + fa(number);
  }
  function readingsOf(set) {
    return READINGS.filter(function (r) { return set.groups.indexOf(r.group) >= 0; });
  }
  function bookOf(key) { return SETS.filter(function (s) { return s.key === key; })[0]; }
  // where a book's back button goes: Persian books back to the shelf of
  // books, the one Kurmanji book back to the choice of language
  function homeOf(set) { return set.lang === 'kmr' ? '#' : '#persian'; }
  // the same round back button as on a reading
  function backLink(href) {
    var a = el('a', 'back home-back');
    a.href = href;
    a.setAttribute('aria-label', 'Back');
    a.innerHTML = '<svg viewBox="0 0 16 16"><path d="M3 8l5-5v3h5v4H8v3z" fill="currentColor"/></svg>';
    return a;
  }
  function picture(src, cls) {
    var img = el('img', cls);
    img.src = src;
    img.alt = '';
    return img;
  }
  function showView(build, title) {
    reading = null;
    hideSlip();
    setTheme(null);
    audio.pause();
    var list = $('list');
    list.textContent = '';
    build(list);
    $('reading').hidden = true;
    $('shelf').hidden = false;
    document.body.classList.add('on-shelf');
    document.title = title;
    window.scrollTo(0, 0);
  }

  // the first page: Persian or Kurmanji
  function showLanguages() {
    showView(function (list) {
      var page = el('div', 'languages');
      var row = el('div', 'language-row');
      [['#persian', 'pictures/lang_persian.jpg', 'فارسی و دری', 'fa'],
       ['#book-siya', 'pictures/lang_kurmanji.jpg', 'Kurmancî', 'kmr']].forEach(function (l) {
        var a = el('a', 'language');
        a.href = l[0];
        a.appendChild(picture(l[1], 'language-pic'));
        var name = el('span', 'language-name', l[2]);
        name.lang = l[3];
        a.appendChild(name);
        row.appendChild(a);
      });
      page.appendChild(row);
      list.appendChild(page);
    }, 'Farsi, Dari and Kurmanji reading');
  }

  // the Persian books, each with its cover
  function showBooks() {
    showView(function (list) {
      list.appendChild(backLink('#'));
      var row = el('div', 'books');
      SETS.filter(function (s) { return s.lang === 'fa'; }).forEach(function (set) {
        var a = el('a', 'book');
        a.href = '#book-' + set.key;
        a.appendChild(cover(set));
        var n = readingsOf(set).length, count;
        // the class set is the teacher's own material
        if (set.locked) count = ltr(el('span', 'book-count', 'Copyrighted material'));
        else {
          count = el('span', 'book-count', fa(n) + (set.key === 'crossing' ? ' روز' : set.key === 'grade9' ? ' درس' : ' بخش'));
          count.dir = 'rtl';
        }
        a.appendChild(count);
        row.appendChild(a);
      });
      list.appendChild(row);
    }, 'Persian and Dari books');
  }
  function cover(set) {
    var c = el('span', 'cover');
    c.style.setProperty('--cloth', set.colour);
    c.appendChild(picture(set.cover, 'cover-pic'));
    var name = el('span', 'cover-name', set.barName || set.shelfName);
    name.dir = set.dir;
    name.lang = set.lang;
    c.appendChild(name);
    return c;
  }

  // one book: its cover and name, then its chapters
  function showBook(set) {
    showView(function (list) {
      list.appendChild(backLink(homeOf(set)));
      var head = el('header', 'book-head');
      head.appendChild(cover(set));
      var words = el('div', 'book-words');
      var name = el('h1', 'book-name', set.shelfName);
      name.dir = set.dir;
      name.lang = set.lang;
      words.appendChild(name);
      head.appendChild(words);
      list.appendChild(head);
      var box = el('div', 'chapters');
      box.dir = set.dir;
      box.lang = set.lang;
      if (set.lang === 'kmr') box.classList.add('chapters-kmr');
      list.appendChild(box);
      if (set.contents) {
        // only the parts of the book that have at least one reading ready
        set.contents.filter(function (section) {
          return section.chapters.some(function (chapter) { return chapter.readingId; });
        }).forEach(function (section, i, ready) {
          if (ready.length > 1) box.appendChild(el('h2', 'chapter-group', section.name));
          section.chapters.forEach(function (chapter) {
            var r = READINGS.filter(function (x) { return x.id === chapter.readingId; })[0];
            box.appendChild(chapterRow(chapter.label, chapter.name, r));
          });
        });
        return;
      }
      if (isLocked(set)) { lockForm(box); return; }
      set.groups.forEach(function (g) {
        var mine = READINGS.filter(function (r) { return r.group === g; });
        if (mine.length && set.groups.length > 1) box.appendChild(el('h2', 'chapter-group', set.shelfGroups[g]));
        mine.forEach(function (r) {
          var name = set.shelfTitles && set.shelfTitles[r.id] ||
            (r.title ? r.title.words.map(function (w) { return clean(w[0]); }).join(' ') : '');
          box.appendChild(chapterRow(shelfLabel(r, set), name, r));
        });
      });
    }, set.tabName || set.name);
  }
  function chapterRow(label, name, r) {
    var row = el(r ? 'a' : 'div', 'chapter' + (r ? '' : ' chapter-off'));
    if (r) row.href = '#' + r.id;
    row.appendChild(el('span', 'chapter-num', label));
    row.appendChild(el('span', 'chapter-name', name));
    return row;
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
    if (r.title) {
      wordsOf(r.title, 0, title, r.lang === 'kmr' ? r.name : null);
      // Count the reading itself, excluding its title, headings, and study notes.
      var wordCount = 0;
      r.paragraphs.forEach(function (para) {
        if (!Array.isArray(para)) return;
        para.forEach(function (s) {
          s.words.forEach(function (w) {
            wordCount += w[0].split(/\s+/).filter(function (word) {
              return /[\p{L}\p{N}]/u.test(word);
            }).length;
          });
        });
      });
      var count = el('span', 'word-count', '(' + num(wordCount) +
        (persian(r) ? ' واژه' : wordCount === 1 ? ' word' : ' words') + ')');
      count.dir = persian(r) ? 'rtl' : 'ltr';
      title.appendChild(document.createTextNode(' '));
      title.appendChild(count);
    }
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
    document.body.classList.remove('on-shelf');
    // the back button returns to this reading's book
    document.querySelector('#reading .back').href = set.key ? '#book-' + set.key : '#';
    document.title = (set.tabName || set.name) + ', ' + r.label;
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
    var book = id.indexOf('book-') === 0 && bookOf(id.slice(5));
    if (r) openReading(r);
    else if (book) showBook(book);
    else if (id === 'persian') showBooks();
    else showLanguages();
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
