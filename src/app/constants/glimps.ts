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
    image: "/glimps/img.jpg",
    description: "Epic battles between autonomous fighting robots",
    stats: "32 Teams, 5 Countries",
    images: [
      "/glimps/robo1.JPG",
      "/glimps/robo2.JPG",
      "/glimps/robo3.JPG",
      "/glimps/robo4.JPG",
      "/glimps/robo5.JPG",
      "/glimps/robo6.JPG",
    ],
  },
  {
    id: 2,
    title: "Yantrostav",
    date: "Feb 2025",
    image: "/glimps/1.jpg",
    description: "Cutting-edge AI demonstrations and breakthroughs",
    stats: "150+ Participants, 20 Projects",
    images: [
      // "/glimps/yantro1.JPG",
      // "/glimps/yantro2.JPG",
      // "/glimps/yantro3.JPG",
      // "/glimps/yantro4.JPG",
      // "/glimps/yantro5.JPG",
      // "/glimps/yantro6.JPG",
      "/glimps/res1.JPG",
      "/glimps/res2.JPG",
      "/glimps/res3.JPG",
      "/glimps/res4.JPG",
      "/glimps/res5.JPG",
      "/glimps/res6.JPG",
    ],
  },
  {
    id: 3,
    title: "Resqlypmic",
    date: "Feb 2025",
    image: "/glimps/4.jpg",
    description: "High-speed autonomous drone racing through obstacle courses",
    stats: "64 Pilots, 12 Countries",
    images: [
      "/glimps/res1.JPG",
      "/glimps/res2.JPG",
      "/glimps/res3.JPG",
      "/glimps/res4.JPG",
      "/glimps/res5.JPG",
      "/glimps/res6.JPG",
    ],
  },
];
