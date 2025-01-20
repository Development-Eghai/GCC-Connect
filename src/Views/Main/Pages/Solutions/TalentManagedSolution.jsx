import Footer from "Components/footer";
import React from "react";
import HighLightComp from "./HighLightComp";
import CoreCard from "./CoreCard";
import Img from "Assets/Images/Image.jpg";

const TalentManagedSolution = () => {
  const data1 = [
    {
      title: "End-to-End Hiring Solutions",
      content:
        "Execute a seamless hiring strategy with tailored solutions for every stage of the recruitment lifecycle, ensuring you attract and onboard the right talent.",
    },

   {
      title: "Interview as a Service",
      content:
        "Overcome capacity constraints with our network of expert interviewers skilled in evaluating candidates across roles, technologies, and industries.",
    }
  ]
  

  const cardData = [
{
      title: "Compensation & Rewards Strategy",
      content:
        "Stay ahead in the talent market with compensation and rewards solutions designed to attract, retain, and motivate high-performing employees.",
    },   {
      title: "Change Management Expertise",
      content:
        "Seamlessly navigate organizational shifts and scale teams effectively with our proven change management frameworks.",
    },   {
      title: "Future-Ready Workforce Planning",
      content:
        "Develop strategies to build a resilient workforce capable of adapting to evolving market dynamics and technological advancements.",
    },
 
  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <div className="detailImage col-12">
        <p className=" detailImageText text-white mb-0">
        Talent Management Solutions
        </p>
      </div>
      <div className="mainContainer">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-11">
            <div className="overViewBox d-flex flex-column flex-lg-row p-4">
              <div className="col-12 col-lg-6 p-3">
                <h3 className="mb-5 headTextGreen">Overview</h3>
                <p className="mb-4 fw-bold">
                GCC Vue360 provides comprehensive talent management solutions that align with your organizational goals and workforce needs. Our offerings include:
                </p>
                <div className="d-flex">
                  {
                    data1.map((data,i)=>{
                      return(
                        <div className="col-6" key={i}>
                <CoreCard data={data} />
                </div>

                      )
                    })
                  }
                </div>
              </div>
              <div className="col-12 col-lg-6 p-3">
                <img src={Img} alt="sample image" className="mb-4 w-100 " />
              </div>
            </div>
            <div className="coreOfferingBox d-flex flex-wrap">
              {cardData.map((data, i) => {
                return (
                  <div className="col-12 col-md-6 col-lg-3" key={i}>
                    <CoreCard data={data} key={i} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="highlightForm">
          <HighLightComp />
        </div>
      </div>
      <div className="FooterContainer">
        <Footer />
      </div>
    </div>
  );
};



export default TalentManagedSolution

