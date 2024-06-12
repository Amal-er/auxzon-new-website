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
import image02 from "../icons/image02.png";
// import two from "../icons/02.png";
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
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center text-white px-3">
        <div className="mt-4 w-[95%] ">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="bg-[#f0f2f4] flex flex-col items-center text-white py-6 md:px-8">
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
              <h1 className="text-[33px] font-bold text-white">auxzon Hexa</h1>
              <p className="text-left text-sm sm:text-base lg:text-lg md:py-7 text-white tracking-wide">
                Hexa is our commitment to cutting-edge technology and
                unparalleled service.
                <br /> Delve into the world of Auxzon Hexa and see what sets us
                apart.
              </p>
              <p className="text-white">
                Home |<span className="text-white md:pl-2"> auxzon Hexa</span>
              </p>
            </div>
          </div>

          {/* -------------------------------------------- */}
          <div className="w-full h-auto  flex flex-col md:flex-row justify-center items-center  md:px-5">
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
              <div className="w-full md:w-1/2 flex flex-col justify-center  items-left px-6 md:px-0 mb-6 md:mb-0">
                <h1 className="gradient-text text-black font-bold text-[33px]">
                  auxzon Hexa
                </h1>
                <p className="text-black text-justify md:py-5 ">
                  auxzon Hexa is a comprehensive framework designed to guide
                  your journey from evaluation to success. It begins with Advice
                  , where we thoroughly evaluate the current situation, identify
                  challenges, and gather relevant data. In the Act phase, we
                  provide expert advice and actionable insights to develop
                  strategic solutions. Analyze involves monitoring progress,
                  collecting data, and identifying areas for improvement.
                  Achieve focuses on successfully implementing strategies and
                  celebrating milestones. Through Assure , we maintain quality
                  and consistency, addressing any deviations promptly. Finally,
                  we Assess the overall process, evaluate the effectiveness of
                  strategies, and gather feedback for continuous improvement.
                  Auxzon Hexa ensures a structured approach to achieving your
                  goals with ongoing refinement and success.
                </p>
              </div>

              <div className="w-full md:w-1/2 flex justify-center items-center md:mt-7 px-6">
                <img
                  className="w-full md:w-96 h-auto"
                  src={auxzonhexa}
                  alt="intro"
                />
              </div>
            </div>
          </div>

          {/* ----------------------------------------------- */}
          {/* hexass------- desktop------- */}
          <div class="hexag1-container md:px-56 hidden md:py-5 md:block">
            <div class="hexag1-row md:py-5 flex flex-col md:flex-row justify-center relative items-center mb-5 md:mb-0">
              <div class="flex flex-col justify-center items-center w-80">
                <img class="step-icon w-16 md:w-80 " src={one} alt="Step 1" />
              </div>
              <div class="rectangle bg-white text-black p-5 rounded-lg  md:ml-8 text-justify">
                <p className="text-violet-700 text-xl font-bold">01 Advice</p>
                This step involves thoroughly evaluating the current situation,
                and identifying challenges, opportunities, and key factors
                influencing the desired outcome. It includes gathering relevant
                data, conducting research, and analyzing information to gain a
                comprehensive understanding of the situation.
              </div>
            </div>
            <div class="hexag1-row md:py-5 flex flex-col md:flex-row justify-center items-center mb-5 md:mb-0">
              <div class="flex flex-col md:flex-row justify-center items-center w-80">
                <img
                  class="step-icon w-16 md:w-80"
                  src={image02}
                  alt="Step 2"
                />
              </div>
              <div class="rectangle bg-white text-black p-5 rounded-lg  md:ml-8 text-justify">
                <p className="text-violet-700 text-xl font-bold">02 Act</p>
                After assessing the situation, this step entails providing
                expert advice and recommendations based on the findings. It
                involves leveraging knowledge, experience, and expertise to
                offer actionable insights, strategic guidance, and potential
                solutions to address identified challenges and capitalize on
                opportunities.
              </div>
            </div>
            <div class="hexag1-row md:py-5 flex flex-col md:flex-row justify-center items-center mb-5 md:mb-0">
              <div class="flex flex-col md:flex-row justify-center items-center w-80 ">
                <img class="step-icon w-16 md:w-80" src={three} alt="Step 3" />
              </div>
              <div class="rectangle bg-white text-black p-5 rounded-lg  md:ml-8 text-justify">
                <p className="text-violet-700 text-xl font-bold">03 Analyze</p>
                Once the actions are taken, we monitor and evaluate the progress
                and outcomes of the implemented strategies. It includes
                collecting and analyzing data, measuring performance against
                predefined metrics and benchmarks, and identifying trends,
                patterns, and areas for improvement.
              </div>
            </div>
            <div class="hexag1-row md:py-5 flex flex-col md:flex-row justify-center items-center mb-5 md:mb-0">
              <div class="flex flex-col justify-center items-center  w-80">
                <img class="step-icon w-16 md:w-80" src={four} alt="Step 4" />
              </div>
              <div class="rectangle bg-white text-black p-5 rounded-lg  md:ml-8 text-justify">
                <p className="text-violet-700 text-xl font-bold">04 Achieve</p>
                Once the actions are taken, we monitor and evaluate the progress
                and outcomes of the implemented strategies. It includes
                collecting and analyzing data, measuring performance against
                predefined metrics and benchmarks, and identifying trends,
                patterns, and areas for improvement.
              </div>
            </div>
            <div class="hexag1-row md:py-5 flex flex-col md:flex-row justify-center items-center mb-5 md:mb-0">
              <div class="flex flex-col justify-center items-center w-80">
                <img class="step-icon w-16 md:w-80" src={five} alt="Step 5" />
              </div>
              <div class="rectangle bg-white text-black p-5 rounded-lg  md:ml-8 text-justify">
                <p className="text-violet-700 text-xl font-bold">05 Assure</p>
                Once the actions are taken, we monitor and evaluate the progress
                and outcomes of the implemented strategies. It includes
                collecting and analyzing data, measuring performance against
                predefined metrics and benchmarks, and identifying trends,
                patterns, and areas for improvement.
              </div>
            </div>
            <div class="hexag1-row md:py-5 flex flex-col md:flex-row justify-center items-center mb-5 md:mb-0">
              <div class="flex flex-col justify-center items-center w-80">
                <img class="step-icon w-16 md:w-80" src={six} alt="Step 6" />
              </div>
              <div class="rectangle bg-white text-black p-5 rounded-lg  md:ml-8 text-justify">
                <p className="text-violet-700 text-xl font-bold">06 Assess</p>
                Once the actions are taken, we monitor and evaluate the progress
                and outcomes of the implemented strategies. It includes
                collecting and analyzing data, measuring performance against
                predefined metrics and benchmarks, and identifying trends,
                patterns, and areas for improvement.
              </div>
            </div>
          </div>

          {/* -------mobile view */}
          <div className=" px-4 md:hidden w-full   flex flex-col justify-center items-center">
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
                <img className="w-16 mb-4" src={image02} alt="" />
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

          {/* hexass------- mobile------- */}

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
