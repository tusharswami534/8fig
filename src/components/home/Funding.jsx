import React from 'react'
import CommonHeading from '../common/CommonHeading'
import FundingImage from '../../assets/image/webp/funding-image.webp'

const Funding = () => {
  return (
    <div  className='px-5'>
        <div className='max-w-[1166px] mx-auto max-lg:flex-col max-lg:gap-11 flex justify-between py-12'>
            <div className='flex flex-col max-lg:items-center justify-center'>
                <div className='max-w-[401px] max-sm:max-w-[284px] max-lg:text-center max-lg:mx-auto'>
                <CommonHeading Headings={'Become an 8 figure seller with AI funding'}/>
                </div>
                <button className='py-[9px] max-sm:max-w-[122px] max-sm:py-[7px] justify-center items-center flex max-w-[173px] whitespace-nowrap px-11 mt-[30px] bg-[#4C57FF] text-white font-poppins font-medium leading-[150%] rounded-3xl hover:bg-white hover:text-[#4C57FF] border border-solid border-[#4C57FF] transition-all duration-300'>
                Apply now
                </button>
            </div>
            <div>
                <img className='max-sm:min-w-[417px] max-sm:translate-x-[-78px]' src={FundingImage} alt="FundingImage" />
            </div>
        </div>
    </div>
  )
}

export default Funding
