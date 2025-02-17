import React from "react";
import Footerlogomark from "../Assets/Images/Footer-Logo-Mark.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-links row d-flex flex-wrap mt-5 flex-md-nowrap">
          {/* About Section */}
          <div className="footer-column col-12 col-md">
            <h4>About</h4>
            <ul>
              <li className="footerLink"><Link to="/about-page">About us</Link></li>
              {/* <li className="footerLink"><Link>Sustainability</Link></li> */}
              <li className="footerLink"> <Link to="/leadership-page">Leadership Team </Link></li>
              {/* <li className="footerLink"><Link>News & Media</Link></li> */}
             <li className="footerLink"><Link to="/Careers-page">Carrers</Link></li>
            </ul>
          </div>

          {/* Models Section */}
          <div className="footer-column col-12 col-md">
            <h4>Models</h4>
            <ul>
              <li>Global Capability
              Center</li>
              <li>Build Operate
              Transfer</li>
              <li>Managed Teams</li>
            </ul>
          </div>

          {/* Industries Section */}
          <div className="footer-column col-12 col-md">
            <h4>Solutions</h4>
            <ul>
              <li className="footerLink"><Link to="/consulting-services">Consulting and Advisory</Link></li>
              <li className="footerLink"><Link to="/smart-talent">Smart Talent Acquisition with Al Led Innovation</Link></li>
              <li className="footerLink"><Link to="/ailed-service">Al Led Talent Supply Process</Link></li>
              <li className="footerLink"><Link to="/talent-solution">Talent Managerrient Solutions</Link></li>
              <li className="footerLink"><Link to="/managed-services">Managed Services</Link></li>
              <li className="footerLink"><Link to="/workspace-solution">Workspace Solutions</Link></li>
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
          {/* <div className="footer-column col-12 col-md text-center order-0 order-md-1">
            <img src={Footerlogomark} alt="Footer Logo" />
          </div> */}
        </div>
      </div>
      <div className="container col-12">
        <div className="row align-items-center">
          {/* Footer Bottom Left */}
          <div className="col-12 col-md-6 text-start">
            <div className="footer-bottom mt-5">
              <p>
                ©2024 GCC Connect, All Rights Reserved. Designed and Maintained
                by eGhai
              </p>
              <p>Terms & Conditions • Privacy Policy • Sitemap</p>
            </div>
          </div>

          {/* Get in Touch Right */}
          {/* <div className="col-12 col-md-6 mt-3 text-end d-none  d-md-block">
            <div className="get-in-touch">
              <span className="get-in-touch-line">Get in</span>
              <span className="get-in-touch-line">Touch →</span>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
