"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { robots, achievements } from "../constants/about";

export default function ClanSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % robots.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % robots.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + robots.length) % robots.length);

  return (
    <section className="h-screen w-full md:flex md:flex-col md:items-center md:justify-center relative bg-transparent overflow-y-auto lg:overflow-y-hidden px-4 sm:px-6 md:px-8 py-10 md:py-16">
      <div className="lg:max-w-3/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN — TEXT SECTION */}
        <motion.div
          className="flex flex-col justify-center space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-mokoto tracking-widest"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">OUR_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              CLAN
            </span>
          </motion.h2>

          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto lg:mx-0 w-full max-w-md bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-6 md:p-8 relative"
          >
            <div className="relative text-center">
              <motion.div
                className="text-4xl sm:text-5xl md:text-6xl font-bold font-mokoto mb-2"
                animate={{
                  textShadow: [
                    "0 0 10px #0a91ab40",
                    "0 0 20px #0a91ab80",
                    "0 0 10px #0a91ab40",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
                  ROBOHAWK
                </span>
              </motion.div>
              <p className="text-sm sm:text-base text-gray-400 font-mono">
                &gt; Student-driven Robotics Club at PCCOE&R _
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
            <motion.div
              className="w-24 h-0.5 bg-gradient-to-r from-[#0a91ab] to-[#ffc045]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            <p className="text-gray-500 text-sm sm:text-base font-mono">
              &gt; Established 2020 | Global Network | Innovation Hub
            </p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#065471]/20 to-[#022333]/40 backdrop-blur-sm border border-[#0a91ab]/30 p-3 sm:p-4 rounded-md hover:border-[#0a91ab]/60 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-center sm:justify-start gap-1 sm:gap-2">
                  <achievement.icon className="h-5 w-5 text-[#0a91ab]" />
                  <motion.span
                    className="text-xl sm:text-2xl font-bold text-white"
                    animate={{
                      textShadow: [
                        "0 0 5px #0a91ab40",
                        "0 0 15px #0a91ab80",
                        "0 0 5px #0a91ab40",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {achievement.value}
                  </motion.span>
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-mono">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN — ROBOT SLIDER */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-4 w-full"
        >
          {/* Main Robot Image */}
          <motion.div
            key={activeIndex}
            className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden border-2 border-[#0a91ab]/40 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={robots[activeIndex].image}
              alt={robots[activeIndex].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#022333]/90 to-transparent p-3 sm:p-4 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white font-mono">
                {robots[activeIndex].title}
              </h3>
            </div>
          </motion.div>

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
                className={`relative h-16 sm:h-20 overflow-hidden border-2 rounded-md transition-all duration-300 ${
                  index === activeIndex
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
        </motion.div>
      </div>
    </section>
  );
}
