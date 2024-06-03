import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ooze from "../assets/rep.webp";
import ash from "../assets/images/ash.png";
// import trail from "../video/trail.mp4";
import auxzonv1 from "../video/auxzonv1.mp4";
import bcsolu from "../assets/images/bcsolu.png";
import datasolu from "../assets/images/datasolu.png";
import analytix from "../assets/images/analytix.png";
import software from "../assets/images/softwaresicon.png";
// ------------------------------------------
import health from "../assets/healthcare_2869741.png";
import finance from "../assets/financeicon.png";
import tele from "../assets/communication-network_12922964.png";
import manufacturing from "../assets/manufacturing_1814432.png";
import transportation from "../assets/transportation_995334.png";
import insurance from "../assets/life-insurance_1518636.png";
import publicsector from "../assets/team_1654195.png";
import marketing from "../assets/megaphone_4565288.png";
import education from "../assets/education_3976555.png";
// ---------------------------------------------
import expertise from "../assets/images/expertise.webp";
import Footer from "./Footer";
// --------------------------------------------

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

const industries = [
  { title: "health care", icon: analytix },
  { title: "finance", icon: software },
  { title: "Telecommunication", icon: bcsolu },
  { title: "Manufacturing", icon: datasolu },
  { title: "Transportation", icon: analytix },
  { title: "insurance", icon: software },
  { title: "Public Sector", icon: bcsolu },
  { title: "Marketing", icon: datasolu },
  { title: "education", icon: datasolu },
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
            <button className="w-36 h-12 rounded-full flex py-2 justify-center bg-custom-gradient items-center mt-4 hover:bg-red-500 ">
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
          <img className="w-auto max-h-52 md:max-h-72" src={ash} alt="" />
        </div>
        <div className="w-full md:w-1/2 py-7 flex flex-col justify-center px-5 md:py-24 md:px-20 ">
          <h2 className="gradient-text text-left md:text-left mb-4  text-[33px] font-semibold">
            About Us
          </h2>
          <p className="text-left md:text-left mb-4 text-black">
            Are you ready to elevate your business to new heights? Look no
            further than auxzon Solutions for data-driven business insights
            tailored to your specific needs. auxzon can be your trusted partner
            to provide trends and strategies to help your business thrive in
            today's dynamic digital landscape.
          </p>
          <button className="w-36 h-12 rounded-full flex py-2 justify-center bg-custom-gradient items-center mt-4 hover:bg-red-500  text-white">
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
        <div className="w-full h-32 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-medium text-center">
            <p className="gradient-text text-[33px]">Our Services</p>
            <p>Special neural features for your Services</p>
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 p-4">
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

      {/* industries */}
      {/* ------------------------------ */}
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
      {/* ------------------------------- */}
      <div className="flex justify-center items-center md:py-10 ">
        <img src={expertise} alt="" />
      </div>
      <div>
        <Footer />
      </div>
      {/* ---------------------------------- */}
    </div>
  );
};

export default Home;
