import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import companyname from "../assets/images/companyname.png";

function Navbar({ isMenuOpen, toggleMenu }) {
  return (
    <div className="w-full bg-white rounded-xl md:py-3 py-3">
      <div className="container  w-[100%] flex justify-between items-center p-4 sm:p-6 lg:p-8 ">
        <Link
          to="/"
          className="flex items-center  text-white font-bold text-xl"
        >
          <img className="w-[150px]" src={companyname} alt="Logo" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden sm:flex sm:items-center gap-3">
          <Link
            to="/"
            className="text-black hover:text-gray-200 transition duration-300 mx-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black hover:text-gray-200 transition duration-300 mx-4"
          >
            About us
          </Link>
          <Link
            to="/services"
            className="text-black hover:text-gray-200 transition duration-300 mx-4"
          >
            Our Services
          </Link>
          <Link
            to="/hexa"
            className="text-black hover:text-gray-200 transition duration-300 mx-4"
          >
            Auxzon Hexa
          </Link>
          <Link
            to="/careers"
            className="text-black hover:text-gray-200 transition duration-300 mx-4"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="text-black hover:text-gray-200 transition duration-300 mx-4"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="block sm:hidden text-black focus:outline-none"
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
          isMenuOpen ? "block" : "hidden"
        } sm:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-black focus:outline-none"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="navbar-links flex flex-col items-start px-5 space-y-4 py-6">
          <Link to="/" onClick={toggleMenu} className="text-black">
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="text-black">
            About us
          </Link>
          <Link to="/services" onClick={toggleMenu} className="text-black">
            Our Services
          </Link>
          <Link to="/hexa" onClick={toggleMenu} className="text-black">
            Auxzon Hexa
          </Link>
          <Link to="/careers" onClick={toggleMenu} className="text-black">
            Careers
          </Link>
          <Link to="/contact" onClick={toggleMenu} className="text-black">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
