import { Link } from 'react-router-dom';
import { Moon, Sun, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const readTheme = () => {
  try {
    return localStorage.getItem('theme') !== 'light';
  } catch {
    return true;
  }
};

export default function Header() {
  const [isDark, setIsDark] = useState(readTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      /* stockage indisponible : le thème reste valable pour la session */
    }
  }, [isDark]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 md:px-12 md:py-7">
      <Link to="/" aria-label="Accueil">
        <Logo className="text-lg md:text-2xl" />
      </Link>

      <div className="flex items-center gap-3 md:mr-20">
        <div className="glass flex items-center gap-1 rounded-full p-1.5">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label={isDark ? 'Passer en thème clair' : 'Passer en thème sombre'}
            className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-primary"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <span className="mx-1 h-5 w-px bg-border/15" />
          <span className="rounded-full bg-foreground/10 px-3 py-1.5 font-label text-[0.68rem] font-bold tracking-widest">FR</span>
          <span title="Version anglaise bientôt disponible" className="cursor-default px-3 py-1.5 font-label text-[0.68rem] font-bold tracking-widest text-foreground/40">
            EN
          </span>
        </div>

        <Link to="/contact" className="pill glass hidden py-2 pl-6 pr-2 text-foreground hover:text-primary sm:inline-flex">
          Travaillons ensemble
          <span className="pill-icon bg-primary/15 text-primary">
            <ArrowUpRight size={15} />
          </span>
        </Link>
      </div>
    </header>
  );
}
