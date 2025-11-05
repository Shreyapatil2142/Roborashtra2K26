"use client";

import { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { glimpses } from "../constants/glimps";
import SidebarStrip from "@/app/components/SidebarStrip";
import Image from "next/image";
import MagicBento from "@/app/components/MagicBento";
import LoadingScreen from "../components/LoadingScreen";

export default function GlimpsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeGlimpse, setActiveGlimpse] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Initialize AOS once
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: -250, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const activeThumb = thumbnailRefs.current[activeIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);

  // ✅ Preload ALL images from glimpses (main + extra)
  useEffect(() => {
    if (!glimpses || glimpses.length === 0) return;

    let allImageUrls: string[] = [];

    glimpses.forEach((glimpse) => {
      if (glimpse.image) allImageUrls.push(glimpse.image); // main image
      if (glimpse.images && Array.isArray(glimpse.images)) {
        allImageUrls = [...allImageUrls, ...glimpse.images]; // gallery images
      }
    });

    let loadedCount = 0;
    const totalImages = allImageUrls.length;

    allImageUrls.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          // Add small delay for smooth fade-out
          setTimeout(() => setLoading(false), 700);
        }
      };
    });
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % glimpses.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + glimpses.length) % glimpses.length);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <section className="w-full max-h-screen flex flex-col items-center justify-start py-10 bg-transparent overflow-x-hidden">
      <SidebarStrip />

      <div className="w-[80%] mx-auto relative z-10 flex flex-col gap-16">
        {/* Header Section */}
        <div data-aos="fade-up" className="text-center">
          <h2 className="mt-12 sm:mb-2 font-mokoto tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-white">ARCHIVE_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              GLIMPSE
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Accessing archived footage from previous robotic engagements.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative flex-1 flex flex-col md:flex-row justify-center gap-6">
          {/* Main Display */}
          <div
            className="relative w-full md:w-2/4 h-[300px] sm:h-[250px] md:h-[350px] lg:h-[450px]
               bg-gradient-to-br from-[#065471]/20 to-[#022333]/40 
               border-2 border-[#0a91ab]/40 overflow-hidden"
            data-aos="zoom-in"
          >
            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#ffc045]" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#ffc045]" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#ffc045]" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#ffc045]" />

            <Image
              src={glimpses[activeIndex].image}
              alt={glimpses[activeIndex].title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />


            {/* Info Overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#022333]/90 to-transparent p-8 hidden sm:block"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-4xl font-bold text-white mb-3 font-mono">
                {glimpses[activeIndex].title}
              </h3>

              <p className="text-gray-300 text-xl mb-4 leading-relaxed">
                {glimpses[activeIndex].description}
              </p>

              <div className="flex items-center gap-2">
                <Award className="h-6 w-6 text-[#0a91ab]" />
                <span className="text-[#0a91ab] font-mono text-lg">
                  {glimpses[activeIndex].stats}
                </span>
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#065471]/70 hover:bg-[#065471] border-2 border-[#ffc045] p-3 transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-[#ffc045]" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#065471]/70 hover:bg-[#065471] border-2 border-[#ffc045] p-3 transition-all"
            >
              <ChevronRight className="h-6 w-6 text-[#ffc045]" />
            </button>
          </div>

          {/* Thumbnail Grid */}
          <div
            className="flex gap-2 mt-4 md:mt-0 md:flex-col md:w-1/4 md:max-h-[600px] md:overflow-y-auto md:gap-3 md:pr-2 overflow-x-auto p-4 thumbnail-scroll"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            {glimpses.map((glimpse, index) => (
              <button
                key={glimpse.id}
                ref={(el) => {
                  thumbnailRefs.current[index] = el;
                }}
                onClick={() => {
                  setActiveIndex(index);
                  setActiveGlimpse(glimpse.id);
                }}

                aria-label={`View glimpse ${glimpse.title}`}
                className={`relative shrink-0 
                  h-24 w-36 md:h-28 md:w-full 
                  border-2 transition-all duration-300 group rounded
                  ${index === activeIndex
                    ? "border-[#ffc045] scale-105"
                    : "border-[#0a91ab]/30 hover:border-[#0a91ab]/60"
                  }
                `}
              >
                <Image
                  src={glimpse.image}
                  alt={glimpse.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 150px, 200px"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-300 ${index === activeIndex
                    ? "from-[#ffc045]/40 to-[#0a91ab]/40"
                    : "from-[#0a91ab]/20 to-[#065471]/20 group-hover:from-[#0a91ab]/40 group-hover:to-[#065471]/40"
                    }`}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#022333]/80 p-2">
                  <div className="text-xs md:text-sm text-white font-mono truncate">
                    {glimpse.title}
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>

        {activeGlimpse !== null && (
          <MagicBento
            key={activeGlimpse}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            glowColor="255, 192 ,69"
            images={glimpses[activeIndex].images}
          />
        )}


      </div>
    </section>
  );
}