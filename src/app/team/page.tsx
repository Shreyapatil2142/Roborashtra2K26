"use client";

import { useState, useRef, useEffect } from "react";
import TeamCard from "@/app/components/TeamCards";
import { teamData } from "../constants/TeamData";
import Image from "next/image";
import SidebarStrip from "@/app/components/SidebarStrip";
import { MoveRight, MoveLeft } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TeamPage() {
  const categories = Object.keys(teamData) as (keyof typeof teamData)[];
  const [activeCategory, setActiveCategory] = useState<keyof typeof teamData>(categories[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 200; // adjust for faster/slower scroll
    const newScroll =
      direction === "left"
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;

    scrollRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start py-10 bg-transparent overflow-x-hidden">
      {/* Background Grid */}
      <div className="absolute top-0 left-0 opacity-70 z-0 w-40 sm:w-56 md:w-72 lg:w-96">
        <Image
          src="/members/teamPageBG1.png"
          alt="Card Background"
          width={512}
          height={512}
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-0 right-0 opacity-70 z-0 w-40 sm:w-56 md:w-72 lg:w-96">
        <Image
          src="/members/teamPageBG2.png"
          alt="Card Background"
          width={512}
          height={512}
          className="object-contain"
        />
      </div>

      {/* Hero Heading Section */}
      <div className="flex flex-col items-center z-20 mt-6 md:mt-8 text-center px-4">
        <SidebarStrip />
        <div className="flex items-center gap-2 sm:gap-4">
          <div
            data-aos="fade-up"
            className="text-center mb-6 h-full flex flex-col justify-center pr-2"
          >
            <h2
              className="font-bold mb-4 mt-12 sm:mb-2 font-mokoto tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              data-aos="zoom-in"
            >
              <span className="text-white">OUR_</span>
              <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
                TEAM
              </span>
            </h2>

            <p
              className="mt-2 sm:mt-3 text-base sm:text-lg md:text-xl text-gray-200 px-2 selection:bg-[#0a91ab] selection:text-yellow-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Meet our amazing{" "}
              <span className="text-yellow-300 font-semibold">mentors</span>,{" "}
              <span className="text-yellow-300 font-semibold">leads</span>, and{" "}
              <span className="text-yellow-300 font-semibold">heads!</span>
            </p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div
        className="relative flex items-center justify-center mt-8 bg-gradient-to-r from-[#065471] via-[#097BA5] to-[#0BA0D7] bg-opacity-60 backdrop-blur-md backdrop-saturate-150 shadow-lg rounded-2xl px-10 py-3 md:w-4/6 sm:w-4/6 lg:w-4/6 md:mx-auto z-10 w-5/6 min-h-16"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 z-20 bg-[#065471] bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#065471]/90 border-highlight border-1"
        >
          <MoveLeft size={20} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 group-hover:text-white" />
        </button>

        {/* Navbar */}
        <nav
          ref={scrollRef}
          className="flex space-x-3 overflow-x-auto no-scrollbar text-sm font-semibold scroll-smooth px-4"
        >
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-4 py-1 rounded-xl transition-all duration-300 
                ${
                  activeCategory === cat
                    ? "bg-yellow-400 text-blue-900 shadow-md scale-105"
                    : "text-white hover:text-yellow-300 hover:bg-white/10"
                }`}
            >
              {cat.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </nav>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 z-20 bg-[#065471] bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:bg-[#065471]/90 border-highlight border-1"
        >
          <MoveRight size={20} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 group-hover:text-white" />
        </button>
      </div>

      {/* Heading */}
      <h1
        className="text-2xl bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text 
        text-transparent sm:text-3xl md:text-4xl font-mortend mt-12 z-10
        tracking-wide uppercase text-center px-2 mb-4"
        data-aos="fade-up"
      >
        {activeCategory.replace(/([A-Z])/g, " $1").trim()} Team
      </h1>

      {/* Members */}
      <div
        className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:gap-12 mt-6 px-4 mb-16 z-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {teamData[activeCategory]?.map((member, index) => (
          <div key={index} data-aos="zoom-in-up" data-aos-delay={index * 100}>
            <TeamCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
}
