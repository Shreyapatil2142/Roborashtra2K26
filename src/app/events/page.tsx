"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { events } from "../constants/event";
import Frame from "../components/frame";
import Image from "next/image";
import Navbar from "@/app/components/SidebarStrip";
export default function EventsPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);



  return (
    <section className="py-24 px-6 relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Effects */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-mokoto tracking-widest font-bold mb-6">
            <span className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent">
              Championship
            </span>{" "}
            <span className="text-white">Events</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Four legendary competitions. One ultimate champion.
            Experience the future of robotics across multiple domains.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="perspective-1000 h-[380px]"
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card relative w-full h-full flex justify-center items-end p-[0_20px] perspective-2500">
                <div className="wrapper absolute w-full h-full z-[-1] transition-all duration-500 overflow-hidden rounded-xl">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    fill
                    className="cover-image object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

                  {/* Holographic Corners */}
                  <div className={`holographic-corner corner-tl border-[${event.glowColor}] ${hoveredCard === event.id ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`holographic-corner corner-tr border-[${event.glowColor}] ${hoveredCard === event.id ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`holographic-corner corner-bl border-[${event.glowColor}] ${hoveredCard === event.id ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className={`holographic-corner corner-br border-[${event.glowColor}] ${hoveredCard === event.id ? 'opacity-100' : 'opacity-0'}`}></div>

                  {/* Particles */}
                  {hoveredCard === event.id && (
                    <>
                      <div className="particle" style={{ top: '30%', left: '20%', background: event.glowColor, animationDelay: '0s' }}></div>
                      <div className="particle" style={{ top: '60%', left: '80%', background: event.glowColor, animationDelay: '0.5s' }}></div>
                      <div className="particle" style={{ top: '70%', left: '40%', background: event.glowColor, animationDelay: '1s' }}></div>
                    </>
                  )}
                </div>

                <div className="title w-full transition-transform duration-500 text-center mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:translate-y-[-20px] hover:opacity-0 transition-transform duration-500 ">
                    {event.title}
                  </h3>
                  <span className={`mt-2 inline-block px-3 py-1 rounded-full border text-xs font-semibold border-[${event.glowColor}] text-[${event.glowColor}]`}>
                    {event.category}
                  </span>
                </div>

                <div className="character absolute w-full opacity-0 transition-all duration-500 z-[-1] group-hover:opacity-100 group-hover:translate-y-[-30%] flex justify-center">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${event.gradient}`}>
                    <span className="text-2xl text-white">{event.icon}</span>
                  </div>
                </div>

                <div className={`details absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white transition-opacity duration-500 ${hoveredCard === event.id ? 'opacity-100' : 'opacity-0'} rounded-b-xl`}>
                  <p className="text-xl mb-2">{event.description}</p>
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
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .card {
          width: 100%;
          height: 380px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding: 0 20px;
          perspective: 2500px;
        }
        
        .wrapper {
          transition: all 0.5s;
          position: absolute;
          width: 100%;
          z-index: -1;
          border-radius: 0.75rem;
          overflow: hidden;
        }
        
        .card:hover .wrapper {
          transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
          box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
        }
        
        .wrapper::before,
        .wrapper::after {
          content: "";
          opacity: 0;
          width: 100%;
          height: 80px;
          transition: all 0.5s;
          position: absolute;
          left: 0;
          border-radius: 16px;
        }
        
        .wrapper::before {
          top: 0;
          height: 100%;
          background-image: linear-gradient(
            to top,
            transparent 46%,
            rgba(12, 13, 19, 0.5) 68%,
            rgba(12, 13, 19) 97%
          );
        }
        
        .wrapper::after {
          bottom: 0;
          opacity: 0;
          background-image: linear-gradient(
            to bottom,
            transparent 46%,
            rgba(12, 13, 19, 0.5) 68%,
            rgba(12, 13, 19) 97%
          );
        }
        
        .card:hover .wrapper::before,
        .card:hover .wrapper::after {
          opacity: 1;
        }
        
        .card:hover .wrapper::after {
          height: 120px;
        }
        
        .holographic-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          transition: opacity 0.5s;
        }
        
        .corner-tl {
          top: 10px;
          left: 10px;
          border-top: 2px solid;
          border-left: 2px solid;
        }
        
        .corner-tr {
          top: 10px;
          right: 10px;
          border-top: 2px solid;
          border-right: 2px solid;
        }
        
        .corner-bl {
          bottom: 10px;
          left: 10px;
          border-bottom: 2px solid;
          border-left: 2px solid;
        }
        
        .corner-br {
          bottom: 10px;
          right: 10px;
          border-bottom: 2px solid;
          border-right: 2px solid;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          opacity: 0;
          animation: float 3s infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-50px) translateX(20px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}