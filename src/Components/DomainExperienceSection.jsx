import React from 'react';
import Icons from 'Utils/Icons';

const DomainExperienceSection = () => {
  const domains = [
    { title: "Legal Compliances", icon: Icons.LegalIcon },
    { title: "Taxation", icon: Icons.TexationIcon },
    { title: "HRBP", icon: Icons.HRBPIcon },
    { title: "Talent Acquisition", icon: Icons.TalentAcquisitonIcon },
    { title: "Product Management", icon: Icons.ProductManagmentIcon },
    { title: "Real Estate", icon: Icons.ProductManagmentIcon },
    { title: "Software Engineering", icon: Icons.SoftwareEngineeringIcon },
    { title: "Engineering Research & Development", icon:  Icons.TalentAcquisitonIcon },
    { title: "Digital Services & Internet Technology", icon: Icons.ProductManagmentIcon },
  ];

  return (
    <section className="domain-section   mb-5">
      <div className='container'>
        <div className="domain-header  mt-5">
          <p>We build trust and maintain long-lasting relations!</p>
          <h3>
            Our leaders have a collective experience of 400 years together in cross functional domain areas.        </h3>
        </div>
        <div className="domain-grid mt-5">
          <div className="domain-row   mb-5">
            {domains.slice(0, 9).map((domain, index) => (
              <div key={index} className="domain-card mb-3">
                <div className="domain-icon">{domain.icon}</div>
                <p>{domain.title}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>


    </section>
  );
};

export default DomainExperienceSection;
