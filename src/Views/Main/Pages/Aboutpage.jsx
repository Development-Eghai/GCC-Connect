import Footer from "Components/footer";
import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div>
      <div className="Aboutpagehead col-12">
        <div className="">
          <div className="   mb-0">
            <p className="AboutpageheadText">About Us</p>
            <div className="text-wrap abouttext  text-center d-flex justify-content-center">
              Acentra Health is dedicated to modernizing the healthcare
              experience and ensuring better health outcomes with our innovative
              technology solutions and services.
            </div>
          </div>
        </div>
      </div>
      <div className="container  py-5">
        <div className="row align-items-center">
          {/* Left Side: Text Content (col-6) */}
          <div className="col-md-6">
            <h4 className="aboutheadtext  text-uppercase fw-bold">
              Who We Are
            </h4>
            <h2 className="aboutheadtext fw-bold">A Vital, Trusted Partner</h2>
            <p className="text-muted abouttext">
              Acentra Health brings together a deep collective of expertise
              across all facets with 30+ years of public sector health knowledge
              and experience. We deliver continued excellence through our
              services and solutions to produce maximum value and impact.
            </p>
            <p className="text-muted abouttext">
              Our power derives from our ability to integrate innovative
              technology with high-quality care management, quality oversight,
              and clinical assessment capabilities.
            </p>
            <p className="text-muted abouttext">
              With an expansive network, Acentra Health requires the hard work
              and dedication of our 3,000 employees, 4,500+ credentialed
              clinicians, and 450 physicians serving on the company’s Advisory
              and Review panel.
            </p>
          </div>

          {/* Right Side: Video Thumbnail with Play Button (col-6) */}
          <div className="col-md-6 position-relative text-center">
            <img
              src="/GCC-Connect/static/media/Flexiblegrowth-alignedpayment.7aed4db8572ed533a6c8.jpg" // Replace with actual image URL
              alt="Business handshake"
              className=" p-3 img-fluid rounded-5 "
            />

            {/* Play Button Overlay */}
            {/* <button className="btn btn-success position-absolute top-50 start-50 translate-middle rounded-circle p-3 shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                                <path d="M6 3.5v9l6-4.5-6-4.5z" />
                            </svg>
                        </button> */}
          </div>
        </div>
        <div>
          <p className="text-muted abouttext">
            With an expansive network, Acentra Health requires the hard work and
            dedication of our 3,000 employees, 4,500+ credentialed clinicians,
            and 450 physicians serving on the company’s Advisory and Review
            panel. Together, our team of technology and business experts,
            skilled clinicians, and highly talented healthcare professionals
            work as one to help state and federal partners lead the way in
            achieving better health outcomes for priority populations we serve.
          </p>
        </div>

        {/* Top Cards Section */}
        <div className="row text-center justify-content-center g-4 mb-4 align-items-stretch">
          {[
            "CMS-Certified Solutions",
            "CMMI Level 4 Appraisal",
            "URAC Accredited",
            "HITRUST Certified",
          ].map((title, index) => (
            <div key={index} className="col-md-3 g-3 col-sm-6 d-flex">
              <div className="p-4 bg-dark text-white rounded shadow w-100 d-flex flex-column justify-content-center align-items-center">
                <FaArrowAltCircleDown
                  size={40}
                  className="aboutheadtext mb-3"
                />
                <h5 className="fw-bold">{title}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Title & Subtitle */}
        <div className="text-center mb-5 mt-5">
          <h5 className="aboutheadtext text-uppercase fw-bold">Who We Serve</h5>
          <h2 className="fw-bold aboutheadtext">
            Providing Solutions & Services to Our Network
          </h2>
        </div>

        {/* Two-Column Content */}
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <p className="text-muted  abouttext">
              Acentra Health provides services in all 50 states, partnering with
              45 state Medicaid agencies and 25 federal agencies across 12
              departments. This includes:
            </p>
            <ul className="list-unstyled aboutheadtext fw-bold">
              {[
                "Centers for Medicare & Medicaid Services",
                "Department of Health & Human Services",
                "Department of Health Resources & Services Administration",
                "Department of Labor",
                "Department of Veterans Affairs",
              ].map((item, index) => (
                <li key={index} className="mb-2 abouttext">
                  ✔ {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <p className="text-muted abouttext">
              We enhance payment and service delivery to millions of medical and
              social services providers, hospitals, pharmacies, equipment, and
              nursing homes. In total, we serve over 140 million beneficiaries
              nationwide.
            </p>
            <p className="text-muted abouttext">
              We conduct over 700,000+ assessments annually and over 10 million
              annual Utilization Management (UM) reviews. Our systems process
              over 1.8 billion claims annually (10.4 million encounters in a
              single day) and disburse over $48 billion in payments annually.
            </p>
          </div>
        </div>
        {/* <div className="vh-50 position-relative text-center">
                        <img
                            src="/GCC-Connect/static/media/Flexiblegrowth-alignedpayment.7aed4db8572ed533a6c8.jpg" // Replace with actual image URL
                            alt="Business handshake"
                            className=" p-3 img-fluid rounded-5 "
                        /> */}

        {/* Play Button Overlay */}
        {/* <button className="btn btn-success position-absolute top-50 start-50 translate-middle rounded-circle p-3 shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 16 16">
                                <path d="M6 3.5v9l6-4.5-6-4.5z" />
                            </svg>
                        </button> */}
        {/* </div> */}
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
