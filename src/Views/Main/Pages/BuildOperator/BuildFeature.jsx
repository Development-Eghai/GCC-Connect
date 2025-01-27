import React from "react";
import Icons from "Utils/Icons";
import Img from "Assets/Images/Image.jpg";

const BuildFeature = () => {
  return (
    <div className="">
      <h3 className="mb-3">Overview</h3>
      <p className="mb-4 ">
      The BOT model is ideal for businesses looking for an efficient, low-risk way to establish a Global Capability Center (GCC). Our BOT process includes four distinct phases:
      </p>
      <div className='col-lg-10'>
            <img src={Img} alt="sample image" className="mb-4 w-100 " />
        </div>
      <h3 className="mb-5">Key Features</h3>
      <div className="keyFeature col-12 d-flex flex-wrap">
        <div className="col-4 px-2">
          <div>
            <div className="keyFeatureIcin d-flex justify-content-center mb-3 "></div>
            <div >
                        <span>{Icons.manArrowIcon}</span>
                    </div>
            <hr className="" />
            <p className="globalHead">
            Cost Efficiency
            </p>
            <p className="text-secondary globaljustify mb-0 text-center">
            Minimized upfront investments with a gradual scale-up
            </p>
          </div>
        </div>
        <div className="col-4 px-2">
          <div>
            <div className="keyFeatureIcin d-flex justify-content-center mb-3 "></div>
            <div >
                        <span>{Icons.manArrowIcon}</span>
                    </div>
            <hr className="" />
            <p className="globalHead">Risk Mitigation</p>
            <p className="text-secondary globaljustify mb-0 text-center">
            Expert-led setup and operations reduce potential challenges
            </p>
          </div>
        </div>
        <div className="col-4 px-2">
          <div>
            <div className="keyFeatureIcin d-flex justify-content-center mb-3 "></div>
            <div >
                        <span>{Icons.manArrowIcon}</span>
                    </div>
            <hr className="" />
            <p className="globalHead">Customization </p>
            <p className="text-secondary globaljustify mb-0 text-center">
            Tailored solutions to match your business goals and culture
            </p>
          </div>
        </div>
        <div className="col-4 px-2">
          <div>
            <div className="keyFeatureIcin d-flex justify-content-center mb-3 "></div>
            <div >
                        <span>{Icons.manArrowIcon}</span>
                    </div>
            <hr className="" />
            <p className="globalHead">Compliance </p>
            <p className="text-secondary globaljustify mb-0 text-center">
            Adherence to local regulations and global standards
            </p>
          </div>
        </div>
        <div className="col-4 px-2">
          <div>
            <div className="keyFeatureIcin d-flex justify-content-center mb-3 "></div>
            <div >
                        <span>{Icons.manArrowIcon}</span>
                    </div>
            <hr className="" />
            <p className="globalHead">Seamless Transition </p>
            <p className="text-secondary globaljustify mb-0 text-center">
            Ownership transfer with minimal disruptions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildFeature;
