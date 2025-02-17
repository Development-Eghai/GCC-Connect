import React from 'react';
import { Link } from 'react-router-dom';
import Icons from 'Utils/Icons';

const ExperienceSection = () => {
  return (
    <section className="experience-section py-5">
      <div className="container px-3 px-md-5">
        <div className="row align-items-start">
          <div>
            <div className="content ps-4">
              <h3 className="fw-bold">About Us</h3>
              <p className="description">
                Our leaders have a collective experience of 400 years together in cross-functional domain areas.
              </p>
            </div>
          </div>

          {/* Left Side - Image */}
          <div className="col-12 px-3 col-lg-6  text-start text-lg-start d-flex flex-column">


            {/* Image at the bottom */}
            <div className="stat-card mt-auto">
              <img
                src={require('../Assets/Images/About-Us.jpg')}
                alt="About Us"
                className="w-100 rounded img-fluid"
              />
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="col-12 col-lg-6 info">


            <div className="features-container ">
              <ul className="features text-start text-secondary ">
                <li>
                  <span className=" me-3">{Icons.ExperienceSectionTickIcon}</span> Beyond proven technologies, we provide a new way of thinking.
                </li>
                <li>
                  <span className="me-3">{Icons.ExperienceSectionTickIcon}</span> Powerful solutions designed to solve your GCC needs.
                </li>
                <li>
                  <span className="me-3">{Icons.ExperienceSectionTickIcon}</span> Quickly adapt to changing GCC business requirements with a flexible, configurable system.
                </li>
                <li>
                  <span className="me-3">{Icons.ExperienceSectionTickIcon}</span> Streamline manual, time-consuming processes with our modernized approach.
                </li>
                <li>
                  <span className="me-3">{Icons.ExperienceSectionTickIcon}</span> Utilize a team of GCC experts with a deep collective of knowledge and support.
                </li>
              </ul>
            </div>

            <div className="buttons d-flex flex-wrap gap-3 mt-3">
              <Link to="/contact" className="read-more-btn text-decoration-none">
                Contact Us
              </Link>
              <Link to="/about-page" className="contact-btn-borderblack text-decoration-none ">
                Read More
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
