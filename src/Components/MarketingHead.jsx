import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import career1 from "../assets/images/career1.webp";
import Layout from "./Layout";
import { IoCheckmarkCircle } from "react-icons/io5";
import ApplyForm from "./Applyform";

const MarketingHead = () => {
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
                Marketing Head
              </h1>
              <p className="text-white">
                Home |<span className="text-white md:pl-2">Marketing Head</span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start md:mb-20 px-3 md:px-5">
            <div className="w-full">
              <h1 className="gradient-text text-black font-bold text-2xl md:text-[33px] md:py-5 text-left">
                Job Summary
              </h1>
              <p className="text-black text-left text-justify mt-4">
                We are looking for a results-driven Marketing Head who will be
                responsible for developing and executing comprehensive marketing
                strategies to enhance brand awareness, generate leads, and drive
                revenue growth. The ideal candidate will have a strong
                background in digital marketing, content creation, SEO,
                copywriting, performance marketing, and marketing strategy. They
                will work closely with internal teams and external clients to
                achieve marketing objectives and contribute to the overall
                success of the company.
              </p>
              <ul className="text-black py-7 leading-loose">
                <span className="text-black font-bold">
                  Key Responsibilities:
                </span>
                <br />
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Develop and execute innovative marketing strategies for
                    brand awareness and revenue growth.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Oversee all digital marketing aspects: SEO, content
                    creation, email, social media, and performance marketing.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Collaborate internally and externally for tailored campaigns
                    aligned with business objectives.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Lead high-quality content development across various
                    channels.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Manage LinkedIn Ads campaigns to engage target audiences and
                    drive conversions.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Implement email marketing campaigns to nurture leads and
                    enhance customer retention.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Analyze marketing metrics to optimize strategies and
                    campaign effectiveness.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Stay updated with industry trends and emerging technologies
                    in digital marketing.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Lead and mentor a team of marketing professionals, offering
                    guidance and support.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Collaborate with sales teams to drive lead generation and
                    conversion alignment.
                  </span>
                </li>
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Monitor sales performance metrics and provide regular
                    reports to senior management.
                  </span>
                </li> */}
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
                    Bachelor’s degree in Marketing, Business Administration,
                    Communications, or related field. MBA preferred.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Proven senior marketing experience with a track record of
                    successful initiatives.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Expertise in digital marketing channels: SEO, content,
                    social media, email, and performance.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Strong analytical skills for data interpretation and
                    informed decision-making.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Excellent communication and leadership skills to motivate
                    teams and stakeholders.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Creative problem-solving mindset focused on innovation and
                    improvement.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    {" "}
                    Experience with marketing automation platforms and CRM
                    systems.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    {" "}
                    Ability to manage multiple projects in a fast-paced
                    environment.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Strong project management skills with task prioritization
                    and deadline management.
                  </span>
                </li>
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
                <span className="text-black font-bold ">We Offer:</span>
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

export default MarketingHead;
