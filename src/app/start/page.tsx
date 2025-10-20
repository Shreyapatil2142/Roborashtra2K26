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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background (Video / Particles) */}
      <div className="absolute inset-0">
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
        <Particle />
      </div>

      {/* Frame Overlay (hidden on small screens) */}
      <Image
        src="/frame4.png"
        alt="Frame overlay"
        fill
        priority
        className="pointer-events-none hidden md:block"
      />

      {/* Top Logos */}
      <div className="absolute top-10 left-80 flex gap-4">
        <Image
          src="/PCCOER.png"
          alt="PCCOER logo"
          width={80}
          height={80}
          className="w-16 sm:w-20 md:w-24 h-auto"
          priority
        />
        <Image
          src="/roborashtra.png"
          alt="Roborastra logo"
          width={80}
          height={80}
          className="w-16 sm:w-20 md:w-24 h-auto"
          priority
        />
      </div>

      {/* Main Title */}
      <div className="absolute top-15 left-1/2 -translate-x-1/2 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mokoto bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent tracking-widest">
          Roborastra 2k26
        </h1>

        <p className="mt-3 text-base sm:text-lg md:text-xl text-[#02ccffc2] font-mortend tracking-widest">
          by{" "}
          <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">
            RoboHawk
          </span>
        </p>
      </div>

      {/* Navbar (sidebars) */}
      <Navbar />

      {/* Social Media Buttons */}
      <div className="absolute bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6 text-lg sm:text-2xl text-yellow-400">
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
