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
    <section className="w-full max-h-screen flex flex-col items-center justify-start py-10 bg-transparent overflow-x-hidden">
      <SidebarStrip />

      <main className="w-[80%] mx-auto relative z-10 flex flex-col gap-16">
        {/* News Section */}
        <div className="container mx-auto px-4 ">

          <div data-aos="fade-up" className="text-center">
            <h2 className="mt-12 sm:mb-2 font-mokoto tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="text-white">NEWS & </span>
              <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
                UPDATES
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest from RoboRashtra 2026
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
    </section>
  );
}