import React from 'react'
import Icons from "Utils/Icons";

const ManagedRelationship = () => {
  return (
    <div className='p-3'>
    <div className="tittleContainer mb-5">
        <div className='globalTitleBtn d-flex w-75 p-3 rounded-4'>
         <p className='mb-0 me-3 fs-3 fw-bold text-white'>1.</p> 
         <p className='mb-0 fs-3 fw-bold '>Client & Employee Relationship</p>
        </div>

    </div>
    <div className="headerContainer px-4">
        <div className='col-12 d-flex '>
        <div className='col-2 d-flex align-items-center'>
            <span>{Icons.manArrowIcon}</span>
        </div>
        <div className='col-10'>
            <p className='fw-bold fs-5'>Establish a strong foundation with a clear strategy and roadmap.</p>
        </div>
        </div>
        <hr className='text-success'  />
        <div className='col-12 d-flex '>
        <div className='col-2 d-flex align-items-center'>
            <span>{Icons.manArrowIcon}</span>
        </div>
       
        <div className='col-10'>
            <p className='fw-bold fs-5'>GCC View 360 acts as the operational partner, facilitating 
            resource management.</p>
        </div>
        </div>

    </div>
    <hr className='text-success'  />
   

</div>
   
  )
}

export default ManagedRelationship