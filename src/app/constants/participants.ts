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
    name: "Ranveersing Rajput and Team",
    position: "1st Place",
    college: "",
    image: "/images/1.jpg",
    color: "#0a91ab",
    category: "Junior",
    competition: "Yantrostav",
  },
  {
    id: 2,
    name: "Arjun Anand Arbuj and Team",
    position: "2nd Place",
    college: "",
    image: "/images/2.jpg",
    color: "#ffc045",
    category: "Junior",
    competition: "Yantrostav",
  },
  {
    id: 3,
    name: "Team War Machine",
    position: "3rd Place",
    college: "",
    image: "/images/3.jpg",
    color: "#ff5733",
    category: "Junior",
    competition: "Yantrostav",
  },

  // Senior - Yantrostav
  {
    id: 7,
    name: "Team Pinnnacle Minds",
    position: "1st Place",
    college: "Rajarajeswari College of Engineering, Bengaluru",
    image: "/images/3.jpg",
    color: "#0a91ab",
    category: "Senior",
    competition: "Yantrostav",
  },
  {
    id: 8,
    name: "Team No-BOT",
    position: "2nd Place",
    college: "Dr. D. Y. Patil College of Engineering (DYPCOE), Akurdi, Pune",
    image: "/images/4.jpg",
    color: "#ffc045",
    category: "Senior",
    competition: "Yantrostav",
  },
  {
    id: 9,
    name: "Team Roboyuush",
    position: "3rd Place",
    college: "Walchand College of Engineering (WCE), Sangli",
    image: "/images/1.jpg",
    color: "#ff5733",
    category: "Senior",
    competition: "Yantrostav",
  },

  // Senior - Resqulympic
  {
    id: 10,
    name: "Team UVIRA3",
    position: "1st Place",
    college: "KPR Institute of Engineering and Technology (KPRIET), Coimbatore",
    image: "/images/2.jpg",
    color: "#0a91ab",
    category: "Senior",
    competition: "Resqulympic",
  },
  {
    id: 11,
    name: "Samyank Ghangale and Team",
    position: "2nd Place",
    college: "Dr. D. Y. Patil College of Engineering (DYPCOE), Akurdi, Pune",
    image: "/images/3.jpg",
    color: "#ffc045",
    category: "Senior",
    competition: "Resqulympic",
  },
  {
    id: 12,
    name: "Team UVIRA Z",
    position: "3rd Place",
    college: "KPR Institute of Engineering and Technology (KPRIET), Coimbatore",
    image: "/images/4.jpg",
    color: "#ff5733",
    category: "Senior",
    competition: "Resqulympic",
  },
];
