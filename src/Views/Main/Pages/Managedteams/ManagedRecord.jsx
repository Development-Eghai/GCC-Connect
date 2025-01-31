import React from "react";
import Icons from "Utils/Icons";

const ManagedRecord = () => {
    const recordDetails = [
        "Employees are legally employed by GCC View 360.",
        "We handle payroll, benefits, tax compliance, and regulatory matters.",
        "This ensures seamless management of employment complexities.",
    ];

    return (
        <div className="p-3">
            {/* Title Section */}
            <div className="row  justify-content-start mb-3">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="globalTitleBtn d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-4">
                        <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 2:</p>
                        <p className="mb-0 fs-4 fs-md-3 fw-bold">Employee on Record (EOR)</p>
                    </div>
                </div>
            </div>

            {/* Description Section */}
            <div className="headerContainer mt-5 px-4">
                {recordDetails.map((detail, index) => (
                    <div key={index}>
                        <div className="row coremodalCard p-4 align-items-start">
                            {/* Icon Section */}
                            <div className="col-12 py-3 col-lg-2 d-flex justify-content-start mb-2 mb-lg-0">
                                <span>{Icons.manArrowIcon}</span>
                            </div>
                            <hr></hr>
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

export default ManagedRecord;
