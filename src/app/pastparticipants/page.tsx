"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Search, X } from "lucide-react";
import Image from "next/image";
import SidebarStrip from "@/app/components/SidebarStrip";
interface Participant {
  id: number;
  name: string;
  position: string;
  college: string;
  image: string;
  color: string;
  category: "Junior" | "Senior";
  competition: "Yantrostav" | "Resqulympic";
}

const participants: Participant[] = [
  // Junior - Yantrostav
  {
    id: 1,
    name: "Team Innovators",
    position: "1st Place",
    college: "PCCoER Pune",
    image: "/images/team-innovators.jpg",
    color: "#0a91ab",
    category: "Junior",
    competition: "Yantrostav",
  },
  {
    id: 2,
    name: "Team Visionaries",
    position: "2nd Place",
    college: "SPPU",
    image: "/images/team-visionaries.jpg",
    color: "#ffc045",
    category: "Junior",
    competition: "Yantrostav",
  },
  {
    id: 3,
    name: "Team Pioneers",
    position: "3rd Place",
    college: "DY Patil Pune",
    image: "/images/team-pioneers.jpg",
    color: "#ff5733",
    category: "Junior",
    competition: "Yantrostav",
  },

  // Junior - Resqulympic
  {
    id: 4,
    name: "Team Codemasters",
    position: "1st Place",
    college: "MIT Pune",
    image: "/images/team-codemasters.jpg",
    color: "#0a91ab",
    category: "Junior",
    competition: "Resqulympic",
  },
  {
    id: 5,
    name: "Team Futurists",
    position: "2nd Place",
    college: "COEP Pune",
    image: "/images/team-futurists.jpg",
    color: "#ffc045",
    category: "Junior",
    competition: "Resqulympic",
  },
  {
    id: 6,
    name: "Team NextGen",
    position: "3rd Place",
    college: "VIT Pune",
    image: "/images/team-nextgen.jpg",
    color: "#ff5733",
    category: "Junior",
    competition: "Resqulympic",
  },

  // Senior - Yantrostav
  {
    id: 7,
    name: "Team Alpha",
    position: "1st Place",
    college: "COEP Pune",
    image: "/images/team-alpha.jpg",
    color: "#0a91ab",
    category: "Senior",
    competition: "Yantrostav",
  },
  {
    id: 8,
    name: "Team Beta",
    position: "2nd Place",
    college: "PICT Pune",
    image: "/images/team-beta.jpg",
    color: "#ffc045",
    category: "Senior",
    competition: "Yantrostav",
  },
  {
    id: 9,
    name: "Team Gamma",
    position: "3rd Place",
    college: "AIT Pune",
    image: "/images/team-gamma.jpg",
    color: "#ff5733",
    category: "Senior",
    competition: "Yantrostav",
  },

  // Senior - Resqulympic
  {
    id: 10,
    name: "Team Delta",
    position: "1st Place",
    college: "DY Patil Pune",
    image: "/images/team-delta.jpg",
    color: "#0a91ab",
    category: "Senior",
    competition: "Resqulympic",
  },
  {
    id: 11,
    name: "Team Sigma",
    position: "2nd Place",
    college: "MIT Pune",
    image: "/images/team-sigma.jpg",
    color: "#ffc045",
    category: "Senior",
    competition: "Resqulympic",
  },
  {
    id: 12,
    name: "Team Omega",
    position: "3rd Place",
    college: "SPPU",
    image: "/images/team-omega.jpg",
    color: "#ff5733",
    category: "Senior",
    competition: "Resqulympic",
  },
];


export default function ParticipantsSection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<"Junior" | "Senior">("Junior");
  const [competition, setCompetition] = useState<
    "Yantrostav" | "Resqulympic"
  >("Yantrostav");

  const [selected, setSelected] = useState<Participant | null>(null);

  const filtered = participants.filter(
    (p) =>
      p.category === category &&
      p.competition === competition &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-15 px-6 relative overflow-hidden min-h-screen flex items-center justify-center">
  <SidebarStrip />
      <div className="max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-mokoto tracking-widest font-bold mb-4">
            <span className="text-white">EVENT_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              TEAMS
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
           Meet the winning teams and finalists of past editions
          </p>
        </div>

        {/* Category Toggles */}
        <div className="flex justify-center gap-6 mb-6">
          {["Junior", "Senior"].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c as "Junior" | "Senior")}
              className={`px-6 py-2 rounded-md font-mono font-bold ${
                category === c
                  ? "bg-[#0a91ab] text-white"
                  : "bg-[#022333]/50 border border-gray-600 text-gray-300"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Sub-Category Toggles */}
        <div className="flex justify-center gap-6 mb-10">
          {["Yantrostav", "Resqulympic"].map((comp) => (
            <button
              key={comp}
              onClick={() => setCompetition(comp as "Yantrostav" | "Resqulympic")}
              className={`px-6 py-2 rounded-md font-mono font-bold ${
                competition === comp
                  ? "bg-[#ffc045] text-black"
                  : "bg-[#022333]/50 border border-gray-600 text-gray-300"
              }`}
            >
              {comp}
            </button>
          ))}
        </div>

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
          {filtered.map((p, index) => (
            <motion.div
              key={p.id}
              className="relative group p-6 border-2 rounded-xl backdrop-blur-sm overflow-hidden bg-[#022333]/60 cursor-pointer"
              style={{ borderColor: p.color + "60" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(p)} // Open popup
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
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
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
              {selected.category} - {selected.competition}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
