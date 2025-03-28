import ButtonComponent from "Components/Button/Button";
import React, { useEffect } from "react";
import Icons from "Utils/Icons";
import { Link, NavLink } from "react-router-dom";
import { useCustomNavigate } from "Components/CustomHooks";
import { RiMenuFoldLine } from "react-icons/ri";
import Accordion from 'react-bootstrap/Accordion';

const Header = () => {
  const navigate = useCustomNavigate();

  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById("dismiss_offcanvas");
    if (offcanvasElement) {
      offcanvasElement?.click()
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".nav_dropdown");
    const megaMenu = document.querySelector(".mega-menu");

    dropdown.addEventListener("mouseenter", function () {
      megaMenu.classList.add("active");
    });

    // Keep menu open when hovering over it
    megaMenu.addEventListener("mouseenter", function () {
      megaMenu.classList.add("active");
    });

    // Close when clicking outside
    document.addEventListener("click", function (event) {
      if (!dropdown.contains(event.target) && !megaMenu.contains(event.target)) {
        megaMenu.classList.remove("active");
      }
    });
  });
  return (
    <div className="">
      <div className="headerMediaContainer d-flex justify-content-center h-50">
        <div className="col-12 col-md-11 py-2 ps-4 container d-flex flex-wrap justify-content-between">
          <div className="col-8 col-lg-7 col-xl-8">
            <p className="text-white headertextsg me-3 mb-0">
              Impartial Consulting Services to Empower Your Growth! Get Started {" "}
              <span>{Icons.arrowIcon}</span>
            </p>
          </div>
          <div className="d-flex col-4 col-md-3 col-lg-5 col-xl-4 col-xxl-3 justify-content-between pe-4">
            <div className="d-flex align-items-center justify-content-center">
              <span className="align-items-center">{Icons.facebookIcon}</span>
              <p className="text-white headertextsg mb-0 ms-2 d-none d-lg-block">Facebook</p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <span className="align-items-center">{Icons.twitterIcon}</span>
              <p className="text-white headertextsg mb-0 ms-2 d-none d-lg-block">Twitter</p>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <span className="align-items-center">{Icons.linkedinIcon}</span>
              <p className="text-white headertextsg mb-0 ms-2 d-none d-lg-block">Linkedin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="headerMenuContainer container p-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="col-10 col-lg-4">
            <a href="/" className="mb-0 companyNametext">
              GCC CONNECT
            </a>
          </div>

          <div className="col-lg-7 col-xxl-6 px-3 d-none d-lg-flex justify-content-between">
            {/* <Link  to="/about-page" className="col3 d-flex align-items-center text-decoration-none text-dark  fw-500  ">
              <p className="mb-0 me-2 fw-500">About</p>
              <span>{Icons.header_title_arrow_black}</span>
              
            </Link> */}

            <div className="col3 d-flex align-items-center nav_dropdown fw-500">
              <p className="mb-0 me-2 fw-500">About</p>
              {/* <span>{Icons.header_title_arrow_black}</span> */}

              <div className="nav_dropdown_absolute_one py-2">

                <ul className="list-unstyled nav_dropdown_absolute_list mb-0">
                  <li className=" border-bottom py-2 ">
                    <Link to="/about-page" className="w-100">
                      About
                    </Link>
                  </li>
                  <li className=" border-bottom  py-2">
                    <Link to="/Careers-page" className="w-100">
                      Career
                    </Link>
                  </li>
                  <li className=" py-2 ">
                    <Link to="/leadership-page" className="w-100">
                      Leadership
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col3 d-flex align-items-center nav_dropdown fw-500">
              Solutions
              <div>
                <div className="nav_dropdown_absolute_one py-2 mega-menu">
                  <div className="mega-menu-content pt-4 d-flex">
                    {/* Workspace Column */}
                    <div className="mega-menu-column px-3">
                      <h5 className="mega-menu-title">Consulting and Advisory </h5>
                      <p className="mega-menu-description">
                      Strategic business guidance                      </p>
                      <ul className="list-unstyled ">
                        <li><NavLink className=" py-2" to="/consulting-services">GCC Advisory Services</NavLink></li>
                        <li><NavLink className=" py-2" to="/consulting-services">Benchmarking Insights</NavLink></li>
                        <li><NavLink className=" py-2" to="/consulting-services">Market Research </NavLink></li>
                      </ul>
                    </div>


                    {/* Talent Solutions Column */}
                    <div className="mega-menu-column px-3">
                      <h5 className="mega-menu-title">Talent Solutions</h5>
                      <p className="mega-menu-description">
                      AI-powered hiring solutions                      </p>
                      <ul className="list-unstyled ">
                        <li><NavLink className="  py-2" to="/smart-talent">Smart Talent Acquisition with AI-Led Innovation</NavLink></li>
                        <li><NavLink className=" py-2" to="/ailed-service">AI Led Talent Supply Process</NavLink></li>
                        <li><NavLink className=" py-2" to="/talent-solution">Talent Management Solutions</NavLink></li>
                      </ul>
                    </div>

                    <div className="mega-menu-column px-3">
                      <h5 className="mega-menu-title">Managed Services</h5>
                      <p className="mega-menu-description">
                      Streamlined business operations                      </p>
                      <ul className="list-unstyled ">
                        <li><NavLink className=" py-2" to="/managed-services">Tax and Finance Compliance</NavLink></li>
                        <li><NavLink className=" py-2" to="/managed-services">HR Shared Services</NavLink></li>
                        <li><NavLink className=" py-2" to="/managed-services">Support Services</NavLink></li>
                      </ul>
                    </div>

                    <div className="mega-menu-column px-3">
                      <h5 className="mega-menu-title">Workspace Solution </h5>
                      <p className="mega-menu-description">
                      Smart workspace planning                      </p>
                      <ul className="list-unstyled ">
                        <li><NavLink className=" py-2" to="/workspace-solution">Innovative Workspace Strategies </NavLink></li>
                        <li><NavLink className=" py-2" to="/workspace-solution">Innovative Workspace Design Consultation</NavLink></li>
                        <li><NavLink className=" py-2" to="/workspace-solution">Scalable Workspace Solutions</NavLink></li>
                      </ul>
                    </div>



                  </div>
                </div>
              </div>
            </div>

            <div className="col3 d-flex align-items-center nav_dropdown fw-500">
              Models
              <div className="nav_dropdown_absolute_one py-2">
                <ul className="list-unstyled nav_dropdown_absolute_list mb-0">
                  <li>
                    <Link to="/details/initiation" className="w-100">
                      Global Capability Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/build-operator/initiation" className="w-100">
                      Build Operate Transfer
                    </Link>
                  </li>
                  <li>
                    <Link to="managed-teams/relationship" className="w-100">
                      Managed Teams
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="col3 d-flex align-items-center nav_dropdown fw-500">
              Products
              <div>
                <div className="nav_dropdown_absolute_one py-2 mega-menu">
                  <div className="mega-menu-content pt-4 d-flex">
                    {/* Workspace Column */}
                    <div className="mega-menu-column px-3">
                      <h5 className="mega-menu-title">Click 100</h5>
                      <p className="mega-menu-description">
                        Pioneering value-centric workforces with AI and analytics
                      </p>
                      <ul className="list-unstyled ">
                        <li><NavLink className=" py-2" to="/products/click-100">Talent Network</NavLink></li>
                        <li><NavLink className=" py-2" to="/products/click-100">AI/ML Based Recruiting Intelligence
                        </NavLink></li>
                        <li><NavLink className=" py-2" to="/products/click-100">Automation</NavLink></li>
                      </ul>
                    </div>

                    {/* Talent Solutions Column */}
                    <div className="mega-menu-column px-3">
                      <h5 className="mega-menu-title">Advantage plus</h5>
                      <p className="mega-menu-description">
                        Pioneering value-centric workforces with AI and analytics
                      </p>
                      <ul className="list-unstyled ">
                        <li><NavLink className="  py-2" to="/products/advantage-plus">Advantage Plus</NavLink></li>
                        {/* <li><NavLink className=" py-2" to="/ailed-service">AI Led Talent Supply Process</NavLink></li>
                        <li><NavLink className=" py-2" to="/talent-solution">Talent Management Solutions</NavLink></li> */}
                      </ul>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            <Link to="/blog" className="col3 text-dark text-decoration-none d-flex align-items-center ">
              <p className="mb-0 me-2 fw-500">Blog</p>
              {/* <span>{Icons.header_title_arrow_black}</span> */}
            </Link>

            <ButtonComponent
              title="Contact Us"
              className="headerBtn px-3 py-2"
              buttonName="Contact Us"
              clickFunction={() => {
                navigate("/contact");
              }}
            />
          </div>

          <div className="d-inline-block d-lg-none">
            <RiMenuFoldLine
              size={30}
              style={{ fill: "#042126" }}
              data-bs-toggle="offcanvas"
              data-bs-target="#staticBackdrop"
              aria-controls="staticBackdrop"
            />
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-backdrop="static"
        tabIndex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-header">
          <a href="/" className="mb-0 companyNametext">
            GCC CONNECT
          </a>
          <button
            type="button"
            id="dismiss_offcanvas"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="offcanvas-content">
            <ul className="list-unstyled">
              {/* <li className=" border-bottom ">
                <NavLink
                  to="/"
                  onClick={closeOffcanvas}
                  className="d-block py-2 text-decoration-none offcanvas_button"
                >
                  About
                </NavLink>
              </li> */}

              <Accordion className="mb-3 mt-3 pb-2 border-bottom " >
                <Accordion.Item eventKey="20">
                  <Accordion.Header>About</Accordion.Header>
                  <Accordion.Body>
                    <li className=" border-bottom ">
                      <NavLink
                        to="/about-page"
                        onClick={closeOffcanvas}
                        className="d-block py-2 text-decoration-none offcanvas_button"
                      >
                        Overview
                      </NavLink>
                    </li>
                    <li className=" border-bottom ">
                      <NavLink
                        to="/leadership-page"
                        onClick={closeOffcanvas}
                        className="d-block py-2 text-decoration-none offcanvas_button"
                      >
                        Leadership
                      </NavLink>
                    </li>
                    <li className=" border-bottom ">
                      <NavLink
                        to="/Careers-page"
                        onClick={closeOffcanvas}
                        className="d-block py-2 text-decoration-none offcanvas_button"
                      >
                        Careers
                      </NavLink>
                    </li>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>


              <li>
              </li>
              <Accordion className="mt-3 pb-2 border-bottom border-0 " >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Solutions</Accordion.Header>
                  <Accordion.Body>
                    <li className=" border-bottom ">
                      <NavLink
                        to="/consulting-services"
                        onClick={closeOffcanvas}
                        className="d-block py-2 text-decoration-none offcanvas_button"
                      >
                        Consulting and Advisory Services
                      </NavLink>
                    </li>

                    <Accordion className="mt-3 border-bottom" >
                      <Accordion.Item eventKey="10">
                        <Accordion.Header>Talent Supply Strategy</Accordion.Header>
                        <Accordion.Body>
                          <li className=" border-bottom ">
                            <NavLink
                              to="/smart-talent"
                              onClick={closeOffcanvas}
                              className="d-block py-2 text-decoration-none offcanvas_button"
                            >
                              Smart Talent Acquisition with AI-Led Innovation
                            </NavLink>
                          </li>
                          <li className=" border-bottom ">
                            <NavLink
                              to="/ailed-service"
                              onClick={closeOffcanvas}
                              className="d-block py-2 text-decoration-none offcanvas_button"
                            >
                              AI Led Talent Supply Process
                            </NavLink>
                          </li>
                          <li >
                            <NavLink
                              to="/talent-solution"
                              onClick={closeOffcanvas}
                              className="d-block py-2 text-decoration-none offcanvas_button"
                            >
                              Talent Management Solutions
                            </NavLink>
                          </li>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <li className=" border-bottom ">
                      <NavLink
                        to="/managed-services"
                        onClick={closeOffcanvas}
                        className="d-block py-2 text-decoration-none offcanvas_button"
                      >
                        Managed Services
                      </NavLink>
                    </li>
                    <li >
                      <NavLink
                        to="/workspace-solution"
                        onClick={closeOffcanvas}
                        className="d-block py-2 text-decoration-none offcanvas_button"
                      >
                        Workspace Solutions
                      </NavLink>
                    </li>

                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Accordion className="mb-3 mt-3 pb-2 border-bottom " >
                <Accordion.Item eventKey="20">
                  <Accordion.Header>Models</Accordion.Header>
                  <Accordion.Body>
                    <li className=" border-bottom ">
                      <NavLink
                        to="/details/initiation"
                        onClick={closeOffcanvas}
                        className="d-block py-2 text-decoration-none offcanvas_button"
                      >
                        Global Capability Center
                      </NavLink>
                    </li>
                    <li className=" border-bottom ">
                      <NavLink
                        to="/build-operator/initiation"
                        onClick={closeOffcanvas}
                        className="d-block py-2 text-decoration-none offcanvas_button"
                      >
                        Build Operate Transfer
                      </NavLink>
                    </li>
                    <li className=" border-bottom ">
                      <NavLink
                        to="managed-teams/relationship"
                        onClick={closeOffcanvas}
                        className="d-block py-2 text-decoration-none offcanvas_button"
                      >
                        Managed Teams
                      </NavLink>
                    </li>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <li className=" border-bottom ">
                <NavLink
                  to="/blog"
                  onClick={closeOffcanvas}
                  className="d-block py-2 text-decoration-none offcanvas_button"
                >
                  Blog
                </NavLink>
              </li>

            </ul>
            <ButtonComponent
              title="Contact Us"
              className="headerBtn px-3 py-2 mt-3 w-100"
              buttonName="Contact Us"
              clickFunction={() => {
                closeOffcanvas();
                navigate("/contact");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
