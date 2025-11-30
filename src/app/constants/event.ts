export interface EventConfig {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
  time: string;
  location: string;
  participants: string;
  prize: string;
  icon: string;
  gradient: string;
  glowColor: string;
  coverImage: string;
  hoverImage: string;
  rulebookPath: string;
  registrationUrl: string;
}

export const events: EventConfig[] = [
  {
    id: 1,
    title: "YantroUtsav",
    category: "Combat",
    description: "An innovation where creators and robotics bring bold ideas to life",
    date: "March 15, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Arena Alpha",
    participants: "32 Teams",
    prize: "₹90,000",
    icon: "⚡",
    gradient: "from-[#0a91ab] to-[#065471]",
    glowColor: "#0a91ab",
    coverImage: "/events/yan2.svg",
    hoverImage: "/events/yan1.svg",
    rulebookPath: "/api/download/Yantrautsav ",
    registrationUrl: "https://unstop.com/o/Dy8trh4?lb=t3QuFZhk&utm_medium=Share&utm_source=roboras52032&utm_campaign=Competitions", 
  },
  {
    id: 2,
    title: "ResQlympics",
    category: "Speed",
    description: "A rescue robotics challenge where strategy decide victory",
    date: "March 16, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Speed Track Beta",
    participants: "24 Teams",
    prize: "₹70,000",
    icon: "🎯",
    gradient: "from-[#ffc045] to-[#ff8c00]",
    glowColor: "#ffc045",
    coverImage: "/events/res2.svg",
    hoverImage: "/events/res1.svg",
    rulebookPath: "/api/download/resqlympics",
    registrationUrl: "https://unstop.com/o/CncxiNd?lb=t3QuFZhk&utm_medium=Share&utm_source=roboras52032&utm_campaign=Competitions",  
  },
  {
    id: 3,
    title: "Chakravyuh",
    category: "Intelligence",
    description: "An robotics duel where speed conquer the line and maze",
    date: "March 17, 2025",
    time: "11:00 AM - 7:00 PM",
    location: "Tech Hub Gamma",
    participants: "40 Teams",
    prize: "₹30,000",
    icon: "🏆",
    gradient: "from-[#9333ea] to-[#7c3aed]",
    glowColor: "#0a91ab",
    coverImage: "/events/c2.svg",
    hoverImage: "/events/c1.svg",
    rulebookPath: "/api/download/chakravyuh",
    registrationUrl: "https://unstop.com/o/g7bBp10?lb=t3QuFZhk&utm_medium=Share&utm_source=roboras52032&utm_campaign=Competitions", 
  },
];
