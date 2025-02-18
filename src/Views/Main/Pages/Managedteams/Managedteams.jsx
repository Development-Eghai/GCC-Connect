import React, { useState } from "react";
import Icons from "Utils/Icons";
import Footer from "Components/footer";
import DetailViewForm from "../DetailViewForm";
import { NavLink, Outlet } from "react-router-dom";
import { useCustomNavigate } from "Components/CustomHooks";
import HighLightComp from "../Solutions/HighLightComp";

const Managedteams = () => {
  const [isActive, setIsActive] = useState("managed-teams");
  const keyFeatures = [
    {
      title: "Employee Employer Relationship",
      description: "Contract management, performance reviews, and resource allocation.",
      icon: Icons.employeeEmployerIcon
    },
    {
      title: "Employee on Record (EOR)",
      description: "Payroll, benefits, compliance, and tax management.",
      icon: Icons.employeeRecordIcon
    },
    {
      title: "Managed Shared Services",
      description: "Oversight of compliance, HR functions, and shared resources.",
      icon: Icons.managedSharedIcon
    },
  ];
  const navigate = useCustomNavigate();
  return (
    <div className="d-flex flex-column">
      <div className="managed-teams">
        <p className=" managed-teamsText text-white mb-0">Managed Teams</p>
      </div>

      <div className="container">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="row">
            <div className="col-lg-5 col-md-6  col-sm-12   p-4">
              <div className="">
                <h3 className="mb-3">Overview</h3>
                <p className="globaljustify">
                  Effortlessly manage your workforce with GCC View 360’s Managed Teams Model. We handle all legal, administrative, and operational responsibilities for your employees, allowing you to focus on your core business.                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12 col-sm-12 p-4">
              <div className="">
                <img
                  src={require('../../../../Assets/Images/Models-head/Managed_Teams.jpg')}
                  alt="sample image"
                  className="mb-4 w-100 rounded img-fluid"
                />
              </div>
            </div>
            <div>
              <h3 className=" mt-3 px-3">Key Features</h3>
              <div className="mt-sm-5">
                {/* Key Features Section */}
                <div className="keyFeature col-12 d-flex">
                  {keyFeatures.map((feature, index) => (
                    <div
                      className="col-12 col-sm-6  col-md-6 col-lg-4 px-2 d-flex mb-3"
                      key={index}
                    >
                      <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-start">
                        <div className="keyFeatureIcin d-flex justify-content-center mb-3">
                          <img src={feature.icon} className="" style={{ width: "100px", height: "100px" }} />
                        </div>
                        <hr />
                        <h5 className="globalHead">{feature.title}</h5>
                        <p className="text-secondary globaljustify mb-0">{feature.description}</p>
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

              <div className="globalCapacityBox globalCapacity">
                <h3 className="fw-bold mb-3 gccheadingclr text-white">Managed Teams</h3>

                {/* <NavLink
                className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                to="/managed-teams/manage_overview"
              >
                <div class="col-12 d-flex align-items-center">
                  <div className="col-10">
                    <p className="mb-0 me-3 text-white text-start fw-bold">
                      Managed Teams Overview & Features
                    </p></div>
                  <div className="col-2 text-end pe-2 fw-bold">
                    <span className="fw-bold">{Icons.arrowIcon}</span>
                  </div>
                </div>
              </NavLink> */}

                <NavLink
                  className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                  to="/managed-teams/relationship"
                >
                  <div class="col-12 d-flex align-items-center">
                    <div className="col-10">
                      <p className="mb-0 me-3 text-white text-start fw-bold">
                        Client & Employee Relationship
                      </p></div>
                    <div className="col-2 text-end pe-2 fw-bold">
                      <span className="fw-bold">{Icons.arrowIcon}</span>
                    </div>
                  </div>
                </NavLink>

                <NavLink
                  className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                  to="/managed-teams/record"
                >
                  <div class="col-12 d-flex align-items-center">
                    <div className="col-10">
                      <p className="mb-0 me-3 text-white text-start fw-bold">
                        Employee on Record (EOR)
                      </p></div>
                    <div className="col-2 text-end pe-2 fw-bold">
                      <span className="fw-bold">{Icons.arrowIcon}</span>
                    </div>
                  </div>
                </NavLink>

                <NavLink
                  className="featureButton text-decoration-none d-flex p-3 rounded-3 mb-3 "
                  to="/managed-teams/services"
                >
                  <div class="col-12 d-flex align-items-center">
                    <div className="col-10">
                      <p className="mb-0 me-3 text-white text-start fw-bold">
                        Managed Shared Services
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
      <div className="d-flex justify-content-center mb-0">
        <div className="  mb-0 col-11 getTouchBoxModeldnone d-lg-none">
        <p className="text-white text-Bar-Text  ">
            Our Managed Teams Model is tailored to meet your workforce needs,
            combining agility, compliance, and scalability to support your
            business goals. Contact Us today to learn how Managed Teams can
            transform your workforce management strategy.
          </p>
        </div>
      </div>

      <div className="detailsForm-Container   mt-lg-5 d-flex justify-content-center mb-5 ">
      <div className="highlightForm">
          <HighLightComp />
        </div>
        <div className="col-8 getTouchBoxModel d-none d-lg-block  d-xl-block">
        <p className="text-white text-Bar-Text ">
            Our Managed Teams Model is tailored to meet your workforce needs,
            combining agility, compliance, and scalability to support your
            business goals. Contact Us today to learn how Managed Teams can
            transform your workforce management strategy.
          </p>
        </div>

      </div>
      {/* <div className="detailsForm-Container  mt-3 d-flex justify-content-center mb-5 ">
        <div className="detailsForm col-11  h-100 d-flex flex-column flex-lg-row rounded-5 mt-4">
          <div className="col-12 col-lg-4 p-5">
            <div className="mt-5">
              <p className="text-white fs-4 fw-bold mb-4">
                Whether you’re exploring new business opportunities, seeking tailored solutions for your organization, or simply have questions, we’re here to help.
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
          <p className="text-white fs-4 fw-bold">
            Our Managed Teams Model is tailored to meet your workforce needs,
            combining agility, compliance, and scalability to support your
            business goals. <br />Contact Us today to learn how Managed Teams can
            transform your workforce management strategy.
          </p>
        </div>
      </div> */}
      <div className="Footer-Container">
        <Footer />
      </div>
    </div>
  );
};

export default Managedteams;
