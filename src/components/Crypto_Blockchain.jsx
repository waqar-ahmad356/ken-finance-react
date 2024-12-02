import React from 'react'
import learning_ui from '../assets/learning-ui.png';


const Crypto_Blockchain = () => {
  return (
    <section className='mt-[80px] md:mt-[80px] lg:mt-[120px] xl:mt-[192px] bg-white'>
    <div className='container'>
    
        <div className='flex flex-col items-center md:gap-[64px] gap-[32px]  '>
        <h2 className='md:text-[64px] text-center text-[40px] text-[#212326] font-bold capitalize leading-[72px] w-full '><span className=' bg-clip-text text-transparent bg-[linear-gradient(99deg,_#DB0011_10.8%,_#FF6F00_37.8%,_#DB0011_75.86%)] '>Learn </span>Crypto and Blockchain</h2>
        <div className='grid grid-cols-1 lg:gap-[40px] gap-6 md:grid-cols-2 items-center'>
            <div className='flex flex-col items-center md:items-start gap-4'>
                <h3 className='text-[28px] font-bold '>Gamified Blockchain Education</h3>
                <p className='font-lato text-[18px] text-[#212121] leading-6'>Boost your knowledge of cryptocurrency and Blockchain technology with our gaming experience while earning points & badges.</p>
            </div>
            <div className='xl:px-[177px] mx-auto'>
                <img src={learning_ui} className='max-w-full h-auto' width="264" height="545" alt='learning'/>
                
            </div>
        </div>
        </div>
    </div>
      
    </section>
  )
}

export default Crypto_Blockchain
