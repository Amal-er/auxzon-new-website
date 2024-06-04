import React, { useState } from "react";
import Navbar from "./Navbar";
import servicebg from "../assets/services.webp";
import Footer from "./Footer";
import decompose from "../assets/images/decompose.webp";

import hexabg from "../assets/images/hexabg.webp";
// --------------------------------------
import hexagon from "../assets/images/hexagon.png";
// ----------------------------
import { Link } from "react-router-dom";

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
            className="flex flex-col  justify-center items-center bg-cover bg-center w-full h-56 md:h-[499px] rounded-xl mb-10"
            style={{ backgroundImage: `url(${hexabg})` }}
          >
            <h1 className="text-[33px] font-bold text-white">Auxzon Hexa</h1>
            <p className="text-center text-sm sm:text-base lg:text-lg md:py-7 text-white tracking-wide">
              Are you ready to elevate your business to new heights? Look no
              further than auxzon Solutions <br /> for data-driven business
              insights tailored to your specific needs. auxzon can be your
              trusted partner
              <br /> to provide trends and strategies to help your business
              thrive in today's dynamic digital landscape.
            </p>
          </div>

          <div className="flex justify-center items-center  ">
            <img className="w-[600px] " src={hexagon} alt="" />
          </div>

          {/* hexass-------------- */}
          <div className="hexag1-container md:px-56 ">
            <div className="hexag1-row md:py-3">
              <div className="flex flex-col justify-center items-center">
                {/* <Hexag1 src={assess} alt="Assess" /> */}
              </div>

              <div className="rectangle  bg-white text-black p-5 rounded-lg">
                This step involves thoroughly evaluating the current situation,
                and identifying challenges, opportunities, and key factors
                influencing the desired outcome. It includes gathering relevant
                data, conducting research, and analyzing information to gain a
                comprehensive understanding of the situation.
              </div>
            </div>
            <div className="hexag1-row md:py-3">
              <div className="flex flex-col justify-center items-center">
                {/* <Hexag1 src={achieve} alt="achieve" /> */}
              </div>
              <div className="rectangle bg-white text-black p-5 rounded-lg">
                After assessing the situation, this step entails providing
                expert advice and recommendations based on the findings. It
                involves leveraging knowledge, experience, and expertise to
                offer actionable insights, strategic guidance, and potential
                solutions to address identified challenges and capitalize on
                opportunities.
              </div>
            </div>
            <div className="hexag1-row md:py-3">
              <div className="flex flex-col justify-center items-center">
                {/* <Hexag1 src={act} alt="Assess" /> */}
              </div>
              <div className="rectangle  bg-white text-black p-5 rounded-lg">
                This step involves implementing the recommended strategies,
                plans, or actions identified. It includes executing tasks,
                making decisions, allocating resources, and taking proactive
                measures to move forward with the desired goals and objectives.
              </div>
            </div>
            <div className="hexag1-row  md:py-3 ">
              <div className="flex flex-col justify-center items-center">
                {/* <Hexag1 src={advice} alt="Assess" /> */}
              </div>
              <div className="rectangle  bg-white text-black p-5 rounded-lg">
                Once the actions are taken, we monitor and evaluate the progress
                and outcomes of the implemented strategies. It includes
                collecting and analyzing data, measuring performance against
                predefined metrics and benchmarks, and identifying trends,
                patterns, and areas for improvement
              </div>
            </div>
            <div className="hexag1-row md:py-3">
              {/* <Hexag1 src={analyze} alt="Analyze" /> */}
              <div className="rectangle   bg-white text-black p-5 rounded-lg">
                This step marks the attainment of the desired goals, objectives,
                or milestones defined at the outset of the journey making
                adjustments, refinements, or course corrections to the
                strategies or actions as needed. It involves celebrating
                successes, acknowledging achievements, and recognizing the
                efforts of all stakeholders involved in the process.
              </div>
            </div>
            <div className="hexag1-row md:py-3">
              {/* <Hexag1 src={assure} alt="Assure" /> */}
              <div className="rectangle  bg-white text-black p-5 rounded-lg">
                Finally, this step involves ensuring ongoing support,
                sustainability, and continuous improvement beyond the
                achievement of initial goals. It includes implementing measures
                to maintain the momentum, optimize performance, and address any
                remaining challenges or opportunities to sustain long-term
                success.
              </div>
            </div>
          </div>

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
