import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function FriendDetails() {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const { addEntry, timeline } = useContext(TimelineContext);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => f.id === Number(id));
        setFriend(found);
      });
  }, [id]);

  if (!friend) return <Loader />;

  const handle = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} added`);
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {/* 🔵 LEFT SIDE */}
          <div className="space-y-4">

            {/* PROFILE */}
            <div className="bg-white rounded-xl p-6 shadow text-center">
              <img
                src={friend.picture}
                className="w-20 h-20 rounded-full mx-auto"
              />

              <h2 className="font-bold text-lg mt-3">{friend.name}</h2>

              <span className={`badge mt-2 ${
                friend.status === "overdue"
                  ? "badge-error"
                  : friend.status === "almost due"
                  ? "badge-warning"
                  : "badge-success"
              }`}>
                {friend.status}
              </span>

              <p className="text-gray-500 mt-2 italic">{friend.bio}</p>
              <p className="text-sm text-gray-400">{friend.email}</p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="space-y-2">
              <button className="btn w-full">⏰ Snooze 2 Weeks</button>
              <button className="btn w-full">📦 Archive</button>
              <button className="btn w-full btn-error">🗑️ Delete</button>
            </div>

          </div>

          {/* 🟢 RIGHT SIDE */}
          <div className="md:col-span-2 space-y-6">

            {/* 📊 STATS */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl shadow text-center">
                <h2 className="text-xl font-bold">
                  {friend.days_since_contact}
                </h2>
                <p className="text-sm text-gray-500">Days Since Contact</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow text-center">
                <h2 className="text-xl font-bold">{friend.goal}</h2>
                <p className="text-sm text-gray-500">Goal (Days)</p>
              </div>

              <div className="bg-white p-4 rounded-xl shadow text-center">
                <h2 className="text-md font-bold">
                  {friend.next_due_date}
                </h2>
                <p className="text-sm text-gray-500">Next Due</p>
              </div>
            </div>

            {/* 🎯 RELATIONSHIP GOAL */}
            <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
              <div>
                <h3 className="font-semibold">Relationship Goal</h3>
                <p className="text-gray-500">
                  Connect every {friend.goal} days
                </p>
              </div>
              <button className="btn btn-sm">Edit</button>
            </div>

            {/* ⚡ QUICK CHECK-IN */}
            <div className="bg-white p-5 rounded-xl shadow">
              <h3 className="font-semibold mb-4">Quick Check-In</h3>

              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => handle("Call")}
                  className="btn flex flex-col gap-1"
                >
                  📞
                  <span>Call</span>
                </button>

                <button
                  onClick={() => handle("Text")}
                  className="btn flex flex-col gap-1"
                >
                  💬
                  <span>Text</span>
                </button>

                <button
                  onClick={() => handle("Video")}
                  className="btn flex flex-col gap-1"
                >
                  🎥
                  <span>Video</span>
                </button>
              </div>
            </div>

            {/* 📜 RECENT INTERACTIONS (FINAL DESIGN) */}
            <div className="bg-white p-5 rounded-xl shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg">
                  Recent Interactions
                </h3>
                <button className="text-sm text-gray-500 hover:underline">
                  ⏱ Full History
                </button>
              </div>

              {timeline.length === 0 && (
                <p className="text-gray-400 text-sm">
                  No interactions yet
                </p>
              )}

              {timeline.slice(0, 5).map((t, i) => {

                const getIcon = () => {
                  if (t.type === "Call") return "📞";
                  if (t.type === "Text") return "💬";
                  if (t.type === "Video") return "🎥";
                  return "📌";
                };

                return (
                  <div
                    key={i}
                    className="flex items-center justify-between py-3 border-b last:border-none hover:bg-gray-50 px-2 rounded-lg transition"
                  >
                    {/* LEFT */}
                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-lg">
                        {getIcon()}
                      </div>

                      <div>
                        <p className="font-medium">{t.type}</p>
                        <p className="text-sm text-gray-500">
                          {t.title}
                        </p>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <span className="text-xs text-gray-400">
                      {t.date}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}