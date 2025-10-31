"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star } from "lucide-react";
import { sponsors, tierConfig, Sponsor, TierConfig } from "../constants/sponsers";
import SidebarStrip from "@/app/components/SidebarStrip";
import Image from "next/image";
export type Tier = "title" | "platinum" | "gold" | "silver";

export default function Sponsors() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  interface SponsorCardProps {
    sponsor: Sponsor;
    config: TierConfig;
  }

  const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, config }) => (
    <div
      data-aos="zoom-in"
      data-aos-delay="100"
      className={`${config.size} bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 relative group cursor-pointer overflow-hidden`}
      style={{ borderColor: "transparent" }}
    >
      {/* Neon Frame Effect */}
      <div
        className="absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ borderColor: config.color }}
      />

      {/* Holographic Corners */}
      {[
        "top-2 left-2 border-t-2 border-l-2",
        "top-2 right-2 border-t-2 border-r-2",
        "bottom-2 left-2 border-b-2 border-l-2",
        "bottom-2 right-2 border-b-2 border-r-2",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute ${cls} w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{ borderColor: config.color }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center p-4">
        <div className="text-center flex flex-col gap-2 items-center justify-center">
          <div>
            {/* {sponsor.logo} */}
            <Image
              src={`/${sponsor.logo}`}
              alt={sponsor.name}
              width={512}
              height={512}
              className="h-auto max-h-36 object-contain hover:scale-115 transition-transform duration-500"
            />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 text-xs text-gray-400 font-mono">{sponsor.name}</div>
          </div>
        </div>
      </div>

      {/* Pulsing Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle, ${config.color}40 0%, transparent 70%)`,
        }}
      />
    </div>
  );

  return (
    <section className="py-10 px-6 relative overflow-auto flex-1 max-h-screen flex flex-col justify-start">
      <SidebarStrip />
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-5xl font-mokoto tracking-widest font-bold mb-4"
          >
            <span className="text-white">POWER_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              SPONSORS
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Powered by the most innovative tech companies in the industry
          </p>
        </div>

        {/* Sponsor Tiers */}
        {[
          { tier: "title", icon: Star, config: tierConfig.title },
          // { tier: "platinum", icon: Zap, config: tierConfig.platinum },
          // { tier: "gold", icon: null, config: tierConfig.gold },
          // { tier: "silver", icon: null, config: tierConfig.silver },
        ].map(({ tier, icon, config }, idx) => (
          <div
            key={tier}
            data-aos="fade-up"
            data-aos-delay={200 * (idx + 1)}
            className="mb-16"
          >
            {icon && (
              <div
                data-aos="zoom-in"
                className="flex items-center justify-center gap-4 mb-8"
              >
                {React.createElement(icon, { className: `h-6 w-6 text-[#ffc045]` })}
                <h3
                  className={`text-2xl font-bold ${
                    tier === "title" ? "text-[#ffc045]" : "text-gray-300"
                  } font-mono`}
                >
                  {config.label}
                </h3>
                {React.createElement(icon, { className: `h-6 w-6 text-[#ffc045]` })}
              </div>
            )}
            {!icon && (
              <h3
                className={`text-lg font-bold font-mono text-center mb-8 ${
                  tier === "gold" ? "text-[#0a91ab]" : "text-[#065471]"
                }`}
              >
                {config.label}
              </h3>
            )}

            <div
              className={`flex justify-center gap-${
                tier === "silver" ? 3 : tier === "gold" ? 4 : 6
              } flex-wrap`}
            >
              {sponsors[tier as Tier].map((sponsor: Sponsor) => (
                <SponsorCard key={sponsor.id} sponsor={sponsor} config={config} />
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div data-aos="fade-up" data-aos-delay="400" className="text-center mt-16">
          <div className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-8 max-w-2xl mx-auto">
            <h3
              className="text-2xl font-bold text-white mb-4 font-mono"
            >
              JOIN OUR MISSION
            </h3>
            <p
              className="text-gray-300 mb-6"
            >
              Partner with us to shape the future of robotics and AI innovation
            </p>
            <button
              className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] hover:from-[#0a91ab]/80 hover:to-[#ffc045]/80 text-white px-8 py-3 font-mono uppercase tracking-wider transition-all duration-300"
            >
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
