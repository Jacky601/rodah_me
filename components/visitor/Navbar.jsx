"use client";

import Link from "next/link";
import { useState } from "react";
import { Globe, Moon, Sun, ArrowUpRight, Menu, X, Terminal, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [lang, setLang] = useState("FR");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const toggleLang = () => {
    setLang(prev => (prev === "FR" ? "EN" : "FR"));
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900/90 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/visiteur" className="group flex items-center gap-2 select-none">
          <span className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-red-500 transition-colors">
            Rodah<span className="text-red-600 group-hover:text-white transition-colors">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/parcours"
            className="font-space text-sm text-neutral-300 hover:text-white transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            Parcours
          </Link>
          {/* Projets with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProjectsDropdownOpen(true)}
            onMouseLeave={() => setProjectsDropdownOpen(false)}
          >
            <div className="flex items-center gap-1.5 py-1">
              <Link
                href="/projets"
                className="font-space text-sm text-neutral-300 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                Projets
              </Link>
              <button
                type="button"
                onClick={() => setProjectsDropdownOpen(!projectsDropdownOpen)}
                className="text-neutral-400 hover:text-white focus:outline-none"
                aria-expanded={projectsDropdownOpen}
                aria-label="Ouvrir le sous-menu Projets"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    projectsDropdownOpen ? "rotate-180 text-red-500" : ""
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Menu */}
            {projectsDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-neutral-950/95 border border-neutral-800 shadow-[0_15px_35px_rgba(0,0,0,0.95)] backdrop-blur-md p-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <Link
                  href="/projets?cat=fictifs"
                  className="flex flex-col px-3 py-2 rounded-lg hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors group"
                >
                  <span className="font-space text-sm font-medium group-hover:text-red-400 transition-colors">
                    Fictifs
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">
                    Prototypes, POCs &amp; concepts
                  </span>
                </Link>

                <Link
                  href="/projets?cat=personnels"
                  className="flex flex-col px-3 py-2 rounded-lg hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors group"
                >
                  <span className="font-space text-sm font-medium group-hover:text-red-400 transition-colors">
                    Personnels
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">
                    Projets indépendants &amp; R&amp;D
                  </span>
                </Link>

                <Link
                  href="/projets?cat=collaboration"
                  className="flex flex-col px-3 py-2 rounded-lg hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors group"
                >
                  <span className="font-space text-sm font-medium group-hover:text-red-400 transition-colors">
                    Collaboration
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">
                    Missions d'équipe &amp; partenariats
                  </span>
                </Link>

                <div className="my-1 border-t border-neutral-800/80" />

                <Link
                  href="/projets"
                  className="flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-mono text-neutral-400 hover:text-red-400 hover:bg-neutral-900/60 transition-colors"
                >
                  <span>Tous les projets</span>
                  <span>→</span>
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/services"
            className="font-space text-sm text-neutral-300 hover:text-white transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            Services
          </Link>
        </nav>

        {/* Right Action & Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-950 hover:border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white transition-all"
            title="Changer de langue"
          >
            <Globe className="w-3.5 h-3.5 text-red-500" />
            <span>{lang}</span>
          </button>

          {/* Theme Toggle (Day/Night) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-neutral-800 bg-neutral-950 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all"
            title={isDarkMode ? "Mode Jour" : "Mode Nuit"}
          >
            {isDarkMode ? <Moon className="w-3.5 h-3.5 text-neutral-300" /> : <Sun className="w-3.5 h-3.5 text-amber-400" />}
          </button>

          {/* Return to Tannière Gateway */}
          <Link
            href="/"
            className="p-2 rounded-full border border-neutral-800 bg-neutral-950 hover:border-red-900/60 text-neutral-400 hover:text-red-500 transition-all"
            title="Retour au Sas / Mode Hackeur"
          >
            <Terminal className="w-3.5 h-3.5" />
          </Link>

          {/* Contact CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-space text-xs font-semibold tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.45)] hover:shadow-[0_0_25px_rgba(220,38,38,0.7)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/"
            className="p-2 rounded-full border border-neutral-800 text-neutral-400"
            title="Retour au Sas"
          >
            <Terminal className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 px-6 py-6 space-y-4">
          <Link
            href="/parcours"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-space text-neutral-300 hover:text-white"
          >
            Parcours
          </Link>
          {/* Mobile Projets Accordion */}
          <div>
            <div className="flex items-center justify-between">
              <Link
                href="/projets"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-space text-neutral-300 hover:text-white"
              >
                Projets
              </Link>
              <button
                type="button"
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                className="p-1 text-neutral-400 hover:text-white focus:outline-none"
                aria-label="Afficher les sous-catégories de projets"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileProjectsOpen ? "rotate-180 text-red-500" : ""
                  }`}
                />
              </button>
            </div>
            {mobileProjectsOpen && (
              <div className="pl-4 pt-2.5 pb-1 space-y-2.5 border-l border-neutral-800 ml-1 mt-2">
                <Link
                  href="/projets?cat=fictifs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-space text-neutral-400 hover:text-red-400 transition-colors"
                >
                  Fictifs
                </Link>
                <Link
                  href="/projets?cat=personnels"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-space text-neutral-400 hover:text-red-400 transition-colors"
                >
                  Personnels
                </Link>
                <Link
                  href="/projets?cat=collaboration"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm font-space text-neutral-400 hover:text-red-400 transition-colors"
                >
                  Collaboration
                </Link>
                <Link
                  href="/projets"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-mono text-neutral-500 hover:text-neutral-300 pt-1"
                >
                  Tous les projets →
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-space text-neutral-300 hover:text-white"
          >
            Services
          </Link>
          <div className="pt-4 flex items-center justify-between border-t border-neutral-900">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 px-3 py-1 rounded-full border border-neutral-800 text-xs font-mono"
              >
                <Globe className="w-3 h-3 text-red-500" />
                {lang}
              </button>
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full border border-neutral-800"
              >
                {isDarkMode ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3 text-amber-400" />}
              </button>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-red-600 text-white text-xs font-semibold"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
