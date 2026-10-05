"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield, Layers, Users, Sparkles, X, CheckCircle2, Lock, Terminal } from "lucide-react";

export const PROJECTS_DATA = [
  {
    id: "dentiva",
    number: "01",
    title: "DENTIVA",
    category: "personnels",
    categoryLabel: "Projet Personnel",
    tagline: "Plateforme Médicale & Gestion de Cabinet Dentaire",
    description: "Système complet de gestion de patientèle, ordonnances cryptographiques HDS, télétransmission et radiographie 3D pour praticiens de santé.",
    image: "/images/projects/dentiva.jpg",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AES-256", "HDS Ready"],
    metrics: [
      { label: "Sécurité", val: "Chiffrement AES-256" },
      { label: "Conformité", val: "RGPD Santé & HDS" },
      { label: "Disponibilité", val: "99.98%" },
    ],
    architecture: "Architecture cloud sécurisée en microservices avec partitionnement strict des dossiers patients et authentification biométrique multifacteur.",
    role: "Architecte & Développeur Principal",
    featured: true,
  },
  {
    id: "cyberguard",
    number: "02",
    title: "CYBER-GUARD AI",
    category: "personnels",
    categoryLabel: "Projet Personnel",
    tagline: "SIEM Autonome & Détection d'Intrusion Réseau",
    description: "Plateforme d'analyse des flux réseau en temps réel avec détection d'anomalies par Deep Learning et déclenchement automatique de contre-mesures.",
    image: "/images/projects/cyberguard.jpg",
    tags: ["Python", "PyTorch", "Suricata", "Docker", "Wireshark"],
    metrics: [
      { label: "Débit", val: "10 Gbps analysés" },
      { label: "Faux Positifs", val: "< 0.05%" },
      { label: "Temps Réponse", val: "12 ms" },
    ],
    architecture: "Pipeline de streaming Kafka / Suricata couplé à un réseau de neurones convolutif 1D entraîné sur les vecteurs d'attaques réseau modernes.",
    role: "Conception IA & Sécurité Réseau",
    featured: false,
  },
  {
    id: "secureordo",
    number: "03",
    title: "SECURE-ORDO",
    category: "collaboration",
    categoryLabel: "Collaboration",
    tagline: "Prescriptions Médicales Cryptographiques",
    description: "Infrastructure nationale de dématérialisation, scellement cryptographique et vérification instantanée d'ordonnances médicales contre la contrefaçon.",
    image: "/images/projects/secureordo.jpg",
    tags: ["PKI", "Node.js", "SHA-256", "Zero-Trust", "QR Cryptographique"],
    metrics: [
      { label: "Intégrité", val: "100% Infalsifiable" },
      { label: "Vérification", val: "Scan QR Offline" },
      { label: "Signature", val: "Certificats X.509" },
    ],
    architecture: "Infrastructure à clés publiques (PKI) avec horodatage certifié RFC 3161 et jetons cryptographiques vérifiables en officine même hors ligne.",
    role: "Lead Cryptographie & Intégration",
    featured: false,
  },
  {
    id: "netresilience",
    number: "04",
    title: "NET-RESILIENCE",
    category: "collaboration",
    categoryLabel: "Collaboration",
    tagline: "Infrastructure Cisco Multi-Sites Haute Disponibilité",
    description: "Refonte complète de l'architecture réseau d'entreprise WAN/LAN avec routage dynamique BGP/OSPF, tunnels IPsec chiffrés et basculement sans coupure.",
    image: "/images/projects/netresilience.jpg",
    tags: ["Cisco IOS", "BGP / OSPF", "IPsec DMVPN", "CCNA/CCNP", "HSRP"],
    metrics: [
      { label: "Sites interconnectés", val: "18 agences" },
      { label: "Failover", val: "< 500 ms" },
      { label: "Disponibilité", val: "Cisco Platinum" },
    ],
    architecture: "Topologie maillée DMVPN Phase 3 sur liaisons fibres redondées avec priorisation de trafic QoS et inspection de paquets au périmètre.",
    role: "Ingénieur Réseau Certifié Cisco",
    featured: true,
  },
  {
    id: "neurapentest",
    number: "05",
    title: "NEURA-PENTEST",
    category: "fictifs",
    categoryLabel: "Projet Fictif / R&D",
    tagline: "Scanner de Vulnérabilités & Fuzzing Piloté par IA",
    description: "Prototype de scanner de failles Zero-Day combinant reconnaissance passive, fuzzing intelligent et raisonnement d'agents autonomes spécialisés.",
    image: "/images/projects/neurapentest.jpg",
    tags: ["LLM Agents", "FastAPI", "Kali Linux", "Fuzzing", "Python"],
    metrics: [
      { label: "Couverture", val: "Top 10 OWASP" },
      { label: "Moteur", val: "LLM Local Sécurisé" },
      { label: "Mode", val: "Offensif Éthique" },
    ],
    architecture: "Agents heuristiques exploitant un modèle de langage local pour générer des charges utiles polymorphes et débusquer des failles de logique applicative.",
    role: "Recherche & Prototypage",
    featured: false,
  },
  {
    id: "shadowmesh",
    number: "06",
    title: "SHADOW-MESH",
    category: "fictifs",
    categoryLabel: "Projet Fictif / R&D",
    tagline: "Réseau Maillé Décentralisé Post-Quantique",
    description: "POC de télécommunications résilientes pair-à-pair chiffrées en cryptographie à base de réseaux euclidiens (Kyber/Dilithium) sans autorité centrale.",
    image: "/images/projects/shadowmesh.jpg",
    tags: ["Rust", "P2P Mesh", "Post-Quantum", "Kyber", "Libp2p"],
    metrics: [
      { label: "Résistance", val: "Post-Quantique" },
      { label: "Topologie", val: "P2P Sans Point Unique" },
      { label: "Chiffrement", val: "Kyber-1024" },
    ],
    architecture: "Réseau gossip sur protocole Libp2p avec routage par table de hachage distribuée (Kademlia) et encapsulation de clés résistante à l'ordinateur quantique.",
    role: "Conception Théorique & POC",
    featured: true,
  },
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("cat");

  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (urlCategory && ["fictifs", "personnels", "collaboration"].includes(urlCategory.toLowerCase())) {
      setActiveTab(urlCategory.toLowerCase());
    }
  }, [urlCategory]);

  const filteredProjects = activeTab === "all"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeTab);

  return (
    <div className="w-full">
      {/* Filters Navigation (Tous, Personnels, Collaboration, Fictifs) */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-14">
        {[
          { key: "all", label: "Tous les projets", count: PROJECTS_DATA.length },
          { key: "personnels", label: "Personnels", count: PROJECTS_DATA.filter(p => p.category === "personnels").length },
          { key: "collaboration", label: "Collaboration", count: PROJECTS_DATA.filter(p => p.category === "collaboration").length },
          { key: "fictifs", label: "Fictifs / R&D", count: PROJECTS_DATA.filter(p => p.category === "fictifs").length },
        ].map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? "bg-red-600/15 border border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                  : "bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-1.5 py-0.2 rounded text-[10px] ${isActive ? "bg-red-600 text-white" : "bg-neutral-900 text-neutral-500"}`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Asymmetric Project Grid inspired by MabsCode (1.25fr / 1fr style) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        {filteredProjects.map((project, index) => {
          // Dynamic asymmetric alternation: 7 cols / 5 cols
          const isSpan7 = index % 3 === 0;
          const colSpanClass = isSpan7 ? "lg:col-span-7" : "lg:col-span-5";

          return (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className={`${colSpanClass} group relative flex flex-col rounded-2xl bg-neutral-950/80 border border-neutral-800/80 p-3.5 sm:p-5 hover:border-red-600/50 transition-all duration-500 hover:-translate-y-1.5 shadow-[0_12px_35px_rgba(0,0,0,0.85)] cursor-pointer backdrop-blur-sm`}
            >
              {/* Visual Container */}
              <div className="relative w-full h-[240px] sm:h-[320px] lg:h-[360px] rounded-xl overflow-hidden bg-neutral-900">
                {/* Number Watermark in Top Left */}
                <div className="absolute top-3 left-3 z-20 font-mono text-xs font-bold text-white bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800">
                  {project.number}
                </div>

                {/* Category Pill in Bottom Left */}
                <div className="absolute bottom-3 left-3 z-20 font-mono text-[10px] text-neutral-300 uppercase tracking-wider px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-neutral-800">
                  {project.categoryLabel}
                </div>

                {/* Project Cover Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter contrast-110 saturate-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Sheen Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Dark Vignette Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Meta Row: Title + Description + MabsCode Signature Round Arrow */}
              <div className="pt-5 pb-2 flex items-start justify-between gap-4 border-t border-neutral-900/90 mt-4">
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-space font-bold text-xl sm:text-2xl text-white group-hover:text-red-400 transition-colors tracking-tight truncate">
                      {project.title}
                    </h3>
                  </div>
                  <p className="font-mono text-xs text-neutral-400 line-clamp-1">
                    {project.tagline}
                  </p>
                  <p className="font-space text-xs sm:text-sm text-neutral-400 line-clamp-2 pt-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-900 text-neutral-300 border border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Signature Round Arrow Button with Red Drop-Shadow */}
                <button
                  type="button"
                  aria-label={`Voir les détails du projet ${project.title}`}
                  className="w-11 h-11 rounded-full border border-neutral-700 bg-neutral-900 text-white flex items-center justify-center shadow-[3px_3px_0_#dc2626] group-hover:bg-red-600 group-hover:border-red-600 group-hover:shadow-[3px_3px_0_#ffffff] transition-all duration-300 shrink-0 self-start mt-1"
                >
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Interactive Detail Modal when a project is clicked */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-neutral-950 border border-neutral-800 shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800 transition-colors"
              aria-label="Fermer la vue détaillée"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-red-500 font-bold uppercase tracking-widest">
                {selectedProject.categoryLabel}
              </span>
              <span className="text-neutral-600">•</span>
              <span className="font-mono text-xs text-neutral-400">
                {selectedProject.role}
              </span>
            </div>

            <h2 className="font-space font-black text-2xl sm:text-4xl text-white tracking-tight mb-2">
              {selectedProject.title}
            </h2>
            <p className="font-mono text-sm text-neutral-400 mb-6">
              {selectedProject.tagline}
            </p>

            {/* Visual */}
            <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden mb-6 border border-neutral-800 bg-neutral-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content Details */}
            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Présentation du Projet
                </h4>
                <p className="font-space text-sm sm:text-base text-neutral-200 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Architecture &amp; Sécurité
                </h4>
                <p className="font-space text-sm text-neutral-300 leading-relaxed bg-neutral-900/60 border border-neutral-800/80 p-4 rounded-xl font-mono text-xs">
                  {selectedProject.architecture}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-lg bg-neutral-900/80 border border-neutral-800 text-center">
                    <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
                      {m.label}
                    </div>
                    <div className="font-space font-bold text-xs sm:text-sm text-white mt-1">
                      {m.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div>
                <h4 className="font-mono text-xs text-neutral-400 uppercase tracking-wider mb-2">
                  Technologies Déployées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-neutral-900 text-white border border-neutral-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-900 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/visiteur#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-space text-sm font-semibold shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all"
                >
                  <span>Échanger sur ce projet</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-3 rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-300 hover:text-white font-space text-sm transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ProjectsShowcase() {
  return (
    <Suspense fallback={<div className="text-center font-mono text-neutral-500 py-12">Chargement des projets...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
