import React, { useState } from "react";
import {
  FaBars,
  FaEnvelope,
  FaHome,
  FaInfoCircle,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <Link to="/" className="flex items-center gap-1">
          <FaHome />
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="flex items-center gap-1">
          <FaInfoCircle />
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="flex items-center gap-1">
          <FaEnvelope />
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold text-primary">
          SABBIR
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>

      <div className="navbar-end lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-ghost text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-base-100 shadow-lg z-10 lg:hidden">
          <ul className="menu menu-vertical px-4 py-2">{navLinks}</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
