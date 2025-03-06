import React from "react";
import Footer from "Components/footer";
import Icons from "Utils/Icons";
import CoreCard from "../Solutions/CoreCard";
import HighLightComp from "../Solutions/HighLightComp";

const Click = () => {
  const cardData = [
    {
      title: "Talent Network",
      icon: Icons.talentNetworkIcon,
      content: "Click100 provides you with Thousands of featured profiles in India. You can promote and post open positions on Click100 platform which can help you fill open positions quickly with great candidates. ",
    },
    {
      title: "AI/ML Based Recruiting Intelligence",
      icon: Icons.clickAIIcon,
      content:
        "There is no need to waste time reviewing profiles. With our modern state-of-the-art AI feature, Click100 can provide you with the best matching candidates in descending order with ratings in minutes.",
    },
    {
      title: "Automation",
      icon: Icons.clickAutomationIcon,
      content:
        "With E2E automation, Click 100 provides tailoring solutions for Sourcing Strategy, candidates scoring on Tests and Interviews, and a seamless transformation of the recruiting process which will further speed up the tasks.",
    },
  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      {/* <div className="click col-12">
        <p className=" clickText  text-white mb-0">Click100</p>
      </div> */}
      <div className="click-Hunder">
        <p className="click-HunderText text-white mb-0">
        Click100
        </p>
      </div>
      <div className="mainContainer">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-10">
            <div className="overViewBox d-flex flex-column flex-lg-row p-4">
              <div className="col-12 col-lg-6 p-3">
                <h3 className="mb-3 headTextGreen">Overview</h3>
                <p className="mb-4 globaljustify ">
                  Pixeladvant believes that first 100 employees are important
                  for successful GCC setup. Our inhouse tool Click100 helps you
                  plan for talent needs to successful hiring. Click100 is a
                  platform designed to streamline tech hiring process for
                  successful GCC setup and scale at greater speed with quality.
                </p>
              </div>
              <div className="col-12 col-lg-6 p-3" >
                <img
                  src={require("../../../../Assets/Images/Click_100.jpg")}
                  alt="sample image"
                  className="mb-4 w-100 rounded object"
                />
              </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {cardData.map((data, i) => {
                return (
                  <div className="col p-3 " key={i}>
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

export default Click;
