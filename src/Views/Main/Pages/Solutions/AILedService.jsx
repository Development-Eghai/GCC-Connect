
import Footer from "Components/footer";
import React from "react";
import HighLightComp from "./HighLightComp";
import CoreCard from "./CoreCard";
import Img from "Assets/Images/Image.jpg";
import Icons from "Utils/Icons";
const AILedService = () => {
  const data1 = [
    {
      title: "Intelligent Talent Pools",
      content:
        "Identify and access the most suitable candidates for each role.",
    },

   {
      title: "Optimized Screening",
      content:
        "Save time with AI-powered candidate screening that prioritizes quality over quantity.",
    },
    {
        title: "Pre-Validated Talent Pipeline",
        content:
          "Benefit from a ready-to-deploy talent pool of over 5,000 pre-screened candidates.",
      },
  ]
  

  const cardData = [
   {
      title: "Technology-Enabled Outreach",
      content:
        "Engage candidates through cutting-edge communication tools to connect faster and more effectively.",
    } 
 
  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <div className="detailImage col-12">
        <p className=" detailImageText text-white mb-0">
        AI-led Talent Supply Process
        </p>
      </div>
      <div className="mainContainer">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-11">
            <div className="overViewBox d-flex flex-column flex-lg-row p-4">
              <div className="col-12 col-lg-6 p-3">
                <h3 className="mb-5 headTextGreen">Overview</h3>
                <p className="mb-4 fw-bold">
                Our advanced AI solutions ensure efficient and targeted talent acquisition:
                </p>
                <div className="d-flex">
                  {
                    data1.map((data,i)=>{
                      return(
                        <div className="col-4" key={i}>
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
              <div className="col-9 p-4 d-flex flex-column justify-content-evenly rounded-4" style={{backgroundColor:"#042126"}}>
                <div className="d-flex justify-content-center align-items-center "><span>{Icons.manArroowWhiteIcon}</span></div>
                <div className="d-flex justify-content-center align-items-center"><p className="mb-0 text-white">PixelAdvant’s AI-led process ensures you secure top talent faster, saving time, resources, and effort while driving recruitment excellence.</p></div>
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








export default AILedService