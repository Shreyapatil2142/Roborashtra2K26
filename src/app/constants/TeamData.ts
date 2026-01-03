export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  contact: string;
  mail: string;
}

export const teamData: Record<string, TeamMember[]> = {
  FacultyCoordinators: [
    {
      name: "Dr. Mahendra Salunke",
      role: "Faculty Coordinator",
      linkedin: "https://www.linkedin.com/in/dr-mahendra-salunke-211294198",
      contact: "+91 9763722206",
      mail: "mahendra.salunke@pccoer.in",
      image: "/members/mahendra.png",
    },
    {
      name: "Prof. Pallavi Kulkarni",
      role: "Faculty Coordinator",
      linkedin: "#",
      contact: "+91 1234567890",
      mail: "pallavi.kulkarni@pccoer.in",
      image: "/members/pallavi.png",
    },
    {
      name: "Prof. Vrushali Deore",
      role: "Faculty Coordinator",
      linkedin: "#",
      contact: "+91 1234567890",
      mail: "vrushali.deore@pccoer.in",
      image: "/members/vrushali.png",
    },
  ],

  EventLeads: [
    {
      name: "Sana",
      role: "Event Lead",
      linkedin: "https://www.linkedin.com/in/sananair",
      contact: "+91 8087666355",
      mail: "sana@example.com",
      image: "/members/sana.png",
    },
    {
      name: "Bhargav",
      role: "Management Lead",
      linkedin: "https://www.linkedin.com/in/bhargav-mahajan-004244292/",
      contact: "+91 7887992517",
      mail: "bhargav@example.com",
      image: "/members/bhargav.png",
    },
    {
      name: "Aditi",
      role: "Finance Lead",
      linkedin: "https://www.linkedin.com/in/aditi-kulkarni-b36616292/",
      contact: "+91 1234567890",
      mail: "aditi@example.com",
      image: "/members/aditi.png",
    },
  ],

  Workshop: [
    {
      name: "Atharva",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/atharva-kalage-01692a28a/",
      contact: "+91 8263936211",
      mail: "atharva@example.com",
      image: "/members/atharva.png",
    },
    
  ],

  PR: [
    {
      name: "Sumruddhi",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/sumruddhi-morey-599323292/",
      contact: "+91 1234567890",
      mail: "samruddhi@example.com",
      image: "/members/samruddhi.png",
    },
     {
      name: "Shivraj",
      role: "Co-Head",
      linkedin: "https://www.linkedin.com/in/shivraj-patil-6b205532b/",
      contact: "+91 1234567890",
      mail: "shivraj@example.com",
      image: "/members/shivraj.png",
    },
  ],

  Management: [
    {
      name: "Sanket",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/sanket-patil-045674292/",
      contact: "+91 1234567890",
      mail: "sanket@example.com",
      image: "/members/sanket.png",
    },
  ],

  WebDev: [
    {
      name: "Shreya",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/shreya-patil-9530shreya",
      contact: "+91 1234567890",
      mail: "shreya.patil_it24@pccoer.in",
      image: "/members/shreya.png",
    },
    {
      name: "Kalash",
      role: "Co-Head",
      linkedin: "https://www.linkedin.com/in/kalash-baldota/",
      contact: "+91 1234567890",
      mail: "kalash.baldota_it24@pccoer.in",
      image: "/members/kalash.png",
    },
  ],

  CadCam: [
    {
      name: "Nagesh",
      role: "Head",
      linkedin: "#",
      contact: "+91 1234567890",
      mail: "nagesh@example.com",
      image: "/members/nagesh.png",
    },
  ],

  ProblemStatement: [
    {
      name: "Misba",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/misba-momin-bb3022330/",
      contact: "+91 1234567890",
      mail: "misba@example.com",
      image: "/members/misba.png",
    },
  ],

  SocialMedia: [
    {
      name: "Disha",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/disha-raka-b098b2263/",
      contact: "+91 1234567890",
      mail: "disha@example.com",
      image: "/members/disha.png",
    },
  ],

  Content: [
    {
      name: "Shivam",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/shivam-bhagat-301736292",
      contact: "+91 1234567890",
      mail: "shivam@example.com",
      image: "/members/shivam.png",
    },
  ],

  Design: [
    {
      name: "Jagruti",
      role: "Head",
      linkedin: "https://www.linkedin.com/in/jagruti-potdar-18j31/",
      contact: "+91 1234567890",
      mail: "jagruti@example.com",
      image: "/members/jagruti.png",
    },
  ],
};