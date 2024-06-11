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

const SoftwareSolutions = () => {
  const services = [
    {
      id: 1,
      title: "Marketing Services",
      para: " Our comprehensive marketing solutions cover analytic, digital, performance, and content marketing. ",
      icon: analytix,
      url: "/marketing",
    },
    {
      id: 2,
      title: "Software Solutions",
      para: "auxzon's software solutions are meticulously crafted to meet the unique needs of your business.",
      icon: software,
      url: "/softwaresolutions",
    },
    {
      id: 3,
      title: "E-commerce Business Solutions",
      icon: bcsolu,
      para: "  Navigating the competitive ecommerce landscape can be challenging. With Auxzon's specialized Amazon services,",
      url: "/EcommerseBusinessSolutions",
    },
    {
      id: 4,
      title: "Data Solutions",
      icon: datasolu,
      para: "In the age of big data, making sense of vast amounts of information is crucial for business success.",
      url: "/datasolutions",
    },
  ];
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
            className="flex flex-col  justify-start md:p-20 p-6 items-left  bg-cover bg-center w-full h-56 md:h-[260px]  rounded-xl mb-10"
            style={{ backgroundImage: `url(${softwarebanner})` }}
          >
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

          <div className="w-full h-auto mt-6 flex flex-col md:flex-row justify-center items-center  md:px-5">
            <div className="flex flex-col md:flex-row justify-center items-center w-full">
              <div className="w-full md:w-1/2 flex flex-col justify-center  items-left px-6 md:px-0 mb-6 md:mb-0">
                <h1 className="gradient-text text-black font-bold text-[33px]">
                  Software Solutions
                </h1>
                {/* <p className="text-black text-justify">
                  Our software solutions are designed to streamline operations,
                  enhance productivity, and support business growth. We offer a
                  range of services to meet your specific software needs: <br />{" "}
                </p> */}
                <div className="md:py-2">
                  <span className="text-black text-justify ">
                    auxzon's software solutions are meticulously crafted to meet
                    the unique needs of your business. Our goal is to enable you
                    to operate more efficiently, streamline your processes, and
                    enhance overall productivity.
                  </span>
                </div>

                <div className="md:py-2">
                  <p className="text-black font-semibold text-2xl">
                    Custom Software Development
                  </p>
                  <span className="text-black text-justify ">
                    Our custom software development services are tailored to
                    address your specific business requirements. We create
                    applications that are not only scalable and secure but also
                    user-friendly and designed to streamline your operations. By
                    understanding your unique challenges, we deliver solutions
                    that drive business growth and efficiency.
                  </span>
                </div>
                <div className=" ">
                  <p className="text-black font-semibold text-2xl">
                    Web and Mobile App Development
                  </p>
                  <span className="text-black text-justify ">
                    Reach and engage your customers wherever they are with our
                    web and mobile app development services. We build intuitive,
                    high-performance applications that offer exceptional user
                    experiences. Whether it's a responsive website or a
                    feature-rich mobile app, our solutions are designed to
                    enhance user engagement and satisfaction.
                  </span>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex justify-center items-center  relative md:py-56 md:mt-5">
                {/* <img
                  className="w-full md:w-96"
                  src={softwareside}
                  alt="intro"
                /> */}

                <div className="w-full text-black text-justify mt-4 md:absolute md:bottom-0 md:left-0 md:w-full bg-[#f0f2f4] px-6 py-4 md:mt-[600px] ">
                  <div className="md:py-2 ">
                    <p className="text-black font-semibold text-2xl">
                      Enterprise Solutions
                    </p>
                    <span className="text-black text-justify ">
                      Empower your organization with our robust enterprise
                      solutions. We offer a range of services, including
                      Customer Relationship Management (CRM) and Enterprise
                      Resource Planning (ERP) systems, that facilitate seamless
                      operations and better decision-making.
                    </span>
                  </div>
                  {/*  */}
                  <div className="md:py-2 ">
                    <p className="text-black font-semibold text-2xl">
                      Integration Services
                    </p>
                    <span className="text-black text-justify ">
                      Ensure smooth and efficient operations with our software
                      integration services. We connect disparate systems and
                      applications, enabling seamless data flow and improving
                      overall business performance. Our integration solutions
                      help you streamline processes, reduce errors, and enhance
                      productivity.
                    </span>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>

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

      <div className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-10 p-8 md:py-10 md:mt-10 ">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-4 flex flex-col justify-between shadow-lg zoom-effect`}
          >
            <div className="flex items-center space-x-4 ">
              <img
                src={service.icon}
                alt={`${service.title} Icon`}
                className="w-12 h-12"
              />
              <div>
                <h1 className="text-xl font-bold hover:text-violet-500">
                  {service.title}
                </h1>

                <p>{` ${service.para}.`}</p>
              </div>
            </div>
            <Link
              to={service.url}
              className="bg-custom-gradient w-36 h-10 text-white px-2 py-1 mt-2 ml-16 rounded-full flex items-center justify-center"
            >
              Read more
            </Link>
          </div>
        ))}
      </div>

      {/*  */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default SoftwareSolutions;
