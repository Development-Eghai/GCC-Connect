import React from 'react'
import Icons from "Utils/Icons";
import Img from "Assets/Images/Image.jpg";

const GlobalOverview = () => {
  return (
    <div className="">
      <h3 className="mb-3">Overview</h3>
      <p className="mb-4 ">
        Flexible growth-aligned payment model for building global
        capabilities.Our GCC model helps you establish a fully functional
        global capability center tailored to your business needs. From
        legal entity setup to workspace design and talent acquisition, we
        provide end-to-end support with the flexibility to scale as your
        business grows.
      </p>
      <div className='col-lg-10 mb-4'>
        <img src={require('../../../../Assets/Images/Flexiblegrowth-alignedpayment.jpg')} alt="sample image" className="mb-4 w-100 rounded " />
      </div>
      <h3 className="mb-5">Key Features</h3>
      <div className="keyFeature col-12 d-flex flex-column flex-sm-row flex-wrap">
        <div className="col-12 col-sm-4 col-lg-6 col-xl-4 px-2 d-flex mb-3">
          <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3">
            <div className="keyFeatureIcin d-flex justify-content-start mb-3">
              <span>{Icons.manArrowIcon}</span>
            </div>
            <hr />
            <p className="globalHead text-wrap">
              Comprehensive setup and operational management
            </p>
          </div>
        </div>

        <div className="col-12 col-sm-4 col-lg-6 col-xl-4 px-3 d-flex mb-3">
          <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3">
            <div className="keyFeatureIcin d-flex justify-content-start mb-3">
              <span>{Icons.manKeyIcon}</span>
            </div>
            <hr />
            <p className="globalHead">
              Scalable solutions to align with business growth
            </p>
          </div>
        </div>

        <div className="col-12 col-sm-4 col-lg-6 col-xl-4 px-3 d-flex mb-3">
          <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3">
            <div className="keyFeatureIcin d-flex justify-content-start mb-3">
              <span>{Icons.graphIcon}</span>
            </div>
            <hr />
            <p className="globalHead">
              Expertise in tax, compliance, and talent strategy
            </p>
          </div>
        </div>
      </div>

    </div>

  )
}

export default GlobalOverview