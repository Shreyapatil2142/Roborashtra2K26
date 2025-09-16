import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Glowing background blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#0a91ab] rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ffc045] rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Main Content */}
      <h1 className="text-[8rem] font-extrabold tracking-widest text-[#ffc045] drop-shadow-lg">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-medium text-gray-300 mt-4">
        Oops! Page Not Found 🚧
      </p>
      <p className="text-gray-400 mt-2 max-w-md text-center">
        The page you’re looking for doesn’t exist or might have been moved.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl font-semibold bg-[#0a91ab] text-white shadow-lg hover:bg-[#08778d] transition"
        >
          ⬅ Go Home
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-xl font-semibold bg-[#ffc045] text-black shadow-lg hover:bg-[#e6aa30] transition"
        >
          📩 Contact Us
        </Link>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-10 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
    </div>
  );
}