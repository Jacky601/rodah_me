import { Search, Radar, Code2, FileText } from 'lucide-react';
import Reveal from '../motion/Reveal';
import { processSteps } from '../../data/content';

const icons = [Search, Radar, Code2, FileText];

/** Étapes empilées : chaque carte se colle sous l'en-tête et la suivante vient la recouvrir. */
export default function Process() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-12">
      <Reveal>
        <p className="eyebrow">Étape par étape</p>
        <h2 className="h-section mt-4">Mon process.</h2>
        <p className="mt-5 max-w-md font-secondary text-foreground/60">De la première question au rapport final. Méthodique, documenté, transparent.</p>
      </Reveal>

      <ol className="mt-14 space-y-8">
        {processSteps.map((s, i) => {
          const Icon = icons[i];
          const dark = s.color === '#F5F5F5';
          return (
            <li key={s.step} className="sticky" style={{ top: `${110 + i * 22}px` }}>
              <div className="glass flex overflow-hidden rounded-[30px]">
                {/* Ruban d'étape */}
                <div
                  className="flex w-16 shrink-0 flex-col items-center justify-center gap-2 md:w-20"
                  style={{ background: `linear-gradient(180deg, ${s.color}, ${s.color}cc)` }}
                >
                  <span className={`rotate-180 font-display text-3xl font-extrabold [writing-mode:vertical-rl] ${dark ? 'text-black' : 'text-white'}`}>{s.step}</span>
                  <span className={`rotate-180 font-label text-[0.55rem] font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl] ${dark ? 'text-black/70' : 'text-white/80'}`}>Étape</span>
                </div>
                <div className="grid flex-1 gap-6 p-7 md:grid-cols-[auto_1fr_1.2fr] md:items-center md:p-10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/25">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h3 className="font-display text-3xl font-extrabold tracking-[-0.03em] text-primary md:text-4xl">{s.title}</h3>
                    <p className="mt-2 font-label text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-foreground/50">{s.meta}</p>
                  </div>
                  <p className="font-secondary leading-relaxed text-foreground/70">{s.desc}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
