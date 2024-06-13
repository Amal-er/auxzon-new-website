import React, { useState } from "react";
import emailjs from "emailjs-com";
import Layout from "./Layout";

const ApplyForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedOption: "",
    coverLetter: "",
    selectedFile: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      selectedFile: event.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, selectedOption, coverLetter, selectedFile } =
      formData;

    console.log("Submitting form with data:", formData); // Debugging log

    uploadFile(selectedFile)
      .then((fileUrl) => {
        console.log("File uploaded. URL:", fileUrl); // Debugging log

        // Construct the email parameters
        const templateParams = {
          name,
          email,
          phone,
          selectedOption,
          coverLetter,
          attachment_url: fileUrl, // Pass the attachment URL here
          to_email: "careers@auxzon.com",
        };

        // Send email using EmailJS
        emailjs
          .send(
            "service_l37od1i",
            "template_nn541bb",
            templateParams,
            "EUcEgs8bFhgEPErdF"
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
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        alert("Error uploading file");
      });
  };

  const uploadFile = (file) => {
    // Replace this with your file upload logic
    // For demo purposes, we're just simulating an upload and returning a dummy URL
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fileUrl = "https://example.com/path/to/your/file";
        resolve(fileUrl);
      }, 2000); // Simulating a 2-second delay
    });
  };

  const handleOverlayClick = (event) => {
    if (event.target.className.includes("modal-overlay")) {
      handleClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50 md:m-5 modal-overlay"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#f0f2f4] w-3/4  p-6 rounded-xl shadow-lg relative md:w-auto md:h-full md:p-20 md:border-t-8 border-purple">
        <button
          className="absolute top-4 right-4 text-2xl text-black"
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-black">Apply Now</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone"
              className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="options"
              className="block text-sm font-medium text-gray-700"
            >
              Select an Option
            </label>
            <select
              id="options"
              name="selectedOption"
              value={formData.selectedOption}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              required
            >
              <option value="">--Department--</option>
              <option value="Option 1">Business Development Executive</option>
              <option value="Option 2">Backend Developer</option>
              <option value="Option 3">Sales Manager</option>
              <option value="Option 3">UI-UX Designer</option>
              <option value="Option 3">Graphic Designer</option>
              <option value="Option 3">Vedio Grapher</option>
              <option value="Option 3">Marketing Head</option>
              <option value="Option 3">
                Business Development Executive(intern)
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="coverLetter"
              className="block text-sm font-medium text-gray-700"
            >
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Enter Your Cover Letter"
              className="mt-1 block w-full h-24 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="file"
              className="block text-sm font-medium text-gray-700"
            >
              Upload File
            </label>
            <input
              type="file"
              id="file"
              name="selectedFile"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="mt-1 block w-full h-12 px-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-custom-gradient w-full text-white py-2 px-4 rounded-md text-sm hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
        </form>
        <Layout />
      </div>
    </div>
  );
};

export default ApplyForm;
