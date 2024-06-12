import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ooze from "../assets/rep.webp";
import ash from "../assets/images/ash.png";
import auxzonvedio from "../video/auxzonvedio.mp4";
import bcsolu from "../assets/images/bcsolu.png";
import datasolu from "../assets/images/datasolu.png";
import analytix from "../assets/images/analytix.png";
import software from "../assets/images/softwaresicon.png";
import Footer from "./Footer";
import Layout from "./Layout";
import banner2 from "../assets/images/banner2.webp";
import banner3 from "../assets/images/banner3.webp";
import { Typewriter } from "react-simple-typewriter";
import auxzonhexa from "../assets/images/auxzonhexa.png";

const Home = () => {
  const services = [
    {
      id: 1,
      title: "Marketing Services",
      para: "Our comprehensive marketing solutions cover analytic, digital, performance, and content marketing.",
      icon: analytix,
      url: "/marketing",
    },
    {
      id: 2,
      title: "Software Solutions",
      para: "Auxzon's software solutions are meticulously crafted to meet the unique needs of your business.",
      icon: software,
      url: "/softwaresolutions",
    },
    {
      id: 3,
      title: "E-commerce Business Solutions",
      icon: bcsolu,
      para: "Navigating the competitive ecommerce landscape can be challenging. With Auxzon's specialized Amazon services.",
      url: "/ecommersebusinesssolutions",
    },
    {
      id: 4,
      title: "Data Solutions",
      icon: datasolu,
      para: "In the age of big data, making sense of vast amounts of information is crucial for business success.",
      url: "/datasolutions",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center justify-center text-white px-3">
        <div className="mt-4 w-[95%]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        <div className="w-full h-auto flex flex-col md:flex-row mt-14">
          <div className="w-full md:w-1/2 md:px-5 py-10 flex justify-start leading-[1.3]">
            <h1 className="text-gray-600 text-5xl md:text-7xl px-4 font-[500px] leading-[1.3]">
              <Typewriter
                words={["Transforming Ideas into Digital Solutions"]}
                loop={1}
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
              Unveiling the power of your data. Empower yourself with Auxzon and
              transform your data into a strategic asset for sustainable growth
              and innovation.
            </p>
            <Link to="/services">
              <button className="w-36 h-12 rounded-full flex py-2 justify-center bg-custom-gradient items-center mt-4 hover:bg-red-500 ">
                Discover
              </button>
            </Link>
          </div>
        </div>

        {/* Banner Images */}
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            className="rounded-3xl w-full h-full object-cover"
            src={
              currentImageIndex === 0
                ? ooze
                : currentImageIndex === 1
                ? banner2
                : banner3
            }
            alt={`Banner ${currentImageIndex + 1}`}
          />
        </div>
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row py-4">
        <div className="w-full md:w-1/2 py-10 flex justify-center items-center">
          <img className="w-auto max-h-52 md:max-h-72" src={ash} alt="Ash" />
        </div>
        <div className="w-full md:w-1/2 py-7 flex flex-col justify-center px-5 md:py-24 md:px-20 ">
          <h2 className="gradient-text text-left md:text-left mb-4 text-[33px] font-semibold">
            About Us
          </h2>
          <p className="md:text-left mb-4 text-black text-justify">
            Welcome to Auxzon Solutions, your premier partner in business
            transformation through data-driven insights and innovative
            technology solutions. Our mission is to deliver tailored strategies
            that empower your business to thrive in today’s dynamic digital
            landscape.
          </p>
          <Link to="/about">
            <button className="w-36 h-12 rounded-full flex py-2 justify-center bg-custom-gradient items-center mt-4 hover:bg-red-500 text-white">
              Read more
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col py-4 justify-center items-center h-64 md:h-96 md:px-5 ">
        <video
          className="w-[80%] md:w-[60%] py-4 custom-height shadow-lg"
          controls
          autoPlay
          loop
          muted
        >
          <source src={auxzonvedio} type="video/mp4" />
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

                  <p>{` ${service.para}.`}</p>
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
          <span className="block md:inline text-[33px]">auxzon</span>
          <p className="block md:inline text-[33px]">
            <span className="gradient-text"> Hexa</span>
          </p>
        </h1>
      </div>

      <div className="flex justify-center items-center md:py-20 px-3 py-10 ">
        <img className="w-[600px] " src={auxzonhexa} alt="Auxzon Hexa" />
      </div>

      <Layout />

      <Footer />
    </div>
  );
};

export default Home;
