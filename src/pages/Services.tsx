import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import CTA from '../components/layout/CTA';
import Reveal from '../components/motion/Reveal';
import TiltCard from '../components/motion/TiltCard';
import { services } from '../data/content';

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Ce que je"
        highlight="peux faire."
        description="Du logiciel bien construit, un regard sécurité, des réseaux propres et une curiosité pour la donnée."
      />

      <section className="mx-auto max-w-[1200px] px-6 md:px-12">
        <ul className="grid gap-5 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.title}>
                <Reveal delay={(i % 2) * 0.1} className="h-full">
                  <TiltCard intensity={4} className="glass glass-hover flex h-full flex-col rounded-[30px] p-8 md:p-10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/25">
                      <Icon size={26} />
                    </span>
                    <h2 className="mt-7 font-display text-3xl font-extrabold tracking-[-0.035em]">{s.title}</h2>
                    <p className="mt-3 font-secondary leading-relaxed text-foreground/65">{s.description}</p>

                    <ul className="mt-7 space-y-3">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 font-secondary text-sm text-foreground/80">
                          <CheckCircle2 size={17} className="shrink-0 text-primary" /> {f}
                        </li>
                      ))}
                    </ul>

                    <p className="mt-8 font-label text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-foreground/45">Livrables clés</p>
                    <ul className="mt-3 flex-1 space-y-2">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 font-secondary text-sm font-semibold">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {d}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 border-t border-border/10 pt-6">
                      <Link to="/contact" className="pill-primary">
                        Contacter
                        <span className="pill-icon">→</span>
                      </Link>
                    </div>
                  </TiltCard>
                </Reveal>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-center font-secondary text-sm text-foreground/45">
          Tests de sécurité réalisés uniquement sur un périmètre autorisé par écrit.
        </p>
      </section>

      <CTA />
    </>
  );
}
