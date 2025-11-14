// components/FAQ/FAQSection.tsx
"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FAQ_DATA, FAQEntry } from "../constants/faq";
import SidebarStrip from "../components/SidebarStrip";

export default function FAQSection() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start py-10 bg-transparent overflow-x-hidden">
            <SidebarStrip />

            {/* Header */}
            <div data-aos="fade-up" className="text-center px-2 z-10">
                <h2 className="mt-12 font-mokoto tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="text-white">Frequently </span>
                    <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
                        Asked Questions
                    </span>
                </h2>
            </div>

            {/* FAQ List */}
            <div className="w-full max-w-3xl mt-12 flex flex-col gap-4 z-10 px-5">
                {FAQ_DATA.map((faq, index) => (
                    <div
                        key={index}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}         // Stagger
                        data-aos-duration="800"              // Smoother
                        data-aos-anchor-placement="top-bottom"
                    >
                        <FAQItem question={faq.question} answer={faq.answer} />
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ----------------------------------------------
   FAQ Accordion Item
---------------------------------------------- */
function FAQItem({ question, answer }: FAQEntry) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="w-full bg-primary/20 rounded-lg p-4 sm:p-5 border border-secondary hover:border-highlight transition-all"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-start sm:items-center text-left text-white/80 font-semibold text-base sm:text-lg md:text-xl"
            >
                <span>{question}</span>
                <span
                    className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                    ▼
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                }`}
            >
                <p className="text-highlight text-sm sm:text-base leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    );
}
