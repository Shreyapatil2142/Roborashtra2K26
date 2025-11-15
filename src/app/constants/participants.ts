export interface Participant {
  id: number;
  name: string;
  position: string;
  college: string;
  image: string;
  color: string;
  category: "Junior" | "Senior";
  competition: "YantraUtsav" | "ResQlympic";
}

export const participants: Participant[] = [
  // Junior - YantraUtsav
  {
    id: 1,
    name: "Ranveersing Rajput and Team",
    position: "1st Place",
    college: "",
    image: "/winners/YJ1.JPG",
    color: "#0a91ab",
    category: "Junior",
    competition: "YantraUtsav",
  },
  {
    id: 2,
    name: "Arjun Anand Arbuj and Team",
    position: "2nd Place",
    college: "",
    image: "/winners/YJ2.JPG",
    color: "#ffc045",
    category: "Junior",
    competition: "YantraUtsav",
  },
  {
    id: 3,
    name: "Team War Machine",
    position: "3rd Place",
    college: "",
    image: "/winners/YJ3.JPG",
    color: "#ff5733",
    category: "Junior",
    competition: "YantraUtsav",
  },

  // Senior - YantraUtsav
  {
    id: 7,
    name: "Team Pinnnacle Minds",
    position: "1st Place",
    college: "Rajarajeswari College of Engineering, Bengaluru",
    image: "/winners/YS1.JPG",
    color: "#0a91ab",
    category: "Senior",
    competition: "YantraUtsav",
  },
  {
    id: 8,
    name: "Team No-BOT",
    position: "2nd Place",
    college: "Dr. D. Y. Patil College of Engineering (DYPCOE), Akurdi, Pune",
    image: "/winners/YS2.JPG",
    color: "#ffc045",
    category: "Senior",
    competition: "YantraUtsav",
  },
  {
    id: 9,
    name: "Team Roboyuush",
    position: "3rd Place",
    college: "Walchand College of Engineering (WCE), Sangli",
    image: "/winners/YS3.JPG",
    color: "#ff5733",
    category: "Senior",
    competition: "YantraUtsav",
  },

  // Senior - ResQlympic
  {
    id: 10,
    name: "Team UVIRA3",
    position: "1st Place",
    college: "KPR Institute of Engineering and Technology (KPRIET), Coimbatore",
    image: "/winners/R1.JPG",
    color: "#0a91ab",
    category: "Senior",
    competition: "ResQlympic",
  },
  {
    id: 11,
    name: "Samyank Ghangale and Team",
    position: "2nd Place",
    college: "Dr. D. Y. Patil College of Engineering (DYPCOE), Akurdi, Pune",
    image: "/winners/R2.JPG",
    color: "#ffc045",
    category: "Senior",
    competition: "ResQlympic",
  },
  {
    id: 12,
    name: "Team UVIRA Z",
    position: "3rd Place",
    college: "KPR Institute of Engineering and Technology (KPRIET), Coimbatore",
    image: "/winners/R3.JPG",
    color: "#ff5733",
    category: "Senior",
    competition: "ResQlympic",
  },
];
