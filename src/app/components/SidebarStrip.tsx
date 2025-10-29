"use client";

import { useState } from "react";
import Link from "next/link";
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
  Trophy,
} from "lucide-react";

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
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isExpanded = hovered || expanded;

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`hidden md:flex fixed left-25 top-1/2 -translate-y-1/2
                   bg-gradient-to-br from-[#0a91ab]/70 via-[#0a91ab]/40 to-[#0a91ab]/50
                   backdrop-blur-2xl border border-white/10 
                   shadow-[0_0_25px_rgba(0,140,255,0.2)] h-[85%]
                   rounded-3xl text-white flex-col justify-between items-center overflow-hidden group
                   transition-all duration-300 z-30
                   ${isExpanded ? "w-[230px]" : "w-[80px]"}`}
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
                    {/* Gradient underline */}
                    <span className="absolute left-0 lg:hidden block bottom-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full group-hover:w-full transition-all duration-300"></span>
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </aside>

      {/* MOBILE HAMBURGER MENU */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-3 bg-[#0a91ab]/80 rounded-xl border border-white/10 text-white shadow-lg backdrop-blur-xl"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-gradient-to-b from-[#0d1117]/95 via-[#111827]/95 to-[#1e293b]/95 backdrop-blur-2xl flex flex-col items-center justify-center">
          {menuItems.map((item, i) => (
            <div key={i} className="w-full text-center py-4">
              <Link
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="relative text-white text-2xl font-semibold tracking-wide hover:underline"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
