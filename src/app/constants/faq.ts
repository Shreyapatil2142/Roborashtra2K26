// components/FAQ/faq.ts

export interface FAQEntry {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQEntry[] = [
  {
    question: "What is Roborashtra?",
    answer:
      "Roborashtra is a student-driven robotics and technology initiative focused on innovation, hands-on learning, and skill development. It brings together enthusiasts to explore robotics, AI, electronics, and emerging technologies through workshops, projects, competitions, and mentorship.",
  },
  {
    question: "How to register for Roborashtra 2K26?",
    answer:
      "Registrations for Roborashtra 2K26 will be available on Unstop. Visit the official event page, fill in the required details, and complete the registration process from - https://hosturl.link/HlZkHv",
  },
  {
    question:
      " Is Arduino Nano allowed?",
    answer:
      "Yes, Arduino Nano is allowed. The Chakravyuh rulebook does not restrict the use of any specific microcontroller. Arduino Nano supports autonomous operation, which is mandatory in the competition. Since the bot is not connected to the internet or wireless devices, Arduino Nano fully complies with control rules.Therefore, using Arduino Nano is completely legal and acceptable.",
  },
  {
    question: "What is the maximum voltage allowed?",
    answer:
      "Maximum allowed voltage is 12.5V. Only onboard power sources are permitted (battery or rechargeable cells). The total supply voltage of the bot must not exceed 12.5V. Exceeding this limit may lead to disqualification during compliance check. Proper voltage regulation must be ensured for Arduino Nano and sensors.",
  },
  {
    question: "Is manual control allowed during the run?",
    answer:
      "No, manual control is not allowed. The only exception is Mode switching (line following → maze solving), if not automatic Any other form of manual intervention is considered rule violation.",
  },
  {
    question: " How can the bot switch between line following and maze solving modes?",
    answer:
      "Mode switching can be manual or automatic. The rulebook allows two methods of mode switching: Manual switching using a button Automatic switching through programming logic Manual switching is allowed only once, at the stage transition. After switching, the bot must continue autonomously. This flexibility allows teams to choose a suitable control strategy.",
  },
];
