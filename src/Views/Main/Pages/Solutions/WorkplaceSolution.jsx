import Footer from "Components/footer";
import React from "react";
import HighLightComp from "./HighLightComp";
import CoreCard from "./CoreCard";
import Icons from "Utils/Icons";
const WorkplaceSolution = () => {
  const cardData = [
    {
      title: "Innovative Workspace Strategies & Prime Location Selection",
      icon: Icons.prineLocationIcon,
      content:
        "Establish your presence in prime locations that offer unparalleled access to skilled professionals, robust infrastructure, and exceptional connectivity to support your business operations. Our workspace domain experts will define workplace strategies that would you identify locations that would support latest design along with Smart Technology Enablement workspaces. Our data-driven insights would help tailor workspaces that boost employee satisfaction, engagement, and productivity.",
    },
    {
      title: "Innovative Workspace Design Consultation",
      icon: Icons.designConsultingIcon,
      content:
        "We craft strategies for dynamic and ergonomic work environments that enhance collaboration, creativity, and productivity. Flexible layouts and purpose-driven designs ensure your workspace meets the demands of a modern workforce.",
    },
    {
      title: "Scalable Workspace Solutions",
      icon: Icons.scalableSolutionIcon,
      content:
        "We guide GCCs in creating efficient and productive workplaces. Our facilitation of facility management, catering, and IT support strategies ensures seamless operational execution, fostering an environment where employees can thrive.",
    },
  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <div className="workspace-solution col-12">
        <p className=" workspace-solutionText text-white mb-0">Workspace Solutions</p>
      </div>
      <div className="mainContainer">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-10">
            <div className="overViewBox d-flex flex-column flex-lg-row p-4">
              <div className="col-12 col-lg-6 p-3">
                <h3 className="mb-3 headTextGreen">Overview</h3>
                <p className="mb-4 ">
                  At PixelAdvant, we believe that a workspace is more than a
                  physical space—it is a strategic asset that drives innovation,
                  collaboration, and operational efficiency. We facilitate the
                  planning and implementation of workspace strategies that align
                  with your business goals, ensuring adaptability to evolving
                  needs and sustained growth.
                </p>
              </div>
              <div className="col-12 col-lg-6 p-3" style={{ height: "280px" }}>

                <img src={require("../../../../Assets/Images/Workspace-Design.jpg")} alt="sample image" className="mb-4 rounded w-100 h-100 custom-img-height-solution" />
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

export default WorkplaceSolution;
