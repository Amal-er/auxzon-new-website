import React, { useState } from "react";
import Navbar from "./Navbar";
import aboutbg from "../assets/images/about2.webp";
import Footer from "./Footer";
import intro from "../assets/images/intro.png";
import Layout from "./Layout";
import { IoMdDownload } from "react-icons/io";

const BusinessConsulting = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDownload = () => {
    window.open(browsure, "_blank");
  };

  return (
    <>
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center justify-center text-white px-3">
        <div className="mt-4 w-[95%]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="bg-[#f0f2f4] min-h-screen flex flex-col px-2 items-center text-white py-6 md:px-8">
          <div
            className="flex flex-col  justify-center items-center bg-cover bg-center w-full h-56 md:h-[260px]  rounded-xl mb-10"
            style={{ backgroundImage: `url(${aboutbg})` }}
          >
            <h1 className="text-[33px] font-bold text-white">
              Ecommerce Business Solutions
            </h1>
            <p className="text-center text-sm sm:text-base lg:text-lg md:py-7 text-white tracking-wide ">
              Are you ready to elevate your business to new heights? Look no
              further than auxzon Solutions <br /> for data-driven business
              insights tailored to your specific needs.
            </p>
          </div>

          <div className="w-full h-auto mt-6 flex flex-col md:flex-row justify-center items-center  md:px-5">
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
              <div className="w-full md:w-1/2 flex flex-col justify-center  items-left px-6 md:px-0 mb-6 md:mb-0">
                <h1 className="gradient-text text-black font-bold text-[33px]">
                  Ecommerse
                </h1>
                <p className="text-black text-justify">
                  Our Amazon Seller Services are tailored to maximize your
                  presence and sales on the Amazon platform. We offer a suite of
                  services designed to optimize every aspect of your Amazon
                  business:
                  <br />
                  ⁠*PPC Management:* Our team of experts will manage your
                  pay-per-click campaigns to ensure maximum visibility and ROI.
                  We use advanced strategies to target the right audience and
                  increase conversions.
                  <br /> •⁠ ⁠*Product Listing Optimization:* Enhance your
                  product listings with optimized keywords, compelling
                  descriptions, and high-quality images to improve search
                  rankings and attract more customers.
                  <br /> •⁠ ⁠*Review and Feedback Management:* Build a strong
                  reputation by managing customer reviews and feedback
                  effectively. We help you engage with customers, address their
                  concerns, and maintain a positive brand image.
                  <br /> •⁠ ⁠*Strategy and Consultation:* Receive expert
                  guidance on Amazon best practices, competitive analysis, and
                  overall strategy to stay ahead in the marketplace.
                </p>
              </div>

              <div className="w-full md:w-1/2 flex justify-center items-center px-6 relative">
                <img className="w-full md:w-96" src={intro} alt="intro" />
                <div className="w-full text-black text-justify mt-4 md:absolute md:bottom-0 md:left-0 md:w-full bg-[#f0f2f4] px-6 py-4"></div>
              </div>
            </div>
          </div>
          <span className="w-full text-black md:max-w-max md:px-5 px-6 text-justify">
            {" "}
            {/* five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. <br /> The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. It is a long
            established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of
            five centuries, but also the leap into electronic typesetting, */}
          </span>
          <Layout />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default BusinessConsulting;
