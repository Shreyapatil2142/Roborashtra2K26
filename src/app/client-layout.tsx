"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Frame from "./components/frame";
import FloatingParticles from "./components/FloatingParticles";
import Loading from "./components/Loading";
import useIsMobile from "@/app/hooks/useIsMobile";
import { RoboticHandCursor } from "./components/RoboticHandCursor";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    // ✅ Only run loading on the very first visit
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setIsFirstLoad(true);
      const timer = setTimeout(() => {
        setIsFirstLoad(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 3500);

      return () => clearTimeout(timer);
    } else {
      // Already visited — skip loading
      setIsFirstLoad(false);
    }
  }, []);

  return (
    <>
      <Frame />
      
  {isMobile ? <></>: <RoboticHandCursor />}

      {/* Floating background particles (always visible) */}
      <div className="absolute w-full h-screen overflow-hidden">
        <FloatingParticles count={20} color="#0a91ab" size={7} className="opacity-30" />
      </div>

      <main className="relative overflow-hidden">
        {isFirstLoad ? (
          <div className="transition-opacity duration-700 opacity-100">
            <Loading />
          </div>
        ) : (
          <div className="transition-opacity duration-700 opacity-100">
            {children}
          </div>
        )}
      </main>
    </>
  );
}
