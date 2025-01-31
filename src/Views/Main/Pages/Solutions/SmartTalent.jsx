
import Footer from "Components/footer";
import React from "react";
import HighLightComp from "./HighLightComp";
import CoreCard from "./CoreCard";
import Img from "Assets/Images/Image.jpg";
import Icons from "Utils/Icons";
const SmartTalent = () => {
  const data1 = [
    {
      title: "Talent Heat Maps",
      content:
        "Visualize talent distribution across regions to target the best hiring locations.",
    },

    {
      title: "Location Strategy",
      content:
        "Develop a data-driven approach to choose optimal locations for recruitment.",
    },
    {
      title: "Compensation Insights",
      content:
        "Leverage detailed, data-backed compensation analysis to stay competitive in attracting top talent.",
    },
  ]


  const cardData = [
    {
      title: "Employee Value Proposition (EVP)",
      content:
        "Craft compelling EVP strategies to enhance employer branding and attract the right talent.",
    }

  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <div className="SmartTalentAcquisition col-12">
        <p className=" SmartTalentAcquisitionText text-white mb-0">
          Smart Talent Acquisition with AI Led Innovation
        </p>
      </div>
      <div className="Container">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-10">
            <div className="overViewBox d-flex flex-column flex-lg-row mb-3">
              <div className="col-12 col-lg-6 p-lg-3">
                <h3 className="mb-3 mt-4 headTextGreen">Overview</h3>
                <p className="mb-4 ">
                  PixelAdvant’s AI-driven Smart Talent Acquisition platform transforms the way organizations plan and execute recruitment strategies. Our solutions empower businesses with:
                </p>

                <div className="col-12 p-lg-3 d-lg-none d-block">
                  <img src={Img} alt="sample image" className="mb-4 w-100 " />
                </div>
                <div className="d-flex flex-wrap">
                  {
                    data1.map((data, i) => {
                      return (
                        <div className="col-12 col-md-6 col-xl-4 p-2" key={i}>

                          <CoreCard data={data} />

                        </div>

                      )
                    })
                  }
                </div>
              </div>
              <div className="col-12 col-lg-6 p-3 d-none d-lg-block">
                <img src={Img} alt="sample image" className="mb-4 w-100 " />
              </div>
            </div>

          </div>
        </div>
        <div className="Container">
          <div className="mainContent d-flex justify-content-center">
            <div className="col-10">
              <div className="overViewBox d-flex flex-column flex-lg-row px-lg-2">
                <div className="coreOfferingBox row justify-content-between">
                  {cardData.map((data, i) => {
                    return (
                      <div className="col-12 col-md-6 mt-3 col-lg-4 px-3" key={i}>
                        <CoreCard data={data} key={i} />
                      </div>
                    );
                  })}

                
                 <div className="col-12 mt-3 col-lg-8 p-3 d-flex flex-column justify-content-evenly rounded-4" style={{ backgroundColor: "#042126" }}>
                    <div className="  d-flex justify-content-center align-items-center">
                      <span>{Icons.manArroowWhiteIcon}</span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="mb-0 text-white">With real-time AI-based reporting, organizations can make informed decisions, streamline recruiting efforts, and optimize budgets.</p>
                   
                  </div>
                 </div>
                </div>
              </div>
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






export default SmartTalent