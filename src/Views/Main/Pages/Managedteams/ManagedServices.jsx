import React from 'react'
import Icons from "Utils/Icons";

const ManagedServices = () => {
  return (
    <div className='p-3'>
    <div className="tittleContainer mb-5">
        <div className='globalTitleBtn d-flex w-75 p-3 rounded-4'>
         <p className='mb-0 me-3 fs-3 fw-bold text-white'>3.</p> 
         <p className='mb-0 fs-3 fw-bold '>Managed Shared Services</p>
        </div>

    </div>
    <div className="headerContainer px-4">
        <div className='col-12 d-flex '>
        <div className='col-2 d-flex align-items-center'>
            <span>{Icons.manArrowIcon}</span>
        </div>
        <div className='col-10'>
            <p className='fw-bold fs-5'>Compliance management, HR functions, and shared administrative resources are centralized under GCC View 360.</p>
        </div>
        </div>
        <hr className='text-success'  />
        <div className='col-12 d-flex '>
        <div className='col-2 d-flex align-items-center'>
            <span>{Icons.manArrowIcon}</span>
        </div>
       
        <div className='col-10'>
            <p className='fw-bold fs-5'>Our team ensures smooth operations while maintaining compliance with local and international regulations.</p>
        </div>
        </div>
        <hr className='text-success'  />

    </div>
   
   

</div>
    
  )
}

export default ManagedServices