import React from 'react'
import kena_globe from '../assets/kena-globe.png'

const Hero = () => {
  return (
    <section className='bg-hero min-h-[100vh] bg-center bg-no-repeat bg-[length:100%_100%] '>
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-1 md:gap-4  min-h-[100vh] pt-[120px] '>
            <div className='flex flex-col md:items-start items-center  gap-1  md:gap-4 '>
                <h1 className='md:text-[72px] text-center  md:text-left text-[40px] font-bold text-white text-[shadow:0px_4px_16px_rgba(219,0,17,0.15)] '>Go Bankless!</h1>
                <p className='md:text-[24px] text-[16px] text-white text-center md:text-left text-[shadow:0px_4px_16px_rgba(219,0,17,0.15)] '>Embrace the future of money and finance without intermediaries</p>
            </div>
            <div>
                <img src={kena_globe} className='max-w-full h-auto object-contain' width="599" height="513" alt='kena globe'/>
            </div>
        </div>
    </div>
      
    </section>
  )
}

export default Hero
