import React from "react";
// import auxzon from "../assets/images/aUXZON.png";
// import company from "../icons/auxzon-logo.png";
import company1 from "../assets/images/company1.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail, IoMdCall } from "react-icons/io";

function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white py-12 px-5  flex justify-center items-center">
      <div className="container mx-auto flex flex-wrap justify-start items-start md:px-10 ">
        <div className="w-full sm:w-1/4 flex flex-col items-start mb-8 sm:mb-0 text-left ">
          <img className="w-36  " src={company1} alt="Company Logo" />
          <p className="text-white text-sm py-5">
            Elevate your business with Auxzon's tailored data-driven insights.
            Thrive with our trends and strategies in the digital landscape.
          </p>
        </div>

        <div className="w-full sm:w-1/4 mb-8 sm:mb-0 md:px-10 flex flex-col items-start text-left">
          <h2 className="text-lg font-medium text-white mb-4">Quick links</h2>
          <ul className="flex flex-wrap">
            <div className="w-1/2 flex flex-col items-start">
              <li className="mb-2">
                <a href="/" className="text-white text-sm hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about"
                  className="text-white text-sm hover:text-gray-400"
                >
                  About us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/services"
                  className="text-white text-sm hover:text-gray-400"
                >
                  Services
                </a>
              </li>
            </div>
            <div className="w-1/2 flex flex-col items-start px-2">
              <li className="mb-2">
                <a
                  href="/hexa"
                  className="text-white text-sm hover:text-gray-400"
                >
                  AuxzonHexa
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/careers"
                  className="text-white text-sm hover:text-gray-400"
                >
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="text-white text-sm hover:text-gray-400"
                >
                  Contact
                </a>
              </li>
            </div>
          </ul>
        </div>

        <div className="w-full sm:w-1/4 mb-8 sm:mb-0 md:px-10  flex flex-col items-start text-left">
          <h2 className="text-lg font-medium text-white mb-4">Address</h2>
          <p className="text-white text-sm">
            Asset Corridor, Ponekkara, <br /> Edappally, Kochi, Ernakulam,{" "}
            <br /> Kerala 682024
          </p>
        </div>

        <div className="w-full sm:w-1/4 mb-8 sm:mb-0 md:px-10 flex flex-col items-start text-left">
          <h2 className="text-lg font-medium text-white mb-4">Contact</h2>
          <p className="text-white text-sm">
            <span className="flex items-center mb-2">
              <IoIosMail className="mr-2" /> Contact@auxzon.com
            </span>
            <span className="flex items-center">
              <IoMdCall className="mr-2" /> +91 9072168666
            </span>
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-4 text-left">
          <p className="mb-4">Follow Us on</p>
          <ul className="flex">
            <li className="mr-4 mb-2">
              <a
                href="https://www.facebook.com/auxzon"
                className="hover:text-gray-400"
              >
                <FaFacebook size={25} />
              </a>
            </li>

            <li className="mr-4 mb-2">
              <a
                href="https://www.linkedin.com/company/102232019/admin/feed/posts/"
                className="hover:text-gray-400"
              >
                <FaLinkedin size={25} />
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a
                href="https://www.instagram.com/auxzons/?fbclid=IwAR1kcfqM4oEDtv1ChPL8uf_HEhZdCNW-4dQVF05TCcYHCDzIaw9FfGkXGJY"
                className="hover:text-gray-400"
              >
                <FaInstagram size={25} />
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a
                href="https://youtube.com/shorts/LLlf11iI04g?si=jen4nlz9fM-s-uin"
                className="hover:text-gray-400"
              >
                <FaYoutube size={25} />
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a href="https://x.com/auxzon" className="hover:text-gray-400">
                <FaSquareXTwitter size={25} />
              </a>
            </li>
          </ul>
          <p>© 2024 Auxzon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
