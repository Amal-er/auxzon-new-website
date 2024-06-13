import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import career1 from "../assets/images/career1.webp";
import Layout from "./Layout";
import { IoCheckmarkCircle } from "react-icons/io5";
import ApplyForm from "./Applyform";

const BusinessIntern = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showForm, setShowForm] = useState(false); // State for showing the form

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleApplyNowClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center text-white px-3">
        <div className="mt-4 w-full">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="bg-[#f0f2f4] w-full px-3 md:px-8 flex flex-col items-center text-white py-6">
          <div
            className="relative flex flex-col justify-left items-left bg-cover bg-center w-full h-56 md:h-[260px] rounded-xl mb-10"
            style={{
              backgroundImage: `url(${career1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative p-5 flex flex-col justify-center items-left md:px-12 md:py-20">
              <h1 className="text-[33px] font-bold text-white">
                Business Development Executive (Intern)
              </h1>
              <p className="text-white">
                Home |
                <span className="text-white md:pl-2">
                  Business Development Executive (Intern)
                </span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start md:mb-20 px-3 md:px-5">
            <div className="w-full">
              <h1 className="gradient-text text-black font-bold text-2xl md:text-[33px] md:py-5 text-left">
                Job Summary
              </h1>
              <p className="text-black text-left text-justify mt-4">
                We are seeking a proactive and enthusiastic Business Development
                Executive Intern to join our dynamic team. The intern will
                assist in identifying business opportunities, developing
                strategies to enhance company growth, and fostering strong
                relationships with potential clients. This role provides
                hands-on experience in market research, sales, and strategic
                planning, offering an excellent foundation for a career in
                business development.
              </p>
              <ul className="text-black py-7 leading-loose">
                <span className="text-black font-bold">
                  Key Responsibilities:
                </span>
                <br />
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Conduct market research to identify potential business
                    opportunities and trends.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Assist in identifying and reaching out to potential clients.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Support client relationship management and follow-up
                    meetings.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Help prepare sales pitches, proposals, and presentations.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Track and manage the sales pipeline using CRM software.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Collaborate on developing and implementing growth
                    strategies.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Assist in executing strategic projects and campaigns.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Maintain accurate records of business development activities
                    and provide administrative support.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Manage and update the contact database, working to close
                    sales.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Conduct target-based calling to prospective clients.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Provide daily reporting to the sales manager on activities
                    and progress.
                  </span>
                </li>
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Analyze sales data to identify trends, opportunities, and
                    areas for improvement.
                  </span>
                </li> */}
              </ul>

              <ul className="text-black py-7 leading-loose">
                <span className="text-black font-bold">Requirements:</span>
                <br />
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Pursuing a degree in Business Administration, Marketing, or
                    a related field.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Strong interest in business development and market research.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Excellent communication and interpersonal skills.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Proficiency in Microsoft Office Suite.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Familiarity with CRM software is a plus.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Strong analytical and problem-solving abilities.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1"> Self-motivated and proactive.</span>
                </li>
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span>Strong attention to detail and visual aesthetics.</span>
                </li> */}
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span>
                    Time management skills to handle multiple projects with
                    tight deadlines.
                  </span>
                </li> */}
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span>
                    Experience working with clients and managing their
                    expectations and feedback.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span>
                    Knowledge of motion graphics and animation is a plus.
                  </span>
                </li> */}
                {/* <li className="flex items-start mt-2"> */}
                {/* <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  /> */}
                <span className="text-black font-bold">We Offer:</span>
                {/* </li> */}
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    A competitive entry-level salary and comprehensive benefits
                    package.
                  </span>
                </li>

                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span className="flex-1">
                    A vibrant and inclusive company culture that encourages
                    creativity and innovation.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span className="flex-1">
                    Continuous learning and professional development
                    opportunities.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span className="flex-1">
                    Exposure to a wide range of industries and projects,
                    offering invaluable work experience.
                  </span>
                </li>
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Experience with user research methods, usability testing,
                    and prototyping tools.
                  </span>
                </li> */}
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Excellent communication and collaboration skills, with the
                    ability to present and defend design decisions.
                  </span>
                </li> */}
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Ability to work effectively in a fast-paced environment,
                    manage multiple projects, and meet deadlines.
                  </span>
                </li> */}
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Portfolio showcasing a range of UI/UX design projects and
                    processes.
                  </span>
                </li> */}
                {/*  */}
                {/* <span className="text-black font-bold">Join Us:</span>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    A competitive entry-level salary and comprehensive benefits
                    package.
                  </span>
                </li> */}
                {/*  */}
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    A vibrant and inclusive company culture that encourages
                    creativity and innovation.
                  </span>
                </li> */}
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Continuous learning and professional development
                    opportunities.
                  </span>
                </li> */}
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Exposure to a wide range of industries and projects,
                    offering invaluable work experience.
                  </span>
                </li> */}
                <span className="text-black font-bold">Join Us:</span>
                <p>
                  If you are driven by data and inspired by the potential to
                  influence decision-making and strategy, Auxzon is your
                  platform to shine. Apply now to start your journey with us,
                  and let’s transform the future together.
                </p>
              </ul>
              <div className="flex justify-start">
                <button
                  onClick={handleApplyNowClick}
                  className="custom-gradient text-white py-2 px-6 mt-2 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <Layout />
        </div>
      </div>
      {showForm && <ApplyForm handleClose={handleCloseForm} />}
      <Footer />
    </>
  );
};

export default BusinessIntern;
