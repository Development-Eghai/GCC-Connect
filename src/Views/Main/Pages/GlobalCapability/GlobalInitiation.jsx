import { Button } from 'bootstrap'
import React from 'react'
import Icons from 'Utils/Icons'

const GlobalInitiation = () => {
    return (
        <div className='p-3'>
            {/* <div className="tittleContainer mb-5">
                <div className='globalTitleBtn d-flex w-100 w-md-75 p-3 rounded-4'>
                    <p className='mb-0 me-3 fs-3 fw-bold text-white'>Phase 1:</p>
                    <p className='mb-0 fs-3 fw-bold '>GCC Initiation</p>
                </div>

            </div> */}

            <div className="titleContainer mb-5">
                <div className="row justify-content-start">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div className="globalTitleBtn d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-4">
                            <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 1 :</p>
                            <p className="mb-0 fs-4 fs-md-3 fw-bold">GCC Initiation</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="headerContainer px-lg-4">
                <div className='col-12 d-flex '>
                    <div className='col-4 col-md-2 col-lg-3 d-flex align-items-center'>
                        <span>
                            <img
                                src={require('../../../../Assets/Images/Icons/Goal/Goal.png')}
                                alt="sample image"
                                className="mb-4 w-50 rounded img-fluid"
                            />
                        </span>
                    </div>
                    <div className='col-8 col-md-10 col-lg-9'>
                        <h4 className='text-success fw-bold'>Goal</h4>
                        <p className='fw-bold fs-5'>Establish a strong foundation with a clear strategy and roadmap.</p>
                    </div>
                </div>

            </div>
            <hr />
            <div className="keyFeature col-12 d-flex flex-column flex-sm-row flex-wrap">
                <div className="col-12 col-sm-6 col-lg-6 col-xl-4 px-2 d-flex mb-3">
                    <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-start">
                        <div className="keyFeatureIcin d-flex justify-content-center mb-3">
                            <span><img
                                src={require('../../../../Assets/Images/Icons/GCCInitiation/Desig.png')}
                                alt="sample image"
                                className=" w-50 rounded img-fluid"
                            /></span>
                        </div>
                        <hr />
                        <div className="d-flex flex-column flex-grow-1">
                            <h5 className="globalHead text-start">Design & Strategy</h5>
                            <p className="text-secondary globaljustify mb-0 text-start">
                                Creating a customized blueprint that aligns with your business vision.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-6 col-xl-4 px-2 d-flex mb-3">
                    <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-start">
                        <div className="keyFeatureIcin d-flex justify-content-center mb-3">
                            <span>
                                <img
                                src={require('../../../../Assets/Images/Icons/GCCInitiation/Industr.png')}
                                alt="sample image"
                                className=" w-50 rounded img-fluid"
                            />
                            </span>
                        </div>
                        <hr />
                        <div className="d-flex flex-column flex-grow-1">
                            <h5 className="globalHead text-start">Industry Insights</h5>
                            <p className="text-secondary globaljustify mb-0 text-start">
                                Offering insights from industry specialists to streamline your GCC setup.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-lg-6 col-xl-4 px-2 d-flex mb-3">
                    <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-start">
                        <div className="keyFeatureIcin d-flex justify-content-center mb-3">
                            <span>
                                <img
                                src={require('../../../../Assets/Images/Icons/GCCInitiation/Roadmap.png')}
                                alt="sample image"
                                className=" w-50 rounded img-fluid"
                            />
                            </span>
                        </div>
                        <hr />
                        <div className="d-flex flex-column flex-grow-1">
                            <h5 className="globalHead text-start">Roadmap & Project Plan</h5>
                            <p className="text-secondary globaljustify mb-0 text-start">
                                Developing actionable plans for a smooth transition to GCC operations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default GlobalInitiation