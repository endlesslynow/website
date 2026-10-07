/* Makes the 256 x 192 pixel-art frame look like 1990s camcorder tape when
   it is shown on screen: each line of the picture wobbles sideways a
   little, colour bleeds to the side while the light-and-dark edges stay
   sharp and a faint grain crawls. Uncle Night's is gentle and bright, with
   no rolling band of tracking noise: it is not a ghost story like Onion
   Skin (the owner's word, 2026-10-07).

   Uses the graphics card (WebGL). Without it, the frame is just scaled up. */
(function (root) {
  'use strict';

  var VERT = 'attribute vec2 p; varying vec2 uv;' +
    'void main(){ uv = vec2(p.x * 0.5 + 0.5, 0.5 - p.y * 0.5); gl_Position = vec4(p, 0.0, 1.0); }';

  var FRAG = [
    'precision mediump float;',
    'varying vec2 uv;',
    'uniform sampler2D tex;',
    'uniform float time, glitch, fade, px;',
    'uniform vec3 tint;',
    'const vec2 SRC = vec2(256.0, 192.0);',
    'float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }',
    'vec3 yiq(vec3 c){ return vec3(dot(c, vec3(0.299, 0.587, 0.114)), dot(c, vec3(0.596, -0.274, -0.322)), dot(c, vec3(0.211, -0.523, 0.312))); }',
    'vec3 rgb(vec3 c){ return vec3(c.x + 0.956 * c.y + 0.621 * c.z, c.x - 0.272 * c.y - 0.647 * c.z, c.x - 1.106 * c.y + 1.703 * c.z); }',
    'vec3 at(vec2 q){ return texture2D(tex, q).rgb; }',
    'void main(){',
    '  float line = floor(uv.y * SRC.y);',
    // sideways wobble of each line, and a tracking band drifting upward
    '  float wob = sin(line * 0.21 + time * 1.7) * 0.04 + sin(line * 0.05 - time * 0.9) * 0.05;',
    '  wob += (hash(vec2(line, floor(time * 24.0))) - 0.5) * 0.05;',
    '  float bandY = 1.0 - fract(time * 0.045 + 0.3);',
    '  float band = 0.0 * smoothstep(0.035, 0.0, abs(uv.y - bandY));',   // no rolling band in Uncle Night
    '  wob += band * (hash(vec2(line, time)) - 0.5) * 2.0;',
    '  wob += glitch * (hash(vec2(line * 0.1, floor(time * 30.0))) - 0.5) * 30.0;',
    '  vec2 q = uv + vec2(wob / SRC.x, 0.0);',
    // light from the pixel itself; colour from a smear of its neighbours
    '  vec3 c0 = yiq(at(q));',
    '  vec3 cl = yiq(at(q - vec2(2.0 / SRC.x, 0.0)));',
    '  vec3 cr = yiq(at(q + vec2(1.0 / SRC.x, 0.0)));',
    '  vec3 cll = yiq(at(q - vec2(3.5 / SRC.x, 0.0)));',
    '  vec3 c = vec3(c0.x, (c0.yz + cl.yz * 1.2 + cr.yz * 0.6 + cll.yz * 0.8) / 3.6);',
    '  c.yz *= 0.98;',
    '  vec3 col = rgb(c);',
    // washed-out blacks, soft highlights, the tape's colour cast
    '  col = mix(vec3(0.03, 0.03, 0.035), vec3(1.0), col) * 1.06;',
    '  col *= tint;',
    // grain, per screen pixel, and noise in the tracking band
    '  vec2 cell = floor(gl_FragCoord.xy / px);',
    '  float g = hash(cell + fract(time * 7.13) * 100.0) - 0.5;',
    '  col += g * 0.018;',
    '  col += band * (hash(cell * 0.5 + time) - 0.3) * 0.08;',
    '  col = mix(col, vec3(hash(cell + time) * 0.8), glitch * 0.2);',
    // dark corners
    '  vec2 d = uv - 0.5;',
    '  col *= 1.0 - dot(d, d) * 0.06;',
    '  gl_FragColor = vec4(col * fade, 1.0);',
    '}'
  ].join('\n');

  function Camcorder(outCanvas) {
    var gl = null;
    try { gl = outCanvas.getContext('webgl', { antialias: false, preserveDrawingBuffer: false }); } catch (e) { gl = null; }
    this.ok = !!gl;
    if (!gl) {
      var c2 = outCanvas.getContext('2d');
      this.draw = function (src) { c2.imageSmoothingEnabled = false; c2.drawImage(src, 0, 0, outCanvas.width, outCanvas.height); };
      return;
    }
    function shader(type, src) {
      var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      return s;
    }
    var prog = gl.createProgram();
    gl.attachShader(prog, shader(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, shader(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    var u = {};
    ['tex', 'time', 'glitch', 'fade', 'tint', 'px'].forEach(function (n) { u[n] = gl.getUniformLocation(prog, n); });

    // src: the 256 x 192 canvas. opts: time, glitch (0..1), fade (0..1), tint [r,g,b]
    this.draw = function (src, opts) {
      gl.viewport(0, 0, outCanvas.width, outCanvas.height);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
      gl.uniform1i(u.tex, 0);
      gl.uniform1f(u.time, opts.time || 0);
      gl.uniform1f(u.glitch, opts.glitch || 0);
      gl.uniform1f(u.fade, opts.fade == null ? 1 : opts.fade);
      gl.uniform1f(u.px, Math.max(1, outCanvas.width / 768));   // grain grows with the picture
      var t = opts.tint || [1, 1, 1];
      gl.uniform3f(u.tint, t[0], t[1], t[2]);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };
  }

  root.JinnCamcorder = Camcorder;
})(this);
