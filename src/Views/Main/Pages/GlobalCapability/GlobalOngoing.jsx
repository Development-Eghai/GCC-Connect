import React from 'react'
import Icons from 'Utils/Icons'

const GlobalOngoing = () => {
  return (
    <div className="p-3 col-12">
      <div className="tittleContainer mb-5">
      <div className='globalTitleBtn d-flex w-100 w-md-75 p-3 rounded-4'>
             <p className='mb-0 me-3 fs-3 fw-bold text-white'>Phase 3:</p> 
             <p className='mb-0 fs-3 fw-bold '>GCC On Going Support</p>
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
      <div className="BodyContainer col-12 d-flex flex-column flex-lg-row  flex-wrap justify-content-start ">
        <div className="col-12 col-lg-4 d-flex flex-column align-items-start p-3 mb-4">
          <div >
            <span>{Icons.manArrowIcon}</span>
          </div>
          <hr className='w-100' />

          <div>
            <h5 className="globalHead ">Talent Lifecycle Management</h5>
            <p className="text-secondary globaljustify mb-0 text-center">
              Managing recruitment, onboarding, retention and offboarding processes
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column align-items-start p-3">
          <div >
            <span>{Icons.manArrowIcon}</span>
          </div>
          <hr className='w-100' />

          <div>
            <h5 className="globalHead">
              Tax & Compliance
            </h5>
            <p className="text-secondary  globaljustify mb-0 text-start">
              Staying ahead of regulatory requirement, onboarding, retention and offboarding processes
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column align-items-start p-3">
          <div >
            <span>{Icons.manArrowIcon}</span>
          </div>
          <hr className='w-100' />
          <div className="">
            <h5 className="globalHead">
              Workspace Mangement
            </h5>
            <p className="text-secondary globaljustify mb-0 text-start ">
              Ensuring a modern, efficient workplace environment
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column align-items-start p-3">
          <div >
            <span>{Icons.manArrowIcon}</span>
          </div>
          <hr className='w-100' />

          <div className="">
            <h5 className="globalHead">IT Change Mangement</h5>
            <p className="text-secondary globaljustify mb-0 text-start ">
              Supporting digital transformation and IT enhancements.
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4 d-flex flex-column align-items-start p-3">
          <div >
            <span>{Icons.manArrowIcon}</span>
          </div>
          <hr className='w-100' />

          <div className="">
            <h5 className="globalHead">HR Operations</h5>
            <p className="text-secondary globaljustify mb-0 text-start ">
              Handling payroll, benefits and HR compliance efficiently
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GlobalOngoing