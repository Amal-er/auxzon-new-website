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
            className="flex flex-col  justify-center items-center bg-cover bg-center w-full h-56 md:h-[499px] rounded-xl mb-10"
            style={{ backgroundImage: `url(${aboutbg})` }}
          >
            <h1 className="text-[33px] font-bold text-white">About Us</h1>
            <p className="text-center text-sm sm:text-base lg:text-lg md:py-7 text-white tracking-wide ">
              Are you ready to elevate your business to new heights? Look no
              further than auxzon Solutions <br /> for data-driven business
              insights tailored to your specific needs. auxzon can be your
              trusted partner to <br /> provide trends and strategies to help
              your business thrive in today's dynamic digital landscape.
            </p>
          </div>

          <div className="w-full h-auto mt-6 flex flex-col md:flex-row justify-center items-center  md:px-5">
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
              <div className="w-full md:w-1/2 flex flex-col justify-center  items-left px-6 md:px-0 mb-6 md:mb-0">
                <h1 className="gradient-text text-black font-bold text-[33px]">
                  Who we are ...?
                </h1>
                <p className="text-black text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.It is a
                  long established fact that a reader will be distracted by the
                  readable content of a page when looking at its layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable
                </p>
                <div className="custom-gradient w-48 h-6 py-5 mt-5 flex justify-center items-center rounded-md ">
                  <button
                    className="text-white flex justify-center items-center"
                    onClick={handleDownload}
                  >
                    <IoMdDownload />
                    DownLoad Brochure
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
        className=" h-auto px-5 py-5  flex rounded-lg md:h-72 flex-col md:flex-row gap-10 justify-center items-center shadow-lg mb-10 md:py-[200px]  md:px-10  "
        style={{ backgroundImage: `url(${backgd})` }}
      >
        <div className="flex flex-col md:flex-row items-center text-center w-full p-4 rounded-lg bg-white shadow-lg flex-grow ">
          <img className="w-16 md:mr-4" src={achieve} alt="achieve" />
          <div className="text-left">
            <h1 className="gradient-text text-xl text-black font-bold mb-2">
              Our Mission
            </h1>
            <p className="text-black text-justify">
              We envision a future where businesses transcend boundaries through
              the strategic use of data. Our vision is to be the driving force
              behind a data-powered revolution, empowering organizations
              worldwide with transformative analytics and consulting services
              powered with innovative tools including AI and ML. We see a
              landscape where data is not just a resource but a catalyst for
              innovation,
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
              At Auxzon Solutions, we believe in a client-centric approach and
              dream of a future where our services become integral to the
              decision-making of businesses. Join us as we shape a future where
              intelligence and innovation converge, powered by data. Together,
              let's embark on a journey toward a business landscape where
              insights drive growth and define new possibilities and horizons.
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
