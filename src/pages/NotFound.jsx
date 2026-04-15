import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 px-4">
      
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-10 text-center max-w-lg w-full">
        
        {/* Emoji / Illustration */}
        <div className="text-6xl mb-4">😕</div>

        {/* 404 */}
        <h1 className="text-6xl font-extrabold text-white mb-2">404</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          Oops! Friend not found
        </h2>

        {/* Description */}
        <p className="text-white/80 mb-6">
          Looks like this page or friend doesn’t exist.  
          Maybe they are offline or the link is broken.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            to="/"
            className="px-6 py-2 rounded-lg bg-white text-blue-600 font-semibold hover:bg-gray-100 transition"
          >
            🏠 Back Home
          </Link>

          <Link
            to="/friends"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold hover:opacity-90 transition"
          >
            👥 View Friends
          </Link>

        </div>
      </div>
    </div>
  );
}