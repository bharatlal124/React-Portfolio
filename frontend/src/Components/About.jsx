import React from "react";
// import { Link } from "react-router-dom";
// import "../assets/styles/styles.css"; // Ensure the path is correct
// import "../assets/styles/About.css"; // Ensure the path is correct
import profilePic from "../assets/images/profile-pic.jpg"; // Import image
import Footer from "./Footer";

const About = () => {
  //   const aboutRef = useRef(null); // Create a ref for the "About" section

  //   const scrollToAbout = () => {
  //     if (aboutRef.current) {
  //       aboutRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  return (
    <>
      {/* Navigation link to scroll to the About section */}
      {/* <nav>
        <Link to="/about" onClick={scrollToAbout}>
          About
        </Link>
      </nav> */}

      {/* The About section */}
      {/* <div> */}
      <section
        className="about"
        id="about"
        style={{ opacity: 1, visibility: "visible" }}
      >
        <h2 className="heading">
          About <span>Me</span>
          {/* <span className="animate scroll" style={{ "--i": 1 }}></span> */}
        </h2>

        <div className="about-img">
          <img src={profilePic} alt="Bharatlal Profile" />
          <span className="circle-spin"></span>
          {/* <span className="animate scroll" style={{ "--i": 2 }}></span> */}
        </div>

        <div className="about-content">
          <h3>Web Developer!</h3>
          <p>
            <strong>Hi there, I am Bharatlal, nice to meet you!</strong>
            <br />I am a highly motivated full-stack web developer specializing
            in crafting robust backend solutions and captivating user
            experiences...
          </p>
        </div>
      </section>
      {/* </div> */}
      <Footer />
    </>
  );
};

export default About;

// const About = () => {
//   return (
//     <section className="about" id="about">
//       <h2 className="heading">
//         About <span>Me</span>
//         <span className="animate scroll" style={{ "--i": 1 }}></span>
//       </h2>

//       <div className="about-img">
//         <img src={profilePic} alt="Bharatlal Profile" />
//         <span className="circle-spin"></span>
//         <span className="animate scroll" style={{ "--i": 2 }}></span>
//       </div>

//       <div className="about-content">
//         <h3>
//           Web Developer!
//           <span className="animate scroll" style={{ "--i": 1 }}></span>
//         </h3>
//         <p>
//           <strong>Hi there, I am Bharatlal, nice to meet you!</strong>
//           <br />I am a highly motivated full-stack web developer specializing in
//           crafting robust backend solutions and captivating user experiences.
//           With expertise in{" "}
//           <strong>
//             HTML, CSS, JavaScript, NodeJS, ExpressJS, MongoDB, C++, and Java
//           </strong>
//           , I excel in dynamic environments where innovation meets
//           functionality. Holding a Master's in Computer Applications and backed
//           by specialized courses in MERN Stack Web Development, I have also
//           spearheaded projects like the{" "}
//           <strong>
//             "Blogging website", "Postaway Project", "Music Player", "Chatter
//             UP", "Easily Job Portal"
//           </strong>{" "}
//           and many more, showcasing a talent for creating impactful solutions.
//           Beyond coding, I enjoy exploring tech trends, web design, and
//           photography while continuously seeking opportunities to expand my
//           skills and expertise.
//           <span className="animate scroll" style={{ "--i": 4 }}></span>
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;
