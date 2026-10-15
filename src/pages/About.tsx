import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import Gallery from '../components/layout/Gallery';
import CTA from '../components/layout/CTA';
import Reveal from '../components/motion/Reveal';
import TiltCard from '../components/motion/TiltCard';
import { about, personalInfo } from '../data/content';

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Software"
        highlight="Engineer."
        description="Je construis, je casse (légalement) et j'apprends. En formation en Cybersécurité, Sécurité des Systèmes et Réseaux."
      />

      {/* Présentation */}
      <section className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-[32px] p-2">
              <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-b from-primary/25 to-transparent">
                <img src="/images/portrait-cutout.png" alt={personalInfo.name} className="aspect-[4/5] w-full object-cover object-top grayscale contrast-110 transition duration-700 hover:grayscale-0" />
              </div>
              <div className="flex items-center justify-between px-4 py-4">
                <span className="flex items-center gap-2 font-label text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-foreground/60">
                  <MapPin size={14} className="text-primary" /> {personalInfo.location}
                </span>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">Présentation</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-[-0.04em] md:text-5xl">{personalInfo.name}</h2>
            <p className="mt-2 font-label text-sm font-semibold text-primary">{personalInfo.headline}</p>
            <div className="mt-6 space-y-4 font-secondary leading-relaxed text-foreground/70">
              {about.intro.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {about.highlights.map((h) => (
                <li key={h} className="tag">
                  {h}
                </li>
              ))}
            </ul>
            <div className="glass mt-8 flex flex-col gap-4 rounded-[24px] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 font-secondary font-semibold hover:text-primary">
                  <Mail size={16} className="text-primary" /> {personalInfo.email}
                </a>
                <p className="mt-1 font-label text-[0.62rem] uppercase tracking-[0.18em] text-foreground/50">{about.availability}</p>
              </div>
              <Link to="/contact" className="pill-primary shrink-0">
                Écrire
                <span className="pill-icon">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Parcours */}
      <section className="mx-auto max-w-[1200px] px-6 py-28 md:px-12">
        <Reveal>
          <p className="eyebrow">Parcours</p>
          <h2 className="h-section mt-4">
            D'où je viens, <span className="text-primary">où je vais</span>.
          </h2>
        </Reveal>
        <ol className="relative mt-14 border-l border-border/15 pl-8 md:ml-4 md:pl-12">
          {about.timeline.map((t, i) => (
            <li key={t.title} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[37px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-primary shadow-[0_0_18px_4px_rgb(var(--glow)/0.5)] md:-left-[53px]" />
              <Reveal delay={i * 0.06}>
                <p className="font-mono text-xs text-primary">{t.period}</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] md:text-3xl">{t.title}</h3>
                <p className="mt-2 max-w-2xl font-secondary text-foreground/60">{t.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* Valeurs */}
      <section className="mx-auto max-w-[1200px] px-6 pb-16 md:px-12">
        <Reveal>
          <p className="eyebrow">Valeurs</p>
          <h2 className="h-section mt-4">Ce qui guide mon travail.</h2>
        </Reveal>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v, i) => {
            const Icon = v.icon;
            return (
              <li key={v.title}>
                <Reveal delay={i * 0.08} className="h-full">
                  <TiltCard className="glass glass-hover h-full rounded-[26px] p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold">{v.title}</h3>
                    <p className="mt-2 font-secondary text-sm leading-relaxed text-foreground/60">{v.description}</p>
                  </TiltCard>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </section>

      <Gallery />
      <CTA />
    </>
  );
}
