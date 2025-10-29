// For Sponsers section
export type Tier = "title" | "platinum" | "gold" | "silver";

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier: Tier;
}

export interface TierConfig {
  color: string;
  size: string;
  textSize: string;
  glow: string;
  label: string;
}

export const sponsors: Record<Tier, Sponsor[]> = {
  title: [
    { id: 1, name: "Unstop", logo: "unstop.svg", tier: "title" },
  ],
  platinum: [
    { id: 3, name: "CyberSystems", logo: "CS", tier: "platinum" },
    { id: 4, name: "AI Dynamics", logo: "AID", tier: "platinum" },
    { id: 5, name: "FutureTech", logo: "FT", tier: "platinum" },
  ],
  gold: [
    { id: 6, name: "MechCorp", logo: "MC", tier: "gold" },
    { id: 7, name: "NanoBot Ltd", logo: "NB", tier: "gold" },
    { id: 8, name: "Quantum Labs", logo: "QL", tier: "gold" },
    { id: 9, name: "Neural Networks", logo: "NN", tier: "gold" },
  ],
  silver: [
    { id: 10, name: "CodeBase", logo: "CB", tier: "silver" },
    { id: 11, name: "TechFlow", logo: "TF", tier: "silver" },
    { id: 12, name: "DataMind", logo: "DM", tier: "silver" },
    { id: 13, name: "RoboPath", logo: "RP", tier: "silver" },
    { id: 14, name: "AI Forge", logo: "AF", tier: "silver" },
    { id: 15, name: "CyberEdge", logo: "CE", tier: "silver" },
  ],
};

export const tierConfig: Record<Tier, TierConfig> = {
  title: {
    color: "#ffc045",
    size: "w-48 h-32",
    textSize: "text-4xl",
    glow: "shadow-[#ffc045]/50",
    label: "TITLE SPONSORS",
  },
  platinum: {
    color: "#e5e7eb",
    size: "w-40 h-28",
    textSize: "text-3xl",
    glow: "shadow-gray-300/30",
    label: "PLATINUM PARTNERS",
  },
  gold: {
    color: "#0a91ab",
    size: "w-32 h-24",
    textSize: "text-2xl",
    glow: "shadow-[#0a91ab]/40",
    label: "GOLD SPONSORS",
  },
  silver: {
    color: "#065471",
    size: "w-28 h-20",
    textSize: "text-xl",
    glow: "shadow-[#065471]/30",
    label: "TECH PARTNERS",
  },
};


