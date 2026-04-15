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

  return (
    <>
      <Navbar />

      <div className="p-6">
        <h1 className="text-2xl font-bold">Timeline</h1>

        <select
          className="select mt-3"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option>All</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
        </select>

        {filtered.map((t, i) => (
          <div key={i} className="card p-3 mt-3">
            <p className="font-semibold">{t.title}</p>
            <small>{t.date}</small>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}