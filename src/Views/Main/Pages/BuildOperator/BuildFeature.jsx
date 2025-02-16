import React from "react";
import Icons from "Utils/Icons";
import Img from "Assets/Images/Image.jpg";

const BuildFeature = () => {
  const keyFeatures = [
    {
      title: "Cost Efficiency",
      description: "Mininnnmized upfront investments with a gradual scale-up",
      image: require('../../../../Assets/Images/BOT_Icons/Key-Features/Cost-Efficiency.png')
    },
    {
      title: "Risk Mitigation",
      description: "Expert-led setup and operations reduce potential challenges",
      image: require('../../../../Assets/Images/BOT_Icons/Key-Features/Risk-Mitigation.png')
    },
    {
      title: "Customization",
      description: "Tailored solutions to match your business goals and culture",
      image: require('../../../../Assets/Images/BOT_Icons/Key-Features/Customization.png')
    },
    {
      title: "Compliance",
      description: "Adherence to local regulations and global standards",
      image: require('../../../../Assets/Images/BOT_Icons/Key-Features/Compliance.png')
    },
    {
      title: "Seamless Transition",
      description: "Ownership transfer with minimal disruptions",
      image: require('../../../../Assets/Images/BOT_Icons/Key-Features/Seamless-Transition.png')
    },
  ];

  return (
    <div className="mt-sm-5">
      {/* Overview Section */}
      <h3 className="mb-3">Overview</h3>
      <p className="mb-4">
        The BOT model is ideal for businesses looking for an efficient, low-risk way to establish a Global Capability Center (GCC). Our BOT process includes four distinct phases:
      </p>

      {/* Image Section */}
      <div className="col-lg-10">
        <img src={Img} alt="sample image" className="mb-4 w-100" />
      </div>

      {/* Key Features Section */}
      <h3 className="mb-5">Key Features</h3>
      <div className="keyFeature col-12 d-flex flex-wrap">
        {keyFeatures.map((feature, index) => (
          <div className="col-12 col-sm-6 col-lg-4 px-2 d-flex mb-3" key={index}>
            <div className="coremodalCard d-flex flex-column justify-content-between w-100 p-3 text-start">
              <div className="keyFeatureIcin d-flex justify-content-start mb-3">
                <img
                  src={feature?.image}
                  alt="sample image"
                  className="w-75 rounded img-fluid"
                />
              </div>
              <hr />
              <h5 className="globalHead">{feature.title}</h5>
              <p className="text-secondary globaljustify mb-0">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildFeature;
