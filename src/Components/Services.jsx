import React, { useState } from "react";
import Navbar from "./Navbar";
import servicebg from "../assets/services.webp";
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
              backgroundImage: `url(${decompose})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative p-5 flex flex-col justify-left items-left  md:px-12">
              <h1 className="text-[33px] font-bold text-white">Services</h1>

              <p className="text-left text-sm sm:text-base lg:text-lg md:py-7 text-white tracking-wide">
                Are you ready to elevate your business to new heights? Look no
                further than auxzon Solutions <br /> for data-driven business
                insights tailored to your specific needs.
              </p>
              <p className="text-white">
                Home |<span className="text-purple-500 md:pl-2"> Services</span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start  items-start md:mb-20 px-3 md:px-5">
            <div className="w-full">
              <h1 className="gradient-text text-black font-bold text-2xl md:text-[33px] md:py-5 text-left">
                What we do
              </h1>
              <p className="text-black text-left text-justify mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br /> It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable.
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
      <div className="w-full h-auto py-5 md:mt-10 px-5 md:mb-16  ">
        <div className="w-full h-32 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-medium text-center">
            <p className="gradient-text text-[33px]">Our Services</p>
            <p className="md:py-3">Special neural features for your Services</p>
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 md:px-8  p-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-4 flex flex-col justify-between shadow-lg`}
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
