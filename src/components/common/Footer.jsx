import React from 'react'
import LogoImage from '../../assets/image/webp/logo.webp'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './Icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='bg-[#0E1122] pt-[54px] px-5 max-sm:px-10 pb-[63px] max-sm:pb-7'>
        <div className='max-w-[1335px] flex items-center mx-auto'>
               <a href="/">
               <img src={LogoImage} alt="LogoImage" /></a>
               <p className='max-w-[163px] ml-[77px] text-[#76767F] font-poppins font-medium tracking-[8%] leading-[150%] text-sm max-lg:hidden'>8fig, 1717 W 6th St, Austin, Texas</p>
               <p className='ml-[212px] text-[#76767F] font-poppins font-medium tracking-[8%] leading-[150%] text-sm max-lg:hidden flex items-center gap-1 uppercase'><span className='!text-[23px] flex '>©</span> {currentYear} 8fig - All Rights Reserved</p>
               <div className='flex items-center gap-9 max-lg:gap-6 ml-auto'>
                    <a className='facbook-icon' target='_blank' href="https://www.facebook.com/">
                    <FacebookIcon/>
                    </a>
                    <a className='instagram-icon' target='_blank' href="https://www.instagram.com/">
                    <InstagramIcon/>
                    </a>
                    <a className='linked-icon' target='_blank' href="https://linked.com/">
                    <LinkedinIcon/>
                    </a>
                    <a className='twitter-icon' target='_blank' href="https://x.com/i/flow/login">
                    <TwitterIcon/>
                    </a>
               </div>
        </div>
               <p className='max-w-[163px] mt-3.5 text-[#76767F] font-poppins font-medium tracking-[8%] leading-[150%] text-sm lg:hidden'>8fig, 1717 W 6th St, Austin, Texas</p>
               <p className='text-center mt-[63px] text-[#76767F] font-poppins font-medium tracking-[8%] leading-[150%] text-sm lg:hidden flex max-sm:justify-center uppercase'><span className='!text-[23px] flex '>©</span> {currentYear} 8fig - All Rights Reserved</p>
    </div>
  )
}

export default Footer
