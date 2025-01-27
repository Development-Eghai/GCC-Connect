import React from "react";
import Icons from "Utils/Icons"

const DetailViewForm = () => {
  return (
    <div className="bg-white p-3 p-sm-5 rounded-4">
      <h4 className="px-sm-3 fw-bold">
        Fill out the form below, and our team will connect with you as soon as
        possible.
      </h4>
      <form className="row g-3">
        <div className="col-md-6 p-2 px-sm-3">
          <label for="inputFirstName" className="form-label ">
            First Name
          </label>
          <input
            type="email"
            className="form-control py-3"
            id="inputFirstName"
          />
        </div>
        <div className="col-md-6 p-2 px-3">
          <label for="inputLastName" className="form-label ">
            Last Name
          </label>
          <input
            type="password"
            className="form-control py-3"
            id="inputLastName"
          />
        </div>
        <div className="col-md-6 p-2 px-3">
          <label for="inputOrganization" className="form-label ">
            Organization
          </label>
          <input
            type="email"
            className="form-control py-3"
            id="inputOrganization"
          />
        </div>
        <div className="col-md-6 p-2 px-3">
          <label for="inputEmail" className="form-label ">
            Official Email Address
          </label>
          <input
            type="password"
            className="form-control py-3"
            id="inputEmail"
          />
        </div>
        <div className="col-md-6 p-2 px-3">
          <label for="inputPhoneNumber" className="form-label ">
            Phone Number
          </label>
          <input
            type="email"
            className="form-control py-3"
            id="inputPhoneNumber"
          />
        </div>
        <div className="col-md-6 p-2 px-3">
          <label for="inputLocation" className="form-label ">
            Location
          </label>
          <input
            type="password"
            className="form-control py-3"
            id="inputLocation"
          />
        </div>
        <div class="mb-3 px-3">
          <label for="inputMessage" class="form-label">
            Message
          </label>
          <textarea class="form-control" id="inputMessage" rows="3"></textarea>
        </div>
        <p className="px-3 fw-bold">
          I understand & agree to the Privacy Policy.
        </p>

        <div className="px-3 col-12">
        <button className="col-12 py-4 FormBtn rounded-3" type="button">Submit<span className="ms-2">{Icons.arrowIcon}</span></button>
        </div>
       
      </form>
    </div>
  );
};

export default DetailViewForm;
