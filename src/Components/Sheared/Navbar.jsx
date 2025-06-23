import React, { useEffect, useState } from "react";
import { FaBars, FaDownload, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const navLinks = (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#education">Education</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 z-50 px-4">
      {/* Logo */}
      <div className="navbar-start">
        <a className="text-xl font-bold">Md Sabbir</a>
      </div>

      {/* Center Links - Hidden on Small Screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium ">
          {navLinks}
        </ul>
      </div>

      {/* Right Side - Button + Theme Toggle */}
      <div className="navbar-end hidden md:flex items-center gap-3">
        <button
          onClick={() => setIsDark(!isDark)}
          className="btn btn-ghost btn-sm text-xl"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>
        <a
          href="/src/assets/sabbir-front-end-developer.pdf"
          download
          className="btn btn-primary btn-sm flex items-center gap-2"
        >
          <FaDownload /> Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden ml-auto">
        <button
          onClick={() => setOpen(!open)}
          className="btn btn-ghost text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-base-100 p-4 shadow-md lg:hidden z-40">
          <ul className="menu menu-vertical space-y-2 font-medium w-full">
            {navLinks}
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <a
              href="/src/assets/sabbir-front-end-developer.pdf"
              download
              className="btn btn-primary btn-sm flex items-center gap-2"
            >
              <FaDownload /> Resume
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="btn btn-ghost btn-sm text-xl"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
