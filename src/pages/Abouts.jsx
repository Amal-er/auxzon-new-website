import React from "react";
import landingAbout from "../assets/images/landingAbout.webp";
import bglinesmain from "../assets/images/bg-lines-main.png";
// import aboutman from "../assets/images/ab.png";
import aboutimg from "../assets/images/career.webp";

function Abouts() {
  return (
    <div
      className="relative flex flex-col md:flex-row w-full h-full bg-center bg-cover justify-center items-center p-5  md:p-20"
      style={{
        backgroundImage: `url(${""})`,
        backgroundPosition: "top",
      }}
    >
      <div className="flex flex-col md:flex-row md:w-full justify-center items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-96" src={aboutimg} alt="About Man" />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 relative flex justify-center">
          <div className="relative ">
            <img
              src={bglinesmain}
              alt="Background Lines"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.2 }} // Adjust opacity as needed
            />
            <div className="relative z-10 p-4 bg-opacity-75 rounded-lg">
              <p className="text-blue-500 text-lg font-medium">About Us</p>
              <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 md:mt-2">
                Who we are
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-justify text-black md:px-2">
                At Auxzon Solutions, we are a team of passionate professionals
                committed to delivering top-notch solutions tailored to your
                business needs. Our journey began with a vision to transform the
                digital landscape, and today, we stand as a dynamic startup at
                the forefront of technology innovation. Auxzon Solutions has
                grown into a hub of creativity and technological prowess,
                continually pushing the boundaries of what's possible in the
                tech industry. We take pride in our diverse and talented team,
                which comprises experts from various domains, including software
                development, data science, marketing, and business consulting.
                This multidisciplinary approach allows us to address complex
                challenges with innovative solutions, ensuring our clients
                receive the best possible outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abouts;
