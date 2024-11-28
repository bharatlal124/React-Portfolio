import React from "react";
import P1 from "../assets/images/1Projects.png";
import P2 from "../assets/images/2project.png";
import P3 from "../assets/images/3project.png";
import P4 from "../assets/images/4Project.png";
import P5 from "../assets/images/5Project.png";
import P6 from "../assets/images/6Project.png";
import P7 from "../assets/images/7project.png";
import P8 from "../assets/images/music player mini.png";
// import "../assets/styles/portfolio.css"; // Adjust the path to your CSS file
import Footer from "./Footer";
const Portfolio = () => {
  const projects = [
    {
      title: "Blog Website",
      description: "Click here to visit.",
      image: P1,
      // image: "../assets/images/1Projects.png",
      liveUrl:
        "https://bharatlal124.github.io/responsive_TB_website/index.html",
      gitUrl: "https://github.com/bharatlal124/responsive_TB_website",
    },
    {
      title: "Easily Job Portal",
      description: "Click here to visit.",
      image: P2,
      liveUrl: "https://job-portal-project-068u.onrender.com",
      gitUrl: "https://github.com/bharatlal124/Job_portal_project",
    },
    {
      title: "Stock Market Analysis",
      description: "Click here to visit.",
      image: P3,
      liveUrl: "https://bharatlal124.github.io/Stock_Market_Analysis/",
      gitUrl: "https://github.com/bharatlal124/Stock_Market_Analysis",
    },
    {
      title: "Super Hero Hunter",
      description: "Click here to visit.",
      image: P4,
      liveUrl: "https://bharatlal124.github.io/SuperHero_hunter_project/",
      gitUrl: "https://github.com/bharatlal124/SuperHero_hunter_project",
    },
    {
      title: "Music Player",
      description: "Click here to visit.",
      image: P5,
      liveUrl: "https://bharatlal124.github.io/Music_Player_Project/",
      gitUrl: "https://github.com/bharatlal124/Music_Player_Project",
    },
    {
      title: "Mini Music Player",
      description: "Click here to visit.",
      image: P8,
      liveUrl: "https://bharatlal124.github.io/music_player_mini/",
      gitUrl: "https://github.com/bharatlal124/music_player_mini",
    },
    {
      title: "Webpage with GSAP Animation",
      description: "Click here to visit.",
      image: P6,
      liveUrl: "https://royal-diamond-park.netlify.app/",
      gitUrl: "https://github.com/bharatlal124/animate_web_with_GSAP",
    },
    {
      title: "Calculator on React",
      description: "Click here to visit.",
      image: P7,
      liveUrl: "https://react-calculator-123.netlify.app/",
      gitUrl: "https://github.com/bharatlal124/React_Calculator_New",
    },
  ];

  return (
    <>
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Projects</span>
          {/* <span className="animate scroll" style={{ "--i": 1 }}></span> */}
        </h2>

        <div className="portfolio-container">
          {projects.map((project, index) => (
            <div className="portfolio-box" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="portfolio-layer">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="links">
                  <div className="live-url">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bx-arrow-from-bottom"></i>
                    </a>
                  </div>
                  <div className="git_url">
                    <a
                      href={project.gitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bx bxl-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* <span className="animate scroll" style={{ "--i": 5 }}></span> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
