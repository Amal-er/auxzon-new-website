import React from "react";
import logo from "../assets/logo.png";
import herosection from "../assets/images/herosection.webp"; // Update this path to your actual image path
import { useState } from "react";
import graph from "../assets/images/graph.webp";
import ReadMoreReadLess from "./ReadMoreReadLess";

function AuxzonX() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //

  // const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen ">
      <header className="flex justify-between items-center py-4 bg-white md:px-20 px-10">
        <div className="text-2xl font-bold flex items-center">
          <img src={logo} className="w-10 mr-2" alt="Logo" />
          azonux
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-700">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Enterprise
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex">
          <button className="text-gray-700 mr-4">Log In</button>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Sign up
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-gray-700">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700">
                Enterprise
              </a>
            </li>
            <li>
              <button className="text-gray-700">Log In</button>
            </li>
            <li>
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Sign up
              </button>
            </li>
          </ul>
        </nav>
      )}

      <div
        className="relative w-full  flex items-center"
        style={{
          backgroundImage: `url(${herosection})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start p-8 bg-white bg-opacity-75 rounded-lg md:px-20">
          <div className="md:py-32">
            <h1 className="font-sans text-2xl md:text-4xl font-bold mb-4 text-justify">
              Amazon <br /> intelligence, <br /> unlocked
            </h1>
            <p className="text-justify mb-6">
              9 out of 10 top Amazon sellers use Azonux <br /> to increase
              profitability, uncover growth opportunities, and <br /> stay ahead
              of competitors.
            </p>
            <button className="bg-black text-white font-semibold p-3 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------------------------- */}
      <div className="w-full flex flex-col justify-center items-center md:py-10 py-10  ">
        <h1 className="text-2xl font-semibold">Ecommerce Business Solutions</h1>
        <p className="md:px-96 text-center ">
          Navigating the competitive ecommerce landscape can be challenging.
          With Auxzon's specialized Amazon services, you can maximize your
          online sales and strengthen your market presence.
        </p>
      </div>
      {/* ------------------------------------------- */}
      <div className="w-full flex flex-col md:flex-row p-2  ">
        <div className="md:w-full  flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6   ">
            <ReadMoreReadLess
              title={"Market Research"}
              shortContent="Discover high-volume, low competition keywords to boost organic traffic and drive conversions."
              longContent="Stay ahead of the competition with our market research and trend analysis services. We provide insights into consumer behavior, market trends, and competitor activities to help you make informed decisions. Our data-driven approach enables you to identify opportunities and optimize your product offerings to meet market demands."
            />

            <ReadMoreReadLess
              title={"Listing Optimization"}
              shortContent="Make your products stand out in the crowded Amazon marketplace with our product listing optimization services."
              longContent="We enhance your listings with compelling descriptions, high-quality images, and relevant keywords to improve their visibility and attract more customers. Our goal is to increase your product’s ranking and sales. "
            />

            <ReadMoreReadLess
              title={"PPC Management"}
              shortContent="Optimize your advertising spend and boost your return on investment with our expert PPC management services."
              longContent="We design and manage campaigns that drive targeted traffic and increase conversions on Amazon. Our PPC strategies are tailored to maximize the visibility and sales of your products."
            />

            <ReadMoreReadLess
              title={"Inventory Management"}
              shortContent="Ensure that your products are always available for purchase with our inventory management services."
              longContent="We provide tools and strategies to manage stock levels, forecast demand, and avoid stockouts or overstock situations. Our inventory solutions help you maintain a smooth and efficient supply chain."
            />

            <ReadMoreReadLess
              title={"Shipping and Fulfillment Optimization"}
              shortContent="Enhance your logistics with our shipping and fulfillment optimization services.We streamline your shipping"
              longContent=" processes, reduce delivery times, and lower costs by selecting the best carriers and fulfillment strategies. Our solutions ensure timely and cost-effective delivery, improving customer satisfaction and retention."
            />

            <ReadMoreReadLess
              title={"Amazon Account Management"}
              shortContent="Simplify your Amazon operations with our comprehensive account management services."
              longContent="We handle all aspects of your Amazon seller account, including listings, compliance, performance monitoring, and customer service. Our dedicated account managers ensure that your store runs smoothly and efficiently, allowing you to focus on growing your business."
            />

            <ReadMoreReadLess
              title={"Feedback and Review Management"}
              shortContent="Build trust and credibility with our effective review and feedback management services."
              longContent="We help you collect, manage, and respond to customer feedback, improving your overall rating and customer satisfaction. Our proactive approach ensures that you maintain a positive brand image and foster customer loyalty. "
            />

            <ReadMoreReadLess
              title={"Data Analytics and Reporting"}
              shortContent="Make data-driven decisions with our data analytics and reporting services.We analyze your sales,customer "
              longContent="behavior,and market trends to provide actionable insights. Our detailed reports help you track performance, identify growth opportunities, and optimize your strategies for better results."
            />
            <ReadMoreReadLess
              title={"International Expansion Support"}
              shortContent="Expand your business globally with our international expansion support services."
              longContent="We assist you in navigating the complexities of selling on Amazon's international marketplaces. From market entry strategies to compliance and localization, our expertise helps you successfully reach and grow your international customer base. "
            />
            <ReadMoreReadLess
              title={"Consulting and Training"}
              shortContent="Empower your team with our consulting and training services. We offer personalized guidance and educational"
              longContent="  resources to help you master Amazon’s platform. Our experts provide strategic advice, best practices, and hands-on training to improve your team's skills and drive your business success."
            />
            <ReadMoreReadLess
              title={"Competitive Landscape Analysis"}
              shortContent="Gain a competitive edge with our competitive landscape analysis services."
              longContent="We evaluate your competitors’ strengths, weaknesses, pricing, and strategies to help you position your products effectively. Our insights enable you to identify gaps, differentiate your offerings, and capture more market share."
            />
          </div>
        </div>
      </div>

      {/* ----------------------------------------------- */}
    </div>
  );
}

export default AuxzonX;
