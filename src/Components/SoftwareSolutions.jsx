import React, { useState } from "react";
import Navbar from "./Navbar";
import servicebg from "../assets/services.webp";
import Footer from "./Footer";

// --------------------------------------

// ----------------------------
import { Link } from "react-router-dom";
import bcsolu from "../assets/images/bcsolu.png";
import datasolu from "../assets/images/datasolu.png";
import analytix from "../assets/images/analytix.png";
import software from "../assets/images/softwaresicon.png";

function SoftwareSolutions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center justify-center text-white px-3">
        <div className="mt-4 w-[95%]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="bg-[#f0f2f4] min-h-screen flex flex-col px-2 items-center text-white py-6 md:px-8">
          {/* Header Section */}
          <div
            className="flex flex-col md:px-10  justify-center items-center bg-cover bg-center w-full h-56 md:h-[499px] rounded-xl mb-10"
            style={{ backgroundImage: `url(${servicebg})` }}
          >
            <h1>SoftwareSolutions</h1>
            <p>
              {" "}
              We can understand the consumers better than ever before with
              Analytix Marketing.It is a methodology of collecting user
              information like the purchases they make, the social media
              profiles they visit, the articles they read, the sites they spend
              more time on, etc.{" "}
            </p>
          </div>

          {/* What we do-------------- */}
          <div className="w-full h-auto mt-6 flex flex-col md:flex-row justify-start items-start px-6 md:px-5">
            <div className="flex flex-col justify-start items-start w-full">
              <div className="w-full flex flex-col justify-center items-start  md:px-0 mb-6 md:mb-0">
                <h1 className="gradient-text text-black font-bold text-[33px] text-left">
                  What we do
                </h1>
                <p className="text-black text-left">
                  We can understand the consumers better than ever before with
                  Analytix Marketing. It is a methodology <br />
                  of collecting user information like the purchases they make,
                  the social media profiles they visit, the articles <br /> they
                  read, the sites they spend more time on, etc. From these
                  collected data, we can get a clear picture of <br /> the
                  hidden patterns about their behaviors. It actually reveals the
                  deepest desires and needs of our <br />
                  target audience. Since every action leaves a digital
                  footprint, Analytix Marketing helps predict the next big trend
                  before it <br /> even emerges. It transforms raw data into
                  actionable insights, and the most powerful aspect of it is the{" "}
                  <br />
                  ability to personalize the customer experience. auxzon will
                  let you create highly targeted campaigns that <br /> resonate
                  with individual customers on a deeply personal level. auxzon
                  also gets the assistance of <br /> advanced analytics
                  techniques such as machine learning and artificial
                  intelligence to extract meaningful <br /> patterns from the
                  noise.
                </p>
              </div>
            </div>
          </div>
          {/* services */}

          {/* Why Choose Auxzon Section */}
        </div>

        {/* ---------- */}
      </div>

      {/* ---------------------------------------- */}

      {/* ----------------------------------------- */}

      <div>
        <Footer />
      </div>
    </>
  );
}

export default SoftwareSolutions;
