"use client";

import Image from "next/image";

export default function Frame() {
  return (
    <>
      {/* Desktop / Tablet Frame Overlay (hidden on small screens) */}
      <div className="w-full min-h-screen overflow-hidden inset-0 pointer-events-none z-10 hidden lg:block fixed">
        <Image
          src="/bg.svg"
          alt="Frame overlay"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover pointer-events-none select-none object-center fixed"
        />
      </div>

      {/* Mobile Background / Frame (visible on small screens) */}
      <div className="fixed inset-0 pointer-events-none z-10 block lg:hidden">
        <Image
          src="/mbBG.jpg"
          alt="Mobile background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover w-full h-full blur-sm"
        />
      </div>
    </>
  );
}
