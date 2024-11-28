import React from 'react'
import time from '../assets/time.png';
import finance from '../assets/finance.png'

const Finance = () => {
  return (
    <section className='bg-white pt-[40px] md:pt-[80px] lg:pt-[192px]'>
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-[60px]'>
        <div className='flex flex-col items-start gap-[40px]'>
            <div className='flex flex-col items-start gap-[27px]'>
                <h2 className='text-[40px] text-[#212326] font-bold capitalize leading-[52px] '>Explore endless possibilities with<br/> <span className=' bg-clip-text text-transparent bg-[linear-gradient(99deg,_#DB0011_10.8%,_#FF6F00_37.8%,_#DB0011_75.86%)] '> Kena Finance</span></h2>
                <p className='text-[#797979] text-[18px] capitalize font-normal leading-7 font-lato max-w-[588px]'>Our platform is designed to empower you with the tools needed to navigate the exciting world of digital assets. Whether you're just beginning your journey into digital assets or an advanced user, we are here to support you every step of the way.</p>
            </div>
            <button className='flex items-center justify-center gap-2 py-3 px-4 md:gap-[10px] md:py-[18px] md:px-[21px] border-0 rounded-[300px] text-white bg-[#DB0011]'><img src={time} alt='time'/> 24/7 Support</button>
        </div>
        <div>
            <img src={finance} className='max-w-full h-auto' width="588" height="531" alt='finance'/>
        </div>

        </div>
    </div>
      
    </section>
  )
}

export default Finance
