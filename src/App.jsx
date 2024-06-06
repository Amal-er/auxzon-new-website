import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Hexa from "./Components/Hexa";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
// import Navbar from "./components/Navbar";
// import Footer from "./Components/Footer";
import Marketing from "./Components/Marketing";
import SoftWareSolutions from "./Components/SoftwareSolutions";
import BusinessConsulting from "./Components/BusinessConsulting";
import DataSolutions from "./Components/DataSolutions";
import BusinessDevelopmentExecutive from "./Components/BusinessDevelopmentExecutive";
import Backend from "./Components/Backend";
import SalesManager from "./Components/SalesManager";
import DataAnalyst from "./Components/DataAnalyst";

function App() {
  return (
    <Router>
      <div className="font-helvetica">
        {" "}
        {/* Apply the custom font class here */}
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hexa" element={<Hexa />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/softwaresolutions" element={<SoftWareSolutions />} />
          <Route path="/businessconsulting" element={<BusinessConsulting />} />
          <Route path="/datasolutions" element={<DataSolutions />} />
          <Route path="/bde" element={<BusinessDevelopmentExecutive />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/salesmanager" element={<SalesManager />} />
          <Route path="/data-analyst" element={<DataAnalyst />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
