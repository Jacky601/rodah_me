import { Link } from 'react-router-dom';
import { personalInfo, navItems, socials } from '../../data/content';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto max-w-[1400px] px-6 pb-28 pt-24 md:px-12 md:pb-12 md:pr-28">
      <div className="flex flex-col gap-10 border-t border-border/10 pt-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Logo className="text-4xl md:text-6xl" />
          <p className="mt-4 max-w-sm font-secondary text-sm text-foreground/55">
            {personalInfo.name} · {personalInfo.role} · {personalInfo.location}
          </p>
          <ul className="mt-5 flex gap-5">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground/60 hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-wrap gap-x-7 gap-y-3">
          {navItems.slice(1).map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-foreground/60 transition-colors hover:text-primary">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-10 font-label text-[0.6rem] uppercase tracking-[0.25em] text-foreground/35">
        © {new Date().getFullYear()} {personalInfo.name} — {personalInfo.brand} · Tous droits réservés
      </p>
    </footer>
  );
}
