"use client";

import Navbar from "@/app/components/navbar";
import { SocialMediaButton } from "@/app/components/social";
import Image from "next/image";
import Particle from "@/app/components/ParticleLogo";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      {/* Background (Video / Particles) */}
      <div className="absolute inset-0 z-5">
        <Particle />
        {/* Optional video background */}
        {/* 
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video> 
        */}
      </div>

      {/* Frame Overlay (hidden on small screens) */}
      <Image
        src="/frame4.png"
        alt="Frame overlay"
        fill
        priority
        className="pointer-events-none z-0 hidden md:block"
      />
      <Image
        src="/mbBG.jpg"
        alt="Frame overlay"
        fill
        priority
        className="pointer-events-none block md:hidden z-0 object-cover blur-xs"
      />

      {/* Top Logos */}
      <div className="absolute top-4 md:top-10 justify-between w-full md:w-fit px-10 md:px-0 md:left-80 flex md:gap-4">
        <Image
          src="/roborashtra.png"
          alt="Roborastra logo"
          width={80}
          height={80}
          className="w-14 sm:w-14 md:w-24 h-auto"
          priority
        />
        <Image
          src="/PCCOER.png"
          alt="PCCOER logo"
          width={80}
          height={80}
          className="w-14 sm:w-14 md:w-24 h-auto"
          priority
        />
      </div>

      {/* Main Title */}
      <div className="absolute top-20 md:top-24 left-1/2 -translate-x-1/2 text-center px-4 sm:px-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-mokoto bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent tracking-widest text-nowrap">
          Roborastra 2k26
        </h1>

        <p className="mt-2 sm:mt-3 text-sm sm:text-sm md:text-xl text-[#02ccffc2] absolute left-1/2 flex gap-2 font-mortend tracking-widest">
          by{" "}
          <span className="text-white font-bold text-sm sm:text-xl md:text-2xl">
            RoboHawk
          </span>
        </p>
      </div>

      {/* Navbar (sidebars) */}
      <Navbar />

      {/* Social Media Buttons */}
      <div className="absolute bottom-10 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-6 text-base sm:text-xl z-10 md:text-2xl text-yellow-400">
        <SocialMediaButton>
          <FaFacebook />
        </SocialMediaButton>
        <SocialMediaButton>
          <FaTwitter />
        </SocialMediaButton>
        <SocialMediaButton>
          <FaInstagram />
        </SocialMediaButton>
        <SocialMediaButton>
          <FaLinkedin />
        </SocialMediaButton>
        <SocialMediaButton>
          <FaYoutube />
        </SocialMediaButton>
      </div>
    </div>
  );
}
