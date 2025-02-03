import React from "react";
import { Carousel } from "react-bootstrap";
import { FaChalkboardTeacher, FaUserTie, FaRobot } from "react-icons/fa";
import "../Pages/SolutionHome.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: <FaChalkboardTeacher size={40} color="green" />,
    title: "Consulting & Advisory",
    description: "At AdvaniPeel’s GCC Vue360 Advisory Practice, we collaborate with organizations to unlock the full potential of GCC ecosystems in India.",
    link: "/consulting-services"
  },
  {
    icon: <FaUserTie size={40} color="green" />,
    title: "Smart Talent Acquisition with AI - Led Innovation",
    description: "PixelAdvisers AI-driven Smart Talent Acquisition platform transforms the way organizations plan and execute recruitment strategies.",
    link: "/smart-talent"
  },
  {
    icon: <FaRobot size={40} color="green" />,
    title: "AI Led Talent Supply Process",
    description: "Our advanced AI solutions ensure efficient and targeted talent acquisition.",
    link: "/ailed-service" 
  },
];

const chunkArray = (arr, size) => {
  return arr.map((_, index) => arr.slice(index, index + size)).filter(chunk => chunk.length === size);
};

const SolutionsOfferings = () => {
  const groupedSolutions = chunkArray(solutions, 3);

  return (
    <div className="solutions-offerings-container ">
      <h4 className="solutions-offerings-subheading">Comprehensive Solutions for Global Capability Centers</h4>
      <h2 className="solutions-offerings-heading">Solutions & Offerings</h2>
      <Carousel indicators={false} controls={true} interval={30000} slide={true} className="solutions-carousel">
        {groupedSolutions.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="solutions-offerings-cards-container">
              {group.map((solution, idx) => (
                <div key={idx} className="solutions-offerings-card my-4">
                  <div className="solutions-offerings-image-placeholder"></div>
                  <div className="solutions-offerings-icon">{solution.icon}</div>
                  <div className="solutions-offerings-card-content">
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                  <div className="solutions-offerings-btn-container">
                    {/* Use dynamic link */}
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
    </div>
  );
};

export default SolutionsOfferings;
