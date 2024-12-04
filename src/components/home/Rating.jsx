import React from 'react'
import BBBLogo from '../../assets/image/webp/bbb-logo.webp'
import TrustPilot from '../../assets/image/webp/trustpilot.webp'

const Rating = () => {
  return (
    <div className='py-[87.63px] max-md:py-[52px] bg-[#0E1122] px-5'>
        <div className='max-w-[1167px] mx-auto max-lg:flex-col items-center flex gap-[104px] max-sm:gap-[62px]'>
            <div className='flex  gap-x-[104px] max-sm:gap-[62px]'>
                <div className='flex items-center flex-col gap-2.5'>
                    <img className='max-w-[83px] max-sm:max-w-[53px]' src={BBBLogo} alt="BBBLogo" />
                    <p className='leading-[135%] font-semibold text-white text-[50px] max-md:text-[40px] max-sm:text-[31px] whitespace-nowrap'>‘A’ Rating </p>
                </div>
                <div className='flex flex-col gap-2.5'>
                   <p className='leading-[157%] font-normal text-white font-poppins text-[19px] text-center max-sm:text-xs'>Average store growth</p>
                    <p className='leading-[135%] font-semibold text-white text-[50px] max-md:text-[40px] max-sm:text-[31px] max-lg:text-center'>400% </p>
                </div>
            </div>
            <div className='flex  gap-x-[84px] max-sm:flex-row-reverse max-sm:gap-[62px]'>
                <div className='flex items-center flex-col gap-2.5'>
                    <img className='max-w-[140px] max-sm:max-w-[89px]' src={TrustPilot} alt="BBBLogo" />
                    <p className='leading-[135%] font-semibold text-white text-[50px] max-md:text-[40px] max-sm:text-[31px] text-center'>Excellent </p>
                </div>
                <div className='flex flex-col gap-2.5'>
                   <p className='leading-[157%] font-normal text-white font-poppins text-[19px] max-sm:text-xs'>Funding given</p>
                    <p className='leading-[135%] font-semibold text-white text-[50px] max-md:text-[40px] max-sm:text-[31px]'>$450M+ </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Rating
