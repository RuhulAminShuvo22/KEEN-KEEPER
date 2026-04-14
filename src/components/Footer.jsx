import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-base-200 mt-10 p-8">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-center">

        {/* LEFT */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-8" />
          <h1 className="font-bold text-lg">KinKeeper</h1>
        </div>

        {/* CENTER */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Stay connected with your friends and never lose touch 💙
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end gap-4">
          <img src={facebook} className="w-6 cursor-pointer" />
          <img src={twitter} className="w-6 cursor-pointer" />
          <img src={instagram} className="w-6 cursor-pointer" />
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center mt-6 text-sm text-gray-400">
        © 2026 KinKeeper. All rights reserved.
      </div>

    </footer>
  );
}