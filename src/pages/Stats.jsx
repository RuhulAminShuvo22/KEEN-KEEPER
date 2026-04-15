import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Stats() {
  const { timeline } = useContext(TimelineContext);

  // 🔹 Logic unchanged
  const count = { Call: 0, Text: 0, Video: 0 };
  timeline.forEach((t) => count[t.type]++);

  const data = [
    { name: "Call", value: count.Call },
    { name: "Text", value: count.Text },
    { name: "Video", value: count.Video },
  ];

  // 🎨 Updated colors (more premium look)
  const COLORS = ["#22c55e", "#7c3aed", "#065f46"];

  return (
    <>
      <Navbar />

      {/* Main Section */}
      <div className="bg-gray-100 min-h-screen py-12 px-4">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Friendship Analytics
        </h1>

        {/* Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
          
          {/* Sub title */}
          <h2 className="text-sm text-green-500 mb-6">
            By Interaction Type
          </h2>

          {/* Chart */}
          <div className="flex justify-center">
            <PieChart width={300} height={300}>
              
              <Pie
                data={data}
                dataKey="value"
                innerRadius={70}   // 🔥 donut style
                outerRadius={100}
                paddingAngle={5}
              >
                {data.map((e, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}