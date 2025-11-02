"use client";

import React from "react";
import { motion } from "framer-motion";

interface Btn4Props {
  link: string;
  text?: string;
}

const Btn4: React.FC<Btn4Props> = ({ link, text = "START" }) => {
  return (
    <div className="flex justify-center items-center absolute top-[82%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
      <a href={link}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="relative w-52 h-16 text-[#ddebf0] text-2xl font-bold tracking-widest font-[mokoto]
                     bg-transparent border-none outline-none obverflow-hidden cursor-pointer"
        >
          {text}

          {/* Polygon border */}
          <div
            className="absolute top-0 left-0 w-full h-full border-[3px] border-double"
            style={{
              borderColor: "#0a91ab",
              boxShadow: "inset 0 0 15px #0a91ab",
              clipPath:
                "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />

          {/* Arrows */}
          <span
            className="absolute top-[35%] left-[-14%] w-[12%] h-[30%] md:bg-[#0a91ab] bg-[#ffc045]
                       transition-all duration-200"
            style={{
              clipPath: "polygon(100% 0, 100% 100%, 0 50%)",
            }}
          ></span>
          <span
            className="absolute top-[35%] right-[-14%] w-[12%] h-[30%] md:bg-[#0a91ab] bg-[#ffc045]
                       transition-all duration-200"
            style={{
              clipPath: "polygon(100% 49%, 0 0, 0 100%)",
            }}
          ></span>

          
          {/* Hover animations (via Tailwind + Motion) */}
          <style>{`
            button:hover div[style*="polygon"] {
              box-shadow: inset 0px 0px 32px #ffc045 !important;
              border-color: #ffc045 !important;
            }

            button:hover span:nth-of-type(1) {
              background-color: #ffc045 !important;
              left: 103% !important;
              animation: leftArrow 0.6s ease-in-out infinite alternate;
            }

            button:hover span:nth-of-type(2) {
              background-color: #ffc045 !important;
              right: 103% !important;
              animation: rightArrow 0.6s ease-in-out infinite alternate;
            }

            button:hover div[style*="rotate(45deg)"] {
              transform: scale(1.25) rotate(45deg);
              background-color: #ffc045 !important;
              box-shadow: 0 0 12px #ffc045 !important;
            }

            @keyframes leftArrow {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(10px);
              }
            }

            @keyframes rightArrow {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-10px);
              }
            }
          `}</style>
        </motion.button>
      </a>
    </div>
  );
};

export default Btn4;
