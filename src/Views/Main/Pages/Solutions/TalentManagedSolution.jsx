import Footer from "Components/footer";
import React from "react";
import HighLightComp from "./HighLightComp";
import CoreCard from "./CoreCard";
import Icons from "Utils/Icons";


const TalentManagedSolution = () => {
  const data1 = [

  ]
  

  const cardData = [
    {
      title: "End-to-End Hiring Solutions",
      icon:Icons.hiringSolutionIcon,
      content:
        "Execute a seamless hiring strategy with tailored solutions for every stage of the recruitment lifecycle, ensuring you attract and onboard the right talent.",
    },

   {
      title: "Interview as a Service",
      icon:Icons.interviewServiceIcon,
      content:
        "Overcome capacity constraints with our network of expert interviewers skilled in evaluating candidates across roles, technologies, and industries.",
    },
    {
      title: "Compensation & Rewards Strategy",
      icon:Icons.compensationRewardIcon,
      content:
        "Stay ahead in the talent market with compensation and rewards solutions designed to attract, retain, and motivate high-performing employees.",
    },      
    {
      title: "Future-Ready Workforce Planning",
      icon:Icons.workorePlaningIcon,
      content:
        "Develop strategies to build a resilient workforce capable of adapting to evolving market dynamics and technological advancements.",
    },
    {
      title: "Align Recruitment Efforts with Business Goals",
      icon: Icons.AlignRecruitmentEffortsWithBusinessGoals,
      content: "With GCCVue360, you can directly align your business goals with recruitment by quality of hiring & increase go-to market to support your business goal."
    },
    {
      title: "Employee Retention and Policies",
      icon: Icons.EmployeeRetentionAndPolicies,
      content: "Boost employee morale and retention with our personalised development plans, tailored feedback loops, and gamified recognition programs that keep your team motivated and engaged."
    }
 
  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <div className="talent-solution col-12">
        <p className=" talent-solutionText text-white mb-0">
        Talent Management Solutions
        </p>
      </div>
      <div className="mainContainer">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-10">
            <div className="overViewBox d-flex flex-column flex-lg-row mb-3 mt-5">
              <div className="col-12 col-lg-6 ">
                <h3 className="mb-3 headTextGreen">Overview</h3>
                <p className="mb-4 globaljustifyoverview ">
                GCC  Vue360 provides comprehensive talent management solutions that align with your organizational goals and workforce needs. Our offerings include:
                </p>

                <div className="col-12 p-3 d-lg-none d-block">
                <img src={require("../../../../Assets/Images/Solutions-head/Talent_Managemen_System.jpg")}  alt="sample image" className="mb-4 w-100 rounded " />
              </div>




                <div className="d-flex flex-wrap">
                  {
                    data1.map((data,i)=>{
                      return(
                        <div className="col-12 col-md-6 col-lg-12 col-xl-6 p-2 " key={i}>
                         <CoreCard data={data} />
                      </div>

                      )
                    })
                  }
                </div>
              </div>
              <div className="col-6 p-3 d-none d-lg-block">
                <img src={require("../../../../Assets/Images/Solutions-head/Talent_Managemen_System.jpg")}  alt="sample image" className="mb-4 w-100 h-75 rounded "   />
              </div>
            </div>
            <div className="coreOfferingBox d-flex flex-wrap">
              {cardData.map((data, i) => {
                return (
                  <div className="col-12 col-md-6 col-lg-12 col-xl-4 p-2 " key={i}>
                    <CoreCard data={data} key={i} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
       
      </div>
      <div className="highlightForm">
          <HighLightComp />
        </div>
      <div className="FooterContainer">
        <Footer />
      </div>
    </div>
  );
};



export default TalentManagedSolution

