import PageHeader from '../components/layout/PageHeader';
import CTA from '../components/layout/CTA';
import Reveal from '../components/motion/Reveal';
import TiltCard from '../components/motion/TiltCard';
import { skillGroups, tools } from '../data/content';

export default function Skills() {
  return (
    <>
      <PageHeader
        eyebrow="Compétences"
        title="Ma boîte"
        highlight="à outils."
        description="Les langages, technologies et outils que j'utilise et que je continue d'approfondir."
      />

      <section className="mx-auto max-w-[1200px] px-6 md:px-12">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = g.icon;
            return (
              <li key={g.category}>
                <Reveal delay={(i % 3) * 0.08} className="h-full">
                  <TiltCard className="glass glass-hover h-full rounded-[26px] p-7">
                    <Icon size={22} className="text-primary" />
                    <h2 className="mt-5 font-display text-2xl font-bold tracking-[-0.03em]">{g.category}</h2>
                    <p className="mt-2 font-secondary text-sm leading-relaxed text-foreground/60">{g.items}</p>
                  </TiltCard>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal className="mt-16">
          <p className="eyebrow">Outils du quotidien</p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {tools.map((t) => (
              <li key={t} className="tag glass">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <CTA />
    </>
  );
}
