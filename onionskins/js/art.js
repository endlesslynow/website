/* The recordings' pictures: the engine. Everything is drawn at camcorder
   resolution (256 x 192), then every pixel of the place is forced onto a
   small fixed set of colours for that place, with a checkerboard blend
   where two colours meet. That last step is what makes it read as pixel
   art. The speaker, made from the owner's drawing, goes on top.

   The places themselves are in places.js (loaded after this file). Each
   place has:
     palette  - its colours
     back()   - the parts that never move, drawn once
     live()   - the parts that move: flame, water, snow, flags, birds
     light    - how the speaker is recoloured for that place's light
     tint     - the camcorder's colour cast there
     windy    - whether its wind moves hair
*/
(function (root) {
  'use strict';
  var W = 256, H = 192;

  // ---------- small helpers ----------
  function rgb(h) { return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]; }
  function rand(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function hash2(x, y) {
    var h = x * 374761393 + y * 668265263;
    h = (h ^ (h >>> 13)) * 1274126177;
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  }
  function noise(x, y) { // smooth value noise, 0..1
    var xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    var u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    var a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  }
  function fbm(x, y) { return noise(x, y) * 0.55 + noise(x * 2.1, y * 2.1) * 0.3 + noise(x * 4.3, y * 4.3) * 0.15; }

  // smooth path through points (Catmull-Rom as Bezier)
  function trace(ctx, pts, closed) {
    var n = pts.length;
    ctx.moveTo(pts[0][0], pts[0][1]);
    var last = closed ? n : n - 1;
    for (var i = 0; i < last; i++) {
      var p0 = pts[(i - 1 + n) % n], p1 = pts[i], p2 = pts[(i + 1) % n], p3 = pts[(i + 2) % n];
      if (!closed) { if (i === 0) p0 = p1; if (i + 2 >= n) p3 = p2; }
      ctx.bezierCurveTo(p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6,
                        p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6, p2[0], p2[1]);
    }
    if (closed) ctx.closePath();
  }
  function blob(ctx, pts, fill) { ctx.beginPath(); trace(ctx, pts, true); ctx.fillStyle = fill; ctx.fill(); }
  function poly(ctx, pts, fill) {
    ctx.beginPath(); ctx.moveTo(pts[0][0], pts[0][1]);
    for (var i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    ctx.closePath(); ctx.fillStyle = fill; ctx.fill();
  }
  function line(ctx, pts, color, width) {
    ctx.beginPath(); trace(ctx, pts, false);
    ctx.strokeStyle = color; ctx.lineWidth = width || 1; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.stroke();
  }
  function px(ctx, x, y, color, w, h) { ctx.fillStyle = color; ctx.fillRect(Math.round(x), Math.round(y), w || 1, h || 1); }
  function oval(ctx, x, y, rx, ry, fill) { ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fillStyle = fill; ctx.fill(); }
  function glow(ctx, x, y, r, color, alpha) {
    var g = ctx.createRadialGradient(x, y, 0, x, y, r);
    var c = rgb(color);
    g.addColorStop(0, 'rgba(' + c + ',' + alpha + ')');
    g.addColorStop(1, 'rgba(' + c + ',0)');
    ctx.fillStyle = g; ctx.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // draw the inside of a shape only: clip, run fn, restore
  function inside(ctx, pts, fn) { ctx.save(); ctx.beginPath(); trace(ctx, pts, true); ctx.clip(); fn(); ctx.restore(); }
  function shift(pts, dx, dy) { return pts.map(function (p) { return [p[0] + dx, p[1] + dy]; }); }
  function mirror(pts, cx) { return pts.map(function (p) { return [2 * cx - p[0], p[1]]; }); }

  function canvas(w, h) {
    var c = typeof document !== 'undefined' ? document.createElement('canvas') : null;
    c.width = w; c.height = h; return c;
  }

  // ---------- colour reduction ----------
  var BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  function makeQuantizer(palette) {
    var pal = palette.map(rgb), lut = new Int16Array(32768).fill(-1);
    function nearest(r, g, b) {
      var key = (r >> 3) << 10 | (g >> 3) << 5 | (b >> 3);
      var v = lut[key];
      if (v >= 0) return v;
      var best = 0, bd = 1e9;
      var rr = (r & 248) + 4, gg = (g & 248) + 4, bb = (b & 248) + 4;
      for (var i = 0; i < pal.length; i++) {
        var dr = rr - pal[i][0], dg = gg - pal[i][1], db = bb - pal[i][2];
        // weigh green most, as the eye does
        var d = dr * dr * 3 + dg * dg * 4 + db * db * 2;
        if (d < bd) { bd = d; best = i; }
      }
      lut[key] = best; return best;
    }
    var exact = {};
    pal.forEach(function (c) { exact[c[0] << 16 | c[1] << 8 | c[2]] = 1; });
    return function (img) {
      var d = img.data;
      for (var y = 0; y < img.height; y++) for (var x = 0; x < img.width; x++) {
        var o = (y * img.width + x) * 4;
        var r = d[o], g = d[o + 1], b = d[o + 2];
        if (exact[r << 16 | g << 8 | b]) continue;
        var t = (BAYER[(y & 3) * 4 + (x & 3)] - 7.5) * 3.2;
        var i = nearest(Math.max(0, Math.min(255, r + t)), Math.max(0, Math.min(255, g + t)), Math.max(0, Math.min(255, b + t)));
        d[o] = pal[i][0]; d[o + 1] = pal[i][1]; d[o + 2] = pal[i][2];
      }
    };
  }

  // Characters made from the owner's drawings (sketches/), already turned
  // into pixel art by build/make_character.py and gathered in
  // game/js/characters.js. A face is mixed while playing from three pieces:
  // brows, eyes and mouth, each the pixels that differ from the plain face
  // in its own band of the face. Blinks swap the eyes piece for its closed
  // or half-closed version; talking swaps the mouth piece for it open at one
  // of three widths. Faces with the head tilted are whole pictures. Hair in
  // the wind (Farid) is three versions of the plain figure underneath.
  var SKETCHED = {};
  function sketchPixels(varName, placeName) {
    var key = varName + '|' + (placeName || '');
    if (SKETCHED[key]) return SKETCHED[key];
    var d = root[varName], pal = graded(d.palette.map(rgb), varName, placeName);
    function paint(b64, w, h) {
      var bin = atob(b64), c = canvas(w, h), cx = c.getContext('2d'), img = cx.createImageData(w, h);
      for (var i = 0; i < bin.length; i++) {
        var v = bin.charCodeAt(i);
        if (v === 255) continue;
        img.data[i * 4] = pal[v][0]; img.data[i * 4 + 1] = pal[v][1]; img.data[i * 4 + 2] = pal[v][2]; img.data[i * 4 + 3] = 255;
      }
      cx.putImageData(img, 0, 0);
      return c;
    }
    var made = {};
    function piece(key, p) {
      if (!p) return null;
      if (!made[key]) made[key] = { x: p.x, y: p.y, c: paint(p.px, p.w, p.h) };
      return made[key];
    }
    // a wind position: 253 = leave the pixel, 255 = empty it, else its colour
    function blow(fig, p) {
      var c = canvas(d.w, d.h), cx = c.getContext('2d', { willReadFrequently: true });
      cx.drawImage(fig, 0, 0);
      var img = cx.getImageData(p.x, p.y, p.w, p.h), bin = atob(p.px);
      for (var i = 0; i < bin.length; i++) {
        var v = bin.charCodeAt(i);
        if (v === 253) continue;
        if (v === 255) { img.data[i * 4 + 3] = 0; continue; }
        img.data[i * 4] = pal[v][0]; img.data[i * 4 + 1] = pal[v][1]; img.data[i * 4 + 2] = pal[v][2]; img.data[i * 4 + 3] = 255;
      }
      cx.putImageData(img, p.x, p.y);
      return c;
    }
    var plain = paint(d.px, d.w, d.h);
    var bases = [plain].concat((d.wind || []).slice(1).map(function (p) { return p ? blow(plain, p) : plain; }));
    var tilted = {};
    SKETCHED[key] = {
      d: d,
      base: function (wind) { return bases[wind] || plain; },
      // a face: a name from d.faces, or a mix {brows, eyes, mouth, open}
      face: function (spec) {
        var f = typeof spec === 'string' ? (d.faces[spec] || d.faces.neutral) : (spec || {});
        return f;
      },
      brows: function (n) { return piece('b' + n, d.brows[n]); },
      eyes: function (n, stage) {
        var e = d.eyes[n] || d.eyes.neutral;
        if (!d.eyes[n]) n = 'neutral';
        return piece('e' + stage + n, e[stage]);
      },
      mouth: function (n, level) {
        var m = d.mouths[n] || d.mouths.neutral;
        if (!d.mouths[n]) n = 'neutral';
        return level ? piece('m' + level + n, m.talk[level - 1]) : piece('m0' + n, m.p);
      },
      tilted: function (n) {
        var t = d.tilted[n];
        if (!t) return null;
        if (!tilted[n]) tilted[n] = {
          fig: paint(t.full, d.w, d.h), closed: piece('tc' + n, t.closed), half: piece('th' + n, t.half),
          talk: t.talk.map(function (p, i) { return piece('tt' + i + n, p); })
        };
        return tilted[n];
      }
    };
    return SKETCHED[key];
  }
  function drawSketched(varName, ctx, s, placeName) {
    var S = sketchPixels(varName, placeName), d = S.d, f = S.face(s.expr || 'neutral');
    var ox = d.x + s.sway, oy = d.y + s.bob;
    var level = s.mouth || f.open || 0, stage = s.blink > 0.5 ? 'closed' : s.blink > 0.2 ? 'half' : 'p';
    function put(p) { if (p) ctx.drawImage(p.c, ox + p.x, oy + p.y); }
    var T = f.tilted && S.tilted(f.tilted);
    if (T) {                      // the whole head leans: one picture
      ctx.drawImage(T.fig, ox, oy);
      put(level ? T.talk[level - 1] : null);
      put(stage === 'p' ? null : T[stage]);
      return;
    }
    ctx.drawImage(S.base(s.wind || 0), ox, oy);
    put(S.brows(f.brows || 'neutral'));
    put(S.eyes(f.eyes || 'neutral', stage));
    put(S.mouth(f.mouth || 'neutral', level));
  }

  // ---------- each place's light on the speaker ----------
  // A figure is built once, lit close to its drawing. While playing, its
  // colours are changed for the place: multiplied (mul), then saturation
  // (sat), brightness (gain) and contrast (gamma). BASE first undoes a
  // figure built for one particular light (Maryam and Farid were built for
  // the demo's dusk courtyard and night mountain).
  var BASE = {
    JINN_MARYAM: { mul: [0.96, 1.03, 1.05], gain: 0.95 },
    JINN_FARID: { mul: [1.28, 1.14, 0.94], sat: 1.3, gain: 1.05, gamma: 0.95 }
  };
  function applyLight(pal, L) {
    if (!L) return pal;
    var mul = L.mul || [1, 1, 1], sat = L.sat == null ? 1 : L.sat, gain = L.gain == null ? 1 : L.gain,
        gamma = L.gamma || 1, lift = L.lift || 0;
    return pal.map(function (c) {
      var r = c[0] / 255 * mul[0], g = c[1] / 255 * mul[1], b = c[2] / 255 * mul[2];
      var grey = (r + g + b) / 3;
      r = grey + (r - grey) * sat; g = grey + (g - grey) * sat; b = grey + (b - grey) * sat;
      return [r, g, b].map(function (v) {
        v = Math.max(0, Math.min(1, v * gain + lift));
        return Math.round(Math.pow(v, gamma) * 255);
      });
    });
  }
  function graded(pal, varName, placeName) {
    var place = PLACES[placeName];
    return applyLight(applyLight(pal, BASE[varName]), place && place.light);
  }

  // ======================================================================
  // The places, filled in by places.js.
  var PLACES = {};

  // The character drawn for a speaker in a place: a drawing built for that
  // place if there is one (JINN_FARID_COURTYARD), else their usual one.
  function figureFor(speaker, placeName) {
    if (!speaker) return null;
    var own = 'JINN_' + speaker.toUpperCase(), there = own + '_' + placeName.toUpperCase();
    return root[there] ? there : root[own] ? own : null;
  }
  // gusts on a windy place, the same ones that bend the grass
  function windAt(t) {
    var w = Math.sin(t * 1.7) * 0.5 + 0.8 + Math.sin(t * 5.3) * 0.25;
    return w < 0.6 ? 0 : w < 1.05 ? 1 : 2;
  }

  // Backgrounds and colour reduction are shared by every recording made in
  // the same place, so hundreds of recordings cost no more than ten.
  var BACKS = {}, QUANT = {};

  // A renderer for one recording. frame(t, state) returns a 256 x 192 canvas.
  // opts.speaker: who is filmed; opts.empty: nobody (the ending).
  function Scene(placeName, recId, opts) {
    var place = PLACES[placeName], empty = opts && opts.empty;
    var sketch = !empty && figureFor(opts && opts.speaker, placeName);
    if (!BACKS[placeName]) {
      BACKS[placeName] = canvas(W, H);
      place.back(BACKS[placeName].getContext('2d'));
      QUANT[placeName] = makeQuantizer(place.palette);
    }
    var back = BACKS[placeName], quantize = QUANT[placeName];
    var out = canvas(W, H), octx = out.getContext('2d', { willReadFrequently: true });
    this.canvas = out;
    this.frame = function (t, state) {
      octx.clearRect(0, 0, W, H);
      octx.drawImage(back, 0, 0);
      place.live(octx, t, recId);
      var img = octx.getImageData(0, 0, W, H);
      quantize(img);
      octx.putImageData(img, 0, 0);
      // a figure made from a drawing has its own colours: it goes on after
      // the place is reduced to the place's colours
      if (sketch) {
        state.t = t;
        state.wind = place.windy ? windAt(t) : 0;
        drawSketched(sketch, octx, state, placeName);
      }
      if (place.front) place.front(octx, t, recId);
      return out;
    };
  }

  // How the speaker moves on their own: breathing, blinking, small shifts
  // of weight and gaze. mouthLevel (0..1) comes from the voice loudness.
  function Motion(seed) {
    var r = rand(seed), nextBlink = 1 + r() * 2, blinkAt = -10, nextShift = 2 + r() * 3, sway = 0, look = 0, mouthNow = 0;
    // a blink now, unless one just happened: face changes hide inside it
    this.blinkNow = function (t) {
      if (t - blinkAt > 0.8) { blinkAt = t; nextBlink = t + 1.8 + r() * 2.5; }
    };
    this.state = function (t, mouthLevel, speaking) {
      if (t > nextBlink) { blinkAt = t; nextBlink = t + 2 + r() * 3.5; }
      var bt = t - blinkAt, blink = bt < 0.05 ? 0.35 : bt < 0.13 ? 1 : bt < 0.18 ? 0.35 : 0;
      if (t > nextShift) { nextShift = t + 2.5 + r() * 4; sway = Math.round((r() - 0.5) * 3); look = r() > 0.6 ? (r() > 0.5 ? 1 : -1) : 0; }
      var breath = Math.sin(t * 1.9);
      var m = speaking ? (mouthLevel > 0.72 ? 3 : mouthLevel > 0.45 ? 2 : mouthLevel > 0.15 ? 1 : 0) : 0;
      // the mouth moves one step per picture, so it never snaps shut or wide open
      mouthNow += m > mouthNow ? 1 : m < mouthNow ? -1 : 0;
      return { blink: blink, bob: breath > 0.35 ? -1 : 0, sway: sway, look: look, mouth: mouthNow };
    };
  }

  // Which face the speaker wears at time t, from a recording's cues (see
  // 'faces' in build/lines/) and the times its words are spoken.
  function faceAt(faces, words, t) {
    var face = 'neutral';
    if (!faces) return face;
    var last = words.length - 1;
    for (var i = 0; i < faces.length; i++) {
      var c = faces[i], at;
      if (c.at === 'start') at = 0;
      else if (c.at === 'end') at = words[last][1] + 0.12;
      else if (c.after != null) at = words[c.after][1] + 0.25;
      else at = words[c.at][0] - 0.08;   // a face comes a moment before its word
      if (t >= at) face = c.face;
    }
    return face;
  }

  root.JinnArt = { W: W, H: H, Scene: Scene, Motion: Motion, PLACES: PLACES, faceAt: faceAt,
    // drawing helpers for places.js
    draw: { rgb: rgb, rand: rand, hash2: hash2, noise: noise, fbm: fbm, trace: trace, blob: blob, poly: poly,
            line: line, px: px, oval: oval, glow: glow, inside: inside, shift: shift, mirror: mirror },
    // the characters built from drawings, and the camcorder's cast in a place
    characters: function () { return root.JINN_CHARACTERS || []; },
    tint: function (place) { return (PLACES[place] || { tint: [1, 1, 1] }).tint; },
    // a character made from a drawing: the names of their faces, and of
    // their pieces for mixing
    expressions: function (who) {
      var d = root['JINN_' + who.toUpperCase()];
      return d ? Object.keys(d.faces) : [];
    },
    faceOf: function (who, name) {
      var d = root['JINN_' + who.toUpperCase()];
      return d && d.faces[name];
    },
    pieces: function (who) {
      var d = root['JINN_' + who.toUpperCase()];
      return d ? { brows: Object.keys(d.brows), eyes: Object.keys(d.eyes), mouth: Object.keys(d.mouths) } : null;
    } };
})(this);
