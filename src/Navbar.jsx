import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({ isMenuOpen, toggleMenu }) {
  return (
    <div className="w-full h-16 p-4 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center mr-4 text-white font-bold text-xl"
        >
          <img className="w-10" src={logo} alt="Logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex sm:items-center gap-3">
          <Link
            to="/"
            className="text-white hover:text-gray-200 transition duration-300 mx-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-200 transition duration-300 mx-4"
          >
            About us
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-200 transition duration-300 mx-4"
          >
            Our Services
          </Link>
          <Link
            to="/hexa"
            className="text-white hover:text-gray-200 transition duration-300 mx-4"
          >
            Auxzon Hexa
          </Link>
          <Link
            to="/careers"
            className="text-white hover:text-gray-200 transition duration-300 mx-4"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-200 transition duration-300 mx-4"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="block sm:hidden text-white focus:outline-none"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar-container ${
          isMenuOpen ? "show" : "hidden"
        } sm:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none"
        >
          {/* <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg> */}
          <svg
            className=" mt-3 mr-7   h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="navbar-links">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About us
          </Link>
          <Link to="/services" onClick={toggleMenu}>
            Our Services
          </Link>
          <Link to="/hexa" onClick={toggleMenu}>
            Auxzon Hexa
          </Link>
          <Link to="/careers" onClick={toggleMenu}>
            Careers
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
