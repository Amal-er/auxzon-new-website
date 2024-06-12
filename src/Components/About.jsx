import React, { useState } from "react";
import Navbar from "./Navbar";
import aboutbg from "../assets/images/aboutbg1.webp";
import Footer from "./Footer";
import intro from "../assets/images/intro.png";
import backgd from "../assets/images/backabout.webp";
import achieve from "../icons/achievement.png";
import binocular from "../icons/binocular.png";
import tailored from "../icons/tailoredsolutionsicon.png";
import expertise from "../icons/expertiseicon.png";
import customer from "../icons/customercentricapproach.png";
import stay from "../icons/stayaheadwithindustrytrendsicon.png";
import data from "../icons/datasecurityicon.png";
import browsure from "../pdf/brochure.pdf";
import Layout from "./Layout";
import { IoMdDownload } from "react-icons/io";

const About = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    window.open(browsure, "_blank");
  };

  return (
    <>
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center justify-center text-white px-3">
        <div className="mt-4 w-[95%]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="bg-[#f0f2f4] min-h-screen flex flex-col px-2 items-center text-white py-6 md:px-8">
          <div
            className="relative flex flex-col justify-left items-left bg-cover bg-center w-full h-56 md:h-[260px] rounded-xl mb-10 "
            style={{
              backgroundImage: `url(${aboutbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative p-5 flex flex-col justify-left md:px-12 items-left">
              <h1 className="text-[33px] font-bold text-white">About Us</h1>

              <p className="text-left text-sm sm:text-base lg:text-lg md:py-7 text-white tracking-wide">
                At auxzon, we turn data into decisions, transforming challenges
                into opportunities.
                <br /> Discover our journey and vision for a smarter future.
              </p>
              <p className="text-white md:pr-10">
                Home |{" "}
                <span
                  className="text-white md:pl-2
                "
                >
                  About{" "}
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="w-full h-auto  flex flex-col md:flex-row justify-center items-center  md:px-5">
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
              <div className="w-full md:w-1/2 flex flex-col justify-center  items-left px-6 md:px-0 mb-6 md:mb-0">
                <h1 className="gradient-text text-black font-bold text-[33px]">
                  Who we are
                </h1>
                <p className="text-black text-justify md:py-8 ">
                  At auxzon Solutions, we are a team of passionate professionals
                  committed to delivering top-notch solutions tailored to your
                  business needs. Our journey began with a vision to transform
                  the digital landscape, and today, we stand as a dynamic
                  startup at the forefront of technology innovation. Auxzon
                  Solutions has grown into a hub of creativity and technological
                  prowess, continually pushing the boundaries of what's possible
                  in the tech industry. We take pride in our diverse and
                  talented team, which comprises experts from various domains,
                  including software development, data science, marketing, and
                  business consulting. This multidisciplinary approach allows us
                  to address complex challenges with innovative solutions,
                  ensuring our clients receive the best possible outcomes.
                </p>

                <div className="custom-gradient w-48 h-6 py-5 mt-5 flex justify-center items-center rounded-md ">
                  <button
                    className="text-white flex justify-center items-center"
                    onClick={handleDownload}
                  >
                    <IoMdDownload />
                    Download Brochure
                  </button>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center items-center px-6">
                <img
                  className="w-full md:w-96 h-auto"
                  src={intro}
                  alt="intro"
                />
              </div>
            </div>
          </div>

          <Layout />
        </div>
      </div>

      <div
        className=" h-auto px-5 py-5  flex rounded-lg md:h-72 flex-col md:flex-row gap-10 justify-center items-center shadow-lg mb-10 md:py-[200px]  md:px-12  "
        style={{ backgroundImage: `url(${backgd})` }}
      >
        <div className="flex flex-col md:flex-row items-center text-center w-full p-4 rounded-lg bg-white shadow-lg flex-grow ">
          <img className="w-16 md:mr-4" src={achieve} alt="achieve" />
          <div className="text-left">
            <h1 className="gradient-text text-xl text-black font-bold mb-2">
              Our Mission
            </h1>
            <p className="text-black text-justify">
              At auxzon Solutions, our mission is to empower businesses with
              innovative technology solutions that drive growth, enhance
              efficiency, and create lasting value. We strive to be the catalyst
              for our clients' success by providing expert guidance,
              cutting-edge software development, and insightful data analytics.
              Our commitment is to deliver excellence through a collaborative
              approach, ensuring that each project meets the highest standards
              of quality and integrity. We are dedicated to continuous learning
              and improvement, fostering a culture of innovation that enables us
              to stay ahead in a rapidly evolving digital landscape. Through our
              services, we aim to transform businesses, helping them achieve
              their goals and thrive in a competitive world.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center text-center w-full p-4 rounded-lg bg-white shadow-lg flex-grow">
          <img className="w-16 md:mr-4" src={binocular} alt="vision" />
          <div className="text-left">
            <h1 className="gradient-text text-xl text-black font-bold mb-2">
              Our Vision
            </h1>
            <p className="text-black text-justify">
              At auxzon Solutions, our vision is to be a global leader in
              technology and innovation, driving transformative change for
              businesses across all industries. We aspire to create a future
              where our advanced solutions empower organizations to unlock their
              full potential, making data-driven decisions and achieving
              unparalleled growth. By fostering a culture of creativity,
              excellence, and continuous improvement, we aim to set new
              standards in software development, data analytics, digital
              marketing, and e-commerce solutions. Our e-commerce expertise,
              particularly with platforms like Amazon, enables businesses to
              optimize their online presence and maximize their market reach.
              Our ultimate goal is to build a sustainable and inclusive digital
              ecosystem where businesses.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-10  flex justify-center items-left">
        <h1 className="gradient-text text-4xl font-medium">
          Why Choose auxzon?
        </h1>
      </div>

      <div className="w-full h-auto flex flex-wrap justify-center items-center gap-10 py-10 px-10">
        <div className="box w-full md:w-96 h-56 bg-white flex items-center  shadow-lg rounded-xl relative zoom-effect">
          <div className="flex-none w-16 h-16 md:w-20 md:h-20 border-2 border-custom-purple rounded-full flex justify-center items-center">
            <img className="w-14" src={tailored} alt="tailored" />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-black font-bold">Tailored Solutions</p>
            <span className=" text-black text-justify">
              We understand that every business is unique. That's why we tailor
              our solutions to fit your specific goals and challenges.
            </span>
          </div>
        </div>
        <div className="box w-full md:w-96 h-56 bg-white flex items-center p-4 shadow-lg rounded-xl relative zoom-effect">
          <div className="flex-none w-16 h-16 md:w-20 md:h-20 border-2 border-custom-purple rounded-full flex justify-center items-center">
            <img className="w-14" src={expertise} alt="expertise" />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-black font-bold">Expertise</p>
            <span className=" text-black text-justify">
              Our team comprises seasoned professionals with diverse expertise
              across industries. You can trust us to deliver precise results
              backed by data analysis.
            </span>
          </div>
        </div>
        <div className="box w-full md:w-96 h-56 bg-white flex items-center p-4 shadow-lg rounded-xl relative zoom-effect">
          <div className="flex-none w-16 h-16 md:w-20 md:h-20 border-2 border-custom-purple rounded-full flex justify-center items-center">
            <img className="w-14" src={customer} alt="customer" />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-black font-bold ">Customer-Centric Approach</p>
            <span className=" text-black text-justify">
              Your success is our priority. We work closely with you every step
              of the way, ensuring that our solutions align with your vision and
              objectives.
            </span>
          </div>
        </div>
        <div className="box w-full md:w-96 h-56 bg-white flex items-center p-4 shadow-lg rounded-xl relative zoom-effect">
          <div className="flex-none w-16 h-16 md:w-20 md:h-20 border-2 border-custom-purple rounded-full flex justify-center items-center">
            <img className="w-14" src={stay} alt="stay" />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-black font-bold">
              Stay Ahead with Industry Trends
            </p>
            <span className=" text-black text-justify">
              We keep you updated with the latest industry trends, ensuring you
              stay ahead of the curve.
            </span>
          </div>
        </div>
        <div className="box w-full md:w-96 h-56 bg-white flex items-center p-4 shadow-lg rounded-xl relative zoom-effect">
          <div className="flex-none w-16 h-16 md:w-20 md:h-20 border-2 border-custom-purple rounded-full flex justify-center items-center">
            <img className="w-14" src={data} alt="data" />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-black font-bold">Data Security</p>
            <span className=" text-black text-justify">
              With great power comes great responsibility. We always respect the
              rights of our customers and ensure that their data is handled with
              the utmost care and integrity.
            </span>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default About;
