import React from 'react';
import Icons from 'Utils/Icons';

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <div className="row">
          {/* Left Side */}
          <div className="col-12 col-lg-6 stats">
            <div className="stat-card">
              <h1>1,784</h1>
              <p>Satisfied and happy clients we have served all over the world.</p>
              <div className="dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-12 col-lg-6 info">
            <h3>About Us</h3>
            <p className="description">
              Our leaders have a collective experience of 400 years together in cross-functional domain areas.
            </p>
            <ul className="features">
              <li>
                <span className="me-3">{Icons.ExperienceSectionTickIcon}</span> Highly qualified consultants at service.
              </li>
              <li>
                <span className="me-3">{Icons.ExperienceSectionTickIcon}</span> Highly qualified consultants at service.
              </li>
              <li>
                <span className="me-3">{Icons.ExperienceSectionTickIcon}</span> Highly qualified consultants at service.
              </li>
              <li>
                <span className="me-3">{Icons.ExperienceSectionTickIcon}</span> Highly qualified consultants at service.
              </li>
            </ul>
            <div className="buttons">
              <button className="contact-btn">Contact Us</button>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
