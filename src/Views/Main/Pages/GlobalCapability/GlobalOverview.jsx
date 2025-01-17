import React from 'react'
import Icons from "Utils/Icons";
import Img from "Assets/Images/Image.jpg";

const GlobalOverview = () => {
  return (
    <div className="">
            <h3 className="mb-5">Overview</h3>
            <p className="mb-4 fw-bold">
              Flexible growth-aligned payment model for building global
              capabilities.Our GCC model helps you establish a fully functional
              global capability center tailored to your business needs. From
              legal entity setup to workspace design and talent acquisition, we
              provide end-to-end support with the flexibility to scale as your
              business grows.
            </p>
            <div className='col-lg-10'>
            <img src={Img} alt="sample image" className="mb-4 w-100 " />
            </div>
            <h3 className="mb-5">Key Features</h3>
            <div className="keyFeature col-12 d-flex">
              <div className="col-4 px-2">
                <div>
                  <div className="keyFeatureIcin d-flex justify-content-center mb-3 ">
                    <span>{Icons.manArrowIcon}</span>
                  </div>
                  <hr className="" />
                  <p className="fw-bold fs-5">
                    Comprehensive setup and operational management
                  </p>
                </div>
              </div>
              <div className="col-4 px-2">
                <div>
                  <div className="keyFeatureIcin d-flex justify-content-center mb-3 ">
                    <span>{Icons.manKeyIcon}</span>
                  </div>
                  <hr className="" />
                  <p className="fw-bold fs-5">
                    Scalable solutions to align with business growth
                  </p>
                </div>
              </div>
              <div className="col-4 px-2">
                <div>
                  <div className="keyFeatureIcin d-flex justify-content-center mb-3 ">
                    <span>{Icons.graphIcon}</span>
                  </div>
                  <hr className="" />
                  <p className="fw-bold fs-5">
                    Expertise in tax, compliance, and talent strategy
                  </p>
                </div>
              </div>
            </div>
          </div>
   
  )
}

export default GlobalOverview