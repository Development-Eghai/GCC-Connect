import React from "react";
import Icons from "Utils/Icons";

const ManagedRelationship = () => {
    const relationshipDetails = [
        "Establish a strong foundation with a clear strategy and roadmap.",
        "GCC View 360 acts as the operational partner, facilitating resource management.",
    ];

    return (
        <div className="p-3">
            {/* Title Section */}
            <div className="row justify-content-start mb-3">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="globalTitleBtn d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-4">
                        <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 1:</p>
                        <p className="mb-0 fs-4 fs-md-3 fw-bold">Client & Employee Relationship</p>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="headerContainer mt-5 px-4">
                {relationshipDetails.map((detail, index) => (
                    <div key={index}>
                        <div className="row coremodalCard p-4 align-items-start">
                            {/* Icon Section */}
                            <div className="col-12 py-3 col-lg-2 d-flex justify-content-start mb-2 mb-lg-0">
                                <span>{Icons.manArrowIcon}</span>
                            </div>
                            <hr />
                            {/* Text Content */}
                            <div className="col-12 col-lg-10">
                                <p className="fw-bold fs-5 mb-0">{detail}</p>
                            </div>
                        </div>
                        <span className="px-4"> </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagedRelationship;
