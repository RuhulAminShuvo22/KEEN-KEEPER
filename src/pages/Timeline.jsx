import { useContext, useState } from "react";
import { TimelineContext } from "../context/TimelineContext";

export default function Timeline() {
  const { timeline } = useContext(TimelineContext);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? timeline
    : timeline.filter(t => t.type === filter);

  return (
    <div className="p-6">
      <select onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>
      </select>

      {filtered.map((t, i) => (
        <div key={i} className="card p-2 mt-2">
          {t.title}
        </div>
      ))}
    </div>
  );
}