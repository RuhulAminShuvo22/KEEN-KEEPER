import { useParams } from "react-router-dom";
import data from "../../public/friends.json";
import { useContext } from "react";
import { TimelineContext } from "../context/TimelineContext";
import { toast } from "react-toastify";

export default function FriendDetails() {
  const { id } = useParams();
  const friend = data.find(f => f.id === Number(id));
  const { addEntry } = useContext(TimelineContext);

  const handle = (type) => {
    addEntry(type, friend.name);
    toast.success(`${type} added`);
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">

      <div className="card p-6 shadow">
        <img src={friend.picture} className="w-24 rounded-full mx-auto" />
        <h2 className="text-center text-xl font-bold">{friend.name}</h2>
        <p>{friend.email}</p>
        <p>{friend.bio}</p>
      </div>

      <div className="space-y-4">

        <div className="grid grid-cols-3 gap-2">
          <div className="card p-2 text-center">Days {friend.days_since_contact}</div>
          <div className="card p-2 text-center">Goal {friend.goal}</div>
          <div className="card p-2 text-center">{friend.next_due_date}</div>
        </div>

        <div className="flex gap-3">
          <button onClick={() => handle("Call")} className="btn">Call</button>
          <button onClick={() => handle("Text")} className="btn">Text</button>
          <button onClick={() => handle("Video")} className="btn">Video</button>
        </div>

      </div>
    </div>
  );
}