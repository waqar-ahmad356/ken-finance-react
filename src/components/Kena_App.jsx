import React from 'react'
import KenaApp from '../assets/kena-app.png';
import forward_icon from '../assets/forward.png';
import backward_icon from '../assets/backward.png';


const Kena_App = () => {
  return (
    <section className='mt-[80px] md:mt-[80px] lg:mt-[120px] xl:mt-[192px] bg-white'>
    <div className='container'>
        <div className='flex flex-col-reverse items-center md:flex-row md:gap-[120px] lg:gap-[256px] gap-8'>
            <div className='flex flex-col items-start md:gap-[32px] gap-2 lg:pl-[90px]'>
            <p className='text-[32px] text-[#db0011] font-semibold'>Step 1</p>
                <h2 className='md:text-[64px] text-[40px]  text-[#000] font-normal'>Download App</h2>
                <div className='flex items-center md:gap-6 gap-4 ' >
                
                    <img src={backward_icon} className='max-w-full h-auto' width="48" height="48" alt='backward'/>
                    <img src={forward_icon} className='max-w-full h-auto' width="48" height="48" alt='forward'/>
                    
                </div>
            </div>
            <div>
                <img src={KenaApp} className='max-w-full h-auto' alt='kena-app'/>
            </div>
        </div>
    </div>
      
    </section>
  )
}

export default Kena_App
