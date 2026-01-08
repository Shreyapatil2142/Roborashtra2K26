"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Star, Zap } from "lucide-react";
import { sponsors, tierConfig, Sponsor, TierConfig } from "../constants/sponsers";
import SidebarStrip from "@/app/components/SidebarStrip";
import Image from "next/image";
export type Tier = "platform" | "title" | "platinum" | "gold" | "silver";
import BecomeSponsor from "@/app/components/BecomeSponsor";

export default function Sponsors() {
  const [showSponsorForm, setShowSponsorForm] = useState<boolean>(false);
  useEffect(() => {

    AOS.init({ duration: 1000, once: true, easing: "ease-in-out", offset: -250 });
    AOS.refresh();
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
              src={`/sponsors/${sponsor.logo}`}
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
    <section className="px-6 py-25 relative overflow-auto flex-1 min-h-screen flex flex-col justify-start">
      <SidebarStrip />
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-12">
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-mokoto tracking-widest font-bold mb-6"
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
        {/* TITLE SPONSORS */}
        <div data-aos="fade-up" className="mb-20">
          <div className="flex items-center justify-center gap-4 mb-10">
            <Star className="h-6 w-6 text-[#ffc045]" />
            <h3 className="text-3xl font-bold text-[#ffc045] font-mono">
              {tierConfig.title.label}
            </h3>
            <Star className="h-6 w-6 text-[#ffc045]" />
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {sponsors.title.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
                config={tierConfig.title}
              />
            ))}
          </div>
        </div>

        {/* PLATINUM + GOLD */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20"
        >
          {/* Platinum */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Zap className="h-6 w-6 text-[#ffc045]" />
              <h3 className="text-2xl font-bold text-gray-300 font-mono">
                {tierConfig.platinum.label}
              </h3>
              <Zap className="h-6 w-6 text-[#ffc045]" />
            </div>

            <div className="flex justify-center gap-6 flex-wrap">
              {sponsors.platinum.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  sponsor={sponsor}
                  config={tierConfig.platinum}
                />
              ))}
            </div>
          </div>

          {/* Gold */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Star className="h-6 w-6 text-[#0a91ab]" />
              <h3 className="text-2xl font-bold text-[#ffc045] font-mono">
                {tierConfig.gold.label}
              </h3>
              <Star className="h-6 w-6 text-[#0a91ab]" />
            </div>

            <div className="flex justify-center gap-6 flex-wrap">
              {sponsors.gold.map((sponsor) => (
                <SponsorCard
                  key={sponsor.id}
                  sponsor={sponsor}
                  config={tierConfig.gold}
                />
              ))}
            </div>
          </div>
        </div>

        {/* PLATFORM SPONSORS */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Zap className="h-6 w-6 text-[#0a91ab]" />
            <h3 className="text-2xl font-bold text-gray-300 font-mono">
              {tierConfig.platform.label}
            </h3>
            <Zap className="h-6 w-6 text-[#0a91ab]" />
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            {sponsors.platform.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                sponsor={sponsor}
                config={tierConfig.platform}
              />
            ))}
          </div>
        </div>


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
              onClick={() => setShowSponsorForm(true)}
              className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] hover:from-[#0a91ab]/80 hover:to-[#ffc045]/80 text-white px-8 py-3 font-mono uppercase tracking-wider transition-all duration-300 rounded-lg"
            >
              Become a Sponsor
            </button>



          </div>
        </div>

        {/* Modal Popup */}
        {showSponsorForm && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center">

            {/* Blurred & Dark Overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowSponsorForm(false)}
            />

            {/* Popup Box */}
            <div className="relative w-[90%] max-w-3xl max-h-[90vh] overflow-auto bg-[#022333]/90 border-2 border-[#0a91ab] rounded-2xl shadow-xl p-6 z-[1000]">

              {/* Close Button */}
              <button
                onClick={() => setShowSponsorForm(false)}
                className="absolute top-8 right-3 text-white hover:text-[#ffc045] 
                   text-3xl md:text-4xl font-bold transition-all duration-200"
                aria-label="Close sponsor form"
              >
                ×
              </button>

              {/* Sponsor Form Component */}
              <BecomeSponsor />
            </div>

          </div>
        )}


      </div>
    </section>
  );
}
