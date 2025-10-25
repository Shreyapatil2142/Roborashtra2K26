"use client";

import Image from "next/image";

export default function Frame() {
  return (
    <>
      {/* Desktop / Tablet Frame Overlay (hidden on small screens) */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
        <Image
          src="/frame4.png"
          alt="Frame overlay"
          fill
          priority
          className="w-full h-full"
        />
      </div>

      {/* Mobile Background / Frame (visible on small screens) */}
      <div className="absolute inset-0 pointer-events-none z-5 block lg:hidden">
        <Image
          src="/mbBG.jpg"
          alt="Mobile background"
          fill
          priority
          className="object-cover w-full h-full blur-sm"
        />
      </div>
    </>
  );
}
