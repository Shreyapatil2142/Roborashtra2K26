import Navbar from "@/app/components/navbar";
import { SocialMediaButton } from "@/app/components/social";
import Image from "next/image";

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
      {/* Video Background */}
      <div className="relative w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
        <source src="/bg.mp4" type="video/mp4" />
        </video>
        {/* <div className="absolute inset-0 backdrop-blur-sm"></div> */}
      </div>


      {/* Frame Overlay */}
      <Image
        src="/frame.png"
        alt="frame"
        fill
        priority
        className="absolute object-cover pointer-events-none"
      />

      {/* Top Center Title */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 ">
        <h1 className="text-4xl bg-white/20 font-mokoto sm:text-6xl md:text-7xl lg:text-7xl bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent text-center tracking-widest">
          Roborastra 2k26
        </h1>

      </div>
      <div className="absolute top-30 left-1/2 -translate-x-1/2 ">
        <span className="block text-xl text-[#02ccffc2] font-mortend tracking-widest mt-5 ml-180">
          by{" "}
          <span className="text-2xl font-mortend sm:text-xl md:text-2xl lg:text-4xl font-bold text-[#ffffff]">
            RoboHawk
          </span>
        </span>
      </div>

      {/* Top Right Logos */}
      <div className="absolute top-15 left-25 flex gap-4">
        <Image
          src="/PCCOER.png"
          alt="logo1"
          width={120}
          height={120}
          priority
          className="h-25 w-auto"
        />
        <Image
          src="/roborashtra.png"
          alt="logo2"
          width={120}
          height={120}
          priority
          className="h-25 w-auto"
        />
      </div>

      {/* Navbar (sidebars) */}
      <Navbar />

      {/* Social Media Buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6 text-xl sm:text-2xl text-yellow-400">
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
