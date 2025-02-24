import React, { useState } from "react";
import Icons from "Utils/Icons";
import Footer from "Components/footer";
import DetailViewForm from "../DetailViewForm";
import { NavLink, Outlet } from "react-router-dom";
import { useCustomNavigate } from "Components/CustomHooks";
import HighLightComp from "../Solutions/HighLightComp";

const GlobalCapability = () => {
  const [isActive, setIsActive] = useState("overview");

  const navigate = useCustomNavigate();
  return (
    <div className="d-flex flex-column">
      <div className="global-capability">
        <img src="." alt="" />
        <p className="global-capabilityText text-white mb-0">
          Global Capability <br /> Center
        </p>
      </div>

      <div className="container">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="row">
            <div className="col-lg-5 col-md-6  col-sm-12   p-4">
              <div className="">
                <h3 className="mb-3">Overview</h3>
                <p className="globaljustify">
                  Flexible growth-aligned payment model for building global
                  capabilities. Our GCC model helps you establish a fully functional
                  global capability center tailored to your business needs. From
                  legal entity setup to workspace design and talent acquisition, we
                  provide end-to-end support with the flexibility to scale as your
                  business grows.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12 col-sm-12 p-4">
              <div className="container">
                <img
                  src={require('../../../../Assets/Images/Phases_of_GCC.jpg')}
                  alt="sample image"
                  className="mb-4 w-100 rounded "
                />
              </div>

            </div>

            <div>
              <h3 className=" mt-3 px-3">Key Features</h3>

              <div className="keyFeature mt-3 row d-flex flex-wrap">
                {/* First Feature */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 px-3 d-flex mb-3">
                  <div className="coremodalCardoverview d-flex align-items-center w-100 p-3">
                    <div className="keyFeatureIcin me-3">
                      <span>
                        <img
                          src={require('../../../../Assets/Images/Icons/KeyFeatures/Scalable.png')}
                          alt="sample image"
                          className="mb-4 w-100 rounded img-fluid"
                        />
                      </span>
                    </div>
                    <div className="vr mx-3"></div>
                    <div className="flex-grow-1">
                      <p className="globalHead text-start m-0">
                        Comprehensive setup and operational management
                      </p>
                    </div>
                  </div>
                </div>

                {/* Second Feature */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 px-3 d-flex mb-3">
                  <div className="coremodalCardoverview d-flex align-items-center w-100 p-3">
                    <div className="keyFeatureIcin me-3">
                      <span> <img
                        src={require('../../../../Assets/Images/Icons/KeyFeatures/Comprehensive.png')}
                        alt="sample image"
                        className="mb-4 w-100 rounded img-fluid"
                      /></span>
                    </div>
                    <div className="vr mx-3"></div>
                    <div className="flex-grow-1">
                      <p className="globalHead text-start m-0">
                        Scalable solutions to align with business growth
                      </p>
                    </div>
                  </div>
                </div>

                {/* Third Feature */}
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 px-3 d-flex mb-3">
                  <div className="coremodalCardoverview d-flex align-items-center w-100 p-3">
                    <div className="keyFeatureIcin me-3">
                      <span>
                        <img
                          src={require('../../../../Assets/Images/Icons/KeyFeatures/Expertise.png')}
                          alt="sample image"
                          className="mb-4 w-100 rounded img-fluid"
                        />
                      </span>
                    </div>
                    <div className="vr mx-3"></div>
                    <div className="flex-grow-1">
                      <p className="globalHead text-start m-0">
                        Expertise in tax, compliance, and talent strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="overview-Container mt-3 d-flex justify-content-center py-3">
        <div className="container d-flex flex-column flex-lg-row justify-content-between ">
          <div className=" col-12 col-lg-4 d-flex justify-content-center rounded-3">
            <div className=" w-100 mb-3 mx-3" >
              <div className=" globalCapacity globalCapacityBox">
                <h3 className="fw-bold mb-3 gccheadingclr text-white">Global Capability Center</h3>

                {/* <NavLink
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
              </NavLink> */}

                <NavLink
                  className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                  to="/details/initiation"
                >
                  <div class="col-12 d-flex align-items-center">
                    <div className="col-10">
                      <p className="mb-0 me-3  fw-bold">
                        1. GCC Initiation
                      </p>
                    </div>
                    <div className="col-2 text-end pe-2 fw-bold">
                      <span className="fw-bold px-3 iconarrow">{Icons.arrowIcon}</span>
                    </div>
                  </div>

                </NavLink>

                <NavLink
                  className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 text-dark"
                  to="/details/implementation"
                >
                  <div class="col-12 d-flex align-items-center">
                    <div className="col-10">
                      <p className="mb-0 me-3  fw-bold">
                        2. GCC Implementation
                      </p>
                    </div>
                    <div className="col-2 text-end pe-2 fw-bold">
                      <span className="fw-bold px-3 iconarrow">{Icons.arrowIcon}</span>
                    </div>
                  </div>


                </NavLink>

                <NavLink
                  className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                  to="/details/ongoing-support"
                >

                  <div class="col-12 d-flex align-items-center">
                    <div className="col-10">
                      <p className="mb-0 me-3  fw-bold">
                        3. GCC Ongoing Support
                      </p>
                    </div>
                    <div className="col-2 text-end pe-2 fw-bold">
                      <span className="fw-bold px-3 iconarrow">{Icons.arrowIcon}</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className=" mb-5 col-12 col-lg-8 ">
            <Outlet />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-0">
        <div className="  mb-0 col-11 getTouchBoxModeldnone d-lg-none">
          <p className="text-white text-Bar-Text ">
            Transform your GCC vision into reality with GCC View 360.
            <br />
            Get in Touch to start your journey today.
          </p>
        </div>
      </div>

      <div className="detailsForm-Container   mt-lg-5 d-flex justify-content-center mb-5 ">
      <div className="highlightForm">
          <HighLightComp />
        </div>
        <div className="col-8 getTouchBoxModel d-none d-lg-block  d-xl-block">
          <p className="text-white text-Bar-Text">
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
