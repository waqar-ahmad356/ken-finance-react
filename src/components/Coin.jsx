import React from 'react'
import bitcoin from '../assets/bitcoin.png';

const Coin = () => {
  return (
    <section className='bg-white pt-[40px] md:pt-[80px] lg:pt-[192px]'>
    <div className='container'>
        <div className='flex flex-col md:flex-row  items-center gap-8 md:gap-[60px] '>
        
        <div>
            <img src={bitcoin} className='max-w-full h-auto' width="588" height="531" alt='finance'/>
        </div>
        <div className='flex flex-col items-start gap-[40px]'>
            <div className='flex flex-col items-start gap-[27px] '>
                <h2 className='text-[40px] text-[#212326] font-bold capitalize leading-[52px] w-full '>Local and Global Payment with<span className=' bg-clip-text text-transparent bg-[linear-gradient(99deg,_#DB0011_10.8%,_#FF6F00_37.8%,_#DB0011_75.86%)] '> Stablecoins</span></h2>
                <p className='text-[#797979] text-[18px] capitalize font-normal leading-7 font-lato max-w-[588px]'>Our platform is designed to empower you with the tools needed to navigate the exciting world of digital assets. Whether you're just beginning your journey into digital assets or an advanced user, we are here to support you every step of the way.</p>
            </div>
            
        </div>

        </div>
    </div>
      
    </section>
  )
}

export default Coin
