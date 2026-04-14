import { Link } from "react-router-dom";

export default function FriendCard({ friend }) {

  const statusStyles = {
    "overdue": "bg-red-500 text-white",
    "almost due": "bg-yellow-400 text-white",
    "on-track": "bg-green-500 text-white"
  };

  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition duration-300 text-center">

        {/* Profile Image */}
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-16 h-16 rounded-full mx-auto object-cover"
        />

        {/* Name */}
        <h2 className="font-semibold mt-3 text-lg">
          {friend.name}
        </h2>

        {/* Days */}
        <p className="text-sm text-gray-500">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {friend.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status Badge (Bottom like red mark) */}
        <div className="mt-3">
          <span
            className={`text-xs px-3 py-1 rounded-full ${statusStyles[friend.status]}`}
          >
            {friend.status === "almost due"
              ? "Almost Due"
              : friend.status === "on-track"
              ? "On-Track"
              : "Overdue"}
          </span>
        </div>

      </div>
    </Link>
  );
}