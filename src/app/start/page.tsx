"use client";

import React from "react";
import Navbar from "@/app/components/navbar";
import { SocialMediaButton } from "@/app/components/social";
import Image from "next/image";
import Particle from "@/app/components/ParticleLogo";
import useIsMobile from "@/app/hooks/useIsMobile";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Btn4 from "../components/Btn4";

export default function HomePage() {
  const isMobile = useIsMobile();

  return (
    <>
      <div
        className="relative w-full h-screen overflow-hidden bg-background transition-opacity duration-700 ease-in-out"
      >
        {/* Background (Video / Particles) */}
        {isMobile ? <Particle /> : null}

        <div className="absolute inset-0 z-5 hidden lg:block">
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
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center px-4 z-10 w-full mt-6 md:mt-0 flex justify-center">
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

        <Btn4 link="/events" text="START" />

        {/* Social Links */}
        <div className="absolute bottom-10 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-3 sm:gap-6 text-base sm:text-xl z-20 md:text-2xl text-yellow-400">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialMediaButton>
              <FaFacebook />
            </SocialMediaButton>
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialMediaButton>
              <FaTwitter />
            </SocialMediaButton>
          </a>

          <a
            href="https://www.instagram.com/roborashtra.pccoer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialMediaButton>
              <FaInstagram />
            </SocialMediaButton>
          </a>

          <a
            href="https://www.linkedin.com/in/robo-hawk-510206293"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialMediaButton>
              <FaLinkedin />
            </SocialMediaButton>
          </a>

          <a
            href="https://www.youtube.com/@RobohawkPCCOER"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialMediaButton>
              <FaYoutube />
            </SocialMediaButton>
          </a>
        </div>
      </div>
    </>
  );
}
