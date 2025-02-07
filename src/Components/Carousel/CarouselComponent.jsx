import DomainExperienceSection from "Components/DomainExperienceSection";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import SolutionsOfferings from "Views/Main/Pages/SolutionHome";

const CarouselComponent = () => {
  return (
    <section>
      <div className="container-fluid px-0  ">
        <Carousel interval={null} className=" py-5 px-5">
          <Carousel.Item>
            <div className="carousel-item-cls">
              <div className="col-12 col-md-8">
                <p>Putting the right solutions and methods in place!</p>
                <h1 className=" fw-bold">
                  Empowering Global Innovation Centers
                </h1>
                <p className="">
                  GCC View360 product provides end to end solutions that are
                  required by companies for setting up successful innovation
                  centers in India. We will partner with companies at every
                  stage of this process
                </p>
                <div className="d-flex col-12 justify-content-start">
                  {/* <div className="p-2 col-6 col-lg-3">
                                        <button className="contact-btn w-100 ">Our Services</button>
                                    </div> */}

                  <div className="p-2 col-6 col-lg-3">
                    <Link
                      to="/about-page"
                      className="contact-btn-border  w-100 text-decoration-none"
                    >
                      About Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-cls">
              <div className="col-12 col-md-8">
                {/* <p>Putting the right solutions and methods in place!</p> */}
                <h1 className=" fw-bold">
                  Strategic Models for Successful GCC Setup
                </h1>
                <p className="">
                  We offer structured models tailored to help businesses
                  establish and scale their Global Capability Centers (GCCs)
                  efficiently. From Build-Operate-Transfer (BOT) to Fully Owned
                  Subsidiary setups, our approach ensures strategic execution
                  and operational excellence.
                </p>
                <div className="d-flex col-12 justify-content-start">
                  {/* <div className="p-2 col-6 col-lg-3">
                                        <button className="contact-btn w-100 ">Our Services</button>
                                    </div> */}
                  <div className="p-2 col-6 col-lg-3">
                    <Link
                      to="/details/initiation"
                      className="contact-btn-border  w-100 text-decoration-none"
                    >
                      Explore Models
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-cls">
              <div className="col-12 col-md-8">
                {/* <p>Putting the right solutions and methods in place!</p> */}
                <h1 className=" fw-bold">
                  Comprehensive Solutions for GCC Development
                </h1>
                <p className="">
                  GCC Connect delivers a suite of solutions, including talent
                  acquisition, infrastructure setup, compliance support, and
                  operational excellence strategies. We simplify the GCC
                  journey, allowing businesses to focus on innovation and
                  growth.
                </p>
                <div className="d-flex col-12 justify-content-start">
                  {/* <div className="p-2 col-6 col-lg-3">
                                        <button className="contact-btn w-100 ">Our Services</button>
                                    </div> */}
                  <div className="p-2 col-6 col-lg-3">
                    <Link
                      to="/consulting-services"
                      className="contact-btn-border  w-100 text-decoration-none"
                    >
                      Discover Solutions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default CarouselComponent;
