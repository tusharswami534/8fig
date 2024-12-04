import React, { useState } from 'react';
import { ACCORDION_DATA } from '../common/Helper';
import CommonHeading from '../common/CommonHeading';

const AccordionTest = () => {
  const [openIndex, setOpenIndex] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? false : index);
  };

  return (
    <div className='bg-[#EFECE6] px-5 pb-[60px]'>
        <div className='pt-[70px] pb-6'>
            <p className='text-center text-[#76767F] font-normal text-[22px] leading-[150%] font-poppins tracking-[8%]'>still have questions?</p>
            <div className='text-center'>
            <CommonHeading Headings={'Learn more with FAQ'}/>
            </div>
        </div>
      <div className='max-w-[1240px] max-sm:max-w-[343px] mx-auto'>
        <div className='flex flex-col gap-2'>
        {ACCORDION_DATA.map((data, i) => (
            <div key={i} className='overflow-hidden min-h-[65px] max-md:min-h-[88px] border-b border-solid border-[#DDDDDF]'>
            <button
              onClick={() => toggleAccordion(i)}
              className='w-full py-5 px-4  bg-transparent font-poppins opacity-100 justify-between relative z-10 items-center text-left flex font-medium text-lg leading-[150%]'>
              {data.ButtonName}
              <div className={`${openIndex === i ? "after:!rotate-0 transition-all duration-300" : "aftrer:rotate-90"} w-3 h-0.5 bg-black relative after:w-full after:h-full after:rotate-90 after:absolute after:left-0 after:top-0 after:bg-black after:rounded-[1.5px] after:transition-all after:duration-300    `}>

              </div>
            </button>
            <div className={`${openIndex === i ? 'm-0 max-h transition-all ease-linear duration-300 p-2' : '-mt-10 max-h-0 transition-all ease-linear duration-500'} overflow-hidden text-[#0E1122]`}>
            <p >
                {data.Content}
            </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionTest;
