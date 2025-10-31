"use client";
import React, { useEffect, useState } from "react";
import Frame from "./components/frame";
import FloatingParticles from "./components/FloatingParticles";
import Loading from "./components/Loading";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Frame />
      <div className="absolute w-full h-screen overflow-hidden">
        <FloatingParticles count={20} color="#0a91ab" size={7} className="opacity-30" />
      </div>

      <main className="relative overflow-hidden">
        {isLoading ? (
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
