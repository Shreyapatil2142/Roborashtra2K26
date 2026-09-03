export interface Glimpse {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  stats: string;
  images: string[];
}

export const glimpses: Glimpse[] = [
  {
    id: 1,
    title: "RoboRashtra 2k25",
    date: "Feb 2025",
    image: "/glimps/robo1.jpg",
    description: "Epic battles between autonomous fighting robots",
    stats: "32+ Teams",
    images: [
      "/glimps/img.jpg",
      "/glimps/robo2.jpg",
      "/glimps/robo3.jpg",
      "/glimps/robo4.jpg",
      "/glimps/robo5.jpg",
      "/glimps/robo6.jpg",
    ],
  },
  {
    id: 2,
    title: "YantraUtsav",
    date: "Feb 2025",
    image: "/glimps/1.jpg",
    description: "Cutting-edge AI demonstrations and breakthroughs",
    stats: "150+ Participants",
    images: [
      "/glimps/yan1.jpg",
      "/glimps/yan2.jpg",
      "/glimps/yan3.jpg",
      "/glimps/yan4.jpg",
      "/glimps/yan5.jpg",
      "/glimps/yan6.jpg",
     
    ],
  },
  {
    id: 3,
    title: "ResQlypmic",
    date: "Feb 2025",
    image: "/glimps/4.jpg",
    description: "High-speed autonomous drone racing through obstacle courses",
    stats: "64+ Teams",
    images: [
      "/glimps/res1.jpg",
      "/glimps/res2.jpg",
      "/glimps/res3.jpg",
      "/glimps/res4.jpg",
      "/glimps/res5.jpg",
      "/glimps/res6.jpg",
    ],
  },
];
