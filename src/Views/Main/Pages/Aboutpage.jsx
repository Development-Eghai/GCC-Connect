import Footer from "Components/footer";
import React from "react";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Icons from "Utils/Icons";


import { FaBalanceScale, FaHandsHelping, FaHandshake, FaLightbulb, FaTrophy } from "react-icons/fa";
import CoreCard from "./Solutions/CoreCard";


const AboutPage = () => {

  const sections = [
    {
      title: "Meet Our Leadership Team",
      image: require("../../../Assets/Images/About-Us.jpg"), // Update with your image path
      link: "/leadership-page", // Update with the actual route
    },
    {
      title: "Discover Solution",
      image: require("../../../Assets/Images/Solutions-head/AI_Led_Talent_Supply_Process.jpg"), // Update with your image path
      link: "/consulting-services", // Update with the actual route
    },
    {
      title: "Explore Model",
      image: require("../../../Assets/Images/Consulting& Advisory.jpg"), // Update with your image path
      link: "/details/initiation", // Update with the actual route
    },
  ];

  const cardData = [
    {
      title: "To a small business owner",
      icon: Icons.talentNetworkIcon,
      content: "Stop wasting time on job boards and find the right people quickly with our user-friendly recruitment tool designed for small businesses.",
    },
    {
      title: "To a large enterprise",
      icon: Icons.clickAIIcon,
      content:
        "Scale your hiring process with our sophisticated platform that handles high volumes of applications while ensuring quality candidate selection.",
    },
    {
      title: "To a tech company",
      icon: Icons.clickAutomationIcon,
      content:
        "Attract top tech talent with our platform that integrates seamlessly with your existing tech stack and highlights in-demand skills.",
    },
  ];

  const content = [
    { title: "Integrity", text: "Honor your commitments and never compromise values.", icon: <FaBalanceScale size={40} /> },
    { title: "Empathy", text: "Empathize with those we serve and collaborate with.", icon: <FaHandsHelping size={40} /> },
    { title: "Relationships", text: "Build trust by collaborating.", icon: <FaHandshake size={40} /> },
    { title: "Innovation", text: "Invent the future and draw wisdom from the past.", icon: <FaLightbulb size={40} /> },
    { title: "Performance", text: "Demonstrate excellence in everything we do.", icon: <FaTrophy size={40} /> },
  ];





  return (
    <div>
      <div className="Aboutpagehead col-12">
        <div className="">
          <div className="   mb-0">
            <p className="AboutpageheadText">About Us</p>
            <div className="text-wrap abouttext  text-center d-flex justify-content-center">
              Across every critical touchpoint GCC journey, we provide innovative solutions and services that positively impact outcomes for all stakeholders.

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
            <h2 className="aboutheadtext fw-bold">An Integral, Trusted Partner in GCC</h2>
            <h4 className=" fw-bold mt-4">Expertise across the GCC Delivery System</h4>
            <p className="text-muted abouttext">
              Across every critical touchpoint GCC journey, we provide innovative solutions and services that positively impact outcomes for all stakeholders.
            </p>
            <p className="text-muted abouttext">
              Our solutions are flexible and scalable, customized to suit your organization’s most complex GCC challenges. No matter your pain point, we deliver reliable and transformational outcomes.
            </p>
            <p className="text-muted abouttext">
              Our GCC VUE360 product provides end to end solutions that are required by companies for setting up successful innovation centers in India. We will partner with companies at every stage of this process.
            </p>
            <p className="text-muted abouttext">
              Our products support Legal & compliance, workspace, Talent, HR, Operation, and payroll business areas that are critical for successful entity setup.             </p>
          </div>

          {/* Right Side: Video Thumbnail with Play Button (col-6) */}
          <div className="col-md-6 position-relative text-center">
            <img
              src={require("../../../Assets/Images/About-Us.jpg")} // Replace with actual image URL
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
        {/* <div>
          <p className="text-muted abouttext">
            With an expansive network, Acentra Health requires the hard work and
            dedication of our 3,000 employees, 4,500+ credentialed clinicians,
            and 450 physicians serving on the company’s Advisory and Review
            panel. Together, our team of technology and business experts,
            skilled clinicians, and highly talented healthcare professionals
            work as one to help state and federal partners lead the way in
            achieving better health outcomes for priority populations we serve.
          </p>
        </div> */}

        <div className="container">
          <div className="row mt-4 text-center justify-content-center g-2 mb-4 align-items-stretch">
            <h2 className="about-us-title">Our Unique Strengths & Areas of Expertise</h2>
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

        {/* Top Cards Section */}

        <div className="row mt-4 text-center justify-content-center g-2 mb-4 align-items-stretch">
          <h2 className="about-us-title">Our Core Values</h2>
          {content.map((item, index) => (
            <div key={index} className="col-md-3 py-4 g-2 col-sm-6 d-flex">
              <div className="p-4  py-5 bg-dark text-white rounded shadow w-100 d-flex flex-column justify-content-center align-items-center">
                <div className="mb-3  about-us-title ">{item.icon}</div>
                <h5 className="fw-bold about-us-title">{item.title}</h5>
                <p className="text-center ">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Title & Subtitle */}


        <div className="about-us-container  row">
          <h2 className="about-us-title">Get to Know More About Us</h2>
          <div className="about-us-grid">
            {sections.map((section, index) => (
              <div className="about-us-card" key={index}>
                <img src={section.image} alt={section.title} className="about-us-img" />
                <div className="about-us-overlay">
                  <h3>{section.title}</h3>

                  <a href={section.link} className="about-us-icon  text-decoration-none" target="_blank">➜</a>

                </div>
              </div>
            ))}
          </div>
        </div>

        

        {/* <div className="vh-50 position-relative text-center">
                        <img
                            src="/static/media/Flexiblegrowth-alignedpayment.7aed4db8572ed533a6c8.jpg" // Replace with actual image URL
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
