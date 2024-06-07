import React, { useState } from "react";
import emailjs from "emailjs-com";

const Layout = ({ children }) => {
  const [isEnquireFormOpen, setIsEnquireFormOpen] = useState(false);

  const toggleEnquireForm = () => {
    setIsEnquireFormOpen(!isEnquireFormOpen);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5cxyivh", // Replace with your service ID
        "template_renwa6e", // Replace with your template ID
        e.target,
        "TSUsvis_8cY4JVhOP" // Replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email successfully sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );

    e.target.reset();
    toggleEnquireForm();
  };

  return (
    <div className="overflow-x-hidden">
      <div>{children}</div>
      <button
        className="inset-y-0 fixed w-3 h-36 right-1 top-1/2 transform -translate-y-1/2 bg-custom-gradient text-white px-5 md:px-6 py-2 rounded-lg hover:bg-red-500 flex justify-center items-center"
        onClick={toggleEnquireForm}
      >
        <p className="origin-center writing-mode-vertical-rl">Enquire Now</p>
      </button>

      {isEnquireFormOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-[#f0f2f4] w-3/4 p-6 rounded-xl shadow-lg relative md:w-1/2 md:p-20 md:border-t-8 border-purple">
            <button
              className="absolute top-4  right-4 text-2xl text-black"
              onClick={toggleEnquireForm}
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Get in Touch
            </h2>
            <form onSubmit={sendEmail}>
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
                  className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
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
                  className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  placeholder="Enter Your Number"
                  className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="services"
                  className="block text-sm font-medium text-gray-700"
                >
                  Services
                </label>
                <select
                  id="services"
                  name="services"
                  className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
                  required
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  <option value="Analytix Marketing">Analytix Marketing</option>
                  <option value="Software Solution">Software Solution</option>
                  <option value="Business Consulting">
                    Business Consulting
                  </option>
                  <option value="Data Solutions">Data Solutions</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-custom-gradient w-full text-white py-2 px-4 rounded-md text-sm hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
