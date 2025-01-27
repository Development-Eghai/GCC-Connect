import React from 'react'
import Icons from 'Utils/Icons'

const BuildInitiation = () => {
    return (
        <div className='p-3'>
            <div className="tittleContainer mb-5">
                <div className='globalTitleBtn d-flex w-75 p-3 rounded-4'>
                    <p className='mb-0 me-3 fs-3 fw-bold text-white'>Phase 1:</p>
                    <p className='mb-0 fs-3 fw-bold '>GCC Initiation</p>
                </div>

            </div>
            <div className="headerContainer px-4">
                <div className='col-12 d-flex '>
                    <div className='col-2 d-flex align-items-center'>
                        <span>{Icons.manArrowIcon}</span>
                    </div>
                    <div className='col-10'>
                        <h4 className='text-success fw-bold'>Purpose</h4>
                        <p className='fw-bold fs-5'>Lay the groundwork with strategic planning and expert insights.</p>
                    </div>
                </div>

            </div>
            <hr />
            <div className="BodyContainer col-12 d-flex">
                <div className="col-4 d-flex flex-column p-3">
                    <div >
                        <span>{Icons.manArrowIcon}</span>
                    </div>
                    <hr />

                    <div>
                        <h5 className='globalHead' >Design & Strategy</h5>
                        <p className='text-secondary globaljustify mb-0 text-center' >Create a roadmap aligned with your business objectives.</p>
                    </div>
                </div>
                <div className="col-4 d-flex flex-column p-3">
                    <div >
                        <span>{Icons.manArrowIcon}</span>
                    </div>
                    <hr />

                    <div>
                        <h5 className='globalHead'>Expert Recommendation</h5>
                        <p className='text-secondary globaljustify mb-0 text-center'>Leverage industry knowledge to guide your GCC setup</p>
                    </div>
                </div>
                <div className="col-4 d-flex flex-column p-3">
                    <div >
                        <span>{Icons.manArrowIcon}</span>
                    </div>
                    <hr />

                    <div className=''>
                        <h5 className='globalHead'>Project Plan</h5>
                        <p className='text-secondary globaljustify mb-0 text-center '>Define clear milestones and timelines for excecution</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default BuildInitiation