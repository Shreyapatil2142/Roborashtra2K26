"use client";
import React, { useEffect, useState } from "react";

const Loading: React.FC = () => {
  const [phase, setPhase] = useState<"flash" | "name" | "final">("flash");

  useEffect(() => {
    // Total duration = 3s
    const timers = [
      setTimeout(() => setPhase("name"), 2000), 
      setTimeout(() => setPhase("final"), 3000), 
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen bg-black overflow-hidden z-50">
      {/* === PHASE 1 — Logo Light Sweep === */}
      <div
        className={`absolute w-[300px] h-[300px] bg-no-repeat bg-contain transition-opacity duration-400 ${
          phase === "flash" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url('/roborashtra.svg')`,
          WebkitMaskImage:
            "linear-gradient(120deg, transparent 30%, white 50%, transparent 70%)",
          maskImage:
            "linear-gradient(120deg, transparent 30%, white 50%, transparent 70%)",
          WebkitMaskSize: "300% 300%",
          maskSize: "300% 300%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          animation:
            phase === "flash" ? "lightSweep 2s ease-in-out forwards" : "none",
        }}
      />

      {/* === PHASE 2 — Text Light Sweep (same as logo) === */}
      <h1
        className={`absolute text-white/65 md:text-6xl text-4xl font-mokoto tracking-widest transition-opacity duration-400 ${
          phase === "name" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          WebkitMaskImage:
            "linear-gradient(120deg, transparent 30%, white 50%, transparent 70%)",
          maskImage:
            "linear-gradient(120deg, transparent 30%, white 50%, transparent 70%)",
          WebkitMaskSize: "300% 300%",
          maskSize: "300% 300%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          animation:
            phase === "name" ? "lightSweepText 2s ease-in-out forwards" : "none",
          bottom: "50%",
        }}
      >
        ROBORASHTRA
      </h1>

      {/* === PHASE 3 — Final Zoom-Out Reveal === */}
      <div
        className={`flex flex-col items-center justify-center transition-all duration-400 ${
          phase === "final" ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <img
          src="/roborashtra.svg"
          alt="Roborashtra Logo"
          className="w-[280px] mb-3"
        />
        <h1 className="text-white/70 text-4xl font-mokoto tracking-widest">
          ROBORASHTRA
        </h1>
      </div>

      {/* === Inline Animations === */}
      <style jsx>{`
        @keyframes lightSweep {
          0% {
            -webkit-mask-position: -150% 0%;
            mask-position: -150% 0%;
          }
          100% {
            -webkit-mask-position: 150% 0%;
            mask-position: 150% 0%;
          }
        }

        @keyframes lightSweepText {
          0% {
            -webkit-mask-position: 150% 0%;
            mask-position: 150% 0%;
          }
          100% {
            -webkit-mask-position: -150% 0%;
            mask-position: -150% 0%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
