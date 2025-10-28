"use client";
import Navbar from "@/app/components/navbar";
import { SocialMediaButton } from "@/app/components/social";
import Image from "next/image";
import Particle from "@/app/components/ParticleLogo";
import Frame from "@/app/components/frame";

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
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 w-full h-full z-50 bg-black opacity-60 flex"></div>

      </div>
  <Navbar />

      {/* Main Title */}
     <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center px-4 z-10 w-full flex justify-center">
  <div className="relative w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
    <Image
      src="/name.svg"
      alt="PCCOER logo"
      width={2500}
      height={500}
      className="w-full h-auto"
      priority
    />
  </div>
</div>


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
