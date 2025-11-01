"use client";

import HomePage from "./start/page";
import React, { useEffect, useState } from "react";
import Loading from "@/app/components/Loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      // ✅ Always show loading screen on page load
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3500); // show loading for 3.5 seconds (adjust if needed)
  
      return () => clearTimeout(timer);
    }, []);
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {isLoading && (
        // ✅ Show loading screen first
        <div className="fixed inset-0 z-[9999] bg-[#022333] flex items-center justify-center">
          <Loading />
        </div>
      )}
      <HomePage />
    </div>
  );
}
