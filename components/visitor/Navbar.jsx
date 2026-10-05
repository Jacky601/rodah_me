"use client";

import Link from "next/link";
import { useState } from "react";
import { Globe, Moon, Sun, ArrowUpRight, Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [lang, setLang] = useState("FR");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link
            href="/projets"
            className="font-space text-sm text-neutral-300 hover:text-white transition-colors relative py-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            Projets
          </Link>
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
          <Link
            href="/projets"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-space text-neutral-300 hover:text-white"
          >
            Projets
          </Link>
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
