import React, { useState } from "react";
import Navbar from "./Navbar";
import aboutbg from "../assets/images/about2.webp";
import Footer from "./Footer";
import intro from "../assets/images/intro.png";
import Layout from "./Layout";
import { IoMdDownload } from "react-icons/io";
import bcsolu from "../assets/images/bcsolu.png";
import datasolu from "../assets/images/datasolu.png";
import analytix from "../assets/images/analytix.png";
import software from "../assets/images/softwaresicon.png";
import { Link } from "react-router-dom";
import softwarebanner from "../assets/images/sofwarebanner.webp";
import marketingvedio from "../video/trail.mp4";
import emailjs from "emailjs-com"; // Import emailjs

const SoftwareSolutions = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    place: "",
    subject: "",
    marketingServices: false,
    softwareSolutions: false,
    ecommerceBusinessSolutions: false,
    dataSolutions: false,
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
            style={{ backgroundImage: `url(${softwarebanner})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative p-5 flex flex-col justify-left items-left  md:px-12">
              <h1 className="text-[33px] font-bold text-white">
                Software Solutions
              </h1>
              <p className="text-white md:pr-10">
                Home |{" "}
                <span
                  className="text-white md:pl-2
                "
                >
                  Services | Software Solutions{" "}
                </span>{" "}
              </p>
            </div>
          </div>

          <main className="w-full container mx-auto p-4 flex flex-col md:flex-row gap-8">
            <section className="mb-8 md:w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-black">
                Software Solutions
              </h1>
              <p className="text-lg mb-4 text-black text-justify">
                Auxzon's software solutions are meticulously crafted to meet the
                unique needs of your business. Our goal is to enable you to
                operate more efficiently, streamline your processes, and enhance
                overall productivity.
              </p>

              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Custom Software Development:
                    </span>{" "}
                    Our custom software development services are tailored to
                    address your specific business requirements. We create
                    applications that are not only scalable and secure but also
                    user-friendly and designed to streamline your operations. By
                    understanding your unique challenges, we deliver solutions
                    that drive business growth and efficiency.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Web and Mobile App Development:
                    </span>{" "}
                    Reach and engage your customers wherever they are with our
                    web and mobile app development services. We build intuitive,
                    high-performance applications that offer exceptional user
                    experiences. Whether it's a responsive website or a
                    feature-rich mobile app, our solutions are designed to
                    enhance user engagement and satisfaction.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Enterprise Solutions:
                    </span>{" "}
                    Empower your organization with our robust enterprise
                    solutions. We offer a range of services, including Customer
                    Relationship Management (CRM) and Enterprise Resource
                    Planning (ERP) systems, that facilitate seamless operations
                    and better decision-making. Our enterprise solutions are
                    designed to integrate with your existing systems and improve
                    overall business efficiency.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Integration Services:
                    </span>{" "}
                    Ensure smooth and efficient operations with our software
                    integration services. We connect disparate systems and
                    applications, enabling seamless data flow and improving
                    overall business performance. Our integration solutions help
                    you streamline processes, reduce errors, and enhance
                    productivity.
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
                      name="marketingServices"
                      className="mr-2"
                      checked={formData.marketingServices}
                      onChange={handleChange}
                    />
                    Marketing Services
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="softwareSolutions"
                      className="mr-2"
                      checked={formData.softwareSolutions}
                      onChange={handleChange}
                    />
                    Software Solutions
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="ecommerceBusinessSolutions"
                      className="mr-2"
                      checked={formData.ecommerceBusinessSolutions}
                      onChange={handleChange}
                    />
                    E-commerce Business Solutions
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="dataSolutions"
                      className="mr-2"
                      checked={formData.dataSolutions}
                      onChange={handleChange}
                    />
                    Data Solutions
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

          <div className="px-5">
            {/* <div className=" ">
              <p className="text-black font-semibold text-2xl">
                Web and Mobile App Development
              </p>
              <span className="text-black text-justify ">
                Reach and engage your customers wherever they are with our web
                and mobile app development services. We build intuitive,
                high-performance applications that offer exceptional user
                experiences. Whether it's a responsive website or a feature-rich
                mobile app, our solutions are designed to enhance user
                engagement and satisfaction.
              </span>
            </div> */}

            {/* <div className="md:py-2 ">
              <p className="text-black font-semibold text-2xl">
                Enterprise Solutions
              </p>
              <span className="text-black text-justify ">
                Empower your organization with our robust enterprise solutions.
                We offer a range of services, including Customer Relationship
                Management (CRM) and Enterprise Resource Planning (ERP) systems,
                that facilitate seamless operations and better decision-making.
                Our enterprise solutions are designed to integrate with your
                existing systems and improve overall business efficiency.
              </span>
            </div> */}
            {/* <div className="md:py-2 ">
              <p className="text-black font-semibold text-2xl">
                Integration Services
              </p>
              <span className="text-black text-justify ">
                Ensure smooth and efficient operations with our software
                integration services. We connect disparate systems and
                applications, enabling seamless data flow and improving overall
                business performance. Our integration solutions help you
                streamline processes, reduce errors, and enhance productivity.
              </span>
            </div> */}
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
      {/*  */}

      {/*  */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default SoftwareSolutions;
