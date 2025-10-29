"use client";

import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[#010101] z-20 absolute">
      <div className="w-[100%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] aspect-video overflow-hidden rounded-2xl shadow-lg">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ComingSoon;
