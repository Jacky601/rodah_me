"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-black text-neutral-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-display font-black text-xl text-white">
            Rodah<span className="text-red-600">.</span>
          </div>
          <p className="text-xs font-mono text-neutral-500 mt-1">
            Rodolphe C. EDAH — Ingénieur IA, Expert en Cybersécurité.</p>
        </div>

        <div className="flex items-center gap-6 text-xs font-space">
          <Link href="/parcours" className="hover:text-white transition-colors">
            Parcours
          </Link>
          <Link href="/projets" className="hover:text-white transition-colors">
            Projets
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <a href="#contact" className="text-red-400 hover:text-red-300 transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-neutral-600">
            © 2026 LYNUS. Tous droits réservés.
          </span>
        </div>
      </div>
    </footer>
  );
}
