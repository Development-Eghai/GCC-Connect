import React from 'react'
import Icons from 'Utils/Icons'

const GlobalOngoing = () => {
  const cardData = [
    {
      title: "Talent Lifecycle Management",
      content: "Managing recruitment, onboarding, retention and offboarding processes."
    },
    {
      title: "Tax & Compliance",
      content: "Staying ahead of regulatory requirements, onboarding, retention, and offboarding processes."
    },
    {
      title: "Workspace Management",
      content: "Ensuring a modern, efficient workplace environment."
    },
    {
      title: "IT Change Management",
      content: "Supporting digital transformation and IT enhancements."
    },
    {
      title: "HR Operations",
      content: "Handling payroll, benefits, and HR compliance efficiently."
    }
  ];

  return (
    <div className="p-3 col-12">
     

<div className="titleContainer mb-5">
        <div className="row justify-content-start">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="globalTitleBtn d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-4">
              <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 3 :</p>
              <p className="mb-0 fs-4 fs-md-3 fw-bold">GCC Ongoing Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="headerContainer px-lg-4">
        <div className="col-12 d-flex">
          <div className="col-4 col-md-2 col-lg-3 d-flex align-items-center">
            <span>{Icons.manArrowIcon}</span>
          </div>
          <div className="col-8 col-md-10 col-lg-9">
            <h4 className="text-success fw-bold">Goal</h4>
            <p className="fw-bold fs-5">
              Maintain operational excellence and scalability.
            </p>
          </div>
        </div>
      </div>
      <hr />

      {/* Cards Section */}
      <div className="BodyContainer col-12 d-flex flex-wrap justify-content-start">
        {cardData.map((item, index) => (
          <div className="col-12 col-sm-6 col-lg-6 col-xl-4 px-2 d-flex mb-3" key={index}>
            <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-start">
              <div className="keyFeatureIcin d-flex justify-content-start mb-3">
                <span>{Icons.manArrowIcon}</span>
              </div>
              <hr />
              <div className="d-flex flex-column flex-grow-1">
                <h5 className="globalHead">{item.title}</h5>
                <p className="text-secondary globaljustify mb-0 text-start">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GlobalOngoing;
