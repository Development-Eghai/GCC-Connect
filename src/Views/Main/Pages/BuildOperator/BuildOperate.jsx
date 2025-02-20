import React from "react";
import Icons from "Utils/Icons";

const BuildOperate = () => {
    const operateSteps = [
        {
            title: "Control/SOW Setup",
            description: "Finalize service agreements and scope of work.",
            image: require('../../../../Assets/Images/BOT_Icons/GCC-Operate/Control-SOW-Setup.png')
        },
        {
            title: "Project Initiation",
            description: "Launch and manage GCC operations.",
            image: require('../../../../Assets/Images/BOT_Icons/GCC-Operate/Project-Initiation.png')
        },
        {
            title: "Resource Management",
            description: "Ensure optimal use of people, processes, and technology.",
            image: require('../../../../Assets/Images/BOT_Icons/GCC-Operate/Resource-Management.png')
        },
        {
            title: "Risk Management",
            description: "Address challenges proactively to maintain business continuity.",
            image: require('../../../../Assets/Images/BOT_Icons/GCC-Operate/Risk-Management.png')
        },
    ];

    return (
        <div className="px-3">
            <div>
                <div class="card border-light bg-light p-0 mb-3" >
                    <div class="card-header globalTitleBtn">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className=" d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-2">
                                <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 3:</p>
                                <p className="mb-0 fs-4 fs-md-3  text-white fw-bold">GCC Operate</p>
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
                                <h4 className="text-success  globalHead">Purpose</h4>
                                <p className="globaljustify">
                                    Manage and optimize GCC operations on your behalf.
                                </p>
                            </div>
                        </div>


                    </div>
                    <div class="card-body pt-0">

                        {/* <div className="headerContainer mt-5 px-lg-4">
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
                                <h4 className="text-success  globalHead">Purpose</h4>
                                <p className="globaljustify">
                                    Manage and optimize GCC operations on your behalf.
                                </p>
                            </div>
                        </div>


                    </div>
                    <div class="card-body"> */}
                        <hr />
                        <div className="BodyContainer col-12 d-flex flex-wrap">
                            {operateSteps.map((step, index) => (
                                <div
                                    className="col-12 col-sm-6 col-lg-4 px-2 d-flex mb-3"
                                    key={index}
                                >
                                    <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-start">
                                        <div className="keyFeatureIcin d-flex justify-content-start mb-3">
                                            <img
                                                src={step?.image}
                                                alt="sample image"
                                                className="w-50 rounded img-fluid"
                                            />
                                        </div>
                                        <hr />
                                        <h5 className="globalHead">{step.title}</h5>
                                        <p className="text-secondary globaljustify mb-0">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuildOperate;
