import React from "react";
import bcsolu from "../assets/images/bcsolu.png";
import datasolu from "../assets/images/datasolu.png";
import analytix from "../assets/images/analytix.png";
import software from "../assets/images/softwaresicon.png";

const services = [
  {
    title: "Marketing Services",
    description:
      "Our comprehensive marketing solutions cover analytic, digital, performance, and content marketing.",
    icon: analytix,
  },
  {
    title: "Software Solutions",
    description:
      "Auxzon's software solutions are meticulously crafted to meet the unique needs of your business.",
    icon: software,
  },
  {
    title: "E-commerce Business Solutions",
    description:
      "Navigating the competitive ecommerce landscape can be challenging. With Auxzon's specialized Amazon services.",
    icon: bcsolu,
  },
  {
    title: "Data Solutions",
    description:
      "In the age of big data, making sense of vast amounts of information is crucial for business success..",
    icon: datasolu,
  },
];

function Servicess() {
  return (
    <div className=" mx-auto py-12 px-8 bg-gray-100 md:p-20  ">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-8  ">
        {services.map((services, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden p-8 md:p-8"
          >
            {" "}
            <div className="flex justify-center items-center">
              <img src={services.icon} alt={services.title} className="w-20" />
            </div>
            <div className="flex justify-center items-center flex-col">
              <h3 className="text-xl font-semibold text-center ">
                {services.title}
              </h3>
              <p className="text-gray-700 text-center  px-4">
                {services.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Servicess;
