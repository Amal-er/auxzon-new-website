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
// import AnalytixMarketing from "./Components/AnalytixMarketing";
// import SoftWareSolutions from "./Components/SoftwareSolutions";
// import BusinessConsulting from "./Components/BusinessConsulting";
// import DataSolutions from "./Components/DataSolutions";

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
          {/* <Route path="/analytixmarketing" element={<AnalytixMarketing />} /> */}
          {/* <Route path="/softwaresolutions" element={<SoftWareSolutions />} /> */}
          {/* <Route path="/businessconsulting" element={<BusinessConsulting />} /> */}
          {/* <Route path="/datasolutions" element={<DataSolutions />} /> */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
