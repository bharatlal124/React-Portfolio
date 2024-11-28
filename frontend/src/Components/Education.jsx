import React from "react";
// import "../assets/styles/styles.css"; // Ensure the path to your CSS file is correct
// import "../assets/styles/Education.css";
import Footer from "./Footer";
const Education = () => {
  return (
    <>
      <section className="education" id="education">
        <h2 className="heading">
          My <span>Journey</span>
          {/* <span className="animate scroll" style={{ "--i": 1 }}></span> */}
        </h2>
        <div className="education-row">
          {/* Education Column */}
          <div className="education-column">
            <h3 className="title">
              Education
              {/* <span className="animate scroll" style={{ "--i": 2 }}></span> */}
            </h3>

            <div className="education-box">
              {/* Education Content */}
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> 2015 - 2016
                  </div>
                  <h3>10th Class - HBSE</h3>
                  <p>
                    Done my matric from Deep High School, Kherla (Gurgaon) and
                    got the rank of 76.5%.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> 2017 - 2018
                  </div>
                  <h3>12th Class - HBSE</h3>
                  <p>
                    Done my Senior Secondary Certificate from Vidya Niketan Sr.
                    Sec. School, Alipur (Gurgaon) and got the rank of 69.7%.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> 2018 - 2021
                  </div>
                  <h3>BCA - MDU University</h3>
                  <p>
                    Done my Bachelor of Computer Application from Govt. PG
                    College Sec-9, Gurgaon and got the rank of 66.3%.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> 2021 - 2023
                  </div>
                  <h3>MCA - Gurgaon University</h3>
                  <p>
                    Done my Master's of Computer Application from Govt. PG
                    College Sec-9, Gurgaon and got the rank of 72.5%.
                  </p>
                </div>
              </div>
              {/* <span className="animate scroll" style={{ "--i": 3 }}></span> */}
            </div>
          </div>

          {/* Certificate Column */}
          <div className="education-column">
            <h3 className="title">
              Certificate
              {/* <span className="animate scroll" style={{ "--i": 5 }}></span> */}
            </h3>

            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> June 2021 - Nov 2021
                  </div>
                  <h3>CEDES - Anudip Foundation</h3>
                  <p>
                    Certificate in English Communication and Digital Education
                    (CEDES) with specialization from Anudip Foundation.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> Dec 2021 - Mar 2022
                  </div>
                  <h3>C++ Language - TCA</h3>
                  <p>
                    Certificate in C++ Programming Training Program Course from
                    TCA and passed with 'A' grade.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> June 2022 - Oct 2022
                  </div>
                  <h3>Web Designing - Anudip Foundation</h3>
                  <p>
                    Certificate in Web Designing course with specialization from
                    Anudip Foundation and passed with 'A' grade.
                  </p>
                </div>
              </div>

              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <i className="bx bxs-calendar"></i> Mar 2023 - Present
                  </div>
                  <h3>MERN Stack Development - Coding Ninja</h3>
                  <p>
                    In this course, I have learned many skills like Java, DSA,
                    HTML, CSS, JavaScript, Nodejs, Expressjs, MongoDB, React,
                    etc.
                  </p>
                </div>
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

export default Education;
