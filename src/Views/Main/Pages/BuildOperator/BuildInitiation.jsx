import React from "react";
import Icons from "Utils/Icons";

const BuildInitiation = () => {
    const initiationSteps = [
        {
            title: "Design & Strategy",
            description: "Create a roadmap aligned with your business objectives.",
        },
        {
            title: "Expert Recommendation",
            description: "Leverage industry knowledge to guide your GCC setup.",
        },
        {
            title: "Project Plan",
            description: "Define clear milestones and timelines for execution.",
        },
    ];

    return (
        <div className="">
            

            <div className="row justify-content-start">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="globalTitleBtn d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-4">
                        <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 1 :</p>
                        <p className="mb-0 fs-4 fs-md-3 fw-bold">GCC Initiation</p>
                    </div>
                </div>
            </div>

            {/* Purpose Section */}
            <div className="headerContainer mt-5 px-4">
                <div className="row d-flex flex-column flex-lg-row align-items-start text-start text-lg-start">

                    {/* Icon Section - Moves to top on mobile & tablet */}
                    <div className="col-12 col-lg-2 d-flex align-items-start justify-content-start mb-2 mb-lg-0">
                        <span>{Icons.manArrowIcon}</span>
                    </div>

                    {/* Text Content Section - Moves below icon on mobile & tablet */}
                    <div className="col-12 col-lg-10">
                        <h4 className="text-success fw-bold">Purpose</h4>
                        <p className="fw-bold fs-5 mb-0">
                            Lay the groundwork with strategic planning and expert insights.
                        </p>
                    </div>

                </div>
            </div>



            <hr />

            {/* Initiation Steps Section */}
            <div className="BodyContainer col-12 d-flex flex-wrap">
                {initiationSteps.map((step, index) => (
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

export default BuildInitiation;
