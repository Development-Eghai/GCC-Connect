import { Button } from 'bootstrap'
import React from 'react'
import Icons from 'Utils/Icons'

const GlobalInitiation = () => {
    return (
        <div className='px-3'>
            <div>
                <div class="card border-light bg-light p-0 mb-3" >
                    <div class="card-header globalTitleBtn">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className=" d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-2">
                                <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 1 :</p>
                                <p className="mb-0 fs-4 fs-md-3  text-white fw-bold">GCC Initiation</p>
                            </div>
                        </div>
                    </div>
                    <div className="headerContainer mt-5 px-lg-4">
                        <div className="row d-flex align-items-center">
                            <div className="col-12 col-sm-6 col-md-2 d-flex justify-content-center">
                                <span>
                                    <img
                                        src={require('../../../../Assets/Images/Icons/Goal/Goal.png')}
                                        alt="sample image"
                                        className="w-75 rounded img-fluid"
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
                    <div class="card-body">
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
                </div>
            </div>
        </div>
    )
}

export default GlobalInitiation