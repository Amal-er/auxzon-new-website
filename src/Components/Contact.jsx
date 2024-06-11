import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import contactbg from "../assets/images/contact2.webp";
import Footer from "./Footer";
import Layout from "./Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting form with data:", formData); // Debugging log

    emailjs
      .send(
        "service_Auxzon", // Replace with your EmailJS service ID
        "template_7vb69vg", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "contact@auxzon.com", // Explicitly set the recipient email
        },
        "R6rizM8lpDLvtFWk7" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Error sending message");
        }
      );
  };

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
            className="relative flex flex-col justify-left items-left bg-cover bg-center w-full h-56 md:h-[260px] rounded-xl mb-10 "
            style={{
              backgroundImage: `url(${contactbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative p-5 flex flex-col justify-left items-left  md:px-12">
              <h1 className="text-[33px] font-bold text-white">Contact</h1>

              <p className="text-left text-sm sm:text-base lg:text-lg md:py-7 text-white tracking-wide">
                We're here to turn your ideas into reality. Reach out to us and
                start a conversation <br /> that could redefine your business.
              </p>
              <p className="text-white">
                Home |<span className="text-white md:pl-2"> Contact</span>
              </p>
            </div>
          </div>
          {/* Who we are section */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center bg-white">
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
                <form onSubmit={handleSubmit}>
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
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
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
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
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
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
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
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      required
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
      <Layout />
      <Footer />
    </>
  );
};

export default Contact;
