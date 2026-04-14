import { Link } from "react-router-dom";

export default function FriendCard({ friend }) {
  const statusColor = {
    "overdue": "border-red-400",
    "almost due": "border-yellow-400",
    "on-track": "border-green-400"
  };

  return (
    <Link to={`/friend/${friend.id}`}>
      <div className={`relative backdrop-blur-lg bg-white/30 border ${statusColor[friend.status]} rounded-2xl p-4 shadow-lg hover:scale-105 transition duration-300`}>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 blur-xl"></div>

        <div className="relative z-10 text-center">

          <img
            src={friend.picture}
            className="w-16 h-16 rounded-full mx-auto border-2 border-white shadow"
          />

          <h2 className="font-bold mt-3 text-lg">{friend.name}</h2>

          <p className="text-sm opacity-80">
            {friend.days_since_contact} days ago
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-1 mt-3">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-white/40 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

      </div>
    </Link>
  );
}