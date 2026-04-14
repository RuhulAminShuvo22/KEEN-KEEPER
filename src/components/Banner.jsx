import hero from "../assets/hero.png";

export default function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-16 px-6">

      {/* Content */}
      <div className="max-w-6xl mx-auto text-center">

        <img src={hero} className="w-40 mx-auto mb-6 drop-shadow-xl" />

        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Stay Connected 💙
        </h1>

        <p className="text-lg opacity-90 mb-6">
          Track your friendships & never lose touch again
        </p>

        <button className="btn bg-white text-black hover:bg-gray-200 border-none">
          ➕ Add a Friend
        </button>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mt-10">

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 shadow">
            <h2 className="text-xl font-bold">12</h2>
            <p>Total Friends</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 shadow">
            <h2 className="text-xl font-bold">4</h2>
            <p>Overdue</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 shadow">
            <h2 className="text-xl font-bold">5</h2>
            <p>Almost Due</p>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 shadow">
            <h2 className="text-xl font-bold">3</h2>
            <p>On Track</p>
          </div>

        </div>

      </div>
    </div>
  );
}