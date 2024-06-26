import React, { useState, useEffect } from "react";
import handleman from "../assets/images/handleman.png";
import logo from "../assets/logo.png";
import Abouts from "../pages/Abouts";
import Servicess from "../pages/Servicess";
import WhyChoose from "../pages/WhyChoose";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import Foot from "./Foot";
import Contacts from "./Contacts";
import emailjs from "emailjs-com";
import company from "../assets/images/company1.png";

function LandingPage() {
  const [loaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setLoaded(true);
    }, 100); // Adjust delay as needed

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menuOpen state
  };

  const closeMenu = () => {
    setMenuOpen(false); // Set menuOpen state to false to close the menu
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_Auxzon", // Replace with your service ID
        "template_7vb69vg", // Replace with your template ID
        e.target,
        "R6rizM8lpDLvtFWk7" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert(
            `Failed to send email. Please try again later.\nError: ${error.text}`
          );
        }
      );

    e.target.reset();
  };

  return (
    <div className="landing-page relative">
      {/* Navbar */}
      <nav
        className={`navbar bg-custom-gradient fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4  text-white md:px-16 ${
          visible ? "" : "hidden"
        }`}
      >
        <div className="navbar-brand">
          <img className="w-44" src={company} alt="Logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="md:ml-24 md:pl-96">
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="text-white">
              Home
            </a>
            <a href="#about" className="text-white">
              About
            </a>
            <a href="#servicess" className="text-white">
              Services
            </a>
            <a href="#contact" className="text-white">
              Contact
            </a>
          </div>
        </div>

        {/* Contact Button */}
        <a href="tel:+919072168666">
          <div className="navbar-brand flex justify-center items-center gap-2 w-40 h-12 md:w-48 rounded-md md:h-10 custom-gradient hover:bg-black cursor-pointer">
            <BsFillTelephoneOutboundFill />
            <span>+91 9072168666</span>
          </div>
        </a>

        {/* Toggle Menu Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Navbar Menu */}
      <div
        className={`navbar-container ${
          menuOpen ? "block" : "hidden"
        } sm:hidden fixed top-0 left-0 right-0 z-10 bg-black text-white py-4`}
      >
        <div className="navbar-links flex flex-col items-start px-5 space-y-4">
          <a href="#home" onClick={closeMenu} className="text-white">
            Home
          </a>
          <a href="#about" onClick={closeMenu} className="text-white">
            About
          </a>
          <a href="#servicess" onClick={closeMenu} className="text-white">
            Services
          </a>
          <a href="#contact" onClick={closeMenu} className="text-white">
            Contact
          </a>
        </div>

        {/* Toggle Closing Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-white focus:outline-none"
          aria-label="Close Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Home Section */}
      <div
        id="home"
        className={`custom-gradient w-full max-h-max md:h-screen flex flex-col md:flex-row py-4 relative ${
          loaded ? "loaded" : ""
        }`}
      >
        <img
          className="lazy-loaded w-full h-full object-cover md:w-auto"
          src={handleman}
          alt="Handleman"
          style={{ minHeight: "100vh" }}
        />
        <div className="md:w-1/2 absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center text-center md:text-right p-4 md:p-8">
          <div className="md:w-1/2">
            <h1 className="text-7xl font-extrabold text-white md:ml-32">
              Let's Talk Ideas
            </h1>
          </div>
          <div className="absolute md:ml-[1300px] w-full h-full flex items-center justify-center p-8 mt-20">
            <div className="bg-white p-8 shadow-lg rounded w-full max-w-md md:w-full">
              <div className="flex flex-col text-left">
                <h2 className="text-2xl font-bold mb-4">
                  Let's Get Started Now!
                  <hr className="text-black w-20 bg-indigo-500 h-2 md:mt-3 mt-3" />
                </h2>
                <p>Let's Talk About Your Needs</p>

                <form className="space-y-4 md:py-5" onSubmit={sendEmail}>
                  <div>
                    <label className="text-gray-700 text-left">Your name</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Your email</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Phone number</label>
                    <input
                      type="text"
                      name="phone"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">Services</label>
                    <select
                      name="service"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                    >
                      <option value="">Select Services</option>
                      <option value="Marketing Services">
                        Marketing Services
                      </option>
                      <option value="Software Solutions">
                        Software Solutions
                      </option>
                      <option value="E-commerce Business Solutions">
                        E-commerce Business Solutions
                      </option>
                      <option value="Data Solutions">Data Solutions</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="custom-gradient w-full md:w-24 text-white p-2 rounded"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="w-full h-full">
        <Abouts />
      </div>

      {/* Services Section */}
      <div id="servicess">
        <Servicess />
      </div>

      {/* Why Choose Section */}
      <div id="whychoose">
        <WhyChoose />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <Contacts />
      </div>

      <Foot />
    </div>
  );
}

export default LandingPage;
