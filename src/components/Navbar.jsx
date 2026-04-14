import { NavLink } from "react-router-dom";

export default function Navbar() {

  const linkClass = ({ isActive }) =>
    isActive
      ? "relative flex items-center gap-2 px-4 py-1.5 rounded-md bg-green-800 text-white text-sm font-medium transition duration-300 shadow-[0_0_15px_rgba(34,197,94,0.7)]"
      : "relative flex items-center gap-2 px-4 py-1.5 rounded-md text-gray-600 text-sm font-medium transition duration-300 hover:bg-gray-200 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(0,0,0,0.15)]";

  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">

      {/* Logo Text */}
      <h1 className="font-semibold text-lg text-gray-800 tracking-wide">
        Keen<span className="text-green-700">Keeper</span>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-3">

        <NavLink to="/" className={linkClass}>
          🏠 <span>Home</span>
        </NavLink>

        <NavLink to="/timeline" className={linkClass}>
          🕒 <span>Timeline</span>
        </NavLink>

        <NavLink to="/stats" className={linkClass}>
          📈 <span>Stats</span>
        </NavLink>

      </div>

      {/* Mobile Menu */}
      <div className="md:hidden dropdown">
        <label tabIndex={0} className="text-xl cursor-pointer hover:scale-110 transition">
          ☰
        </label>

        <ul className="menu menu-sm dropdown-content mt-3 right-0 p-2 shadow bg-white rounded-lg w-44">

          <li><NavLink to="/">🏠 Home</NavLink></li>
          <li><NavLink to="/timeline">🕒 Timeline</NavLink></li>
          <li><NavLink to="/stats">📈 Stats</NavLink></li>

        </ul>
      </div>

    </div>
  );
}