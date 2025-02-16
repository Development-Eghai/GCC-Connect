import React, { useState } from "react";
import Icons from "Utils/Icons";
import Footer from "Components/footer";
import DetailViewForm from "../DetailViewForm";
import { NavLink, Outlet } from "react-router-dom";
import { useCustomNavigate } from "Components/CustomHooks";

const BuildOperator = () => {
  const [isActive, setIsActive] = useState("build-operator");
  const keyFeatures = [
    {
      title: "Cost Efficiency",
      description: "Mininnnmized upfront investments with a gradual scale-up",
      image: require('../../../../Assets/Images/BOT_Icons/Key-Features/Cost-Efficiency.png')
    },
    {
      title: "Risk Mitigation",
      description: "Expert-led setup and operations reduce potential challenges",
      image: require('../../../../Assets/Images/BOT_Icons/Key-Features/Risk-Mitigation.png')
    },
    {
      title: "Customization",
      description: "Tailored solutions to match your business goals and culture",
      image: require('../../../../Assets/Images/BOT_Icons/Key-Features/Customization.png')
    },
    {
      title: "Compliance",
      description: "Adherence to local regulations and global standards",
      image: require('../../../../Assets/Images/BOT_Icons/Key-Features/Compliance.png')
    },
    {
      title: "Seamless Transition",
      description: "Ownership transfer with minimal disruptions",
      image: require('../../../../Assets/Images/BOT_Icons/Key-Features/Seamless-Transition.png')
    },
  ];

  const navigate = useCustomNavigate();
  return (
    <div className="d-flex flex-column">
      <div className="build-operator">
        <img src="./BuiltOperateTranser.jpg" alt="" />
        <p className="build-operatorText text-white mb-0">
          Build Operate <br /> Transfer
        </p>
      </div>
      <div className="container">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="row">
            <div className="col-lg-5 col-md-6  col-sm-12   p-4">
              <div className="">
                <h3 className="mb-3">Overview</h3>
                <p className="globaljustify">
                  The BOT model is ideal for businesses looking for an efficient, low-risk way to establish a Global Capability Center (GCC). Our BOT process includes four distinct phases:
                </p>
              </div>
            </div>

            <div className="col-lg-7 col-md-6 col-12 col-sm-12 p-4">
              <div className="image-container">
                <img
                  src={require('../../../../Assets/Images/BOT_Icons/Phases_Of_BOT_Model.jpg')}
                  alt="sample image"
                  className="mb-4 w-100 rounded img-fluid"
                />
              </div>
            </div>
            <div>
              <h3 className=" mt-3 px-3">Key Features</h3>
              <div className="mt-sm-5">
                {/* Key Features Section */}
                <div className="keyFeature col-12 d-flex flex-wrap">
                  {keyFeatures.map((feature, index) => (
                    <div className="col-12 col-sm-6 col-lg-4 px-2 d-flex mb-3" key={index}>
                      <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-start">
                        <div className="keyFeatureIcin d-flex justify-content-start mb-3">
                          <img
                            src={feature?.image}
                            alt="sample image"
                            className="w-25 rounded img-fluid"
                          />
                        </div>
                        <hr />
                        <h5 className="globalHead">{feature.title}</h5>
                        <p className="text-secondary globaljustify mb-0">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="overview-Container d-flex justify-content-center py-5">
        <div className="container d-flex flex-column flex-lg-row justify-content-between ">
          <div className=" col-12 col-lg-4 d-flex justify-content-center rounded-3">
            <div className=" w-100 mb-3 mx-3" >
              <div className=" globalCapacity globalCapacityBox">
                <h3 className="fw-bold mb-3 gccheadingclr text-white">
                  Build Operate Transfer (BOT MODEL)
                </h3>
                {/* 
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
              </NavLink> */}

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
          </div>
          <div className="w-full lg:w-2/3 ps-4 sm:ps-0 pe-4 sm:pe-0 pb-5 ms-3 sm:ms-0">
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
