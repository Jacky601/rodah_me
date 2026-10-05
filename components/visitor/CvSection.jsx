"use client";

import { FileDown, FileText } from "lucide-react";

export default function CvSection() {
  return (
    <section id="cv" className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-black">
      <div className="relative max-w-4xl mx-auto">
        <div className="relative rounded-2xl border border-neutral-800 bg-neutral-950/90 p-8 sm:p-12 text-center shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-red-600/10 blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-red-500 font-mono text-xs uppercase tracking-wider mb-6">
            <FileText className="w-3.5 h-3.5" />
            <span>Synthèse Professionnelle</span>
          </div>

          {/* Main Title */}
          <h2 className="font-space font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight mb-4">
            Mon parcours, en un document.
          </h2>

          {/* Description */}
          <p className="font-space text-neutral-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
            Découvre mon expérience, mes compétences et les projets qui construisent mon profil.
          </p>

          {/* CTA Download Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/cv/rodolphe-edah-cv.pdf"
              download="CV-Rodolphe-EDAH.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-space font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileDown className="w-5 h-5" />
              <span>Télécharger mon CV</span>
            </a>
          </div>

          {/* Subnote */}
          <p className="mt-4 font-mono text-xs text-neutral-500">
            Format PDF • Détaillé &amp; Prêt pour recrutement ou audit
          </p>
        </div>
      </div>
    </section>
  );
}
