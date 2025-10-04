"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const offsetX =
    windowSize.width > 0 ? (mousePosition.x / windowSize.width - 0.5) * 30 : 0;
  const offsetY =
    windowSize.height > 0 ? (mousePosition.y / windowSize.height - 0.5) * 30 : 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden select-none">
      {/* Background Blobs with Parallax Motion */}
      <div
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-[#0a91ab] rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      ></div>
      <div
        className="absolute bottom-0 right-0 w-[24rem] h-[24rem] bg-[#ffc045] rounded-full blur-3xl opacity-30 animate-pulse"
        style={{ transform: `translate(${-offsetX}px, ${-offsetY}px)` }}
      ></div>

      {/* Floating 404 with glow and hover scale */}
      <h1 className="text-[8rem] md:text-[10rem] font-extrabold tracking-widest text-[#ffc045] drop-shadow-[0_0_20px_rgba(255,192,69,0.6)] transition-transform duration-500 hover:scale-110">
        404
      </h1>

      <p className="text-2xl md:text-3xl font-semibold text-gray-300 mt-4 animate-bounce-slow">
        Oops! Page Not Found 🚧
      </p>

      <p className="text-gray-400 mt-3 max-w-md text-center leading-relaxed">
        The page you’re looking for doesn’t exist or might have been moved.
        Let’s get you back on track!
      </p>

      <div className="mt-10 flex flex-wrap gap-5 justify-center">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl font-semibold bg-[#0a91ab] text-white shadow-lg hover:shadow-[#0a91ab]/50 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          ⬅ Go Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl font-semibold bg-[#ffc045] text-black shadow-lg hover:shadow-[#ffc045]/50 hover:scale-105 active:scale-95 transition-all duration-300"
        >
          📩 Contact Us
        </Link>
      </div>

      {/* Floating sparkles for ambiance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-float"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></span>
        ))}
      </div>

      <div className="absolute bottom-10 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
    </div>
  );
}
