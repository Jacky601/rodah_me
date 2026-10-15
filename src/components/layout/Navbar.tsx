import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, FolderGit2, Boxes, PenLine, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { navItems } from '../../data/content';

const icons = [Home, User, Briefcase, FolderGit2, Boxes, PenLine, Mail];

/** Dock vertical à droite : l'élément actif devient une pastille claire avec son libellé vertical. */
export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Navigation principale">
      {/* Bureau */}
      <div className="glass fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-1 rounded-full p-2 md:flex">
        {navItems.map((item, i) => {
          const Icon = icons[i];
          const active = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              aria-label={item.label}
              aria-current={active ? 'page' : undefined}
              className="group relative flex w-12 flex-col items-center"
            >
              {active && (
                <motion.span
                  layoutId="dock-active"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span
                className={`relative z-10 flex flex-col items-center gap-2 py-3.5 transition-colors ${
                  active ? 'text-background' : 'text-foreground/60 group-hover:text-primary'
                }`}
              >
                <Icon size={19} />
                {active && (
                  <span className="rotate-180 font-label text-[0.62rem] font-semibold tracking-[0.12em] [writing-mode:vertical-rl]">
                    {item.label}
                  </span>
                )}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="glass fixed inset-x-3 bottom-3 z-50 flex items-center justify-between rounded-full px-2 py-2 md:hidden">
        {navItems.map((item, i) => {
          const Icon = icons[i];
          const active = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              aria-label={item.label}
              aria-current={active ? 'page' : undefined}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
                active ? 'bg-foreground text-background' : 'text-foreground/60'
              }`}
            >
              <Icon size={18} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
