import { NavLink } from "react-router-dom";

export default function Navbar() {
  const baseLink =
    "px-4 py-2 rounded-full font-medium transition";

  const normalLink =
    "text-gray-700 hover:bg-[#f0f0ff] hover:text-black";

  const activeLink =
    "bg-gradient-to-r from-[#ff5da2] to-[#7b7cff] text-white";

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

      {/* MENU */}
      <div className="flex gap-6 items-center">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${baseLink} ${
              isActive ? activeLink : normalLink
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseLink} ${
              isActive ? activeLink : normalLink
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${baseLink} ${
              isActive ? activeLink : normalLink
            }`
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `${baseLink} ${
              isActive ? activeLink : normalLink
            }`
          }
        >
          Resume
        </NavLink>

        <NavLink
          to="/transcript"
          className={({ isActive }) =>
            `${baseLink} ${
              isActive ? activeLink : normalLink
            }`
          }
        >
          Transcript
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${baseLink} ${
              isActive ? activeLink : normalLink
            }`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
