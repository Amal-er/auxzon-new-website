import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Layout from "./Layout";
import ecommercebanner from "../assets/images/ecommercebanner.webp";
import marketingvideo from "../video/trail.mp4";
import emailjs from "emailjs-com"; // Import emailjs

const EcommerseBusinessSolutions = () => {
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
            className="relative flex flex-col justify-start md:p-20 p-6 items-left bg-cover bg-center w-full h-56 md:h-[260px] rounded-xl mb-10"
            style={{ backgroundImage: `url(${ecommercebanner})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
            <div className="relative p-5 flex flex-col justify-left items-left md:px-12">
              <h1 className="text-[33px] font-bold text-white">
                E-commerce Business Solutions
              </h1>
              <p className="text-white md:pr-10">
                Home |{" "}
                <span className="text-white md:pl-2">
                  Services | Ecommerse Business Solutions
                </span>
              </p>
            </div>
          </div>

          <main className="w-full container mx-auto  p-4 flex flex-col md:flex-row gap-8">
            <section className="mb-8 md:w-1/2">
              <h1 className="text-4xl font-bold mb-4 text-black">
                Ecommerce Business Solutions
              </h1>
              <p className="text-lg mb-4 text-black text-justify">
                Navigating the competitive ecommerce landscape can be
                challenging. With Auxzon's specialized Amazon services, you can
                maximize your online sales and strengthen your market presence.
              </p>
              <ul className="space-y-2 text-black">
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      PPC Management:
                    </span>{" "}
                    Optimize your advertising spend and boost your return on
                    investment with our expert PPC management services. We
                    design and manage campaigns that drive targeted traffic and
                    increase conversions on Amazon. Our PPC strategies are
                    tailored to maximize the visibility and sales of your
                    products.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Product Listing Optimization:
                    </span>{" "}
                    Make your products stand out in the crowded Amazon
                    marketplace with our product listing optimization services.
                    We enhance your listings with compelling descriptions,
                    high-quality images, and relevant keywords to improve their
                    visibility and attract more customers. Our goal is to
                    increase your product’s ranking and sales.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Review and Feedback Management:
                    </span>{" "}
                    Build trust and credibility with our effective review and
                    feedback management services. We help you collect, manage,
                    and respond to customer feedback, improving your overall
                    rating and customer satisfaction. Our proactive approach
                    ensures that you maintain a positive brand image and foster
                    customer loyalty.
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="text-justify">
                    <span className="text-lg font-semibold">
                      Inventory Management:
                    </span>{" "}
                    Ensure that your products are always available for purchase
                    with our inventory management services. We provide tools and
                    strategies to manage stock levels, forecast demand, and
                    avoid stockouts or overstock situations. Our inventory
                    solutions help you maintain a smooth and efficient supply
                    chain.
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
                      name="softwareSolution"
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
                  className="w-full py-4 h-64 custom-height"
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src={marketingvideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>
          </main>

          <Layout />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EcommerseBusinessSolutions;
