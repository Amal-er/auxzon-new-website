import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Layout from "./Layout";
import marketingbanner from "../assets/images/marketingbanner.webp";
import marketingvedio from "../video/marketingvideo.mp4";

import emailjs from "emailjs-com"; // Import emailjs

const Marketing = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    place: "",
    subject: "",
    socialMediaMarketing: false,
    seo: false,
    campionManagement: false,
    branding: false,
    whatsappApi: false,
    emailMarketing: false,
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

  return (
    <>
      <div className="bg-[#f0f2f4] min-h-screen flex flex-col items-center justify-center text-white px-3">
        <div className="mt-4 w-[95%]">
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <div className="bg-[#f0f2f4] min-h-screen flex flex-col px-2 items-center text-white py-6 md:px-8 md:w-full">
          <div
            className="relative flex flex-col justify-start md:p-20 p-6 items-start bg-cover bg-center w-full h-56 md:h-[260px] rounded-xl mb-10"
            style={{
              backgroundImage: `url(${marketingbanner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative p-5 flex flex-col justify-start items-start md:px-12">
              <h1 className="text-[33px] font-bold text-white">
                Marketing Services
              </h1>
              <p className="text-white md:pr-10">
                Home |{" "}
                <span className="text-white md:pl-2">
                  Services | Marketing Services
                </span>
              </p>
            </div>
          </div>

          <main className="w-full container mx-auto p-4 flex flex-col md:flex-row gap-8">
            <section className="mb-8 md:w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-black">
                Marketing Services
              </h1>
              <p className="text-lg mb-4 text-black text-justify">
                Our comprehensive marketing solutions cover analytic, digital,
                performance, and content marketing. We utilize data-driven
                strategies to optimize your marketing efforts, ensuring they are
                targeted, effective, and yield measurable results. From SEO and
                SEM to social media and content creation, we help you engage and
                grow your audience.
              </p>

              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Analytic Marketing:
                    </span>{" "}
                    Leverage the power of data with our analytic marketing
                    services. We conduct thorough market research, perform
                    detailed customer segmentation, and utilize advanced
                    performance analytics to optimize your marketing campaigns
                    for maximum impact. Our data-driven strategies ensure you
                    make informed decisions that lead to better results.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Digital Marketing:
                    </span>{" "}
                    In today's digital-first world, maintaining a robust online
                    presence is crucial. Our digital marketing services
                    encompass everything from search engine optimization (SEO)
                    and search engine marketing (SEM) to social media marketing,
                    email marketing, and high-quality content creation. We work
                    to enhance your visibility, engage your audience, and drive
                    meaningful interactions across all digital platforms.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Performance Marketing:
                    </span>{" "}
                    Our performance marketing services are designed to deliver
                    measurable results. We focus on targeted, high-impact
                    campaigns, including pay-per-click (PPC) advertising and
                    affiliate marketing, to achieve your specific business
                    objectives. By continuously optimizing our strategies, we
                    ensure you get the best return on your investment.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Content Marketing:
                    </span>{" "}
                    Captivate and inspire your audience with our content
                    marketing services. We develop comprehensive content
                    strategies, create engaging and valuable content, and ensure
                    it is effectively distributed and analyzed. Our goal is to
                    make your brand message resonate, foster engagement, and
                    drive conversions.
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
                      name="socialMediaMarketing"
                      className="mr-2"
                      checked={formData.socialMediaMarketing}
                      onChange={handleChange}
                    />
                    Socia Media Marketing
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="seo"
                      className="mr-2"
                      checked={formData.seo}
                      onChange={handleChange}
                    />
                    SEO
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="campionManagement"
                      className="mr-2"
                      checked={formData.campionManagement}
                      onChange={handleChange}
                    />
                    Campion Management
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="branding"
                      className="mr-2"
                      checked={formData.branding}
                      onChange={handleChange}
                    />
                    Branding
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="whatsappApi"
                      className="mr-2"
                      checked={formData.whatsappApi}
                      onChange={handleChange}
                    />
                    Whatsapp Api
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="emailMarketing"
                      className="mr-2"
                      checked={formData.emailMarketing}
                      onChange={handleChange}
                    />
                    Email Marketing
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

          <div className="px-5"></div>
          <Layout />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Marketing;
