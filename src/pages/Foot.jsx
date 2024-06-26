import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Foot = () => {
  return (
    <footer className="bg-black text-white p-6 md:p-12">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl md:text-2xl font-bold">Auxzon Solutions</h3>
          <div className="md:py-2">
            <p>Asset Corridor, Ponekkara,</p>
            <p>Edappally, Kochi, Ernakulam,</p>
            <p>Kerala 682024</p>
            <p>Phone: +91 9072168666</p>
          </div>

          <p>
            Email:{" "}
            <a href="mailto:Contact@auxzon.com" className="text-blue-400">
              Contact@auxzon.com
            </a>
          </p>
        </div>
        <div className="md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl md:text-2xl font-bold">Our Services</h3>
          <ul className="space-y-2 md:py-2">
            <li>Marketing Services</li>
            <li>Software Solutions</li>
            <li>E-commerce Business Solutions</li>
            <li>Data Solutions</li>
          </ul>
        </div>
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold">Auxzon Solutions</h3>
          <p className="md:py-2">
            Elevate your business with Auxzon's tailored data-driven insights.
            Thrive with our trends and strategies in the digital landscape.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {/* <img
              src="path_to_skill_india_logo.png"
              alt="Skill India"
              className="h-12"
            />
            <img src="path_to_nsdc_logo.png" alt="NSDC" className="h-12" /> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://www.facebook.com/auxzon" className="text-white">
          <FaFacebookF size={24} />
        </a>
        <a href="https://x.com/auxzon" className="text-white">
          <FaTwitter size={24} />
        </a>
        <a
          href="https://www.instagram.com/auxzons/?fbclid=IwAR1kcfqM4oEDtv1ChPL8uf_HEhZdCNW-4dQVF05TCcYHCDzIaw9FfGkXGJY"
          className="text-white"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Foot;
