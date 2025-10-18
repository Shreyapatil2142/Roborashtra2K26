"use client"
import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback"
import { ChevronLeft, ChevronRight, Eye, Calendar, Award } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { glimpses } from "../constants/glimps";
import Frame from "../components/frame";
export default function GlimpsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);



  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % glimpses.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + glimpses.length) % glimpses.length);
  };
  useEffect(() => {
    if (thumbnailRefs.current[activeIndex]) {
      thumbnailRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);
  return (
    <section className="min-h-screen w-screen h-screen lg:h-screen relative overflow-x-hidden overflow-y-auto lg:overflow-y-hidden">

      <Frame />
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 h-full flex flex-col justify-center pr-2"
        >


          <h2 className="font-bold mb-4 mt-12 sm:mb-2 font-mokoto tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-white">ARCHIVE_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              GLIMPSE
            </span>
          </h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &gt; Accessing archived footage from previous robotic engagements...
          </motion.p>
        </motion.div>

        {/* Holographic Carousel */}
        <div className="relative flex-1 flex flex-col md:flex-row justify-center gap-6">
          {/* Main Display */}
          <motion.div
            className="relative w-full md:w-2/4 h-[300px] sm:h-[200px] md:h-[300px] lg:h-[400px] 
               bg-gradient-to-br from-[#065471]/20 to-[#022333]/40 
               border-2 border-[#0a91ab]/40 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#ffc045]" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#ffc045]" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#ffc045]" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#ffc045]" />

            {/* Active Image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={glimpses[activeIndex].image}
                alt={glimpses[activeIndex].title}
                className="w-full h-full object-cover"
              />

              {/* Holographic Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#0a91ab]/20 via-transparent to-[#ffc045]/20"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Scan Lines Effect */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  backgroundPosition: ["0px 0px", "0px 100px"],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, #0a91ab 2px, #0a91ab 4px)`,
                }}
              />
            </motion.div>

            {/* Info Overlay */}
            <motion.div
              key={`info-${activeIndex}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#022333]/90 to-transparent p-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="h-5 w-5 text-[#ffc045]" />
                <span className="text-[#ffc045] font-mono text-sm">
                  {glimpses[activeIndex].date}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-3 font-mono">
                {glimpses[activeIndex].title}
              </h3>

              <p className="text-gray-300 text-lg mb-4">
                {glimpses[activeIndex].description}
              </p>

              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-[#0a91ab]" />
                <span className="text-[#0a91ab] font-mono text-sm">
                  {glimpses[activeIndex].stats}
                </span>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#065471]/70 hover:bg-[#065471] border-2 border-[#ffc045] p-3 transition-all"
            >
              <ChevronLeft className="h-6 w-6 text-[#ffc045]" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#065471]/70 hover:bg-[#065471] border-2 border-[#ffc045] p-3 transition-all"
            >
              <ChevronRight className="h-6 w-6 text-[#ffc045]" />
            </button>
          </motion.div>

          {/* Thumbnail Grid */}
          {/* Thumbnail Grid */}
          <motion.div
            className="flex gap-2 mt-4 md:mt-0 md:flex-col md:w-1/4 md:max-h-[600px] md:overflow-y-auto md:gap-3 md:pr-2 overflow-x-auto p-4 thumbnail-scroll"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {glimpses.map((glimpse, index) => (
              <motion.button
                key={glimpse.id}
                ref={(el) => {
                  thumbnailRefs.current[index] = el;
                }} onClick={() => setActiveIndex(index)}
                className={`
        relative shrink-0 
        h-24 w-36 md:h-28 md:w-full 
        border-2 transition-all duration-300 group  rounded 
        ${index === activeIndex
                    ? 'border-[#ffc045] scale-105'
                    : 'border-[#0a91ab]/30 hover:border-[#0a91ab]/60'}
      `}
                whileHover={{ scale: index === activeIndex ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ImageWithFallback
                  src={glimpse.image}
                  alt={glimpse.title}
                  className="w-full h-full object-cover"
                />

                {/* Holographic Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-300 ${index === activeIndex
                    ? 'from-[#ffc045]/40 to-[#0a91ab]/40'
                    : 'from-[#0a91ab]/20 to-[#065471]/20 group-hover:from-[#0a91ab]/40 group-hover:to-[#065471]/40'
                  }`} />

                {/* Corner Indicators */}
                {index === activeIndex && (
                  <>
                    <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-[#ffc045]" />
                    <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[#ffc045]" />
                    <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-[#ffc045]" />
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-[#ffc045]" />
                  </>
                )}

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#022333]/80 p-1">
                  <div className="text-[10px] md:text-xs text-white font-mono truncate">
                    {glimpse.title}
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>


          {/* Floating Data Points */}
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#0a91ab] opacity-60"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}