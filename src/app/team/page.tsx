import TeamCards from "./teamcards/page";

export default function TeamPage() {
  return (
    <div className="p-6">
        
      <h1 className="text-3xl font-bold mb-4">Team</h1>
      <p className="text-lg text-gray-700">
        This page can showcase highlights, photos, or a quick glimpse of your work.
      </p>
      <TeamCards />
    </div>
  );
}
