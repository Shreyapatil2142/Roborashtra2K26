// export default function Sponsors() {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Sponsors</h1>
//       <p className="text-lg text-gray-700">
//         This page can showcase highlights, photos, or a quick glimpse of your work.
//       </p>
//     </div>
//   );
// }

"use client"
import { motion } from "framer-motion";
import { Building2, Star, Zap } from "lucide-react";
import { sponsors, tierConfig, Sponsor, Tier, TierConfig } from "../constants/sponsers";


export default function Sponsors() {
 
interface SponsorCardProps {
  sponsor: Sponsor;
  config: TierConfig;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ sponsor, config }) => (
    <motion.div
      className={`${config.size} bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-transparent hover:border-[${config.color}]/60 relative group cursor-pointer overflow-hidden`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5,
        z: 50
      }}
    >
      {/* Rotating Background Gears */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="20" fill="none" stroke={config.color} strokeWidth="1" />
          <circle cx="50" cy="50" r="15" fill="none" stroke={config.color} strokeWidth="0.5" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="30"
              x2="50"
              y2="35"
              stroke={config.color}
              strokeWidth="2"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Neon Frame Effect */}
      <motion.div
        className={`absolute inset-0 border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{ borderColor: config.color }}
        animate={{ 
          boxShadow: [
            `0 0 5px ${config.color}40`,
            `0 0 20px ${config.color}80`,
            `0 0 5px ${config.color}40`
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Holographic Corners */}
      <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: config.color }} />
      <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: config.color }} />
      <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: config.color }} />
      <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} style={{ borderColor: config.color }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center p-4">
        <div className="text-center">
          <motion.div 
            className={`${config.textSize} font-bold font-mono mb-2 group-hover:scale-110 transition-transform duration-300`}
            style={{ color: config.color }}
            animate={{ 
              textShadow: [
                `0 0 5px ${config.color}40`,
                `0 0 15px ${config.color}80`,
                `0 0 5px ${config.color}40`
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {sponsor.logo}
          </motion.div>
          <div className="text-xs text-gray-400 font-mono">
            {sponsor.name}
          </div>
        </div>
      </div>

      {/* Pulsing Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle, ${config.color}40 0%, transparent 70%)` }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60"
          style={{ 
            backgroundColor: config.color,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </motion.div>
  );

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Animated Gear Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="60" fill="none" stroke="#0a91ab" strokeWidth="2" />
            <circle cx="100" cy="100" r="40" fill="none" stroke="#0a91ab" strokeWidth="1" />
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="40"
                x2="100"
                y2="50"
                stroke="#0a91ab"
                strokeWidth="4"
                transform={`rotate(${i * 30} 100 100)`}
              />
            ))}
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="50" fill="none" stroke="#ffc045" strokeWidth="2" />
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="100"
                y1="50"
                x2="100"
                y2="60"
                stroke="#ffc045"
                strokeWidth="3"
                transform={`rotate(${i * 45} 100 100)`}
              />
            ))}
          </svg>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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

        {/* Title Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Star className="h-6 w-6 text-[#ffc045]" />
            <h3 className="text-2xl font-bold text-[#ffc045] font-mono">
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
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <Zap className="h-5 w-5 text-gray-300" />
            <h3 className="text-xl font-bold text-gray-300 font-mono">
              {tierConfig.platinum.label}
            </h3>
            <Zap className="h-5 w-5 text-gray-300" />
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
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg font-bold text-[#0a91ab] font-mono text-center mb-8">
            {tierConfig.gold.label}
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {sponsors.gold.map((sponsor) => (
              <SponsorCard 
                key={sponsor.id} 
                sponsor={sponsor} 
                config={tierConfig.gold}
              />
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-[#065471] font-mono text-center mb-8">
            {tierConfig.silver.label}
          </h3>
          <div className="flex justify-center gap-3 flex-wrap">
            {sponsors.silver.map((sponsor) => (
              <SponsorCard 
                key={sponsor.id} 
                sponsor={sponsor} 
                config={tierConfig.silver}
              />
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-[#065471]/30 to-[#022333]/50 backdrop-blur-sm border-2 border-[#0a91ab]/40 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              JOIN OUR MISSION
            </h3>
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

      {/* Floating Circuit Elements */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#0a91ab] opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}
    </section>
  );
}