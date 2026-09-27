/* The search box. Finds every recording where the typed word is spoken,
   forgiving the mistakes an A1 learner makes. Results always come back in
   recording order.

   A typed word finds, in three steps, stopping at the first that finds
   anything: (a) recordings where that word is spoken, in any of its
   spellings, or with a plural or «his/my» ending (rules 1 and 2 below);
   (b) only if it is spoken nowhere, the same word with another beginning
   or ending (rule 3); (c) only if that finds nothing either, words it
   could be a misspelling of (rules 4 to 6). So a real word never drifts
   into another real word: «راه» finds «راه» and «راه‌ها», never «ره» or
   every recording with «را» in it; «امید» never finds «حمید». Two spoken
   words written together («و از» as «واز») count only in step (b).
   tests/search_test.js checks every spoken word against this.

   How a typed word is matched to a spoken word, most exact first:
   1. Clean-up: Arabic ي ك ة become Persian ی ک ه, half-spaces and vowel
      marks are removed, punctuation is dropped.
   2. Word list (lexicon.js): colloquial, written and Iranian forms of the
      same word count as the same word («من» finds «مه»). A row must never
      join two words both spoken in the game with different meanings
      («باز» again, «واز» open). Dictionary forms (LEMMA: «کردن») find
      all their forms, unless the form is itself spoken («دیدن», they saw).
      Endings (ENDINGS): «سکه» finds «سکه‌های»; one-letter endings only
      after four letters, so «مرد» never finds «مردم».
   3. Word parts: the verb prefix «می»/«نمی», the «ن» of «not», the «ب» of
      «ببین», and endings like «ها», «ا», «م», «ن» are cut off both sides
      («بینم» finds «می‌بینم», «گوسفند» finds «گوسفندا»). Parts of two
      letters («ره», «از») only count against a whole spoken word.
   4. Beginnings: three or more letters that start a word find it («روشن»
      finds «روشنی»). A typed word one letter longer than a spoken one, or
      longer by a real ending, finds it too («سبزه» for «سبز»).
   Rules 4 to 6 are loose, so a word only left over after cutting off a
   prefix («انک» from «بانک») must have four letters for them, and never
   counts for rule 6.
   5. Spelling slips: one wrong, missing or swapped letter (two in long
      words). Letters that sound alike (س ص ث, ز ذ ض ظ, ت ط, ه ح, ق غ) or
      that Arabic keyboards lack (پ چ ژ گ typed as ب ج ز ک) cost nothing.
   6. Missing vowel letters: «چپن» finds «چوپان».
   Spaces: «می بینم» with a space, or «سرکوه» with none, both work.
   Several words: only recordings with every one of them; none if no
   recording has them all («کاغذ پیاز» finds nothing). */
(function (root) {
  'use strict';

  var LETTER_MAP = {
    'ي': 'ی', 'ى': 'ی', 'ئ': 'ی', 'ې': 'ی', 'ۍ': 'ی',
    'ك': 'ک', 'ڪ': 'ک', 'ګ': 'گ',
    'ة': 'ه', 'ۀ': 'ه', 'ە': 'ه',
    'أ': 'ا', 'إ': 'ا', 'آ': 'ا', 'ٱ': 'ا',
    'ؤ': 'و'
  };
  // vowel marks, Quranic marks, tatweel, hamza, zero-width and direction marks
  var INVISIBLE = /[ً-ٰٟۖ-ۭـء​-‏؜⁦-⁩﻿]/g;
  var LATIN_DIGITS = '0123456789', PERSIAN_DIGITS = '۰۱۲۳۴۵۶۷۸۹', ARABIC_DIGITS = '٠١٢٣٤٥٦٧٨٩';

  function clean(s) {
    s = String(s || '').normalize('NFC');
    s = s.replace(/[\s\S]/g, function (c) {
      if (LETTER_MAP[c]) return LETTER_MAP[c];
      var i = ARABIC_DIGITS.indexOf(c);
      if (i >= 0) return PERSIAN_DIGITS[i];
      i = LATIN_DIGITS.indexOf(c);
      if (i >= 0) return PERSIAN_DIGITS[i];
      return c;
    });
    s = s.replace(INVISIBLE, '');
    s = s.toLowerCase();
    return s.replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  }

  function words(s) {
    var c = clean(s);
    return c ? c.split(' ') : [];
  }

  // letters that sound alike, or that an Arabic keyboard cannot type
  var FOLD = {
    'ط': 'ت', 'ص': 'س', 'ث': 'س', 'ذ': 'ز', 'ض': 'ز', 'ظ': 'ز', 'ژ': 'ز',
    'ح': 'ه', 'غ': 'ق', 'ع': 'ا', 'پ': 'ب', 'چ': 'ج', 'گ': 'ک'
  };
  function fold(w) {
    var out = '';
    for (var i = 0; i < w.length; i++) out += FOLD[w[i]] || w[i];
    return out;
  }
  function skeleton(w) {
    var f = fold(w);
    return f[0] + f.slice(1).replace(/[اوی]/g, '');
  }

  // Damerau-Levenshtein distance, stopping early once it passes max
  function distance(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    var prev2 = null, prev = [], cur, i, j;
    for (j = 0; j <= b.length; j++) prev.push(j);
    for (i = 1; i <= a.length; i++) {
      cur = [i];
      var best = i;
      for (j = 1; j <= b.length; j++) {
        var cost = a[i - 1] === b[j - 1] ? 0 : 1;
        var v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1])
          v = Math.min(v, prev2[j - 2] + 1);
        cur.push(v);
        if (v < best) best = v;
      }
      if (best > max) return max + 1;
      prev2 = prev; prev = cur;
    }
    return prev[b.length];
  }

  // endings a typed word may be found with: ending -> letters it needs before it
  var ENDINGS = { 'ها': 3, 'های': 3, 'هایی': 3, 'شان': 3, 'ش': 3, 'م': 4, 'ا': 4, 'ت': 4 };
  var PREFIXES = ['نمی', 'می', 'ن', 'ب'];
  var SUFFIXES = ['هایی', 'های', 'ها', 'ان', 'ا', 'یم', 'ید', 'ین', 'ند', 'وم',
                  'ست', 'م', 'ت', 'ش', 'ن', 'ه', 'ی'];

  // A word without its prefix: «می‌بینم» -> «بینم», «ندیدم» -> «دیدم»
  function unprefixed(w) {
    var out = [];
    for (var i = 0; i < PREFIXES.length; i++) {
      var p = PREFIXES[i];
      var need = p.length === 1 ? 3 : 2; // «نی» and «بد» must not lose a letter
      if (w.length - p.length >= need && w.indexOf(p) === 0) out.push(w.slice(p.length));
    }
    return out;
  }
  // A word without its ending: «گوسفندا» -> «گوسفند», «شوها» -> «شو»
  function unsuffixed(w) {
    var out = [];
    for (var i = 0; i < SUFFIXES.length; i++) {
      var s = SUFFIXES[i];
      if (w.length - s.length >= 2 && w.slice(-s.length) === s) out.push(w.slice(0, -s.length));
    }
    return out;
  }

  function create(recordings, lexicon) {
    lexicon = lexicon || { SAME: [], LEMMA: {} };

    // form -> every form of the same word
    var same = {};
    lexicon.SAME.forEach(function (row) {
      var forms = row.map(function (f) { return words(f).join(''); });
      forms.forEach(function (f) {
        same[f] = same[f] || {};
        forms.forEach(function (g) { same[f][g] = 1; });
      });
    });
    var lemma = {};
    Object.keys(lexicon.LEMMA).forEach(function (k) {
      lemma[words(k).join('')] = lexicon.LEMMA[k].map(function (f) { return words(f).join(''); });
    });

    var vocab = {};   // every word spoken in the game
    function addSame(set, f) {
      if (same[f]) for (var g in same[f]) set[g] = 1;
    }

    // The keys of a word, one kind for each step of the search:
    //  self    - the word itself.
    //  listed  - for a typed word, its other spellings and forms from the
    //            word list: «من» for «مه», «کردن» for «کدم», «عمو» for «کاکا».
    //  near    - the word without its prefix or ending.
    //  surface - the word, and the word without its prefix, for forgiving
    //            spelling slips.
    // kind is 'typed', 'spoken', or 'joined' (neighbouring words run
    // together, which only ever match exactly or with one slip).
    function keysOf(w, kind) {
      var listed = {}, near = {}, surface = {};
      surface[w] = 1;
      if (kind !== 'joined') {
        if (kind === 'typed') {
          addSame(listed, w);
          // the forms of a dictionary word («کردن»), when that word is not
          // itself spoken; a spoken word («دیدن») finds only itself
          if (lemma[w] && !vocab[w]) lemma[w].forEach(function (f) { listed[f] = 1; addSame(listed, f); });
        }
        unprefixed(w).forEach(function (u) {
          if (!surface[u]) surface[u] = 2;     // 2: only a guess at the word under a prefix
          near[u] = 1;
          unprefixed(u).forEach(function (uu) { near[uu] = 1; });
        });
        Object.keys(surface).forEach(function (f) {
          unsuffixed(f).forEach(function (st) {
            near[st] = 1;
            unprefixed(st).forEach(function (u) { near[u] = 1; });
          });
        });
      }
      delete listed[w];
      delete near[w];
      var surf = Object.keys(surface);
      return {
        kind: kind,
        self: w,
        spoken: !!vocab[w],
        listed: Object.keys(listed),
        near: Object.keys(near).filter(function (k) { return k.length >= 2; }),
        surface: surf,
        derived: surf.map(function (f) { return surface[f] === 2; }),
        fold: surf.map(fold),
        skel: surf.map(skeleton)
      };
    }

    function listHas(list, k) { return list.indexOf(k) >= 0; }

    // Which step a typed word matches a spoken word at, and why; null if
    // none. 1 the word itself, or a spelling or form the word list gives
    // for it; 2 the same word with another beginning or ending; 3 a slip.
    // Stems of two letters («ره», «از», «او») only count against a whole
    // word, so «میره» never finds every «ره».
    function keysMatch(q, w) {
      var i, j, k;
      var joined = q.kind === 'joined' || w.kind === 'joined';

      // two spoken words run together only count when no single word
      // matches: «واز» is «واز», not «و از»
      if (q.self === w.self) return w.kind === 'joined' && q.kind !== 'joined' ? { step: 2, why: 'joined' } : { step: 1, why: 'same' };
      // the typed word with a plural or «his/my» ending: «سکه» finds «سکه‌های»,
      // «مادر» finds «مادرم». One-letter endings only after four letters,
      // so «مرد» never finds «مردم» nor «بری» «بریم».
      if (q.kind === 'typed' && w.kind === 'spoken' && w.self.length > q.self.length && w.self.indexOf(q.self) === 0) {
        var end = w.self.slice(q.self.length);
        if (ENDINGS[end] && q.self.length >= ENDINGS[end]) return { step: 1, why: 'ending ' + end };
      }
      for (i = 0; i < q.listed.length; i++) {
        k = q.listed[i];
        // other forms of a listed word only for a typed word spoken nowhere
        // («عمو» finds «کاکایم»), so «وخت» never finds «وقتی»
        if (k === w.self || (!q.spoken && k.length >= 3 && listHas(w.near, k))) return { step: 1, why: 'listed ' + k };
      }
      if (q.self.length >= 3 && listHas(w.near, q.self)) return { step: 2, why: 'form ' + q.self };
      for (i = 0; i < q.near.length; i++) {
        k = q.near[i];
        if (k === w.self || (k.length >= 3 && listHas(w.near, k))) return { step: 2, why: 'form ' + k };
      }

      for (i = 0; i < q.surface.length; i++) {
        var qa = q.fold[i];
        if (qa.length < 3) continue;
        for (j = 0; j < w.surface.length; j++) {
          var wa = w.fold[j];
          if (wa.length < 3) continue;
          var guess = q.derived[i] || w.derived[j];
          if (guess && Math.min(qa.length, wa.length) < 4) continue;
          var longest = Math.max(qa.length, wa.length);
          if (joined) {
            // two spoken words run together: a slip only in words of five or
            // more letters, so «پیاز» never finds «پیش از»
            if (qa === wa || (Math.min(qa.length, wa.length) >= 5 && distance(qa, wa, 1) <= 1)) return { step: 3, why: 'slip ' + qa + '/' + wa };
            continue;
          }
          // the start of a word: «روشن» for «روشنی»; or a spoken word with
          // a short ending added: «سبزه» for «سبز»
          if (wa.indexOf(qa) === 0) return { step: 3, why: 'start ' + qa + '/' + wa };
          var extra = qa.length - wa.length;
          if (qa.indexOf(wa) === 0 && (extra === 1 || (extra === 2 && SUFFIXES.indexOf(qa.slice(wa.length)) >= 0)))
            return { step: 3, why: 'ending ' + qa + '/' + wa };
          // a spelling slip. Letters that sound alike always count as the
          // same; a wrong, missing or extra letter only in words of four or
          // more letters, since «خوش» and «خوب» are both real words.
          if (qa === wa) return { step: 3, why: 'sounds ' + qa };
          var allowed = longest >= 7 ? 2 : 1;
          if (Math.min(qa.length, wa.length) >= 4 && distance(qa, wa, allowed) <= allowed)
            return { step: 3, why: 'slip ' + qa + '/' + wa };
          // vowel letters left out
          if (!guess && q.skel[i].length >= 3 && q.skel[i] === w.skel[j]) return { step: 3, why: 'vowels ' + q.skel[i] };
        }
      }
      return null;
    }

    // Build the index: every spoken word, and every pair of neighbours
    // written together, for players who leave out a space.
    var index = recordings.map(function (r) {
      var ws = words(r.text);
      var units = ws.map(function (w) { return [w, 'spoken']; });
      for (var i = 0; i + 1 < ws.length; i++) units.push([ws[i] + ws[i + 1], 'joined']);
      var seen = {}, keys = [];
      units.forEach(function (u) {
        if (seen[u[0]]) return;
        seen[u[0]] = 1;
        var k = keysOf(u[0], u[1]);
        k.word = u[0];
        keys.push(k);
      });
      return { id: r.id, keys: keys };
    });

    index.forEach(function (rec) { rec.keys.forEach(function (k) { if (k.kind === 'spoken') vocab[k.self] = 1; }); });

    // «می بینم» typed with a space becomes one word again
    var JOIN_NEXT = { 'می': 1, 'نمی': 1 };
    var JOIN_PREV = { 'ها': 1, 'های': 1, 'هایی': 1, 'ای': 1, 'ام': 1 };
    function queryWords(q) {
      var ws = words(q), out = [];
      for (var i = 0; i < ws.length; i++) {
        var w = ws[i];
        if (JOIN_NEXT[w] && i + 1 < ws.length) { ws[i + 1] = w + ws[i + 1]; continue; }
        if (JOIN_PREV[w] && out.length) { out[out.length - 1] += w; continue; }
        out.push(w);
      }
      return out;
    }

    var cache = {};
    function queryKeys(w, kind) {
      kind = kind || 'typed';
      if (!cache[kind + w]) cache[kind + w] = keysOf(w, kind);
      return cache[kind + w];
    }
    // the closest step at which a typed word matches anything in a recording
    function stepIn(qk, rec) {
      var best = 0;
      for (var i = 0; i < rec.keys.length; i++) {
        var m = keysMatch(qk, rec.keys[i]);
        if (m && (!best || m.step < best)) { best = m.step; if (best === 1) break; }
      }
      return best;
    }
    // The recordings a typed word finds: those with the word itself; only
    // if it is spoken nowhere, those with another form of it; only if
    // there are none, those with a word it could be a misspelling of.
    var found = {};
    function recordingsFor(w, kind) {
      var key = (kind || 'typed') + w;
      if (found[key]) return found[key];
      var qk = queryKeys(w, kind), steps = {}, best = 0;
      index.forEach(function (rec) {
        var s = stepIn(qk, rec);
        if (!s) return;
        steps[rec.id] = s;
        if (!best || s < best) best = s;
      });
      var set = {};
      Object.keys(steps).forEach(function (id) { if (steps[id] === best) set[id] = 1; });
      return (found[key] = set);
    }

    function search(query) {
      var qs = queryWords(query), n = qs.length;
      if (!n) return { words: qs, ids: [] };
      // runs[i][len]: the recordings for typed words i .. i+len-1; a run of
      // two or more is those words written together as one spoken word
      // («دی شو» -> «دیشو», «هیچ کدام شان» -> «هیچ‌کدام‌شان»)
      var runs = qs.map(function (w, i) {
        var r = [null, recordingsFor(w)];
        for (var len = 2; len <= 4 && i + len <= n; len++)
          r[len] = recordingsFor(qs.slice(i, i + len).join(''), 'joined');
        return r;
      });
      var all = [];
      index.forEach(function (rec) {
        // every typed word must be found, alone or run together with its neighbours
        var ok = [true];
        for (var e = 1; e <= n; e++) {
          ok[e] = false;
          for (var len = 1; len <= 4 && len <= e; len++) {
            if (runs[e - len][len][rec.id] && ok[e - len]) ok[e] = true;
          }
        }
        if (ok[n]) all.push(rec.id);
      });
      return { words: qs, ids: all };
    }

    // For tuning the word list: which spoken word each typed word matched, and why.
    function explain(query) {
      var out = [];
      queryWords(query).forEach(function (qw) {
        var qk = queryKeys(qw), set = recordingsFor(qw);
        index.forEach(function (rec) {
          if (!set[rec.id]) return;
          rec.keys.forEach(function (wk) {
            var m = keysMatch(qk, wk);
            if (m) out.push(rec.id + ' ' + qw + ' -> ' + wk.word + ' (' + m.why + ', step ' + m.step + ')');
          });
        });
      });
      return out;
    }

    return { search: search, explain: explain, words: words, clean: clean };
  }

  var api = { create: create, clean: clean, words: words, distance: distance };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.JinnSearch = api;
})(this);
