import React from "react";
import emailjs from "emailjs-com";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contacts = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_Auxzon", // replace with your service ID
        "template_7vb69vg", // replace with your template ID
        e.target,
        "R6rizM8lpDLvtFWk7" // replace with your user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div className="mx-auto px-4 py-8 bg-gray-100 md:px-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">CONTACT</h2>
        <p className="mt-4">Transforming Ideas into Digital Solutions</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 p-4 flex flex-col ">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-grow">
            <div className="mb-4 ">
              <div className="flex items-center gap-2">
                <div className="flex justify-center items-center w-10 h-10 bg-blue-300 rounded-md ">
                  <FaLocationDot className="text-white text-xl" />
                </div>
                <div className="flex flex-col md:px-3">
                  <h3 className="text-xl font-bold ">Address</h3>
                  <p className="  mt-0">
                    Asset Corridor, Ponekkara, <br /> Edappally, Kochi,
                    <br />
                    Ernakulam, Kerala 682024
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4 ">
              <div className="flex items-center gap-2">
                <div className="flex justify-center items-center w-10 h-10 bg-blue-300 rounded-md ">
                  <FaMobile className="text-white text-xl" />
                </div>
                <div className="flex flex-col md:px-3">
                  <h3 className="text-xl font-bold ">Call Us</h3>
                  <p className="  mt-0">+91 9072168666</p>
                </div>
              </div>
            </div>
            <div className="mb-4 ">
              <div className="flex items-center gap-2">
                <div className="flex justify-center items-center w-10 h-10 bg-blue-300 rounded-md ">
                  <IoIosMail className="text-white text-xl" />
                </div>
                <div className="flex flex-col md:px-3">
                  <h3 className="text-xl font-bold ">Email Us</h3>
                  <p className="  mt-0"> Contact@auxzon.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-4 flex flex-col">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-grow">
            <form onSubmit={sendEmail}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Your Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline required"
                  id="message"
                  placeholder="Message"
                  rows="5"
                  name="message"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="custom-gradient text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
