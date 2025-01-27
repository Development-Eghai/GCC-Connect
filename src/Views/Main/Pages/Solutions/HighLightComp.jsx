import React from 'react'
import DetailViewForm from '../DetailViewForm'
import Icons from 'Utils/Icons'

const HighLightComp = () => {
  return (
    <div className="detailsForm-Container  mt-3 d-flex justify-content-center mb-5 ">
    <div className="detailsForm col-11 h-100 d-flex flex-column flex-lg-row rounded-5 mt-4">
      <div className="col-12 col-lg-4 p-5">
        <div className="mt-5">
          <p className="text-white fs-4 fw-bold mb-4">
            Whether you’re exploring new business opportunities, seeking
            tailored solutions for your organization, or simply have
            questions, we’re here to help.
          </p>
          <ul className="detailsForm-List p-0 m-0">
            <li className="d-flex my-3 align-items-start">
              <span>{Icons.tickYellow}</span>
              <p className="mb-0 ms-3 text-white">Highlight 1</p>
            </li>
            <hr className="text-white opacity-100 my-2" />
            <li className="d-flex my-3 align-items-start">
              <span>{Icons.tickYellow}</span>
              <p className="mb-0 ms-3 text-white">Highlight 2</p>
            </li>
            <hr className="text-white opacity-100 my-2" />
            <li className="d-flex my-3 align-items-start">
              <span>{Icons.tickYellow}</span>
              <p className="mb-0 ms-3 text-white">Highlight 3</p>
            </li>
            <hr className="text-white opacity-100 my-2" />
            <li className="d-flex my-3 align-items-start">
              <span>{Icons.tickYellow}</span>
              <p className="mb-0 ms-3 text-white">Highlight 4</p>
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