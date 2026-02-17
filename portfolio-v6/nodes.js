(function () {
  "use strict";

  // ==================== CONFIG ====================
  const CONFIG = {
    // Canvas
    BACKGROUND_COLOR: "rgba(10, 10, 10, 0.18)",

    // Nodes
    NODE_COUNT: 90,
    NODE_RADIUS_MIN: 1.2,
    NODE_RADIUS_MAX: 2.8,
    NODE_SPEED_MIN: 0.12,
    NODE_SPEED_MAX: 0.45,
    NODE_COLOR_BASE: "rgba(34, 197, 94,",          // green-500
    NODE_COLOR_DIM:  "rgba(255, 255, 255,",        // subtle white nodes

    // Connections
    CONNECTION_DISTANCE: 150,
    CONNECTION_WIDTH_MAX: 0.9,
    CONNECTION_COLOR: "rgba(34, 197, 94,",

    // Mouse interaction
    MOUSE_RADIUS: 160,
    MOUSE_FORCE: 0.018,

    // Data pulses along edges
    PULSE_INTERVAL_MS: 1400,
    PULSE_SPEED: 2.4,
    PULSE_RADIUS: 3,
    PULSE_COLOR: "#86efac",                        // green-300

    // Click burst
    BURST_COUNT: 10,
    BURST_LIFE: 140,
  };

  // ==================== STATE ====================
  let canvas, ctx;
  let width, height;
  let nodes = [];
  let pulses = [];
  let mouse = { x: -9999, y: -9999 };
  let animationId;

  // ==================== NODE CLASS ====================
  class Node {
    constructor(x, y, spawned = false) {
      this.x = x ?? Math.random() * width;
      this.y = y ?? Math.random() * height;

      const angle = Math.random() * Math.PI * 2;
      const speed = CONFIG.NODE_SPEED_MIN +
        Math.random() * (CONFIG.NODE_SPEED_MAX - CONFIG.NODE_SPEED_MIN);

      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;

      this.radius = CONFIG.NODE_RADIUS_MIN +
        Math.random() * (CONFIG.NODE_RADIUS_MAX - CONFIG.NODE_RADIUS_MIN);

      // Some nodes are bright green, most are dimmer white
      this.isGreen = Math.random() < 0.30;
      this.alpha = this.isGreen
        ? 0.55 + Math.random() * 0.45
        : 0.12 + Math.random() * 0.25;

      // Twinkle
      this.twinkleSpeed = 0.008 + Math.random() * 0.018;
      this.twinkleDir = Math.random() < 0.5 ? 1 : -1;

      // Burst nodes fade out
      this.spawned = spawned;
      this.life = spawned ? CONFIG.BURST_LIFE : Infinity;
      this.maxLife = this.life;
    }

    update() {
      // Mouse attraction
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONFIG.MOUSE_RADIUS && dist > 1) {
        this.vx += (dx / dist) * CONFIG.MOUSE_FORCE;
        this.vy += (dy / dist) * CONFIG.MOUSE_FORCE;
      }

      // Speed cap
      const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
      if (speed > CONFIG.NODE_SPEED_MAX * 2) {
        this.vx = (this.vx / speed) * CONFIG.NODE_SPEED_MAX * 2;
        this.vy = (this.vy / speed) * CONFIG.NODE_SPEED_MAX * 2;
      }

      this.x += this.vx;
      this.y += this.vy;

      // Wrap edges
      if (this.x < -10) this.x = width + 10;
      if (this.x > width + 10) this.x = -10;
      if (this.y < -10) this.y = height + 10;
      if (this.y > height + 10) this.y = -10;

      // Twinkle
      this.alpha += this.twinkleSpeed * this.twinkleDir;
      const [aMin, aMax] = this.isGreen ? [0.35, 1.0] : [0.06, 0.35];
      if (this.alpha >= aMax) { this.alpha = aMax; this.twinkleDir = -1; }
      if (this.alpha <= aMin) { this.alpha = aMin; this.twinkleDir =  1; }

      // Burst life countdown
      if (this.spawned) this.life--;
    }

    draw() {
      // Fade burst nodes toward end of life
      let drawAlpha = this.alpha;
      if (this.spawned) {
        drawAlpha *= (this.life / this.maxLife);
      }

      const colorBase = this.isGreen ? CONFIG.NODE_COLOR_BASE : CONFIG.NODE_COLOR_DIM;

      // Outer glow for green nodes
      if (this.isGreen) {
        const glow = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius * 4
        );
        glow.addColorStop(0, `rgba(34, 197, 94, ${drawAlpha * 0.55})`);
        glow.addColorStop(1, "rgba(34, 197, 94, 0)");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // Core dot
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${colorBase}${drawAlpha})`;
      ctx.fill();
    }

    isDead() {
      return this.spawned && this.life <= 0;
    }
  }

  // ==================== PULSE CLASS ====================
  class Pulse {
    constructor(nodeA, nodeB) {
      this.nodeA = nodeA;
      this.nodeB = nodeB;
      this.progress = 0; // 0 → 1
    }

    update() {
      this.progress += CONFIG.PULSE_SPEED /
        Math.hypot(this.nodeB.x - this.nodeA.x, this.nodeB.y - this.nodeA.y);
    }

    draw() {
      const x = this.nodeA.x + (this.nodeB.x - this.nodeA.x) * this.progress;
      const y = this.nodeA.y + (this.nodeB.y - this.nodeA.y) * this.progress;
      const fade = 1 - Math.abs(this.progress - 0.5) * 2;

      // Glow
      const glow = ctx.createRadialGradient(x, y, 0, x, y, CONFIG.PULSE_RADIUS * 3);
      glow.addColorStop(0, `rgba(134, 239, 172, ${fade * 0.9})`);
      glow.addColorStop(1, "rgba(34, 197, 94, 0)");
      ctx.beginPath();
      ctx.arc(x, y, CONFIG.PULSE_RADIUS * 3, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(x, y, CONFIG.PULSE_RADIUS, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(134, 239, 172, ${fade})`;
      ctx.fill();
    }

    isDone() {
      return this.progress >= 1;
    }
  }

  // ==================== DRAW CONNECTIONS ====================
  function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i];
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.CONNECTION_DISTANCE) {
          const proximity = 1 - dist / CONFIG.CONNECTION_DISTANCE;
          const opacity = proximity * 0.45;
          const width = CONFIG.CONNECTION_WIDTH_MAX * proximity;

          // Highlight edges near mouse
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const mouseDist = Math.hypot(midX - mouse.x, midY - mouse.y);
          const mouseBoost = mouseDist < 120
            ? (1 - mouseDist / 120) * 0.5
            : 0;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `${CONFIG.CONNECTION_COLOR}${(opacity + mouseBoost).toFixed(3)})`;
          ctx.lineWidth = width + mouseBoost * 0.8;
          ctx.stroke();
        }
      }
    }
  }

  // ==================== LAUNCH DATA PULSES ====================
  function launchPulse() {
    // Pick a random valid edge
    const candidates = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
        if (dist < CONFIG.CONNECTION_DISTANCE) {
          candidates.push([nodes[i], nodes[j]]);
        }
      }
    }
    if (candidates.length === 0) return;
    const pair = candidates[Math.floor(Math.random() * candidates.length)];
    pulses.push(new Pulse(pair[0], pair[1]));
  }

  // ==================== CLICK BURST ====================
  function spawnBurst(x, y) {
    for (let i = 0; i < CONFIG.BURST_COUNT; i++) {
      const n = new Node(
        x + (Math.random() - 0.5) * 20,
        y + (Math.random() - 0.5) * 20,
        true
      );
      // Burst outward
      const angle = (i / CONFIG.BURST_COUNT) * Math.PI * 2;
      n.vx = Math.cos(angle) * (0.8 + Math.random() * 1.4);
      n.vy = Math.sin(angle) * (0.8 + Math.random() * 1.4);
      n.isGreen = true;
      n.radius = 2;
      nodes.push(n);
    }

    // Ripple ring
    drawRipple(x, y);
  }

  function drawRipple(x, y) {
    let r = 0;
    let opacity = 0.8;
    const interval = setInterval(() => {
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(34, 197, 94, ${opacity})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      r += 6;
      opacity -= 0.06;
      if (opacity <= 0) clearInterval(interval);
    }, 16);
  }

  // ==================== ANIMATION LOOP ====================
  function animate() {
    animationId = requestAnimationFrame(animate);

    // Subtle trail
    ctx.fillStyle = CONFIG.BACKGROUND_COLOR;
    ctx.fillRect(0, 0, width, height);

    // Connections first (behind nodes)
    drawConnections();

    // Nodes
    for (let i = nodes.length - 1; i >= 0; i--) {
      nodes[i].update();
      nodes[i].draw();
      if (nodes[i].isDead()) nodes.splice(i, 1);
    }

    // Pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
      pulses[i].update();
      pulses[i].draw();
      if (pulses[i].isDone()) pulses.splice(i, 1);
    }
  }

  // ==================== INIT ====================
  function init() {
    canvas = document.getElementById("nodesCanvas");
    if (!canvas) {
      // Create canvas if not present in the HTML
      canvas = document.createElement("canvas");
      canvas.id = "nodesCanvas";
      canvas.style.cssText =
        "position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;";
      document.body.prepend(canvas);
    }

    ctx = canvas.getContext("2d");
    resize();

    // Populate nodes
    nodes = Array.from({ length: CONFIG.NODE_COUNT }, () => new Node());

    // Start loop
    animate();

    // Pulse timer
    setInterval(launchPulse, CONFIG.PULSE_INTERVAL_MS);
  }

  // ==================== RESIZE ====================
  function resize() {
    width  = canvas.width  = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  // ==================== EVENTS ====================
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  window.addEventListener("click", (e) => {
    spawnBurst(e.clientX, e.clientY);
  });

  window.addEventListener("resize", () => {
    resize();
    // Reposition nodes that are now out of bounds gently
    nodes.forEach((n) => {
      n.x = Math.min(n.x, width);
      n.y = Math.min(n.y, height);
    });
  });

  // ==================== BOOT ====================
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();