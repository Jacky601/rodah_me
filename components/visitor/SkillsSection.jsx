"use client";

import { Code2, ShieldAlert, Network, Database } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    {
      num: "01",
      title: "Développement d'application Web",
      icon: Code2,
      desc: "Conception d'applications web modernes et réactives. Architectures modulaires, microservices, interfaces fluides et APIs robustes développées avec rigueur.",
      tags: ["Next.js / React", "APIs RESTful", "Architecture Modulaire", "Sécurité Applicative"],
    },
    {
      num: "02",
      title: "Audit & Cybersécurité",
      icon: ShieldAlert,
      desc: "Évaluation offensive et défensive des environnements numériques. Tests d'intrusion (Pentest), détection des vulnérabilités et durcissement des systèmes Zero-Trust.",
      tags: ["Pentest Web & Réseau", "Hardening OS & Serveurs", "Analyse de Failles", "Zero-Trust"],
    },
    {
      num: "03",
      title: "Infrastructures Réseaux",
      icon: Network,
      desc: "Ingénierie réseau d'entreprise Cisco (CCNA / CCNP). Routage dynamique, segmentation VLAN, topologies résilientes et tunnels chiffrés haute disponibilité.",
      tags: ["Cisco CCNA / CCNP", "Routage Avancé & Switching", "VPN IPsec & Tunnels", "Haute Disponibilité"],
    },
    {
      num: "04",
      title: "IA & Data Engineering",
      icon: Database,
      desc: "Développement de modèles de Machine Learning et pipelines de données massives. Analyse de flux, détection d'anomalies et automatisation intelligente de processus.",
      tags: ["Machine Learning", "Pipelines Big Data", "Traitement de Flux", "Aide à la Décision"],
    },
  ];

  return (
    <section id="competences" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-black">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block text-xs font-mono text-red-500 uppercase tracking-widest mb-3">
            .competences_cles
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Domaines d'Intervention &amp; Ingénierie
          </h2>
          <p className="font-space text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            De la résilience des infrastructures au développement d'applications sécurisées, j'opère sur l'ensemble de la chaîne technologique.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.num}
                className="group relative p-6 sm:p-8 rounded-xl bg-neutral-950/70 border border-neutral-800/80 hover:border-red-600/50 transition-all duration-300 backdrop-blur-sm"
              >
                {/* Header row: Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xl font-bold text-neutral-500 group-hover:text-red-500 transition-colors">
                    {skill.num}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-red-400 group-hover:border-red-900/50 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-space font-bold text-lg sm:text-xl text-white group-hover:text-red-300 transition-colors mb-3">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="font-space text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {skill.desc}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-900">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-neutral-900/80 text-neutral-300 border border-neutral-800 group-hover:border-neutral-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
