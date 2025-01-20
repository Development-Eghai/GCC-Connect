import Img from "Components/Img/Img";
import React from "react";
import Image from "Utils/Image";
import DetailViewForm from "./DetailViewForm";
import Footer from "Components/footer";
import Icons from "Utils/Icons";

const Contact = () => {
  return (
    <div className="contactContainer vw-100">
      {/* <div className="imageContainer w-100" style={{ height: "500px" }}>
        <Img
          src={Image.ImageContainer}
          alt="Image container"
          fluid="fluid"
          className="object-fit-cover w-100 h-100"
        />
        <p className=" detailImageText text-white mb-0">
        Contact US
        </p>
        
      </div> */}
      <div
        className="imageContainer w-100 position-relative"
        style={{ height: "500px" }}
      >
        <Img
          src={Image.ImageContainer}
          alt="Image container"
          fluid="fluid"
          className="object-fit-cover w-100 h-100"
        />
        <div
          className="contactusText  d-flex justify-content-center align-items-center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        >
          Contact US
        </div>
      </div>
      <div className="d-flex justify-content-center mt-4 px-3">
        <div className="col-10">
          <p className="mb-0 fs-2 fw-bold text-wrap">
            Whether you’re exploring new business opportunities, seeking tailored
            solutions for your organization, or simply have questions, we’re here
            to help.
          </p>
        </div>
      </div>
      <div className="row my-5 mx-0">
        <div className="col-lg-4 col-12 h-100 p-3 d-flex justify-content-center">
          <div className="d-flex flex-column align-items-start justify-content-center w-75 mt-5">
            <div className="contactBox mb-3 d-flex flex-column ">
              <h4 className="mb-4">Contact Info</h4>
              <p className="mb-2 text-success fw-bold">contact@gcccoonect.com</p>
              <p>+1 1234567890</p>
            </div>
            <div className="addressBox mb-3">
              <h4 className="mb-4">Address</h4>
              <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
            </div>
            <div className="supportBox">
              <h4 className="mb-4">Support Hours</h4>
              <p className="mb-0">Mon-Fri 9:00am – 5:00pm</p>
              <p className="fw-bold" style={{ color: "#F37806" }}>*Excludes Holidays</p>
            </div>
            <div className="socialIconBox">
              <h4 className="mb-4">Social Media</h4>
              <div className="d-flex gap-4">
                <span>{Icons.facebookIconBlack}</span>
                <span>{Icons.twiterIconblack}</span>
                <span>{Icons.linkedinIconBlack}</span>
              </div>
            </div>



          </div>
        </div>
        <div className="col-lg-8 col-12 p-3">
          <DetailViewForm />
        </div>
      </div>
      <div className="footerContainer col-12">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
