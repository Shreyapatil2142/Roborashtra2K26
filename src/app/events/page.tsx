"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { events } from "../constants/event";
import Image from "next/image";
import SidebarStrip from "@/app/components/SidebarStrip";
import ResQlympics from "@/app/components/Resqlympics";
import YantroUtsav from "@/app/components/YantroUtsav";
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
        <div data-aos="fade-up" className="text-center mb-16">

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-mokoto tracking-widest font-bold mb-6">
            <span className="text-white">Championship_</span>
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              Events
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Three legendary competitions. One ultimate champion. Experience the
            future of robotics across multiple domains.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={event.id * 100}
              className="h-[380px]"
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

        {openEvent && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center">

            {/* Blurred & Dark Overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpenEvent(null)}
            />

            {/* Popup Box */}
            <div className="relative w-[90%] max-w-3xl max-h-[90vh] overflow-auto bg-[#022333]/90 border-2 border-[#0a91ab] rounded-2xl shadow-xl p-6 z-[1000]">

              {/* Close Button */}
              <button
                onClick={() => setOpenEvent(null)}
                className="absolute top-3 right-3 md:top-5 md:right-5 text-white hover:text-[#ffc045] text-2xl md:text-3xl font-bold transition-all duration-200"
              >
                ✕
              </button>

              {/* Render Correct Component */}
              {openEvent === "ResQlympics" && <ResQlympics />}
              {openEvent === "YantroUtsav" && <YantroUtsav />}
              {openEvent === "Chakravyuh" && <Chakravyuh />
              }
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
