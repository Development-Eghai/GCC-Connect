import React from 'react'
import Icons from 'Utils/Icons'

const GlobalOngoing = () => {
  return (
    <div className="p-3">
    <div className="tittleContainer mb-5">
      <div className="d-flex w-100 w-md-75 p-3 rounded-4">
        <p className="mb-0 me-3 fs-3 fw-bold text-success">Phase 3:</p>
        <p className="mb-0 fs-3 fw-bold ">GCC On Going Support</p>
      </div>
    </div>
    <div className="headerContainer px-lg-4">
      <div className="col-12 d-flex ">
        <div className="col-4 col-md-2 col-lg-3 d-flex align-items-center">
          <span>{Icons.manArrowIcon}</span>
        </div>
        <div className="col-8 col-md-10 col-lg-9">
          <h4 className="text-success fw-bold">Goal</h4>
          <p className="fw-bold fs-5">
          Maintain operational excellence and scalability.
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div className="BodyContainer col-12 d-flex flex-column flex-lg-row  flex-wrap justify-content-center ">
      <div className="col-12 col-lg-4 d-flex flex-column p-3">
        <div style={{ height: "100px" }}></div>
        <hr />

        <div>
          <h5 className="fw-bold text-center">Talent Lifecycle Management</h5>
          <p className="text-secondary mb-0 text-center">
          Managing recruitment, onboarding, retention and offboarding processes
          </p>
        </div>
      </div>
      <div className="col-12 col-lg-4 d-flex flex-column p-3">
        <div style={{ height: "100px" }}></div>
        <hr />

        <div>
          <h5 className="fw-bold text-center">
          Tax & Compliance
          </h5>
          <p className="text-secondary mb-0 text-center">
          Staying ahead of regulatory requirement, onboarding, retention and offboarding processes
          </p>
        </div>
      </div>
      <div className="col-12 col-lg-4 d-flex flex-column p-3">
        <div style={{ height: "100px" }}></div>
        <hr />

        <div className="">
          <h5 className="fw-bold text-center">
          Workspace Mangement
          </h5>
          <p className="text-secondary mb-0 text-center ">
          Ensuring a modern, efficient workplace environment
          </p>
        </div>
      </div>
      <div className="col-12 col-lg-4 d-flex flex-column p-3">
        <div style={{ height: "100px" }}></div>
        <hr />

        <div className="">
          <h5 className="fw-bold text-center">IT Change Mangement</h5>
          <p className="text-secondary mb-0 text-center ">
          Supporting digital transformation and IT enhancements.
          </p>
        </div>
      </div>
      <div className="col-12 col-lg-4 d-flex flex-column p-3">
        <div style={{ height: "100px" }}></div>
        <hr />

        <div className="">
          <h5 className="fw-bold text-center">HR Operations</h5>
          <p className="text-secondary mb-0 text-center ">
          Handling payroll, benefits and HR compliance efficiently
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default GlobalOngoing