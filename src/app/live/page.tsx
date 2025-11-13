"use client";

import { useEffect } from "react";
import "./styles.css";
import SidebarStrip from "../components/SidebarStrip";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
        });
    }, []);
    useEffect(() => {
        const countToDate = new Date("2026-02-06T08:00:00").getTime();

        const interval = setInterval(() => {
            const currentDate = new Date().getTime();
            const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
            flipAllCards(timeBetweenDates);
        }, 250);

        function flipAllCards(time: number) {
            const days = Math.floor(time / 86400);
            const hours = Math.floor((time % 86400) / 3600);
            const minutes = Math.floor((time % 3600) / 60);
            const seconds = time % 60;

            flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
            flip(document.querySelector("[data-days-ones]"), days % 10);

            flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
            flip(document.querySelector("[data-hours-ones]"), hours % 10);

            flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
            flip(document.querySelector("[data-minutes-ones]"), minutes % 10);

            flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
            flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
        }

        function flip(flipCard: Element | null, newNumber: number) {
            if (!flipCard) return;
            const topHalf = flipCard.querySelector(".top") as HTMLElement;
            const bottomHalf = flipCard.querySelector(".bottom") as HTMLElement;
            const startNumber = parseInt(topHalf.textContent || "0");

            if (newNumber === startNumber) return;

            const topFlip = document.createElement("div");
            topFlip.classList.add("top-flip");
            const bottomFlip = document.createElement("div");
            bottomFlip.classList.add("bottom-flip");

            topHalf.textContent = String(startNumber);
            bottomHalf.textContent = String(startNumber);
            topFlip.textContent = String(startNumber);
            bottomFlip.textContent = String(newNumber);

            topFlip.addEventListener("animationstart", () => {
                topHalf.textContent = String(newNumber);
            });
            topFlip.addEventListener("animationend", () => {
                topFlip.remove();
            });
            bottomFlip.addEventListener("animationend", () => {
                bottomHalf.textContent = String(newNumber);
                bottomFlip.remove();
            });

            flipCard.append(topFlip, bottomFlip);
        }

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="px-6 py-25 flex-1 min-h-screen flex flex-col justify-center items-center bg-transparent relative overflow-hidden z-20">
            {/* === Background Video === */}
            <video autoPlay muted loop playsInline className="background-video">
                <source src="/mechanicalBG.mp4" type="video/mp4" />
            </video>
            <SidebarStrip />
            <div data-aos="fade-up" className="text-center mb-12">
                <h2 data-aos="zoom-in" className="text-2xl sm:text-3xl md:text-3xl lg:text-5xl font-mokoto tracking-widest font-bold mb-6">
                    <span className="text-white">Countdown </span>
                    <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
                        For Roborashtra 2K26
                    </span>
                </h2>
            </div>
            <div className="container" data-aos="fade-up"
                data-aos-delay="200">
                <div className="container-segment">
                    <div className="segment-title">Days</div>
                    <div className="segment">
                        <div className="flip-card" data-days-tens>
                            <div className="top">2</div>
                            <div className="bottom">2</div>
                        </div>
                        <div className="flip-card" data-days-ones>
                            <div className="top">4</div>
                            <div className="bottom">4</div>
                        </div>
                    </div>
                </div>

                <div className="container-segment">
                    <div className="segment-title">Hours</div>
                    <div className="segment">
                        <div className="flip-card" data-hours-tens>
                            <div className="top">2</div>
                            <div className="bottom">2</div>
                        </div>
                        <div className="flip-card" data-hours-ones>
                            <div className="top">4</div>
                            <div className="bottom">4</div>
                        </div>
                    </div>
                </div>

                <div className="container-segment">
                    <div className="segment-title">Minutes</div>
                    <div className="segment">
                        <div className="flip-card" data-minutes-tens>
                            <div className="top">0</div>
                            <div className="bottom">0</div>
                        </div>
                        <div className="flip-card" data-minutes-ones>
                            <div className="top">0</div>
                            <div className="bottom">0</div>
                        </div>
                    </div>
                </div>

                <div className="container-segment">
                    <div className="segment-title">Seconds</div>
                    <div className="segment">
                        <div className="flip-card" data-seconds-tens>
                            <div className="top">0</div>
                            <div className="bottom">0</div>
                        </div>
                        <div className="flip-card" data-seconds-ones>
                            <div className="top">0</div>
                            <div className="bottom">0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
