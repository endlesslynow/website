/* The computer's own noises, made on the fly (no sound files): the thump
   of the monitor switching on, key clicks, the PC-speaker beep of
   a search, and the clunk of a tape going into the player. */
(function (root) {
  'use strict';
  var ctx = null, master = null;

  function start() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    var AC = root.AudioContext || root.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.35;
    master.connect(ctx.destination);
  }

  function tone(type, freq, t0, dur, vol, endFreq) {
    if (!ctx) return;
    var o = ctx.createOscillator(), g = ctx.createGain(), t = ctx.currentTime + t0;
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (endFreq) o.frequency.exponentialRampToValueAtTime(endFreq, t + dur);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master);
    o.start(t); o.stop(t + dur + 0.02);
  }

  function noise(t0, dur, vol, freq, q) {
    if (!ctx) return;
    var n = Math.floor(ctx.sampleRate * dur), buf = ctx.createBuffer(1, n, ctx.sampleRate), d = buf.getChannelData(0);
    for (var i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    var s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain(), t = ctx.currentTime + t0;
    s.buffer = buf; f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = q || 1;
    g.gain.value = vol;
    s.connect(f); f.connect(g); g.connect(master);
    s.start(t);
  }

  var api = {
    start: start,
    power: function () {
      start();
      tone('sine', 70, 0, 0.35, 0.8, 40);
      noise(0, 0.08, 0.5, 900, 0.7);
      tone('sawtooth', 50, 0.05, 1.1, 0.12);   // the tube degaussing
      tone('sine', 11800, 0.3, 2.2, 0.02);     // the high whine of a warm tube
    },
    key: function () { noise(0, 0.018, 0.35, 3200, 2); },
    beep: function () { tone('square', 988, 0, 0.07, 0.06); tone('square', 1318, 0.08, 0.09, 0.06); },
    none: function () { tone('square', 196, 0, 0.22, 0.07); },
    tape: function () {
      noise(0, 0.05, 0.6, 400, 1); tone('sine', 90, 0, 0.12, 0.5, 60);
      noise(0.22, 0.04, 0.5, 700, 1);
      noise(0.25, 0.45, 0.08, 1800, 3);          // the motor whirring up
    },
    glitch: function () { noise(0, 0.9, 0.25, 2500, 0.4); tone('sawtooth', 60, 0, 0.9, 0.08, 30); }
  };
  root.JinnSound = api;
})(this);
