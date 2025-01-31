import React from "react";
import Icons from "Utils/Icons";

const Build = () => {
    const buildSteps = [
        {
            title: "Legal Entity Setup",
            description: "Establish a compliant legal framework for your GCC.",
        },
        {
            title: "Workspace Design",
            description: "Develop a functional and engaging workspace.",
        },
        {
            title: "Leadership Hiring",
            description: "Recruit experienced leaders and build a high-performing team.",
        },
    ];

    return (
        <div className="">
            {/* Title Section */}
            <div className="row justify-content-start">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="globalTitleBtn d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-4">
                        <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 2:</p>
                        <p className="mb-0 fs-4 fs-md-3 fw-bold">GCC Build</p>
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
                            Set up the GCC framework with operational readiness.
                        </p>
                    </div>
                </div>
            </div>

            <hr />

            {/* Build Steps Section */}
            <div className="BodyContainer col-12 d-flex flex-wrap">
                {buildSteps.map((step, index) => (
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

export default Build;
