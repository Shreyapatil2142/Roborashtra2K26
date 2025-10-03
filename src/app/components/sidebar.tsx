"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Define buttons with labels + routes
const leftButtons = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const rightButtons = [
  { label: "Register", href: "/register" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Team", href: "/team" },
  { label: "FAQ", href: "/faq" },
  { label: "Live", href: "/live" },
];

export default function Sidebar() {
  return (
    <>
      {/* Left Sidebar */}
      <div className="absolute top-1/2 mt-20 -translate-y-1/2 left-20 flex flex-col gap-4">
        {leftButtons.map((btn, i) => (
          <Link href={btn.href} key={i}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-36 py-4 border-2 border-[#02b7ff] text-[#000000] 
                         rounded-3xl font-bold text-xl bg-black/50 overflow-hidden text-center"
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
          </Link>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="absolute top-1/2 -translate-y-1/2 right-20 flex flex-col gap-4">
        {rightButtons.map((btn, i) => (
          <Link href={btn.href} key={i}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-36 py-4 border-2 border-[#02b7ff] text-[#000000] 
                         rounded-3xl font-bold text-xl bg-black/50 overflow-hidden text-center"
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
          </Link>
        ))}
      </div>
    </>
  );
}
