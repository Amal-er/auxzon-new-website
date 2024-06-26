import React, { useState } from "react";
import Navbar from "./Navbar";
// import servicebg from "../assets/services.webp";
import service2 from "../assets/images/services2.webp";
import Footer from "./Footer";
import decompose from "../assets/images/decompose.webp";
// --------------------------------------

// ----------------------------
import { Link } from "react-router-dom";
import bcsolu from "../assets/images/bcsolu.png";
import datasolu from "../assets/images/datasolu.png";
import analytix from "../assets/images/analytix.png";
import software from "../assets/images/softwaresicon.png";
import Layout from "./Layout";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Marketing Services",
      para: " Our comprehensive marketing solutions cover analytic, digital, performance, and content marketing. ",
      icon: analytix,
      url: "/marketing",
    },
    {
      id: 2,
      title: "Software Solutions",
      para: " auxzon's software solutions are meticulously crafted to meet the unique needs of your business.",
      icon: software,
      url: "/softwaresolutions",
    },
    {
      id: 3,
      title: "E-commerce Business Solutions",
      icon: bcsolu,
      para: "  Navigating the competitive ecommerce landscape can be challenging. With Auxzon's specialized Amazon services,",
      url: "/EcommerseBusinessSolutions",
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center text-white px-3">
        <div className="mt-4 w-[95%]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="bg-[#f0f2f4]  flex flex-col px-2 items-center text-white py-6 md:px-8">
          <div
            className="relative flex flex-col justify-left items-left bg-cover bg-center w-full h-56 md:h-[260px] rounded-xl mb-10 "
            style={{
              backgroundImage: `url(${service2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative p-5 flex flex-col justify-left items-left  md:px-12">
              <h1 className="text-[33px] font-bold text-white">Services</h1>

              <p className="text-left text-sm sm:text-base lg:text-lg md:py-7 text-white tracking-wide">
                From bespoke software to insightful analytics, we offer a suite
                of services designed to propel your business forward.
                <br /> Explore how Auxzon can drive your success.
              </p>
              <p className="text-white">
                Home |<span className="text-white md:pl-2"> Services</span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start  items-start md:mb-20 px-3 md:px-5">
            <div className="w-full">
              <h1 className="gradient-text text-black font-bold text-2xl md:text-[33px] md:py-5 text-left">
                What we do
              </h1>
              <p className="text-black text-left text-justify mt-4">
                At auxzon Solutions, we offer a comprehensive range of services
                designed to help business thrive in the digital age. Our
                expertise spans across four key areas: Amazon Seller Services,
                Marketing Services, Data Solutions, and Software Solutions.
                Here’s how we can help your business succeed:Our priority is to
                cater to the diverse needs of our clients with a comprehensive
                suite of services. From Marketing service, where we harness the
                power of data to optimize marketing strategies, to our Data
                Solutions, which unlock the full potential of data through
                advanced marketing and visualization, we provide end-to-end
                solutions that drive tangible results. <br /> Our Software
                Solutions encompass custom software development, website, and
                app development, while our Business Consulting services offer
                strategic guidance and support to help businesses navigate
                complex challenges and capitalize on emerging opportunities.
                With a commitment to excellence and innovation, we aim to be
                your trusted partner in achieving your business goals.
              </p>
            </div>
          </div>

          {/* ------------- */}

          {/* services */}
          <Layout />
          {/* Why Choose Auxzon Section */}
        </div>

        {/* ---------- */}
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
      {/* ---------------------------------------- */}

      {/* ----------------------------------------- */}

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
