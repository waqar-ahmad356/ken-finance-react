import React, { useEffect, useState } from 'react'
import sell_buy from '../assets/sell-and-buy-mobiles.png';
import apple from '../assets/apple-logo.png';
import google from '../assets/google-play-logo.png';

const Buy_Sell = () => {
    const messages=['buy & sell','earn & swap','buy & sell'];
    const [index,setIndex]=useState(0);
    const [isVisible, setIsVisible] = useState(true); 

    useEffect(() => {
        const interval = setInterval(() => {
          setIsVisible(false); 
          setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length); 
            setIsVisible(true); 
          }, 500);
        }, 1500); 
        return () => clearInterval(interval); 
      }, [messages.length]);
  return (
    <section  className=' min-h-[100vh] object-contain bg-center bg-no-repeat bg-cover mt-[40px] md:mt-[80px] lg:mt-[120px] xl:mt-[192px]' style={{backgroundImage:'url(/sell-and-buy-bg.png)'}}>
      <div className='container'>
        <div className='flex flex-col-reverse md:flex-row lg:gap-[30px] gap-4 items-center'>
            <div className='md:pt-[238px]  transform translate-y-[40px] sm:translate-y-[100px] '>
                <img src={sell_buy} width="653" height="525" className='max-w-full h-auto' alt='sell-buy'/>
            </div>
            <div className='flex flex-col items-center gap-6 md:gap-[48px] max-w-[543px] '>
            <div className='flex flex-col items-center gap-6 pt-[40px]'>
                <h2 className={`text-[44px] md:text-[48px] text-wrap sm:text-nowrap lg:text-[64px] uppercase text-white font-bold text-center transition-opacity duration-500 ease-in-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}> {messages[index]}</h2>
                <p className='font-lato text-[16px] md:text-[18px] text-white leading-6 font-normal  text-center '>Kena Finance is your one-stop shop for secure digital asset management. Join Kena Finance today and take control of your future.</p>
                </div>
                <div className='flex items-center gap-2 md:gap-3'>
                    <button className='flex items-center gap-2 md:gap-[10px] rounded-md border-[1px] border-[#A6A6A6] bg-[#000] text-white px-[10px] text-[13px] py-[10px] md:text-[16px]'><img src={google} alt='google-play-logo'/>Coming Soon</button>
                    <button className='flex items-center gap-2 md:gap-[10px] rounded-md border-[1px] border-[#A6A6A6] bg-[#fff] px-[10px] py-[10px] text-[13px] md:text-[16px]'><img src={apple} alt='apple-logo'/> Coming Soon</button>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Buy_Sell
