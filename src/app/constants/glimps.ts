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
    title: "YantraUtsav",
    date: "Feb 2025",
    image: "/glimps/robo3.jpg",
    description: "Cutting-edge AI demonstrations and breakthroughs",
    stats: "150+ Participants",
    images: [
      "/glimps/yan1.JPG",
      "/glimps/yan2.JPG",
      "/glimps/yan3.JPG",
      "/glimps/yan4.JPG",
      "/glimps/yan5.JPG",
      "/glimps/yan6.jpg",
     
    ],
  },
  {
    id: 2,
    title: "ResQlypmic",
    date: "Feb 2025",
    image: "/glimps/res5.jpg",
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
  {
    id:3,
    title: "Chakravyuh",
    date: "Feb 2025",
    image: "/glimps/chak4.jpg",
    description: "High-speed autonomous drone racing through obstacle courses",
    stats: "64+ Teams",
    images: [
      "/glimps/chak1.jpg",
      "/glimps/chak2.jpg",
      "/glimps/chak3.jpg",
      "/glimps/chak4.jpg",
      "/glimps/chak5.jpg",
      "/glimps/chak1.jpg",
    ],
  },
];
