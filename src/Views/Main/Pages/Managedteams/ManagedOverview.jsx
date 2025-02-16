import React from "react";
import Icons from "Utils/Icons";
import Img from "Assets/Images/Image.jpg";

const ManagedOverview = () => {
    const keyFeatures = [
        {
            title: "Employee Employer Relationship",
            description: "Contract management, performance reviews, and resource allocation.",
            icon: Icons.manArrowIcon
        },
        {
            title: "Employee on Record (EOR)",
            description: "Payroll, benefits, compliance, and tax management.",
            icon: Icons.manArrowIcon
        },
        {
            title: "Managed Shared Services",
            description: "Oversight of compliance, HR functions, and shared resources.",
            icon: Icons.manArrowIcon
        },
    ];

    return (
        <div className="">
            {/* Overview Section */}
            <h3 className="mb-3">Overview</h3>
            <p className="mb-4">
                Effortlessly manage your workforce with GCC View 360’s Managed Teams Model. We handle all legal, administrative, and operational responsibilities for your employees, allowing you to focus on your core business.
            </p>

            {/* Image Section */}
            <div className='col-lg-10'>
                <img src={Img} alt="Managed Overview Image" className="mb-4 w-100" />
            </div>

            {/* Key Features Section */}
            <h3 className="mb-5">Key Features</h3>
            <div className="keyFeature col-12 d-flex">
                {keyFeatures.map((feature, index) => (
                    <div
                        className="col-12 col-sm-6  col-md-6 col-lg-4 px-2 d-flex mb-3"
                        key={index}
                    >
                        <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-start">
                            <div className="keyFeatureIcin d-flex justify-content-start mb-3">
                                <span>{Icons.manArrowIcon}</span>
                            </div>
                            <hr />
                            <h5 className="globalHead">{feature.title}</h5>
                            <p className="text-secondary globaljustify mb-0">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManagedOverview;
