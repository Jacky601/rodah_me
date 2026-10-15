import { useEffect, useRef } from 'react';

/**
 * Forme organique en fond : une trentaine de boucles bruitées superposées qui ondulent
 * lentement et dérivent avec le défilement. Canvas 2D, couleur lue dans --primary.
 */
export default function Aura() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const LOOPS = 34;
    const POINTS = 96;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let visible = true;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const color = () => getComputedStyle(document.documentElement).getPropertyValue('--primary').trim().split(/\s+/).join(',');

    // Bruit lisse : somme de sinus à fréquences irrationnelles
    const n = (a: number, t: number, k: number) =>
      Math.sin(a * 3 + t * 0.7 + k * 0.31) * 0.5 +
      Math.sin(a * 5 - t * 0.45 + k * 0.17) * 0.3 +
      Math.sin(a * 2 + t * 0.3 - k * 0.23) * 0.2;

    const draw = (now: number) => {
      const t = reduced ? 0 : now / 1000;
      ctx.clearRect(0, 0, w, h);
      const rgb = color();
      const scroll = window.scrollY;
      const R = Math.min(w, h) * 0.17;
      // Dérive lente : la forme glisse d'un côté à l'autre au fil du défilement
      const cx = w * (0.5 + Math.sin(scroll / 900) * 0.22);
      const cy = h * (0.48 + Math.cos(scroll / 1300) * 0.08);

      ctx.globalCompositeOperation = 'lighter';
      for (let k = 0; k < LOOPS; k++) {
        const amp = R * (0.16 + (k / LOOPS) * 0.22);
        const r0 = R * (0.86 + (k / LOOPS) * 0.3);
        ctx.beginPath();
        for (let i = 0; i <= POINTS; i++) {
          const a = (i / POINTS) * Math.PI * 2;
          const r = r0 + n(a, t, k) * amp;
          const x = cx + Math.cos(a) * r;
          const y = cy + Math.sin(a) * r * 0.92;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(${rgb},${0.05 + (k % 5) * 0.012})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();
      }
      // Halo diffus au centre
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.9);
      g.addColorStop(0, `rgba(${rgb},0.10)`);
      g.addColorStop(1, `rgba(${rgb},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(cx - R * 2, cy - R * 2, R * 4, R * 4);
      ctx.globalCompositeOperation = 'source-over';
    };

    const loop = (now: number) => {
      if (visible) draw(now);
      raf = requestAnimationFrame(loop);
    };

    const onVis = () => {
      visible = document.visibilityState === 'visible';
    };

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVis);
    if (reduced) draw(0);
    else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 h-full w-full" />;
}
