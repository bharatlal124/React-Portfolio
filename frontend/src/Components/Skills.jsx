import React from "react";
import Footer from "./Footer";
// import "../assets/styles/skills.css"; // Adjust the path based on your file structure

const Skills = () => {
  return (
    <>
      <section className="skills" id="skills">
        <h2 className="heading">
          My <span>Skills</span>
          {/* The `animate` class and inline styles could be managed differently in React if necessary */}
          {/* <span className="animate scroll" style={{ "--i": 1 }}></span> */}
        </h2>

        <div className="skills-row">
          {/* Coding Skills */}
          <div className="skills-column">
            <h3 className="title">
              Coding Skills
              {/* <span className="animate scroll" style={{ "--i": 2 }}></span> */}
            </h3>

            <div className="skills-box">
              {/* Skill 1 */}
              <div className="skills-content">
                <i className="bx bxl-html5"></i>
                <p className="skill-name">HTML</p>
              </div>

              {/* Skill 2 */}
              <div className="skills-content">
                <i className="bx bxl-css3"></i>
                <p className="skill-name">CSS</p>
              </div>

              {/* Skill 3 */}
              <div className="skills-content">
                <i className="bx bxl-javascript"></i>
                <p className="skill-name">JAVASCRIPT</p>
              </div>

              {/* Skill 4 */}
              <div className="skills-content">
                <i className="bx bxl-nodejs"></i>
                <p className="skill-name">NODE JS</p>
              </div>

              {/* Skill 5 */}
              <div className="skills-content">
                <i className="bx bxl-java"></i>
                <p className="skill-name">JAVA</p>
              </div>

              {/* Skill 6 */}
              <div className="skills-content">
                <i className="bx bxl-github"></i>
                <p className="skill-name">GITHUB</p>
              </div>

              {/* Skill 7 */}
              <div className="skills-content">
                <i className="bx bxl-mongodb"></i>
                <p className="skill-name">MONGO DB</p>
              </div>

              {/* Skill 8 */}
              <div className="skills-content">
                <i className="bx bxl-react"></i>
                <p className="skill-name">REACT</p>
              </div>

              {/* Skill 9 */}
              <div className="skills-content">
                <i className="bx bxl-c-plus-plus"></i>
                <p className="skill-name">C++</p>
              </div>

              {/* Skill 10 */}
              <div className="skills-content">
                <i className="bx bxs-data"></i>
                <p className="skill-name">MY SQL</p>
              </div>

              {/* <span className="animate scroll" style={{ "--i": 3 }}></span> */}
            </div>
          </div>

          {/* Professional Skills */}
          <div className="skills-column">
            <h3 className="title">
              Professional Skills
              {/* <span className="animate scroll" style={{ "--i": 5 }}></span> */}
            </h3>

            <div className="skills-box">
              {/* Professional Skill 1 */}
              <div className="skills-content">
                <i className="bx bx-globe"></i>
                <p className="skill-name">WEB DESIGNING</p>
              </div>

              {/* Professional Skill 2 */}
              <div className="skills-content">
                <i className="bx bx-globe"></i>
                <p className="skill-name">WEB DEVELOPMENT</p>
              </div>

              {/* Professional Skill 3 */}
              <div className="skills-content">
                <i className="bx bx-globe"></i>
                <p className="skill-name">GRAPHIC DESIGNING</p>
              </div>

              {/* Professional Skill 4 */}
              <div className="skills-content">
                <i className="bx bx-globe"></i>
                <p className="skill-name">DIGITAL MARKETING</p>
              </div>

              {/* Professional Skill 5 */}
              <div className="skills-content">
                <i className="bx bx-code-alt"></i>
                <p className="skill-name">PROBLEM SOLVING</p>
              </div>

              {/* Professional Skill 6 */}
              <div className="skills-content">
                <i className="bx bx-code-alt"></i>
                <p className="skill-name">TESTING DEBUGGING</p>
              </div>

              {/* Professional Skill 7 */}
              <div className="skills-content">
                <i className="bx bx-code-alt"></i>
                <p className="skill-name">RESPONSIVE DESIGN</p>
              </div>

              {/* Professional Skill 8 */}
              <div className="skills-content">
                <i className="bx bx-code-alt"></i>
                <p className="skill-name">API INTEGRATION</p>
              </div>

              {/* Professional Skill 9 */}
              <div className="skills-content">
                <i className="bx bx-code-alt"></i>
                <p className="skill-name">SEO KNOWLEDGE</p>
              </div>

              {/* <span className="animate scroll" style={{ "--i": 6 }}></span> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Skills;
