import React,{useState,useEffect} from 'react'
import bitcoin_1 from '../assets/bitcoin-1.png';
import bitcoin_2 from '../assets/bitcoin-2.png';
import bitcoin_3 from '../assets/bitcoin-3.png';
import bitcoin_4 from '../assets/bitcoin-4.png';
import bitcoin_5 from '../assets/bitcoin-5.png';

const Coin = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bitcoin_imgs=[bitcoin_1,bitcoin_2,bitcoin_3,bitcoin_4,bitcoin_5]

   // Function to handle image change
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bitcoin_imgs.length);
    }, 1500); 
    return () => clearInterval(interval); // Cleanup on unmount
  }, [bitcoin_imgs.length]);
  return (
    <section className='bg-white pt-[40px] md:pt-[80px] lg:pt-[192px]'>
    <div className='container'>
        <div className='flex flex-col md:flex-row  items-center gap-8 md:gap-[60px] '>
        
        <div className='relative w-[483px] h-[591px] overflow-hidden'>
        {bitcoin_imgs.map((src, index) => (
        <img
          key={index}
          width="483"
          src={src}
          alt={`bitcoin-${index + 1}`}
          className={`max-w-full absolute top-0 left-0  h-auto object-cover  ${
            currentIndex === index ? 'animate-fadeInOut' : 'hidden'
          }`}
        />
      ))}
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
