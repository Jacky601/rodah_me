"use client";

import Navbar from "@/components/visitor/Navbar";
import Footer from "@/components/visitor/Footer";
import ProjectsShowcase from "@/components/visitor/ProjectsShowcase";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjetsPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-800 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-24 w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-8">
          <Link href="/visiteur" className="text-red-500 hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Retour accueil
          </Link>
          <span>/</span>
          <span>.projets_selectionnes</span>
        </div>

        {/* Section Heading inspired by MabsCode */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-block text-xs font-mono text-red-500 uppercase tracking-widest mb-3">
            03 / SÉLECTION DE PROJETS
          </div>
          <h1 className="font-space font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4">
            Des architectures critiques qui prennent vie<span className="text-red-600">.</span>
          </h1>
          <p className="font-space text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Une sélection de projets où stratégie réseau, cybersécurité offensive, intelligence artificielle et ingénierie logicielle convergent vers des solutions résilientes.
          </p>
        </div>

        {/* MabsCode Style Projects Showcase with Asymmetric Grid & Dark Palette */}
        <ProjectsShowcase />
      </main>
      <Footer />
    </div>
  );
}
