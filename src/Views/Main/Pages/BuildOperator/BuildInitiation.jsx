import React from "react";
import Icons from "Utils/Icons";

const BuildInitiation = () => {
    const initiationSteps = [
        {
            title: "Design & Strategy",
            description: "Create a roadmap aligned with your business objectives.",
            image: require('../../../../Assets/Images/BOT_Icons/GCC-Initiation/Design-and-Strategy.png')
        },
        {
            title: "Expert Recommendation",
            description: "Leverage industry knowledge to guide your GCC setup.",
            image: require('../../../../Assets/Images/BOT_Icons/GCC-Initiation/Expert-Recommendation.png')
        },
        {
            title: "Project Plan",
            description: "Define clear milestones and timelines for execution.",
            image: require('../../../../Assets/Images/BOT_Icons/GCC-Initiation/Project-Plan.png')
        },
    ];

    return (
        <div className="px-3">
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
                                <h4 className="text-success  globalHead">Purpose</h4>
                                <p className="globaljustify">
                                    Lay the groundwork with strategic planning and expert insights.
                                </p>
                            </div>
                        </div>


                    </div>
                    <div class="card-body">
                        <hr />
                        <div className="BodyContainer col-12 d-flex flex-wrap">
                            {initiationSteps.map((step, index) => (
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

export default BuildInitiation;
