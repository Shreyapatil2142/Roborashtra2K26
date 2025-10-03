
"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";  
import {
  Shield,
  Users,
  Target,
  Award,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Frame from "../components/frame";
 import { robots, achievements } from "../constants/about";

export default ClanSection

export function ClanSection() {
 

  return (
<section className="h-screen lg:h-screen w-screen relative overflow-x-hidden overflow-y-auto lg:overflow-y-hidden">
      <Frame /> 
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1920 1080">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0a91ab', stopOpacity: 0.8 }} />
              <stop offset="100%" style={{ stopColor: '#ffc045', stopOpacity: 0.8 }} />
            </linearGradient>
          </defs>

          {Array.from({ length: 20 }).map((_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 1920}
              y1={Math.random() * 1080}
              x2={Math.random() * 1920}
              y2={Math.random() * 1080}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ 
                duration: 2, 
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3
              }}
            />
          ))}

          {Array.from({ length: 15 }).map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1920}
              cy={Math.random() * 1080}
              r="3"
              fill="#0a91ab"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
  <div className="h-full max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-8 px-6">
          {/* Left Column - Content */}
    <motion.div
      className="h-full flex flex-col justify-center  pr-2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >            {/* Section Header */}
            

            <motion.h2 className="text-5xl md:text-6xl font-bold mb-8 mt-15 font-mono" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
              <span className="text-white">OUR_</span>
              <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">CLAN</span>
            </motion.h2>

            {/* RoboHawk Logo Section */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="mb-8">
              <div className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-8 relative overflow-hidden">
                <motion.div className="absolute inset-0 border-2 border-[#0a91ab]/30" animate={{ borderColor: ["#0a91ab30", "#ffc04550", "#0a91ab30"] }} transition={{ duration: 4, repeat: Infinity }}/>
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#ffc045]" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#ffc045]" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#ffc045]" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#ffc045]" />

                <div className="relative z-10 text-center">
                  <motion.div className="text-6xl font-bold font-mono mb-4" animate={{ textShadow: ["0 0 10px #0a91ab40","0 0 20px #0a91ab80","0 0 10px #0a91ab40"] }} transition={{ duration: 3, repeat: Infinity }}>
                    <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">ROBOHAWK</span>
                  </motion.div>
                  <motion.div className="text-lg text-gray-400 font-mono" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}>
                    &gt; Student-driven Robotics Club at PCCOE&R _
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Description using original website content */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }} className="mb-8">
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Welcome to <span className="text-[#0a91ab]">RoboHawk</span>, where innovation meets passion. Our student-driven Robotics Club at PCCOE&R under the guidance of Dr. Mahendra B. Salunke, is led by the dynamic leader Om Khare.
              </p>
              <p className="text-lg text-gray-400 mb-6">
                RoboHawk has successfully executed diverse projects, including 3D printing, various types of drones, and robotics projects. It offers students hands-on learning, team collaboration, and opens doors to opportunities in the field of robotics.
              </p>
              <motion.div className="w-24 h-0.5 bg-gradient-to-r from-[#0a91ab] to-[#ffc045] mb-6" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.8 }} animate={{ opacity: [0.6, 1, 0.6] }}/>
              <p className="text-base text-gray-500 font-mono">
                &gt; Established 2020 | Global Network | Innovation Hub
              </p>
            </motion.div>

            {/* Achievement Stats */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div key={index} className="bg-gradient-to-br from-[#065471]/20 to-[#022333]/40 backdrop-blur-sm border border-[#0a91ab]/30 p-4 relative group hover:border-[#0a91ab]/60 transition-colors duration-300" whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.2 }}>
                  <div className="flex items-center gap-3 mb-2">
                    <achievement.icon className="h-6 w-6 text-[#0a91ab] group-hover:text-[#ffc045] transition-colors duration-300" />
                    <motion.div className="text-2xl font-bold text-white" animate={{ textShadow: ["0 0 5px #0a91ab40","0 0 15px #0a91ab80","0 0 5px #0a91ab40"] }} transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}>
                      {achievement.value}
                    </motion.div>
                  </div>
                  <div className="text-sm text-gray-400 font-mono">{achievement.label}</div>
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-[#0a91ab]/10 to-[#ffc045]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

 {/* Right Column - Robot Images Swiper */}
<motion.div


  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
      className="h-full flex flex-col justify-center   pl-2"
>
  {(() => {
    const [activeIndex, setActiveIndex] = useState(0);

  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % robots.length);
      }, 4000); // change every 4s
      return () => clearInterval(interval);
    }, []);

    const nextSlide = () =>
      setActiveIndex((prev) => (prev + 1) % robots.length);
    const prevSlide = () =>
      setActiveIndex((prev) => (prev - 1 + robots.length) % robots.length);

    return (
      <div className="relative">
        {/* Main Display */}
        <motion.div
          key={activeIndex}
          className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden border-2 border-[#0a91ab]/40 shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={robots[activeIndex].image}
            alt={robots[activeIndex].title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#022333]/90 to-transparent p-4">
            <h3 className="text-xl font-bold text-white font-mono">
              {robots[activeIndex].title}
            </h3>
          </div>
        </motion.div>

        {/* Navigation Arrows */}
<button
  onClick={prevSlide}
  className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#065471]/80 hover:bg-[#065471] 
             border-2 border-yellow-400 hover:border-yellow-500 
             p-2 rounded-full transition-all duration-300 group shadow-md hover:shadow-yellow-400/50"
>
  <ChevronLeft className="h-5 w-5 text-yellow-400 group-hover:text-white" />
</button>

<button
  onClick={nextSlide}
  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#065471]/80 hover:bg-[#065471] 
             border-2 border-yellow-400 hover:border-yellow-500 
             p-2 rounded-full transition-all duration-300 group shadow-md hover:shadow-yellow-400/50"
>
  <ChevronRight className="h-5 w-5 text-yellow-400 group-hover:text-white" />
</button>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {robots.map((robot, index) => (
            <button
              key={robot.id}
              onClick={() => setActiveIndex(index)}
              className={`relative h-20 overflow-hidden border-2 transition-all duration-300 ${
                index === activeIndex
                  ? "border-[#ffc045] scale-105"
                  : "border-[#0a91ab]/30 hover:border-[#0a91ab]/60"
              }`}
            >
              <img
                src={robot.image}
                alt={robot.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center text-xs text-white">
                {robot.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  })()}
</motion.div>


        </div>
      </div>
    </section>
  );
}
