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
    <div className="px-3 col-12">


      <div>
        <div class="card border-light bg-light p-0 mb-3" >
          <div class="card-header globalTitleBtn">
            <div className="col-12 col-md-12 col-lg-12">
              <div className=" d-flex flex-column flex-md-row align-items-start align-items-md-center p-3 rounded-2">
                <p className="mb-0 me-md-3 fs-4 fs-md-3 fw-bold text-white">Phase 3 :</p>
                <p className="mb-0 fs-4 fs-md-3 fw-bold  text-white ">GCC Ongoing Support</p>
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
                <h4 className="text-success  globalHead">Goal</h4>
                <p className="globaljustify">
                Maintain operational excellence and scalability.                </p>
              </div>
            </div>


          </div>
          <div class="card-body">
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
        </div>
      </div>
    </div>
  )
}

export default GlobalOngoing;
