import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ooze from "../assets/rep.webp";
import ash from "../assets/images/ash.svg";
// import trail from "../video/trail.mp4";
import auxzonv1 from "../video/auxzonv1.mp4";
import bcsolu from "../assets/images/bcsolu.png";
import datasolu from "../assets/images/datasolu.png";
import analytix from "../assets/images/analytix.png";
import software from "../assets/images/softwaresicon.png";

const services = [
  { title: "Analytics Marketing", icon: analytix },
  { title: "Software Solution", icon: software },
  { title: "Business Consulting Solutions", icon: bcsolu },
  { title: "Data Solutions", icon: datasolu },
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      {/* <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} /> */}

      {/* Header Section */}
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center justify-center text-white px-3">
        <div className="mt-4 w-[95%]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        <div className="w-full h-auto flex flex-col md:flex-row mt-14">
          <div className="w-full md:w-1/2 md:px-5 flex justify-start">
            <h1 className="text-4xl md:text-7xl px-10 text-black">
              Harness the <br /> <span>power of </span>
              <br /> <span className="gradient-text ">Artificial </span>
              <br />
              <span className="gradient-text ">intelligence</span>
            </h1>
          </div>
          <div className="w-full md:w-1/2 py-7 flex flex-col justify-center px-5 md:py-24 md:px-20 ">
            <p className="text-left md:text-left mb-4 text-black">
              Unveiling the power of your data. Empower yourself with auxzon and
              transform your data into a strategic asset for sustainable growth
              and innovation.
            </p>
            <button className="w-36 h-12 rounded-full flex py-2 justify-center bg-slate-700 items-center mt-4 hover:bg-red-500 ">
              Discover
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-64 md:h-96 md:px-5 ">
          <img className="rounded-3xl w-full h-full" src={ooze} alt="" />
        </div>
      </div>

      {/* About Us Section */}
      <div className="w-full h-auto flex flex-col md:flex-row py-4">
        <div className="w-full md:w-1/2 py-10 flex justify-center items-center">
          <img className="w-auto max-h-48 md:max-h-64" src={ash} alt="" />
        </div>
        <div className="w-full md:w-1/2 py-7 flex flex-col justify-center px-5 md:py-24 md:px-20 ">
          <p className="text-left md:text-left mb-4 text-black">
            Are you ready to elevate your business to new heights? Look no
            further than auxzon Solutions for data-driven business insights
            tailored to your specific needs. auxzon can be your trusted partner
            to provide trends and strategies to help your business thrive in
            today's dynamic digital landscape.
          </p>
          <button className="w-36 h-12 rounded-full flex py-2 justify-center bg-slate-700 items-center mt-4 hover:bg-red-500 ">
            Read more
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full flex flex-col py-4 justify-center items-center h-64 md:h-96 md:px-5">
        <h1>Consult</h1>
        <p>The Auxzon Way of Solving Business Problems</p>
        <video
          className="w-[80%] md:w-[60%] h-full py-4"
          controls
          autoplay
          loop
          muted
        >
          <source src={auxzonv1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* ---------------service------------------- */}
      <div className="w-full h-auto py-5 px-5 border ">
        <div className="mb-4">
          <h1 className="text-3xl font-bold">Services</h1>
          <p>
            Empowering business transformation with Neural Network solutions
          </p>
        </div>
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 p-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 flex flex-col justify-between border ${
                index % 2 === 0 ? "" : ""
              } ${index % 2 === 1 ? "" : ""}`}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-12 h-12"
                />
                <div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p>
                    We can understand the consumers better than ever before with
                    {` ${service.title}.`}
                  </p>
                </div>
              </div>
              <button className="bg-slate-700 w-36 h-10 text-white px-2 py-1 mt-2 ml-16 rounded-full">
                Read more
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* industries */}
      {/* <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our <span className="gradient-text">industrs</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>
        <button className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white py-2 px-4 rounded">
          Enquire Now
        </button>
      </div> */}

      {/* ---------------------------------- */}
    </div>
  );
};

export default Home;
