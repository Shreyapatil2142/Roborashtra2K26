"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

interface NewsItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  linkText: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "राष्ट्रीय रोबोराष्ट्र २०२६",
    description: "पीसीसीओईआर आयोजित राष्ट्रीय रोबोराष्ट्र २०२६ स्पर्धेत एक लाख नव्वद हजार रुपयांची पारितोषिके वाटप",
    imageUrl: "/news/P_pic1.webp",
    link: "https://purogamimaharashtra.com/?p=5059",
    linkText: "Read Full Article"
  },
  {
    id: 2,
    title: "Innovation & Technology Showcase",
    description: "RoboRashtra 2026 featured cutting-edge robotics projects and innovative engineering solutions",
    imageUrl: "/news/linkdin_pic1.jpg",
    link: "https://www.linkedin.com/posts/pccoer-pcet_roborashtra2026-pccoer-pcet-ugcPost-7432685871801327617-oBEQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY6oIMBFpfrplKTntYZpHjeygqmc8wwP2s",
    linkText: "View Details"
  },
  {
    id: 3,
    title: "Championship Winners Announced",
    description: "Exciting competition concluded with outstanding performances from engineering students across the nation",
    imageUrl: "/news/p_pic2.webp",
    link: "https://purogamimaharashtra.com/?p=5059",
    linkText: "Read More"
  },
  {
    id: 4,
    title: "National RoboRashtra 2026",
    description: "PCCOER organized National RoboRashtra 2026 competition with prize money of ₹1,90,000 distributed among winners",
    imageUrl: "/news/linkdin_pic2.jpg",
    link: "https://www.linkedin.com/posts/pccoer-pcet_roborashtra2026-pccoer-pcet-ugcPost-7432685871801327617-oBEQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEY6oIMBFpfrplKTntYZpHjeygqmc8wwP2s",
    linkText: "View on LinkedIn"
  }
];

const NewsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const currentNews = newsData[currentIndex];

  return (
    <div 
      className="relative max-w-6xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          /* Card Background: Solid off-white to ensure text visibility */
          className="bg-slate-100 rounded-3xl shadow-2xl overflow-hidden border border-white/20"
        >
          <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12">
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-2xl h-64 md:h-96 shadow-lg">
              <img
                src={currentNews.imageUrl}
                alt={currentNews.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center text-left">
              {/* Forced Dark Color: Using hex #022333 directly for maximum contrast */}
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-[#022333]">
                {currentNews.title}
              </h2>
              <p className="text-slate-600 text-lg md:text-xl mb-8 leading-relaxed">
                {currentNews.description}
              </p>

              <div>
                <a
                  href={currentNews.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#065471] text-white font-bold rounded-full hover:bg-[#0a91ab] transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                >
                  <span>{currentNews.linkText}</span>
                  <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#ffc045] hover:text-[#022333] transition-all z-20"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#ffc045] hover:text-[#022333] transition-all z-20"
      >
        <FaArrowRight />
      </button>

      {/* Slide Indicators - Updated to Yellow highlight */}
      <div className="flex justify-center mt-10 space-x-4">
        {newsData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentIndex
                ? "w-10 h-3 bg-[#ffc045] shadow-[0_0_15px_rgba(255,192,69,0.5)]" 
                : "w-3 h-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;