import { Button } from 'bootstrap'
import React from 'react'
import Icons from 'Utils/Icons'

const GlobalInitiation = () => {
  return (
    <div className='p-3'>
        <div className="tittleContainer mb-5">
            <div className='globalTitleBtn d-flex w-100 w-md-75 p-3 rounded-4'>
             <p className='mb-0 me-3 fs-3 fw-bold text-white'>Phase 1:</p> 
             <p className='mb-0 fs-3 fw-bold '>GCC Initiation</p>
            </div>

        </div>
        <div className="headerContainer px-lg-4">
            <div className='col-12 d-flex '>
            <div className='col-4 col-md-2 col-lg-3 d-flex align-items-center'>
                <span>{Icons.manArrowIcon}</span>
            </div>
            <div className='col-8 col-md-10 col-lg-9'>
                <h4 className='text-success fw-bold'>Goal</h4>
                <p className='fw-bold fs-5'>Establish a strong foundation with a clear strategy and roadmap.</p>
            </div>
            </div>

        </div>
        <hr />
        <div className="BodyContainer col-12 d-flex flex-column flex-lg-row ">
            <div className="col-12 col-lg-4 d-flex flex-column align-items-center p-3">
                <div >
                <span>{Icons.manArrowIcon}</span>
                </div>
                <hr />
             
                <div>
                    <h5 className='fw-bold text-center' >Design & Strategy</h5>
                    <p className='text-secondary mb-0 text-center' >Creating a customized blueprint that aligns with your business vision.</p>
                </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-column align-items-center p-3">
                <div >
                <span>{Icons.manArrowIcon}</span>
                </div>
                <hr />
             
                <div>
                    <h5 className='fw-bold text-center'>Scalable solutions to align with business growth</h5>
                    <p className='text-secondary mb-0 text-center'>Offering insights from industry specialists to streamline your GCC setup.</p>
                </div>
            </div>
            <div className="col-12 col-lg-4 d-flex flex-column align-items-center p-3">
                <div >
                <span>{Icons.manArrowIcon}</span>
                </div>
                <hr />
             
                <div className=''>
                    <h5 className='fw-bold text-center'>Roadmap & Project Plan</h5>
                    <p className='text-secondary mb-0 text-center '>Developing actionable plans for a smooth transition to GCC operations.</p>
                </div>
            </div>
            

        </div>

    </div>
  )
}

export default GlobalInitiation