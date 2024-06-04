import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Navbar from "./Navbar";
import Footer from "./Footer";
import career1 from "../assets/images/career1.webp";
import Layout from "./Layout";

const Career = () => {
  const jobs = [
    {
      type: "On-site",
      title: "Business Development Executive",
      description:
        "Conducting cutting-edge research in AI, developing new algorithms, and pushing the boundaries of AI capabilities.",
      url: "/bde",
    },
    {
      type: "On-site",
      title: "Backend Developer",
      description:
        "Designing and implementing machine learning models and systems, and optimizing algorithms for real-world applications.",
      url: "/backend",
    },
    {
      type: "On-site",
      title: "Sales Manager",
      description:
        "Designing and programming robots that utilize AI techniques for perception, decision-making, and autonomous operation.",
      url: "/salesmanager",
    },
    {
      type: "On-site",
      title: "Data Analyst",
      description:
        "Designing and programming robots that utilize AI techniques for perception, decision-making, and autonomous operation.",
      url: "/data-analyst",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center text-white px-3">
        <div className="mt-4 w-[95%]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="bg-[#f0f2f4] md:w-[100%] px-5 md:px-8 flex flex-col items-center text-white py-6">
          <div
            className="flex flex-col justify-center items-center bg-cover bg-center w-full h-56 md:h-[499px] rounded-xl mb-10"
            style={{ backgroundImage: `url(${career1})` }}
          >
            <h1 className="text-4xl md:text-[87px] font-extrabold text-white">
              CAREER
            </h1>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-start items-start md:mb-20 px-3 md:px-5">
            <div className="w-full">
              <h1 className="gradient-text text-black font-bold text-2xl md:text-[33px] text-left">
                What we do
              </h1>
              <p className="text-black text-left text-justify mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br /> It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum. It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look
                like readable.
              </p>
            </div>
          </div>

          <div className="w-full px-3 md:px-5 py-10 bg-white">
            <div className="max-w-6xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-medium gradient-text mb-10 text-left">
                Job Openings
              </h1>
              <div className="space-y-6">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center"
                  >
                    <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6 w-full">
                      <p className="text-sm text-gray-500 mb-2 md:mb-0">
                        {job.type}
                      </p>
                      <div>
                        <h2 className="text-xl text-black font-bold mt-1">
                          {job.title}
                        </h2>
                        <p className="mt-2 text-gray-600">{job.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right w-full md:w-auto">
                      <span className="text-lg font-semibold">
                        {job.salary}
                      </span>
                      <Link to={job.url}>
                        {" "}
                        {/* Use Link component and set the 'to' attribute to the job URL */}
                        <button className="w-32 h-12  bg-transparent text-blue-500 border border-blue-500 rounded-full text-sm hover:bg-blue-500 hover:text-white transition">
                          Apply Now
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Layout />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Career;
