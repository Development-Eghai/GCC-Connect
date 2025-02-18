
import Footer from "Components/footer";
import React from "react";
import HighLightComp from "./HighLightComp";
import CoreCard from "./CoreCard";
import Img from "Assets/Images/Image.jpg";
import Icons from "Utils/Icons";
import DomainExperienceSection from "Components/DomainExperienceSection";
const AILedService = () => {
  const data1 = [
    {
      title: "Intelligent Talent Pools",
      icon: Icons.talentPoolIcon,
      content:
        "Identify and access the most suitable candidates for each role.",
    },

    {
      title: "Optimized Screening",
      icon: Icons.optimizedScreenIcon,
      content:
        "Save time with AI-powered candidate screening that prioritizes quality over quantity.",
    },

  ]


  const cardData = [
    {
      title: "Pre-Validated Talent Pipeline",
      icon: Icons.talentPipelineIcon,
      content:
        "Benefit from a ready-to-deploy talent pool of over 5,000 pre-screened candidates.",
    },
    {
      title: "Technology-Enabled Outreach",
      icon: Icons.technologyEnabledIcon,
      content:
        "Engage candidates through cutting-edge communication tools to connect faster and more effectively.",
    }

  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <div className="AI-ledTalent col-12">
        <p className=" AI-ledTalentText text-white mb-0">
          AI-led Talent Supply Process
        </p>
      </div>
      <div className="mainContainer">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-10">
            <div className="overViewBox d-flex flex-column flex-lg-row ">
              <div className="col-12 col-lg-6 p-lg-3">
                <h3 className="mb-3 mt-4 headTextGreen">Overview</h3>
                <p className="mb-4 ">
                  Our advanced AI solutions ensure efficient and targeted talent acquisition:
                </p>

                <div className="col-12 p-lg-3 d-lg-none d-block">
                  <img src={require("../../../../Assets/Images/Solutions-head/AI_Led_Talent_Supply_Process.jpg")} alt="sample image" className="mb-4 w-100 rounded " />
                </div>
                <div className="d-flex flex-wrap">
                  {
                    data1.map((data, i) => {
                      return (
                        <div className="col-12 col-md-6 col-lg-6  px-3 py-3" key={i}>

                          <CoreCard data={data} />

                        </div>

                      )
                    })
                  }
                </div>
              </div>
              <div className="col-12 col-lg-6 p-3 d-none d-lg-block">
                <img src={require("../../../../Assets/Images/Solutions-head/AI_Led_Talent_Supply_Process.jpg")} alt="sample image" className="mb-4 w-100 h-75 rounded " />
              </div>
            </div>
            <div className="coreOfferingBox d-flex flex-wrap">
              {cardData.map((data, i) => {
                return (
                  <div className="col-12 col-md-6 col-lg-3 px-3 py-3" key={i}>
                    <CoreCard data={data} key={i} />
                  </div>
                );
              })}
              <div className="col-lg-6 px-4 py-3 d-flex flex-column justify-content-evenly rounded-4" style={{ backgroundColor: "#042126" }}>
                <div className="d-flex justify-content-center align-items-center">
                  <img src={require("../../../../Assets/Images/AI-Led-Talent-Supply-Process.png")} 
                  alt="AI-Led Talent Supply Process"  
                  style={{ width: "100px", height: "100px" }}  />
                </div>

                <div className="d-flex justify-content-center align-items-center"><p className="mb-0 text-white">PixelAdvant’s AI-led process ensures you secure top talent faster, saving time, resources, and effort while driving recruitment excellence.</p></div>
              </div>
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








export default AILedService