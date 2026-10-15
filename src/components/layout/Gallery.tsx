import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { gallery } from '../../data/content';

const N = gallery.length;

/**
 * Pile de cartes en perspective : au défilement, les photos avancent en diagonale
 * (les suivantes arrivent en bas à droite, les précédentes s'éloignent en haut à gauche).
 */
function Card({ i, progress }: { i: number; progress: MotionValue<number> }) {
  const item = gallery[i];
  const d = useTransform(progress, (p) => i - p * (N - 1));
  const x = useTransform(d, (v) => `${v * 22}vw`);
  const y = useTransform(d, (v) => `${v * 13}vh`);
  const z = useTransform(d, (v) => v * 160);
  const opacity = useTransform(d, [-2.6, -1.6, 0, 2, 3], [0, 0.55, 1, 0.9, 0]);
  const zIndex = useTransform(d, (v) => Math.round(100 + v * 10));

  return (
    <motion.figure
      style={{ x, y, z, opacity, zIndex, rotateY: -16, rotateX: 6 }}
      className="glass absolute left-1/2 top-1/2 -ml-[min(19vw,240px)] -mt-[min(13vw,160px)] w-[min(38vw,480px)] overflow-hidden rounded-[26px] p-2"
    >
      <span className="absolute left-5 top-5 z-10 rounded-full bg-black/60 px-3 py-1 font-mono text-[0.7rem] font-bold text-white backdrop-blur">
        {String(i + 1).padStart(2, '0')}
      </span>
      <img src={item.src} alt={item.caption} loading="lazy" className="aspect-[3/2] w-full rounded-[20px] object-cover" />
    </motion.figure>
  );
}

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [current, setCurrent] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (p) => setCurrent(Math.min(N - 1, Math.max(0, Math.round(p * (N - 1))))));

  const header = (
    <div className="mx-auto max-w-[1200px] px-6 md:px-12">
      <p className="eyebrow">Galerie</p>
      <h2 className="h-section mt-4">
        Moments forts <span className="text-primary">du parcours</span>.
      </h2>
    </div>
  );

  // Mouvement réduit ou petit écran : simple grille
  if (reduced) {
    return (
      <section className="relative py-20">
        {header}
        <ul className="mx-auto mt-10 grid max-w-[1200px] grid-cols-2 gap-3 px-6 md:grid-cols-4 md:px-12">
          {gallery.map((g) => (
            <li key={g.src} className="glass overflow-hidden rounded-[22px] p-1.5">
              <img src={g.src} alt={g.caption} loading="lazy" className="aspect-square w-full rounded-[18px] object-cover" />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative" style={{ height: `${N * 55 + 60}vh` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden pt-28">
        {header}
        <div className="relative mx-4 mt-6 flex-1 overflow-hidden rounded-[36px] border border-border/10 bg-foreground/[0.02] [perspective:1400px] md:mx-12">
          <div className="absolute inset-0 [transform-style:preserve-3d]">
            {gallery.map((_, i) => (
              <Card key={i} i={i} progress={scrollYProgress} />
            ))}
          </div>
          <div className="absolute bottom-6 left-6 z-[200] md:bottom-8 md:left-10">
            <p className="font-mono text-[0.68rem] tracking-[0.2em] text-primary">
              {gallery[current].tag} · {String(current + 1).padStart(2, '0')}/{String(N).padStart(2, '0')}
            </p>
            <p className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] md:text-3xl">{gallery[current].caption}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
