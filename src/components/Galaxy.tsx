import { useEffect, useRef } from "react";

// The animated background behind the home page hero: pictures drift like
// stars, spiral into a glowing center, burst back out, and repeat.
// Purely decorative, so it's hidden from screen readers.

interface GalaxyProps {
  images: string[];
  paused: boolean;
}

const CYCLE_SECONDS = 24;

// Falling in speeds up, like gravity; bursting out starts fast and slows.
// Squared rather than cubed, so the motion is spread across the whole stage
// instead of bunched at one end.
const easeIn = (t: number): number => Math.pow(t, 2);
const easeOut = (t: number): number => 1 - Math.pow(1 - t, 2);
const clamp01 = (t: number) => Math.max(0, Math.min(1, t));
const random = (min: number, max: number) => min + Math.random() * (max - min);

// How far out a picture sits during the cycle. `phase` runs 0 → 1 over one
// loop. Return 1 for its normal orbit and about 0.03 for "inside the black
// hole".
function pull(phase: number): number {
  if (phase < 0.3) {
    return 1;
  }

  if (phase < 0.7) {
    const t = clamp01((phase - 0.3) / 0.4);
    const eased = easeIn(t);
    return 1 + (0.03 - 1) * eased;
  }

  if (phase < 0.74) {
    return 0.03;
  }

  if (phase < 1) {
    const t = clamp01((phase - 0.74) / 0.26);
    const eased = easeOut(t);
    return 0.03 + (1 - 0.03) * eased;
  }

  return 1;
}

interface Star {
  img: HTMLImageElement;
  angle: number;
  home: number; // 0–1: how far from the center it normally drifts
  size: number;
  spin: number;
  tilt: number;
  delay: number; // so they don't all fall in at once
}

export default function Galaxy({ images, paused }: GalaxyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // The loop below reads this, so pausing doesn't restart the whole effect.
  const pausedRef = useRef(paused);
  const syncRef = useRef<() => void>(() => {});

  useEffect(() => {
    pausedRef.current = paused;
    syncRef.current();
  }, [paused]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let centerX = 0;
    let centerY = 0;
    let spread = 0;

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = width * ratio;
      canvas!.height = height * ratio;
      ctx!.setTransform(ratio, 0, 0, ratio, 0, 0);
      const narrow = width < 768;
      // Right of the headline on wide screens; above it on phones.
      centerX = narrow ? width * 0.5 : width * 0.68;
      centerY = narrow ? height * 0.28 : height * 0.5;
      spread = Math.max(width, height) * (narrow ? 0.55 : 0.5);
    }
    resize();

    // Created here, after the page has painted, so the pictures never
    // hold up the headline.
    const pictures = images.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        if (!running) draw(0);
      };
      return img;
    });

    // Big enough to tell a tub from a shower; fewer of them so it's not crowded.
    const narrow = width < 768;
    const count = narrow ? 22 : 40;
    const stars: Star[] = Array.from({ length: count }, (_, i) => ({
      img: pictures[i % pictures.length],
      angle: random(0, Math.PI * 2),
      home: random(0.18, 1),
      size: narrow ? random(48, 90) : random(60, 120),
      spin: random(-0.3, 0.3),
      tilt: random(0, Math.PI * 2),
      delay: random(0, 0.08),
    }));
    const dust = Array.from({ length: 160 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: random(0.3, 1.4),
      alpha: random(0.2, 0.8),
    }));

    // Start partway into the drift, so a paused or reduced-motion visitor
    // sees the pictures spread out rather than mid-collapse.
    let clock = CYCLE_SECONDS * 0.2;

    function draw(dt: number) {
      clock += dt;
      ctx!.clearRect(0, 0, width, height);

      ctx!.fillStyle = "#fff";
      for (const d of dust) {
        ctx!.globalAlpha = d.alpha;
        ctx!.beginPath();
        ctx!.arc(d.x * width, d.y * height, d.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      const base = (clock / CYCLE_SECONDS) % 1;
      // 0 most of the time; rises to 1 while the pictures are swallowed.
      const swallow =
        base > 0.6 && base < 0.85 ? Math.sin(((base - 0.6) / 0.25) * Math.PI) : 0;

      const glowRadius = spread * (0.35 + swallow * 0.25);
      const glow = ctx!.createRadialGradient(centerX, centerY, 0, centerX, centerY, glowRadius);
      glow.addColorStop(0, "rgba(21, 18, 46, 1)");
      glow.addColorStop(0.12, "rgba(21, 18, 46, 1)");
      glow.addColorStop(0.16, `rgba(244, 91, 208, ${0.55 + swallow * 0.4})`);
      glow.addColorStop(0.35, `rgba(16, 91, 255, ${0.25 + swallow * 0.3})`);
      glow.addColorStop(1, "rgba(16, 91, 255, 0)");
      ctx!.globalAlpha = 1;
      ctx!.fillStyle = glow;
      ctx!.beginPath();
      ctx!.arc(centerX, centerY, glowRadius, 0, Math.PI * 2);
      ctx!.fill();

      for (const star of stars) {
        const phase = clamp01(base - star.delay + (base < star.delay ? 1 : 0));
        const k = pull(phase);
        // Closer in means a faster orbit, like a real spiral.
        star.angle += dt * (0.04 / Math.max(k, 0.12));
        star.tilt += dt * star.spin;

        const r = star.home * spread * k;
        const x = centerX + Math.cos(star.angle) * r * 1.25;
        const y = centerY + Math.sin(star.angle) * r * 0.7;
        const w = star.size * (0.35 + 0.65 * k);
        const h = w * 0.75;

        ctx!.save();
        ctx!.globalAlpha = 0.5 + 0.5 * k;
        ctx!.translate(x, y);
        ctx!.rotate(star.tilt);
        ctx!.beginPath();
        ctx!.roundRect(-w / 2, -h / 2, w, h, 10);
        ctx!.clip();
        if (star.img.complete && star.img.naturalWidth > 0) {
          ctx!.drawImage(star.img, -w / 2, -h / 2, w, h);
        }
        ctx!.restore();
      }
    }

    // Only animate when it's worth it: not paused, on screen, tab visible.
    // That saves phone batteries once someone scrolls down.
    let frameId = 0;
    let running = false;
    let last = 0;
    let onScreen = true;

    function frame(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      draw(dt);
      frameId = requestAnimationFrame(frame);
    }

    function sync() {
      const shouldRun = !pausedRef.current && onScreen && !document.hidden;
      if (shouldRun && !running) {
        running = true;
        last = performance.now();
        frameId = requestAnimationFrame(frame);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(frameId);
      }
    }
    syncRef.current = sync;

    const visibility = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    visibility.observe(canvas);

    const sizeWatcher = new ResizeObserver(() => {
      resize();
      if (!running) draw(0);
    });
    sizeWatcher.observe(canvas);

    document.addEventListener("visibilitychange", sync);
    draw(0);
    sync();

    return () => {
      cancelAnimationFrame(frameId);
      visibility.disconnect();
      sizeWatcher.disconnect();
      document.removeEventListener("visibilitychange", sync);
      syncRef.current = () => {};
    };
  }, [images]);

  return <canvas className="galaxy" ref={canvasRef} aria-hidden="true" />;
}
