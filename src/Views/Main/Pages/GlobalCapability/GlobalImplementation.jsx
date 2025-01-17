import React from "react";
import Icons from "Utils/Icons";

const GlobalImplementation = () => {
  return (
    <div className="p-3">
      <div className="tittleContainer mb-5">
        <div className="d-flex w-75 p-3 rounded-4">
          <p className="mb-0 me-3 fs-3 fw-bold text-success">Phase 2:</p>
          <p className="mb-0 fs-3 fw-bold ">GCC Implementation</p>
        </div>
      </div>
      <div className="headerContainer px-4">
        <div className="col-12 d-flex ">
          <div className="col-2 d-flex align-items-center">
            <span>{Icons.manArrowIcon}</span>
          </div>
          <div className="col-10">
            <h4 className="text-success fw-bold">Goal</h4>
            <p className="fw-bold fs-5">
              Execute a seamless setup process for your GCC.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="BodyContainer col-12 d-flex flex-wrap justify-content-center ">
        <div className="col-4 d-flex flex-column p-3">
          <div style={{ height: "100px" }}></div>
          <hr />

          <div>
            <h5 className="fw-bold text-center">Legal Entity Setup</h5>
            <p className="text-secondary mb-0 text-center">
              Ensuring compliance and regulatory approvals for operational
              readiness
            </p>
          </div>
        </div>
        <div className="col-4 d-flex flex-column p-3">
          <div style={{ height: "100px" }}></div>
          <hr />

          <div>
            <h5 className="fw-bold text-center">
              Leadership & Resource Hiring
            </h5>
            <p className="text-secondary mb-0 text-center">
              Recruiting experienced leaders to drive your GCC’s success
            </p>
          </div>
        </div>
        <div className="col-4 d-flex flex-column p-3">
          <div style={{ height: "100px" }}></div>
          <hr />

          <div className="">
            <h5 className="fw-bold text-center">
              Workspace Design & Definiton
            </h5>
            <p className="text-secondary mb-0 text-center ">
              Designing a functional and innovative workspace tailored to your
              needs
            </p>
          </div>
        </div>
        <div className="col-4 d-flex flex-column p-3">
          <div style={{ height: "100px" }}></div>
          <hr />

          <div className="">
            <h5 className="fw-bold text-center">Talent Stategy & supply</h5>
            <p className="text-secondary mb-0 text-center ">
              Building a workforce strategy to attract top talent and align with
              organizational goals
            </p>
          </div>
        </div>
        <div className="col-4 d-flex flex-column p-3">
          <div style={{ height: "100px" }}></div>
          <hr />

          <div className="">
            <h5 className="fw-bold text-center">Human Capital</h5>
            <p className="text-secondary mb-0 text-center ">
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
