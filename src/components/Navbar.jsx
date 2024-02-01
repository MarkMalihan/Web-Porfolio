import React, { useState } from "react";
import { NavLink, useMatch } from "react-router-dom";

function Navbar() {
  const isHomeActive = useMatch("/");
  const isProjectsActive = useMatch("/Projects");
  const isContactActive = useMatch("/Contact");
  return (
    <>
      <nav className="sticky top-0 z-10 p-5 m-2 md:m-5 flex items-center justify-between bg-gray-800 text-white rounded-md shadow-md">
        <h1 className="hidden md:block text-xl font-bold tracking-[0.2em]">
          ARGEL MALIHAN
        </h1>
        <h1 className="block md:hidden text-xl font-bold tracking-[0.2em]">
          AM
        </h1>
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/"
              className={`px-4 py-1 rounded-full hover:bg-blue-200 hover:text-black/80 ${
                isHomeActive
                  ? "bg-blue-200 px-4 py-1 rounded-full text-black/80"
                  : ""
              }`}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Projects"
              className={`px-4 py-1 rounded-full hover:bg-blue-200 hover:text-black/80 ${
                isProjectsActive
                  ? "bg-blue-200 px-4 py-1 rounded-full text-black/80"
                  : ""
              }`}
            >
              Project
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Contact"
              className={`px-4 py-1 rounded-full hover:bg-blue-200 hover:text-black/80 ${
                isContactActive
                  ? "bg-blue-200 px-4 py-1 rounded-full text-black/80"
                  : ""
              }`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
