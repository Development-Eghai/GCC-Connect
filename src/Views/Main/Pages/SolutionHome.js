import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { FaChalkboardTeacher, FaUserTie, FaRobot } from "react-icons/fa";
import "../Pages/SolutionHome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHref } from "react-router-dom";
import advisoryImg from "Assets/Images/GCC-Consulting-and-Advisory.jpg";
import smartImg from "Assets/Images/Smart-Talent-Acquisition-with-AI-Led-Innovation.jpg";
import aiLedImg from "Assets/Images/AI-Led-Talent-Supply-Process.jpg";
import talentImg from "Assets/Images/Talent-Managemen-System.jpg";
import workplaceImg from "Assets/Images/Workspace-Design.jpg";
import managedImg from "Assets/Images/Managed-Services.jpg";
import { MdManageAccounts, MdMapsHomeWork } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa"; // import the arrows



const solutions = [
  {
    icon: <img src={require('Assets/Images/Homepage-Solutions/Conulting-and-Advisory.png')} alt="Consulting Icon" style={{ width: '40px', height: 'auto' }} />,
    title: "Consulting & Advisory",
    img: advisoryImg,
    description: "At AdvaniPeel’s GCC Vue360 Advisory Practice, we collaborate with organizations to unlock the full potential of GCC ecosystems in India.",
    link: "/consulting-services",
  },

  {
    icon: <img src={require('Assets/Images/Homepage-Solutions/Smart-Talent-Acquisiton.png')} alt="Consulting Icon" style={{ width: '40px', height: 'auto' }} />,
    title: "Smart Talent Acquisition with AI - Led Innovation",
    img: smartImg,
    description: "PixelAdvisers AI-driven Smart Talent Acquisition platform transforms the way organizations plan and execute recruitment strategies.",
    link: "/smart-talent",
  },
  {
    icon: <img src={require('Assets/Images/Homepage-Solutions/AI-Led-Talent-Supply.png')} alt="Consulting Icon" style={{ width: '40px', height: 'auto' }} />,
    title: "AI Led Talent Supply Process",
    img: aiLedImg,
    description: "Our advanced AI solutions ensure efficient and targeted talent acquisition.",
    link: "/ailed-service",
  },
  {
    icon: <img src={require('Assets/Images/Homepage-Solutions/Talent-Mangement-Solutions.png')} alt="Consulting Icon" style={{ width: '40px', height: 'auto' }} />,
    title: "Talent Management Solutions",
    img: talentImg,
    description: "GCC Vue360 provides comprehensive talent management solutions that align with your organizational goals and workforce needs.",
    link: "/talent-solution",
  },
  {
    icon: <img src={require('Assets/Images/Homepage-Solutions/Workspace-Solutions.png')} alt="Consulting Icon" style={{ width: '40px', height: 'auto' }} />,
    title: "Workspace Solutions",
    img: workplaceImg,
    description: "At PixelAdvant, we believe that a workspace is more than a physical space—it is a strategic asset that drives innovation, collaboration, and operational efficiency.",
    link: "/workspace-solution",
  },
  {
    icon: <img src={require('Assets/Images/Homepage-Solutions/Manged-Services.png')} alt="Consulting Icon" style={{ width: '40px', height: 'auto' }} />,
    title: "Managed Services",
    img: managedImg,
    description: "At PixelAdvant, we specialize in facilitating managed services that empower Global Capability Centers (GCCs) to optimize operations, ensure compliance, and drive value creation across key business functions.",
    link: "/managed-services",
  },
];

// Function to group solutions for the carousel
const chunkArray = (arr, size) => {
  let chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const SolutionsOfferings = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const isMobile = window.innerWidth < 768; // Detect mobile screens
  const groupedSolutions = chunkArray(solutions, isMobile ? 1 : 3); // Show 1 item on mobile, 3 on larger screens

  return (
    <div className="solutions-offerings-container">
      <h4 className="solutions-offerings-subheading">Comprehensive Solutions for Global Capability Centers</h4>
      <h2 className="solutions-offerings-heading">Solutions & Offerings</h2>

      <Carousel
        indicators={false}
        controls={true}
        interval={3500}
        slide
        className="solutions-carousel"
        prevIcon={<FaArrowCircleLeft className="custom-arrow" />} // Left arrow icon
        nextIcon={<FaArrowCircleRight className="custom-arrow" />} // Right arrow icon
      >


        {groupedSolutions.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="solutions-offerings-cards-container">
              {group.map((solution, idx) => (
                <div key={idx} className="solutions-offerings-card my-3">
                  <div className="solutions-offerings-image-placeholder">
                    <img src={solution.img} alt={solution.title} className="w-100 rounded img-fluid custom-img-height" />
                  </div>

                  <div className="solutions-offerings-icon">{solution.icon}</div>
                  <div className="solutions-offerings-card-content">
                    <h3>{solution.title}</h3>
                    <p className="solution-description">
                      {expandedIndex === idx
                        ? solution.description
                        : solution.description.length > 250
                          ? `${solution.description.slice(0, 250)}...`
                          : solution.description}
                    </p>


                  </div>
                  <div className="solutions-offerings-btn-container">
                    <Link to={solution.link} className="text-decoration-none solutions-offerings-btn">
                      Explore More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        <div className="col-12 mt-4 text-center d-flex justify-content-center align-items-center learn-more">
          <a href="/contact" className="btn contact-btn text-decoration-none text-white px-5 py-3 text-center fw-bold learn-more">
          See How We're Accelerating Better Outcomes          </a>
        </div>
      </div>

    </div >

  );
};

export default SolutionsOfferings;
