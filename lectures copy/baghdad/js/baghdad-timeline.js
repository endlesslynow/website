
(function() {
    var MIN_EVENT_GAP = 28;
    var MAX_EVENT_GAP = 210;
    var PX_PER_YEAR = 6.5;

    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }

    function inferAnchorYear(dateText) {
        var text = String(dateText || '');
        if (/9th century/i.test(text)) return 850;
        if (/late 10th century/i.test(text)) return 979;
        var match = text.match(/\d{3,4}/);
        return match ? parseInt(match[0], 10) : 775;
    }

    function renderEventPhases(rootId, phases, classes) {
        var root = document.getElementById(rootId);
        if (!root || !phases.length) return;

        var lastYear = null;
        root.innerHTML = phases.map(function(phase) {
            var sortedEvents = (phase.events || []).slice().sort(function(a, b) {
                var ay = a.anchorYear || inferAnchorYear(a.date);
                var by = b.anchorYear || inferAnchorYear(b.date);
                return ay - by;
            });

            var cards = sortedEvents.map(function(event) {
                var anchorYear = event.anchorYear || inferAnchorYear(event.date);
                var delta = lastYear == null ? 0 : Math.max(0, anchorYear - lastYear);
                var marginTop = lastYear == null ? 0 : clamp(delta * PX_PER_YEAR, MIN_EVENT_GAP, MAX_EVENT_GAP);
                lastYear = anchorYear;

                var media = event.mediaPlaceholder
                    ? '<div class="' + classes.media + '">' + event.mediaPlaceholder + '</div>'
                    : '';
                return [
                    '<article class="' + classes.card + (event.highlight ? ' is-highlight' : '') + '" data-anchor-year="' + anchorYear + '" style="margin-top:' + marginTop.toFixed(1) + 'px">',
                    '<div class="' + classes.date + '">' + event.date + '</div>',
                    '<div style="display:flex;gap:1.25rem;align-items:flex-start">',
                    '<div style="flex:1;min-width:0">',
                    '<h4 class="' + classes.title + '">' + event.title + '</h4>',
                    '<p class="' + classes.copy + '">' + event.description + '</p>',
                    '</div>',
                    media,
                    '</div>',
                    '</article>'
                ].join('');
            }).join('');

            return [
                '<div class="' + classes.phase + '">',
                '<h3>' + phase.title + '</h3>',
                '<p class="text-base leading-relaxed opacity-80">' + phase.description + '</p>',
                '</div>',
                '<div class="' + classes.events + '">' + cards + '</div>'
            ].join('');
        }).join('');
    }

    function initTimelineEvents() {
        renderEventPhases('foundation-events-root', window.BAGHDAD_FOUNDATION_PHASES || [], {
            phase: 'foundation-era-phase',
            events: 'foundation-events',
            card: 'foundation-event',
            date: 'foundation-event-date',
            label: 'foundation-event-phase-label',
            title: 'foundation-event-title',
            copy: 'foundation-event-copy',
            media: 'foundation-event-media'
        });

        renderEventPhases('golden-age-events-root', window.BAGHDAD_GOLDEN_AGE_PHASES || [], {
            phase: 'golden-age-phase',
            events: 'golden-age-events',
            card: 'golden-event',
            date: 'golden-event-date',
            label: 'golden-event-phase-label',
            title: 'golden-event-title',
            copy: 'golden-event-copy',
            media: 'golden-event-media'
        });

        requestAnimationFrame(function() {
            if (window.buildBaghdadTimelineSidebars) window.buildBaghdadTimelineSidebars();
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initTimelineEvents);
    else initTimelineEvents();
})();


// Round City particle formation for the hero
    (function () {
        function init() {
            const canvas = document.getElementById('hero-canvas');
            if (!canvas || typeof THREE === 'undefined') return;

            // Always use window dimensions — header.offsetHeight is 0 before Tailwind runs
            const getW = () => window.innerWidth;
            const getH = () => window.innerHeight;

            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, premultipliedAlpha: false, antialias: false });
            renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(getW(), getH());

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(60, getW() / getH(), 0.1, 100);
            camera.position.z = 3;

            const COUNT = 320;
            const pos = new Float32Array(COUNT * 3);
            const tgt = new Float32Array(COUNT * 3);

            function computeTargets() {
                // Visible world height at z=0 with camera z=3, FOV=60
                const visH = 2 * Math.tan((60 * Math.PI / 180) / 2) * 3;
                const visW = visH * (getW() / getH());
                const R = Math.min(visW, visH) * 0.35;
                const Rm = R * 0.70, Ri = R * 0.43;
                let i = 0;
                const ring = (count, r) => {
                    for (let k = 0; k < count; k++, i++) {
                        const a = (k / count) * Math.PI * 2;
                        tgt[i*3] = Math.cos(a) * r; tgt[i*3+1] = Math.sin(a) * r; tgt[i*3+2] = 0;
                    }
                };
                ring(140, R); ring(100, Rm); ring(56, Ri);
                // 4 gates × 5 particles = 20
                [Math.PI/2, 0, -Math.PI/2, Math.PI].forEach(ga => {
                    const cx = Math.cos(ga)*R*1.08, cy = Math.sin(ga)*R*1.08;
                    const px = -Math.sin(ga), py = Math.cos(ga);
                    [0,-0.08,0.08,-0.04,0.04].forEach(o => {
                        tgt[i*3] = cx+px*o*R; tgt[i*3+1] = cy+py*o*R; tgt[i*3+2] = 0; i++;
                    });
                });
            }

            // Start scattered
            for (let i = 0; i < COUNT; i++) {
                pos[i*3] = (Math.random()-0.5)*5; pos[i*3+1] = (Math.random()-0.5)*3.5; pos[i*3+2] = 0;
            }
            computeTargets();

            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

            // Dark brown — clearly visible against the #d4b886 sand background
            const mat = new THREE.PointsMaterial({ color: 0x4a2e0d, size: 0.025, transparent: true, opacity: 0.75, sizeAttenuation: true });
            const pts = new THREE.Points(geo, mat);
            scene.add(pts);

            let frame = 0, heroActive = true;
            (function animate() {
                requestAnimationFrame(animate);
                if (!heroActive) return;
                frame++;
                if (frame < 240) {
                    for (let i = 0; i < COUNT; i++) {
                        pos[i*3]   += (tgt[i*3]   - pos[i*3])   * 0.025;
                        pos[i*3+1] += (tgt[i*3+1] - pos[i*3+1]) * 0.025;
                    }
                    geo.attributes.position.needsUpdate = true;
                } else {
                    pts.rotation.z += 0.0003;
                }
                renderer.render(scene, camera);
            })();

            window.addEventListener('resize', function () {
                camera.aspect = getW() / getH();
                camera.updateProjectionMatrix();
                renderer.setSize(getW(), getH());
                computeTargets();
                for (let i = 0; i < COUNT; i++) { pos[i*3] = tgt[i*3]; pos[i*3+1] = tgt[i*3+1]; }
                geo.attributes.position.needsUpdate = true;
                frame = 240;
            });

            const heroEl = document.getElementById('hero');
            if (heroEl) {
                new IntersectionObserver(function(entries) {
                    heroActive = entries[0].isIntersecting;
                }, { threshold: 0 }).observe(heroEl);
            }
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    })();

// Era particle effects — 7-second bursts triggered on section entry
    (function() {
        function init() {
            const canvas = document.getElementById('fx-canvas');
            if (!canvas || typeof THREE === 'undefined') return;

            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, premultipliedAlpha: false, antialias: false });
            renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight);

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.z = 3;

            const COUNT = 200;
            const pos = new Float32Array(COUNT * 3);
            const vel = new Float32Array(COUNT * 3);
            const baseY = new Float32Array(COUNT);
            const phase = new Float32Array(COUNT);

            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
            const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02, transparent: true, opacity: 0, sizeAttenuation: true });
            const pts = new THREE.Points(geo, mat);
            scene.add(pts);

            const RAMP = 30, FADE = 60, TOTAL = 420;
            let frame = 0, currentEra = null, maxOp = 0;

            const configs = {
                era3: { color: 0xff5500, size: 0.022, op: 0.75 },
                era4: { color: 0xe0e0e0, size: 0.030, op: 0.50 },
            };

            function vH() { return 2 * Math.tan((60 * Math.PI / 180) / 2) * 3; }
            function vW() { return vH() * (window.innerWidth / window.innerHeight); }

            function spawn(i, initial) {
                const h = vH(), w = vW();
                if (currentEra === 'era3') {
                    // Embers: rise from bottom, scattered initially
                    pos[i*3]   = (Math.random()-0.5) * w;
                    pos[i*3+1] = initial ? (Math.random()-0.5) * h : -h/2 - 0.2;
                    vel[i*3]   = (Math.random()-0.5) * 0.01;
                    vel[i*3+1] = 0.008 + Math.random() * 0.012;
                } else if (currentEra === 'era4') {
                    // Only 80 of 200 slots active — park the rest off-screen
                    if (i >= 80) { pos[i*3] = 999; pos[i*3+1] = 999; pos[i*3+2] = -50; vel[i*3] = 0; vel[i*3+1] = 0; vel[i*3+2] = 0; return; }
                    // Ash: fall from above
                    pos[i*3]   = (Math.random()-0.5) * w;
                    pos[i*3+1] = initial ? (Math.random()-0.5) * h : h/2 + 0.2;
                    vel[i*3]   = (Math.random()-0.5) * 0.008;
                    vel[i*3+1] = -(0.010 + Math.random() * 0.012);
                } else if (currentEra === 'era5') {
                    // Amber flow: left-to-right sine wave
                    pos[i*3]   = initial ? (Math.random()-0.5) * w : -w/2 - 0.2;
                    pos[i*3+1] = (Math.random()-0.5) * h;
                    vel[i*3]   = 0.012 + Math.random() * 0.008;
                    vel[i*3+1] = 0;
                    baseY[i]   = pos[i*3+1];
                    phase[i]   = Math.random() * Math.PI * 2;
                } else {
                    // era1 gold motes upward, era2 star drift, era6 bokeh
                    pos[i*3]   = (Math.random()-0.5) * w;
                    pos[i*3+1] = (Math.random()-0.5) * h;
                    const spd = currentEra === 'era1' ? 0.004 : currentEra === 'era2' ? 0.002 : 0.001;
                    vel[i*3]   = (Math.random()-0.5) * spd;
                    vel[i*3+1] = currentEra === 'era1' ? spd*0.5 + Math.random()*spd : (Math.random()-0.5)*spd;
                }
                pos[i*3+2] = 0; vel[i*3+2] = 0;
            }

            function update() {
                const h = vH(), w = vW();
                for (let i = 0; i < COUNT; i++) {
                    if (currentEra === 'era5') {
                        phase[i] += 0.05;
                        pos[i*3] += vel[i*3];
                        pos[i*3+1] = baseY[i] + Math.sin(phase[i]) * 0.3;
                        if (pos[i*3] > w/2 + 0.5) spawn(i, false);
                    } else if (currentEra === 'era3') {
                        pos[i*3] += vel[i*3]; pos[i*3+1] += vel[i*3+1];
                        vel[i*3] += (Math.random()-0.5) * 0.002;
                        if (pos[i*3+1] > h/2 + 0.5) spawn(i, false);
                    } else if (currentEra === 'era4') {
                        if (i >= 80) continue;
                        pos[i*3] += vel[i*3]; pos[i*3+1] += vel[i*3+1];
                        if (pos[i*3+1] < -h/2 - 0.5) spawn(i, false);
                    } else {
                        pos[i*3] += vel[i*3]; pos[i*3+1] += vel[i*3+1];
                        if (pos[i*3]   >  w/2+0.5) pos[i*3]   = -w/2-0.5;
                        if (pos[i*3]   < -w/2-0.5) pos[i*3]   =  w/2+0.5;
                        if (pos[i*3+1] >  h/2+0.5) pos[i*3+1] = -h/2-0.5;
                        if (pos[i*3+1] < -h/2-0.5) pos[i*3+1] =  h/2+0.5;
                    }
                }
                geo.attributes.position.needsUpdate = true;
            }

            (function loop() {
                requestAnimationFrame(loop);
                if (!currentEra) { renderer.render(scene, camera); return; }
                frame++;
                if (currentEra === 'era3' || currentEra === 'era4') {
                    // Persistent — fade in, then hold until another era takes over
                    mat.opacity = Math.min(frame / RAMP, 1) * maxOp;
                } else {
                    mat.opacity = frame <= RAMP
                        ? (frame / RAMP) * maxOp
                        : frame <= TOTAL - FADE
                            ? maxOp
                            : Math.max(0, ((TOTAL - frame) / FADE) * maxOp);
                    if (frame > TOTAL) { mat.opacity = 0; currentEra = null; renderer.render(scene, camera); return; }
                }
                update();
                renderer.render(scene, camera);
            })();

            window.triggerEffect = function(era) {
                const cfg = configs[era];
                if (!cfg) { mat.opacity = 0; currentEra = null; return; }
                currentEra = era;
                frame = 0;
                maxOp = cfg.op;
                mat.color.setHex(cfg.color);
                mat.size = cfg.size;
                for (let i = 0; i < COUNT; i++) spawn(i, true);
            };

            window.addEventListener('resize', function() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        }

        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
        else init();
    })();

document.addEventListener("DOMContentLoaded", () => {
            const sections = document.querySelectorAll('.fade-in-section[data-era]');
            const body = document.body;
            const patternEra2 = document.getElementById('pattern-era2');
            const patternEra5 = document.getElementById('pattern-era5');

            // Set up Intersection Observer for fade-in animations and color switching
            const observerOptions = {
                root: null,
                rootMargin: '-20% 0px -40% 0px', // Trigger when section is mostly in the middle
                threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    // Handle fade in
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');

                        // Handle background color changes
                        const era = entry.target.getAttribute('data-era');
                        
                        // Colors mapping (matches tailwind config)
                        const colors = {
                            'era1': '#d4b886',
                            'era2': '#6f5318',
                            'era3': '#4a0e0e',
                            'era4': '#3d3d3d',
                            'era5': '#8b5a2b',
                            'era6': '#1a202c'
                        };

                        if (!colors[era]) return;
                        body.setAttribute('data-era', era);
                        body.style.backgroundColor = colors[era];

                        // Toggle dark/light text modes based on background
                        if (era !== 'era1') {
                            body.classList.add('era-dark-mode');
                        } else {
                            body.classList.remove('era-dark-mode');
                        }

                        // Handle Background Patterns
                        patternEra2.style.opacity = (era === 'era2') ? '1' : '0';
                        patternEra5.style.opacity = (era === 'era5') ? '1' : '0';
                        if (window.triggerEffect) window.triggerEffect(era);
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });

            // Make hero section visible immediately
            document.getElementById('hero').classList.add('is-visible');
        });

// Round City era1: outer ring → middle ring → inner ring → radial spokes, drawn one at a time
    (function () {
        function init() {
            var canvas = document.getElementById('round-city-canvas');
            if (!canvas || typeof THREE === 'undefined') return;

            var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
            renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight);

            var scene = new THREE.Scene();
            var cam = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
            cam.position.z = 3;

            var SEGS = 120;   // segments per circle
            var RSEGS = 20;   // points along each radial spoke
            var MAX_OP = 0.28;
            var RING_F = 240; // frames to draw each ring (~4s each)
            var SPOKE_F = 160; // frames to draw all spokes simultaneously

            var mat = new THREE.LineBasicMaterial({ color: 0x6b4c11, transparent: true, opacity: 0 });
            var circleGeos = [];
            var spokeGeos = [];
            var frame = 0, active = false;

            function vH() { return 2 * Math.tan(Math.PI / 6) * 3; }

            function buildScene() {
                circleGeos.forEach(function(g) { g.dispose(); });
                spokeGeos.forEach(function(g) { g.dispose(); });
                while (scene.children.length) scene.remove(scene.children[0]);
                circleGeos = [];
                spokeGeos = [];

                var h = vH(), w = h * (window.innerWidth / window.innerHeight);
                var R = Math.min(w, h) * 0.50;

                [1.0, 0.70, 0.43].forEach(function(s) {
                    var pts = [];
                    for (var i = 0; i <= SEGS; i++) {
                        var a = (i / SEGS) * Math.PI * 2;
                        pts.push(new THREE.Vector3(Math.cos(a) * R * s, Math.sin(a) * R * s, 0));
                    }
                    var geo = new THREE.BufferGeometry().setFromPoints(pts);
                    geo.setDrawRange(0, 0);
                    scene.add(new THREE.Line(geo, mat));
                    circleGeos.push(geo);
                });

                [Math.PI / 2, 0, -Math.PI / 2, Math.PI].forEach(function(a) {
                    var pts = [];
                    for (var i = 0; i <= RSEGS; i++) {
                        var t = i / RSEGS;
                        pts.push(new THREE.Vector3(Math.cos(a) * R * 1.08 * t, Math.sin(a) * R * 1.08 * t, 0));
                    }
                    var geo = new THREE.BufferGeometry().setFromPoints(pts);
                    geo.setDrawRange(0, 0);
                    scene.add(new THREE.Line(geo, mat));
                    spokeGeos.push(geo);
                });
            }

            buildScene();

            var FULL = SEGS + 1;
            var SFULL = RSEGS + 1;

            function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }

            (function loop() {
                requestAnimationFrame(loop);
                if (!active) return;

                if (frame < 3 * RING_F + SPOKE_F) frame++;

                var p = frame;
                circleGeos[0].setDrawRange(0, Math.floor(clamp01(p / RING_F) * FULL));
                circleGeos[1].setDrawRange(0, Math.floor(clamp01((p - RING_F) / RING_F) * FULL));
                circleGeos[2].setDrawRange(0, Math.floor(clamp01((p - 2 * RING_F) / RING_F) * FULL));
                var sp = clamp01((p - 3 * RING_F) / SPOKE_F);
                spokeGeos.forEach(function(g) { g.setDrawRange(0, Math.floor(sp * SFULL)); });

                renderer.render(scene, cam);
            })();

            var era1 = document.querySelector('section[data-era="era1"]');
            if (era1) {
                new IntersectionObserver(function(entries) {
                    entries.forEach(function(e) {
                        active = e.isIntersecting;
                        if (active) {
                            mat.opacity = MAX_OP;
                        } else {
                            mat.opacity = 0;
                            circleGeos.forEach(function(g) { g.setDrawRange(0, 0); });
                            spokeGeos.forEach(function(g) { g.setDrawRange(0, 0); });
                            renderer.render(scene, cam);
                            frame = 0;
                        }
                    });
                }, { rootMargin: '-20% 0px -40% 0px', threshold: 0 }).observe(era1);
            }

            window.addEventListener('resize', function() {
                cam.aspect = window.innerWidth / window.innerHeight;
                cam.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                buildScene();
            });
        }

        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
        else init();
    })();

// Golden Age era2: 3-layer Islamic star tiles (star polygon + outer octagon + inner octagon)
    // ripple from center, each layer blooms in sequence per tile
    (function () {
        function init() {
            var canvas = document.getElementById('golden-age-canvas');
            if (!canvas || typeof THREE === 'undefined') return;

            var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
            renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight);

            var scene = new THREE.Scene();
            var cam = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
            cam.position.z = 3;

            var N = 8;
            var STAR_R = 0.22;  // outer tip radius
            var STAR_r = 0.08;  // inner waist radius (more pointed than before)
            var SPACING = 0.62;
            var RIPPLE = 90;    // frames per world unit — slow wave
            var DRAW_F = 70;    // frames to draw each layer
            var MAX_OP = 0.18;

            var mat = new THREE.LineBasicMaterial({ color: 0xffdc73, transparent: true, opacity: 0 });
            var shapes = [];    // flat list of { geo, total, revealFrame, done }
            var frame = 0, active = false, allDone = false;

            function vH() { return 2 * Math.tan(Math.PI / 6) * 3; }

            function addLine(pts, revealFrame) {
                var geo = new THREE.BufferGeometry().setFromPoints(pts);
                geo.setDrawRange(0, 0);
                scene.add(new THREE.Line(geo, mat));
                shapes.push({ geo: geo, total: pts.length, revealFrame: revealFrame, done: false });
            }

            function buildScene() {
                shapes.forEach(function(s) { s.geo.dispose(); });
                while (scene.children.length) scene.remove(scene.children[0]);
                shapes = [];

                var h = vH(), w = h * (window.innerWidth / window.innerHeight);
                var nx = Math.ceil(w / 2 / SPACING) + 2;
                var ny = Math.ceil(h / 2 / SPACING) + 2;

                for (var i = -nx; i <= nx; i++) {
                    for (var j = -ny; j <= ny; j++) {
                        var cx = i * SPACING, cy = j * SPACING;
                        var base = Math.sqrt(cx * cx + cy * cy) * RIPPLE;

                        // Layer 1: 8-pointed star polygon (outer/inner alternating)
                        var starPts = [];
                        for (var k = 0; k <= N * 2; k++) {
                            var a = (k / (N * 2)) * Math.PI * 2 + Math.PI / 2;
                            var r = (k % 2 === 0) ? STAR_R : STAR_r;
                            starPts.push(new THREE.Vector3(cx + Math.cos(a) * r, cy + Math.sin(a) * r, 0));
                        }
                        addLine(starPts, base);

                        // Layer 2: outer octagon connecting the 8 star tips
                        var outerPts = [];
                        for (var k = 0; k <= N; k++) {
                            var a = (k / N) * Math.PI * 2 + Math.PI / 2;
                            outerPts.push(new THREE.Vector3(cx + Math.cos(a) * STAR_R, cy + Math.sin(a) * STAR_R, 0));
                        }
                        addLine(outerPts, base + DRAW_F * 0.5);

                        // Layer 3: inner octagon connecting the 8 waist points (offset by half a step)
                        var innerPts = [];
                        for (var k = 0; k <= N; k++) {
                            var a = (k / N) * Math.PI * 2 + Math.PI / 2 + Math.PI / N;
                            innerPts.push(new THREE.Vector3(cx + Math.cos(a) * STAR_r, cy + Math.sin(a) * STAR_r, 0));
                        }
                        addLine(innerPts, base + DRAW_F);
                    }
                }
            }

            buildScene();

            (function loop() {
                requestAnimationFrame(loop);
                if (!active) return;
                frame++;

                if (!allDone) {
                    var doneCount = 0;
                    shapes.forEach(function(s) {
                        if (s.done) { doneCount++; return; }
                        if (frame < s.revealFrame) return;
                        var p = Math.min(1, (frame - s.revealFrame) / DRAW_F);
                        s.geo.setDrawRange(0, Math.floor(p * s.total));
                        if (p >= 1) { s.done = true; doneCount++; }
                    });
                    if (doneCount === shapes.length) allDone = true;
                }

                renderer.render(scene, cam);
            })();

            var era2 = document.querySelector('.golden-age-expanded[data-era="era2"]');
            if (era2) {
                new IntersectionObserver(function(entries) {
                    entries.forEach(function(e) {
                        active = e.isIntersecting;
                        if (active) {
                            mat.opacity = MAX_OP;
                        } else {
                            mat.opacity = 0;
                            shapes.forEach(function(s) { s.geo.setDrawRange(0, 0); s.done = false; });
                            renderer.render(scene, cam);
                            frame = 0;
                            allDone = false;
                        }
                    });
                }, { rootMargin: '0px', threshold: 0 }).observe(era2);
            }

            window.addEventListener('resize', function() {
                cam.aspect = window.innerWidth / window.innerHeight;
                cam.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                buildScene();
                allDone = false;
            });
        }

        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
        else init();
    })();

// Ottoman era5: real Ottoman/Arabic phrases revealed right-to-left then dissolved
    (function () {
        // Load Amiri calligraphic Arabic font
        var fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Amiri:ital@0;1&display=swap';
        document.head.appendChild(fontLink);

        function init() {
            var canvas = document.getElementById('ottoman-canvas');
            if (!canvas || typeof THREE === 'undefined') return;

            var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
            renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(window.innerWidth, window.innerHeight);

            var scene = new THREE.Scene();
            var cam = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
            cam.position.z = 3;

            function vH() { return 2 * Math.tan(Math.PI / 6) * 3; }
            function vW() { return vH() * (window.innerWidth / window.innerHeight); }

            var PHRASES = [
                'مدينة السلام',
                'بسم الله الرحمن الرحيم',
                'سبحان الله',
                'الله أكبر',
                'ما شاء الله',
                'الحمد لله',
                'دار الحكمة',
                'بغداد',
                'السلام عليكم',
                'العلم نور',
                'العقل ميزان',
                'دار السلام',
                'الدولة العلية',
                'العدل أساس الملك',
                'في الصبر نجاة',
                'الحكمة ضالة المؤمن',
                'إن الله مع الصابرين',
                'أمير المؤمنين',
                'دام ملكه',
                'من عرف نفسه فقد عرف ربه',
            ];

            var NUM = 4;
            var WRITE_F = 700;
            var DISSOLVE_F = 550;
            var CYCLE = WRITE_F + DISSOLVE_F;
            var MAX_OP = 0.42;
            var CW = 860, CH = 150;
            var active = false;
            var slots = [];

            for (var i = 0; i < NUM; i++) {
                var tc = document.createElement('canvas');
                tc.width = CW; tc.height = CH;
                var tctx = tc.getContext('2d');
                var tex = new THREE.CanvasTexture(tc);
                var geo = new THREE.PlaneGeometry(3.2, 0.55);
                var mat = new THREE.MeshBasicMaterial({
                    map: tex, transparent: true, opacity: 0, depthWrite: false
                });
                var mesh = new THREE.Mesh(geo, mat);
                scene.add(mesh);
                var initT = -Math.floor(i * CYCLE / NUM);
                slots.push({ tc: tc, tctx: tctx, tex: tex, mat: mat, mesh: mesh,
                             phrase: '', t: initT, initT: initT, maxProgress: 0.6 });
            }

            function resetSlot(slot) {
                var h = vH(), w = vW();
                slot.phrase = PHRASES[Math.floor(Math.random() * PHRASES.length)];
                slot.maxProgress = 0.45 + Math.random() * 0.32;
                slot.mesh.position.set(
                    (Math.random() - 0.5) * w * 0.62,
                    (Math.random() - 0.5) * h * 0.66,
                    0
                );
                slot.mesh.rotation.z = (Math.random() - 0.5) * 0.13;
            }

            function renderText(slot, progress) {
                var ctx = slot.tctx;
                ctx.clearRect(0, 0, CW, CH);
                if (progress <= 0) { slot.tex.needsUpdate = true; return; }
                ctx.save();
                // Clip to revealed portion — Arabic writes right to left, so reveal from right
                var revealX = CW * (1 - Math.min(progress, 1));
                ctx.beginPath();
                ctx.rect(revealX, 0, CW - revealX, CH);
                ctx.clip();
                ctx.direction = 'rtl';
                ctx.font = 'italic 88px Amiri, serif';
                ctx.fillStyle = 'rgb(240, 220, 192)';
                ctx.textAlign = 'right';
                ctx.textBaseline = 'middle';
                ctx.fillText(slot.phrase, CW - 14, CH / 2);
                ctx.restore();
                slot.tex.needsUpdate = true;
            }

            slots.forEach(function(slot) { resetSlot(slot); });

            (function loop() {
                requestAnimationFrame(loop);
                if (!active) return;

                slots.forEach(function(slot) {
                    slot.t++;
                    if (slot.t < 0) { slot.mat.opacity = 0; return; }
                    var phase = slot.t % CYCLE;
                    if (phase === 0) resetSlot(slot);
                    if (phase < WRITE_F) {
                        slot.mat.opacity = MAX_OP;
                        renderText(slot, (phase / WRITE_F) * slot.maxProgress);
                    } else {
                        slot.mat.opacity = Math.max(0, MAX_OP * (1 - (phase - WRITE_F) / DISSOLVE_F));
                    }
                });

                renderer.render(scene, cam);
            })();

            var era5 = document.querySelector('section[data-era="era5"]');
            if (era5) {
                new IntersectionObserver(function(entries) {
                    entries.forEach(function(e) {
                        active = e.isIntersecting;
                        if (active) {
                            slots.forEach(function(slot) { slot.t = slot.initT; slot.mat.opacity = 0; });
                        } else {
                            slots.forEach(function(slot) { slot.mat.opacity = 0; });
                            renderer.render(scene, cam);
                        }
                    });
                }, { rootMargin: '-20% 0px -40% 0px', threshold: 0 }).observe(era5);
            }

            window.addEventListener('resize', function() {
                cam.aspect = window.innerWidth / window.innerHeight;
                cam.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        }

        function startWhenReady() {
            document.fonts.load('88px Amiri').then(init).catch(function() { init(); });
        }
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startWhenReady);
        else startWhenReady();
    })();

(function() {
        const lb = document.getElementById('lightbox');
        const lbImg = document.getElementById('lightbox-img');
        function openLB(src, alt) { lbImg.src = src; lbImg.alt = alt || ''; lb.classList.add('open'); }
        function closeLB() { lb.classList.remove('open'); lbImg.src = ''; }
        document.addEventListener('click', function(e) {
            const link = e.target.closest('.lightbox-link');
            if (link) {
                e.preventDefault();
                const img = link.querySelector('img');
                openLB(link.getAttribute('href'), img ? img.alt : '');
                return;
            }
            if (e.target === lb || e.target.id === 'lightbox-close') closeLB();
        });
        document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeLB(); });
    })();


(function() {
    var eras = [
        { label: 'Abbasid Caliphate',   years: '762-945',  color: '#0D47A1', start: 762,  end: 945  },
        { label: 'Buyid Control',       years: '945-1055', color: '#1A7A40', start: 945,  end: 1055 },
        { label: 'Seljuk Sultanate',    years: '1055-1157',color: '#7B1EA8', start: 1055, end: 1157 },
        { label: 'Late Abbasid Revival',years: '1157-1258',color: '#C04A18', start: 1157, end: 1258 },
        { label: 'Mongol Ilkhanate',    years: '1258-1336',color: '#7a3b1e', start: 1258, end: 1336 },
        { label: 'Jalayirid Sultanate', years: '1336-1410',color: '#5b4a8a', start: 1336, end: 1410 },
        { label: 'Timurid & Turkmen',   years: '1410-1508',color: '#a06020', start: 1410, end: 1508 },
        { label: 'Safavid Empire',      years: '1508-1534',color: '#c0392b', start: 1508, end: 1534 },
        { label: 'Ottoman Empire',      years: '1534-1917',color: '#2c5f8a', start: 1534, end: 1917 },
        { label: 'British Mandate',     years: '1917-1932',color: '#4a6741', start: 1917, end: 1932 },
        { label: 'Kingdom of Iraq',     years: '1932-1958',color: '#8a7a2c', start: 1932, end: 1958 },
        { label: 'Republic of Iraq',    years: '1958-now', color: '#3d3d3d', start: 1958, end: 2024 },
    ];

    var rulers = [
        { name: 'Al-Mansur',          years: '762-775',   start: 762,  end: 775  },
        { name: 'Al-Mahdi',           years: '775-785',   start: 775,  end: 785  },
        { name: 'Al-Hadi',            years: '785-786',   start: 785,  end: 786  },
        { name: 'Harun al-Rashid',    years: '786-809',   start: 786,  end: 809  },
        { name: 'Al-Amin',            years: '809-813',   start: 809,  end: 813  },
        { name: 'Al-Mamun',           years: '813-833',   start: 813,  end: 833  },
        { name: 'Al-Mutasim',         years: '833-842',   start: 833,  end: 842  },
        { name: 'Al-Wathiq',          years: '842-847',   start: 842,  end: 847  },
        { name: 'Al-Mutawakkil',      years: '847-861',   start: 847,  end: 861  },
        { name: 'Samarra Caliphs',    years: '861-892',   start: 861,  end: 892,  portrait: 'images/rulers/samarra-caliphs.jpg' },
        { name: 'Al-Mutadid',         years: '892-902',   start: 892,  end: 902  },
        { name: 'Al-Muktafi',         years: '902-908',   start: 902,  end: 908  },
        { name: 'Al-Muqtadir',        years: '908-932',   start: 908,  end: 932  },
        { name: 'Later Abbasids',     years: '932-1180',  start: 932,  end: 1180, portrait: 'images/rulers/later-abbasids.jpg' },
        { name: 'Al-Nasir',           years: '1180-1225', start: 1180, end: 1225 },
        { name: 'Al-Zahir',           years: '1225-1226', start: 1225, end: 1226 },
        { name: 'Al-Mustansir',       years: '1226-1242', start: 1226, end: 1242 },
        { name: 'Al-Mustasim',        years: '1242-1258', start: 1242, end: 1258 },
        { name: 'Hulagu Khan',        years: '1258-1265', start: 1258, end: 1265 },
        { name: 'Abaqa Khan',         years: '1265-1282', start: 1265, end: 1282 },
        { name: 'Various Ilkhans',    years: '1282-1336', start: 1282, end: 1336, portrait: 'images/rulers/various-ilkhans.jpg' },
        { name: 'Hasan Buzurg',       years: '1336-1356', start: 1336, end: 1356 },
        { name: 'Various Sultans',    years: '1356-1508', start: 1356, end: 1508, portrait: 'images/rulers/turkmen-sultans.jpg' },
        { name: 'Shah Ismail I',      years: '1508-1524', start: 1508, end: 1524 },
        { name: 'Suleiman I',         years: '1534-1566', start: 1534, end: 1566 },
        { name: 'Various Sultans',    years: '1566-1917', start: 1566, end: 1917, portrait: 'images/rulers/ottoman-sultans.jpg' },
        { name: 'British Admin.',     years: '1917-1932', start: 1917, end: 1932, portrait: 'images/rulers/british-admin.jpg' },
        { name: 'King Faisal I',      years: '1932-1939', start: 1932, end: 1939 },
        { name: 'Various Kings',      years: '1939-1958', start: 1939, end: 1958, portrait: 'images/rulers/various-kings.jpg' },
        { name: 'Abd al-Karim Qasim', years: '1958-1963', start: 1958, end: 1963 },
        { name: 'Saddam Hussein',     years: '1979-2003', start: 1979, end: 2003 },
        { name: 'Transitional Govt',  years: '2003-now',  start: 2003, end: 2024, portrait: 'images/rulers/transitional-govt.jpg' },
    ];

    var majorYears = [762, 775, 800, 850, 900, 945, 1000, 1055, 1100, 1157, 1200, 1258, 1336, 1401, 1534, 1917, 1920, 1958, 2003, 2024];
    var S = 762, E = 2024;

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function(ch) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[ch];
        });
    }

    function rulerSlug(name) {
        return String(name)
            .toLowerCase()
            .replace(/\./g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }

    function rulerPortraitPath(ruler) {
        return ruler.portrait || 'images/rulers/' + rulerSlug(ruler.name) + '.jpg';
    }

    function rulerHoverHtml(ruler, fg) {
        var name = escapeHtml(ruler.name);
        var years = escapeHtml(ruler.years);
        var portrait = escapeHtml(rulerPortraitPath(ruler));
        return [
            '<div style="display:grid;grid-template-columns:112px minmax(0,1fr);gap:18px;align-items:center">',
                '<div style="width:112px;height:132px;border:1px solid currentColor;border-radius:6px;overflow:hidden;background:rgba(255,255,255,0.08)">',
                    '<img src="' + portrait + '" alt="Portrait of ' + name + '" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.onerror=null;this.src=&#39;images/rulers/_portrait-needed.svg&#39;;">',
                '</div>',
                '<div>',
                    '<div style="font-size:22px;font-weight:700;letter-spacing:0;margin-bottom:8px;color:' + fg + '">' + name + '</div>',
                    '<div style="font-size:19px;opacity:0.82;font-style:normal;color:' + fg + '">' + years + '</div>',
                '</div>',
            '</div>'
        ].join('');
    }

    function docY(el, offset) {
        if (!el) return null;
        var rect = el.getBoundingClientRect();
        return rect.top + window.scrollY + (offset == null ? Math.min(120, rect.height * 0.2) : offset);
    }

    function addAnchor(anchors, year, y) {
        if (y == null || Number.isNaN(y)) return;
        anchors.push({ year: year, y: y });
    }

    function getTimelineAnchors() {
        var anchors = [];
        addAnchor(anchors, 762, docY(document.querySelector('section[data-era="era1"]'), 120));
        Array.prototype.slice.call(document.querySelectorAll('.golden-event[data-anchor-year]')).forEach(function(card) {
            var dateEl = card.querySelector('.golden-event-date');
            var y = docY(dateEl || card, dateEl ? dateEl.offsetHeight / 2 : 32);
            addAnchor(anchors, parseInt(card.getAttribute('data-anchor-year'), 10), y);
        });
        addAnchor(anchors, 1258, docY(document.querySelector('section[data-era="era3"]'), 120));
        addAnchor(anchors, 1534, docY(document.querySelector('section[data-era="era5"]'), 120));
        addAnchor(anchors, 1920, docY(document.querySelector('section[data-era="era6"]'), 120));
        addAnchor(anchors, 2024, Math.max(document.body.scrollHeight - 160, 0));
        anchors.sort(function(a, b) { return a.year === b.year ? a.y - b.y : a.year - b.year; });

        var unique = [];
        anchors.forEach(function(anchor) {
            var last = unique[unique.length - 1];
            if (last && last.year === anchor.year) {
                last.y = Math.min(last.y, anchor.y);
            } else {
                unique.push(anchor);
            }
        });
        return unique;
    }

    function makeYearToY(anchors) {
        return function(year) {
            if (!anchors.length) return 0;
            if (year <= anchors[0].year) return anchors[0].y;
            for (var i = 0; i < anchors.length - 1; i++) {
                var a = anchors[i], b = anchors[i + 1];
                if (year <= b.year) {
                    if (b.year === a.year) return a.y;
                    var t = (year - a.year) / (b.year - a.year);
                    return a.y + (b.y - a.y) * t;
                }
            }
            return anchors[anchors.length - 1].y;
        };
    }

    function ensureTipLinePath() {
        var line = document.getElementById('tl-tip-line');
        if (!line) return null;
        var path = line.querySelector('path');
        if (!path) {
            path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke-width', '2');
            path.setAttribute('stroke-linecap', 'round');
            line.appendChild(path);
        }
        return path;
    }

    function attachHover(hitTarget, html, accentColor, invert, sourceEl) {
        var tip = document.getElementById('tl-tip');
        var line = document.getElementById('tl-tip-line');
        var source = sourceEl || hitTarget;
        hitTarget.addEventListener('mouseenter', function() {
            var lineColor = accentColor === '#111111' ? '#f0ece4' : accentColor;
            tip.innerHTML = html;
            tip.style.background = invert ? '#f0ece4' : 'rgba(8,8,8,0.96)';
            tip.style.color = invert ? '#111' : '#fff';
            tip.style.border = '5px solid ' + lineColor;
            tip.style.top = '50vh';
            tip.style.display = 'block';
            var rect = source.getBoundingClientRect();
            var tipRect = tip.getBoundingClientRect();
            var x1 = rect.right;
            var y1 = rect.top + rect.height / 2;
            var x2 = tipRect.left;
            var y2 = window.innerHeight / 2;
            var midX = x1 + Math.max(24, (x2 - x1) * 0.42);
            var path = ensureTipLinePath();
            if (line && path) {
                line.style.display = 'block';
                path.setAttribute('stroke', lineColor);
                path.setAttribute('d', 'M ' + x1.toFixed(1) + ' ' + y1.toFixed(1) + ' C ' + midX.toFixed(1) + ' ' + y1.toFixed(1) + ', ' + (x2 - 24).toFixed(1) + ' ' + y2.toFixed(1) + ', ' + x2.toFixed(1) + ' ' + y2.toFixed(1));
            }
        });
        hitTarget.addEventListener('mouseleave', function() {
            tip.style.display = 'none';
            if (line) line.style.display = 'none';
        });
    }

    function clear(el) {
        while (el && el.firstChild) el.removeChild(el.firstChild);
    }

    function buildSegment(container, item, top, height, bg, html, invert) {
        if (height < 1) return;
        var seg = document.createElement('div');
        seg.style.cssText = [
            'position:absolute', 'left:0', 'right:0',
            'top:' + top.toFixed(2) + 'px',
            'height:' + height.toFixed(2) + 'px',
            'background:' + bg,
            'border-bottom:1px solid rgba(0,0,0,0.28)',
            'transition:filter 0.15s',
            'overflow:hidden',
            'pointer-events:none'
        ].join(';');
        container.appendChild(seg);

        var hitTop = top - Math.max(0, (18 - height) / 2);
        var hitHeight = Math.max(18, height);
        var hit = document.createElement('div');
        hit.style.cssText = [
            'position:absolute', 'left:-6px', 'right:-6px',
            'top:' + hitTop.toFixed(2) + 'px',
            'height:' + hitHeight.toFixed(2) + 'px',
            'z-index:2',
            'cursor:default',
            'background:transparent'
        ].join(';');
        hit.addEventListener('mouseenter', function(){ seg.style.filter='brightness(1.25)'; });
        hit.addEventListener('mouseleave', function(){ seg.style.filter=''; });
        attachHover(hit, html, bg, invert, seg);
        container.appendChild(hit);
    }

    function ensureConnectorSvg(height) {
        var svg = document.getElementById('timeline-connectors');
        if (!svg) {
            svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('id', 'timeline-connectors');
            document.body.insertBefore(svg, document.body.firstChild);
        }
        svg.setAttribute('width', document.documentElement.scrollWidth);
        svg.setAttribute('height', height);
        svg.setAttribute('viewBox', '0 0 ' + document.documentElement.scrollWidth + ' ' + height);
        svg.innerHTML = '';
        return svg;
    }

    window.buildBaghdadTimelineSidebars = function() {
        var tip = document.getElementById('tl-tip');
        var sidebar = document.getElementById('timeline-sidebar');
        var entityBar = document.getElementById('entity-bar');
        var rulerBar  = document.getElementById('ruler-bar');
        var yearBar   = document.getElementById('year-bar');
        if (!sidebar || !entityBar || !rulerBar || !yearBar) return;

        var docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        sidebar.style.height = docHeight + 'px';
        clear(entityBar); clear(rulerBar); clear(yearBar);

        tip.style.cssText = [
            'display:none',
            'position:fixed',
            'left:224px',
            'top:50vh',
            'z-index:500',
            'pointer-events:none',
            'transform:translateY(-50%)',
            'background:rgba(8,8,8,0.96)',
            'color:#fff',
            'padding:18px 24px',
            'border-radius:8px',
            'box-shadow:0 8px 24px rgba(0,0,0,0.36)',
            'font-family:Lora,serif',
            'line-height:1.42',
            'max-width:360px'
        ].join(';');

        var anchors = getTimelineAnchors();
        var yearToY = makeYearToY(anchors);

        eras.forEach(function(e) {
            var top = yearToY(e.start);
            var height = Math.max(2, yearToY(e.end) - top);
            var html = '<div style="font-size:22px;font-weight:700;letter-spacing:0;margin-bottom:8px">' + e.label + '</div>'
                     + '<div style="font-size:19px;opacity:0.88;font-style:normal">' + e.years + '</div>';
            buildSegment(entityBar, e, top, height, e.color, html, false);
        });

        rulers.forEach(function(r, i) {
            var top = yearToY(r.start);
            var height = Math.max(2, yearToY(r.end) - top);
            var isEven = i % 2 === 0;
            var isGoldenAgeRuler = r.start < 1258;
            var bg = isGoldenAgeRuler
                ? (isEven ? '#8a6216' : '#d8b45c')
                : (isEven ? '#111111' : '#f0ece4');
            var fg = isGoldenAgeRuler
                ? (isEven ? '#fff5d6' : '#2a1c05')
                : (isEven ? '#fff' : '#111');
            var html = rulerHoverHtml(r, fg);
            buildSegment(rulerBar, r, top, height, bg, html, !isEven);
        });

        var axis = document.createElement('div');
        axis.style.cssText = 'position:absolute;left:33px;top:' + yearToY(S).toFixed(2) + 'px;width:4px;height:' + Math.max(1, yearToY(E) - yearToY(S)).toFixed(2) + 'px;background:rgba(255,226,139,0.8);border-radius:999px';
        yearBar.appendChild(axis);

        majorYears.forEach(function(year) {
            var y = yearToY(year);
            var tick = document.createElement('div');
            tick.style.cssText = 'position:absolute;left:0;right:0;top:' + y.toFixed(2) + 'px;height:36px;z-index:4;pointer-events:none';
            tick.innerHTML = '<span style="position:absolute;left:2px;top:-30px;width:64px;text-align:center;background:rgba(0,0,0,0.86);color:#ffe08a;font-size:17px;font-weight:700;line-height:1;padding:5px 2px 4px;border-radius:5px;font-family:Lora,Georgia,serif">' + year + '</span>';
            yearBar.appendChild(tick);
        });

        var svg = ensureConnectorSvg(docHeight);
        var yearBarRect = yearBar.getBoundingClientRect();
        Array.prototype.slice.call(document.querySelectorAll('.golden-event[data-anchor-year]')).forEach(function(card) {
            var year = parseInt(card.getAttribute('data-anchor-year'), 10);
            var dateEl = card.querySelector('.golden-event-date');
            var cardRect = card.getBoundingClientRect();
            var dateRect = (dateEl || card).getBoundingClientRect();
            var axisY = yearToY(year);
            var cardY = dateRect.top + window.scrollY + dateRect.height / 2;
            var dotX = yearBarRect.left + window.scrollX + 35;
            var dotY = axisY + 18;
            var x2 = cardRect.left + window.scrollX;
            var midX = dotX + Math.max(40, (x2 - dotX) * 0.45);
            var highlight = card.classList.contains('is-highlight');
            var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('class', 'timeline-event-line' + (highlight ? ' is-highlight' : ''));
            path.setAttribute('d', 'M ' + dotX.toFixed(2) + ' ' + dotY.toFixed(2) + ' C ' + midX.toFixed(2) + ' ' + dotY.toFixed(2) + ', ' + (x2 - 28).toFixed(2) + ' ' + cardY.toFixed(2) + ', ' + x2.toFixed(2) + ' ' + cardY.toFixed(2));
            svg.appendChild(path);

            var dot = document.createElement('div');
            dot.style.cssText = 'position:absolute;left:26px;top:' + (axisY + 9).toFixed(2) + 'px;width:18px;height:18px;border-radius:999px;background:' + (highlight ? '#ffe07a' : '#f1d78a') + ';border:3px solid rgba(35,24,5,0.95);z-index:5;pointer-events:none';
            yearBar.appendChild(dot);
        });
    };

    function init() {
        window.buildBaghdadTimelineSidebars();
        window.addEventListener('resize', function() {
            window.clearTimeout(window.__baghdadSidebarRelayout);
            window.__baghdadSidebarRelayout = window.setTimeout(window.buildBaghdadTimelineSidebars, 150);
        });
        window.addEventListener('load', window.buildBaghdadTimelineSidebars);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
