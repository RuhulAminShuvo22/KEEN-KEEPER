//import hero from "../assets/hero.png";

export default function Banner() {
  return (
    <div className="bg-gray-100 py-16 px-6 text-center">

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
        Friends to keep close in your life
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
      </p>

      {/* Button */}
      <button className="bg-green-800 text-white px-5 py-2 rounded-md text-sm font-medium 
      hover:bg-green-900 transition duration-300 shadow-sm hover:shadow-[0_0_12px_rgba(34,197,94,0.6)]">
        + Add a Friend
      </button>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-sm py-6 hover:shadow-md transition">
          <h2 className="text-2xl font-bold text-gray-800">10</h2>
          <p className="text-sm text-gray-500 mt-1">Total Friends</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-sm py-6 hover:shadow-md transition">
          <h2 className="text-2xl font-bold text-gray-800">3</h2>
          <p className="text-sm text-gray-500 mt-1">On Track</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-sm py-6 hover:shadow-md transition">
          <h2 className="text-2xl font-bold text-gray-800">6</h2>
          <p className="text-sm text-gray-500 mt-1">Need Attention</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-sm py-6 hover:shadow-md transition">
          <h2 className="text-2xl font-bold text-gray-800">12</h2>
          <p className="text-sm text-gray-500 mt-1">Interactions This Month</p>
        </div>

      </div>

    </div>
  );
}