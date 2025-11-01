export interface Participant {
  id: number;
  name: string;
  position: string;
  college: string;
  image: string;
  color: string;
  category: "Junior" | "Senior";
  competition: "Yantrostav" | "Resqulympic";
}

export const participants: Participant[] = [
  // Junior - Yantrostav
  {
    id: 1,
    name: "Team Innovators",
    position: "1st Place",
    college: "PCCoER Pune",
    image: "/images/1.jpg",
    color: "#0a91ab",
    category: "Junior",
    competition: "Yantrostav",
  },
  {
    id: 2,
    name: "Team Visionaries",
    position: "2nd Place",
    college: "SPPU",
    image: "/images/2.jpg",
    color: "#ffc045",
    category: "Junior",
    competition: "Yantrostav",
  },
  {
    id: 3,
    name: "Team Pioneers",
    position: "3rd Place",
    college: "DY Patil Pune",
    image: "/images/3.jpg",
    color: "#ff5733",
    category: "Junior",
    competition: "Yantrostav",
  },

  // Senior - Yantrostav
  {
    id: 7,
    name: "Team Alpha",
    position: "1st Place",
    college: "COEP Pune",
    image: "/images/3.jpg",
    color: "#0a91ab",
    category: "Senior",
    competition: "Yantrostav",
  },
  {
    id: 8,
    name: "Team Beta",
    position: "2nd Place",
    college: "PICT Pune",
    image: "/images/4.jpg",
    color: "#ffc045",
    category: "Senior",
    competition: "Yantrostav",
  },
  {
    id: 9,
    name: "Team Gamma",
    position: "3rd Place",
    college: "AIT Pune",
    image: "/images/1.jpg",
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
    image: "/images/2.jpg",
    color: "#0a91ab",
    category: "Senior",
    competition: "Resqulympic",
  },
  {
    id: 11,
    name: "Team Sigma",
    position: "2nd Place",
    college: "MIT Pune",
    image: "/images/3.jpg",
    color: "#ffc045",
    category: "Senior",
    competition: "Resqulympic",
  },
  {
    id: 12,
    name: "Team Omega",
    position: "3rd Place",
    college: "SPPU",
    image: "/images/4.jpg",
    color: "#ff5733",
    category: "Senior",
    competition: "Resqulympic",
  },
];
