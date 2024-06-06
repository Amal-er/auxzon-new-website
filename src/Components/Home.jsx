import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ooze from "../assets/rep.webp";
import ash from "../assets/images/ash.png";
import auxzonv1 from "../video/auxzonv1.mp4";
import bcsolu from "../assets/images/bcsolu.png";
import datasolu from "../assets/images/datasolu.png";
import analytix from "../assets/images/analytix.png";
import software from "../assets/images/softwaresicon.png";
import hexagon from "../assets/images/hexagon.png";
import Footer from "./Footer";
import Layout from "./Layout";
import banner2 from "../assets/images/banner2.webp";
import banner3 from "../assets/images/banner3.webp";
import { Typewriter } from "react-simple-typewriter";
import auxzonhexa from "../assets/images/auxzonhexa.png";

const services = [
  {
    id: 1,
    title: "Analytix Marketing",
    icon: analytix,
    url: "/analytixmarketing",
  },
  {
    id: 2,
    title: "Software Solution",
    icon: software,
    url: "/softwaresolutions",
  },
  {
    id: 3,
    title: "Business Consulting",
    icon: bcsolu,
    url: "/businessconsulting",
  },
  {
    id: 4,
    title: "Data Solutions",
    icon: datasolu,
    url: "/datasolutions",
  },
];

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3); // 3 images
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);
  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center justify-center text-white px-3">
        <div className="mt-4 w-[95%]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        <div className="w-full h-auto flex flex-col md:flex-row mt-14">
          <div className="w-full md:w-1/2 md:px-5 py-10  flex justify-start ">
            <h1 className="gradient-text text-4xl md:text-7xl px-10 ">
              <Typewriter
                words={["Harness the power of Artificial intelligence"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h1>
          </div>
          <div className="w-full md:w-1/2 py-7 flex flex-col justify-center px-5 md:py-24 md:px-20 ">
            <p className="text-left md:text-left mb-4 text-black">
              Unveiling the power of your data. Empower yourself with auxzon and
              transform your data into a strategic asset for sustainable growth
              and innovation.
            </p>
            <button className="w-36 h-12 rounded-full flex py-2 justify-center bg-custom-gradient items-center mt-4 hover:bg-red-500 ">
              Discover
            </button>
          </div>
        </div>

        <div className="w-full h-64 md:h-96 md:px-5 overflow-hidden">
          <img
            className="rounded-3xl w-full h-full"
            src={
              currentImageIndex === 0
                ? ooze
                : currentImageIndex === 1
                ? banner2
                : banner3
            }
            alt={
              currentImageIndex === 0
                ? "ooze"
                : currentImageIndex === 1
                ? "banner2"
                : "banner3"
            }
          />
        </div>
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row py-4">
        <div className="w-full md:w-1/2 py-10 flex justify-center items-center">
          <img className="w-auto max-h-52 md:max-h-72" src={ash} alt="" />
        </div>
        <div className="w-full md:w-1/2 py-7 flex flex-col justify-center px-5 md:py-24 md:px-20 ">
          <h2 className="gradient-text text-left md:text-left mb-4 text-[33px] font-semibold">
            About Us
          </h2>
          <p className="md:text-left mb-4 text-black text-justify">
            Are you ready to elevate your business to new heights? Look no
            further than auxzon Solutions for data-driven business insights
            tailored to your specific needs. auxzon can be your trusted partner
            to provide trends and strategies to help your business thrive in
            today's dynamic digital landscape.
          </p>
          <Link to="/about">
            <button className="w-36 h-12 rounded-full flex py-2 justify-center bg-custom-gradient items-center mt-4 hover:bg-red-500 text-white">
              Read more
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col py-4 justify-center items-center h-64 md:h-96 md:px-5">
        <video
          className="w-[80%] md:w-[60%] py-4 custom-height"
          controls
          autoPlay
          loop
          muted
        >
          <source src={auxzonv1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full h-auto py-10 px-5">
        <div className="w-full h-32 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-medium text-center">
            <p className="gradient-text text-[33px] md:mt-20">Our Services</p>
            <p className="md:mt-3">Special neural features for your Services</p>
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 p-8 md:py-10 md:mt-10 ">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 flex flex-col justify-between shadow-lg zoom-effect`}
            >
              <div className="flex items-center space-x-4 ">
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-12 h-12"
                />
                <div>
                  <h1 className="text-xl font-bold hover:text-violet-500">
                    {service.title}
                  </h1>

                  <p>
                    We can understand the consumers better than ever before with
                    {` ${service.title}.`}
                  </p>
                </div>
              </div>
              <Link
                to={service.url}
                className="bg-custom-gradient w-36 h-10 text-white px-2 py-1 mt-2 ml-16 rounded-full flex items-center justify-center"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-32 flex justify-center items-center">
        <h1 className="text-3xl font-medium text-center md:text-left">
          <span className="block md:inline text-[33px]">
            Our Services Apply{" "}
          </span>
          <p className="block md:inline text-[33px]">
            to These <span className="gradient-text"> Industries</span>
          </p>
        </h1>
      </div>

      <div className="flex justify-center items-center md:py-20 px-3 py-10 ">
        <img className="w-[600px] " src={auxzonhexa} alt="" />
      </div>

      <Layout />

      <Footer />
    </div>
  );
};

export default Home;
