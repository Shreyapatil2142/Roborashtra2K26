"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Home,
  Info,
  Calendar,
  FileImage,
  Phone,
  HeartHandshake,
  Users,
  HelpCircle,
  Radio,
  Menu,
  X,
  Trophy,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", icon: <Home size={18} />, href: "/" },
  { label: "About", icon: <Info size={18} />, href: "/about" },
  { label: "Events", icon: <Calendar size={18} />, href: "/events" },
  { label: "Gallery", icon: <FileImage size={18} />, href: "/glimps" },
  { label: "Contact", icon: <Phone size={18} />, href: "/contact" },
  { label: "Winners", icon: <Trophy size={18} />, href: "/pastparticipants" },
  { label: "Sponsors", icon: <HeartHandshake size={18} />, href: "/sponsors" },
  { label: "Team", icon: <Users size={18} />, href: "/team" },
  { label: "FAQ", icon: <HelpCircle size={18} />, href: "/faq" },
  { label: "Live", icon: <Radio size={18} />, href: "/live" },
];

export default function SidebarStrip() {
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isExpanded = hovered || false;

  return (
    <>
      {/* ===== DESKTOP SIDEBAR ===== */}
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`hidden md:flex fixed left-1/16 top-1/2 -translate-y-1/2
                   bg-gradient-to-br from-[#0a91ab]/70 via-[#0a91ab]/40 to-[#0a91ab]/50
                   backdrop-blur-2xl border border-white/10 
                   shadow-[0_0_25px_rgba(0,140,255,0.2)] h-[90%]
                   rounded-3xl text-white flex-col justify-between items-center overflow-hidden group
                   transition-all duration-300 z-30 
                   ${isExpanded ? "w-[230px]" : "w-[75px]"}`}
      >
        <div className="flex flex-col justify-center h-full gap-3 px-4 my-4">
          {menuItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <div
                className="relative flex items-center gap-3 px-4 py-3 cursor-pointer
                           rounded-xl transition-all duration-300 justify-start hover:bg-[#0ea5e91f]
                           hover:shadow-[0_0_10px_rgba(14,165,233,0.3)]"
              >
                <div>{item.icon}</div>

                {isExpanded && (
                  <span className="text-sm font-medium relative">
                    {item.label}
                    <span className="absolute left-0 lg:hidden block bottom-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full group-hover:w-full transition-all duration-300"></span>
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </aside>

      {/* ===== MOBILE MENU BUTTON ===== */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px #0a91ab",
          }}
          className="p-3 bg-transparent rounded-xl border border-[#0a91ab]/80 text-white shadow-lg backdrop-blur-xl"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 180, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 180, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -180, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col justify-center items-center"
          >
            <nav className="flex flex-col gap-4 text-white text-center">
              {menuItems.map((item, i) => (
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
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
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
                      <span className="group-hover:animate-pulse flex items-center justify-center gap-2">
                        {item.icon}
                        {item.label}
                      </span>
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
