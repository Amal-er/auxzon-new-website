import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import career1 from "../assets/images/career1.webp";
import Layout from "./Layout";
import { IoCheckmarkCircle } from "react-icons/io5";
import ApplyForm from "./Applyform";

const Uiuxdesigner = () => {
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
                UI-UX Designer
              </h1>
              <p className="text-white">
                Home |<span className="text-white md:pl-2"> UI-UX</span>
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start md:mb-20 px-3 md:px-5">
            <div className="w-full">
              <h1 className="gradient-text text-black font-bold text-2xl md:text-[33px] md:py-5 text-left">
                Job Summary
              </h1>
              <p className="text-black text-left text-justify mt-4">
                We are seeking a talented and creative UI/UX Designer to join
                our team. The UI/UX Designer will be responsible for designing
                and implementing user interfaces for web and mobile
                applications, ensuring an optimal user experience and visual
                appeal. This role offers an exciting opportunity to work on
                diverse projects and contribute to the success of cutting-edge
                digital solutions.
              </p>
              <ul className="text-black py-7 leading-loose">
                <span className="text-black font-bold">
                  Key Responsibilities:
                </span>
                <br />
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Collaborate with cross-functional teams to understand
                    project requirements, user needs, and business objectives.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Design intuitive user interfaces for web and mobile
                    applications, ensuring usability, accessibility, and visual
                    consistency.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Create wireframes, mockups, and prototypes to communicate
                    design concepts and interactions effectively.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Conduct user research, usability testing, and feedback
                    sessions to gather insights and validate design decisions.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Iterate on designs based on user feedback, stakeholder
                    input, and industry best practices.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Work closely with developers to ensure seamless
                    implementation of designs, adhering to technical constraints
                    and performance considerations.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Stay updated on UI/UX trends, emerging technologies, and
                    best practices to continuously improve design capabilities.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span className="flex-1">
                    Collaborate with stakeholders to define and maintain design
                    systems, style guides, and pattern libraries for consistency
                    across projects.
                  </span>
                </li>
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Build and maintain strong relationships with key customers
                    and clients.
                  </span>
                </li> */}
                {/* <li className="flex items-start mt-2">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Address customer inquiries, concerns, and complaints in a
                    timely and professional manner.
                  </span>
                </li> */}
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
                    Knowledge in UI/UX design for web and mobile applications.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Strong portfolio demonstrating proficiency in creating
                    user-centered design solutions.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Excellent problem-solving skills and attention to detail.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Ability to collaborate effectively with cross-functional
                    teams and stakeholders.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Familiarity with agile development methodologies and
                    processes.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Adaptability to evolving design trends and technologies.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Prior experience working in a digital agency or software
                    development environment is a plus.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Understanding of front-end development technologies (HTML,
                    CSS, JavaScript) is advantageous.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  {/* <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  /> */}
                  <span className="text-black font-bold">
                    Preferred Qualifications:
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span className="flex-1">
                    Bachelor’s degree in graphic design, interaction design,
                    HCI, or related field; Master’s degree preferred.
                  </span>
                </li>

                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span className="flex-1">
                    Proven experience in UI/UX design for web and mobile
                    applications.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span className="flex-1">
                    Proficiency in design tools such as Sketch, Adobe XD, Figma,
                    or similar.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span className="flex-1">
                    Strong understanding of design principles, typography, color
                    theory, and layout.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span className="flex-1">
                    Experience with user research methods, usability testing,
                    and prototyping tools.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span className="flex-1">
                    Excellent communication and collaboration skills, with the
                    ability to present and defend design decisions.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span className="flex-1">
                    Ability to work effectively in a fast-paced environment,
                    manage multiple projects, and meet deadlines.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span className="flex-1">
                    Portfolio showcasing a range of UI/UX design projects and
                    processes.
                  </span>
                </li>
                {/*  */}
                <span className="text-black font-bold">We Offer:</span>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    A competitive entry-level salary and comprehensive benefits
                    package.
                  </span>
                </li>
                {/*  */}
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    A vibrant and inclusive company culture that encourages
                    creativity and innovation.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Continuous learning and professional development
                    opportunities.
                  </span>
                </li>
                <li className="flex items-start mt-2">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
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

export default Uiuxdesigner;
