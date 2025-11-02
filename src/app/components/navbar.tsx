"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

// ===== Buttons =====
const leftButtons = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/glimps" },
  { label: "Contact", href: "/contact" },
];

const rightButtons = [
  { label: "Winners", href: "/pastparticipants" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Team", href: "/team" },
  { label: "FAQ", href: "/faq" },
  { label: "Live", href: "/live" },
];

const NeonButton = ({
  label,
  href,
  delay = 0,
}: {
  label: string;
  href: string;
  delay?: number;
}) => {
  return (
    <Link href={href}>
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.3 }}
        whileHover={{ scale: 1.08 }}
        className="relative w-52 h-16 text-xl font-bold tracking-widest bg-transparent border-none outline-none overflow-hidden group"
      >
        {/* ===== Label ===== */}
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-highlight uppercase z-20 select-none">
          {label}
        </h1>

        {/* ===== Rotating Gradient Border ===== */}
        <div
          className="
            absolute inset-0 rounded-[40%_0] p-[3px] 
            bg-gradient-to-r from-cyan-500 via-blue-400 to-indigo-500
            animate-border-spin
            group-hover:animate-border-spin-fast
          "
        >
          <div className="h-full w-full rounded-[40%_0] bg-black"></div>
        </div>

        {/* ===== Inner Glow ===== */}
        <motion.div
          className="absolute inset-0 rounded-[40%_0] border-[3px] border-[#0a91ab] shadow-[inset_0_0_20px_#0a91ab] transition-all duration-500"
          whileHover={{
            borderColor: "#ffc045",
            boxShadow: "inset 0 0 40px #ffc045, 0 0 10px #ffc045",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* ===== Sweep Light ===== */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 animate-sweep transition-opacity duration-700 rounded-[40%_0]" />
      </motion.button>
    </Link>
  );
};



// ===== Main Navbar Component =====
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <div className="hidden lg:flex z-10">
        <div className="absolute top-1/2 -translate-y-1/2 left-16 xl:left-24 flex flex-col gap-4 z-20">
          {leftButtons.map((btn, i) => (
            <NeonButton key={i} {...btn} delay={i * 0.1} />
          ))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-16 xl:right-24 flex flex-col gap-4 z-20">
          {rightButtons.map((btn, i) => (
            <NeonButton key={i} {...btn} delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* ===== MOBILE MENU BUTTON ===== */}
      <div className="lg:hidden absolute top-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px #0a91ab",
          }}
          className="p-3 bg-transparent rounded-xl border border-[#0a91ab]/80 text-white shadow-lg backdrop-blur-xl">
            
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <FiX size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <FiMenu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-4 text-white text-center space-y-[4px]">
              {[...leftButtons, ...rightButtons].map((btn, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={btn.href}
                    onClick={() => setIsOpen(false)}
                    className="relative block font-semibold text-[5vw] tracking-[0.08em]
                         hover:text-white transition-all duration-500
                         py-2 px-6 group overflow-hidden font-sans"
                  >
                    {/* Underline Glow */}
                    <span className="absolute bottom-1 left-6 w-[calc(100%-3rem)] h-0.5
                               bg-gradient-to-r from-blue-400/60 via-cyan-400/60 to-purple-400/60
                               transition-all duration-500
                               group-hover:from-blue-300 group-hover:via-cyan-300 group-hover:to-purple-300
                               group-hover:h-1 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

                    {/* Text Glow + Flicker */}
                    <span className="relative inline-block transition-all duration-500
                               group-hover:scale-110 group-hover:text-cyan-200
                               group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.9)]">
                      <span className="group-hover:animate-pulse">{btn.label}</span>
                    </span>

                    {/* Light Sweep */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                               transform -translate-x-full group-hover:translate-x-full
                               transition-transform duration-700 ease-out rotate-12" />
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
