import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import career1 from "../assets/images/career1.webp";
import Layout from "./Layout";
import { IoCheckmarkCircle } from "react-icons/io5";
import ApplyForm from "./Applyform";

const BusinessDevelopmentExecutive = () => {
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
                Business Development Executive
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
                We are seeking a Business Development Executive. Who can drive
                sales, deliver presentations, manage client relationships, and
                collaborate with teams, conduct market research, and stay
                updated on industry trends.
              </p>
              <ul className="text-black py-7 leading-loose">
                <span className="text-black font-bold">
                  Key Responsibilities:
                </span>
                <br />
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Identify potential clients, initiate contact through calls
                    and emails, and present our services.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Engage with prospects to understand their needs, demonstrate
                    our solutions, and convert leads into sales.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Deliver compelling presentations and proposals to clients,
                    showcasing the benefits and value of our services.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Manage and execute effective email campaigns to nurture
                    leads and maintain client relationships.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Develop and maintain strong relationships with new and
                    existing clients to ensure continuous business growth.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Conduct research to identify new market opportunities and
                    stay updated on industry trends.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Work closely with the marketing and development teams to
                    align strategies and achieve business goals
                  </span>
                </li>
              </ul>

              <ul className="text-black py-7 leading-loose">
                <span className="text-black font-bold">Requirements:</span>
                <br />
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span>
                    Bachelor's degree in Business, Marketing, or a related
                    field.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span>
                    Minimum of 6 months to 1 year of experience in sales,
                    business development, or a similar role
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span> Skills:</span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="  mr-2 text-xl  "
                  />
                  <span>
                    Excellent verbal and written English communication skills.
                  </span>
                </li>

                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>Strong presentation and negotiation skills.</span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Ability to build rapport and maintain long-term
                    relationships with clients.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Self-motivated and target-driven with a passion for sales
                    and business growth.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle
                    color="blue"
                    className="mr-2 text-xl font-semibold"
                  />
                  <span>
                    Ability to work in a fast-paced and dynamic environment.
                  </span>
                </li>
                <span className="text-black font-bold">We Offer:</span>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    A competitive entry-level salary and comprehensive benefits
                    package.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    A vibrant and inclusive company culture that encourages
                    creativity and innovation
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
                  <span>
                    Continuous learning and professional development
                    opportunities.
                  </span>
                </li>
                <li className="flex justify-start items-center">
                  <IoCheckmarkCircle color="blue" className="mr-2 text-xl" />
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

export default BusinessDevelopmentExecutive;
