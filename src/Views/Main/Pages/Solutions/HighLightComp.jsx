import React from 'react'
import DetailViewForm from '../DetailViewForm'
import Icons from 'Utils/Icons'

const HighLightComp = () => {
  return (
    <div className="detailsForm-Container  d-flex justify-content-center mt-3 mb-5">
    <div className="detailsForm col-11 h-100 d-flex flex-column flex-lg-row rounded-5">
      <div className="col-12 col-lg-4 p-5">
        <div className="mt-5">
          <p className="text-white fs-5 fw-bold mb-4">
          Experience Pixeladvant Expertsie 
          </p>
          <p className="text-white fs-5 fw-bold mb-4">
          Let our trusted expert's how you how we can help in your GCC journey: 
          </p>
          <ul className="detailsForm-List globaljustify p-0 m-0">
            <li className="d-flex my-3 align-items-start">
              <span>{Icons.tickYellow}</span>
              <p className="mb-0 ms-3 text-white detailsForm-List-text">Beyond proven technologies, we provide a new way of thinking</p>
            </li>
            <hr className="text-white opacity-100 my-2" />
            <li className="d-flex my-3 align-items-start">
              <span>{Icons.tickYellow}</span>
              <p className="mb-0 ms-3 text-white detailsForm-List-text">Powerful solutions designed to solve your GCC needs.</p>
            </li>
            <hr className="text-white opacity-100 my-2" />
            <li className="d-flex my-3 align-items-start">
              <span>{Icons.tickYellow}</span>
              <p className="mb-0 ms-3 text-white detailsForm-List-text">Quickly adapt to changing GCC business requirements with a flexible, configurable system </p>
            </li>
            <hr className="text-white opacity-100 my-2" />
            <li className="d-flex my-3 align-items-start">
              <span>{Icons.tickYellow}</span>
              <p className="mb-0 ms-3 text-white detailsForm-List-text">Streamline manual, time-consuming processes with our modernized approach</p>
            </li>
            <hr className="text-white opacity-100 my-2" />
            <li className="d-flex my-3 align-items-start">
              <span>{Icons.tickYellow}</span>
              <p className="mb-0 ms-3 text-white detailsForm-List-text">Utilize a team of GCC experts with a deep collective of knowledge and support </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="col-12 col-lg-8 p-3 p-md-5 mt-5 ">
        <DetailViewForm />
      </div>
    </div>
   
  </div>
  )
}

export default HighLightComp