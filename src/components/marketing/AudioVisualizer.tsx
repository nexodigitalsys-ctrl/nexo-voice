"use client";

import { useEffect, useRef } from "react";

/**
 * Partícula del campo animado del fondo del hero.
 */
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  o: number;
  c: string;
}

/** Número de partículas del campo. */
const PARTICLE_COUNT = 70;
/** Número de barras de la onda sonora inferior. */
const BAR_COUNT = 60;
/** Distancia máxima (px) para dibujar conexión entre partículas. */
const CONNECTION_DISTANCE = 100;
/** Paleta de colores de las partículas. */
const PARTICLE_COLORS: readonly string[] = [
  "#00D4FF",
  "#00B4A0",
  "#22d3ee",
  "#2dd4bf",
];

/**
 * Canvas a pantalla completa, fijo en el fondo del hero.
 * Renderiza un campo de partículas con movimiento sinusoidal,
 * conexiones entre partículas próximas y una onda sonora en la base.
 *
 * Equivalente exacto al script del spoiler aprobado.
 */
export default function AudioVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let time = 0;
    let frameId = 0;

    const resize = (): void => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const initParticles = (): void => {
      particles = Array.from({ length: PARTICLE_COUNT }, (): Particle => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.8 + 0.5,
        o: Math.random() * 0.45 + 0.15,
        c: PARTICLE_COLORS[
          Math.floor(Math.random() * PARTICLE_COLORS.length)
        ],
      }));
    };

    const draw = (): void => {
      ctx.clearRect(0, 0, width, height);
      time += 0.008;

      // Campo de partículas + conexiones
      particles.forEach((p, i) => {
        p.vy += Math.sin(time + p.x * 0.008) * 0.015;
        p.vx += Math.cos(time + p.y * 0.008) * 0.008;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.992;
        p.vy *= 0.992;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = p.o;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECTION_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,212,255,${
              0.08 * (1 - d / CONNECTION_DISTANCE)
            })`;
            ctx.lineWidth = 0.4;
            ctx.globalAlpha = 1;
            ctx.stroke();
          }
        }
      });

      // Onda sonora de barras en la base
      const barWidth = width / BAR_COUNT;
      for (let i = 0; i < BAR_COUNT; i++) {
        const barHeight =
          Math.sin(time * 2 + i * 0.28) * 28 +
          Math.sin(time * 3.2 + i * 0.48) * 18 +
          Math.cos(time * 1.6 + i * 0.18) * 12 +
          35;
        const grad = ctx.createLinearGradient(
          i * barWidth,
          height - barHeight,
          i * barWidth,
          height
        );
        grad.addColorStop(0, "rgba(0,212,255,0.35)");
        grad.addColorStop(1, "rgba(0,212,255,0.02)");
        ctx.globalAlpha = 1;
        ctx.fillStyle = grad;
        ctx.fillRect(
          i * barWidth + 2,
          height - barHeight,
          barWidth - 4,
          barHeight
        );
      }

      ctx.globalAlpha = 1;
      frameId = requestAnimationFrame(draw);
    };

    const handleResize = (): void => {
      resize();
      initParticles();
    };

    resize();
    initParticles();
    draw();
    window.addEventListener("resize", handleResize);

    // Cleanup obligatorio
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-55"
    />
  );
}
