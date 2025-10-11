"use client";
import GlareHover from "./GlareHover";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

// Define buttons with labels + routes
const leftButtons = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/glimps" },
  { label: "Contact", href: "/contact" },
];

const rightButtons = [
  { label: "Participants", href: "/pastparticipants" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Team", href: "/team" },
  { label: "FAQ", href: "/faq" },
  { label: "Live", href: "/live" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const renderButton = (btn: { label: string; href: string }, i: number) => (
    <Link href={btn.href} key={i}>
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.9}
        glareAngle={-30}
        glareSize={200}
        transitionDuration={1000}
        playOnce={false}
        className="inline-block bg-transparent"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-32 sm:w-36 py-3 sm:py-4 border-2 sm:border-4 border-[#02CCFF] text-white 
                   rounded-2xl sm:rounded-3xl font-bold text-lg sm:text-xl bg-black/50 overflow-hidden text-center"
        >
          {/* Shine effect */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#02CCFF]/30 to-transparent"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <span className="relative z-10">{btn.label}</span>
        </motion.button>
      </GlareHover>
    </Link>
  );

  return (
    <>
      {/* ===== DESKTOP SIDE NAV ===== */}
      <div className="hidden lg:flex">
        {/* Left Sidebar */}
        <div className="absolute top-2/3 -translate-y-1/2 left-6 xl:left-20 flex flex-col gap-4">
          {leftButtons.map(renderButton)}
        </div>

        {/* Right Sidebar */}
        <div className="absolute top-2/3 -translate-y-1/2 right-6 xl:right-20 flex flex-col gap-4">
          {rightButtons.map(renderButton)}
        </div>
      </div>

      
    </>
  );
}
