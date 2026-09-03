"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { events } from "../constants/event";
import Image from "next/image";
import SidebarStrip from "@/app/components/SidebarStrip";
import ResQlympics from "@/app/components/Resqlympics";
import YantroUtsav from "@/app/components/YantraUtsav";
import Chakravyuh from "@/app/components/Chakravyuh";

export default function EventsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [openEvent, setOpenEvent] = useState<string | null>(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,  // animation duration
      once: true,     // animate only once
      easing: "ease-in-out",
      offset: -250,    // start animation 250px before element comes into view
    });
    AOS.refresh();
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-start py-25  bg-transparent overflow-x-hidden">

      <SidebarStrip />

      {/* Main Container */}
      <div className="md:max-w-7xl max-w-3/4 mx-auto relative z-10">

        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-12">

          {/* Event Status Badges */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4382D]/20 border border-[#F4382D]/50 text-[#F4382D] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(244,56,45,0.3)]">
              <span className="w-2 h-2 rounded-full bg-[#F4382D] animate-ping" />
              Roborashtra 2K26 — Event Concluded
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0154C8]/20 border border-[#0154C8]/50 text-cyan-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(1,84,200,0.3)]">
              🚀 Roborashtra 2K27 — Upcoming
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-mokoto tracking-widest wrap-normal font-bold mb-6">
            <span className="text-white">Archived_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              Problem Statements
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Roborashtra 2K26 has officially concluded! You can still explore the flagship competition details and <span className="text-[#ffc045] font-semibold">download full Problem Statements (PS) & Rulebooks</span> for reference below.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={event.id * 100}
              className="sm:h-[410px] sm:w-[300px] w-[100%] min:h-[410px] justify-self-center cursor-pointer lg:px-3"
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setOpenEvent(event.title)}
            >
              <div className="card relative w-full min-h-full flex justify-center items-end p-[0_20px]">
                {/* Image */}
                <div className="wrapper absolute h-full z-[-1] overflow-hidden rounded-xl">
                  {/* Fixed cover image (base layer, always visible) */}
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="object-cover rounded-xl"
                  />

                  {/* Hover image (moves and fades in on hover) */}
                  <Image
                    src={event.hoverImage}
                    alt={`${event.title} hover`}
                    fill
                    className={`absolute inset-0 object-cover rounded-xl transition-all duration-500 ${hoveredCard === event.id
                      ? "opacity-100 translate-y-[-40px] scale-105"
                      : "opacity-0 translate-y-0 scale-100"
                      }`}
                  />
                </div>

                {/* Details */}
                <div
                  className={`details absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white transition-opacity duration-500 ${hoveredCard === event.id ? "opacity-100" : "opacity-0"
                    } rounded-b-xl`}
                >
                  <p className="text-xl mb-12">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs flex items-center">
                      <span className="mr-1">🏆</span>
                      {event.prize}
                    </span>
                    <span className="text-xs flex items-center">
                      <span className="mr-1">👥</span>
                      {event.participants}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Roborashtra 2K27 Upcoming Teaser Banner */}
        <div data-aos="fade-up" className="mt-16 bg-gradient-to-r from-[#000000] via-[#15317E]/40 to-[#000000] border-2 border-[#0154C8]/50 rounded-2xl p-8 text-center relative overflow-hidden shadow-[0_0_30px_rgba(1,84,200,0.3)]">
          <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-32 h-32 bg-[#F4382D]/10 rounded-full blur-2xl pointer-events-none" />
          
          <span className="inline-block px-4 py-1 rounded-full bg-[#0154C8]/30 border border-[#0154C8] text-cyan-300 text-xs font-bold uppercase tracking-widest mb-4">
            Next Generation Assembly
          </span>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-wider">
            ROBORASHTRA <span className="text-[#ffc045]">2K27</span> IS UPCOMING
          </h3>
          
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-6">
            Get ready for bigger arenas, higher prize pools, and next-level combat & autonomous robotics challenges. Follow our official channels for early registrations and new Problem Statement drops!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.instagram.com/roborashtra.pccoer"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0154C8] hover:bg-[#0154C8]/80 text-white font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(1,84,200,0.5)]"
            >
              Follow @roborashtra.pccoer
            </a>
            <a
              href="/glimps"
              className="px-6 py-3 bg-transparent border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-200 font-bold rounded-xl transition-all"
            >
              View 2K26 Gallery & Highlights
            </a>
          </div>
        </div>

        {openEvent && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center">

            {/* Blurred & Dark Overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpenEvent(null)}
            />

            {/* Popup Box */}
            <div className="relative w-[90%] max-w-3xl max-h-[80vh] sm:max-h-[90vh] overflow-auto bg-[#022333]/90 border-2 border-[#0a91ab] rounded-2xl shadow-xl p-6 z-[1000]">

              {/* Close Button */}
              <button
                onClick={() => setOpenEvent(null)}
                className="absolute top-3 right-3 md:top-5 md:right-5 text-white hover:text-[#ffc045] text-2xl md:text-3xl font-bold transition-all duration-200"
              >
                ✕
              </button>

              {/* Render Correct Component */}
              {openEvent === "ResQlympics" && <ResQlympics />}
              {(openEvent === "YantraUtsav" || openEvent === "YantroUtsav") && <YantroUtsav />}
              {openEvent === "Chakravyuh" && <Chakravyuh />}
            </div>
          </div>
        )}
      </div>




      {/* CSS */}
      <style jsx>{`
      .card {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 380px;
        padding: 0 20px;
      }

      .wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: transform 0.5s ease;
        border-radius: 0.75rem;
        overflow: hidden;
      }

      /* Smooth lift-up on hover */
      .card:hover .wrapper {
        transform: translateY(-10px);
        box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.6);
      }

      /* Gradient fade at top and bottom */
      .wrapper::before,
      .wrapper::after {
        content: "";
        position: absolute;
        left: 0;
        width: 100%;
        height: 80px;
        opacity: 0;
        border-radius: 16px;
        transition: opacity 0.5s;
      }

      .wrapper::before {
        top: 0;
        background-image: linear-gradient(
          to top,
          transparent 40%,
          rgba(12, 13, 19, 0.5) 70%,
          rgba(12, 13, 19) 100%
        );
      }

      .wrapper::after {
        bottom: 0;
        background-image: linear-gradient(
          to bottom,
          transparent 40%,
          rgba(12, 13, 19, 0.5) 70%,
          rgba(12, 13, 19) 100%
        );
      }

      .card:hover .wrapper::before,
      .card:hover .wrapper::after {
        opacity: 1;
      }
`}</style>
    </section>
  );
}
