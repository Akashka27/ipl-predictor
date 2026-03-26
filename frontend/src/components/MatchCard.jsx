import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function MatchCard({ match }) {
  const nav = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-r from-purple-900 to-black p-4 rounded-xl shadow-lg text-white"
    >
      <h2 className="text-lg font-bold">
        {match.team_a} vs {match.team_b}
      </h2>

      <button
        onClick={() => nav(`/predict/${match.id}`)}
        className="bg-green-500 px-4 py-2 mt-3 rounded-lg"
      >
        Predict Now
      </button>
    </motion.div>
  );
}
