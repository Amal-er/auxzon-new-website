import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import career1 from "../assets/images/career1.webp";
import Layout from "./Layout";
import { IoCheckmarkCircle } from "react-icons/io5";
import ApplyForm from "./Applyform";

const SalesManager = () => {
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
                Sales Manager
              </h1>
              <p className="text-white">
                Home | <span className="text-white md:pl-2">Career</span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start md:mb-20 px-3 md:px-5">
            <div className="w-full">
              <h1 className="gradient-text text-black font-bold text-2xl md:text-[33px] md:py-5 text-left">
                Job Summary
              </h1>
              <p className="text-black text-left text-justify mt-4">
                Auxzon is seeking a dynamic and results-oriented Sales Manager
                to lead our sales team. The ideal candidate will be responsible
                for driving sales growth, managing a team of sales
                representatives, setting and achieving sales targets, and
                ensuring the team is equipped with the necessary tools and
                support to excel in their roles.
              </p>
              <ul className="text-black py-7 leading-loose">
                <span className="text-black font-bold">
                  Key Responsibilities:
                </span>
                <br />
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Develop and implement strategic sales plans to achieve
                    company targets.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Set sales targets for the team and ensure they are met or
                    exceeded consistently.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Analyze market trends and competitor activities to identify
                    opportunities for growth.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Lead, motivate, and manage a team of sales representatives.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Provide coaching, training, and guidance to team members to
                    enhance their performance.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Conduct regular performance reviews and provide constructive
                    feedback.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Drive the generation of leads through various channels,
                    including cold calling, networking, and referrals.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Oversee the process of converting leads into customers and
                    ensure a high conversion rate.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Build and maintain strong relationships with key customers
                    and clients.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Address customer inquiries, concerns, and complaints in a
                    timely and professional manner.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Monitor sales performance metrics and provide regular
                    reports to senior management.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Analyze sales data to identify trends, opportunities, and
                    areas for improvement.
                  </span>
                </li>
              </ul>

              <ul className="text-black py-7 leading-loose">
                <span className="text-black font-bold">Requirements:</span>
                <br />
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Bachelor’s degree in Business Administration, Marketing, or
                    related field
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Proven experience in sales management, preferably in a field
                    sales environment.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Strong leadership and team management skills.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Excellent communication and interpersonal abilities.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Ability to thrive in a fast-paced and target-driven
                    environment.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Proficiency in CRM software and Microsoft Office Suite
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <span className="text-black font-bold">We Offer:</span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
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

export default SalesManager;
