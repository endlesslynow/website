/* The ten places where the recordings were made, one per setting in
   story_elements/settings.md. Loaded after art.js, which draws them.

   Each place:
     palette  - its colours; every pixel of the place is forced onto them
     back()   - the parts that never move, drawn once and shared by every
                recording made there
     live()   - the parts that move, drawn every picture
     front()  - (optional) drawn over the speaker, e.g. snow falling
     light    - how the speaker's colours change in this light
     tint     - the camcorder's colour cast
     windy    - whether its wind moves hair (only drawings built with wind)

   The speaker covers the middle of the picture from about x 20 to 240, so
   what matters in each place is at the top and at the two sides. */
(function (root) {
  'use strict';
  var A = root.JinnArt, D = A.draw, W = 256, H = 192;
  var rand = D.rand, hash2 = D.hash2, noise = D.noise, fbm = D.fbm, blob = D.blob, poly = D.poly,
      line = D.line, px = D.px, oval = D.oval, glow = D.glow, inside = D.inside;

  function palette(P) { return Object.keys(P).map(function (k) { return P[k]; }); }
  function sky(ctx, stops, h) {
    var g = ctx.createLinearGradient(0, 0, 0, h);
    stops.forEach(function (s) { g.addColorStop(s[0], s[1]); });
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, h);
  }
  // A rough surface (mud, earth, rock): every pixel in the box gets one of
  // cols (dark to light), from a smooth noise plus shade(x, y) (0..1).
  function surface(ctx, x0, y0, x1, y1, cols, shade, scale, seed) {
    scale = scale || 0.08; seed = seed || 0;
    for (var y = Math.floor(y0); y < y1; y++) for (var x = Math.floor(x0); x < x1; x++) {
      var n = fbm((x + seed) * scale, (y + seed * 3) * scale) * 0.7 + hash2(x + seed * 17, y) * 0.3;
      var v = shade(x, y) + (n - 0.5) * 0.55;
      var i = Math.max(0, Math.min(cols.length - 1, Math.floor(v * cols.length)));
      px(ctx, x, y, cols[i]);
    }
  }
  function inPoly(ctx, pts, fn) { inside(ctx, pts, fn); }
  // leaves: a cloud of small clumps around (cx, cy)
  function foliage(ctx, cx, cy, rx, ry, cols, seed, density) {
    var r = rand(seed);
    var n = Math.round(rx * ry * (density || 0.09));
    for (var i = 0; i < n; i++) {
      var a = r() * Math.PI * 2, d = Math.sqrt(r());
      var x = cx + Math.cos(a) * rx * d, y = cy + Math.sin(a) * ry * d;
      var light = (cy - y) / ry * 0.4 + (cx - x) / rx * 0.25 + r() * 0.5;
      var ci = Math.max(0, Math.min(cols.length - 1, Math.floor((light + 0.5) * cols.length * 0.8)));
      var s = 1 + Math.floor(r() * 3);
      ctx.fillStyle = cols[ci]; ctx.fillRect(Math.round(x), Math.round(y), s + 1, s);
    }
  }
  function stars(ctx, t, n, seed, maxY, c1, c2) {
    var r = rand(seed);
    for (var i = 0; i < n; i++) {
      var x = r() * W, y = r() * maxY, ph = r() * 9;
      var tw = Math.sin(t * (1 + ph * 0.2) + ph * 5);
      if (tw > -0.3) px(ctx, x, y, tw > 0.55 ? c1 : c2);
    }
  }
  // a bird crossing the sky every `every` seconds
  function bird(ctx, t, every, offset, y0, col, speed) {
    var ph = (t + offset) % every, x = ph * (speed || 60) - 10;
    if (x > W + 10) return;
    var y = y0 + Math.sin(ph * 2.3) * 4, f = Math.sin(ph * 18) > 0 ? -1 : 1;
    px(ctx, x, y, col, 2, 1); px(ctx, x - 2, y + f, col, 2, 1); px(ctx, x + 2, y + f, col, 2, 1);
  }

  var PLACES = A.PLACES;

  // ======================================================================
  //  1. IN FRONT OF A HOUSE, EVENING  (the demo's courtyard at dusk)
  // ======================================================================
  var C = {
    sky0: '#2b1d45', sky1: '#4a2c5a', sky2: '#7a3a64', sky3: '#b8506a', sky4: '#e0785c', sky5: '#f2a65a', sky6: '#f7cf86',
    hill0: '#3a2448', hill1: '#2a1a3a', hill2: '#51305a',
    wall0: '#3d2530', wall1: '#5c3838', wall2: '#7e4f45', wall3: '#a36a4f', wall4: '#c98b5e', wall5: '#e3ad74',
    wood0: '#24141c', wood1: '#3e2226', wood2: '#5e3429', wood3: '#824a30',
    iron: '#1a1218', lamp0: '#fff3c4', lamp1: '#ffc861', lamp2: '#f08a3c',
    cloth0: '#1f2a52', cloth1: '#2f4478', cloth2: '#c23b4a', cloth3: '#e7c05a',
    gold0: '#a8782c', gold1: '#e0b040',
    ink: '#1a0c18', star: '#f4e8d8'
  };
  function houseBack(ctx) {
    // sky: last of the daylight low down, night coming from above
    sky(ctx, [[0, C.sky0], [0.3, C.sky1], [0.52, C.sky2], [0.7, C.sky3], [0.84, C.sky4], [0.94, C.sky5], [1, C.sky6]], 100);
    // thin streaks of cloud catching the sun
    var r = rand(7);
    for (var i = 0; i < 7; i++) {
      var cy = 30 + r() * 45, cx = r() * W, len = 30 + r() * 70;
      ctx.fillStyle = cy > 55 ? C.sky5 : C.sky3;
      ctx.fillRect(Math.round(cx), Math.round(cy), Math.round(len), 1);
      ctx.fillStyle = cy > 55 ? C.sky4 : C.sky2;
      ctx.fillRect(Math.round(cx + 6), Math.round(cy + 1), Math.round(len * 0.6), 1);
    }
    // far mountains, flat and dark against the glow
    ctx.beginPath(); ctx.moveTo(0, 100);
    var ridge = [[0, 78], [22, 72], [40, 76], [62, 64], [80, 70], [104, 58], [124, 66], [150, 60], [176, 50], [196, 57], [214, 48], [232, 58], [256, 62]];
    ridge.forEach(function (p) { ctx.lineTo(p[0], p[1] + 12); });
    ctx.lineTo(256, 100); ctx.closePath(); ctx.fillStyle = C.hill0; ctx.fill();
    ctx.beginPath(); ctx.moveTo(0, 100);
    [[0, 86], [30, 80], [58, 88], [90, 78], [120, 86], [160, 76], [200, 84], [230, 78], [256, 84]]
      .forEach(function (p) { ctx.lineTo(p[0], p[1] + 8); });
    ctx.lineTo(256, 100); ctx.closePath(); ctx.fillStyle = C.hill1; ctx.fill();
    ctx.beginPath(); ridge.forEach(function (p, k) { if (k) ctx.lineTo(p[0], p[1] + 12); else ctx.moveTo(p[0], p[1] + 12); });
    ctx.strokeStyle = C.hill2; ctx.lineWidth = 1; ctx.stroke();

    // mud-brick wall, uneven top, straw-and-mud plaster
    var wallTop = function (x) { return 94 + Math.sin(x * 0.05) * 1.5 + (noise(x * 0.15, 3) - 0.5) * 4; };
    for (var x = 0; x < W; x++) {
      var top = Math.round(wallTop(x));
      for (var y = top; y < H; y++) {
        var n = fbm(x * 0.08, y * 0.08) * 0.7 + hash2(x, y) * 0.3;
        var shade = 0.35 + n * 0.5 - (y - top) * 0.0025;
        if (y < top + 3) shade += 0.35; // sun on the top edge
        var col = shade > 0.9 ? C.wall5 : shade > 0.74 ? C.wall4 : shade > 0.58 ? C.wall3 : shade > 0.44 ? C.wall2 : shade > 0.3 ? C.wall1 : C.wall0;
        px(ctx, x, y, col);
      }
      px(ctx, x, top - 1, C.wall4);
    }
    var r2 = rand(11);
    for (i = 0; i < 260; i++) {
      var sx = r2() * W, sy = 100 + r2() * 92;
      px(ctx, sx, sy, r2() > 0.5 ? C.wall4 : C.wall1, r2() > 0.6 ? 2 : 1, 1);
    }
    line(ctx, [[196, 120], [200, 132], [197, 140], [203, 152]], C.wall0, 1);
    line(ctx, [[150, 170], [156, 178], [154, 190]], C.wall0, 1);
    for (y = 112; y < H; y += 17) {
      ctx.fillStyle = C.wall1;
      for (x = 0; x < W; x += 1) if (noise(x * 0.3, y) > 0.45) ctx.fillRect(x, y + Math.round(noise(x * 0.1, y) * 2), 1, 1);
    }

    // wooden door, deep in the wall, carved panels
    var dx = 8, dy = 104, dw = 46, dh = 88;
    ctx.fillStyle = C.wall0; ctx.fillRect(dx - 5, dy - 5, dw + 10, dh + 5);
    ctx.fillStyle = C.wood1; ctx.fillRect(dx - 3, dy - 3, dw + 6, dh + 3);
    ctx.fillStyle = C.wood3; ctx.fillRect(dx - 3, dy - 3, dw + 6, 2);
    ctx.fillStyle = C.wood2; ctx.fillRect(dx, dy, dw, dh);
    for (y = dy; y < dy + dh; y++) for (x = dx; x < dx + dw; x++) {
      if (noise(x * 0.9, y * 0.06) > 0.66) px(ctx, x, y, C.wood1);
      else if (noise(x * 0.7, y * 0.05 + 9) > 0.72) px(ctx, x, y, C.wood3);
    }
    ctx.fillStyle = C.wood0; ctx.fillRect(dx + dw / 2 - 1, dy, 2, dh);
    [[dx + 5, dy + 6], [dx + dw / 2 + 4, dy + 6], [dx + 5, dy + 44], [dx + dw / 2 + 4, dy + 44]].forEach(function (p) {
      ctx.fillStyle = C.wood1; ctx.fillRect(p[0], p[1], 15, 32);
      ctx.fillStyle = C.wood3; ctx.fillRect(p[0], p[1], 15, 1); ctx.fillRect(p[0], p[1], 1, 32);
      ctx.fillStyle = C.wood0; ctx.fillRect(p[0] + 3, p[1] + 3, 9, 26);
      ctx.fillStyle = C.wood2; ctx.fillRect(p[0] + 7, p[1] + 10, 1, 9); ctx.fillRect(p[0] + 4, p[1] + 14, 7, 1);
    });
    ctx.strokeStyle = C.iron; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(dx + dw / 2 - 5, dy + 44, 3, 0, 7); ctx.stroke();
    ctx.beginPath(); ctx.arc(dx + dw / 2 + 5, dy + 44, 3, 0, 7); ctx.stroke();
    ctx.fillStyle = C.lamp2; ctx.fillRect(dx + dw / 2, dy + 20, 1, 50);

    // clothes line and nail for the lamp
    line(ctx, [[170, 100], [222, 106], [256, 104]], C.wood0, 1);
    px(ctx, 72, 108, C.iron, 2, 2);
  }
  function houseLive(ctx, t, rec) {
    stars(ctx, t, 22, 3, 40, C.star, C.sky3);
    // lamp: flame flickers, glow breathes on the wall and door
    var fl = 0.8 + 0.12 * Math.sin(t * 13) + 0.08 * Math.sin(t * 29 + 1) + 0.05 * noise(t * 6, 1);
    var LX = 73;
    glow(ctx, LX, 124, 52 * fl, C.lamp1, 0.34);
    glow(ctx, LX, 124, 18 * fl, C.lamp0, 0.42);
    line(ctx, [[LX, 109], [LX, 115]], C.iron, 1);
    ctx.fillStyle = C.iron; ctx.fillRect(LX - 5, 115, 11, 2); ctx.fillRect(LX - 4, 131, 9, 2);
    ctx.fillStyle = C.gold0; ctx.fillRect(LX - 4, 117, 1, 14); ctx.fillRect(LX + 4, 117, 1, 14);
    ctx.fillStyle = C.lamp2; ctx.fillRect(LX - 3, 117, 7, 14);
    var fh = Math.round(5 + fl * 3), sway = Math.round(Math.sin(t * 7) * 0.8);
    blob(ctx, [[LX + sway, 128 - fh], [LX + 2, 127], [LX + 1, 130], [LX - 1, 130], [LX - 2, 127]], C.lamp1);
    px(ctx, LX + sway * 0.5, 126, C.lamp0, 1, 3);

    // hanging cloth sways in the evening air
    var clothX = 226, clothY = 106;
    var sw = Math.sin(t * 1.4) * 2.5 + Math.sin(t * 3.1) * 0.8;
    var pts = [[clothX, clothY], [clothX + 34, clothY - 1], [clothX + 36 + sw, clothY + 40], [clothX + 18 + sw * 0.8, clothY + 42 + Math.sin(t * 2) * 1.5], [clothX + 2 + sw, clothY + 40]];
    poly(ctx, pts, C.cloth1);
    inside(ctx, pts, function () {
      for (var yy = 0; yy < 44; yy += 6) {
        ctx.fillStyle = yy % 12 ? C.cloth2 : C.cloth3;
        ctx.fillRect(clothX - 2, clothY + yy + 3 + Math.round(sw * yy / 44), 42, 2);
      }
      for (var k = 0; k < 5; k++) {
        ctx.fillStyle = C.cloth0; ctx.fillRect(clothX + 3 + k * 7 + Math.round(sw * 0.5), clothY, 2, 44);
      }
      ctx.fillStyle = C.cloth0; ctx.fillRect(clothX, clothY + 20, 40, 1);
    });
    px(ctx, clothX + 1, clothY - 1, C.wood3, 2, 2); px(ctx, clothX + 32, clothY - 2, C.wood3, 2, 2);
  }
  PLACES.house = { palette: palette(C), back: houseBack, live: houseLive, ink: C.ink,
    light: { mul: [1.06, 0.94, 0.86], gain: 0.94, gamma: 1.04 }, tint: [1.05, 0.98, 0.9], windy: false };

  // ======================================================================
  //  2. OUTSIDE WITH MOUNTAINS BEHIND, SNOWING, NIGHT  (the demo's mountain)
  // ======================================================================
  var S = {
    sky0: '#07080f', sky1: '#0e1220', sky2: '#171d30', sky3: '#222a42', haze: '#343f5c',
    far0: '#1a2034', far1: '#252e48', far2: '#36425f', peak0: '#7e90b4', peak1: '#b8c8e4',
    near0: '#141a2a', near1: '#1e2638', near2: '#2c3650', rock: '#10141f',
    snow0: '#4a5878', snow1: '#6e82a8', snow2: '#9fb2d4', snow3: '#c8d6ee', flake: '#eef3ff',
    win0: '#c88a40', win1: '#f0c878', ink: '#04040a'
  };
  function snowBack(ctx) {
    sky(ctx, [[0, S.sky0], [0.35, S.sky1], [0.7, S.sky2], [1, S.sky3]], 130);
    // the moon lost behind snow cloud
    glow(ctx, 60, 30, 60, S.haze, 0.55);
    glow(ctx, 60, 30, 22, S.far2, 0.5);
    var far = [[0, 104], [18, 96], [36, 100], [58, 84], [72, 92], [96, 76], [118, 90], [140, 82], [164, 94], [188, 80], [206, 88], [228, 74], [256, 90]];
    ctx.beginPath(); ctx.moveTo(0, 140); far.forEach(function (p) { ctx.lineTo(p[0], p[1]); }); ctx.lineTo(256, 140); ctx.closePath();
    ctx.fillStyle = S.far1; ctx.fill();
    // the far range is white with snow down its sides
    for (var i = 1; i < far.length - 1; i++) {
      var p = far[i];
      if (p[1] < far[i - 1][1] && p[1] < far[i + 1][1]) {
        poly(ctx, [[p[0], p[1]], [p[0] - 18, p[1] + 16], [p[0] - 8, p[1] + 12], [p[0] - 2, p[1] + 18], [p[0] + 6, p[1] + 11], [p[0] + 16, p[1] + 17]], S.peak0);
        poly(ctx, [[p[0], p[1]], [p[0] - 9, p[1] + 8], [p[0] - 3, p[1] + 7], [p[0], p[1] + 10], [p[0] + 5, p[1] + 6]], S.peak1);
      }
    }
    // mid ridge, snow on it
    ctx.beginPath(); ctx.moveTo(0, 150);
    [[0, 118], [30, 110], [60, 120], [92, 106], [130, 118], [170, 104], [210, 116], [240, 108], [256, 112]].forEach(function (p) { ctx.lineTo(p[0], p[1]); });
    ctx.lineTo(256, 150); ctx.closePath(); ctx.fillStyle = S.near1; ctx.fill();
    line(ctx, [[0, 118], [30, 110], [60, 120], [92, 106], [130, 118], [170, 104], [210, 116], [240, 108], [256, 112]], S.snow0, 2);
    // a lit window far off: the village
    px(ctx, 214, 121, S.win0, 2, 1); px(ctx, 220, 122, S.win1, 1, 1);
    // the near slope, under snow
    var slope = function (x) { return 140 - Math.sin(x * 0.03) * 5 + (noise(x * 0.05, 7) - 0.5) * 8; };
    for (var x = 0; x < W; x++) {
      var top = Math.round(slope(x));
      for (var y = top; y < H; y++) {
        var n = fbm(x * 0.06, y * 0.09) * 0.7 + hash2(x, y) * 0.3;
        var v = 0.75 - (y - top) * 0.004 + (n - 0.5) * 0.6 - (x > 140 ? (x - 140) * 0.002 : 0);
        px(ctx, x, y, v > 0.85 ? S.snow3 : v > 0.62 ? S.snow2 : v > 0.42 ? S.snow1 : S.snow0);
      }
    }
    var r = rand(5);
    for (i = 0; i < 26; i++) { // rocks poking through
      var rx = r() * W, ry = 150 + r() * 42, s = 1 + r() * 3;
      px(ctx, rx, ry, S.rock, Math.round(s * 2), Math.round(s));
      px(ctx, rx, ry - 1, S.snow3, Math.round(s * 2), 1);
    }
  }
  function flakes(ctx, t, n, seed, size, col, fast) {
    var r = rand(seed), gust = Math.sin(t * 0.6) * 12 + Math.sin(t * 1.7) * 4;
    for (var i = 0; i < n; i++) {
      var x0 = r() * (W + 40), y0 = r() * H, sp = (fast ? 26 : 12) + r() * 14, ph = r() * 6;
      var y = (y0 + t * sp) % (H + 4) - 2;
      var x = ((x0 + t * (6 + gust) + Math.sin(t * 1.3 + ph) * 3) % (W + 40) + W + 40) % (W + 40) - 20;
      px(ctx, x, y, col, size, size);
    }
  }
  function snowLive(ctx, t) {
    flakes(ctx, t, 90, 41, 1, S.snow3, false);
    flakes(ctx, t, 40, 43, 1, S.flake, true);
  }
  function snowFront(ctx, t) { flakes(ctx, t, 22, 47, 2, S.flake, true); }
  PLACES.snow = { palette: palette(S), back: snowBack, live: snowLive, front: snowFront, ink: S.ink,
    light: { mul: [0.8, 0.9, 1.1], gain: 0.74, sat: 0.62, gamma: 1.1 }, tint: [0.88, 0.96, 1.1], windy: true };

  // ======================================================================
  //  3. IN A VILLAGE COURTYARD, MORNING
  // ======================================================================
  var Y = {
    sky0: '#5d8bb8', sky1: '#7ea6c9', sky2: '#a6c2d6', sky3: '#d2d8cc', sky4: '#ecdcb4',
    mtn0: '#8a9ab4', mtn1: '#a8b4c4',
    wall0: '#4a3024', wall1: '#6e4a34', wall2: '#936440', wall3: '#b8844f', wall4: '#d6a468', wall5: '#ecc58c',
    wood0: '#2a1a14', wood1: '#46291c', wood2: '#6a4028', wood3: '#8c5a36',
    leaf0: '#34401c', leaf1: '#5a6a24', leaf2: '#8c9230', leaf3: '#c8b440', leaf4: '#e8d070',
    bark0: '#2e2218', bark1: '#4e3a28', bark2: '#6e5a40',
    earth0: '#5c4430', earth1: '#7e6044', earth2: '#a07c58', earth3: '#c49c70',
    clay0: '#6a3e28', clay1: '#9a5e38', clay2: '#c88a58', smoke0: '#b0aca4', smoke1: '#d8d4cc',
    ink: '#1a120e'
  };
  function courtyardBack(ctx) {
    sky(ctx, [[0, Y.sky0], [0.4, Y.sky1], [0.7, Y.sky2], [0.88, Y.sky3], [1, Y.sky4]], 90);
    // far mountains, pale in the morning haze
    poly(ctx, [[0, 90], [0, 70], [30, 64], [60, 70], [96, 58], [130, 68], [160, 60], [200, 70], [232, 62], [256, 68], [256, 90]], Y.mtn0);
    poly(ctx, [[0, 90], [0, 78], [40, 74], [90, 80], [140, 72], [190, 80], [256, 76], [256, 90]], Y.mtn1);
    // the courtyard's back wall, low sun from the left
    var top = function (x) { return 80 + Math.sin(x * 0.07) * 1.2 + (noise(x * 0.2, 2) - 0.5) * 3; };
    for (var x = 0; x < W; x++) {
      var t0 = Math.round(top(x));
      for (var y = t0; y < 152; y++) {
        var n = fbm(x * 0.09, y * 0.09) * 0.7 + hash2(x, y) * 0.3;
        var v = 0.62 - x * 0.0012 + (n - 0.5) * 0.5 - (y - t0) * 0.0015 + (y < t0 + 3 ? 0.3 : 0);
        px(ctx, x, y, v > 0.82 ? Y.wall5 : v > 0.68 ? Y.wall4 : v > 0.54 ? Y.wall3 : v > 0.4 ? Y.wall2 : v > 0.27 ? Y.wall1 : Y.wall0);
      }
      px(ctx, x, t0 - 1, Y.wall3);
    }
    for (y = 96; y < 150; y += 15) for (x = 0; x < W; x++) if (noise(x * 0.3, y) > 0.5) px(ctx, x, y + Math.round(noise(x * 0.1, y) * 2), Y.wall1);
    // a small window niche
    ctx.fillStyle = Y.wall0; ctx.fillRect(190, 100, 14, 16); ctx.fillStyle = Y.wood1; ctx.fillRect(191, 101, 12, 14);
    ctx.fillStyle = Y.wood2; ctx.fillRect(196, 101, 2, 14);
    // the packed-earth floor of the courtyard
    surface(ctx, 0, 150, W, H, [Y.earth0, Y.earth1, Y.earth2, Y.earth3], function (x, y) { return 0.62 - x * 0.001 + (y - 150) * 0.002; }, 0.12, 5);
    for (x = 0; x < W; x++) px(ctx, x, 150, Y.wall0);
    // the long shadow of the tree across the floor
    ctx.save(); ctx.globalAlpha = 0.45;
    poly(ctx, [[20, 160], [120, 172], [200, 192], [60, 192], [10, 172]], Y.earth0);
    ctx.restore();
    // old beams leaning on the wall at the right
    [[232, 70, 204, 152], [244, 72, 218, 152], [258, 78, 234, 152]].forEach(function (b, k) {
      poly(ctx, [[b[0] - 4, b[1]], [b[0] + 3, b[1] - 1], [b[2] + 5, b[3]], [b[2] - 3, b[3]]], k === 1 ? Y.wood1 : Y.wood0);
      line(ctx, [[b[0] - 2, b[1] + 2], [b[2] - 2, b[3] - 1]], Y.wood3, 1);
      line(ctx, [[b[0] + 1, b[1] + 6], [b[2] + 1, b[3] - 8]], Y.wood2, 1);
      px(ctx, b[2] - 3, b[3], Y.wood0, 8, 2);
    });
    // the tandur, a clay oven, under the tree
    blob(ctx, [[30, 172], [30, 158], [36, 146], [48, 141], [60, 146], [66, 158], [66, 172]], Y.clay1);
    inside(ctx, [[30, 172], [30, 158], [36, 146], [48, 141], [60, 146], [66, 158], [66, 172]], function () {
      oval(ctx, 38, 152, 8, 14, Y.clay2); oval(ctx, 62, 162, 8, 14, Y.clay0);
      for (var k = 0; k < 40; k++) px(ctx, 30 + hash2(k, 3) * 36, 142 + hash2(k, 5) * 30, Y.clay0);
    });
    oval(ctx, 48, 143, 7, 2, Y.wood0);
    // the mulberry tree: trunk and wide autumn canopy
    poly(ctx, [[8, 170], [12, 120], [10, 80], [16, 50], [24, 52], [22, 90], [26, 130], [28, 170]], Y.bark0);
    line(ctx, [[12, 168], [16, 120], [14, 82], [19, 54]], Y.bark2, 1);
    line(ctx, [[20, 70], [44, 40], [70, 26]], Y.bark1, 3);
    line(ctx, [[16, 58], [4, 30]], Y.bark1, 2);
    foliage(ctx, 44, 22, 60, 30, [Y.leaf0, Y.leaf1, Y.leaf2, Y.leaf3, Y.leaf4], 12, 0.16);
    foliage(ctx, 10, 42, 26, 18, [Y.leaf0, Y.leaf1, Y.leaf2, Y.leaf3], 13, 0.14);
  }
  function courtyardLive(ctx, t) {
    // the canopy moves in the morning air
    var r = rand(19);
    for (var i = 0; i < 70; i++) {
      var a = r() * Math.PI * 2, d = Math.sqrt(r());
      var x = 44 + Math.cos(a) * 58 * d, y = 22 + Math.sin(a) * 28 * d;
      if (Math.sin(t * (2 + r() * 2) + i) > 0.4) px(ctx, x + Math.sin(t * 1.3) * 0.8, y, r() > 0.5 ? Y.leaf4 : Y.leaf1, 2, 1);
    }
    // smoke from the tandur: bread is being baked
    ctx.save();
    for (i = 0; i < 7; i++) {
      var ph = (t * 0.35 + i / 7) % 1;
      ctx.globalAlpha = 0.5 * (1 - ph);
      oval(ctx, 48 + ph * 26 + Math.sin(t + i) * 3, 138 - ph * 70, 3 + ph * 9, 2 + ph * 5, ph < 0.4 ? Y.smoke1 : Y.smoke0);
    }
    ctx.restore();
    bird(ctx, t, 11, 2, 38, Y.wood0, 70);
    // a leaf falls now and then
    var lf = (t % 9) / 9, lx = 60 + Math.sin(lf * 12) * 8, ly = 30 + lf * 130;
    if (lf < 0.95) px(ctx, lx, ly, Y.leaf3, 2, 1);
  }
  PLACES.courtyard = { palette: palette(Y), back: courtyardBack, live: courtyardLive, ink: Y.ink,
    light: { mul: [1.03, 1.0, 0.96], gain: 1.06 }, tint: [1.02, 1.0, 0.97], windy: false };

  // ======================================================================
  //  4. BESIDE AN IRRIGATION CANAL, LATE AFTERNOON
  // ======================================================================
  var K = {
    sky0: '#6f93b8', sky1: '#96b2c4', sky2: '#c4c8b8', sky3: '#e6cf9c', sky4: '#f2dca8',
    hill0: '#8c8a94', hill1: '#a89c94',
    field0: '#6e6030', field1: '#94803c', field2: '#b8a050', field3: '#d8c070',
    pop0: '#4a4a20', pop1: '#8a7a28', pop2: '#c8a838', pop3: '#e8cc58',
    trunk0: '#3a3028', trunk1: '#6a5a48', trunk2: '#9a8a70',
    bank0: '#4a3624', bank1: '#6c5034', bank2: '#8e6c48', bank3: '#b08c60',
    water0: '#2c3c48', water1: '#40586a', water2: '#6a8898', water3: '#a8c0c8', water4: '#f0e4c0',
    grass0: '#3c4a20', grass1: '#5c6a2c', grass2: '#8a8c3c',
    wood0: '#2a1e16', wood1: '#4e3826', wood2: '#76583a', mudwall: '#a08060', mudwall1: '#c09c74',
    ink: '#16100c', fly: '#3a6a8a'
  };
  // the canal's two banks: top and bottom of the water at x
  function canalTop(x) { return 150 - x * 0.07; }
  function canalBot(x) { return 176 - x * 0.14; }
  function canalBack(ctx) {
    sky(ctx, [[0, K.sky0], [0.45, K.sky1], [0.75, K.sky2], [0.92, K.sky3], [1, K.sky4]], 100);
    poly(ctx, [[0, 100], [0, 80], [50, 74], [110, 82], [170, 72], [220, 80], [256, 76], [256, 100]], K.hill0);
    poly(ctx, [[0, 100], [0, 88], [80, 84], [160, 90], [256, 86], [256, 100]], K.hill1);
    // the village far off: low mud walls and roofs
    [[6, 88, 30, 10], [40, 90, 22, 8], [66, 86, 26, 12]].forEach(function (b) {
      ctx.fillStyle = K.mudwall; ctx.fillRect(b[0], b[1], b[2], b[3]);
      ctx.fillStyle = K.mudwall1; ctx.fillRect(b[0], b[1], b[2], 1);
    });
    // fields of stubble
    surface(ctx, 0, 98, W, 130, [K.field0, K.field1, K.field2, K.field3], function (x, y) {
      return 0.5 + (noise(x * 0.02 + Math.floor(y / 7) * 3.1, y * 0.15) - 0.5) * 0.9 + (y - 98) * 0.006;
    }, 0.1, 3);
    // a row of poplars far off, gold in autumn
    var r = rand(31);
    for (var i = 0; i < 14; i++) {
      var x = 120 + i * 10 + r() * 5, h = 40 + r() * 20, b = 100;
      poly(ctx, [[x, b], [x - 3, b - h * 0.5], [x, b - h], [x + 3, b - h * 0.5]], i % 2 ? K.pop1 : K.pop2);
      line(ctx, [[x - 1, b - h * 0.3], [x - 1, b - h * 0.9]], K.pop3, 1);
    }
    // the near bank above the water
    for (x = 0; x < W; x++) {
      var t0 = Math.round(canalTop(x)), f = 126 - x * 0.02;
      for (var y = Math.round(f); y < t0; y++) {
        var n = fbm(x * 0.1, y * 0.2) * 0.7 + hash2(x, y) * 0.3;
        var v = 0.55 + (n - 0.5) * 0.6 + (y - f) / (t0 - f) * 0.2;
        px(ctx, x, y, v > 0.72 ? K.grass2 : v > 0.55 ? K.grass1 : v > 0.4 ? K.bank2 : K.bank1);
      }
      px(ctx, x, t0, K.bank0); px(ctx, x, t0 + 1, K.bank1);
    }
    // the water: the sky mirrored, darker toward the near bank
    for (x = 0; x < W; x++) {
      var a = Math.round(canalTop(x)) + 2, bb = Math.round(canalBot(x));
      for (y = a; y < bb; y++) {
        var k = (y - a) / Math.max(1, bb - a);
        var w = 0.7 - k * 0.6 + (noise(x * 0.08, y * 0.5) - 0.5) * 0.4;
        px(ctx, x, y, w > 0.62 ? K.water3 : w > 0.38 ? K.water2 : w > 0.18 ? K.water1 : K.water0);
      }
    }
    // the far bank below the water, down to the bottom of the picture
    for (x = 0; x < W; x++) {
      var b0 = Math.round(canalBot(x));
      for (y = b0; y < H; y++) {
        var n2 = fbm(x * 0.07, y * 0.12) * 0.7 + hash2(x, y) * 0.3;
        var v2 = 0.45 + (n2 - 0.5) * 0.6 - (y - b0) * 0.004;
        px(ctx, x, y, v2 > 0.66 ? K.bank3 : v2 > 0.5 ? K.bank2 : v2 > 0.34 ? K.bank1 : K.bank0);
      }
      px(ctx, x, b0, K.bank3);
    }
    // grass on the near side of the water
    var r2 = rand(37);
    for (i = 0; i < 90; i++) {
      var gx = r2() * W, gy = canalBot(gx) + 4 + r2() * 30, h2 = 2 + r2() * 5;
      line(ctx, [[gx, gy], [gx + 1, gy - h2]], r2() > 0.5 ? K.grass1 : K.grass2, 1);
    }
    // the bridge: two logs and planks across the canal
    var bx = 200;
    line(ctx, [[bx - 6, canalTop(bx) - 4], [bx - 2, canalBot(bx) + 2]], K.wood0, 3);
    line(ctx, [[bx + 36, canalTop(bx + 36) - 4], [bx + 40, canalBot(bx + 36) + 2]], K.wood0, 3);
    for (i = 0; i < 12; i++) {
      var yy = canalTop(bx) - 3 + i * 1.6;
      line(ctx, [[bx - 6 + i * 0.4, yy], [bx + 38 + i * 0.4, yy - 2.5]], i % 3 === 0 ? K.wood2 : K.wood1, 1);
    }
    px(ctx, bx - 8, canalTop(bx) - 12, K.wood0, 2, 10); px(ctx, bx + 40, canalTop(bx + 40) - 14, K.wood0, 2, 12);
    // a tall poplar right at the left edge
    poly(ctx, [[2, H], [4, 0], [12, 0], [14, H]], K.trunk1);
    line(ctx, [[5, H], [6, 0]], K.trunk2, 1);
    for (y = 6; y < H; y += 9) px(ctx, 5 + (y % 3), y, K.trunk0, 4, 1);
    foliage(ctx, 16, 12, 22, 22, [K.pop0, K.pop1, K.pop2, K.pop3], 33, 0.2);
  }
  function canalLive(ctx, t) {
    // light moving on the water, drifting downstream (to the right)
    var r = rand(51);
    for (var i = 0; i < 46; i++) {
      var x0 = r() * W, sp = 8 + r() * 10, len = 2 + Math.floor(r() * 4);
      var x = (x0 + t * sp) % (W + 10) - 5;
      var a = canalTop(x) + 3, b = canalBot(x) - 1;
      var y = a + r() * (b - a);
      if (Math.sin(t * 3 + i * 1.7) > -0.2) px(ctx, x, y, y < a + 4 ? K.water4 : K.water3, len, 1);
    }
    // poplar leaves shimmer
    var r2 = rand(53);
    for (i = 0; i < 40; i++) {
      var px_ = 120 + r2() * 136, py = 45 + r2() * 50;
      if (Math.sin(t * 4 + i) > 0.6) px(ctx, px_, py, K.pop3);
    }
    // a dragonfly over the water now and then
    var ph = t % 13;
    if (ph < 4) {
      var dx = 60 + ph * 40 + Math.sin(ph * 7) * 10, dy = canalTop(dx) - 8 + Math.sin(ph * 5) * 5;
      px(ctx, dx, dy, K.fly, 3, 1); px(ctx, dx + 1, dy - (Math.sin(t * 40) > 0 ? 1 : -1), K.water3, 1, 1);
    }
  }
  PLACES.canal = { palette: palette(K), back: canalBack, live: canalLive, ink: K.ink,
    light: { mul: [1.08, 1.0, 0.86], gain: 1.02, sat: 1.04 }, tint: [1.05, 1.0, 0.9], windy: false };

  // ======================================================================
  //  5. INSIDE A MUD-BRICK ROOM, NIGHT
  // ======================================================================
  var R = {
    dark0: '#0e0808', dark1: '#1c110e', wall0: '#2c1a14', wall1: '#3e261c', wall2: '#563424', wall3: '#74472e',
    wall4: '#96603a', wall5: '#b87c48', beam0: '#140c08', beam1: '#2a1a10', beam2: '#442a18',
    reed0: '#3a2a14', reed1: '#5a4220', blue: '#2e4a78', blue1: '#4a6a9a',
    lamp0: '#fff0c0', lamp1: '#ffc860', lamp2: '#e88a38', metal0: '#2a2a28', metal1: '#5a5a52', glass: '#d8c090',
    win0: '#0a1020', win1: '#18243c', star: '#c8d4f0',
    rug0: '#3a0c10', rug1: '#6a1a1c', rug2: '#9a2c28', rug3: '#c8a040', rug4: '#1c2a44',
    cloth0: '#2c3a4a', cloth1: '#4a5c6c', bag0: '#5a4028', bag1: '#8c6c40', ink: '#0a0606'
  };
  var LAMP = [36, 92];
  function roomBack(ctx) {
    // the wall, lit by the lamp in the niche on the left
    surface(ctx, 0, 0, W, H, [R.dark0, R.dark1, R.wall0, R.wall1, R.wall2, R.wall3, R.wall4, R.wall5], function (x, y) {
      var d = Math.sqrt((x - LAMP[0]) * (x - LAMP[0]) * 0.7 + (y - LAMP[1]) * (y - LAMP[1]));
      return Math.max(0.05, 0.92 - d / 230);
    }, 0.09, 8);
    // the ceiling: reeds laid over beams, and the beam ends in the wall
    for (var x = 0; x < W; x++) for (var y = 0; y < 22; y++) {
      var v = (x + Math.floor(y / 3)) % 5 < 2 ? R.reed1 : R.reed0;
      px(ctx, x, y, y > 18 ? R.beam1 : (hash2(x, y) > 0.8 ? R.beam1 : v));
    }
    for (x = 0; x < W; x++) px(ctx, x, 22, R.beam0);
    [8, 58, 108, 158, 208].forEach(function (bx, k) {
      poly(ctx, [[bx, 0], [bx + 16, 0], [bx + 14, 26], [bx + 2, 26]], R.beam1);
      line(ctx, [[bx + 3, 0], [bx + 4, 25]], R.beam2, 1);
      ctx.fillStyle = R.beam0; ctx.fillRect(bx + 1, 24, 14, 4);
      // one of them still has old blue paint on its end
      if (k === 3) { ctx.fillStyle = R.blue; ctx.fillRect(bx + 3, 20, 9, 5); px(ctx, bx + 4, 21, R.blue1, 4, 1); }
    });
    // the niche, round-topped, with the lamp in it
    var niche = [[14, 116], [14, 72], [18, 62], [26, 56], [36, 54], [46, 56], [54, 62], [58, 72], [58, 116]];
    blob(ctx, niche, R.wall1);
    inside(ctx, niche, function () { oval(ctx, 36, 96, 18, 22, R.wall3); oval(ctx, 50, 70, 10, 20, R.dark1); });
    line(ctx, [[14, 116], [58, 116]], R.wall5, 1);
    // a Qur'an wrapped in cloth beside the lamp
    ctx.fillStyle = R.cloth0; ctx.fillRect(46, 104, 9, 11); ctx.fillStyle = R.cloth1; ctx.fillRect(46, 104, 9, 2);
    // the window: shutters open on the night
    ctx.fillStyle = R.beam0; ctx.fillRect(203, 42, 40, 46);
    ctx.fillStyle = R.win0; ctx.fillRect(207, 46, 32, 38);
    ctx.fillStyle = R.win1; ctx.fillRect(207, 70, 32, 14);
    ctx.fillStyle = R.beam1; ctx.fillRect(222, 46, 2, 38); ctx.fillRect(207, 64, 32, 2);
    ctx.fillStyle = R.beam2; ctx.fillRect(196, 44, 7, 42); ctx.fillRect(243, 44, 7, 42);
    // a bag of onion skins hanging on a nail
    px(ctx, 186, 94, R.metal1, 2, 2);
    line(ctx, [[187, 95], [183, 104]], R.bag0, 1); line(ctx, [[187, 95], [192, 104]], R.bag0, 1);
    blob(ctx, [[180, 104], [194, 104], [197, 120], [188, 126], [177, 120]], R.bag0);
    oval(ctx, 184, 110, 4, 6, R.bag1);
    // cushions and a rug along the wall
    ctx.fillStyle = R.rug1; ctx.fillRect(0, 152, W, 40);
    for (x = 0; x < W; x++) for (y = 152; y < H; y++) {
      var p = (x + y) % 12 < 2 || (x - y + 400) % 12 < 2;
      if (y < 156 || y > 186) px(ctx, x, y, R.rug0);
      else if (p) px(ctx, x, y, (Math.floor(x / 12) % 2) ? R.rug3 : R.rug2);
    }
    for (x = 0; x < W; x += 40) { ctx.fillStyle = R.rug4; ctx.fillRect(x + 18, 160, 4, 22); }
    // a folded blanket at the right
    poly(ctx, [[206, 150], [252, 148], [256, 170], [204, 172]], R.cloth0);
    for (y = 152; y < 170; y += 4) line(ctx, [[206, y], [252, y - 1]], R.cloth1, 1);
  }
  function roomLive(ctx, t) {
    var fl = 0.82 + 0.1 * Math.sin(t * 11) + 0.06 * Math.sin(t * 23 + 2) + 0.05 * noise(t * 5, 3);
    ctx.save();
    ctx.globalAlpha = 0.22 * fl;
    glow(ctx, LAMP[0], LAMP[1], 120 * fl, R.lamp1, 1);
    ctx.restore();
    glow(ctx, LAMP[0], LAMP[1], 16 * fl, R.lamp0, 0.5);
    // the hurricane lamp: base, glass, flame
    var x = LAMP[0], y = LAMP[1];
    ctx.fillStyle = R.metal0; ctx.fillRect(x - 7, y + 12, 15, 4); ctx.fillRect(x - 5, y - 12, 11, 2);
    ctx.fillStyle = R.metal1; ctx.fillRect(x - 6, y + 12, 13, 1);
    line(ctx, [[x - 8, y + 12], [x - 9, y - 4], [x - 4, y - 16], [x + 4, y - 16], [x + 9, y - 4], [x + 8, y + 12]], R.metal0, 1);
    oval(ctx, x, y + 2, 5, 9, R.glass);
    var fh = Math.round(5 + fl * 3), sw = Math.round(Math.sin(t * 6) * 0.7);
    blob(ctx, [[x + sw, y + 4 - fh], [x + 2, y + 3], [x + 1, y + 6], [x - 1, y + 6], [x - 2, y + 3]], R.lamp1);
    px(ctx, x + sw * 0.5, y + 2, R.lamp0, 1, 3);
    // stars in the window, one of them bright
    if (Math.sin(t * 1.1) > -0.6) px(ctx, 215, 52, R.star);
    px(ctx, 231, 58, Math.sin(t * 2.3) > 0 ? R.star : R.win1);
  }
  PLACES.room = { palette: palette(R), back: roomBack, live: roomLive, ink: R.ink,
    light: { mul: [1.1, 0.9, 0.72], gain: 0.84, sat: 0.95, gamma: 1.06 }, tint: [1.08, 0.96, 0.86], windy: false };

  // ======================================================================
  //  6. IN A VINEYARD, SUNSET
  // ======================================================================
  var V = {
    sky0: '#3a2a58', sky1: '#6a3a64', sky2: '#a84a58', sky3: '#d86a48', sky4: '#f09848', sky5: '#f8c870', sun: '#fff0b0',
    hill0: '#2a1c34', hill1: '#3e2640', hill2: '#5a3448',
    kk0: '#4a2c2c', kk1: '#6e4234', kk2: '#9a5c3c', kk3: '#c47c48', slit: '#1a1016',
    ridge0: '#3a2420', ridge1: '#5c3828', ridge2: '#84502e', ridge3: '#b06c38',
    vine0: '#2a2a14', vine1: '#4a4418', vine2: '#7a6420', vine3: '#b08a28', vine4: '#d8a838', red0: '#8a3020', red1: '#b84a28',
    furrow: '#1a1010', ink: '#140a0c', bird: '#1c1018'
  };
  var ROWS = [104, 109, 116, 125, 137, 153, 174];
  function vineyardBack(ctx) {
    sky(ctx, [[0, V.sky0], [0.3, V.sky1], [0.55, V.sky2], [0.75, V.sky3], [0.9, V.sky4], [1, V.sky5]], 104);
    glow(ctx, 214, 86, 46, V.sky5, 0.6);
    oval(ctx, 214, 86, 10, 10, V.sun);
    var r = rand(61);
    for (var i = 0; i < 8; i++) {
      var cy = 20 + r() * 50, cx = r() * W, len = 20 + r() * 60;
      ctx.fillStyle = cy > 50 ? V.sky4 : V.sky2; ctx.fillRect(Math.round(cx), Math.round(cy), Math.round(len), 1);
    }
    poly(ctx, [[0, 104], [0, 84], [40, 78], [90, 88], [150, 80], [190, 90], [240, 84], [256, 88], [256, 104]], V.hill1);
    poly(ctx, [[0, 104], [0, 94], [70, 90], [140, 96], [210, 92], [256, 96], [256, 104]], V.hill0);
    // the raisin-drying house: a long, low mud building whose upper walls
    // are a lattice of small vents for the wind
    var kx = 0, ky = 74, kw = 70, kh = 30;
    surface(ctx, kx, ky, kx + kw, ky + kh, [V.kk0, V.kk1, V.kk2, V.kk3], function (x) { return 0.72 - (x - kx) / kw * 0.35; }, 0.14, 9);
    ctx.fillStyle = V.kk3; ctx.fillRect(kx, ky, kw, 1);
    ctx.fillStyle = V.kk0; ctx.fillRect(kx, ky + 1, kw, 1);
    for (var row = 0; row < 3; row++) for (var c = 0; c < 21; c++) {
      if ((c + row) % 2) continue;
      ctx.fillStyle = V.slit; ctx.fillRect(kx + 2 + c * 3.2 + (row % 2), ky + 4 + row * 6, 1, 4);
    }
    ctx.fillStyle = V.slit; ctx.fillRect(kx + 30, ky + 22, 6, 8);
    // the vines lie on long mud ridges, row after row to the hills
    for (var k = 0; k < ROWS.length; k++) {
      var y0 = ROWS[k], h = 3 + k * 2.2, next = k + 1 < ROWS.length ? ROWS[k + 1] : H;
      ctx.fillStyle = V.furrow; ctx.fillRect(0, y0 - 1, W, next - y0 + 1);
      for (var x = 0; x < W; x++) {
        var top = y0 + Math.round((noise(x * 0.05, k) - 0.5) * 2);
        for (var y = top; y < Math.min(H, top + h + 2); y++) {
          var v = 0.6 - (y - top) / (h + 2) * 0.5 + (hash2(x, y) - 0.5) * 0.3;
          px(ctx, x, y, v > 0.55 ? V.ridge3 : v > 0.38 ? V.ridge2 : v > 0.2 ? V.ridge1 : V.ridge0);
        }
      }
      // the vine stems, then a thinner cover of autumn leaves
      var rs = rand(60 + k);
      for (var st = 0; st < 30; st++) { var sx = rs() * W; line(ctx, [[sx, y0 + 1], [sx + (rs() - 0.5) * 6, y0 - h * 0.6]], V.vine0, 1); }
      foliage(ctx, 128, y0 - h * 0.35, 140, h * 0.55 + 1, [V.vine0, V.vine1, V.vine2, V.vine3, V.vine4], 70 + k, 0.16 + k * 0.02);
      var r2 = rand(90 + k);
      for (i = 0; i < 8 + k * 4; i++) px(ctx, r2() * W, y0 - r2() * h, r2() > 0.5 ? V.red1 : V.red0, 1 + (k > 4 ? 1 : 0), 1);
    }
  }
  function vineyardLive(ctx, t) {
    glow(ctx, 214, 86, 16 + Math.sin(t * 0.8) * 2, V.sun, 0.3);
    var r = rand(77);
    for (var i = 0; i < 60; i++) {
      var k = 4 + Math.floor(r() * 3), x = r() * W, y = ROWS[k] - r() * (3 + k * 2);
      if (Math.sin(t * (3 + r() * 3) + i) > 0.5) px(ctx, x + Math.sin(t * 2 + i) * 0.7, y, r() > 0.5 ? V.vine4 : V.vine1, 2, 1);
    }
    // starlings going home
    for (i = 0; i < 4; i++) bird(ctx, t, 16, i * 1.1, 30 + i * 5, V.bird, 34);
  }
  PLACES.vineyard = { palette: palette(V), back: vineyardBack, live: vineyardLive, ink: V.ink,
    light: { mul: [1.14, 0.92, 0.8], gain: 0.96, sat: 1.04 }, tint: [1.08, 0.97, 0.88], windy: false };

  // ======================================================================
  //  7. NEAR THE VILLAGE MOSQUE, MIDDAY
  // ======================================================================
  var Q = {
    sky0: '#3e78b8', sky1: '#5a90c8', sky2: '#84acd4', sky3: '#b4cce0', cloud: '#e8eef4',
    wall0: '#6a4c38', wall1: '#8c6848', wall2: '#b08858', wall3: '#d0a870', wall4: '#e8c890', wall5: '#f4e0b0',
    shade0: '#3a2a26', shade1: '#56403a',
    wood0: '#2c1c14', wood1: '#4a3020', wood2: '#6e4a30', wood3: '#9a6c44',
    green0: '#1e5040', green1: '#2e7258', green2: '#4a9a78',
    leaf0: '#2a3a18', leaf1: '#46581e', leaf2: '#6e7a28', leaf3: '#a0a038',
    earth0: '#8a6a48', earth1: '#b08c64', earth2: '#d0ac80', earth3: '#e8cca0',
    pig0: '#4a4c54', pig1: '#8a8c94', pig2: '#c4c6cc', ink: '#140e0a'
  };
  function mosqueBack(ctx) {
    sky(ctx, [[0, Q.sky0], [0.5, Q.sky1], [0.8, Q.sky2], [1, Q.sky3]], 100);
    [[150, 20, 40], [60, 12, 30], [210, 34, 26]].forEach(function (c) {
      oval(ctx, c[0], c[1], c[2], 3, Q.cloud); oval(ctx, c[0] + c[2] * 0.3, c[1] - 2, c[2] * 0.5, 2, Q.cloud);
    });
    // the mosque: a mud block with a small dome, sun from above left
    surface(ctx, 0, 52, 124, 152, [Q.wall0, Q.wall1, Q.wall2, Q.wall3, Q.wall4], function (x, y) { return 0.72 - (y - 52) * 0.002; }, 0.1, 21);
    ctx.fillStyle = Q.wall5; ctx.fillRect(0, 52, 124, 2);
    ctx.fillStyle = Q.wall1; ctx.fillRect(0, 54, 124, 1);
    var dome = [[28, 53], [30, 40], [38, 30], [52, 25], [66, 30], [74, 40], [76, 53]];
    blob(ctx, dome, Q.wall2);
    inside(ctx, dome, function () { oval(ctx, 44, 34, 14, 12, Q.wall4); oval(ctx, 68, 46, 10, 12, Q.wall1); });
    line(ctx, [[52, 25], [52, 16]], Q.wood0, 1);
    oval(ctx, 52, 14, 3, 3, Q.wall5); oval(ctx, 53, 13, 2, 2, Q.sky1);
    // the porch: a beam on carved wooden pillars, deep shade behind
    ctx.fillStyle = Q.shade0; ctx.fillRect(0, 84, 116, 68);
    ctx.fillStyle = Q.shade1; ctx.fillRect(0, 84, 116, 6);
    // the green door in the shade
    ctx.fillStyle = Q.green0; ctx.fillRect(44, 100, 26, 52);
    ctx.fillStyle = Q.green1; ctx.fillRect(46, 102, 10, 48); ctx.fillRect(58, 102, 10, 48);
    ctx.fillStyle = Q.green2; ctx.fillRect(46, 102, 10, 1); ctx.fillRect(58, 102, 10, 1);
    ctx.fillStyle = Q.wood1; ctx.fillRect(0, 78, 120, 7);
    ctx.fillStyle = Q.wood3; ctx.fillRect(0, 78, 120, 1);
    for (var x = 0; x < 120; x += 6) px(ctx, x + 2, 81, Q.wood0, 2, 2);
    [8, 90].forEach(function (cx) {
      ctx.fillStyle = Q.wood1; ctx.fillRect(cx, 85, 7, 67);
      ctx.fillStyle = Q.wood3; ctx.fillRect(cx, 85, 2, 67);
      for (var y = 90; y < 150; y += 8) { px(ctx, cx + 1, y, Q.wood0, 5, 1); px(ctx, cx + 3, y + 3, Q.wood2, 2, 2); }
      ctx.fillStyle = Q.wood2; ctx.fillRect(cx - 2, 85, 11, 3); ctx.fillRect(cx - 2, 148, 11, 4);
    });
    // the courtyard wall and its gate to the right
    surface(ctx, 124, 98, W, 152, [Q.wall0, Q.wall1, Q.wall2, Q.wall3, Q.wall4], function () { return 0.64; }, 0.1, 23);
    ctx.fillStyle = Q.wall5; ctx.fillRect(124, 98, 132, 1);
    ctx.fillStyle = Q.wood0; ctx.fillRect(170, 110, 20, 42); ctx.fillStyle = Q.wood2; ctx.fillRect(172, 112, 16, 40);
    ctx.fillStyle = Q.wood1; ctx.fillRect(179, 112, 2, 40);
    // the ground, bright with noon sun; short shadows
    surface(ctx, 0, 152, W, H, [Q.earth0, Q.earth1, Q.earth2, Q.earth3], function () { return 0.7; }, 0.12, 25);
    ctx.save(); ctx.globalAlpha = 0.55;
    ctx.fillStyle = Q.shade1; ctx.fillRect(0, 152, 120, 8);
    ctx.fillRect(124, 152, 132, 4);
    ctx.restore();
    // a clay water jug by the wall
    blob(ctx, [[232, 150], [228, 142], [230, 134], [236, 130], [242, 134], [244, 142], [240, 150]], Q.wall1);
    oval(ctx, 233, 138, 3, 5, Q.wall3); px(ctx, 234, 127, Q.wall0, 4, 3);
    // a big mulberry tree shading the right
    poly(ctx, [[232, 98], [236, 60], [230, 40], [240, 38], [244, 62], [246, 98]], Q.wood1);
    line(ctx, [[236, 96], [238, 60]], Q.wood3, 1);
    foliage(ctx, 226, 24, 46, 30, [Q.leaf0, Q.leaf1, Q.leaf2, Q.leaf3], 29, 0.2);
  }
  function mosqueLive(ctx, t) {
    // pigeons on the roof edge, bobbing
    [[96, 50, 0], [104, 50, 1.3], [16, 50, 2.1]].forEach(function (p) {
      var bob = Math.sin(t * 3 + p[2] * 4) > 0.3 ? 1 : 0;
      oval(ctx, p[0], p[1], 3, 2, Q.pig1);
      px(ctx, p[0] + 2, p[1] - 3 + bob, Q.pig0, 2, 2);
      px(ctx, p[0] - 1, p[1] - 1, Q.pig2, 2, 1);
    });
    // one flies across now and then
    var ph = t % 12;
    if (ph < 5) {
      var x = 260 - ph * 60, y = 40 + Math.sin(ph * 3) * 6, f = Math.sin(t * 20) > 0 ? -2 : 1;
      px(ctx, x, y, Q.pig1, 3, 2); px(ctx, x + 1, y + f, Q.pig2, 1, 2);
    }
    var r = rand(83);
    for (var i = 0; i < 30; i++) {
      var a = r() * Math.PI * 2, d = Math.sqrt(r());
      if (Math.sin(t * 3 + i) > 0.5) px(ctx, 226 + Math.cos(a) * 44 * d, 24 + Math.sin(a) * 28 * d, Q.leaf3, 2, 1);
    }
  }
  PLACES.mosque = { palette: palette(Q), back: mosqueBack, live: mosqueLive, ink: Q.ink,
    light: { gain: 1.12, sat: 0.95 }, tint: [1.0, 1.0, 0.98], windy: false };

  // ======================================================================
  //  8. IN AN ORCHARD, EARLY MORNING
  // ======================================================================
  var O = {
    sky0: '#8a9cb4', sky1: '#aab6c4', sky2: '#cacdcc', sky3: '#e6d8c0', sky4: '#f2e2c4',
    mist0: '#b4bcc0', mist1: '#d0d4d0', far0: '#6e7880', far1: '#8a9298',
    trunk0: '#1e1814', trunk1: '#3a2e24', trunk2: '#5a4a3a', lime: '#d8d4c8', lime1: '#a8a498',
    leaf0: '#3a4420', leaf1: '#5a6428', leaf2: '#8a8a30', leaf3: '#c0a838', leaf4: '#e0c050', rust: '#b06a2c',
    grass0: '#2e3a1e', grass1: '#4a5a28', grass2: '#6e7a38', grass3: '#98a050', dew: '#e8f0e8',
    earth0: '#4a3a2c', earth1: '#6a5440', ink: '#12100c', crow: '#141418'
  };
  function tree(ctx, x, base, h, lean, seed, P) {
    // a trunk whitewashed at the bottom, branches, thin autumn leaves
    poly(ctx, [[x - 4, base], [x - 3 + lean * 0.3, base - h * 0.5], [x - 1 + lean, base - h], [x + 2 + lean, base - h], [x + 3 + lean * 0.3, base - h * 0.5], [x + 5, base]], P.trunk1);
    line(ctx, [[x - 2, base], [x - 1 + lean * 0.4, base - h * 0.6]], P.trunk2, 1);
    ctx.fillStyle = P.lime; ctx.fillRect(x - 4, base - 14, 9, 14);
    ctx.fillStyle = P.lime1; ctx.fillRect(x + 2, base - 14, 3, 14);
    var r = rand(seed);
    for (var i = 0; i < 5; i++) {
      var sy = base - h * (0.55 + r() * 0.4), ex = x + lean + (r() - 0.5) * 70, ey = sy - 10 - r() * 25;
      line(ctx, [[x + lean * 0.6, sy], [ex, ey]], P.trunk1, 1 + (i < 2 ? 1 : 0));
    }
    foliage(ctx, x + lean, base - h - 6, 38, 22, [P.leaf0, P.leaf1, P.leaf2, P.leaf3, P.leaf4], seed + 1, 0.1);
    var r2 = rand(seed + 2);
    for (i = 0; i < 12; i++) px(ctx, x + lean + (r2() - 0.5) * 60, base - h - 6 + (r2() - 0.5) * 34, P.rust, 2, 1);
  }
  function orchardBack(ctx) {
    sky(ctx, [[0, O.sky0], [0.4, O.sky1], [0.7, O.sky2], [0.9, O.sky3], [1, O.sky4]], 116);
    // rows of trees fading into the mist
    var r = rand(101);
    for (var i = 0; i < 16; i++) {
      var x = i * 17 + r() * 8, y = 100 + r() * 4;
      oval(ctx, x, y - 10, 10 + r() * 4, 9, i % 2 ? O.far0 : O.far1);
      px(ctx, x, y - 2, O.far0, 1, 8);
    }
    ctx.save(); ctx.globalAlpha = 0.6; ctx.fillStyle = O.mist1; ctx.fillRect(0, 88, W, 30); ctx.restore();
    // the grass, wet, with fallen leaves
    surface(ctx, 0, 112, W, H, [O.grass0, O.grass1, O.grass2, O.grass3], function (x, y) { return 0.4 + (y - 112) * 0.003; }, 0.14, 13);
    var r2 = rand(103);
    for (i = 0; i < 140; i++) px(ctx, r2() * W, 118 + r2() * 74, r2() > 0.6 ? O.leaf4 : r2() > 0.4 ? O.rust : O.leaf3, 2, 1);
    for (i = 0; i < 60; i++) px(ctx, r2() * W, 116 + r2() * 76, O.dew);
    // a water furrow between the trees
    for (var fx = 0; fx < W; fx++) {
      var fy = 160 - fx * 0.16 + fx * fx * 0.00012 + (noise(fx * 0.1, 9) - 0.5) * 3, fw = 4 - fx * 0.01;
      for (var k = 0; k < fw; k++) px(ctx, fx, fy + k, k < 1 ? O.earth1 : O.earth0);
      if (hash2(fx, 3) > 0.8) px(ctx, fx, fy + 1, O.mist0);
    }
    // the near trees, one each side
    tree(ctx, 28, 172, 118, 6, 111, O);
    tree(ctx, 224, 164, 104, -8, 121, O);
    tree(ctx, 184, 126, 48, 2, 131, O);
  }
  function orchardLive(ctx, t) {
    // mist drifting low between the rows
    ctx.save();
    for (var i = 0; i < 5; i++) {
      var x = ((t * (3 + i) + i * 70) % (W + 120)) - 60;
      ctx.globalAlpha = 0.35;
      oval(ctx, x, 104 + i * 5, 50, 4, i % 2 ? O.mist0 : O.mist1);
    }
    ctx.restore();
    // a leaf spinning down
    var ph = (t % 7) / 7, lx = 200 + Math.sin(ph * 14) * 10 - ph * 30, ly = 50 + ph * 120;
    px(ctx, lx, ly, Math.sin(ph * 30) > 0 ? O.leaf4 : O.rust, 2, 1);
    // a crow on a branch, sometimes gone
    if ((t % 20) < 13) {
      var bob = Math.sin(t * 2) > 0.8 ? 1 : 0;
      oval(ctx, 246, 58 + bob, 4, 3, O.crow); px(ctx, 242, 55 + bob, O.crow, 3, 3); px(ctx, 239, 57 + bob, O.trunk2, 2, 1);
    }
  }
  PLACES.orchard = { palette: palette(O), back: orchardBack, live: orchardLive, ink: O.ink,
    light: { mul: [0.96, 1.0, 1.04], gain: 1.0, sat: 0.92 }, tint: [0.97, 1.0, 1.03], windy: false };

  // ======================================================================
  //  9. ON A DIRT PATH BETWEEN COMPOUND WALLS, DUSK
  // ======================================================================
  var P = {
    sky0: '#1e1838', sky1: '#3a2850', sky2: '#6a3a5c', sky3: '#a45a5c', sky4: '#d88a60', star: '#e8e0f0',
    l0: '#140e12', l1: '#221619', l2: '#34241f', l3: '#4a3428',
    r0: '#2c1c1e', r1: '#4a2e2a', r2: '#6e4636', r3: '#946048', r4: '#b88258',
    lane0: '#1a1214', lane1: '#2c2020', lane2: '#44342c', lane3: '#5e4a3a',
    wood0: '#140c0a', wood1: '#2a1c14', wood2: '#46301e', far0: '#281a22', far1: '#3c2a2e',
    lamp0: '#ffd890', lamp1: '#e8a048', ink: '#0c0808', bat: '#0e0a10'
  };
  var VP = [138, 96];   // where the lane runs to
  function pathBack(ctx) {
    sky(ctx, [[0, P.sky0], [0.35, P.sky1], [0.6, P.sky2], [0.8, P.sky3], [1, P.sky4]], 100);
    // the far end: a wall across, with a small door and light behind it
    surface(ctx, 112, 76, 166, 118, [P.far0, P.far1], function () { return 0.5; }, 0.2, 31);
    ctx.fillStyle = P.wood0; ctx.fillRect(132, 94, 10, 18);
    ctx.fillStyle = P.lamp1; ctx.fillRect(140, 96, 1, 14);
    // the lane floor, running away from us
    var floor = [[0, H], [W, H], [166, 118], [112, 118]];
    inside(ctx, floor, function () {
      surface(ctx, 0, 118, W, H, [P.lane0, P.lane1, P.lane2, P.lane3], function (x, y) { return 0.3 + (y - 118) / 74 * 0.4; }, 0.1, 33);
      line(ctx, [[138, 118], [130, 150], [118, H]], P.lane0, 2);   // a drain down the middle
    });
    // the left wall, in shadow
    var left = [[0, 0], [112, 76], [112, 118], [0, H]];
    inside(ctx, left, function () {
      surface(ctx, 0, 0, 113, H, [P.l0, P.l1, P.l2, P.l3], function (x, y) { return 0.35 + x * 0.002; }, 0.1, 35);
      for (var k = 1; k < 9; k++) {          // layers of mud following the lane
        var f = k / 9;
        line(ctx, [[0, H * f], [112, 76 + 42 * f]], P.l0, 1);
      }
      // a wooden door set into the wall
      poly(ctx, [[34, 70], [62, 80], [62, 150], [34, 170]], P.wood1);
      poly(ctx, [[37, 76], [59, 84], [59, 148], [37, 165]], P.wood2);
      line(ctx, [[48, 80], [48, 157]], P.wood0, 1);
      px(ctx, 52, 118, P.l0, 2, 2);
    });
    // the right wall, the last light on its top
    var right = [[W, 0], [166, 76], [166, 118], [W, H]];
    inside(ctx, right, function () {
      surface(ctx, 165, 0, W, H, [P.r0, P.r1, P.r2, P.r3, P.r4], function (x, y) { return 0.62 - y * 0.0035 + (W - x) * 0.0006; }, 0.1, 37);
      for (var k = 1; k < 9; k++) {
        var f = k / 9;
        line(ctx, [[W, H * f], [166, 76 + 42 * f]], P.r0, 1);
      }
    });
    // roof beams sticking out of the right wall, getting smaller down the lane
    for (var i = 0; i < 6; i++) {
      var f = i / 6, x = W - (W - 166) * f, y = 8 + (76 - 8) * f + 4, s = 1 - f * 0.8;
      poly(ctx, [[x, y], [x - 8 * s, y + 1], [x - 8 * s, y + 4 * s + 1], [x, y + 4 * s + 1]], P.wood1);
    }
    line(ctx, [[112, 76], [0, 0]], P.l3, 1);
    line(ctx, [[166, 76], [W, 0]], P.r4, 1);
  }
  function pathLive(ctx, t) {
    // the first stars in the strip of sky
    var r = rand(141);
    for (var i = 0; i < 12; i++) {
      var x = 70 + r() * 120, y = r() * 40;
      var edge = Math.abs(x - VP[0]) * 0.7;
      if (y < 60 - edge && Math.sin(t * (1 + r()) + i * 3) > -0.2) px(ctx, x, y, P.star);
    }
    // a bat flitting over the lane
    var ph = t % 6;
    var bx = VP[0] + Math.sin(ph * 2.1) * 34, by = 30 + Math.sin(ph * 3.3) * 12, f = Math.sin(t * 25) > 0 ? -1 : 1;
    px(ctx, bx, by, P.bat, 2, 2); px(ctx, bx - 3, by + f, P.bat, 3, 1); px(ctx, bx + 2, by + f, P.bat, 3, 1);
    // the light behind the far door flickers
    px(ctx, 140, 96, Math.sin(t * 9) > 0 ? P.lamp0 : P.lamp1, 1, 14);
  }
  PLACES.path = { palette: palette(P), back: pathBack, live: pathLive, ink: P.ink,
    light: { mul: [0.97, 0.88, 0.98], gain: 0.86, sat: 0.9, gamma: 1.04 }, tint: [0.98, 0.92, 1.02], windy: false };

  // ======================================================================
  //  10. NEAR THE VILLAGE CEMETERY, LATE AFTERNOON
  // ======================================================================
  var G = {
    sky0: '#7c90a8', sky1: '#9eacb8', sky2: '#c2c2b8', sky3: '#dccca4', sky4: '#ecd6a4',
    hill0: '#7a6c64', hill1: '#94806c', hill2: '#b09474',
    ruin0: '#5c4a44', ruin1: '#7e6454', ruin2: '#a08268',
    wall0: '#5a4436', wall1: '#7a5c44', wall2: '#9c7a58', wall3: '#bc9a70',
    earth0: '#4e3c30', earth1: '#6e5642', earth2: '#907258', earth3: '#b0906c',
    stone0: '#4a4a4c', stone1: '#6e6c6a', stone2: '#94908a', stone3: '#bcb6aa',
    grass0: '#5a5a30', grass1: '#7e7a40', grass2: '#a09a58',
    flagG: '#2e8a4a', flagG1: '#58b070', flagW: '#e8e4d8', flagR: '#b83a30', pole: '#3a2c20', ink: '#141010', crow: '#18161a'
  };
  var FLAGS = [[24, 34, G.flagG], [58, 52, G.flagW], [206, 40, G.flagR], [238, 30, G.flagG]];
  function grave(ctx, x, y, w) {
    oval(ctx, x, y, w, w * 0.32, G.earth1);
    oval(ctx, x - w * 0.2, y - 1, w * 0.7, w * 0.2, G.earth2);
    var sh = Math.max(3, w * 0.5);
    ctx.fillStyle = G.stone1; ctx.fillRect(Math.round(x - w - 1), Math.round(y - sh), 2, Math.round(sh));
    ctx.fillStyle = G.stone2; ctx.fillRect(Math.round(x + w - 1), Math.round(y - sh * 1.4), 3, Math.round(sh * 1.4));
    px(ctx, x + w - 1, y - sh * 1.4, G.stone3, 3, 1);
  }
  function cemeteryBack(ctx) {
    sky(ctx, [[0, G.sky0], [0.5, G.sky1], [0.8, G.sky2], [0.93, G.sky3], [1, G.sky4]], 96);
    poly(ctx, [[0, 96], [0, 74], [40, 66], [90, 72], [140, 62], [190, 58], [230, 64], [256, 60], [256, 96]], G.hill1);
    poly(ctx, [[0, 96], [0, 84], [60, 80], [130, 86], [200, 78], [256, 82], [256, 96]], G.hill0);
    // Kohna, the old village, broken walls on the far hill
    [[176, 50, 14, 10], [194, 48, 8, 12], [206, 52, 18, 7], [230, 50, 10, 11], [244, 54, 8, 6]].forEach(function (b, k) {
      ctx.fillStyle = k % 2 ? G.ruin1 : G.ruin0; ctx.fillRect(b[0], b[1], b[2], b[3]);
      ctx.fillStyle = G.ruin2; ctx.fillRect(b[0], b[1], Math.max(2, b[2] - 5), 1);
      px(ctx, b[0] + b[2] - 3, b[1] - 2, k % 2 ? G.ruin1 : G.ruin0, 2, 2);
    });
    // the ground: dry grass and earth
    surface(ctx, 0, 94, W, H, [G.earth0, G.earth1, G.grass0, G.grass1, G.grass2], function (x, y) { return 0.55 + (y - 94) * 0.001; }, 0.12, 43);
    // the north wall, low and old, across the back of the graves
    for (var x = 0; x < W; x++) {
      var top = 100 + Math.round((noise(x * 0.12, 4) - 0.5) * 4 + x * 0.02);
      for (var y = top; y < top + 12; y++) {
        var v = 0.7 - (y - top) * 0.04 + (hash2(x, y) - 0.5) * 0.4;
        px(ctx, x, y, v > 0.72 ? G.wall3 : v > 0.5 ? G.wall2 : v > 0.3 ? G.wall1 : G.wall0);
      }
    }
    // rows of graves, small far off, bigger near
    var r = rand(151);
    for (var row = 0; row < 3; row++) {
      var gy = 124 + row * 22, w = 7 + row * 4;
      for (var k = 0; k < 7 - row; k++) grave(ctx, 14 + k * (36 + row * 8) + r() * 10, gy + r() * 4, w);
    }
    // flag poles on the martyrs' graves
    FLAGS.forEach(function (f) { line(ctx, [[f[0], f[1]], [f[0] + 1, 128]], G.pole, 1); });
  }
  function cemeteryLive(ctx, t) {
    FLAGS.forEach(function (f, k) {
      var wv = function (u) { return Math.sin(t * 5 + k + u * 4) * 2 * u; };
      var pts = [[f[0] + 1, f[1]], [f[0] + 14, f[1] + 1 + wv(1)], [f[0] + 13, f[1] + 7 + wv(1)], [f[0] + 1, f[1] + 7]];
      poly(ctx, pts, f[2]);
      line(ctx, [[f[0] + 2, f[1] + 3], [f[0] + 12, f[1] + 4 + wv(0.8)]], f[2] === G.flagG ? G.flagG1 : G.stone3, 1);
    });
    // grass moving in the wind
    var r = rand(161);
    for (var i = 0; i < 40; i++) {
      var gx = r() * W, gy = 116 + r() * 76, h = 2 + r() * 4, b = Math.sin(t * 2 + gx * 0.05) * 1.5;
      line(ctx, [[gx, gy], [gx + b, gy - h]], r() > 0.5 ? G.grass2 : G.grass1, 1);
    }
    // a crow on a gravestone, sometimes flying off
    var ph = t % 18;
    if (ph < 11) { oval(ctx, 222, 112, 4, 3, G.crow); px(ctx, 225, 108, G.crow, 3, 3); }
    else { var x = 222 + (ph - 11) * 30, y = 112 - (ph - 11) * 14; px(ctx, x, y, G.crow, 4, 2); px(ctx, x + 1, y + (Math.sin(t * 20) > 0 ? -2 : 1), G.crow, 2, 2); }
  }
  PLACES.cemetery = { palette: palette(G), back: cemeteryBack, live: cemeteryLive, ink: G.ink,
    light: { mul: [1.05, 1.0, 0.9], gain: 1.0, sat: 0.88 }, tint: [1.03, 1.0, 0.93], windy: false };
})(this);
