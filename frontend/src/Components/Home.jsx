import React from "react";
// import "../assets/styles/styles.css";
// import profilePic from "../assets/images/Profile pic L2.png";
// import profilePic from "../assets/images/home-main.svg";
// import profilePic from "../assets/images/men-dev.png";
// import profilePic from "../assets/images/boy-main.png";
import profilePic from "../assets/images/men-com.jpeg";
// import profilePic from "../assets/images/home-img.jpg";
// import profilePic from "../assets/images/img-main.jpg";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <section className="home show-animate" id="home">
        <div className="home-content">
          <h1>
            Hi, I'm <span>Bharat Lal</span>
            {/* <span className="animate" style={{ "--i": 2 }}></span> */}
          </h1>
          <div className="text-animate">
            <h3>Full Stack Developer</h3>
            {/* <span className="animate" style={{ "--i": 3 }}></span> */}
          </div>
          <p>
            Welcome, Visitors! Embark on a Journey Through My Portfolio and
            Discover the Story Behind the Designs.
            {/* <span className="animate" style={{ "--i": 4 }}></span> */}
          </p>
          <div className="btn-box">
            <a
              href="https://drive.google.com/file/d/1-nD165drtKySpe1bDo4v9INagRN6EmsB/view?usp=drive_link"
              target="_blank"
              className="btn"
              rel="noopener noreferrer"
            >
              My Resume
            </a>
            <a
              href="https://github.com/bharatlal124"
              target="_blank"
              className="btn"
              rel="noopener noreferrer"
            >
              Github
            </a>
            {/* <span className="animate" style={{ "--i": 5 }}></span> */}
          </div>
          <div className="home-sci1">
            <a
              href="https://github.com/bharatlal124"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/bharatlal0124/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            {/* <span className="animate" style={{ "--i": 6 }}></span> */}
          </div>
          <div className="home-imgHover">
            <img src={profilePic} alt="Profile" />
          </div>
          {/* <span className="animate home-img" style={{ "--i": 7 }}></span> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
