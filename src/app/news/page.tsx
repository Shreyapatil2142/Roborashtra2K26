"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NewsCarousel from "@/app/components/NewsCarousel";
import FloatingParticles from "@/app/components/FloatingParticles";
import SidebarStrip from "@/app/components/SidebarStrip";

export default function NewsPage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    /* Background changed to the theme's dark navy #022333 */
    <div className="relative min-h-screen bg-[#022333] overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FloatingParticles count={60} color="#0a91ab" size={3} />
      </div>

      {/* Sidebar Strip Implementation */}
      <SidebarStrip />
      

      <main className="relative z-10 pt-20">
        {/* News Section */}
        <div className="container mx-auto px-4 ">
          <div className="text-center mb-16" data-aos="fade-up">
            {/* Heading color changed to Light Yellow (#ffc045) */}
            <h1 className="text-4xl md:text-7xl font-bold text-[#ffc045] mb-4 animate-glow tracking-widest font-mokoto">
              NEWS & UPDATES
            </h1>
            
            {/* Decorative Underline */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ffc045] to-transparent mx-auto mb-6" />
            
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Stay updated with the latest from <span className="text-[#0a91ab] font-bold">RoboRashtra 2026</span>
            </p>
          </div>

          {/* News Carousel - Ensure the component itself uses a glass/dark-slate background now */}
          <div data-aos="zoom-in" data-aos-delay="200">
            <NewsCarousel />
          </div>
        </div>

    
      </main>

      {/* Footer Glow */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#022333] to-transparent pointer-events-none -z-1" />
    </div>
  );
}