import React from "react";
import EventActions from "../components/EventActions";
import { events } from "../constants/event";

const ResQlympics = () => {
  const event = events.find(e => e.title === "ResQlympics")!;

  return (
    <div className="Event bg-[#022333]/40 p-6 md:p-10 shadow-lg">
      <div className="Event-content resq text-white">
        <h1 className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent font-extrabold text-4xl mb-4">
          ResQlympics
        </h1>

        <div className="Content leading-relaxed text-white/90">
          🚨 Welcome to ResQlympics - The Ultimate Robotics Rescue Challenge!
          🤖🛠️
          <br />
          <br />
          Get ready for ResQlympics, where manual-operated robots with in-built
          cameras navigate a challenging arena filled with obstacles to rescue
          hostages and bring them to safety!
          <br />
          <br />
          🏁{" "}
          <span className="text-[#ffc045] font-bold">
            How It Works:
          </span>{" "}
          <br />
          One thrilling round: Operate your robot remotely from a separate room
          using a live camera feed. <br />
          Navigate obstacles: Steer through the arena to reach and rescue
          hostages, delivering them to the safe zone. <br />
          Put your skills to the test and become the{" "}
          <span className="text-[#ffc045] font-bold">ResQlympics champion!</span>
          <br />
          <br />

          <span className="headContact text-[#ffc045] font-bold mt-4">
            For any event related query <br />
            Contact Sana (Event Lead): 8087666355
          </span>

          <span className="text-red-500 font-bold block mt-2">
            NO Refund available
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

          {/* Download Rulebook & Register Buttons */}
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

export default ResQlympics;
