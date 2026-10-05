"use client";

import Navbar from "@/components/visitor/Navbar";
import HeroFrame from "@/components/visitor/HeroFrame";
import AboutSection from "@/components/visitor/AboutSection";
import SkillsSection from "@/components/visitor/SkillsSection";
import StackSection from "@/components/visitor/StackSection";
import CvSection from "@/components/visitor/CvSection";
import ContactSection from "@/components/visitor/ContactSection";
import Footer from "@/components/visitor/Footer";

export default function VisiteurPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-800 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroFrame />
        <AboutSection />
        <SkillsSection />
        <StackSection />
        <CvSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
