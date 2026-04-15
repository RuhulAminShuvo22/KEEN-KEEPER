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
  const { addEntry } = useContext(TimelineContext);

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

      <div className="grid md:grid-cols-2 gap-6 p-6">

        {/* LEFT */}
        <div className="card p-6 shadow text-center">
          <img src={friend.picture} className="w-24 rounded-full mx-auto" />
          <h2 className="text-xl font-bold mt-2">{friend.name}</h2>
          <p>{friend.email}</p>
          <p className="mt-2">{friend.bio}</p>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">

          <div className="grid grid-cols-3 gap-2">
            <div className="card p-2 text-center">
              {friend.days_since_contact} Days
            </div>
            <div className="card p-2 text-center">
              Goal: {friend.goal}
            </div>
            <div className="card p-2 text-center">
              {friend.next_due_date}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => handle("Call")} className="btn">📞 Call</button>
            <button onClick={() => handle("Text")} className="btn">💬 Text</button>
            <button onClick={() => handle("Video")} className="btn">🎥 Video</button>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}