import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../motion/Reveal';
import Magnetic from '../motion/Magnetic';

export default function CTA() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 py-16 md:px-12">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[36px] px-6 py-16 text-center md:px-16 md:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_70%_at_30%_0%,rgb(var(--glow)/0.18),transparent_70%)]" />
          <div className="relative">
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.04em] md:text-6xl">
              Prêt à construire <span className="text-primary">quelque chose de solide</span> ?
            </h2>
            <p className="mx-auto mt-5 max-w-xl font-secondary text-sm leading-relaxed text-foreground/65 md:text-base">
              Stage, alternance, projet logiciel ou test de sécurité autorisé : parlons-en.
            </p>
            <p className="mt-6 font-label text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-foreground/45">
              ✓ Échange sans engagement &nbsp; ✓ Réponse sous 48h &nbsp; ✓ Cadre légal et éthique
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic>
                <Link to="/contact" className="pill-primary">
                  Démarrer un échange
                  <span className="pill-icon">
                    <ArrowUpRight size={15} />
                  </span>
                </Link>
              </Magnetic>
              <Link to="/a-propos" className="pill-ghost">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
