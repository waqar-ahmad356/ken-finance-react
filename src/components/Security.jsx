import React,{useEffect,useState} from 'react'
import security from '../assets/security.png';

import security_on from '../assets/security-on.png';
import security_on_1 from '../assets/security-on-1.png';
import mobile_login_1 from '../assets/mobile-login-1.png';
import mobile_login_2 from '../assets/mobile-login-2.png';
import mobile_login_3 from '../assets/mobile-login-3.png';
import mobile_login_4 from '../assets/mobile-login-4.png';
import mobile_login_5 from '../assets/mobile-login-5.png';

const Security = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loginIndex,setLoginIndex]=useState(0);
    const security_on_imgs=[security_on,security_on_1];
    const mobile_login_imgs=[mobile_login_1,mobile_login_2,mobile_login_3,mobile_login_4,mobile_login_5]
     // Function to handle image change
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % security_on_imgs.length);
      setLoginIndex((prevIndex) => (prevIndex + 1) % mobile_login_imgs.length);
    }, 1500); 
    return () => clearInterval(interval); // Cleanup on unmount
  }, [security_on_imgs.length,mobile_login_imgs.length]);
  return (
    <section className='mt-[80px] md:mt-[80px] lg:mt-[120px] xl:mt-[192px] bg-white'>
    <div className='container'>
        <div className='flex flex-col items-center gap-[48px]  '>
        <h2 className='md:text-[64px] text-center text-[40px] text-[#212326] font-bold capitalize leading-[72px] w-full '>Robust <span className=' bg-clip-text text-transparent bg-[linear-gradient(99deg,_#DB0011_10.8%,_#FF6F00_37.8%,_#DB0011_75.86%)] '> Security</span> Measures</h2>  
        {/* security */}
        <div className='flex flex-col gap-4 md:gap-0 items-center md:flex-row justify-between'>
        <div>
            <img src={security} className='max-w-full h-auto' width="632" height="470" alt=''/>
        </div>
        <div className='flex flex-col items-start gap-4 max-w-[415px]'>
            <h3 className='text-[28px] font-bold '>Elevate your Crypto Security</h3>
            <p className='text-[18px] font-lato text-[#212121] leading-6'>Unparalleled security leveraging Multi-Party Computation (MPC) cryptography and secure hardware enclaves to protect all attack surfaces and eliminate the reliance on a single security technology.</p>
        </div>
        </div>
        {/* mobile login */}
        <div className='flex flex-col gap-4 md:gap-[64px] items-center md:flex-row justify-between '>
        
        <div className='flex flex-col items-start gap-4 max-w-[455px]'>
            <h3 className='text-[28px] font-bold '>Multi-Factor Authentication (MFA)</h3>
            <p className='text-[18px] font-lato text-[#212121] leading-6'>Transactions are protected by MFA, which includes passcode, biometric, email, and authenticator verification.</p>
        </div>
        <div className='relative w-[480px] h-[470px] overflow-hidden'>
        {mobile_login_imgs.map((src, index) => (
        <img
          key={index}
          width="480"
          height="470"
          src={src}
          alt={`bitcoin-${index + 1}`}
          className={`max-w-full absolute top-0 left-0  h-auto object-cover  ${
           loginIndex === index ? 'animate-fadeInOut' : 'hidden'
          }`}
        />
      ))}
        </div>
        </div>
        {/* security on */}
        <div className='flex flex-col-reverse gap-4 md:gap-[64px] items-center md:flex-row justify-between '>
        <div className='relative w-[504px] h-[470px] overflow-hidden'>
        {security_on_imgs.map((src, index) => (
        <img
          key={index}
          width="504"
          height="470"
          src={src}
          alt={`bitcoin-${index + 1}`}
          className={`max-w-full absolute top-0 left-0  h-auto object-cover  ${
            currentIndex === index ? 'animate-fadeInOut' : 'hidden'
          }`}
        />
      ))}
        </div>
        <div className='flex flex-col items-start gap-4 max-w-[415px]'>
            <h3 className='text-[28px] font-bold '>We provide 24/7 live customer support</h3>
            <p className='text-[18px] font-lato text-[#212121] leading-6'>It’s our priority to help you make the most of your experience.
</p>
        </div>
        </div>
        </div>
    </div>
      
    </section>
  )
}

export default Security
