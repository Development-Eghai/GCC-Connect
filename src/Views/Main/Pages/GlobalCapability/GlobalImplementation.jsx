import React from "react";
import Icons from "Utils/Icons";

const GlobalImplementation = () => {
  return (
    <div className="p-3">
      <div className="tittleContainer mb-5">
        <div className='globalTitleBtn d-flex w-100 w-md-75 p-3 rounded-4'>
          <p className='mb-0 me-3 fs-3 fw-bold text-white'>Phase 2:</p>
          <p className='mb-0 fs-3 fw-bold '>GCC Implementation</p>
        </div>
      </div>
      <div className="headerContainer px-lg-4">
        <div className="col-12 d-flex ">
          <div className='col-4 col-md-2 col-lg-3 d-flex align-items-start'>
            <span>{Icons.manArrowIcon}</span>
          </div>
          <div className='col-8 col-md-10 col-lg-9'>
            <h4 className="text-success fw-bold">Goal</h4>
            <p className="fw-bold fs-5">
              Execute a seamless setup process for your GCC.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="BodyContainer col-12 d-flex flex-column flex-lg-row flex-wrap  ">
        <div className="col-12 col-lg-4 d-flex flex-column align-items-start p-3">
          <div >
            <span>{Icons.manArrowIcon}</span>
          </div>
          <hr />

          <div>
            <h5 className="globalHead">Legal Entity Setup</h5>
            <p className="text-secondary globaljustify mb-0 text-start">
              Ensuring compliance and regulatory approvals for operational
              readiness
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column align-items-start p-3">
          <div >
            <span>{Icons.manArrowIcon}</span>
          </div>
          <hr />

          <div>
            <h5 className="globalHead">
              Leadership & Resource Hiring
            </h5>
            <p className="text-secondary globaljustify mb-0 text-start">
              Recruiting experienced leaders to drive your GCC’s success
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column align-items-start p-3">
          <div >
            <span>{Icons.manArrowIcon}</span>
          </div>
          <hr />

          <div className="">
            <h5 className="globalHead">
              Workspace Design & Definiton
            </h5>
            <p className="text-secondary globaljustify mb-0 text-start">
              Designing a functional and innovative workspace tailored to your
              needs
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column align-items-start p-3">
          <div >
            <span>{Icons.manArrowIcon}</span>
          </div>
          <hr />

          <div className="">
            <h5 className="globalHead">Talent Stategy & supply</h5>
            <p className="text-secondary globaljustify mb-0 text-start">
              Building a workforce strategy to attract top talent and align with
              organizational goals
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column align-items-start p-3">
          <div >
            <span>{Icons.manArrowIcon}</span>
          </div>
          <hr />

          <div className="">
            <h5 className="globalHead">Human Capital</h5>
            <p className="text-secondary globaljustify mb-0 text-start">
              Enhancing employee engagement and productivity for sustainable
              growth
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalImplementation;
