import React from "react";
import logo from "../assets/logo.png";
import herosection from "../assets/images/herosection.webp"; // Update this path to your actual image path
import { useState } from "react";
import graph from "../assets/images/graph.webp";

function AuxzonX() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMoreMarket, setShowMoreMarket] = useState(false);
  const [showMoreListing, setShowMoreListing] = useState(false);
  const [showMorePpc, setShowMorePpc] = useState(false);
  const [showMoreInvetory, setShowMoreInventory] = useState(false);
  const [showMoreShipping, setShowMoreShipping] = useState(false);
  const [showMoreAmazone, setShowMoreAmazone] = useState(false);
  const [showMoreCustomer, setShowMoreCustomer] = useState(false);
  const [showMoreData, setShowMoreData] = useState(false);
  const [showMoreInternational, setShowMoreInternational] = useState(false);
  const [showMoreConsulting, setShowMoreConsulting] = useState(false);
  const [showMoreCompetitive, setShowMoreCompetitive] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-100">
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
              9 out of 10 top Amazon sellers use Jungle Scout <br /> to increase
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
      <div className="w-full flex flex-col justify-center items-center md:py-10 ">
        <h1 className="text-2xl font-semibold">Ecommerce Business Solutions</h1>
        <p className="md:px-96 text-center">
          Navigating the competitive ecommerce landscape can be challenging.
          With Auxzon's specialized Amazon services, you can maximize your
          online sales and strengthen your market presence.
        </p>
      </div>

      {/* ----------------------------------------------- */}
      <div className="w-full flex flex-col md:flex-row p-5 ">
        <div className="md:w-full  flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:w-[300px] md:h-[auto]">
              <h2 className="text-xl font-bold mb-2">Market Research</h2>
              <p>
                Discover high-volume, low competition keywords to boost organic
                traffic and drive conversions.
              </p>
              <div className="flex justify-center items-center flex-col">
                {!showMoreMarket ? (
                  <>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreMarket(true);
                      }}
                    >
                      Learn more <span className="animate-slide-in">→</span>
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-4">
                      Stay ahead of the competition with our market research and
                      trend analysis services. We provide insights into consumer
                      behavior, market trends, and competitor activities to help
                      you make informed decisions. Our data-driven approach
                      enables you to identify opportunities and optimize your
                      product offerings to meet market demands.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreMarket(false);
                      }}
                    >
                      Read less
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                )}
              </div>
            </div>
            {/* ---------------------------------------------- */}
            {/* Listing Optimization Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:w-[300px] md:h-[auto]">
              <h2 className="text-xl font-bold mb-2">Listing Optimization</h2>
              <p>
                Make your products stand out in the crowded Amazon marketplace
                with our product listing optimization services.
              </p>
              <div className="flex justify-center items-center flex-col">
                {!showMoreListing ? (
                  <>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreListing(true);
                      }}
                    >
                      Learn more <span className="animate-slide-in">→</span>
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-4">
                      We enhance your listings with compelling descriptions,
                      high-quality images, and relevant keywords to improve
                      their visibility and attract more customers. Our goal is
                      to increase your product’s ranking and sales.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreListing(false);
                      }}
                    >
                      Read less
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                )}
              </div>
            </div>

            {/* ------------- */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:w-[300px] md:h-[auto]">
              <h2 className="text-xl font-bold mb-2">PPC Management</h2>
              <p>
                Optimize your advertising spend and boost your return on
                investment with our expert PPC management services.
              </p>
              <div className="flex justify-center items-center flex-col">
                {!showMorePpc ? (
                  <>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMorePpc(true);
                      }}
                    >
                      Learn more <span className="animate-slide-in">→</span>
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-4">
                      We design and manage campaigns that drive targeted traffic
                      and increase conversions on Amazon. Our PPC strategies are
                      tailored to maximize the visibility and sales of your
                      products.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMorePpc(false);
                      }}
                    >
                      Read less
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                )}
              </div>
            </div>

            {/* ------------- */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:w-[300px] md:h-[auto]">
              <h2 className="text-xl font-bold mb-2">Inventory Management</h2>
              <p>
                Ensure that your products are always available for purchase with
                our inventory management services.
              </p>
              <div className="flex justify-center items-center flex-col">
                {!showMoreInvetory ? (
                  <>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreInventory(true);
                      }}
                    >
                      Learn more <span className="animate-slide-in">→</span>
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-4">
                      We provide tools and strategies to manage stock levels,
                      forecast demand, and avoid stockouts or overstock
                      situations. Our inventory solutions help you maintain a
                      smooth and efficient supply chain.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreInventory(false);
                      }}
                    >
                      Read less
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                )}
              </div>
            </div>
            {/* ---------------------------------------- */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:w-[300px] md:h-[auto]">
              <h2 className="text-xl font-bold mb-2">
                Shipping and Fulfillment Optimization
              </h2>
              <p>
                Enhance your logistics with our shipping and fulfillment
                optimization services.
              </p>
              <div className="flex justify-center items-center flex-col">
                {!showMoreShipping ? (
                  <>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreShipping(true);
                      }}
                    >
                      Learn more <span className="animate-slide-in">→</span>
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-4">
                      We streamline your shipping processes, reduce delivery
                      times, and lower costs by selecting the best carriers and
                      fulfillment strategies. Our solutions ensure timely and
                      cost-effective delivery, improving customer satisfaction
                      and retention.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreShipping(false);
                      }}
                    >
                      Read less
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                )}
              </div>
            </div>
            {/* -------------- */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:w-[300px] md:h-[auto]">
              <h2 className="text-xl font-bold mb-2">
                Amazon Account Management
              </h2>
              <p>
                Simplify your Amazon operations with our comprehensive account
                management services.
              </p>
              <div className="flex justify-center items-center flex-col">
                {!showMoreAmazone ? (
                  <>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreAmazone(true);
                      }}
                    >
                      Learn more <span className="animate-slide-in">→</span>
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-4">
                      We handle all aspects of your Amazon seller account,
                      including listings, compliance, performance monitoring,
                      and customer service. Our dedicated account managers
                      ensure that your store runs smoothly and efficiently,
                      allowing you to focus on growing your business.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreAmazone(false);
                      }}
                    >
                      Read less
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                )}
              </div>
            </div>
            {/* ------------------------- */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:w-[300px] md:h-[auto]">
              <h2 className="text-xl font-bold mb-2">
                Feedback and Review Management
              </h2>
              <p>
                Build trust and credibility with our effective review and
                feedback management services.
              </p>
              <div className="flex justify-center items-center flex-col">
                {!showMoreCustomer ? (
                  <>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreCustomer(true);
                      }}
                    >
                      Learn more <span className="animate-slide-in">→</span>
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-4">
                      We help you collect, manage, and respond to customer
                      feedback, improving your overall rating and customer
                      satisfaction. Our proactive approach ensures that you
                      maintain a positive brand image and foster customer
                      loyalty.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreCustomer(false);
                      }}
                    >
                      Read less
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                )}
              </div>
            </div>
            {/* ------------------------- */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:w-[300px] md:h-[auto]">
              <h2 className="text-xl font-bold mb-2">
                Data Analytics and Reporting
              </h2>
              <p>
                Make data-driven decisions with our data analytics and reporting
                services.
              </p>
              <div className="flex justify-center items-center flex-col">
                {!showMoreData ? (
                  <>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreData(true);
                      }}
                    >
                      Learn more <span className="animate-slide-in">→</span>
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-4">
                      We analyze your sales, customer behavior, and market
                      trends to provide actionable insights. Our detailed
                      reports help you track performance, identify growth
                      opportunities, and optimize your strategies for better
                      results.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreData(false);
                      }}
                    >
                      Read less
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                )}
              </div>
            </div>
            {/* ---------------------------------------- */}

            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:w-[300px] md:h-[auto]">
              <h2 className="text-xl font-bold mb-2">
                International Expansion Support
              </h2>
              <p>
                Expand your business globally with our international expansion
                support services.
              </p>
              <div className="flex justify-center items-center flex-col">
                {!showMoreInternational ? (
                  <>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreInternational(true);
                      }}
                    >
                      Learn more <span className="animate-slide-in">→</span>
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-4">
                      We assist you in navigating the complexities of selling on
                      Amazon's international marketplaces. From market entry
                      strategies to compliance and localization, our expertise
                      helps you successfully reach and grow your international
                      customer base.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreInternational(false);
                      }}
                    >
                      Read less
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                )}
              </div>
            </div>
            {/* -------------------- */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:w-[300px] md:h-[auto]">
              <h2 className="text-xl font-bold mb-2">
                Consulting and Training
              </h2>
              <p>
                Empower your team with our consulting and training services.
              </p>
              <div className="flex justify-center items-center flex-col">
                {!showMoreConsulting ? (
                  <>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreConsulting(true);
                      }}
                    >
                      Learn more <span className="animate-slide-in">→</span>
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-4">
                      We offer personalized guidance and educational resources
                      to help you master Amazon’s platform. Our experts provide
                      strategic advice, best practices, and hands-on training to
                      improve your team's skills and drive your business
                      success.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreConsulting(false);
                      }}
                    >
                      Read less
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                )}
              </div>
            </div>
            {/* --------------- */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-4 md:w-[300px] md:h-[auto]">
              <h2 className="text-xl font-bold mb-2">
                Competitive Landscape Analysis
              </h2>
              <p>
                Gain a competitive edge with our competitive landscape analysis
                services.
              </p>
              <div className="flex justify-center items-center flex-col">
                {!showMoreCompetitive ? (
                  <>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreCompetitive(true);
                      }}
                    >
                      Learn more <span className="animate-slide-in">→</span>
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                ) : (
                  <>
                    <p className="mt-4">
                      We evaluate your competitors’ strengths, weaknesses,
                      pricing, and strategies to help you position your products
                      effectively. Our insights enable you to identify gaps,
                      differentiate your offerings, and capture more market
                      share.
                    </p>
                    <a
                      href="#"
                      className="text-blue-500 mt-4 inline-block"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowMoreCompetitive(false);
                      }}
                    >
                      Read less
                    </a>
                    <img
                      src={graph}
                      className="w-24 mt-4"
                      alt="Keyword Analysis Graph"
                    />
                  </>
                )}
              </div>
            </div>
            {/* --------------------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuxzonX;
