import Footer from "Components/footer";
import React from "react";
import HighLightComp from "./HighLightComp";
import CoreCard from "./CoreCard";
import Img from "Assets/Images/Image.jpg";
const WorkplaceSolution = () => {
  const cardData = [
    {
      title: "Innovative Workspace Strategies & Prime Location Selection",
      content:
        "Establish your presence in prime locations that offer unparalleled access to skilled professionals, robust infrastructure, and exceptional connectivity to support your business operations. Our workspace domain experts will define workplace strategies that would you identify locations that would support latest design along with Smart Technology Enablement workspaces. Our data-driven insights would help tailor workspaces that boost employee satisfaction, engagement, and productivity.",
    },
    {
      title: "Innovative Workspace Design Consultation",
      content:
        "We craft strategies for dynamic and ergonomic work environments that enhance collaboration, creativity, and productivity. Flexible layouts and purpose-driven designs ensure your workspace meets the demands of a modern workforce.",
    },
    {
      title: "Scalable Workspace Solutions",
      content:
        "We guide GCCs in creating efficient and productive workplaces. Our facilitation of facility management, catering, and IT support strategies ensures seamless operational execution, fostering an environment where employees can thrive.",
    },
  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <div className="detailImage col-12">
        <p className=" detailImageText text-white mb-0">Workspace Solutions</p>
      </div>
      <div className="mainContainer">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-11">
            <div className="overViewBox d-flex flex-column flex-lg-row p-4">
              <div className="col-12 col-lg-6 p-3">
                <h3 className="mb-5 headTextGreen">Overview</h3>
                <p className="mb-4 fw-bold">
                  At PixelAdvant, we believe that a workspace is more than a
                  physical space—it is a strategic asset that drives innovation,
                  collaboration, and operational efficiency. We facilitate the
                  planning and implementation of workspace strategies that align
                  with your business goals, ensuring adaptability to evolving
                  needs and sustained growth.
                </p>
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

export default WorkplaceSolution;
