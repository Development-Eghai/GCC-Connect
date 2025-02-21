import React from "react";
import Icons from "Utils/Icons";

const GlobalImplementation = () => {
  return (
    <div className="px-3">

      <div>
        <div class="card border-light bg-light p-0 mb-3" >
          <div class="card-header globalTitleBtn">
            <div className="col-12 col-md-12 col-lg-12">
              <div className=" d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-2">
                <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 2 :</p>
                <p className="mb-0 fs-4 fs-md-3 fw-bold  text-white ">GCC Implementation</p>
              </div>
            </div>
          </div>

          <div className="headerContainer mt-0 px-lg-4">
                        <div className="row px-3 d-flex align-items-center">
                            <div className="col-12 col-sm-6 mt-3 col-md-1 d-flex justify-content-center">
                                <span>
                                    <img
                                        src={require('../../../../Assets/Images/Icons/Goal/Goal.png')}
                                        alt="sample image"
                                        className="w-100 rounded img-fluid"
                                    />
                                </span>
                            </div>
                            <div className="col-12  ps-2 col-sm-6 col-md-10 mt-3">
                                <h4 className="text-success  globalHead">Goal</h4>
                                <p className="globaljustify">
                                Establish a strong foundation with a clear strategy and roadmap.                                </p>
                            </div>
                        </div>


                    </div>
                    <div class="card-body pt-0">
          {/* <div className="headerContainer mt-0 px-lg-4">
            <div className="row d-flex align-items-center">
              <div className="col-12 col-sm-6 col-md-1 d-flex justify-content-center">
                <span>
                  <img
                    src={require('../../../../Assets/Images/Icons/Goal/Goal.png')}
                    alt="sample image"
                    className="w-100 rounded img-fluid"
                  />
                </span>
              </div>
              <div className="col-12  p-3 col-sm-6 col-md-10 mt-3">
                <h4 className="text-success  globalHead">Goal</h4>
                <p className="globaljustify">
                  Establish a strong foundation with a clear strategy and roadmap.
                </p>
              </div>
            </div>


          </div>
          <div class="card-body"> */}
            <hr />
            <div className="keyFeature col-12 d-flex flex-column flex-sm-row flex-wrap">
              <div className="col-12 col-sm-6 col-lg-6 col-xl-4 px-2 d-flex mb-3">
                <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-center">
                  <div className="keyFeatureIcin d-flex  justify-content-center mb-3">
                    <span>
                      <img
                        src={require('../../../../Assets/Images/Icons/GCC Implementation/Legal Entity Setup.png')}
                        alt="sample image"
                        className=" w-50 rounded img-fluid"
                      />
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex flex-column flex-grow-1">
                    <h5 className="globalHead text-start">Legal Entity Setup</h5>
                    <p className="text-secondary globaljustify mb-0 text-start">
                      Ensuring compliance and regulatory approvals for operational
                      readiness
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-6 col-xl-4 px-2 d-flex mb-3">
                <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-center">
                  <div className="keyFeatureIcin d-flex  justify-content-center mb-3">
                    <span>
                      <img
                        src={require('../../../../Assets/Images/Icons/GCC Implementation/Leadership & Resource Hiring.png')}
                        alt="sample image"
                        className=" w-50 rounded img-fluid"
                      />
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex flex-column   text-start flex-grow-1">
                    <h5 className="globalHead">
                      Leadership & Resource Hiring
                    </h5>
                    <p className="text-secondary globaljustify mb-0 text-start">
                      Recruiting experienced leaders to drive your GCC’s success
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-6 col-xl-4 px-2 d-flex mb-3">
                <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-center">
                  <div className="keyFeatureIcin d-flex  justify-content-center mb-3">
                    <span>
                      <img
                        src={require('../../../../Assets/Images/Icons/GCC Implementation/Workspace Design & Definition.png')}
                        alt="sample image"
                        className=" w-50 rounded img-fluid"
                      />
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex flex-column  text-start flex-grow-1">
                    <h5 className="globalHead  text-start">
                      Workspace Design & Definiton
                    </h5>
                    <p className="text-secondary globaljustify mb-0 text-start">
                      Designing a functional and innovative workspace tailored to your
                      needs
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-6 col-xl-4 px-2 d-flex mb-3">
                <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-center">
                  <div className="keyFeatureIcin d-flex  justify-content-center mb-3">
                    <span>
                      <img
                        src={require('../../../../Assets/Images/Icons/GCC Implementation/Talent Strategy & Supply.png')}
                        alt="sample image"
                        className=" w-50 rounded img-fluid"
                      />
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex flex-column flex-grow-1">
                    <h5 className="globalHead  text-start">Talent Stategy & supply</h5>
                    <p className="text-secondary globaljustify mb-0 text-start">
                      Building a workforce strategy to attract top talent and align with
                      organizational goals
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-6 col-xl-4 px-2 d-flex mb-3">
                <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-center">
                  <div className="keyFeatureIcin d-flex  justify-content-center mb-3">
                    <span>
                      <img
                        src={require('../../../../Assets/Images/Icons/GCC Implementation/HumanCapital.png')}
                        alt="sample image"
                        className=" w-50 rounded img-fluid"
                      />
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex flex-column flex-grow-1">
                    <h5 className="globalHead text-start">Human Capital</h5>
                    <p className="text-secondary globaljustify mb-0 text-start">
                      Enhancing employee engagement and productivity for sustainable
                      growth
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalImplementation;
