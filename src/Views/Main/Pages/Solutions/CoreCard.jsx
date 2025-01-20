import React from 'react'
import Icons from 'Utils/Icons'

const CoreCard = ({data,key}) => {
  return (
    <div className="coreCard d-flex flex-column justify-content-between p-4" >
      <div className="iconBox mb-5"><span>{Icons.manArrowIcon}</span></div>
      <div className="textBox">
        <h4 className='textHeader fw-bold text-wrap mb-3'>{data.title}</h4>
        <p className='coreCardText text-secondary'>{data.content}</p>
      </div>

    </div>
  )
}

export default CoreCard