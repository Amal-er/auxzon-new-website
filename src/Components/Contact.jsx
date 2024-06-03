import React, { useState } from "react";
import Navbar from "./Navbar";
import contactbg from "../assets/images/contactbg.webp";
import Footer from "./Footer";

const Contact = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center text-black px-3">
        <div className="mt-4 w-[95%]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="w-full flex flex-col px-2 py-6 md:px-8">
          {/* Header Section */}
          <div
            className="flex flex-col justify-center items-center bg-cover bg-center w-full h-56 md:h-[499px] rounded-xl mb-6 md:mb-10"
            style={{ backgroundImage: `url(${contactbg})` }}
          ></div>

          {/* Who we are section */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center bg-white ">
            <div className="flex flex-col md:flex-row w-full md:px-10">
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 md:px-0 mb-6 md:mb-0 leading-relaxed">
                <p className="text-black font-bold uppercase">Get in Touch</p>
                <h2 className="text-black font-bold text-4xl md:text-5xl leading-tight md:leading-tight">
                  We are always ready <br /> to help you and <br /> answer your{" "}
                  <br /> questions
                </h2>
              </div>
              <div className="w-full md:w-1/2 bg-[#f0f2f4] md:ml-14 p-6 md:px-10 rounded-lg shadow-lg md:m-7">
                <h1 className="text-2xl font-semibold mb-4">Get in Touch</h1>
                <p className="mb-6">
                  Define your goals and identify areas where AI can add value to
                  your business
                </p>
                <form onSubmit="">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Your Name"
                      value=""
                      onChange=""
                      className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value=""
                      onChange=""
                      className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Enter Your Subject"
                      value=""
                      onChange=""
                      className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Enter Your Message"
                      value=""
                      onChange=""
                      className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="custom-gradient w-full text-white py-2 px-4 rounded-md text-sm hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
