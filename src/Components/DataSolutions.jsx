import React, { useState } from "react";
import Navbar from "./Navbar";
import aboutbg from "../assets/images/about2.webp";
import Footer from "./Footer";
import intro from "../assets/images/intro.png";
import Layout from "./Layout";
import { IoMdDownload } from "react-icons/io";

import { Link } from "react-router-dom";
import databanner from "../assets/images/databanner.webp";
import marketingvedio from "../video/trail.mp4";
import emailjs from "emailjs-com"; // Import emailjs

const DataSolutions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    place: "",
    subject: "",
    dataAnalyticsandInsights: false,
    dataVisualization: false,
    predictiveAnalytics: false,
    businessIntelligence: false,
    dataextraction: false,
    dataCrawling: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitting form with data:", formData); // Debugging log

    emailjs
      .send(
        "service_Auxzon", // Replace with your EmailJS service ID
        "template_7vb69vg", // Replace with your EmailJS template ID
        {
          ...formData,
          to_email: "contact@auxzon.com", // Explicitly set the recipient email
        },
        "R6rizM8lpDLvtFWk7" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Error sending message");
        }
      );
  };
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
        <div className="bg-[#f0f2f4] min-h-screen flex flex-col px-2 items-center text-white py-6 md:px-8 md:w-full">
          <div
            className=" relative flex flex-col  justify-start md:p-20 p-6 items-left  bg-cover bg-center w-full h-56 md:h-[260px]  rounded-xl mb-10"
            style={{ backgroundImage: `url(${databanner})` }}
          >
            {" "}
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative p-5 flex flex-col justify-left items-left  md:px-12">
              <h1 className="text-[33px] font-bold text-white">
                Data Solutions
              </h1>
              <p className="text-white md:pr-10">
                Home |{" "}
                <span
                  className="text-white md:pl-2
                "
                >
                  Services | Data Solutions{" "}
                </span>{" "}
              </p>
            </div>
          </div>

          <main className="w-full container mx-auto p-4 flex flex-col md:flex-row gap-8">
            <section className="mb-8 md:w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-black">
                Data Solutions
              </h1>
              <p className="text-lg mb-4 text-black text-justify">
                In today's data-driven world, the ability to interpret and
                leverage vast amounts of information is crucial for business
                success. Auxzon's data solutions empower you to transform data
                into actionable insights.
              </p>

              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Data Analytics:
                    </span>{" "}
                    Gain deeper insights into your business operations with our
                    data analytics services. We analyze your data to uncover
                    patterns, trends, and opportunities that can drive growth
                    and improve decision-making. Our analytics services help you
                    make data-driven decisions that positively impact your
                    bottom line.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Data Visualization:
                    </span>{" "}
                    Transform complex data into intuitive and understandable
                    visual formats with our data visualization services. We
                    create interactive dashboards and detailed reports that make
                    it easy to interpret and communicate your data insights. Our
                    visualization tools help you see the bigger picture and make
                    informed strategic decisions.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Predictive Analytics:
                    </span>{" "}
                    Stay ahead of the competition with our predictive analytics
                    services. Using advanced algorithms and machine learning
                    techniques, we forecast future trends and behaviors,
                    enabling you to proactively address challenges and seize
                    opportunities. Our predictive insights help you make
                    strategic decisions that drive long-term success.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Data Management:
                    </span>{" "}
                    Ensure the accuracy, security, and compliance of your data
                    with our comprehensive data management services. We provide
                    solutions for data storage, cleansing, integration, and
                    governance, ensuring that your data is reliable and meets
                    all relevant regulations. Our data management services help
                    you maintain data integrity and trustworthiness.
                  </p>
                </li>
              </ul>
            </section>
            <section className="md:w-1/2 md:h-screen">
              <h2 className="text-3xl font-bold mb-4 text-black">
                Send us your details to get the ball rolling!
              </h2>
              <form className="space-y-4 text-black" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border p-2"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border p-2"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="border p-2"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                    className="border p-2"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="place"
                    placeholder="Place"
                    className="border p-2"
                    value={formData.place}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="border p-2"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label>
                    <input
                      type="checkbox"
                      name="dataAnalyticsandInsights"
                      className="mr-2"
                      checked={formData.dataAnalyticsandInsights}
                      onChange={handleChange}
                    />
                    Data Analytics and Insights
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="dataVisualization"
                      className="mr-2"
                      checked={formData.dataVisualization}
                      onChange={handleChange}
                    />
                    Data Visualization
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="predictiveAnalytics"
                      className="mr-2"
                      checked={formData.predictiveAnalytics}
                      onChange={handleChange}
                    />
                    Predictive Analytics
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="businessIntelligence"
                      className="mr-2"
                      checked={formData.businessIntelligence}
                      onChange={handleChange}
                    />
                    Business Intelligence(BI)
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="dataextraction"
                      className="mr-2"
                      checked={formData.dataextraction}
                      onChange={handleChange}
                    />
                    Data Extraction
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="dataCrawling"
                      className="mr-2"
                      checked={formData.dataCrawling}
                      onChange={handleChange}
                    />
                    Data Crawling
                  </label>
                </div>
                <button
                  type="submit"
                  className="custom-gradient text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </form>
              <div className="md:py-5 md:h-9">
                <video
                  className="w-[100%] md:w-[100%] py-4 h-64 custom-height"
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src={marketingvedio} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>
          </main>

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
      {/*  */}

      {/*  */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default DataSolutions;
