import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";

export default function Error402() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-10 text-center max-w-lg w-full">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 p-5 rounded-full">
            <FaLock className="text-white text-4xl" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-extrabold text-white mb-2">402</h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mb-4">
          Payment Required
        </h2>

        {/* Description */}
        <p className="text-white/80 mb-6">
          Sorry! You need to complete your payment to access this content.
          Please upgrade your plan or try again later.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link
            to="/"
            className="px-6 py-2 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-gray-100 transition"
          >
            Go Home
          </Link>

          <Link
            to="/pricing"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold hover:opacity-90 transition"
          >
            Upgrade Plan
          </Link>

        </div>
      </div>
    </div>
  );
}