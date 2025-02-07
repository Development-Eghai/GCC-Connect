import Footer from "Components/footer";
import React from "react";
import HighLightComp from "./HighLightComp";
import CoreCard from "./CoreCard";
import Icons from "Utils/Icons";

const ManagedService = () => {
  const cardData = [
    {
      title: "Tax and Finance Compliance",
      icon:Icons.taxCompliabeIcon,
      content:
        "We provide end-to-end consultation on financial accounting, reporting, and compliance. Our expertise in tax management and optimization, FP&A, and regulatory requirements ensures GCCs are equipped to navigate evolving laws and standards. By leveraging GCCVue360, we deliver actionable insights for proactive financial decision-making.",
    },
    {
      title: "HR Shared Services",
      icon:Icons.hrSharedIcon,
      content:
        "Transform the employee journey with our tailored advisory on Talent Lifecycle Management. From onboarding and background verification to HR operations and exit management, we use a holistic approach supported by AI-enabled tools to enhance employee engagement, satisfaction ",
    },
    {
      title: "Support Services",
      icon:Icons.suportServiceIcon,
      content:
        "We guide GCCs in creating efficient and productive workplaces. Our facilitation of facility management, catering, and IT support strategies ensures seamless operational execution, fostering an environment where employees can thrive.",
    },
    {
      title: "Transportation & Logistics",
      icon:Icons.logisticIcon,
      content:
        "Optimize workforce mobility with our expertise in transportation and logistics planning. We provide strategic insights to streamline employee commutes, supply chain management, and global mobility, including visa and relocation assistance, ensuring smooth and efficient operations.",
    },
  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <div className="managed-services col-12">
        <p className=" managed-servicesText text-white mb-0">Managed Services</p>
      </div>
      <div className="mainContainer">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-9">
            <div className=" d-flex flex-column flex-lg-row p-4">
              <div className=" col-12 col-lg-6 p-3">
                <h3 className="mb-3 headTextGreen">Overview</h3>
                <p className="mb-4 ">
                  At PixelAdvant, we specialize in facilitating managed services
                  that empower Global Capability Centers (GCCs) to optimize
                  operations, ensure compliance, and drive value creation across
                  key business functions. Our consultative approach helps
                  organizations navigate complexities, adopt best practices, and
                  achieve sustainable growth.
                </p>
              </div>
              <div className="col-12 col-lg-6 p-3">
                <img  src={require("../../../../Assets/Images/Managed-Services.jpg")} alt="sample image" className="mb-4 w-100 " />
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
      <div className="FooterContainer ">
        <Footer />
      </div>
    </div>
  );
};

export default ManagedService;
