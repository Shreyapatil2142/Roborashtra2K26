import Navbar from "@/app/components/navbar";
import { SocialMediaButton } from "@/app/components/social";

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
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Frame Overlay */}
      <img
        src="/frame.png"
        alt="frame"
        className="absolute w-full h-full overflow-hidden pointer-events-none"
      />

      {/* Top Center Title */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 ">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent font-bold text-center tracking-widest">
          Roborastra 2k26
        </h1>
      </div>
      <div className="absolute top-50 left-1/2 -translate-x-1/2 ">
        <span className="block text-xl text-[#02ccffc2] font-mono tracking-widest mt-2 ml-190">
          by <span className="text-2xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-[#ffffff]">RoboHawk</span>
        </span>
      </div>


      {/* Top Right Logos */}
      <div className="absolute top-15 left-40 flex gap-4">
        <img src="/PCCOER.png" alt="logo1" className="h-30 w-auto" />
        <img src="/roborashtra.png" alt="logo2" className="h-30 w-auto" />
      </div>

      {/* Navbar (sidebars) */}
      <Navbar />

      {/* Social Media Buttons */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6 text-xl sm:text-2xl text-yellow-400">
        <SocialMediaButton><FaFacebook /></SocialMediaButton>
        <SocialMediaButton><FaTwitter /></SocialMediaButton>
        <SocialMediaButton><FaInstagram /></SocialMediaButton>
        <SocialMediaButton><FaLinkedin /></SocialMediaButton>
        <SocialMediaButton><FaYoutube /></SocialMediaButton>
      </div>

    </div>
  );
}
