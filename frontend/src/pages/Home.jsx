import MatchCard from "../components/MatchCard";

export default function Home() {
  const matches = [
    { id: 1, team_a: "CSK", team_b: "MI" },
  ];

  return (
    <div className="p-4">
      {matches.map((m) => (
        <MatchCard key={m.id} match={m} />
      ))}
    </div>
  );
}
