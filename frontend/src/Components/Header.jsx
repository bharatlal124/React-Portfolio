import React from "react";
import { Link } from "react-router-dom";
// import "../assets/styles/styles.css";
// import About from "./About";

const Header = () => {
  //   const aboutRef = useRef(null); // Create ref for the "About" section

  //   const scrollToAbout = () => {
  //     if (aboutRef.current) {
  //       aboutRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };
  return (
    <header className="header">
      <a href="/" className="logo">
        Bharat.
        {/* <span className="animate" style={{ "--i": 1 }}></span> */}
      </a>
      <div className="bx bx-menu" id="menu-icon">
        {/* <span className="animate" style={{ "--i": 2 }}></span> */}
      </div>
      <nav className="navbar">
        <Link to="/" className="active">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <span className="active-nav"></span>
        {/* <span className="animate" style={{ "--i": 1 }}></span> */}
      </nav>
    </header>
  );
};

export default Header;
