import React from "react";
import Icons from "Utils/Icons";

const ManagedServices = () => {
    const serviceDetails = [
        "Compliance management, HR functions, and shared administrative resources are centralized under GCC View 360.",
        "Our team ensures smooth operations while maintaining compliance with local and international regulations.",
    ];

    return (
        <div className="px-3">

            <div>
                <div class="card border-light bg-light p-0 mb-3" >
                    <div class="card-header globalTitleBtn">
                        <div className="col-12 col-md-12 col-lg-12">
                            <div className=" d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-2">
                                <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 3 :</p>
                                <p className="mb-0 fs-4 fs-md-3  text-white fw-bold">Managed Shared Services</p>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div className="headerContainer mt-3 px-2">
                            {serviceDetails.map((detail, index) => (
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
                </div>
            </div>
        </div>
    );
};

export default ManagedServices;
