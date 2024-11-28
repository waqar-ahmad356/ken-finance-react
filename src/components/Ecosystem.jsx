import React from 'react'
import apple from '../assets/apple.png'
import google from '../assets/google-play-logo.png';
import management_1 from '../assets/management-1.png'
import management_2 from '../assets/management-2.png'

const Ecosystem = () => {
  return (
    <section className='mt-[40px]  md:mt-[80px] pb-8 md:pb-0 lg:mt-[192px] md:min-h-[575px]  w-full rounded-[50px]' style={{ background: 'linear-gradient(100deg, #DB0011 0.08%, #AF000E 25.03%, #FF6F00 100.54%)' }}>
    <div className='container'>
        <div className='grid grid-col-1 md:grid-cols-3 grid-areas-[item1_item2_item3] mx-auto items-center '>
        <div className='grid-area-item1 animate-moveDown hidden md:block'>
            <img src={management_1} className='max-w-full h-auto' alt='managemen-1'/>
        </div>
        <div className='flex flex-col grid-area-item2 pl-0 pt-8 md:pt-0 xl:pl-[32px] items-center justify-center gap-6'>
            <h2 className='text-center text-[36px]  text-[#fff] font-bold '>Digital Asset Management on the Go</h2>
            <p className='text-center  text-[16px] max-w-[410px] mx-auto font-lato font-normal text-[#fff] '>Download our easy to use mobile app and unlock a world of endless possibilities</p>
            <div className='flex  gap-3'>
                    <button className='flex gap-1 text-[12px] items-center bg-[#000] rounded-[7px] text-white border-[1px] text-nowrap border-[#A6A6A6] px-[10px] py-[10px]' ><img src={apple} alt='apple'/>App Store</button>
                    <button className='flex gap-1 text-[12px] items-center bg-[#000] rounded-[7px] text-white border-[1px] text-nowrap border-[#A6A6A6] px-[10px] py-[10px]' ><img src={google} alt='google'/>Google Play</button>
                    </div>
        </div>

        <div className='grid-area-item3 animate-moveUp hidden md:block'>
            <img src={management_2} className='max-w-full h-auto' alt='managemen-1'/>
        </div>
                  
            </div>
            
    </div>
     
    </section>
  
  
  )
}

export default Ecosystem
