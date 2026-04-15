import { useContext, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Timeline() {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? timeline
      : timeline.filter((t) => t.type === filter);

  const getIcon = (type) => {
    if (type === "Call") return "📞";
    if (type === "Text") return "💬";
    if (type === "Video") return "🎥";
    return "🤝";
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Timeline
          </h1>

          {/* Filter */}
          <select
            className="w-full md:w-64 p-2 border rounded-lg bg-white shadow-sm mb-6"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>All</option>
            <option>Call</option>
            <option>Text</option>
            <option>Video</option>
          </select>

          {/* Timeline Items */}
          <div className="space-y-3">
            {filtered.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="text-2xl">
                  {getIcon(t.type)}
                </div>

                {/* Content */}
                <div>
                  <p className="font-semibold text-gray-800">
                    {t.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    {t.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}