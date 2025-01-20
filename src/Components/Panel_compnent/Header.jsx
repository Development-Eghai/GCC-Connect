import ButtonComponent from "Components/Button/Button";
import React from "react";
import Icons from "Utils/Icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useCustomNavigate } from "Components/CustomHooks";

const Header = () => {
  const navigate = useCustomNavigate();
  return (
    <div className="">
      <div className="headerMediaContainer d-flex justify-content-center h-50  ">
        <div className="col-11 py-2 ps-4 d-flex justify-content-between">
          <div className="d-flex justify-content-center">
            <p className="text-white me-3 mb-0">
              Impartial Consulting Services to Empower Your Growth! Get Started{" "}
            </p>
            <span>{Icons.arrowIcon}</span>
          </div>
          <div className="d-flex col-3 justify-content-between pe-4">
            <div className="d-flex justify-content-center">
              <span>{Icons.facebookIcon}</span>
              <p className="text-white mb-0 ms-2">Facebook</p>
            </div>
            <div className="d-flex justify-content-center">
              <span>{Icons.twitterIcon}</span>
              <p className="text-white mb-0 ms-2">Twitter</p>
            </div>
            <div className="d-flex justify-content-center">
              <span>{Icons.linkedinIcon}</span>
              <p className="text-white mb-0 ms-2">Linkedin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="headerMenuContainer py-3 ">
        <div className="d-flex justify-content-between">
          <div className="col-4 d-flex justify-content-center align-items-center">
            <p className="mb-0 companyNametext">GCC CONNECT</p>
          </div>
          <div className="col-4 px-3 d-flex justify-content-between">
            <div className="col3 d-flex align-items-center ">
              <p className="mb-0 me-2 fw-bold">About</p>
              <span>{Icons.header_title_arrow_black}</span>
            </div>
            <div className="col3 d-flex align-items-center">
              <NavDropdown
                title="Solutions"
                id="nav-dropdown"
                className="fw-bold"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/consulting-services"
                  eventKey="4.1"
                  className="dropdown-item-custom fw-bold"
                >
                  Consulting and Advisory Services
                </NavDropdown.Item>

                {/* Dropdown with child dropdown */}
                <NavDropdown
                  title="Talent Supply Strategy"
                  id="child-nav-dropdown"
                  className="fw-bold dropdown-item-custom ps-3"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="dropdown-item-custom fw-bold"
                    as={Link}
                    to="/smart-talent"
                  >
                    Smart Talent Acquisition with AI-Led Innovation
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.2"
                    className="dropdown-item-custom fw-bold"
                    as={Link}
                    to="/ailed-service"
                  >
                    AI Led Talent Supply Process
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.3"
                    className="dropdown-item-custom fw-bold"
                    as={Link}
                    to="/talent-solution"
                  >
                    Talent Management Solutions
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown.Item
                  as={Link}
                  to="/managed-services"
                  eventKey="4.3"
                  className="dropdown-item-custom fw-bold"
                >
                  Managed Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/workspace-solution"
                  eventKey="4.4"
                  className="dropdown-item-custom fw-bold"
                >
                  Workspace Solutions
                </NavDropdown.Item>
              </NavDropdown>
            </div>

            <div className="col3 d-flex align-items-center">
              <NavDropdown title="Models" id="nav-dropdown" className="fw-bold">
                <NavDropdown.Item
                  as={Link}
                  to="/details"
                  eventKey="4.1"
                  className="dropdown-item-custom fw-bold"
                >
                  Global Capability Center
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/build-operator"
                  eventKey="4.2"
                  className="dropdown-item-custom fw-bold"
                >
                  Build Operate Transfer
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/managed-teams"
                  eventKey="4.3"
                  className="dropdown-item-custom fw-bold"
                >
                  Managed Teams
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="col3 d-flex align-items-center ">
              <p className="mb-0 me-2 fw-bold">Blog</p>
              <span>{Icons.header_title_arrow_black}</span>
            </div>
            <ButtonComponent
              title="Contact Us"
              className="headerBtn px-3 py-2"
              buttonName="Contact Us"
              clickFunction={() => {
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
