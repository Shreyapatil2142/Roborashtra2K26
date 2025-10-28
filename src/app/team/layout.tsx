"use client";

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="min-h-screen w-full bg-[#022333] text-white flex flex-col items-center">
      {children}
    </section>
  );
}