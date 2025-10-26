"use client";
import React from "react";
import { motion } from "framer-motion";
import { Building2, Star, Zap } from "lucide-react";
import { sponsors, tierConfig, Sponsor, TierConfig } from "../constants/sponsers";

import Frame from "../components/frame";
import SidebarStrip from "@/app/components/SidebarStrip";

export type Tier = "title" | "platinum" | "gold" | "silver";

export default function Sponsors() {
  

  interface SponsorCardProps {
    sponsor: Sponsor;
    config: TierConfig;
  }

  const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, config }) => (
    <motion.div
      className={`${config.size} bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 relative group cursor-pointer overflow-hidden`}
      style={{ borderColor: "transparent" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
    >
      {/* Neon Frame Effect */}
      <motion.div
        className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderColor: config.color }}
        animate={{
          boxShadow: [
            `0 0 5px ${config.color}40`,
            `0 0 20px ${config.color}80`,
            `0 0 5px ${config.color}40`,
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Holographic Corners */}
      {["top-2 left-2 border-t-2 border-l-2", "top-2 right-2 border-t-2 border-r-2", "bottom-2 left-2 border-b-2 border-l-2", "bottom-2 right-2 border-b-2 border-r-2"].map((cls, i) => (
        <div
          key={i}
          className={`absolute ${cls} w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{ borderColor: config.color }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center p-4">
    <SidebarStrip />
        <div className="text-center">
          <motion.div
            className={`${config.textSize} font-bold font-mono mb-2 group-hover:scale-110 transition-transform duration-300`}
            style={{ color: config.color }}
            animate={{
              textShadow: [
                `0 0 5px ${config.color}40`,
                `0 0 15px ${config.color}80`,
                `0 0 5px ${config.color}40`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {sponsor.logo}
          </motion.div>
          <div className="text-xs text-gray-400 font-mono">{sponsor.name}</div>
        </div>
      </div>

      {/* Pulsing Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle, ${config.color}40 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

    </motion.div>
  );

  return (
    <section className="py-24 px-6 relative overflow-auto flex-1 h-screen flex flex-col items-center justify-start">
      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#0a91ab]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <Building2 className="h-8 w-8 text-[#0a91ab]" />
            <motion.div
              className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#0a91ab]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-mono">
            <span className="text-white">POWER_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              SPONSORS
            </span>
          </h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            &gt; Powered by the most innovative tech companies in the industry
          </motion.p>
        </motion.div>

        {/* Sponsor Tiers */}
        {[
          { tier: "title", icon: Star, config: tierConfig.title },
          { tier: "platinum", icon: Zap, config: tierConfig.platinum },
          { tier: "gold", icon: null, config: tierConfig.gold },
          { tier: "silver", icon: null, config: tierConfig.silver },
        ].map(({ tier, icon, config }, idx) => (
          <motion.div
            key={tier}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * (idx + 1) }}
            viewport={{ once: true }}
            className="mb-16"
          >
            {icon && (
              <div className="flex items-center justify-center gap-4 mb-8">
                {React.createElement(icon, { className: `h-6 w-6 text-[#ffc045]` })}
                <h3 className={`text-2xl font-bold ${tier === "title" ? "text-[#ffc045]" : "text-gray-300"} font-mono`}>
                  {config.label}
                </h3>
                {React.createElement(icon, { className: `h-6 w-6 text-[#ffc045]` })}
              </div>
            )}
            {!icon && (
              <h3 className={`text-lg font-bold font-mono text-center mb-8 ${tier === "gold" ? "text-[#0a91ab]" : "text-[#065471]"}`}>
                {config.label}
              </h3>
            )}

            <div className={`flex justify-center gap-${tier === "silver" ? 3 : tier === "gold" ? 4 : 6} flex-wrap`}>
              {sponsors[tier as Tier].map((sponsor: Sponsor) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} config={config} />
              ))}
            </div>
          </motion.div>
        ))}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">JOIN OUR MISSION</h3>
            <p className="text-gray-300 mb-6">
              Partner with us to shape the future of robotics and AI innovation
            </p>
            <motion.button
              className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] hover:from-[#0a91ab]/80 hover:to-[#ffc045]/80 text-white px-8 py-3 font-mono uppercase tracking-wider transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Become a Sponsor
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
