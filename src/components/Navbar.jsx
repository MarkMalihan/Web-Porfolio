import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-10 p-5 flex items-center justify-between bg-gray-800 text-white">
        <h1 className="text-xl font-bold tracking-[0.2em]">ARGEL MALIHAN</h1>

        <ul className="flex gap-5">
          <li className="hover:text-yellow-300">
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="hover:text-blue-300">
            <NavLink to="/Projects">Project</NavLink>
          </li>

          <li className="hover:text-green-300">
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
