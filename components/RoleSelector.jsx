"use client";

import { useState } from "react";

export default function RoleSelector({ isVisible }) {
  const [activeMessage, setActiveMessage] = useState(null);

  const handleClick = (role) => {
    setActiveMessage(
      role === "visiteur"
        ? "> ACCÈS PORTFOLIO STANDARD EN COURS DE CONFIGURATION..."
        : "> DÉTECTION PROTOCOLE HACKER EN COURS DE DÉVELOPPEMENT..."
    );
    setTimeout(() => setActiveMessage(null), 3000);
  };

  return (
    <div
      className={`relative z-10 flex flex-col items-center justify-center w-full max-w-xl mx-auto px-4 mt-2 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      {/* Question */}
      <h2 className="font-pixel text-sm sm:text-base md:text-lg text-white tracking-widest text-center mb-8 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
        QUi ES-TU ?
      </h2>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-full">
        {/* Button Visiteur */}
        <a
          href="#visiteur"
          onClick={(e) => {
            e.preventDefault();
            handleClick("visiteur");
          }}
          className="btn-pixel-red font-pixel text-xs sm:text-sm tracking-wider px-8 sm:px-10 py-3.5 sm:py-4 rounded-none text-center uppercase min-w-[170px]"
        >
          ViSiTEUR
        </a>

        {/* Button Hackeur */}
        <a
          href="#hackeur"
          onClick={(e) => {
            e.preventDefault();
            handleClick("hackeur");
          }}
          className="btn-pixel-white font-pixel text-xs sm:text-sm tracking-wider px-8 sm:px-10 py-3.5 sm:py-4 rounded-none text-center uppercase min-w-[170px]"
        >
          HACKEUR
        </a>
      </div>

      {/* Temporary Feedback Message */}
      {activeMessage && (
        <div className="mt-5 font-mono text-xs text-neutral-400 bg-neutral-950/80 border border-neutral-800 px-4 py-2 rounded animate-pulse">
          {activeMessage}
        </div>
      )}

      {/* Bottom Code Tag */}
      <div className="mt-12 sm:mt-16 select-none">
        <span className="font-mono text-xl sm:text-2xl text-neutral-400 font-extrabold tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-pulse-slow">
          &lt;/&gt;
        </span>
      </div>
    </div>
  );
}
