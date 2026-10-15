import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Process from '../components/home/Process';
import BlogCard from '../components/home/BlogCard';
import CTA from '../components/layout/CTA';
import Reveal from '../components/motion/Reveal';
import TiltCard from '../components/motion/TiltCard';
import { stats, impacts, services, posts, tools } from '../data/content';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Bandeau d'outils */}
      <div className="relative overflow-hidden border-y border-border/10 py-5" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...tools, ...tools].map((t, i) => (
            <span key={i} className="font-label text-sm font-semibold uppercase tracking-[0.25em] text-foreground/35">
              {t} <span className="ml-12 text-primary">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Chiffres */}
      <section className="mx-auto max-w-[1200px] px-6 pt-24 md:px-12">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {stats.map((s, i) => (
            <li key={s.label}>
              <Reveal delay={i * 0.08} className="glass rounded-[26px] px-5 py-8 text-center">
                <p className="font-display text-5xl font-extrabold tracking-[-0.04em] text-primary">{s.value}</p>
                <p className="mt-3 font-label text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-foreground/55">{s.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-[1200px] px-6 py-24 md:px-12">
        <Reveal>
          <p className="eyebrow">Impact</p>
          <h2 className="h-section mt-4 max-w-3xl">
            Ce que vous <span className="text-primary">gagnez</span> vraiment.
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {impacts.map((it, i) => (
            <li key={it.title}>
              <Reveal delay={i * 0.1} className="h-full">
                <TiltCard className="glass glass-hover h-full rounded-[28px] p-8">
                  <span className="font-mono text-sm text-primary">0{i + 1}</span>
                  <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.03em]">{it.title}</h3>
                  <p className="mt-3 font-secondary text-sm leading-relaxed text-foreground/60">{it.description}</p>
                </TiltCard>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Services (aperçu) */}
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Ce que je fais</p>
            <h2 className="h-section mt-4">Mes services.</h2>
          </Reveal>
          <Link to="/services" className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-foreground/55 transition-colors hover:text-primary">
            Voir tous les services →
          </Link>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <li key={s.title}>
                <Reveal delay={(i % 2) * 0.08} className="h-full">
                  <Link to="/services" className="glass glass-hover flex h-full items-start gap-5 rounded-[26px] p-7">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon size={22} />
                    </span>
                    <span>
                      <span className="block font-display text-xl font-bold tracking-[-0.02em]">{s.title}</span>
                      <span className="mt-2 block font-secondary text-sm text-foreground/60">{s.short}</span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </section>

      <Process />

      {/* Blog (aperçu) */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Blog</p>
            <h2 className="h-section mt-4">
              Notes & <span className="text-primary">articles</span>.
            </h2>
          </Reveal>
          <Link to="/blog" className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-foreground/55 transition-colors hover:text-primary">
            Tous les articles →
          </Link>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {posts.slice(0, 2).map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 0.1} className="h-full">
                <BlogCard post={p} index={i} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <CTA />
    </>
  );
}
