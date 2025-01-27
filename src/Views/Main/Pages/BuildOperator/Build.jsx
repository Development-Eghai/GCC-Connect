import React from 'react'
import Icons from 'Utils/Icons'

const Build = () => {
    return (
        <div className='p-3'>
            <div className="tittleContainer mb-5">
                <div className='globalTitleBtn d-flex w-75 p-3 rounded-4'>
                    <p className='mb-0 me-3 fs-3 fw-bold text-white'>Phase 2:</p>
                    <p className='mb-0 fs-3 fw-bold '>GCC Build</p>
                </div>

            </div>
            <div className="headerContainer px-4">
                <div className='col-12 d-flex '>
                    <div className='col-2 d-flex align-items-center'>
                        <span>{Icons.manArrowIcon}</span>
                    </div>
                    <div className='col-10'>
                        <h4 className='text-success fw-bold'>Purpose</h4>
                        <p className='fw-bold fs-5'>Set up the GCC framework with operational readiness.</p>
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
                        <h5 className='globalHead' >Legal Entity Setup</h5>
                        <p className='text-secondary globaljustify mb-0 text-center' >Establish a compliant legal framework for your GCC.</p>
                    </div>
                </div>
                <div className="col-4 d-flex flex-column p-3">
                    <div >
                        <span>{Icons.manArrowIcon}</span>
                    </div>            <hr />

                    <div>
                        <h5 className='globalHead'>Workspace Design</h5>
                        <p className='text-secondary globaljustify mb-0 text-center'>Develop a functional and engaging workspace.</p>
                    </div>
                </div>
                <div className="col-4 d-flex flex-column p-3">
                    <div >
                        <span>{Icons.manArrowIcon}</span>
                    </div>            <hr />

                    <div className=''>
                        <h5 className='globalHead'>Leadership Hiring</h5>
                        <p className='text-secondary globaljustify mb-0 text-center '>Recruit experienced leaders and build a high-performing team.</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Build