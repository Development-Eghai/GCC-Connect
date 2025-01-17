import React from 'react'
import Icons from "Utils/Icons";
import Img from "Assets/Images/Image.jpg";

const ManagedOverview = () => {
  return (
    
    <div className="">
    <h3 className="mb-5">Overview</h3>
    <p className="mb-4 fw-bold">
    Effortlessly manage your workforce with GCC View 360’s Managed Teams Model. We handle all legal, administrative, and operational responsibilities for your employees, allowing you to focus on your core business.
    </p>
    <div className='col-lg-10'>
            <img src={Img} alt="sample image" className="mb-4 w-100 " />
            </div>
    <h3 className="mb-5">Key Features</h3>
    <div className="keyFeature col-12 d-flex">
      <div className="col-4 px-2">
        <div>
          <div className="keyFeatureIcin d-flex justify-content-center mb-3 ">
          
          </div>
          <hr className="" />
          <p className="fw-bold fs-5 text-center">
          Employee Employer 
          Relationship
          </p>
          <p className='text-secondary text-center'>Contract management, performance reviews, and resource allocation.</p>
        </div>
      </div>
      <div className="col-4 px-2">
        <div>
          <div className="keyFeatureIcin d-flex justify-content-center mb-3 ">
          
          </div>
          <hr className="" />
          <p className="fw-bold fs-5 text-center">
          Employee on Record (EOR)
          </p>
          <p className='text-secondary text-center'>Payroll, benefits, compliance, and tax management.</p>
        </div>
      </div>
      <div className="col-4 px-2">
        <div>
          <div className="keyFeatureIcin d-flex justify-content-center mb-3 ">
          
          </div>
          <hr className="" />
          <p className="fw-bold fs-5 text-center">
          Managed Shared Services
          </p>
          <p className='text-secondary text-center'>Oversight of compliance, HR functions, and shared resources.</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ManagedOverview