import Footer from "Components/footer";
import React from "react";
import HighLightComp from "./HighLightComp";
import CoreCard from "./CoreCard";
import Img from "Assets/Images/Image.jpg";

const ConsultingServices = () => {
  const cardData = [
    {
      title: "GCC Advisory Services",
      content:
        "As your trusted partner, we provide strategic guidance to navigate the complexities of GCC operations. From strategy development to execution and expansion, we empower organizations with actionable insights and frameworks designed to achieve scalable, resilient ecosystems.",
    },
    {
      title: "Benchmarking Insights",
      content:
        "Understanding how your GCC compares to industry standards is vital for strategic growth. Our benchmarking services not only reveal performance gaps but also provide actionable strategies to address them, enabling you to stay ahead of the curve.",
    },
    {
      title: "Market Research & Strategic Analysis",
      content:
        "Discover untapped opportunities within the dynamic GCC landscape. With a data-driven approach, we provide actionable intelligence to help you align with market trends, adapt to shifts, and drive informed decision-making.",
    },
    {
      title: "Location Analysis",
      content:
        "Selecting the right geographic location is a critical decision. Our specialized frameworks evaluate onshore, nearshore, and offshore options based on factors like cost efficiency, talent availability, and risk management—ensuring alignment with your business goals.",
    },
    {
      title: "Talent Optimization",
      content:
        "Talent is the cornerstone of GCC success. We consult on strategies to attract, develop, and retain a workforce that aligns with evolving market demands, leveraging our proprietary frameworks to build enterprise-ready teams.",
    },
    {
      title: "Peer Intelligence",
      content:
        "Stay ahead in a fast-evolving market with insights into competitor strategies, emerging trends, and best practices. Our research-driven intelligence empowers you to make informed decisions on scaling capabilities, adopting innovations, and maintaining a competitive edge.",
    },
  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <div className="detailImage col-12">
        <p className=" detailImageText text-white mb-0">
          Consulting and Advisory Services
        </p>
      </div>
      <div className="mainContainer">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-11">
            <div className="overViewBox d-flex flex-column flex-lg-row p-4">
              <div className="col-12 col-lg-6 p-3">
                <h3 className="mb-5 headTextGreen">Overview</h3>
                <p className="mb-4 fw-bold">
                  Flexible growth-aligned payment model for building global
                  capabilities.Our GCC model helps you establish a fully
                  functional global capability center tailored to your business
                  needs. From legal entity setup to workspace design and talent
                  acquisition, we provide end-to-end support with the
                  flexibility to scale as your business grows.
                </p>
              </div>
              <div className="col-12 col-lg-6 p-3">
                <img src={require('../../../../Assets/Images/SmartTalentAcquisitionwithAILedInnovation.jpg')}  alt="sample image" className="mb-4 w-100  rounded" />
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

export default ConsultingServices;
