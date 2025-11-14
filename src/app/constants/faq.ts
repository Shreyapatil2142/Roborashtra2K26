// components/FAQ/faq.ts

export interface FAQEntry {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQEntry[] = [
  {
    question: "What resources are available for troubleshooting technical difficulties during the competition?",
    answer:
      "In our college, we have a shop dedicated to electronic components where you can purchase necessary items for troubleshooting technical difficulties during the competition.",
  },
  {
    question: "Can we bring our own tools and equipment for robot maintenance?",
    answer:
      "Yes, participants are required to bring their own tools and equipment for robot maintenance.",
  },
  {
    question:
      "Are there any restrictions on the use of certain materials or components in the construction of the robots?",
    answer:
      "Participants must adhere to the components and materials specified in the respective domain rulebook.",
  },
  {
    question: "Where will I be staying during the competition?",
    answer:
      "We will notify you soon about accommodation arrangements for the competition. Please stay tuned for further updates.",
  },
  {
    question: "What are the allowed dimensions and weight limits for the robots?",
    answer:
      "Please refer to the rulebook for specific guidelines regarding dimensions and weight limits.",
  },
  {
    question: "Can only undergraduate students apply to the event?",
    answer:
      "In CamWarrior, both UG and PG students can apply, whereas for other events, only undergraduate students are eligible.",
  },
];
