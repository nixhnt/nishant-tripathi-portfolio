"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

/**
 * Signature visual: an ambient network topology — nodes drifting slowly and
 * linking to nearby peers, like a live NOC map. Replaces a generic sparkle
 * particle field with something that actually means something for this
 * subject (a network/infra engineer's portfolio).
 */
export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    let animationId: number;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isDark = resolvedTheme !== "light";
    const nodeColor = isDark ? "126,235,255" : "14,147,168";
    const linkColor = isDark ? "56,217,240" : "14,147,168";

    function resize() {
      const parent = canvas!.parentElement;
      width = canvas!.width = parent ? parent.clientWidth : window.innerWidth;
      height = canvas!.height = parent ? parent.clientHeight : window.innerHeight;
      const count = Math.min(70, Math.floor((width * height) / 18000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 1,
      }));
    }

    function step() {
      ctx!.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      const linkDist = 130;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.35;
            ctx!.strokeStyle = `rgba(${linkColor},${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx!.fillStyle = `rgba(${nodeColor},0.85)`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(step);
      }
    }

    resize();
    step();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
