"use client";

import Image from "next/image";
import { FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  contact?: string;
  mail?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  image,
  linkedin,
  contact,
  mail,
}) => {
  return (
    <div
      className="relative w-[85vw] max-w-[320px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[380px] xl:max-w-[400px] h-[360px] sm:h-[380px] md:h-[400px] lg:h-[460px] flex flex-col items-center justify-center py-4 sm:py-6"
    >
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
          <h2
            className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-300 uppercase tracking-wide 
                       break-words max-w-[240px] mx-auto leading-snug"
          >
            {name}
          </h2>
          <p className="text-white text-xs sm:text-sm md:text-base font-medium">
            {role}
          </p>
        </div>

        {/* Member Image */}
        <div className="w-[80%] sm:w-[75%] md:w-[90%] lg:w-[75%] aspect-[3/4] mt-2 mb-4 overflow-hidden rounded-xl shadow-lg">
          <Image
            src={image}
            alt={name}
            width={256}
            height={320}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
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
