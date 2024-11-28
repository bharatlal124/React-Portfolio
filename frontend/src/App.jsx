import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import "./style.css";
// import "./assets/js/script";
// Import other components similarly

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Assuming you have a Home component */}
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        {/* Ensure About route exists */}
      </Routes>
      {/* <Home /> */}
      {/* <About /> */}
      {/* Add other components like <About />, <Education />, <Skills />, <Portfolio />, <Contact />, <Footer /> */}
    </Router>
  );
}

export default App;
