"use client";

import Navbar from "@/components/visitor/Navbar";
import Footer from "@/components/visitor/Footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-5xl mx-auto px-4 pt-36 pb-20 w-full">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-6">
          <Link href="/visiteur" className="text-red-500 hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Retour accueil
          </Link>
          <span>/</span>
          <span>.services</span>
        </div>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-white mb-6">
          Prestations &amp; Expertises<span className="text-red-600">.</span>
        </h1>
        <p className="text-neutral-400 font-space text-lg max-w-2xl mb-12">
          Page en cours d'assemblage : catalogue détaillé des prestations (Audit &amp; Pentest, Architectures Réseau Cisco, Projets IA &amp; Big Data, Sécurisation de données de santé HDS/RGPD).
        </p>
      </main>
      <Footer />
    </div>
  );
}
