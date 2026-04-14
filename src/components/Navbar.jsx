import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {

  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-2 px-4 py-1.5 rounded-md bg-green-800 text-white text-sm font-medium"
      : "flex items-center gap-2 px-4 py-1.5 rounded-md text-gray-600 hover:bg-gray-200 text-sm font-medium";

  return (
    <div className="w-full bg-gray-100 border-b border-gray-200 px-6 py-3 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} className="w-7 h-7" />
        <h1 className="font-semibold text-lg text-gray-800">
          Keen<span className="text-green-700">Keeper</span>
        </h1>
      </div>

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
        <label tabIndex={0} className="text-xl cursor-pointer">
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