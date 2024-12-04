import React from 'react'
import Evaluation from '../../assets/image/webp/evaluation-image.webp'
import ForeCasting from '../../assets/image/webp/forecasting-image.webp'
import CommonHeading from '../common/CommonHeading'
const Revenue = () => {
  return (
    <div className='bg-[#EFECE6] px-5 overflow-hidden'>
    <div className='max-w-[944px] mx-auto py-[120px] '>
        <div className='flex max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center gap-[100px]'>
            <div className='relative max-sm:translate-x-[50px]'>
                <img className='max-sm:min-w-[387px] ' src={Evaluation} alt="Evaluation" />
                <img className='absolute top-1/2 left-[-18%] max-sm:max-w-[175px] -translate-y-1/2 max-lg:top-[11%] max-lg:left-[-10%]' src={ForeCasting} alt="ForeCasting" />
            </div>
            <div>
                <div className='size-9 rounded-full bg-[#0E1122] flex justify-center items-center'>
                    <p className='text-white font-semibold text-[28.06px]'>1</p>
                </div>
                <div className='max-w-[364px] mt-3.5'>
                    <CommonHeading Headings={'Get an AI evaluation of your supply chain needs'}/>
                </div>
                <div className='max-w-[333px] mt-1'>
                <p className='leading-[130%] font-medium text-[#0E1122] font-poppins text-[22px]'>By analyzing your sales velocity and growth potential.</p>
                </div>
                <button className='py-1.5 mt-5 px-2.5 text-white font-medium bg-[#4C57FF] rounded-3xl hover:bg-[#0E1122] hover:text-[#4C57FF] border border-solid border-[#4C57FF] transition-all duration-300 font-poppins '>
                Apply now
                </button>
            </div>
        </div>
    </div>
</div>
  )
}

export default Revenue
