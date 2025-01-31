import React from "react";
import Icons from "Utils/Icons";

const BuildOperate = () => {
    const operateSteps = [
        {
            title: "Control/SOW Setup",
            description: "Finalize service agreements and scope of work.",
        },
        {
            title: "Project Initiation",
            description: "Launch and manage GCC operations.",
        },
        {
            title: "Resource Management",
            description: "Ensure optimal use of people, processes, and technology.",
        },
        {
            title: "Risk Management",
            description: "Address challenges proactively to maintain business continuity.",
        },
    ];

    return (
        <div className="">
            {/* Title Section */}
            <div className="row justify-content-start">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="globalTitleBtn d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-4">
                        <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 3:</p>
                        <p className="mb-0 fs-4 fs-md-3 fw-bold">GCC Operate</p>
                    </div>
                </div>
            </div>

            {/* Purpose Section */}
            <div className="headerContainer mt-5 px-4">
                <div className="row d-flex flex-column flex-lg-row align-items-start text-start text-lg-start">
                    {/* Icon Section */}
                    <div className="col-12 col-lg-2 d-flex align-items-start justify-content-start mb-2 mb-lg-0">
                        <span>{Icons.manArrowIcon}</span>
                    </div>
                    {/* Text Content */}
                    <div className="col-12 col-lg-10">
                        <h4 className="text-success fw-bold">Purpose</h4>
                        <p className="fw-bold fs-5 mb-0">
                            Manage and optimize GCC operations on your behalf.
                        </p>
                    </div>
                </div>
            </div>

            <hr />

            {/* Operate Steps Section */}
            <div className="BodyContainer col-12 d-flex flex-wrap">
                {operateSteps.map((step, index) => (
                    <div
                        className="col-12 col-sm-6 col-lg-4 px-2 d-flex mb-3"
                        key={index}
                    >
                        <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-start">
                            <div className="keyFeatureIcin d-flex justify-content-start mb-3">
                                <span>{Icons.manArrowIcon}</span>
                            </div>
                            <hr />
                            <h5 className="globalHead">{step.title}</h5>
                            <p className="text-secondary globaljustify mb-0">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BuildOperate;
