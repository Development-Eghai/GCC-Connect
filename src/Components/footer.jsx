import React from "react";
import Footerlogomark from "../Assets/Images/Footer-Logo-Mark.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-links row d-flex flex-wrap mt-5 flex-md-nowrap">
          {/* About Section */}
          <div className="footer-column col-12 col-md">
            <h4>About</h4>
            <ul>
              <li>About Us</li>
              <li>Sustainability</li>
              <li>Leadership Team</li>
              <li>News & Media</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Models Section */}
          <div className="footer-column col-12 col-md">
            <h4>Models</h4>
            <ul>
              <li>Captive Model</li>
              <li>BOT</li>
              <li>Shared Services Model</li>
            </ul>
          </div>

          {/* Industries Section */}
          <div className="footer-column col-12 col-md">
            <h4>Industries</h4>
            <ul>
              <li>Banking & Finance</li>
              <li>Sciences & Healthcare</li>
              <li>Technology & Software</li>
              <li>Education & Training</li>
              <li>Hospitality & Leisure</li>
              <li>Power & Utilities</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-column col-12 col-md">
            <h4>Contact Us</h4>
            <ul>
              <li>contact@gcc.com</li>
              <li>+2 011 614 5741</li>
            </ul>
            <div className="social-icons">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>

          {/* Logo Section */}
          <div className="footer-column col-12 col-md text-center order-0 order-md-1">
            <img src={Footerlogomark} alt="Footer Logo" />
          </div>
        </div>
      </div>
      <div className="container col-12">
        <div className="row align-items-center">
          {/* Footer Bottom Left */}
          <div className="col-12 col-md-6 text-start">
            <div className="footer-bottom mt-5">
              <p>©2024 GCC Connect, All Rights Reserved. Designed and Maintained by eGhai</p>
              <p>Terms & Conditions • Privacy Policy • Sitemap</p>
            </div>
          </div>

          {/* Get in Touch Right */}
          <div className="col-12 col-md-6 mt-3 text-end d-none  d-md-block">
            <div className="get-in-touch">
              <span className="get-in-touch-line">Get in</span>
              <span className="get-in-touch-line">Touch →</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
