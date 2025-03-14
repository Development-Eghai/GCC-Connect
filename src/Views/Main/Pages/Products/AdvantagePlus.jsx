import Footer from 'Components/footer'
import React from 'react'

import Icons from "Utils/Icons";
import CoreCard from '../Solutions/CoreCard';
import HighLightComp from '../Solutions/HighLightComp';

const AdvantagePlus = () => {

  const cardData = [
    {
      title: "Market Based Talent",
      icon: Icons.marketBasedIcon,
      content:
        "Pre-selected candidates based on skills/technologies and ever-changing market trends. ",
    },
    {
      title: "Bulk Resume",
      icon: Icons.bulkResumeIcon,
      content:
        "Ready to hire interviewers based on the job description experience, expertise and availability.",
    },
    {
      title: "Recruitment",

      content:
        "Say goodbye to time-consuming job postings and manual screening. Our AI-powered recruitment tool automatically matches ideal candidates with open positions, saving you valuable time and ensuring a quality talent pool.",
      Image: require('../../../../Assets/Images/Advantages plus/Recruitment.png')
    },
    {
      title: "Diverse Talent Pool",
      content:
        "Access a wider range of diverse candidates from diverse communities through our inclusive platform.",
      Image: require('../../../../Assets/Images/Advantages plus/Diverse-Talent-Pool.png')

    },
    {
      title: "Data-Driven Insights",
      content:
        "Gain valuable insights into market trends and candidate behavior with detailed analytics to make informed hiring decisions.",
      Image: require('../../../../Assets/Images/Advantages plus/Data-Driven-Insights.png')

    },
    {
      title: "Streamlined Workflow",
      content:
        "Automate repetitive tasks like screening and scheduling interviews to streamline your recruitment process.",
      Image: require('../../../../Assets/Images/Advantages plus/Streamlined-Workflow.png')

    },
  ];
  return (
    <div className="container-fluid p-0 d-flex flex-column vh-100">
      <div className="advantage-plus col-12">
        <p className=" advantage-plusText  text-white mb-0">AdvantagePlus</p>
      </div>
      <div className="mainContainer">
        <div className="mainContent d-flex justify-content-center">
          <div className="col-10">
            <div className="overViewBox d-flex flex-column flex-lg-row p-4">
              <div className="col-12 col-lg-6 p-3">
                <h3 className="mb-3 headTextGreen">Overview</h3>
                <p className="mb-4  globaljustify">
                  It is an industry breakthrough product which helps our global client to select thousands of candidates within few minutes for their open positions.  All of these profiles are preselected based on client agreed unique requirements and needs.
                </p>
              </div>
              <div className="col-12 col-lg-6 p-3" >

                <img src={require("../../../../Assets/Images/Advanage_Plus.jpg")} alt="sample image" className="mb-4 w-100 rounded" />
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
      <div className="FooterContainer">
        <Footer />
      </div>
    </div>
  )
}

export default AdvantagePlus