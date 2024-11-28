import React from 'react'
import security from '../assets/security.png';
import mobile_login from '../assets/mobile-login.png';
import security_on from '../assets/security-on.png';

const Security = () => {
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
        <div>
            <img src={mobile_login} className='max-w-full h-auto' width="480" height="471" alt='mobile-login'/>
        </div>
        </div>
        {/* security on */}
        <div className='flex flex-col-reverse gap-4 md:gap-[64px] items-center md:flex-row justify-between '>
        <div>
            <img src={security_on} className='max-w-full h-auto' width="504" height="470" alt='security-on'/>
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
