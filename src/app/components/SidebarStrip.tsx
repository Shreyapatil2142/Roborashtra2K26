"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Home,
  Info,
  Calendar,
  FileImage,
  Phone,
  UserPlus,
  HeartHandshake,
  Users,
  HelpCircle,
  Radio,
  Menu,
  X,
} from "lucide-react";

const menuItems = [
  { label: "Home", icon: <Home size={18} />, href: "/" },
  { label: "About", icon: <Info size={18} />, href: "/about" },
  { label: "Events", icon: <Calendar size={18} />, href: "/events" },
  { label: "Gallery", icon: <FileImage  size={18} />, href: "/glimps" },
  { label: "Contact", icon: <Phone size={18} />, href: "/contact" },
  { label: "Register", icon: <UserPlus size={18} />, href: "/pastparticipants" },
  { label: "Sponsors", icon: <HeartHandshake size={18} />, href: "/sponsors" },
  { label: "Team", icon: <Users size={18} />, href: "/team" },
  { label: "FAQ", icon: <HelpCircle size={18} />, href: "/faq" },
  { label: "Live", icon: <Radio size={18} />, href: "/live" },
];

export default function SidebarStrip() {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isExpanded = hovered || expanded;

  // Menu item animation (staggered)
 const itemVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <motion.aside
        initial={{ width: 80 }}
        animate={{ width: isExpanded ? 230 : 80 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="hidden md:flex fixed left-15 top-1/2 -translate-y-1/2 z-10
                   bg-gradient-to-br from-[#0a91ab]/70 via-[#0a91ab]/40 to-[#0a91ab]/50
                   backdrop-blur-2xl border border-white/10 
                   shadow-[0_0_25px_rgba(0,140,255,0.2)]
                   rounded-3xl text-white flex-col justify-between overflow-hidden group"
      >
        <div className="flex flex-col gap-3 p-4 my-10">
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-sm px-4 select-none"
          >
            MENU
          </motion.span>

          {menuItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(14,165,233,0.15)",
                  boxShadow: "0 0 10px rgba(14,165,233,0.3)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative flex items-center gap-3 px-4 py-3 cursor-pointer
                           rounded-xl transition-all duration-300 justify-start
                          `}
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item.icon}
                </motion.div>

                {isExpanded && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    className="text-sm font-medium relative"
                  >
                    {item.label}
                    {/* Gradient underline */}
                    <motion.span
                      className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                )}
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.aside>

      {/* MOBILE HAMBURGER MENU */}
      <div className="md:hidden fixed top-6 left-6 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-3 bg-[#0a91ab]/80 rounded-xl border border-white/10 text-white shadow-lg backdrop-blur-xl"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-gradient-to-b from-[#0d1117]/95 via-[#111827]/95 to-[#1e293b]/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            {menuItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: -20 }}
                className="w-full text-center py-4"
              >
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="relative text-white text-2xl font-semibold tracking-wide"
                >
                  {item.label}
                  {/* Gradient underline on hover */}
                  <motion.span
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[3px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full"
                    whileHover={{ width: "60%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
