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
    image: "/glimps/robo1.JPG",
    description: "Epic battles between autonomous fighting robots",
    stats: "32+ Teams",
    images: [ 
      "/glimps/img.JPG",
      "/glimps/robo2.JPG",
      "/glimps/robo3.JPG",
      "/glimps/robo4.JPG",
      "/glimps/robo5.JPG",
      "/glimps/robo6.JPG",
    ],
  },
  {
    id: 2,
    title: "YantroUtsav",
    date: "Feb 2025",
    image: "/glimps/1.jpg",
    description: "Cutting-edge AI demonstrations and breakthroughs",
    stats: "150+ Participants",
    images: [
      "/glimps/yan1.JPG",
      "/glimps/yan2.JPG",
      "/glimps/yan3.JPG",
      "/glimps/yan4.JPG",
      "/glimps/yan5.JPG",
      "/glimps/yan6.JPG",
     
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
      "/glimps/res1.JPG",
      "/glimps/res2.JPG",
      "/glimps/res3.JPG",
      "/glimps/res4.JPG",
      "/glimps/res5.JPG",
      "/glimps/res6.JPG",
    ],
  },
];
