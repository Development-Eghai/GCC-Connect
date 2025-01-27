import React from 'react'
import Icons from 'Utils/Icons'

const CoreCard = ({ data, key }) => {
  return (
    <div className="coreCard d-flex flex-column justify-content-between p-4" >
      <div className="iconBox mb-3 d-flex  justify-content-start"><span>{Icons.manArrowIcon}</span></div>
      <hr></hr>

      <div className="textBox">

        <h4 className='globalHead text-wrap mb-3'>{data.title}</h4>
        <p className='globaljustify text-secondary'>{data.content}</p>
      </div>

    </div>
  )
}

export default CoreCard