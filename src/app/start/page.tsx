import Navbar from "@/app/components/navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold">Welcome to Home</h1>
        <p>Select a page from the navigation bar above.</p>
      </main>
    </div>
  );
}
