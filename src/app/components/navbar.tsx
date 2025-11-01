"use client";

import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
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

// ===== Variants (TypeScript-safe) =====
const menuItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.3,
      ease: ["easeInOut"],
    },
  }),
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const renderButton = (
    btn: { label: string; href: string },
    i: number,
    isMobile = false
  ) => (
    <Link href={btn.href} key={i}>
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className={`relative w-32 sm:w-40 py-3 sm:py-4
                  text-highlight font-bold text-lg sm:text-xl uppercase tracking-wider
                  bg-[#00151a]/70 border-2 border-[#00eaff]/60
                  backdrop-blur-md overflow-hidden transition-all duration-500 
                  group 
                  rounded-none
                  before:absolute before:content-[''] before:w-5 before:h-5 before:bg-[#00151a]
                  before:top-0 before:right-0 before:clip-path-[polygon(100%_0,100%_100%,0_0)]
                  after:absolute after:content-[''] after:w-5 after:h-5 after:bg-[#00151a]
                  after:bottom-0 after:left-0 after:clip-path-[polygon(0_100%,0_0,100%_100%)]
                  ${isMobile ? "border-none text-2xl bg-transparent" : ""}`}
        animate={{
          boxShadow: ["0 0 0px #00eaff", "0 0 10px #00eaff", "0 0 0px #00eaff"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}

      >
        {/* ⚡ Animated neon border gradient */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-[#00eaff] via-[#00ffd5] to-[#00eaff]
                   opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 200%" }}
        />

        {/* ⚙️ Inner holographic line (moves diagonally) */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(45deg, transparent 45%, rgba(0,255,234,0.3) 50%, transparent 55%)",
            backgroundSize: "300% 300%",
          }}
        />

        {/* 💠 Neon pulse outline */}
        <motion.div
          className="absolute inset-0 border-2 border-[#00eaff]/60 opacity-0 group-hover:opacity-100 rounded-none"
          whileHover={{
            boxShadow:
              "0 0 15px #00eaff, 0 0 25px #00ffd5, 0 0 40px rgba(0,255,234,0.6)",
            transition: { duration: 0.5 },
          }}
        />

        {/* 🧠 Button Text */}
        <span className="relative z-10 group-hover:text-[#00eaff] transition-colors duration-300">
          {btn.label}
        </span>

        {/* 🔋 Hover Background Fill Animation */}
        <motion.div
          className="absolute inset-0 bg-[#00ffd5] opacity-0 group-hover:opacity-90 transition-opacity duration-500"
          initial={{ scaleY: 0 }}
          whileHover={{
            scaleY: 1,
            originY: 0,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
        />
      </motion.button>
    </Link>
  );


  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <div className="hidden lg:flex z-10">
        <div className="absolute top-1/2 -translate-y-1/2 left-15 xl:left-20 flex flex-col gap-4 z-20">
          {leftButtons.map((btn, i) => renderButton(btn, i))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-15 xl:right-20 flex flex-col gap-4 z-20">
          {rightButtons.map((btn, i) => renderButton(btn, i))}
        </div>
      </div>

      {/* ===== MOBILE MENU ICON ===== */}
      <div className="lg:hidden absolute top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-[#0a91ab]/80 rounded-xl border border-white/10 text-white shadow-lg backdrop-blur-xl"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md flex flex-col justify-center items-center gap-6"
          >
            {/* Left Buttons */}
            <div className="flex flex-col gap-6 items-center">
              {leftButtons.map((btn, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuItemVariants}
                >
                  {renderButton(btn, i, true)}
                </motion.div>
              ))}
            </div>

            {/* Right Buttons */}
            <div className="flex flex-col gap-6 items-center mt-6">
              {rightButtons.map((btn, i) => (
                <motion.div
                  key={i}
                  custom={i + leftButtons.length}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuItemVariants}
                >
                  {renderButton(btn, i, true)}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
