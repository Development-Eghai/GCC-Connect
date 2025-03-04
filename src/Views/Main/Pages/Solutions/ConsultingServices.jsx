import Footer from "Components/footer";
import React from "react";
import HighLightComp from "./HighLightComp";
import CoreCard from "./CoreCard";
import Icons from "Utils/Icons";




const ConsultingServices = () => {
  const cardData = [
    {
      title: "GCC Advisory Services",
      icon:Icons.advisoryIcon,
      content:
        "As your trusted partner, we provide strategic guidance to navigate the complexities of GCC operations. From strategy development to execution and expansion, we empower organizations with actionable insights and frameworks designed to achieve scalable, resilient ecosystems.",
    },
    {
      title: "Benchmarking Insights",
      icon:Icons.benchmarkIcon,
      content:
        "Understanding how your GCC compares to industry standards is vital for strategic growth. Our benchmarking services not only reveal performance gaps but also provide actionable strategies to address them, enabling you to stay ahead of the curve.",
    },
    {
      title: "Market Research & Strategic Analysis",
      icon:Icons.marketIcon,
      content:
        "Discover untapped opportunities within the dynamic GCC landscape. With a data-driven approach, we provide actionable intelligence to help you align with market trends, adapt to shifts, and drive informed decision-making.",
    },
    {
      title: "Location Analysis",
      icon:Icons.locationIcon,
      content:
        "Selecting the right geographic location is a critical decision. Our specialized frameworks evaluate onshore, nearshore, and offshore options based on factors like cost efficiency, talent availability, and risk management—ensuring alignment with your business goals.",
    },
    {
      title: "Talent Optimization",
      icon:Icons.talentIcon,
      content:
        "Talent is the cornerstone of GCC success. We consult on strategies to attract, develop, and retain a workforce that aligns with evolving market demands, leveraging our proprietary frameworks to build enterprise-ready teams.",
    },
    // {
    //   title: "Peer Intelligence",
    //   icon:Icons.peerIcon,
    //   content:
    //     "Stay ahead in a fast-evolving market with insights into competitor strategies, emerging trends, and best practices. Our research-driven intelligence empowers you to make informed decisions on scaling capabilities, adopting innovations, and maintaining a competitive edge.",
    // },
  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <div className="ConsultingandAdvisoryServicesImage col-12">
        <p className=" ConsultingandAdvisoryServicesImageText text-white mb-0">
          Consulting and Advisory Services
        </p>
      </div>
      <div className="container">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-12">
            <div className="overViewBox d-flex flex-column flex-lg-row p-4">
              <div className="col-12 col-lg-6 p-3">
                <h3 className="mb-3 headTextGreen">Overview</h3>
                <p className="mb-4  globaljustifyforsolution">
                  Flexible growth-aligned payment model for building global
                  capabilities.Our GCC model helps you establish a fully
                  functional global capability center tailored to your business
                  needs. From legal entity setup to workspace design and talent
                  acquisition, we provide end-to-end support with the
                  flexibility to scale as your business grows.
                </p>
              </div>
              <div className="col-12 col-lg-6 p-3">
                <img
                  src={require("../../../../Assets/Images/GCC-Consulting-and-Advisory.jpg")}
                  alt="sample image"
                  className="mb-4 w-100  rounded custom-img-height-solution"
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

export default ConsultingServices;
