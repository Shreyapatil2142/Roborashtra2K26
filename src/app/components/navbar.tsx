"use client";

import GlareHover from "./GlareHover";
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
  { label: "Participants", href: "/pastparticipants" },
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
      ease: ["easeInOut"], // ✅ Correct TS type (array)
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
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.9}
        glareAngle={-30}
        glareSize={200}
        transitionDuration={1000}
        playOnce={false}
        className={`inline-block ${isMobile ? "" : "bg-transparent"}`}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`relative w-28 sm:w-36 py-3 sm:py-4 border-2 sm:border-4 border-[#02CCFF] text-white 
                     rounded-lg font-bold text-lg sm:text-xl overflow-hidden text-center
                     ${isMobile ? "bg-transparent border-none text-2xl sm:text-xl" : "bg-black/50"}`}
        >
          {!isMobile && (
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#02CCFF]/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}
          <span className="relative z-10">{btn.label}</span>
        </motion.button>
      </GlareHover>
    </Link>
  );

  return (
    <>
      {/* ===== DESKTOP NAVBAR ===== */}
      <div className="hidden lg:flex">
        <div className="absolute top-1/2 -translate-y-1/2 left-15 xl:left-20 flex flex-col gap-4 z-10">
          {leftButtons.map((btn, i) => renderButton(btn, i))}
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-15 xl:right-20 flex flex-col gap-4 z-10">
          {rightButtons.map((btn, i) => renderButton(btn, i))}
        </div>
      </div>

      {/* ===== MOBILE MENU ICON ===== */}
      <div className="lg:hidden absolute top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
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
