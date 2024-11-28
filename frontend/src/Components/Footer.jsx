import React from "react";
// import "../assets/styles/styles.css"; // Ensure the path to your CSS file is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy; 2024 by Bharat | All Rights Reserved.</p>
        {/* <span className="animate scroll" style={{ "--i": 1 }}></span> */}
      </div>
      <div className="footer-iconTop">
        <a href="/">
          <i className="bx bx-up-arrow-alt"></i>
        </a>
        {/* <span className="animate scroll" style={{ "--i": 3 }}></span> */}
      </div>
    </footer>
  );
};

export default Footer;
