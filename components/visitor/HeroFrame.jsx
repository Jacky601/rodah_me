"use client";

import { ArrowDownRight, CornerDownRight } from "lucide-react";

export default function HeroFrame() {
  return (
    <section className="relative w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center overflow-hidden">
      {/* Top Zénithal Spotlight from above hitting the top of the frame */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-40 bg-gradient-to-b from-white/15 via-red-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm pointer-events-none" />

      {/* Main Selection / Bounding Frame Box */}
      <div className="relative w-full max-w-4xl border border-dashed border-red-500/80 rounded-sm p-8 sm:p-14 md:p-16 bg-neutral-950/40 backdrop-blur-sm shadow-[0_0_50px_rgba(220,38,38,0.12)]">
        {/* 8 Red Transformer Selection Handles (Corners & Midpoints) */}
        {/* Top-left */}
        <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
        {/* Top-center */}
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
        {/* Top-right */}
        <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
        {/* Middle-left */}
        <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
        {/* Middle-right */}
        <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
        {/* Bottom-left */}
        <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
        {/* Bottom-center */}
        <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]" />
        {/* Bottom-right with pointer cursor arrow */}
        <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-red-600 border border-black shadow-[0_0_8px_#dc2626]">
          {/* Neon Pointer Arrow icon pointing at bottom right handle */}
          <svg
            className="absolute top-2 left-2 w-5 h-5 text-red-500 drop-shadow-[0_0_8px_rgba(220,38,38,0.8)] pointer-events-none"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 2 L20 10 L12 13 L8 22 Z" />
          </svg>
        </span>

        {/* Top Tag: "Ingénieur IA & CyberSec" */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-block px-3 py-1 text-xs sm:text-sm font-space text-neutral-300 bg-neutral-900/90 border border-neutral-800 rounded-full tracking-wide">
            Ingénieur IA &amp; CyberSec
          </span>
        </div>

        {/* Grand Titre Monumental "Rodah" avec le "o" stylisé comme sur la maquette */}
        <div className="flex items-center tracking-tight select-none">
          <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-none text-white flex items-center">
            <span>R</span>
            
            {/* The Stylized Biometric "o" */}
            <span className="relative inline-flex items-center justify-center mx-1 sm:mx-2 md:mx-3">
              {/* Outer Glow */}
              <span className="absolute inset-0 rounded-full bg-red-600/30 blur-xl scale-125 animate-pulse" />
              
              {/* White glowing circular aura */}
              <span className="relative w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-white flex items-center justify-center shadow-[0_0_35px_rgba(255,255,255,0.8),0_0_50px_rgba(220,38,38,0.5)]">
                {/* Etched Biometric Fingerprint Graphic */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8b0000"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"
                >
                  <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
                  <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
                  <path d="M2 16h.01" />
                  <path d="M21.8 16c.2-2 .131-5.354 0-6" />
                  <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
                  <path d="M4 10.95a5 5 0 0 1 4.41-4.9" />
                  <path d="M6 14c0 1.5.2 3.5.5 5" />
                  <path d="M10 19a4 4 0 0 0 .5-2.5v-4.5" />
                  <path d="M14.5 7.5a8 8 0 0 1 4.5 7" />
                  <path d="M18 16c0 1.5-.1 3-.5 4.5" />
                  <path d="M7.8 20.9A4 4 0 0 0 10 18" />
                </svg>
              </span>
            </span>

            <span>dah</span>
          </h1>
        </div>

        {/* Bottom capsule bar inside frame */}
        <div className="mt-8 sm:mt-12 flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-neutral-900/60">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>SECURITY CERTIFIED // CISCO &amp; CHE</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-400">
              2026
            </span>
            <div className="w-8 h-8 rounded-full bg-neutral-900/90 border border-neutral-800 flex items-center justify-center text-neutral-300">
              <CornerDownRight className="w-4 h-4 text-red-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Quote directly below the frame */}
      <div className="mt-12 max-w-2xl text-center px-4">
        <blockquote className="font-space text-lg sm:text-xl md:text-2xl text-neutral-100 font-medium italic leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          « C'est ce que nous bâtissons qui change réellement nos vies »
        </blockquote>
        <p className="mt-3 font-mono text-xs sm:text-sm text-red-500 tracking-widest font-semibold uppercase">
          — Signé Rodolphe EDAH
        </p>
      </div>

      {/* Scroll indicator prompt */}
      <div className="mt-10 flex items-center gap-2 font-mono text-xs text-neutral-500 tracking-wider">
        <span className="text-red-500">↘</span>
        <span>Faites défiler pour explorer le profil</span>
        <span className="text-red-500">↙</span>
      </div>
    </section>
  );
}
