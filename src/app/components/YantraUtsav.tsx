import React from "react";
import EventActions from "./EventActions";
import { events } from "../constants/event";

const YantraUtsav = () => {
  const event = events.find(e => e.title === "YantraUtsav")!;

  return (
    <div className="Event bg-[#022333]/40 p-6 md:p-10 shadow-lg">
      <div className="Event-content resq text-white">
        <h1 className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent font-extrabold text-4xl mb-4">
          {event.title}
        </h1>

        <div className="Content leading-relaxed text-white/90">
          🎉 Welcome to <span className="text-[#ffc045] font-bold">Yantrautsav</span> - Unleash Your Robotics Genius! 🤖🚀
          <br />
          <br />
          Join Yantrautsav, where aspiring innovators showcase their creativity and robotics skills! Whether you are a beginner or a pro, this is your chance to bring your bold ideas to life.
          <br />
          <br />

          ✨{" "}
          <span className="text-[#ffc045] font-bold">Why Attend?</span>
          <br />
          Showcase your creations and compete with the best. <br />
          Learn, build, and get inspired alongside passionate tech minds. <br />
          Open to all - no matter your experience, students of all ages are welcome! <br />
          Don&rsquo;t miss this thrilling event - register now and make your mark in the world of robotics!
          <br />
          <br />

          <span className="headContact text-[#ffc045] font-bold mt-4">
            For any event related query <br />
            Contact Sana (Event Lead): 8087666355
          </span>

          <span className="text-red-500 font-bold block mt-2">
            NO Refund available
          </span>
          <span className="text-yellow-400 block mt-2">
            Important Note: <br />
            NO ACCOMMODATION WILL BE PROVIDED (WE WILL ASSIST WITH SUGGESTIONS)
          </span>

          <div className="wpYoutube mt-6 flex flex-col gap-4">
            <a
              href="http://wa.me/+918087666355"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="whatsapp bg-[#0a91ab] hover:bg-[#0a91ab]/80 text-white px-6 py-2 rounded-lg font-semibold">
                Contact Us On Whatsapp
              </button>
            </a>
                        <a
              href="https://www.youtube.com/@RobohawkPCCOER"
              className="youtube bg-[#ffc045] hover:bg-[#ffc045]/80 text-black font-semibold px-6 py-2 rounded-lg text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tutorial Video
            </a>
          </div>

          <EventActions 
            rulebookPath={event.rulebookPath}
            registrationUrl={event.registrationUrl}
            eventTitle={event.title}
            className="mt-6"
          />
        </div>
      </div>
    </div>
  );
};


export default YantraUtsav;
