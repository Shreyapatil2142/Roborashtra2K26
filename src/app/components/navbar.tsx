"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-200 shadow-md">
      <Link href="/">
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          Main
        </button>
      </Link>

      <Link href="/about">
        <button className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600">
          About
        </button>
      </Link>

    <Link href="/events">
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          Events
        </button>
      </Link>

      <Link href="/contact">
        <button className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600">
          Contact
        </button>
      </Link>

      <Link href="/glimps">
        <button className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600">
          Glimps
        </button>
      </Link>
       <Link href="/sponsors">
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          Sponsors
        </button>
      </Link>
       <Link href="/pastparticipants">
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          Past participants
        </button>
      </Link>
       <Link href="/team">
        <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
          Team
        </button>
      </Link>
    </nav>
  );
}
