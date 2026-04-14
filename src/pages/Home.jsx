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

  useEffect(() => {
    fetch("/friends.json")
      .then(res => res.json())
      .then(data => {
        setFriends(data);
        setLoading(false);
      });
  }, []);

  const filtered = friends
    .filter(f => f.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.days_since_contact - a.days_since_contact);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <Banner />

      <input
        className="input input-bordered w-full max-w-md mx-auto block mt-6"
        placeholder="Search friend..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-4 gap-4 p-6">
        {filtered.map(f => (
          <FriendCard key={f.id} friend={f} />
        ))}
      </div>

      <Footer />
    </>
  );
}