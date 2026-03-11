import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const baseLink =
    "px-4 py-2 rounded-full font-medium transition";

  const normalLink =
    "text-gray-700 hover:bg-[#f0f0ff] hover:text-black";

  const activeLink =
    "bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white";

  const menuItem = (to, label, end = false) => (
    <NavLink
      to={to}
      end={end}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `${baseLink} ${isActive ? activeLink : normalLink}`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <nav
      className="
      sticky top-0 z-50
      bg-white
      flex justify-between items-center
      px-6 md:px-16
      py-5
      "
    >
      {/* LOGO */}
      <NavLink
        to="/"
        className="text-xl font-bold"
        style={{ textDecoration: "none" }}
      >
        Chutipas<span className="text-[#ff5da2]">.</span>
      </NavLink>

      {/* HAMBURGER */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* MENU DESKTOP */}
      <div className="hidden md:flex gap-6 items-center">
        {menuItem("/", "Home", true)}
        {menuItem("/about", "About")}
        {menuItem("/projects", "Projects")}
        {menuItem("/resume", "Resume")}
        {menuItem("/transcript", "Transcript")}
        {menuItem("/contact", "Contact")}
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div
          className="
          absolute
          top-full
          left-0
          w-full
          bg-white
          flex flex-col
          items-center
          gap-4
          py-6
          shadow-md
          md:hidden
          "
        >
          {menuItem("/", "Home", true)}
          {menuItem("/about", "About")}
          {menuItem("/projects", "Projects")}
          {menuItem("/resume", "Resume")}
          {menuItem("/transcript", "Transcript")}
          {menuItem("/contact", "Contact")}
        </div>
      )}
    </nav>
  );
}