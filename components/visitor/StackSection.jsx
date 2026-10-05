"use client";

import { Terminal, Shield, Network, Cpu } from "lucide-react";

export default function StackSection() {
  const categories = [
    {
      name: "Développement Web & Backend",
      icon: Terminal,
      tools: [
        "React / Next.js",
        "Node.js",
        "Python",
        "PostgreSQL",
        "Tailwind CSS",
        "REST APIs",
        "TypeScript",
      ],
    },
    {
      name: "Cybersécurité & Audit",
      icon: Shield,
      tools: [
        "Kali Linux",
        "Wireshark",
        "Nmap",
        "Metasploit",
        "Burp Suite",
        "Cryptographie",
        "OpenSSL",
      ],
    },
    {
      name: "Infrastructures & Réseaux",
      icon: Network,
      tools: [
        "Cisco IOS (CCNA/CCNP)",
        "GNS3 / Packet Tracer",
        "Docker",
        "Linux (Debian/Ubuntu)",
        "Bash Scripting",
        "VPN IPsec",
      ],
    },
    {
      name: "Data & Analyse",
      icon: Cpu,
      tools: [
        "Python",
        "Pandas & NumPy",
        "Scikit-Learn",
        "PyTorch",
        "Pipelines ETL",
        "Visualisation",
      ],
    },
  ];

  return (
    <section id="stack" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-neutral-900 bg-neutral-950/40">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block text-xs font-mono text-red-500 uppercase tracking-widest mb-3">
            .stack_technique
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Stack &amp; Boîte à Outils
          </h2>
          <p className="font-space text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Technologies et environnements éprouvés pour concevoir, sécuriser et administrer des systèmes fiables.
          </p>
        </div>

        {/* 4 Clean Columns/Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className="p-6 rounded-xl bg-neutral-950/80 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-900">
                    <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-space font-semibold text-sm text-white">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-md text-xs font-mono bg-neutral-900/60 text-neutral-300 border border-neutral-800 hover:border-neutral-600 hover:text-white transition-all cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
