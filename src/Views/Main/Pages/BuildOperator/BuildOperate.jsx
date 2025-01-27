import React from 'react'
import Icons from 'Utils/Icons'

const BuildOperate = () => {
    return (
        <div className='p-3'>
            <div className="tittleContainer mb-5">
                <div className='globalTitleBtn d-flex w-75 p-3 rounded-4'>
                    <p className='mb-0 me-3 fs-3 fw-bold text-white'>Phase 3:</p>
                    <p className='mb-0 fs-3 fw-bold '>GCC Operate</p>
                </div>

            </div>
            <div className="headerContainer px-4">
                <div className='col-12 d-flex '>
                    <div className='col-2 d-flex align-items-center'>
                        <span>{Icons.manArrowIcon}</span>
                    </div>
                    <div className='col-10'>
                        <h4 className='text-success fw-bold'>Purpose</h4>
                        <p className='fw-bold fs-5'>Manage and optimize GCC operations on your behalf.</p>
                    </div>
                </div>

            </div>
            <hr />
            <div className="BodyContainer col-12 d-flex flex-wrap">
                <div className="col-4 d-flex flex-column p-3">
                    <div >
                <span>{Icons.manArrowIcon}</span>
                </div>
                    <hr />

                    <div>
                        <h5 className='globalHead' >Control/SOW Setup </h5>
                        <p className="text-secondary globaljustify mb-0 text-center">
                            Finalize service agreements and scope of work.</p>
                    </div>
                </div>
                <div className="col-4 d-flex flex-column p-3">
                    <div >
                <span>{Icons.manArrowIcon}</span>
                </div>
                    <hr />

                    <div>
                        <h5 className='globalHead'>Project Initiation</h5>
                        <p className="text-secondary globaljustify mb-0 text-center">
                            Launch and manage GCC operations.</p>
                    </div>
                </div>
                <div className="col-4 d-flex flex-column p-3">
                    <div >
                <span>{Icons.manArrowIcon}</span>
                </div>
                    <hr />

                    <div className=''>
                        <h5 className='globalHead'>Resource Mangement</h5>
                        <p className="text-secondary globaljustify mb-0 text-center">
                            Ensure optimal use of people, processes, and technology.</p>
                    </div>
                </div>
                <div className="col-4 d-flex flex-column p-3">
                    <div >
                <span>{Icons.manArrowIcon}</span>
                </div>
                    <hr />

                    <div className=''>
                        <h5 className='globalHead'>Risk Mangement</h5>
                        <p className="text-secondary globaljustify mb-0 text-center">
                            Address challenges proactively to maintain business continuity.</p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default BuildOperate