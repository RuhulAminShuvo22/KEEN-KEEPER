import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import FriendCard from "../components/FriendCard";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  // 🔥 SMART SEARCH + SORT
  const filtered = friends
    .filter((f) =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.email.toLowerCase().includes(search.toLowerCase()) ||
      f.bio.toLowerCase().includes(search.toLowerCase()) ||
      f.tags.join(" ").toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "latest"
        ? b.days_since_contact - a.days_since_contact
        : a.days_since_contact - b.days_since_contact
    );

  if (loading) return <Loader />;

  return (
    <>
      

      {/* 🔍 Search + Sort */}
      <div className="flex flex-col md:flex-row gap-3 justify-center mt-6">

        <input
          className="input input-bordered w-full max-w-md"
          placeholder="Search friends..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered"
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="latest">Latest Contact</option>
          <option value="oldest">Oldest Contact</option>
        </select>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-4 gap-4 p-6">
        {filtered.map((f) => (
          <FriendCard key={f.id} friend={f} />
        ))}
      </div>

      
    </>
  );
}