"use client";

import { useState, useCallback } from "react";
import BinaryRain from "@/components/BinaryRain";
import TypewriterTitle from "@/components/TypewriterTitle";
import CenterHackerSlot from "@/components/CenterHackerSlot";
import RoleSelector from "@/components/RoleSelector";

export default function Home() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleTypingComplete = useCallback(() => {
    setIsTypingComplete(true);
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-black overflow-hidden flex flex-col justify-between py-8 sm:py-12">
      {/* 1. Matrix Binary Rain streaming down from the top */}
      <BinaryRain />

      {/* Main Container */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center items-center">
        {/* 2. Typewriter Title */}
        <div className="w-full pt-4 sm:pt-8 mb-4">
          <TypewriterTitle onComplete={handleTypingComplete} />
        </div>

        {/* 3. Central Hacker Slot (Awaiting your image) */}
        <CenterHackerSlot
          isVisible={isTypingComplete}
          imageSrc="/images/hacker.png" // Will automatically load once you drop your image at public/images/hacker.png
        />

        {/* 4. Question & Role Buttons */}
        <RoleSelector isVisible={isTypingComplete} />
      </div>
    </main>
  );
}
