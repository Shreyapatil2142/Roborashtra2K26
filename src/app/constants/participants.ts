export interface Participant {
  id: number;
  name: string;
  position: string;
  college: string;
  image: string;
  color: string;
  category: "Junior" | "Senior";
  competition: "YantraUtsav" | "ResQlympic" | "Chakravyuh";
}

export const participants: Participant[] = [
  // Junior - YantraUtsav
  {
    id: 1,
    name: "Code Storms",
    position: "1st Place",
    college: "Kendriya Vidyalaya No. 1",
    image: "/winners/YJ1.jpg",
    color: "#0a91ab",
    category: "Junior",
    competition: "YantraUtsav",
  },
  {
    id: 2,
    name: "Team AVSS",
    position: "2nd Place",
    college: "Novel International School, Pune",
    image: "/winners/YJ2.jpg",
    color: "#ffc045",
    category: "Junior",
    competition: "YantraUtsav",
  },
  {
    id: 3,
    name: "Sanskriti TechForce",
    position: "3rd Place",
    college: "Sanskriti School, Pune",
    image: "/winners/YJ3.jpg",
    color: "#ff5733",
    category: "Junior",
    competition: "YantraUtsav",
  },

  // Senior - YantraUtsav
  {
    id: 7,
    name: "Team Solder & Forget",
    position: "1st Place",
    college: "Shri Vile Parle Kelavani Mandal's Dwarkadas J. Sanghvi College of Engineering, Mumbai",
    image: "/winners/YS1.jpg",
    color: "#0a91ab",
    category: "Senior",
    competition: "YantraUtsav",
  },
  {
    id: 8,
    name: "Team PIL Dynamics",
    position: "2nd Place",
    college: "Madhav Institute of Technology and Science, Gwalior",
    image: "/winners/YS2.jpg",
    color: "#ffc045",
    category: "Senior",
    competition: "YantraUtsav",
  },
  {
    id: 9,
    name: "Team Draic",
    position: "3rd Place",
    college: "D. Y. Patil College of Engineering, Akurdi, Pune",
    image: "/winners/YS3.jpg",
    color: "#ff5733",
    category: "Senior",
    competition: "YantraUtsav",
  },

  // ResQlympic
  {
    id: 10,
    name: "Team UVIRA3",
    position: "1st Place",
    college: "KPR Institute of Engineering and Technology (KPRIET), Coimbatore",
    image: "/winners/res1.jpg",
    color: "#0a91ab",
    category: "Senior",
    competition: "ResQlympic",
  },
  {
    id: 11,
    name: "Techover",
    position: "2nd Place",
    college: "Dr. D. Y. Patil College of Engineering (DYPCOE), Akurdi, Pune",
    image: "/winners/res2.jpg",
    color: "#ffc045",
    category: "Senior",
    competition: "ResQlympic",
  },
  {
    id: 12,
    name: "IIC SIT",
    position: "3rd Place",
    college: "Sinhgad Institute of Technology, Lonavala",
    image: "/winners/res3.jpg",
    color: "#ff5733",
    category: "Senior",
    competition: "ResQlympic",
  },

  // Chakravyuh
  {
    id: 13,
    name: "Error 404: Line not found",
    position: "1st Place",
    college: "JSPM Rajarshi Shahu College of Engineering",
    image: "/winners/chak1.jpg",
    color: "#ff5733",
    category: "Senior",
    competition: "Chakravyuh",
  },
  {
    id: 14,
    name: "Imposter",
    position: "2nd Place",
    college: "Sinhgad Institute of Technology, Lonavala",
    image: "/winners/chak2.jpg",
    color: "#ff5733",
    category: "Senior",
    competition: "Chakravyuh",
  },
  {
    id: 15,
    name: "Bermuda Blaster",
    position: "3rd Place",
    college: "New Pune Public School",
    image: "/winners/chak3.jpg",
    color: "#ff5733",
    category: "Senior",
    competition: "Chakravyuh",
  },
];
