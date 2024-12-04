import React from 'react'
import Amazon from '../../assets/image/webp/amazon.webp'
import Shopify from '../../assets/image/webp/shopify.webp'
import Ebay from '../../assets/image/webp/ebay.webp'
import Bigcommerce from '../../assets/image/webp/bigcommerce.webp'

const SupportedPlatforms = () => {
  return (
    <div className='bg-[#0E1122] max-md:px-10'>
        <div className='pt-[46px] pb-[55px] max-w-[739px] mx-auto flex gap-[52px] flex-wrap justify-center'>
            <div>
                <p className='uppercase font-semibold text-white tracking-[8%] text-sm leading-[150%] font-poppins'>main supported platforms</p>
            </div>
               <div className='flex gap-[52px] justify-center flex-wrap'>
               <img src={Amazon} alt="Amazon" />
                <img src={Shopify} alt="Shopify" />
                <img src={Ebay} alt="Ebay" />
                <img src={Bigcommerce} alt="Ebay" />
               </div>
        </div>
    </div>
  )
}

export default SupportedPlatforms
