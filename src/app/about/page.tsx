"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { robots, achievements } from "../constants/about";
import SidebarStrip from "../components/SidebarStrip";
import LoadingScreen from "../components/LoadingScreen";

export default function ClanSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: -150,     // start animation 100px before element comes into view
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % robots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let loadedCount = 0;
    const totalImages = robots.length;
    robots.forEach((robot) => {
      const img = new window.Image();
      img.src = robot.image;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          // Add a short delay for smoothness
          setTimeout(() => setLoading(false), 800);
        }
      };
    });
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % robots.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + robots.length) % robots.length);
  
  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <section className="w-full max-h-screen flex flex-col items-center justify-start py-10 bg-transparent overflow-x-hidden">
      <SidebarStrip />
      <div className="w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">

        {/* LEFT COLUMN — TEXT SECTION */}
        <div
          data-aos="fade-right"
          className="flex flex-col justify-center space-y-6 text-center lg:text-left"
        >
          {/* Heading */}
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-mokoto tracking-widest"
          >
            <span className="text-white">OUR_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              CLAN
            </span>
          </h2>

          {/* Logo Section */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mx-auto lg:mx-0 w-full max-w-md bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-6 md:p-8 relative"
          >
            <div className="relative text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold font-mokoto mb-2 animate-glow">
                <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text tracking-widest text-transparent">
                  ROBOHAWK
                </span>
              </div>
              <p className="text-sm sm:text-base text-gray-400 font-mono">
                &gt; Student-driven Robotics Club at PCCOE&R _
              </p>
            </div>
          </div>

          {/* Description */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4"
          >
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Welcome to <span className="text-[#0a91ab]">RoboHawk</span>, where
              innovation meets passion. Our student-driven Robotics Club at
              PCCOE&R under the guidance of Dr. Mahendra B. Salunke, is led by
              the dynamic leader Om Khare.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              RoboHawk has executed diverse projects in 3D printing, drones, and
              robotics. It offers hands-on learning, collaboration, and
              innovation opportunities.
            </p>
            <div
              data-aos="zoom-in"
              data-aos-delay="800"
              className="w-24 h-0.5 bg-gradient-to-r from-[#0a91ab] to-[#ffc045] transform scale-x-0 animate-scale-line"
            />
            <p className="text-gray-500 text-sm sm:text-base font-mono">
              &gt; Established 2020 | Global Network | Innovation Hub
            </p>
          </div>

          {/* Achievements */}
          <div
            data-aos="fade-up"
            data-aos-delay="800"
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#065471]/20 to-[#022333]/40 backdrop-blur-sm border border-[#0a91ab]/30 p-3 sm:p-4 rounded-md hover:border-[#0a91ab]/60 transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-1 sm:gap-2">
                  <achievement.icon className="h-5 w-5 text-[#0a91ab]" />
                  <span className="text-xl sm:text-2xl font-bold text-white animate-glow-delayed">
                    {achievement.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-mono">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — ROBOT SLIDER */}
        <div
          data-aos="fade-left"
          className="flex flex-col items-center justify-center space-y-4 w-full"
        >
          {/* Main Robot Image */}
          <div
            key={activeIndex}
            className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden border-2 border-[#0a91ab]/40 shadow-lg transition-all duration-700 ease-in-out opacity-100 scale-100"
          >
            <Image
              src={robots[activeIndex].image}
              alt={robots[activeIndex].title}
              fill
              className="object-cover transition-all duration-700 ease-in-out"
              priority
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#022333]/90 to-transparent p-3 sm:p-4 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
                {robots[activeIndex].title}
              </h3>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevSlide}
              className="bg-[#065471]/80 hover:bg-[#065471] border-2 border-yellow-400 hover:border-yellow-500 p-2 sm:p-3 rounded-full transition-all duration-300 group shadow-md hover:shadow-yellow-400/50"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 group-hover:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-[#065471]/80 hover:bg-[#065471] border-2 border-yellow-400 hover:border-yellow-500 p-2 sm:p-3 rounded-full transition-all duration-300 group shadow-md hover:shadow-yellow-400/50"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 group-hover:text-white" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-md">
            {robots.map((robot, index) => (
              <button
                key={robot.id}
                onClick={() => setActiveIndex(index)}
                className={`relative h-16 sm:h-20 overflow-hidden border-2 rounded-md transition-all duration-300 ${index === activeIndex
                  ? "border-[#ffc045] scale-105"
                  : "border-[#0a91ab]/30 hover:border-[#0a91ab]/60"
                  }`}
              >
                <Image
                  src={robot.image}
                  alt={robot.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-white">
                  {robot.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
