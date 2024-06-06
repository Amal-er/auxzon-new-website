import React, { useState } from "react";
import Navbar from "./Navbar";
import servicebg from "../assets/services.webp";
import Footer from "./Footer";
import abstract from "../assets/images/abstract.webp";
import auxzonhexa from "../assets/images/auxzonhexa.png";
import hexabg from "../assets/images/hexabg.webp";
// --------------------------------------
import hexagon from "../assets/images/hexagon.png";
// ----------------------------
import { Link } from "react-router-dom";

// ---------------------------------------
import one from "../icons/01.png";
import two from "../icons/02.png";
import three from "../icons/03.png";
import four from "../icons/04.png";
import five from "../icons/05.png";
import six from "../icons/06.png";

import Layout from "./Layout";

function Hexa() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center justify-center text-white px-3">
        <div className="mt-4 w-[95%]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="bg-[#f0f2f4] min-h-screen flex flex-col px-2 items-center text-white py-6 md:px-8">
          {/* Header Section */}
          <div
            className="relative flex flex-col justify-left items-left bg-cover bg-center w-full h-56 md:h-[260px] rounded-xl mb-10"
            style={{
              backgroundImage: `url(${abstract})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative p-5 flex flex-col justify-center items-left md:px-12">
              <h1 className="text-[28px] md:text-[33px] font-bold text-white">
                Auxzon Hexa
              </h1>

              <p className="text-left text-sm sm:text-base lg:text-lg md:py-7 text-white tracking-wide">
                Are you ready to elevate your business to new heights? Look no
                further than auxzon Solutions <br className="hidden md:block" />{" "}
                for data-driven business insights tailored to your specific
                needs.
              </p>
              <p className="text-white">
                Home |
                <span className="text-purple-500 md:pl-2"> Auxzon Hexa</span>
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center md:py-12 ">
            <img className="w-[90%] md:w-[500px]" src={auxzonhexa} alt="" />
          </div>

          {/* hexass-------------- */}
          <div className="hexag1-container md:px-56 hidden md:block ">
            <div className="hexag1-row md:py-5 flex flex-col md:flex-row justify-center relative items-center mb-5 md:mb-0">
              <div className="flex flex-col justify-center items-center w-32">
                <img
                  className="w-16 md:w-32 absolute top-0 md:top-[20px] left-[-5px] md:right-[770px]"
                  src={one}
                  alt=""
                />
              </div>

              <div className="rectangle bg-white text-black p-5 rounded-lg md:px-24 md:ml-8 text-justify">
                This step involves thoroughly evaluating the current situation,
                and identifying challenges, opportunities, and key factors
                influencing the desired outcome. It includes gathering relevant
                data, conducting research, and analyzing information to gain a
                comprehensive understanding of the situation.
              </div>
            </div>
            <div className="hexag1-row md:py-5 flex flex-col md:flex-row justify-center items-center mb-5 md:mb-0">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <img
                  className="w-16 md:w-[130px] absolute top-[700px] md:top-[1210px] left-[20px] md:left-[255px]"
                  src={two}
                  alt=""
                />
              </div>
              <div className="rectangle bg-white text-black p-5 rounded-lg md:px-32 md:ml-8 text-justify">
                After assessing the situation, this step entails providing
                expert advice and recommendations based on the findings. It
                involves leveraging knowledge, experience, and expertise to
                offer actionable insights, strategic guidance, and potential
                solutions to address identified challenges and capitalize on
                opportunities.
              </div>
            </div>
            <div className="hexag1-row md:py-5 flex flex-col md:flex-row justify-center items-center mb-5 md:mb-0">
              <div className="flex flex-col md:flex-row justify-center items-center">
                <img
                  className="w-16 md:w-32 absolute top-[1000px] md:top-[1390px] left-[20px] md:left-[255px]"
                  src={three}
                  alt=""
                />
              </div>
              <div className="rectangle bg-white text-black p-5 rounded-lg md:px-32 md:ml-8 text-justify">
                Once the actions are taken, we monitor and evaluate the progress
                and outcomes of the implemented strategies. It includes
                collecting and analyzing data, measuring performance against
                predefined metrics and benchmarks, and identifying trends,
                patterns, and areas for improvement
              </div>
            </div>
            <div className="hexag1-row md:py-5 flex flex-col md:flex-row justify-center items-center mb-5 md:mb-0">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-16 md:w-32 absolute top-[1200px] md:top-[1550px] left-[20px] md:left-[255px] md:py-4"
                  src={four}
                  alt=""
                />
              </div>
              <div className="rectangle bg-white text-black p-5 rounded-lg md:px-32 md:ml-8 text-justify">
                Once the actions are taken, we monitor and evaluate the progress
                and outcomes of the implemented strategies. It includes
                collecting and analyzing data, measuring performance against
                predefined metrics and benchmarks, and identifying trends,
                patterns, and areas for improvement
              </div>
            </div>
            <div className="hexag1-row md:py-5 flex flex-col md:flex-row justify-center items-center mb-5 md:mb-0">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-16 md:w-32 absolute top-[1400px] md:top-[1680px] left-[20px] md:left-[255px] md:py-16"
                  src={five}
                  alt=""
                />
              </div>
              <div className="rectangle bg-white text-black p-5 rounded-lg md:px-32 md:ml-8 text-justify">
                Once the actions are taken, we monitor and evaluate the progress
                and outcomes of the implemented strategies. It includes
                collecting and analyzing data, measuring performance against
                predefined metrics and benchmarks, and identifying trends,
                patterns, and areas for improvement
              </div>
            </div>
            <div className="hexag1-row md:py-5 flex flex-col md:flex-row justify-center items-center mb-5 md:mb-0">
              <div className="flex flex-col justify-center items-center">
                <img
                  className="w-16 md:w-32 absolute top-[1600px] md:top-[1850px] left-[20px] md:left-[255px] md:py-16"
                  src={six}
                  alt=""
                />
              </div>
              <div className="rectangle bg-white text-black p-5 rounded-lg md:px-32 md:ml-8 text-justify">
                Once the actions are taken, we monitor and evaluate the progress
                and outcomes of the implemented strategies. It includes
                collecting and analyzing data, measuring performance against
                predefined metrics and benchmarks, and identifying trends,
                patterns, and areas for improvement
              </div>
            </div>
          </div>
          {/* -------mobile view */}
          <div className="hexag1-container px-4 md:hidden">
            <div className="hexag1-row py-5 flex flex-col justify-center items-center mb-5">
              <div className="rectangle bg-white text-black p-5 rounded-lg flex flex-col justify-center items-center w-full">
                <img className="w-16 mb-4" src={one} alt="" />
                <p className="text-justify md:text-justify">
                  This step involves thoroughly evaluating the current
                  situation, and identifying challenges, opportunities, and key
                  factors influencing the desired outcome. It includes gathering
                  relevant data, conducting research, and analyzing information
                  to gain a comprehensive understanding of the situation.
                </p>
              </div>
            </div>
            <div className="hexag1-row py-5 flex flex-col justify-center items-center mb-5">
              <div className="rectangle bg-white text-black p-5 rounded-lg flex flex-col justify-center items-center w-full">
                <img className="w-16 mb-4" src={two} alt="" />
                <p className="text-justify md:text-justify">
                  After assessing the situation, this step entails providing
                  expert advice and recommendations based on the findings. It
                  involves leveraging knowledge, experience, and expertise to
                  offer actionable insights, strategic guidance, and potential
                  solutions to address identified challenges and capitalize on
                  opportunities.
                </p>
              </div>
            </div>
            <div className="hexag1-row py-5 flex flex-col justify-center items-center mb-5">
              <div className="rectangle bg-white text-black p-5 rounded-lg flex flex-col justify-center items-center w-full">
                <img className="w-16 mb-4" src={three} alt="" />
                <p className="text-justify md:text-justify">
                  Once the actions are taken, we monitor and evaluate the
                  progress and outcomes of the implemented strategies. It
                  includes collecting and analyzing data, measuring performance
                  against predefined metrics and benchmarks, and identifying
                  trends, patterns, and areas for improvement.
                </p>
              </div>
            </div>
            <div className="hexag1-row py-5 flex flex-col justify-center items-center mb-5">
              <div className="rectangle bg-white text-black p-5 rounded-lg flex flex-col justify-center items-center w-full">
                <img className="w-16 mb-4" src={four} alt="" />
                <p className="text-justify md:text-justify">
                  Once the actions are taken, we monitor and evaluate the
                  progress and outcomes of the implemented strategies. It
                  includes collecting and analyzing data, measuring performance
                  against predefined metrics and benchmarks, and identifying
                  trends, patterns, and areas for improvement.
                </p>
              </div>
            </div>
            <div className="hexag1-row py-5 flex flex-col justify-center items-center mb-5">
              <div className="rectangle bg-white text-black p-5 rounded-lg flex flex-col justify-center items-center w-full">
                <img className="w-16 mb-4" src={five} alt="" />
                <p className="text-justify md:text-justify">
                  Once the actions are taken, we monitor and evaluate the
                  progress and outcomes of the implemented strategies. It
                  includes collecting and analyzing data, measuring performance
                  against predefined metrics and benchmarks, and identifying
                  trends, patterns, and areas for improvement.
                </p>
              </div>
            </div>
            <div className="hexag1-row py-5 flex flex-col justify-center items-center mb-5">
              <div className="rectangle bg-white text-black p-5 rounded-lg flex flex-col justify-center items-center w-full">
                <img className="w-16 mb-4" src={six} alt="" />
                <p className="text-justify md:text-justify">
                  Once the actions are taken, we monitor and evaluate the
                  progress and outcomes of the implemented strategies. It
                  includes collecting and analyzing data, measuring performance
                  against predefined metrics and benchmarks, and identifying
                  trends, patterns, and areas for improvement.
                </p>
              </div>
            </div>
          </div>

          {/* --------------------------- */}

          {/* services */}
          <Layout />
          {/* Why Choose Auxzon Section */}
        </div>

        {/* ---------- */}
      </div>

      {/* ---------------------------------------- */}

      {/* ----------------------------------------- */}

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Hexa;
