"use client";

import { useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";

export default function AboutSection() {
  const [imgError, setImgError] = useState(false);

  const domains = [
    { num: "01", title: "Audit de Sécurité & Pentest", desc: "Évaluation offensive, tests d'intrusion web/réseau et remédiation" },
    { num: "02", title: "Architectures Réseau Cisco", desc: "Conception résiliente, routage avancé, VLAN et VPN chiffrés (CCNA/CCNP)" },
    { num: "03", title: "IA & Big Data Analytics", desc: "Machine Learning, détection d'anomalies de flux et pipelines massifs" },
    { num: "04", title: "Applications Médicales & HDS", desc: "DENTIVA, ordonnances cryptographiques et conformité RGPD santé" },
    { num: "05", title: "Durcissement & Zero-Trust", desc: "Hardening OS, isolation des périmètres et politiques de moindre privilège" },
  ];

  return (
    <section id="about" className="relative w-full pt-8 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-black">
      {/* Background dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Structured Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Card 1: About Me Overview */}
            <div className="p-6 sm:p-8 rounded-xl  backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              

              <h2 className="font-space font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4">
                L'ingénierie au service de l'intelligence système.
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-space">
                Je suis Rodolphe EDAH, alias Rodah. Je suis diplômé d'un <strong className="text-white">Master en Sécurité des Systèmes Informatiques</strong>, d'un <strong className="text-white">Master en Intelligence Artificielle &amp; Big Data</strong> et d'une <strong className="text-white">Licence en Systèmes Informatiques et Logiciels</strong>, j'opère à l'intersection critique de ces trois disciplines.
              </p>

              
            </div>

            
          </div>

          {/* Right Column: Photo Container */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] min-h-[380px] sm:min-h-[460px] bg-black rounded-2xl border border-neutral-800 shadow-[0_0_40px_rgba(0,0,0,0.95)] overflow-hidden flex items-center justify-center group">
              {!imgError ? (
                <img
                  src="/images/rodolphe.jpeg"
                  alt="Rodolphe C. EDAH"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-6 space-y-4 text-neutral-500">
                  <div className="w-20 h-20 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400">
                    <User className="w-10 h-10 text-neutral-500" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-mono text-xs text-neutral-300">
                      public/images/rodolphe.jpeg
                    </p>
                    <p className="font-space text-xs text-neutral-500">
                      En attente du fichier image...
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
