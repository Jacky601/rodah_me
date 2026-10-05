"use client";

import { useState } from "react";

export default function HeroFrame() {
  const [imgFingerprintError, setImgFingerprintError] = useState(false);

  return (
    <section className="relative w-full pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden min-h-[85vh]">
      {/* 1. Full Section Background Image: from bottom of Navbar to end of Hero Section */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <img
          src="/images/hero-bg.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-30 filter contrast-125 grayscale mix-blend-screen scale-105"
        />
        {/* Gradients blending seamlessly into top (navbar) and bottom (about section) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_90%)]" />
      </div>

      {/* Top Zénithal Spotlight hitting the top of the frame */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-b from-white/20 via-red-500/15 to-transparent blur-3xl pointer-events-none z-10" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm pointer-events-none z-10" />

      {/* Main Selection / Bounding Frame Box (Clean & Épuré) */}
      <div className="relative z-10 w-full max-w-4xl border border-dashed border-red-500/90 rounded-sm p-6 sm:p-10 md:p-14 bg-black/40 backdrop-blur-sm shadow-[0_0_50px_rgba(220,38,38,0.15)]">
        {/* 8 Red Transformer Selection Handles (Corners & Midpoints) */}
        {/* Top-left */}
        <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626] z-20" />
        {/* Top-center */}
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626] z-20" />
        {/* Top-right */}
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626] z-20" />
        {/* Middle-left */}
        <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626] z-20" />
        {/* Middle-right */}
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626] z-20" />
        {/* Bottom-left */}
        <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626] z-20" />
        {/* Bottom-center */}
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626] z-20" />
        {/* Bottom-right with pointer cursor arrow */}
        <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626] z-20">
          <svg
            className="absolute top-2 left-2 w-5 h-5 text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] pointer-events-none"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 2 L20 10 L12 13 L8 22 Z" />
          </svg>
        </span>

        {/* Content Inside Frame */}
        <div className="flex flex-col items-center justify-center text-center w-full">
          {/* Top Tag: "Ingénieur IA & CyberSec" */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-4 py-1 text-xs sm:text-sm font-space text-neutral-200  rounded-full tracking-wide shadow-sm">
              Ingénieur IA &amp; CyberSec
            </span>
          </div>

          {/* Grand Titre Monumental "Rodah" parfaitement CENTRÉ */}
          <div className="w-full flex items-center justify-center tracking-tight select-none my-2 sm:my-6">
            <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-none text-white flex items-center justify-center">
              <span>R</span>
              
              {/* The Stylized Biometric "o" */}
              <span className="relative inline-flex items-center justify-center mx-1 sm:mx-2 md:mx-4">
                {/* Outer Red Glow */}
                <span className="absolute inset-0 rounded-full bg-red-600/40 blur-2xl scale-150 animate-pulse" />
                
                {/* White glowing circular disc */}
                <span className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.9),0_0_60px_rgba(220,38,38,0.6)] overflow-hidden p-2 sm:p-3">
                  {!imgFingerprintError ? (
                    <img
                      src="/images/fingerprint.png"
                      alt="Biometric Fingerprint"
                      className="w-full h-full object-contain filter contrast-125"
                      onError={() => setImgFingerprintError(true)}
                    />
                  ) : (
                    <svg
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="#111111"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      className="w-full h-full"
                    >
                      <path d="M50 48 A 6 8 0 0 1 50 62 A 6 8 0 0 1 48 50" />
                      <path d="M44 42 A 12 14 0 0 1 58 54 C 58 64 54 70 48 76" />
                      <path d="M38 38 A 18 20 0 0 1 66 50 C 66 66 60 76 52 82" />
                      <path d="M32 35 A 24 26 0 0 1 72 46 C 72 68 64 82 54 88" />
                      <path d="M26 36 A 30 32 0 0 1 78 46 C 78 70 70 86 58 92" />
                      <path d="M22 42 A 36 38 0 0 1 84 50 C 84 72 76 90 62 96" />
                      <path d="M20 54 C 20 44 24 36 32 30" />
                      <path d="M28 66 C 26 58 26 48 34 38" />
                      <path d="M36 76 C 34 68 34 58 40 48" />
                      <path d="M42 84 C 40 78 40 70 46 62" />
                      <path d="M52 30 A 24 24 0 0 1 66 38" />
                      <path d="M54 24 A 30 30 0 0 1 74 36" />
                    </svg>
                  )}
                </span>
              </span>

              <span>dah</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Quote directly below the frame */}
      <div className="relative z-10 mt-12 max-w-2xl text-center px-4">
        <blockquote className="font-space text-lg sm:text-xl md:text-2xl text-neutral-100 font-medium italic leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          « C'est ce que nous bâtissons qui change réellement nos vies »
        </blockquote>
        <p className="mt-3 font-mono text-xs sm:text-sm text-red-500 tracking-widest font-semibold uppercase">
          Rodolphe EDAH
        </p>
      </div>
    </section>
  );
}
