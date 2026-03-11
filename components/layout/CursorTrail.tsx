"use client";

import { useEffect, useRef, useCallback } from "react";

interface TrailPoint {
  x: number;
  y: number;
  time: number;
}

const TRAIL_COLORS = [
  { r: 58, g: 109, b: 217 },
  { r: 123, g: 143, b: 221 },
  { r: 232, g: 168, b: 110 },
  { r: 214, g: 136, b: 64 },
];

const TRAIL_MAX_AGE_MS = 600;
const TRAIL_MAX_POINTS = 120;
const MIN_LINE_WIDTH = 1.5;
const MAX_LINE_WIDTH = 5;

function lerpColor(
  a: { r: number; g: number; b: number },
  b: { r: number; g: number; b: number },
  t: number
) {
  return {
    r: Math.round(a.r + (b.r - a.r) * t),
    g: Math.round(a.g + (b.g - a.g) * t),
    b: Math.round(a.b + (b.b - a.b) * t),
  };
}

function getColorAt(t: number): string {
  const segments = TRAIL_COLORS.length - 1;
  const segT = t * segments;
  const idx = Math.min(Math.floor(segT), segments - 1);
  const localT = segT - idx;
  const c = lerpColor(TRAIL_COLORS[idx], TRAIL_COLORS[idx + 1], localT);
  return `rgb(${c.r},${c.g},${c.b})`;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<TrailPoint[]>([]);
  const rafRef = useRef<number>(0);
  const isDesktopRef = useRef(true);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const points = pointsRef.current;
    points.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    if (points.length > TRAIL_MAX_POINTS) {
      points.splice(0, points.length - TRAIL_MAX_POINTS);
    }
  }, []);

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(pointer: fine)");
    isDesktopRef.current = mql.matches;
    if (!mql.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    document.documentElement.style.cursor = "none";

    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);
      const now = Date.now();
      const points = pointsRef.current;

      while (points.length > 0 && now - points[0].time > TRAIL_MAX_AGE_MS) {
        points.shift();
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (points.length < 2) return;

      for (let i = 0; i < points.length - 1; i++) {
        const t = i / (points.length - 1);
        const age = (now - points[i].time) / TRAIL_MAX_AGE_MS;
        const alpha = Math.max(0, 1 - age) * (0.3 + 0.7 * t);
        const lineWidth = MIN_LINE_WIDTH + (MAX_LINE_WIDTH - MIN_LINE_WIDTH) * t;

        ctx.beginPath();
        ctx.strokeStyle = getColorAt(t);
        ctx.globalAlpha = alpha;
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        const p0 = points[i];
        const p1 = points[i + 1];

        if (i === 0) {
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
        } else {
          const prev = points[i - 1];
          const cpX = (prev.x + p1.x) / 2;
          const cpY = (prev.y + p1.y) / 2;
          ctx.moveTo(p0.x, p0.y);
          ctx.quadraticCurveTo(cpX, cpY, p1.x, p1.y);
        }

        ctx.stroke();
      }

      ctx.globalAlpha = 1;
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.style.cursor = "";
    };
  }, [resize, handleMouseMove]);

  return (
    <>
      <style jsx global>{`
        @media (pointer: fine) {
          html,
          body,
          * {
            cursor: none !important;
          }
        }
      `}</style>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[9999]"
      />
    </>
  );
}
