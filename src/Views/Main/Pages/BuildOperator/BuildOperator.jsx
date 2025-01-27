import React, { useState } from "react";
import Icons from "Utils/Icons";
import Footer from "Components/footer";
import DetailViewForm from "../DetailViewForm";
import { NavLink, Outlet } from "react-router-dom";
import { useCustomNavigate } from "Components/CustomHooks";

const BuildOperator = () => {
  const [isActive, setIsActive] = useState("build-operator");

  const navigate = useCustomNavigate();
  return (
    <div className="d-flex flex-column">
      <div className="features">
        <p className=" featuresText text-white mb-0">
          Build Operate <br /> Transfer
        </p>
      </div>
      <div className="overview-Container d-flex justify-content-center py-5">
        <div className="container d-flex flex-column flex-lg-row justify-content-between ">
          <div className="globalCapacity col-12 col-lg-4 d-flex justify-content-center rounded-3">
            <div className="globalCapacityBox">
              <h3 className="fw-bold mb-3">
                Build Operate Transfer (BOT MODEL)
              </h3>

              <NavLink
                className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                to="/build-operator/bot_modal"
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
                to="/build-operator/initiation"
              >
                <div class="col-12 d-flex align-items-center">
                  <div className="col-10">
                    <p className="mb-0 me-3 text-white text-start fw-bold">
                    GCC Initiation
                    </p></div>
                  <div className="col-2 text-end pe-2 fw-bold">
                    <span className="fw-bold">{Icons.arrowIcon}</span>
                  </div>
                </div>
              </NavLink>

              <NavLink
                className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                to="/build-operator/build"
              >
                <div class="col-12 d-flex align-items-center">
                  <div className="col-10">
                    <p className="mb-0 me-3 text-white text-start fw-bold">
                    GCC Builld
                    </p></div>
                  <div className="col-2 text-end pe-2 fw-bold">
                    <span className="fw-bold">{Icons.arrowIcon}</span>
                  </div>
                </div>
              </NavLink>

              <NavLink
                className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                to="/build-operator/operate"
              >
                <div class="col-12 d-flex align-items-center">
                  <div className="col-10">
                    <p className="mb-0 me-3 text-white text-start fw-bold">
                    GCC Operate
                    </p></div>
                  <div className="col-2 text-end pe-2 fw-bold">
                    <span className="fw-bold">{Icons.arrowIcon}</span>
                  </div>
                </div>
              </NavLink>

              <NavLink
                className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                to="/build-operator/transfer"
              >
                <div class="col-12 d-flex align-items-center">
                  <div className="col-10">
                    <p className="mb-0 me-3 text-white text-start fw-bold">
                    GCC Transfer
                    </p></div>
                  <div className="col-2 text-end pe-2 fw-bold">
                    <span className="fw-bold">{Icons.arrowIcon}</span>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="col-12 col-lg-8 ps-4 pb-5 ms-3">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="detailsForm-Container  mt-4 d-flex justify-content-center mb-5 ">
        <div className="detailsForm col-11  h-100 d-flex flex-column flex-lg-row rounded-5 mt-4">
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

          <div className="col-12 col-lg-8 p-5 mt-5 ">
            <DetailViewForm />
          </div>
        </div>
        <div className="col-8 getTouchBox">
          <p className="text-white fs-5 ">
            Our BOT model combines industry expertise, operational excellence,
            and a future-ready approach to provide scalable, efficient, and
            low-risk solutions for GCC development.
            <br />
            Contact us today to learn how BOT can accelerate your global
            expansion.
          </p>
        </div>
      </div>
      <div className="Footer-Container">
        <Footer />
      </div>
    </div>
  );
};

export default BuildOperator;
