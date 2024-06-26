import React from "react";
import logo from "../assets/logo.png";
import herosection from "../assets/images/herosection.webp"; // Update this path to your actual image path
import { useState, useRef } from "react";
import graph from "../assets/images/graph.webp";
import ReadMoreReadLess from "./ReadMoreReadLess";
import piechart from "../assets/images/piechart.webp";
import MarketingX from "../assets/images/marketingX.webp";
import ListingX from "../assets/images/listingX.webp";
import ppcX from "../assets/images/ppcX.webp";
import inventory from "../assets/images/inventory.webp";
import ShippingX from "../assets/images/shippingX.webp";
import account from "../assets/images/account.webp";
import feedback from "../assets/images/feedback.webp";
import dataX from "../assets/images/dataX.webp";
import international from "../assets/images/international.webp";
import consulting from "../assets/images/consulting.webp";
import landscape from "../assets/images/landscape.webp";
import { IoMdDownload } from "react-icons/io";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function AuxzonX() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  //

  // const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    window.open(browsure, "_blank");
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200; // Adjust this value as needed for the scroll distance
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200; // Adjust this value as needed for the scroll distance
    }
  };
  // -----------------------

  const FeatureBox = ({ title, children }) => (
    <div className="w-full bg-white flex justify-center items-center md:p-5 p-5">
      <div className="shadow-md rounded-lg md:w-3/4 md:h-96 bg-[#f7f7f7] flex flex-col justify-center items-center md:px-5 p-5">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        {children}
      </div>
    </div>
  );

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
            <p className=" mb-6 text-justify">
              9 out of 10 top Amazon sellers use Azonux to increase
              profitability, uncover growth opportunities, and stay ahead of
              competitors.
            </p>
            <button className="custom-gradient text-black font-semibold p-3 rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------------------------- */}
      <div className="w-full flex flex-col justify-left items-left md:py-10 py-10  md:px-20 px-10 ">
        <h1 className="text-2xl font-semibold">Ecommerce Business Solutions</h1>
        <p className="  md:mr-[700px] text-justify ">
          Navigating the competitive ecommerce landscape can be challenging.
          With Auxzon's specialized Amazon services, you can maximize your
          online sales and strengthen your market presence.
        </p>
      </div>
      {/* ------------------------------------------- */}

      <div
        className="w-full h-full py-4 flex gap-4 hide-scrollbar  md:px-5"
        ref={scrollContainerRef}
      >
        <div className="flex text-center">
          <div className="flex-none w-80 rounded-2xl overflow-hidden ">
            <ReadMoreReadLess
              img={MarketingX}
              title={"Market Research"}
              shortContent="Discover high-volume, low competition keywords to boost organic traffic and drive conversions."
              longContent="Stay ahead of the competition with our market research and trend analysis services. We provide insights into consumer behavior, market trends, and competitor activities to help you make informed decisions. Our data-driven approach enables you to identify opportunities and optimize your product offerings to meet market demands."
            />
          </div>
        </div>
        <div className="flex text-center">
          <div className="flex-none w-80 rounded-2xl overflow-hidden">
            <ReadMoreReadLess
              img={ListingX}
              title={"Listing Optimization"}
              shortContent="Make your products stand out in the crowded Amazon marketplace with our product listing optimization services."
              longContent="We enhance your listings with compelling descriptions, high-quality images, and relevant keywords to improve their visibility and attract more customers. Our goal is to increase your product’s ranking and sales."
            />
          </div>
        </div>
        <div className="flex text-center">
          <div className="flex-none w-80 rounded-2xl overflow-hidden">
            <ReadMoreReadLess
              img={ppcX}
              title={"PPC Management"}
              shortContent="Optimize your advertising spend and boost your return on investment with our expert PPC management services."
              longContent="We design and manage campaigns that drive targeted traffic and increase conversions on Amazon. Our PPC strategies are tailored to maximize the visibility and sales of your products."
            />
          </div>
        </div>
        <div className="flex text-center">
          <div className="flex-none w-80 rounded-2xl overflow-hidden">
            <ReadMoreReadLess
              img={inventory}
              title={"Inventory Management"}
              shortContent="Ensure that your products are always available for purchase with our inventory management services."
              longContent="We provide tools and strategies to manage stock levels, forecast demand, and avoid stockouts or overstock situations. Our inventory solutions help you maintain a smooth and efficient supply chain."
            />
          </div>
        </div>
        <div className="flex text-center">
          <div className="flex-none w-80 rounded-2xl overflow-hidden">
            <ReadMoreReadLess
              img={ShippingX}
              title={"Shipping and Fulfillment Optimization"}
              shortContent="Enhance your logistics with our shipping and fulfillment optimization."
              longContent="We streamline your shipping processes, reduce delivery times, and lower costs by selecting the best carriers and fulfillment strategies. Our solutions ensure timely and cost-effective delivery, improving customer satisfaction and retention."
            />
          </div>
        </div>
        <div className="flex text-center">
          <div className="flex-none w-80 rounded-2xl overflow-hidden">
            <ReadMoreReadLess
              img={account}
              title={"Amazon Account Management"}
              shortContent="Simplify your Amazon operations with our comprehensive account management services."
              longContent="We handle all aspects of your Amazon seller account, including listings, compliance, performance monitoring, and customer service. Our dedicated account managers ensure that your store runs smoothly and efficiently, allowing you to focus on growing your business."
            />
          </div>
        </div>
        <div className="flex text-center">
          <div className="flex-none w-80 rounded-2xl overflow-hidden">
            <ReadMoreReadLess
              img={feedback}
              title={"Feedback and Review Management"}
              shortContent="Build trust and credibility with our effective review and feedback management services."
              longContent="We help you collect, manage, and respond to customer feedback, improving your overall rating and customer satisfaction. Our proactive approach ensures that you maintain a positive brand image and foster customer loyalty."
            />
          </div>
        </div>
        <div className="flex text-center">
          <div className="flex-none w-80 rounded-2xl overflow-hidden">
            <ReadMoreReadLess
              img={dataX}
              title={"Data Analytics and Reporting"}
              shortContent="Make data-driven decisions with our data analytics and reporting services."
              longContent="We analyze your sales, customer behavior, and market trends to provide actionable insights. Our detailed reports help you track performance, identify growth opportunities, and optimize your strategies for better results."
            />
          </div>
        </div>
        <div className="flex text-center">
          <div className="flex-none w-80 rounded-2xl overflow-hidden">
            <ReadMoreReadLess
              img={international}
              title={"International Expansion Support"}
              shortContent="Expand your business globally with our international expansion support services."
              longContent="We assist you in navigating the complexities of selling on Amazon's international marketplaces. From market entry strategies to compliance and localization, our expertise helps you successfully reach and grow your international customer base."
            />
          </div>
        </div>
        <div className="flex text-center">
          <div className="flex-none w-80 rounded-2xl overflow-hidden">
            <ReadMoreReadLess
              img={consulting}
              title={"Consulting and Training"}
              shortContent="Empower your team with our consulting and training services."
              longContent="We offer personalized guidance and educational resources to help you master Amazon’s platform. Our experts provide strategic advice, best practices, and hands-on training to improve your team's skills and drive your business success."
            />
          </div>
        </div>
        <div className="flex text-center">
          <div className="flex-none w-80 rounded-2xl overflow-hidden">
            <ReadMoreReadLess
              img={landscape}
              title={"Competitive Landscape Analysis"}
              shortContent="Gain a competitive edge with our competitive landscape analysis services."
              longContent="We evaluate your competitors’ strengths, weaknesses, pricing, and strategies to help you position your products effectively. Our insights enable you to identify gaps, differentiate your offerings, and capture more market share."
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <button onClick={scrollLeft}>🔙</button>

        <button onClick={scrollRight}>🔜</button>
      </div>

      {/* ---------------------------------------- */}
      <div className="w-full h-auto bg-white flex flex-col md:flex-row md:h-72">
        <div className="w-full md:w-[60%] bg-white flex flex-col justify-center items-center text-justify p-4 md:p-0">
          <h1 className="text-2xl font-light text-black text-center md:text-left">
            Sellers who utilized Azonux for one year experienced
            <br className="hidden md:block" /> an impressive average growth of
            367% in their Amazon revenue.
          </h1>
          <p className="md:ml-30 md:py-5 text-center md:text-left">
            Enhance the impact of each decision through automated insights,
            streamlined workflows,
            <br className="hidden md:block" /> comprehensive data, and
            exceptional customer support.
          </p>
        </div>
        <div className="w-full md:w-[40%] flex justify-center items-center py-4 md:py-0">
          <button className="w-48 h-16 custom-gradient justify-center items-center rounded-md">
            Get Started
          </button>
        </div>
      </div>
      {/* ---------------------------------------------- */}
      <div className="w-full bg-[#f7f7f7] flex flex-col md:flex-row md:py-8">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center md:items-end py-4 md:py-0">
          <img className="w-3/4 md:w-[500px]" src={piechart} alt="Pie chart" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-4 md:px-9">
          <h1 className="text-xl font-semibold text-center md:text-left">
            Azonux
          </h1>
          <p className="text-base font-normal text-center md:text-left">
            Market intelligence for leading brands
          </p>
          <p className="text-base font-thin text-center md:text-left">
            Cobalt helps the top-selling brands, retailers and agencies make
            better <br className="hidden md:block" /> ecommerce decisions faster
            and with more confidence.
          </p>
          <div className="py-4 md:py-8">
            <button className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded-md">
              Get Demo
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------- */}

      <div className="bg-gray-200 min-h-screen">
        <div className="flex justify-start items-center md:w-full md:h-20 h-20 bg-white ">
          <p className="text-black font-semibold md:ml-24 ml-10 text-2xl">
            Resourses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full justify-center items-center p-4 md:p-0 ">
          <FeatureBox title="Market research">
            <p>
              Identify profitable opportunities instantly within a database of
              over 500 million Amazon products.
            </p>
            <div className="mt-4">
              <div className="text-2xl font-bold">18,247</div>
              <div className="text-sm text-green-500">30% last period</div>
              <div className="text-sm text-gray-500">Sales volume</div>
            </div>
            <div className="mt-2">
              <div className="text-green-500">Low</div>
              <div className="text-sm text-gray-500">Competition</div>
            </div>
            <div className="custom-gradient w-48 h-6 py-5 mt-5 flex justify-center items-center rounded-md">
              <button className="text-white flex justify-center items-center">
                <IoMdDownload />
                Download Ebook
              </button>
            </div>
            <div className="text-sm text-gray-500">Opportunity score</div>
          </FeatureBox>
          <FeatureBox title="Advertising">
            <p>
              Identify profitable opportunities instantly within a database of
              over 500 million Amazon products.
            </p>
            <div className="mt-4">
              <div className="text-2xl font-bold">18,247</div>
              <div className="text-sm text-green-500">30% last period</div>
              <div className="text-sm text-gray-500">Sales volume</div>
            </div>
            <div className="mt-2">
              <div className="text-green-500">Low</div>
              <div className="text-sm text-gray-500">Competition</div>
            </div>
            <div className="custom-gradient w-48 h-6 py-5 mt-5 flex justify-center items-center rounded-md">
              <button className="text-white flex justify-center items-center">
                <IoMdDownload />
                Download Ebook
              </button>
            </div>
            <div className="text-sm text-gray-500">Opportunity score</div>
          </FeatureBox>
          <FeatureBox title="Listing Optimization">
            <p>
              Identify profitable opportunities instantly within a database of
              over 500 million Amazon products.
            </p>
            <div className="mt-4">
              <div className="text-2xl font-bold">18,247</div>
              <div className="text-sm text-green-500">30% last period</div>
              <div className="text-sm text-gray-500">Sales volume</div>
            </div>
            <div className="mt-2">
              <div className="text-green-500">Low</div>
              <div className="text-sm text-gray-500">Competition</div>
            </div>
            <div className="custom-gradient w-48 h-6 py-5 mt-5 flex justify-center items-center rounded-md">
              <button className="text-white flex justify-center items-center">
                <IoMdDownload />
                Download Ebook
              </button>
            </div>
            <div className="text-sm text-gray-500">Opportunity score</div>
          </FeatureBox>
          <FeatureBox title="Operational Management">
            <p>
              Identify profitable opportunities instantly within a database of
              over 500 million Amazon products.
            </p>
            <div className="mt-4">
              <div className="text-2xl font-bold">18,247</div>
              <div className="text-sm text-green-500">30% last period</div>
              <div className="text-sm text-gray-500">Sales volume</div>
            </div>
            <div className="mt-2">
              <div className="text-green-500">Low</div>
              <div className="text-sm text-gray-500">Competition</div>
            </div>
            <div className="custom-gradient w-48 h-6 py-5 mt-5 flex justify-center items-center rounded-md">
              <button className="text-white flex justify-center items-center">
                <IoMdDownload />
                Download Ebook
              </button>
            </div>
            <div className="text-sm text-gray-500">Opportunity score</div>
          </FeatureBox>
        </div>
      </div>

      {/* ------------------------------------------- */}
      <footer className="bg-[#fdebd1] py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 mb-8 md:mb-0">
              {/* <div className="text-3xl font-bold text-black mb-4">AX</div> */}
              <p className="text-xl font-semibold text-black mb-4">
                Accelerate your Amazon business today
              </p>
              <p className="text-base text-black mb-4">
                For global brands and retailers
              </p>
              <a href="#" className="text-blue-600 underline">
                Explore Azonux
              </a>
            </div>
            <div className="md:w-1/2 flex flex-wrap md:justify-between">
              <div className="w-1/2 md:w-1/3 mb-4">
                <p className="font-semibold text-black mb-2">Why Azonux</p>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-black">
                      Help Center
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-black">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 md:w-1/3 mb-4">
                <p className="font-semibold text-black mb-2">About Us</p>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-black">
                      Leadership
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-black">
                      Giving Back
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 md:w-1/3 mb-4">
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-black">
                      Careers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-black">
                      Affiliates{" "}
                      <span className="text-purple-500">Updated</span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-black">
                      Press
                    </a>
                  </li>
                </ul>
              </div>
              {/* Black Horizontal Line */}
              <hr className="border-t-2 border-black w-full my-4" />
              <div className="w-full md:w-1/3">
                <p className="font-semibold text-black mb-2">Follow Us</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/auxzon"
                    className="text-black"
                  >
                    <FaFacebookF />
                  </a>
                  <a href="https://x.com/auxzon" className="text-black">
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/102232019/admin/feed/posts/"
                    className="text-black"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://youtube.com/shorts/LLlf11iI04g?si=jen4nlz9fM-s-uin"
                    className="text-black"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-gray-700">
                Privacy Center
              </a>
              <a href="#" className="text-gray-700">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-700">
                Terms of Use
              </a>
            </div>
            <div className="text-gray-700">© 2024 All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AuxzonX;
