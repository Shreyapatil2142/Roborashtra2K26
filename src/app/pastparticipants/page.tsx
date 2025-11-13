"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search, X } from "lucide-react";
import Image from "next/image";
import SidebarStrip from "@/app/components/SidebarStrip";
import { participants, Participant } from "@/app/constants/participants";

export default function ParticipantsSection() {
  const [search, setSearch] = useState("");
  const [competition, setCompetition] = useState<"YantroUstav" | "ResQlympic">(
    "YantroUstav"
  );
  const [category, setCategory] = useState<"Junior" | "Senior">("Junior");
  const [selected, setSelected] = useState<Participant | null>(null);

  // ✅ Compute filtered participants
  const filtered = participants.filter((p) => {
    if (competition === "ResQlympic") {
      // ResQlympic has no categories
      return (
        p.competition === "ResQlympic" &&
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    } else {
      // YantroUstav has Junior / Senior
      return (
        p.competition === "YantroUstav" &&
        p.category === category &&
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start py-25 px-10 bg-transparent overflow-x-hidden">
      <SidebarStrip />
      <div className="max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-mokoto tracking-widest font-bold mb-6">
            <span className="text-white">2K25 Winner_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              TEAMS
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Meet the winning teams and finalists of past editions
          </p>
        </div>

        {/* Competition Selection */}
        <div className="flex justify-center gap-6 mb-6">
          {["YantroUstav", "ResQlympic"].map((comp) => (
            <button
              key={comp}
              onClick={() => setCompetition(comp as "YantroUstav" | "ResQlympic")}
              className={`px-6 py-2 rounded-md font-mono font-bold transition-all ${
                competition === comp
                  ? "bg-[#ffc045] text-black scale-105"
                  : "bg-[#022333]/50 border border-gray-600 text-gray-300 hover:bg-[#0a91ab]/30"
              }`}
            >
              {comp}
            </button>
          ))}
        </div>

        {/* Category Toggles (only for YantroUstav) */}
        {competition === "YantroUstav" && (
          <div className="flex justify-center gap-6 mb-10">
            {["Junior", "Senior"].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c as "Junior" | "Senior")}
                className={`px-6 py-2 rounded-md font-mono font-bold transition-all ${
                  category === c
                    ? "bg-[#0a91ab] text-white scale-105"
                    : "bg-[#022333]/50 border border-gray-600 text-gray-300 hover:bg-[#0a91ab]/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        {/* Search */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search teams..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-[#022333]/50 border border-gray-600 text-white focus:border-[#0a91ab] focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map((p, index) => (
              <motion.div
                key={p.id}
                className="relative group p-6 border-2 rounded-xl backdrop-blur-sm overflow-hidden bg-[#022333]/60 cursor-pointer"
                style={{ borderColor: p.color + "60" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelected(p)}
              >
                {/* Image */}
                <div
                  className="w-full h-48 mb-4 overflow-hidden rounded-lg border-4"
                  style={{ borderColor: p.color }}
                >
                  <Image
                    width={400}
                    height={400}
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Team Name */}
                <h3 className="text-xl font-bold text-white text-center mb-1">
                  {p.name}
                </h3>

                {/* Position */}
                <p
                  className="text-sm text-center font-mono mb-1"
                  style={{ color: p.color }}
                >
                  {p.position}
                </p>

                {/* College */}
                <p className="text-xs text-gray-400 text-center mb-4">
                  {p.college}
                </p>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-gray-400 col-span-full">
              No teams found for this selection.
            </p>
          )}
        </div>
      </div>

      {/* Modal Popup */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center px-5 justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-[#022333] p-6 rounded-xl max-w-lg w-full relative border-2"
            style={{ borderColor: selected.color }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div
              className="w-full h-56 mb-4 overflow-hidden rounded-lg border-4"
              style={{ borderColor: selected.color }}
            >
              <Image
                width={500}
                height={500}
                src={selected.image}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <h3 className="text-2xl font-bold text-white text-center mb-2">
              {selected.name}
            </h3>
            <p
              className="text-lg text-center font-mono mb-2"
              style={{ color: selected.color }}
            >
              {selected.position}
            </p>
            <p className="text-sm text-gray-300 text-center mb-2">
              {selected.college}
            </p>
            <p className="text-xs text-gray-400 text-center">
              {selected.competition}
              {selected.category ? ` - ${selected.category}` : ""}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
