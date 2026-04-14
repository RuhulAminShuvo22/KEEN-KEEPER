export default function Banner({
  totalFriends = 12,
  onTrack = 6,
  needAttention = 6,
  interactions = 12,
  onAddFriend,
}) {
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
      <button
        onClick={onAddFriend}
        className="bg-green-800 text-white px-5 py-2 rounded-md text-sm font-medium 
        transition duration-300 ease-in-out
        hover:bg-green-900 hover:scale-105 hover:-translate-y-0.5
        hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
      >
        + Add a Friend
      </button>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-sm py-6 transition duration-300 hover:shadow-md hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-gray-800">
            {totalFriends}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Total Friends</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-sm py-6 transition duration-300 hover:shadow-md hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-gray-800">
            {onTrack}
          </h2>
          <p className="text-sm text-gray-500 mt-1">On Track</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-sm py-6 transition duration-300 hover:shadow-md hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-gray-800">
            {needAttention}
          </h2>
          <p className="text-sm text-gray-500 mt-1">Need Attention</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-sm py-6 transition duration-300 hover:shadow-md hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-gray-800">
            {interactions}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Interactions This Month
          </p>
        </div>

      </div>

    </div>
  );
}