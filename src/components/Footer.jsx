import React from 'react'
import logo from '../assets/logo.png'
import apple from '../assets/apple.png'
import google from '../assets/google-play-logo.png'
import facebook from '../assets/fb.png'
import insta from '../assets/insta.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png';

const Footer = () => {
  return (
    <section className='mt-[80px] md:mt-[80px] lg:mt-[120px] xl:mt-[192px] border-t-[1px] border-[#e4e3e2] bg-white'>
    <div className='container'>
        <div className='md:pt-[64px] pt-8 pb-3 md:pb-[48px] flex flex-wrap flex-col w-full gap-6 md:gap-[64px] items-start'>
            <div className='flex justify-between flex-wrap md:flex-nowrap gap-8 items-start'>
                <div className='flex flex-col items-start h-[186px] lg:gap-[32px] lg:w-[800px] xl:w-[991px] justify-between'>
                    <div className='flex flex-col  items-start gap-2 '>
                        <div>
                            <img src={logo} className='max-w-full h-auto' alt="logo"/>
                        </div>
                        <p className=' font-lato text-[14px] text-[#212121] font-medium leading-5'>Bringing a billion users on-chain</p>
                    </div>
                    <div className='flex items-center gap-2 '>
                        <p className='font-lato text-[14px] text-[#212121] font-bold leading-5'>Contact Us on:</p>
                        <a href="mailto:contact@kenafinance.com" className='font-lato text-[14px] text-[#212121] font-medium leading-5'>contact@kenafinance.com</a>
                    </div>
                    <ul className='flex items-center flex-wrap list-none gap-4'>
                        <li><a href='#' className=' text-[16px] text-[#565656] font-bold leading-5'>Home</a></li>
                        <li><a href='#'  className=' text-[16px] text-[#565656] font-bold leading-5'>Features</a></li>
                        <li><a href='#'  className=' text-[16px] text-[#565656] font-bold leading-5'>Learn</a></li>
                        <li><a href='#'  className=' text-[16px] text-[#565656] font-bold leading-5'>Security</a></li>
                        <li><a href='#'  className=' text-[16px] text-[#565656] font-bold leading-5'>How it Works</a></li>
                        <li><a href='#'  className=' text-[16px] text-[#565656] font-bold leading-5'>Join Waitlist</a></li>
                    </ul>
                </div>
                <div className='flex flex-col  gap-4 max-w-[193px]'>
                    <h2 className='text-[16px] text-[#DB0011] text-nowrap font-medium  leading-5'>Get the app soon</h2>
                    <div className='flex flex-col gap-2'>
                    <button className='flex gap-2 bg-[#000] rounded-[7px] text-white border-[1px] border-[#A6A6A6] px-[10px] py-[10px]' ><img src={apple} alt='apple'/>App Store</button>
                    <button className='flex gap-2 bg-[#000] rounded-[7px] text-white border-[1px] border-[#A6A6A6] px-[10px] py-[10px]' ><img src={google} alt='google'/>Google Play</button>
                    </div>
                    <div className='flex items-center gap-2'>
                        <a href='https://www.facebook.com'><img src={facebook} alt='facebook'/></a>
                        <a href='https://www.instagram.com'><img src={insta} alt='insta'/></a>
                        <a href='https://www.linkedin.com'><img src={linkedin} alt='linkedin'/></a>
                        <a href='https://www.twitter.com'><img src={twitter} alt='twitter'/></a>
                    </div>
                </div>
            </div>
            <div className='flex justify-between gap-4 flex-wrap pt-[32px] w-full border-t-[1px] border-[#e4e3e2]'>
                <p>© 2024 Untitled UI. All rights reserved.</p>
                <ul className='flex flex-wrap items-center list-none gap-4 md:gap-[40px]'>
                        <li><a href='#' className=' font-lato text-[16px] text-[#212121] font-bold leading-5'>Terms and Conditions</a></li>
                        <li><a href='#'  className=' font-lato text-[16px] text-[#212121] font-bold leading-5'>Privacy Notice</a></li>
                        <li><a href='#'  className=' font-lato text-[16px] text-[#212121] font-bold leading-5'>Cookies Policy</a></li>
                        <li><a href='#'  className=' font-lato text-[16px] text-[#212121] font-bold leading-5'>Status</a></li>
                        
                    </ul>
            
            </div>
        </div>
    </div>
      
    </section>
  )
}

export default Footer
