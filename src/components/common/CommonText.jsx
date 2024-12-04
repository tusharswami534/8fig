import React from 'react'

const CommonText = ({Description}) => {
  return (
    <div>
        <p className='leading-[130%] font-medium text-white font-poppins text-[22px] max-sm:text-lg max-lg:text-xl'>{Description }</p>
    </div>
  )
}

export default CommonText
