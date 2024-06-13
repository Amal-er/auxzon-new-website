import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import career1 from "../assets/images/career1.webp";
import Layout from "./Layout";
import { IoCheckmarkCircle } from "react-icons/io5";
import ApplyForm from "./Applyform";

const VideoGrapher = () => {
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
                Video Grapher
              </h1>
              <p className="text-white">
                Home |<span className="text-white md:pl-2">Video Grapher</span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start md:mb-20 px-3 md:px-5">
            <div className="w-full">
              <h1 className="gradient-text text-black font-bold text-2xl md:text-[33px] md:py-5 text-left">
                Job Summary
              </h1>
              <p className="text-black text-left text-justify mt-4">
                We are seeking a skilled and creative Videographer cum Video
                Editor to support our in-house needs as well as those of our
                external clients. The ideal candidate will be versatile, capable
                of handling multiple projects simultaneously, and adept at
                producing visually compelling video content that meets our high
                standards.
              </p>
              <ul className="text-black py-7 leading-loose">
                <span className="text-black font-bold">
                  Key Responsibilities:
                </span>
                <br />
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Plan, shoot, and edit high-quality video content for
                    internal and external projects.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Collaborate with marketing and product teams on promotional
                    and social media videos.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Handle pre-production planning, storyboarding, lighting,
                    sound, filming, and editing.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Work with clients to align video solutions with their brand
                    identity and objectives.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Maintain consistency with Auxzon Solutions Pvt Ltd’s brand
                    guidelines and visual style.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Contribute creative ideas in brainstorming sessions.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Manage multiple video projects, ensuring timely delivery and
                    meeting deadlines.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Stay updated with industry trends and improve video
                    production capabilities.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Present video concepts to stakeholders and clients,
                    incorporating feedback.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Collaborate with videographers, editors, and team members to
                    achieve project goals.
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
                    Bachelor’s degree in Film Production, Video Production,
                    Multimedia, or related field.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Proven experience as a Videographer and Video Editor with a
                    strong portfolio.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Proficient in Adobe Premiere Pro, Final Cut Pro, and After
                    Effects.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Strong understanding of video production techniques:
                    lighting, sound, and camera operation.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Excellent communication skills for articulating video
                    concepts and ideas.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Ability to work independently and collaboratively in a team
                    environment.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Strong attention to detail and aesthetics.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Strong attention to detail and visual aesthetics.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Time management skills to handle multiple projects with
                    tight deadlines.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Experience working with clients and managing their
                    expectations and feedback.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Knowledge of motion graphics and animation is a plus.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  {/* <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  /> */}
                  <span className="text-black font-bold">We Offer:</span>
                </li>
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

export default VideoGrapher;
