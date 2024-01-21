import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-10 p-3 flex items-center justify-between bg-gray-800 text-white">
        <div className="flex items-center gap-5">
          <img
            src="/am-logo2.png"
            alt="LOGO"
            className="rounded-md"
            width="50px"
          />

          <h1 className="text-xl font-bold tracking-[0.2em]">ARGEL MALIHAN</h1>
        </div>

        <ul className="flex gap-5">
          <li className="hover:text-yellow-300">
            <NavLink to="/Home">Home</NavLink>
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
