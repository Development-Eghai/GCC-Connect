import React from 'react'
import Icons from "Utils/Icons";


const ManagedRecord = () => {
  return (
    <div className='p-3'>
    <div className="tittleContainer mb-5">
        <div className='globalTitleBtn d-flex w-75 p-3 rounded-4'>
         <p className='mb-0 me-3 fs-3 fw-bold text-white'>2.</p> 
         <p className='mb-0 fs-3 fw-bold '>Employee on Record (EOR) </p>
        </div>

    </div>
    <div className="headerContainer px-4">
        <div className='col-12 d-flex '>
        <div className='col-2 d-flex align-items-center'>
            <span>{Icons.manArrowIcon}</span>
        </div>
        <div className='col-10'>
            <p className='fw-bold fs-5'>Employees are legally employed by GCC View 360.</p>
        </div>
        </div>
        <hr className='text-success'  />
        <div className='col-12 d-flex '>
        <div className='col-2 d-flex align-items-center'>
            <span>{Icons.manArrowIcon}</span>
        </div>
       
        <div className='col-10'>
            <p className='fw-bold fs-5'>We handle payroll, benefits, tax compliance, and regulatory matters.
           </p>
        </div>
        </div>
        <hr className='text-success'  />
        <div className='col-12 d-flex '>
        <div className='col-2 d-flex align-items-center'>
            <span>{Icons.manArrowIcon}</span>
        </div>
       
        <div className='col-10'>
            <p className='fw-bold fs-5'>This ensures seamless management of employment complexities.
           </p>
        </div>
        </div>
        <hr className='text-success'  />

    </div>
    
   

</div>
   
  )
}

export default ManagedRecord