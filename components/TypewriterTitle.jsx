"use client";

import { useEffect, useState, useRef } from "react";

export default function TypewriterTitle({ onComplete }) {
  const fullText = "BiENVENUE DANS MA TANNiÈRE...";
  const [displayedText, setDisplayedText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let index = 0;
    let timeoutId = null;
    let isCancelled = false;

    const typeNextChar = () => {
      if (isCancelled) return;

      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;

        // Natural typing rhythm variation (dots take longer)
        const char = fullText[index - 1];
        let delay = 60 + Math.random() * 40;
        if (char === " ") delay = 110;
        if (char === ".") delay = 160;

        timeoutId = setTimeout(typeNextChar, delay);
      } else {
        setIsDone(true);
        if (onCompleteRef.current) {
          setTimeout(() => {
            if (!isCancelled && onCompleteRef.current) {
              onCompleteRef.current();
            }
          }, 350);
        }
      }
    };

    // Small initial delay before typing starts
    timeoutId = setTimeout(typeNextChar, 400);

    return () => {
      isCancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []); // Run strictly once on mount!

  return (
    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto select-none">
      <h1 className="font-pixel text-lg sm:text-xl md:text-2xl lg:text-3xl text-white tracking-widest leading-relaxed drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
        {displayedText}
        <span
          className={`inline-block w-3 h-5 sm:w-4 sm:h-6 md:w-5 md:h-7 ml-1 bg-white align-middle ${
            isDone ? "animate-blink" : "opacity-100"
          }`}
        />
      </h1>
    </div>
  );
}
