import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Stats() {
  const { timeline } = useContext(TimelineContext);

  const count = { Call: 0, Text: 0, Video: 0 };
  timeline.forEach((t) => count[t.type]++);

  const data = [
    { name: "Call", value: count.Call },
    { name: "Text", value: count.Text },
    { name: "Video", value: count.Video },
  ];

  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];

  return (
    <>
      <Navbar />

      <div className="flex justify-center mt-10">
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value">
            {data.map((e, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      <Footer />
    </>
  );
}