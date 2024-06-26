import React from "react";
import choose from "../assets/images/choose.webp";
import vectorbg from "../assets/images/vector-bg.png";

const WhyChoose = () => {
  return (
    <div
      className="bg-white p-6 md:p-12 flex flex-col md:flex-row items-center"
      style={{
        backgroundImage: `url(${vectorbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="md:w-1/2 mb-6 md:mb-0">
        <img src={choose} alt="Building" className="w-full" />
      </div>
      <div className="md:w-1/2 md:pl-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Why Choose Auxzon
        </h2>
        <ul className="space-y-4 text-lg md:text-xl">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Tailored Solutions
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Expertise
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Customer-Centric Approach
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Stay Ahead with Industry Trends
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>
            Data Security
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChoose;
