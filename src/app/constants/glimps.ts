export interface Glimpse {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  stats: string;
}

export const glimpses: Glimpse[] = [
  {
    id: 1,
    title: "RoboRashtra 2k25",
    date: "Feb 2025",
    image:
      "/glimps/img.jpg",
    description: "Epic battles between autonomous fighting robots",
    stats: "32 Teams, 5 Countries",
  },
  {
    id: 2,
    title: "Yantrostav",
    date: "Feb 2025",
    image:
      "/glimps/1.jpg",
    description: "Cutting-edge AI demonstrations and breakthroughs",
    stats: "150+ Participants, 20 Projects",
  },
  {
    id: 3,
    title: "Resqlypmic",
    date: "Feb 2025",
    image:
      "/glimps/4.jpg",
    description: "High-speed autonomous drone racing through obstacle courses",
    stats: "64 Pilots, 12 Countries",
  },

];
