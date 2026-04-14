import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

export default function Footer() {
  return (
    <footer className="mt-10">

      {/* TOP BANNER */}
      <div className="bg-[#295c4a] text-center text-white py-16 px-6">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          KeenKeeper
        </h1>

        {/* Subtitle */}
        <p className="text-sm md:text-base text-gray-200 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mt-6">
          <p className="mb-3 text-sm text-gray-200">Social Links</p>

          <div className="flex justify-center gap-4">

            {/* Facebook */}
            <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer 
            transition duration-300 ease-in-out
            hover:scale-110 hover:-translate-y-1 
            hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]">
              <img src={facebook} className="w-5" />
            </div>

            {/* Instagram */}
            <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer 
            transition duration-300 ease-in-out
            hover:scale-110 hover:-translate-y-1 
            hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]">
              <img src={instagram} className="w-5" />
            </div>

            {/* Twitter */}
            <div className="bg-white p-2 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer 
            transition duration-300 ease-in-out
            hover:scale-110 hover:-translate-y-1 
            hover:shadow-[0_0_20px_rgba(255,255,255,0.7)]">
              <img src={twitter} className="w-5" />
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#295c4a] border-t border-white/10 text-gray-300 text-sm px-6 py-4 flex flex-col md:flex-row justify-between items-center">

        {/* Left */}
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        {/* Right */}
        <div className="flex gap-6 mt-2 md:mt-0">
          <span className="cursor-pointer hover:text-white transition">Privacy Policy</span>
          <span className="cursor-pointer hover:text-white transition">Terms of Service</span>
          <span className="cursor-pointer hover:text-white transition">Cookies</span>
        </div>

      </div>

    </footer>
  );
}