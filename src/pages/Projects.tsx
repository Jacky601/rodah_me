import PageHeader from '../components/layout/PageHeader';
import CTA from '../components/layout/CTA';
import Reveal from '../components/motion/Reveal';
import TiltCard from '../components/motion/TiltCard';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="Projets"
        title="Labs, CTF"
        highlight="& réalisations."
        description="Ce que je construis et ce que je pratique : logiciel, sécurité offensive, réseaux, IA et données."
      />

      <section className="mx-auto max-w-[1200px] px-6 md:px-12">
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <li key={p.title}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <TiltCard className="glass glass-hover group flex h-full flex-col rounded-[28px] p-7">
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                        <Icon size={22} />
                      </span>
                      <span className="font-mono text-xs text-foreground/40">
                        {String(i + 1).padStart(2, '0')} · {p.year}
                      </span>
                    </div>
                    <p className="mt-7 font-label text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-primary">{p.category}</p>
                    <h2 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] transition-colors group-hover:text-primary">{p.title}</h2>
                    <p className="mt-3 flex-1 font-secondary text-sm leading-relaxed text-foreground/60">{p.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t} className="tag py-1.5 text-[0.56rem]">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </section>

      <CTA />
    </>
  );
}
