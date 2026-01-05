"use client";

import Image from "next/image";
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  contact?: string;
  mail?: string;
  onImageLoad?: () => void;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  image,
  linkedin,
  contact,
  mail,
  onImageLoad,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // 🔁 Reset when image changes (important on tab switch)
  useEffect(() => {
    setImageLoaded(false);
  }, [image]);

  return (
    <div className="relative w-[85vw] max-w-[320px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[380px] xl:max-w-[400px] h-[360px] sm:h-[380px] md:h-[400px] lg:h-[460px] flex flex-col items-center justify-center py-4 sm:py-6">
      
      {/* Background Card Shape */}
      <div className="absolute inset-0">
        <Image
          src="/members/teambg.png"
          alt="Card Background"
          fill
          className="object-contain select-none pointer-events-none z-10 absolute"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-evenly items-center h-full px-4 py-4">
        
        {/* Name & Role */}
        <div className="text-center space-y-1 sm:space-y-2">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 uppercase tracking-wide break-words max-w-[240px] mx-auto leading-snug">
            {name}
          </h2>
          <p className="text-white text-xs sm:text-sm md:text-base font-medium">
            {role}
          </p>
        </div>

        {/* Member Image */}
        <div className="relative w-[80%] sm:w-[75%] md:w-[90%] lg:w-[75%] aspect-[3/4] mt-2 mb-4 overflow-hidden rounded-xl shadow-lg">
          
          {/* Skeleton Loader */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-white/10 animate-pulse z-10 rounded-xl" />
          )}

          <Image
            key={`${name}-${image}`}       // ✅ FORCE REMOUNT (CRITICAL)
            src={image}
            alt={name}
            width={256}
            height={320}
            unoptimized                   // ✅ INSTANT IMAGE SWAP
            onLoad={() => {
              setImageLoaded(true);
              onImageLoad?.();
            }}
            className={`object-cover w-full h-full transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            } hover:scale-105 transition-transform`}
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 sm:space-x-6 mt-1 sm:mt-2">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl sm:text-2xl hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          )}
          {contact && (
            <a
              href={`tel:${contact}`}
              className="text-white text-xl sm:text-2xl hover:text-green-400 transition-colors"
            >
              <FaPhone />
            </a>
          )}
          {mail && (
            <a
              href={`mailto:${mail}`}
              className="text-white text-xl sm:text-2xl hover:text-red-400 transition-colors"
            >
              <FaEnvelope />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
