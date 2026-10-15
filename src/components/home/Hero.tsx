import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Magnetic from '../motion/Magnetic';
import { personalInfo, heroTags, qualities } from '../../data/content';

/** Qualités posées le long d'un arc en pointillés (coin inférieur gauche), qui flottent doucement. */
function QualityOrbit() {
  const reduced = useReducedMotion();
  // Points de l'arc en % de la boîte (du haut vers le bas-gauche)
  const spots = [
    [70, 4], [64, 24], [56, 44], [42, 62], [24, 74], [6, 82],
  ];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute bottom-[8%] left-[1.5%] hidden h-[58%] w-[20%] xl:block 2xl:w-[24%]">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path d="M 74 0 Q 70 70 4 86" fill="none" stroke="rgb(var(--fg) / 0.25)" strokeWidth="0.35" strokeDasharray="1.4 1.6" vectorEffect="non-scaling-stroke" />
      </svg>
      {qualities.map((q, i) => {
        const Icon = q.icon;
        const [x, y] = spots[i];
        const light = q.color === '#F5F5F5';
        return (
          <motion.div
            key={q.label}
            className="absolute flex -translate-x-1/2 flex-col items-center gap-1.5"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={reduced ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 0.4 + i * 0.12, duration: 0.5 },
              scale: { delay: 0.4 + i * 0.12, duration: 0.5 },
              y: { delay: i * 0.3, duration: 3.6 + i * 0.4, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <span
              className="flex h-12 w-12 items-center justify-center rounded-full ring-4 ring-black/40"
              style={{ background: q.color, boxShadow: `0 0 28px -4px ${q.color}` }}
            >
              <Icon size={20} className={light ? 'text-black' : 'text-white'} />
            </span>
            <span className="font-label text-[0.6rem] font-bold uppercase tracking-[0.14em] text-foreground/70">{q.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 800], [0, 120]);
  const portraitOpacity = useTransform(scrollY, [0, 600], [1, 0.25]);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pb-24 pt-28">
      {/* Portrait en duotone, fondu dans le noir */}
      <motion.div
        aria-hidden="true"
        style={{ y: portraitY, opacity: portraitOpacity }}
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-full max-w-[900px] [mask-image:radial-gradient(60%_62%_at_50%_42%,black_35%,transparent_78%)]"
      >
        <img src="/images/portrait-cutout.png" alt="" className="h-full w-full object-cover object-[50%_18%] opacity-55 grayscale contrast-125 brightness-75" />
        <div className="absolute inset-0 bg-primary/25 mix-blend-color" />
      </motion.div>

      {/* Nom en filigrane */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[9%] select-none text-center font-logo text-[15vw] leading-none tracking-[0.04em] text-foreground/[0.05]"
      >
        {personalInfo.brand.replace('_', '')}
      </p>

      <QualityOrbit />

      <div className="relative z-10 flex w-full max-w-[1000px] flex-col items-center text-center">
        <p className="hero-fade eyebrow text-center">
          {personalInfo.role} · {personalInfo.location}
        </p>

        <h1 className="hero-fade mt-5 font-display text-[clamp(2.8rem,8vw,6.2rem)] font-extrabold leading-[0.95] tracking-[-0.05em] [animation-delay:100ms]">
          {personalInfo.firstName} <span className="text-primary">{personalInfo.lastName}</span>
        </h1>

        <p className="hero-fade mt-6 max-w-[860px] font-display text-[clamp(1.6rem,3.6vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.04em] [animation-delay:200ms]">
          Je <span className="text-primary">construis</span> des logiciels, j'apprends à les <span className="text-primary">attaquer</span> pour mieux les{' '}
          <span className="text-primary">protéger</span>.
        </p>

        <p className="hero-fade mt-6 max-w-xl font-secondary text-base leading-relaxed text-foreground/70 [animation-delay:300ms] md:text-lg">
          En formation en Cybersécurité, Sécurité des Systèmes et Réseaux. Pentest, avec un vrai intérêt pour l'IA & le Big Data.
        </p>

        <ul className="hero-fade mt-8 flex flex-wrap justify-center gap-2.5 [animation-delay:400ms]">
          {heroTags.map((t) => (
            <li key={t} className="tag glass">
              {t}
            </li>
          ))}
        </ul>

        <div className="hero-fade mt-10 flex flex-col items-center gap-3 [animation-delay:500ms] sm:flex-row">
          <Magnetic>
            <Link to="/contact" className="pill-primary">
              Me contacter
              <span className="pill-icon">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </Magnetic>
          <Link to="/projets" className="pill-ghost">
            Voir mes projets
          </Link>
        </div>
      </div>

      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-label text-[0.6rem] uppercase tracking-[0.4em] text-foreground/40">Scroll</span>
    </section>
  );
}
