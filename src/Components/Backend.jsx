import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import career1 from "../assets/images/career1.webp";
import Layout from "./Layout";
import { IoCheckmarkCircle } from "react-icons/io5";
import ApplyForm from "./Applyform";

const Backend = () => {
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
                Backend Developer
              </h1>
              <p className="text-white">
                Home |<span className="text-white md:pl-2"> Career</span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start md:mb-20 px-3 md:px-5">
            <div className="w-full">
              <h1 className="gradient-text text-black font-bold text-2xl md:text-[33px] md:py-5 text-left">
                Job Summary
              </h1>
              <p className="text-black text-left text-justify mt-4">
                We are seeking a skilled and motivated Node.js and Express.js
                Developer to join our dynamic development team. The ideal
                candidate will have a strong background in server-side web
                application development, experience with Node.js and Express.js,
                and the ability to design and implement robust, scalable, and
                high-performance applications.
              </p>
              <ul className="text-black py-7 leading-loose">
                <span className="text-black font-bold">
                  Key Responsibilities:
                </span>
                <br />
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Develop and Maintain Server-Side Applications: Design,
                    build, and maintain efficient, reusable, and reliable
                    Node.js code.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    API Development: Develop RESTful APIs using Express.js and
                    integrate with various front-end services.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Database Integration: Work with databases like MongoDB,
                    MySQL, or PostgreSQL to design, develop, and optimize
                    database schemas and queries.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Collaborate with Front-End Developers: Work closely with
                    front-end developers to integrate user-facing elements with
                    server-side logic.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Performance Optimization: Identify performance bottlenecks
                    and optimize the performance of applications.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Security Best Practices: Implement security and data
                    protection best practices in web applications.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Testing and Debugging: Write unit and integration tests,
                    debug and resolve issues, and ensure the application is
                    stable and reliable.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Code Review and Documentation: Participate in code reviews,
                    document technical specifications, and provide technical
                    guidance to team members.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Stay Updated with Latest Trends: Keep up-to-date with the
                    latest industry trends and technologies to ensure our
                    solutions remain cutting-edge.
                  </span>
                </li>
              </ul>

              <ul className="text-black py-7 leading-loose">
                <span className="text-black font-bold">
                  Required Qualifications:
                </span>
                <br />
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span>
                    Experience: Minimum of 2-3 years of experience in developing
                    server-side applications using Node.js and Express.js.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>Technical Skills:</span>
                </li>
                <li className="pl-6">
                  <span>
                    Proficiency in JavaScript (ES6+), Node.js, and Express.js.
                  </span>
                </li>
                <li className="pl-6">
                  <span>
                    Experience with databases such as MongoDB, MySQL,
                    PostgreSQL.
                  </span>
                </li>
                <li className="pl-6">
                  <span>
                    Familiarity with front-end technologies (HTML, CSS,
                    JavaScript frameworks like React, Angular, or Vue.js).
                  </span>
                </li>
                <li className="pl-6">
                  <span>Understanding of RESTful API design principles.</span>
                </li>
                <li className="pl-6">
                  <span>
                    Knowledge of authentication and authorization mechanisms,
                    including OAuth, JWT, etc.
                  </span>
                </li>
                <li className="pl-6">
                  <span>
                    Experience with version control systems, preferably Git.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Problem-Solving Skills: Strong analytical and
                    problem-solving skills with the ability to work
                    independently or as part of a team.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Education: Bachelor’s degree in Computer Science,
                    Engineering, or a related field, or equivalent practical
                    experience.
                  </span>
                </li>
                <span className="text-black font-bold">
                  Preferred Qualifications:
                </span>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Experience with Cloud Services: Knowledge of cloud platforms
                    such as AWS, Azure, or Google Cloud.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    DevOps: Familiarity with DevOps practices and tools for
                    continuous integration and deployment.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Microservices Architecture: Understanding of microservices
                    architecture and related design patterns.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Open Source Contributions: Active participation in open
                    source projects or contributions to relevant communities.
                  </span>
                </li>
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

export default Backend;
