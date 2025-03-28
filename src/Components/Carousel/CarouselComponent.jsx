import React from "react";
import Carousel from "react-bootstrap/Carousel";

const CarouselComponent = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section>
      <div className="container-fluid px-0">
        <Carousel interval={null} className=" py-5 ">
          <Carousel.Item>
            <div className="carousel-item-cls">
              <div className="col-12 col-md-8">
                <p>Putting the right solutions and methods in place!</p>
                <h1 className="fw-bold">Empowering Global Innovation Centers</h1>
                <p >
                  GCC View360 product provides end-to-end solutions that are required by companies for setting up
                  successful innovation centers in India. We will partner with companies at every stage of this process.
                </p>
                <div className="d-flex mt-4 flex-wrap col-12 justify-content-start gap-3">
                  <div className="p-2 col-12 col-md-6 col-lg-4">
                    <button
                      className="contact-btn-borderfill w-100 text-nowrap text-decoration-none"
                      onClick={() => scrollToSection("about")}
                    >
                      About Us
                    </button>
                  </div>
                  <div className="p-2 col-12 col-md-6 col-lg-4">
                    <button
                      className="contact-btn-border w-100 text-nowrap text-decoration-none"
                      onClick={() => scrollToSection("experience")}
                    >
                      Explore Models
                    </button>
                  </div>
                </div>


              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-cls">
              <div className="col-12 col-md-8">
                <h1 className="fw-bold">Strategic Models for Successful GCC Setup</h1>
                <p>
                  We offer structured models tailored to help businesses establish and scale their Global Capability
                  Centers (GCCs) efficiently. From Build-Operate-Transfer (BOT) to Fully Owned Subsidiary setups, our
                  approach ensures strategic execution and operational excellence.
                </p>
                <div className="d-flex  mt-4 flex-wrap col-12 justify-content-start gap-3">
                  <div className="p-2 col-12 col-md-6 col-lg-4">
                    <button
                      className="contact-btn-borderfill w-100 text-nowrap text-decoration-none"
                      onClick={() => scrollToSection("experience")}
                    >
                      Explore Models
                    </button>
                  </div>
                  <div className="p-2 col-12 col-md-6 col-lg-4">
                    <button
                      className="contact-btn-border w-100 text-nowrap text-decoration-none"
                      onClick={() => scrollToSection("solutions")}
                    >
                      Discover Solutions
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carousel-item-cls">
              <div className="col-12 col-md-8">
                <h1 className="fw-bold">Comprehensive Solutions for GCC Development</h1>
                <p>
                  GCC Connect delivers a suite of solutions, including talent acquisition, infrastructure setup,
                  compliance support, and operational excellence strategies. We simplify the GCC journey, allowing
                  businesses to focus on innovation and growth.
                </p>

                <div className="d-flex mt-4 flex-wrap col-12 justify-content-start gap-3">
                  <div className="p-2 col-12 col-md-6 col-lg-4">
                    <button
                      className="contact-btn-borderfill w-100 text-nowrap text-decoration-none"
                      onClick={() => scrollToSection("solutions")}
                    >
                      Discover Solutions
                    </button>
                  </div>
                  <div className="p-2 col-12 col-md-6 col-lg-4">
                    <button
                      className="contact-btn-border w-100 text-nowrap text-decoration-none"
                      onClick={() => scrollToSection("about")}
                    >
                      About Us
                    </button>
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
