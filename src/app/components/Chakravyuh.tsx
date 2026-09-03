import React from "react";
import EventActions from "../components/EventActions";
import { events } from "../constants/event";

const Chakravyuh = () => {
  const event = events.find(e => e.title.toLowerCase() === "chakravyuh") || events[2];
  if (!event) return null;

  return (
    <div className="Event bg-[#022333]/40 p-6 md:p-10 shadow-lg">
      <div className="Event-content resq text-white">
        <h1 className="bg-gradient-to-r from-[#0a91ab] to-[#ffc045] bg-clip-text text-transparent font-extrabold text-4xl mb-4">
          Chakravyuh
        </h1>

        <div className="Content leading-relaxed text-white/90">
          🤖 Welcome to <span className="text-[#ffc045] font-bold">Chakravyuh</span> - The Ultimate Dual-Mode Robotics Challenge!
          <br />
          <br />
          Chakravyuh is an exciting robotics competition where participants design an autonomous bot capable of tackling <span className="text-[#ffc045] font-bold">two intense stages</span>. Precision, speed, and smart programming will determine the champion!
          <br />
          <br />
          🏁{" "}
          <span className="text-[#ffc045] font-bold">How It Works:</span>
          <br />
          <span className="font-semibold">Stage 1 - Line Following:</span> Your bot must accurately follow a designated track without breaking flow.
          <br />
          <span className="font-semibold">Stage 2 - Maze Solving:</span> After completing the line track, the bot must switch modes—either manually using a button or automatically—to enter a maze and find its way out in the minimum possible time.
          <br />
          <br />
          ⏱️ The winner will be decided based on the <span className="text-[#ffc045] font-bold">fastest combined completion time</span> across both stages. Bring your technical skills and strategy to conquer the Chakravyuh arena!
          <br />
          <br />

          <span className="headContact text-[#ffc045] font-bold mt-4">
            For any event related query <br />
           Contact Atharva (Workshop Head): 8263936211
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
              href="http://wa.me/+918263936211"
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

export default Chakravyuh;
