"use client";

import Image from "next/image";
import { useState } from "react";

export default function CenterHackerSlot({ isVisible, imageSrc }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`relative z-10 flex items-center justify-center w-full max-w-4xl mx-auto my-6 sm:my-8 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      {/* Left Code Tag */}
      <div className="hidden sm:flex items-center justify-center px-6 md:px-12 select-none">
        <span className="font-mono text-xl sm:text-2xl md:text-3xl text-neutral-300 font-extrabold tracking-widest drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] animate-pulse-slow">
          &lt;/&gt;
        </span>
      </div>

      {/* Central Hacker Image Container */}
      <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-80 md:h-96 flex items-center justify-center overflow-hidden rounded-lg">
        {/* Soft radial vignette mask so the edges blend completely into pitch black */}
        <div className="absolute inset-0 z-20 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black_95%)] bg-black" />

        {imageSrc && !imgError ? (
          <Image
            src={imageSrc}
            alt="Hacker"
            fill
            className="object-contain object-center z-10 filter contrast-125"
            onError={() => setImgError(true)}
            priority
          />
        ) : (
          /* High-craft Placeholder while awaiting the final user image */
          <div className="relative w-full h-full flex flex-col items-center justify-center border border-neutral-800/60 bg-neutral-950/40 rounded-lg p-6 text-center shadow-[inset_0_0_40px_rgba(0,0,0,0.9)]">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-3 opacity-80">
              {/* Stylized Anonymous / Cyber Mask SVG silhouette */}
              <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]">
                {/* Hood */}
                <path d="M100 15 C45 35 25 90 25 150 C25 210 60 230 100 235 C140 230 175 210 175 150 C175 90 155 35 100 15 Z" fill="#080808" stroke="#262626" strokeWidth="2" />
                {/* Mask outline */}
                <path d="M100 65 C65 75 52 110 52 145 C52 185 80 205 100 210 C120 205 148 185 148 145 C148 110 135 75 100 65 Z" fill="#f0ede6" fillOpacity="0.85" />
                {/* Eyebrows */}
                <path d="M68 110 Q82 98 94 112" stroke="#111" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M132 110 Q118 98 106 112" stroke="#111" strokeWidth="3.5" strokeLinecap="round" />
                {/* Eyes */}
                <ellipse cx="80" cy="122" rx="10" ry="5" fill="#111" />
                <ellipse cx="120" cy="122" rx="10" ry="5" fill="#111" />
                {/* Mustache */}
                <path d="M72 158 Q100 148 100 162 Q100 148 128 158 Q118 168 100 165 Q82 168 72 158 Z" fill="#111" />
                {/* Smile & goatee */}
                <path d="M84 175 Q100 188 116 175" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M96 190 L104 190 L100 202 Z" fill="#111" />
              </svg>
            </div>
            <p className="font-mono text-xs text-neutral-400 tracking-wider">
              [ EMPLACEMENT IMAGE HACKER ]
            </p>
            <p className="font-mono text-[10px] text-neutral-600 mt-1">
              Prêt pour votre image
            </p>
          </div>
        )}
      </div>

      {/* Right Code Tag */}
      <div className="hidden sm:flex items-center justify-center px-6 md:px-12 select-none">
        <span className="font-mono text-xl sm:text-2xl md:text-3xl text-neutral-300 font-extrabold tracking-widest drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] animate-pulse-slow">
          &lt;/&gt;
        </span>
      </div>
    </div>
  );
}
