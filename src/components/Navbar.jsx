import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "flex items-center gap-1 px-3 py-1 rounded-lg bg-primary text-white"
      : "flex items-center gap-1 px-3 py-1 hover:bg-base-200 rounded-lg";

  return (
    <div className="navbar bg-base-100 shadow px-6">

      {/* Logo */}
      <div className="flex-1 flex items-center gap-2">
        <img src={logo} className="w-8" />
        <h1 className="font-bold text-xl">KinKeeper</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-3">

        <NavLink to="/" className={linkClass}>
          🏠 Home
        </NavLink>

        <NavLink to="/timeline" className={linkClass}>
          📜 Timeline
        </NavLink>

        <NavLink to="/stats" className={linkClass}>
          📊 Stats
        </NavLink>

      </div>

      {/* Mobile Menu */}
      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-ghost">☰</label>

        <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">

          <li><NavLink to="/">🏠 Home</NavLink></li>
          <li><NavLink to="/timeline">📜 Timeline</NavLink></li>
          <li><NavLink to="/stats">📊 Stats</NavLink></li>

        </ul>
      </div>

    </div>
  );
}