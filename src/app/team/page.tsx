"use client";
import { useState } from "react";
import TeamCard from "./teamcards/page";
import { teamData } from "../constants/TeamData";
import Image from "next/image";
import { motion } from "framer-motion";
import Frame from "../components/frame";
import Navbar from "@/app/components/SidebarStrip";

export default function TeamPage() {
  const categories = Object.keys(teamData) as (keyof typeof teamData)[];
  const [activeCategory, setActiveCategory] = useState<keyof typeof teamData>(categories[0]);

  return (
    <>
      {/* Background Grid */}
      {/* Top-left Background */}
      <div className="absolute top-0 left-0 opacity-70 z-0 w-40 sm:w-56 md:w-72 lg:w-96">
        <Image
          src="/images/teamPageBG1.png"
          alt="Card Background"
          width={512}
          height={512}
          className="object-contain"
        />
      </div>

      {/* Bottom-right Background */}
      <div className="absolute bottom-0 right-0 opacity-70 z-0 w-40 sm:w-56 md:w-72 lg:w-96">
        <Image
          src="/images/teamPageBG2.png"
          alt="Card Background"
          width={512}
          height={512}
          className="object-contain"
        />
      </div>

      {/* Hero Heading Section */}
      <div className="flex flex-col items-center z-20 mt-6 md:mt-8 text-center px-4">
        <div className="flex items-center gap-2 sm:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 h-full flex flex-col justify-center pr-2"
        >
          <h2 className="font-bold mb-4 mt-12 sm:mb-2 font-mokoto tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-white">OUR_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              TEAM
            </span>
          </h2>

          <motion.div
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-gray-200 px-2 selection:bg-[#0a91ab] selection:text-yellow-300">
          Meet our amazing <span className="text-yellow-300 font-semibold">mentors</span>,{" "}
          <span className="text-yellow-300 font-semibold">leads</span>, and{" "}
          <span className="text-yellow-300 font-semibold">co-leads!</span>
        </p>
          </motion.div>
        </motion.div>

        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-[#065471] via-[#097BA5] to-[#0BA0D7] 
  bg-opacity-60 backdrop-blur-md backdrop-saturate-150 shadow-lg
  rounded-2xl px-4 py-3 mt-8 flex space-x-3 overflow-x-auto no-scrollbar 
  text-xm font-semibold md:w-fit sm:w-fit md:mx-auto z-20 w-full">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-4 py-1 rounded-xl transition-all duration-300 
        ${activeCategory === cat
                ? "bg-yellow-400 text-blue-900 shadow-md scale-105"
                : "text-white hover:text-yellow-300 hover:bg-white/10"
              }`}
          >
            {cat.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </nav>

      {/* Heading */}
      <h1 className="text-2xl bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text 
      text-transparent sm:text-3xl md:text-4xl font-mortend mt-12 z-20
       tracking-wide uppercase text-center px-2 mb-4">
              
        {activeCategory.replace(/([A-Z])/g, " $1").trim()} Team
      </h1>

      {/* Members */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12 mt-6 px-4">
        {teamData[activeCategory]?.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </>
  );
}