"use client";

import { useEffect, useRef } from "react";

export default function BinaryRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = Math.floor(window.innerHeight * 0.55)); // Occupies top 55%

    const fontSize = 14;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(0).map(() => Math.floor(Math.random() * -50));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = Math.floor(window.innerHeight * 0.55);
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.floor(Math.random() * -50));
    };

    window.addEventListener("resize", handleResize);

    const chars = ["0", "1"];

    const render = () => {
      // Fade out background slowly to create trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.12)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px var(--font-jetbrains), monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Vertical gradient opacity: brighter at the top, fading towards bottom
        const progress = Math.min(1, Math.max(0, y / height));
        const alpha = Math.max(0, 1 - Math.pow(progress, 1.8));

        // Occasional highlighted white characters, otherwise muted grey
        const isHighlight = Math.random() > 0.94;
        ctx.fillStyle = isHighlight
          ? `rgba(255, 255, 255, ${alpha * 0.95})`
          : `rgba(180, 190, 200, ${alpha * 0.55})`;

        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.97) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-[55vh] pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Bottom fade mask to seamlessly blend into pitch black */}
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none" />
    </div>
  );
}
