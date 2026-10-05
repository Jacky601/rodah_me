"use client";

import Image from "next/image";
import { Shield, Network, Cpu, Lock, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const domains = [
    { num: "01", title: "Audit de Sécurité & Pentest", desc: "Évaluation offensive, tests d'intrusion web/réseau et remédiation" },
    { num: "02", title: "Architectures Réseau Cisco", desc: "Conception résiliente, routage avancé, VLAN et VPN chiffrés (CCNA/CCNP)" },
    { num: "03", title: "IA & Big Data Analytics", desc: "Machine Learning, détection d'anomalies de flux et pipelines massifs" },
    { num: "04", title: "Applications Médicales & HDS", desc: "DENTIVA, ordonnances cryptographiques et conformité RGPD santé" },
    { num: "05", title: "Durcissement & Zero-Trust", desc: "Hardening OS, isolation des périmètres et politiques de moindre privilège" },
  ];

  return (
    <section id="about" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-black">
      {/* Background dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header Tag */}
        <div className="flex items-center justify-between text-xs font-mono text-neutral-500 mb-12 border-b border-neutral-900 pb-4">
          <span className="text-red-500 font-semibold tracking-wider">.profil_expert</span>
          <span>RODOLPHE C. EDAH // 2026</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Structured Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Card 1: About Me Overview */}
            <div className="p-6 sm:p-8 rounded-xl bg-neutral-950/70 border border-neutral-800/80 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              <div className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-600/30 text-red-500 font-mono text-xs tracking-wider uppercase mb-5">
                À Propos de Moi
              </div>

              <h2 className="font-space font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4">
                L'ingénierie au service de la résilience et de l'intelligence système.
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-space">
                Diplômé d'un <strong className="text-white">Master en Sécurité des Systèmes Informatiques</strong>, d'un <strong className="text-white">Master en Intelligence Artificielle &amp; Big Data</strong> et d'une <strong className="text-white">Licence en Systèmes Informatiques et Logiciels</strong>, j'opère à l'intersection critique de ces trois disciplines.
              </p>

              <div className="space-y-3 pt-4 border-t border-neutral-900">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Accrédité en Hacking Éthique (CHE)</strong> — Tests d'intrusion méthodiques et audits exhaustifs.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Certifié Cisco CCNA &amp; CCNP</strong> — Maîtrise des infrastructures réseaux d'entreprise haute disponibilité.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Créateur de solutions métiers</strong> — Conception de <em>DENTIVA</em> et de plateformes de santé hautement sécurisées.</span>
                </div>
              </div>
            </div>

            {/* Card 2: Numbered Categories (like the inspiration image with 1, 2, 3, 4, 5) */}
            <div className="p-6 sm:p-8 rounded-xl bg-neutral-950/70 border border-neutral-800/80 backdrop-blur-sm">
              <div className="text-xs font-mono text-neutral-400 tracking-wider uppercase mb-6 flex items-center justify-between">
                <span>Domaines d'Intervention Prioritaires</span>
                <span className="text-red-500">5 AXES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {domains.map((item) => (
                  <div
                    key={item.num}
                    className="group p-4 rounded-lg bg-neutral-900/50 border border-neutral-800 hover:border-red-600/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display font-black text-xl text-red-500 group-hover:text-red-400 transition-colors">
                        {item.num}
                      </span>
                      <span className="font-space font-semibold text-xs sm:text-sm text-white group-hover:text-red-300 transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed font-mono">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Photo with Red Transformer Frame + Floating Softwares Capsule */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Top light on the photo */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-b from-red-600/20 to-transparent blur-2xl pointer-events-none" />

              {/* Red Transformer Bounding Box around the photo */}
              <div className="relative border border-dashed border-red-500/90 rounded-sm p-2 bg-neutral-950 shadow-[0_0_40px_rgba(220,38,38,0.2)]">
                {/* 8 Red selection handles */}
                <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
                <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
                <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
                <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
                <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />

                {/* Portrait Photo Container */}
                <div className="relative w-72 sm:w-80 md:w-96 h-[440px] sm:h-[500px] overflow-hidden rounded bg-gradient-to-t from-black via-neutral-900 to-neutral-950">
                  <Image
                    src="/assets/images/hero-teal.jpeg"
                    alt="Rodolphe C. EDAH"
                    fill
                    className="object-cover object-top filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                    priority
                  />
                  {/* Subtle dark vignette on photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>
              </div>

              {/* Floating "STACK & TOOLS" Capsule on the right (like the Ps/Lr/Figma pill) */}
              <div className="absolute -right-4 sm:-right-8 top-12 z-20 flex flex-col items-center">
                {/* Hand-drawn style label and arrow */}
                <div className="mb-2 text-right">
                  <span className="font-mono text-[10px] tracking-widest text-red-400 font-bold uppercase drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]">
                    STACK &amp; TOOLS
                  </span>
                  {/* Curved Arrow SVG pointing to capsule */}
                  <svg
                    className="w-8 h-8 text-red-500 ml-auto -mt-1 transform rotate-12"
                    viewBox="0 0 50 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M10 10 Q35 15 35 38 L30 32 M35 38 L40 32" />
                  </svg>
                </div>

                {/* Capsule with tech badges */}
                <div className="bg-neutral-900/90 border border-neutral-700/80 rounded-2xl p-2.5 shadow-[0_0_25px_rgba(0,0,0,0.8)] backdrop-blur-md flex flex-col items-center gap-3">
                  {/* Python */}
                  <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-xs font-mono font-bold text-blue-400 shadow-sm" title="Python">
                    Py
                  </div>
                  {/* Cisco */}
                  <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 shadow-sm" title="Cisco CCNP/CCNA">
                    Ci
                  </div>
                  {/* Linux / Kali */}
                  <div className="w-9 h-9 rounded-xl bg-red-950/80 border border-red-500/40 flex items-center justify-center text-xs font-mono font-bold text-red-400 shadow-sm" title="Kali / Linux">
                    K_
                  </div>
                  {/* PyTorch / IA */}
                  <div className="w-9 h-9 rounded-xl bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-xs font-mono font-bold text-amber-400 shadow-sm" title="PyTorch / Machine Learning">
                    AI
                  </div>
                  {/* Docker */}
                  <div className="w-9 h-9 rounded-xl bg-sky-950/80 border border-sky-500/40 flex items-center justify-center text-xs font-mono font-bold text-sky-400 shadow-sm" title="Docker / Microservices">
                    Dk
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
