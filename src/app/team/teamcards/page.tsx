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

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, linkedin, contact, mail }) => {
  return (
    <div className="relative w-72 h-[400px] py-6 flex flex-col items-center justify-between">
      {/* Background Card Shape */}
      <Image
        src="/images/teambg.svg"
        alt="Card Background"
        fill
        className="absolute object-contain"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-6">
        <h2
          className="text-xl font-bold text-yellow-300 mt-2 uppercase tracking-wide 
               text-center break-words max-w-[220px] leading-snug"
        >
          {name}
        </h2>
        <p className="text-white text-sm mb-3 text-center">{role}</p>


        {/* Member Image */}
        <div className="w-32 h-32 mb-4 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-2">
          {linkedin && (
            <a href={linkedin} target="_blank" className="text-white text-2xl hover:text-blue-400">
              <FaLinkedin />
            </a>
          )}
          {contact && (
            <a href={`tel:${contact}`} className="text-white text-2xl hover:text-green-400">
              <FaPhone />
            </a>
          )}
          {mail && (
            <a href={`mailto:${mail}`} className="text-white text-2xl hover:text-red-400">
              <FaEnvelope />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;