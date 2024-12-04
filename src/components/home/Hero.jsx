import React from 'react'
import HeroBgImage from '../../assets/image/webp/hero-bg-image.webp'
import Logo from '../../assets/image/webp/logo.webp'
import HeroImage from '../../assets/image/webp/hero-section-image.webp'
import CommonText from '../common/CommonText'
import HeroSmImage from '../../assets/image/webp/hero-sm-image.webp'

const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${HeroBgImage})`}} className='bg-cover bg-center bg-no-repeat p-4 overflow-hidden'>
            <div className='py-6'>
                <a href="/">
                <img src={Logo} alt="logo" /></a>
            </div>
            <div className='min-h-[771px] w-full flex justify-center items-center'>
               <div className='max-w-[1140px] w-full h-full mx-auto'>
               <div className='flex flex-wrap max-lg:gap-y-[150px] max-lg:flex-col-reverse'>
                    <div className='w-9/12 max-lg:w-full'>
                    <p className='font-bold leading-[106%]  text-white max-w-[478px] text-[62.12px] max-md:text-[47px] max-xl:text-[56px]'>Get AI funding for your store</p>
                    <div className='max-w-[408px] my-6'>
                        <CommonText Description={'AI technology that predicts, plans, and protects your cash flow.'}/>
                    </div>
                    <button className='py-[9px] px-11 max-sm:px-[23px] max-sm:text-sm bg-[#4C57FF] text-white rounded-3xl hover:bg-white hover:text-[#4C57FF] border border-solid border-[#4C57FF] transition-all duration-300 font-poppins font-medium'>
                    Get funded
                    </button>
                    </div>
                    <div className='w-3/12'>
                        <img width={'100%'} className='min-w-[327px] max-md:hidden' src={HeroImage} alt="HeroImage" />
                        <img className='md:hidden min-w-[201px] translate-x-[179px]' src={HeroSmImage} alt="herosmimage" />
                    </div>
                </div>    
               </div>
            </div>
    </div>
  )
}

export default Hero
