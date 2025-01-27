import React, { useState } from "react";
import Icons from "Utils/Icons";
import Footer from "Components/footer";
import DetailViewForm from "../DetailViewForm";
import { NavLink, Outlet } from "react-router-dom";
import { useCustomNavigate } from "Components/CustomHooks";

const GlobalCapability = () => {
  const [isActive, setIsActive] = useState("overview");

  const navigate = useCustomNavigate();
  return (
    <div className="d-flex flex-column">
      <div className="detailImage">
        <img src="./GlobalCapabilityCenter.jpg" alt="" />
        <p className="detailImageText text-white mb-0">
          Global Capability <br /> Center
        </p>
      </div>

      <div className="overview-Container d-flex justify-content-center py-5">
        <div className="container d-flex flex-column flex-lg-row justify-content-between ">
          <div className="globalCapacity col-12 col-lg-4 d-flex justify-content-center rounded-3">
            <div className="globalCapacityBox">
              <h3 className="fw-bold mb-3">Global Capability Center</h3>

              <NavLink
                className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                to="/details/features"
              >
                <div class="col-12 d-flex align-items-center">
                  <div className="col-10">
                    <p className="mb-0 me-3 text-white text-start fw-bold">
                      GCC Overview & Features
                    </p></div>
                  <div className="col-2 text-end pe-2 fw-bold">
                    <span className="fw-bold">{Icons.arrowIcon}</span>
                  </div>
                </div>
              </NavLink>

              <NavLink
                className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                to="/details/initiation"
              >
                <div class="col-12 d-flex align-items-center">
                  <div className="col-10">
                    <p className="mb-0 me-3 text-white fw-bold">
                      GCC Initiation
                    </p>
                  </div>
                  <div className="col-2 text-end pe-2 fw-bold">
                    <span className="fw-bold">{Icons.arrowIcon}</span>
                  </div>
                </div>

              </NavLink>

              <NavLink
                className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 text-dark"
                to="/details/implementation"
              >
                <div class="col-12 d-flex align-items-center">
                  <div className="col-10">
                    <p className="mb-0 me-3 text-white fw-bold">
                      GCC Implementation
                    </p>
                  </div>
                  <div className="col-2 text-end pe-2 fw-bold">
                    <span className="fw-bold">{Icons.arrowIcon}</span>
                  </div>
                </div>


              </NavLink>

              <NavLink
                className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                to="/details/ongoing-support"
              >

                <div class="col-12 d-flex align-items-center">
                  <div className="col-10">
                    <p className="mb-0 me-3 text-white fw-bold">
                      GCC Ongoing Support
                    </p>
                  </div>
                  <div className="col-2 text-end pe-2 fw-bold">
                    <span className="fw-bold">{Icons.arrowIcon}</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className=" col-12 col-lg-8 p-3">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="detailsForm-Container  mt-3 d-flex justify-content-center mb-5 ">
        <div className="detailsForm col-11 h-100 d-flex flex-column flex-lg-row rounded-5 mt-4">
          <div className="col-12 col-lg-4 p-5">
            <div className="mt-5">
              <p className="text-white fs-4 fw-bold mb-4">
                Whether you’re exploring new business opportunities, seeking
                tailored solutions for your organization, or simply have
                questions, we’re here to help.
              </p>
              <ul className="detailsForm-List p-0 m-0">
                <li className="d-flex my-3 align-items-start">
                  <span>{Icons.tickYellow}</span>
                  <p className="mb-0 ms-3 text-white">Highlight 1</p>
                </li>
                <hr className="text-white opacity-100 my-2" />
                <li className="d-flex my-3 align-items-start">
                  <span>{Icons.tickYellow}</span>
                  <p className="mb-0 ms-3 text-white">Highlight 2</p>
                </li>
                <hr className="text-white opacity-100 my-2" />
                <li className="d-flex my-3 align-items-start">
                  <span>{Icons.tickYellow}</span>
                  <p className="mb-0 ms-3 text-white">Highlight 3</p>
                </li>
                <hr className="text-white opacity-100 my-2" />
                <li className="d-flex my-3 align-items-start">
                  <span>{Icons.tickYellow}</span>
                  <p className="mb-0 ms-3 text-white">Highlight 4</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-8 p-3 p-sm-5 mt-5 ">
            <DetailViewForm />
          </div>
        </div>
        <div className="col-8 getTouchBox">
          <p className="text-white fs-5 fs-sm-4 fw-bold">
            Transform your GCC vision into reality with GCC View 360.
            <br />
            Get in Touch to start your journey today.
          </p>
        </div>
      </div>
      <div className="Footer-Container">
        <Footer />
      </div>
    </div>
  );
};

export default GlobalCapability;
