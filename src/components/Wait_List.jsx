import React from 'react'
import chat from '../assets/chat.png'

const Wait_List = () => {
  return (
    <section className='mt-[80px] md:mt-[80px] lg:mt-[120px] xl:mt-[192px] bg-white'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
          <div>
            <img src={chat} alt='chat' />
          </div>
          <div className='flex flex-col items-start gap-[32px] max-w-[573px] w-full '>
            <div className='flex flex-col items-start gap-4  '>
              <h2 className='md:text-[64px] text-[40px] text-[#212121] font-bold'>Join our <span className=' bg-clip-text text-transparent bg-[linear-gradient(99deg,_#DB0011_10.8%,_#FF6F00_37.8%,_#DB0011_75.86%)] '>waitlist</span></h2>
              <p className='text-[18px] font-lato text-[#212121]'>
                Be the first to experience the future of crypto with <span className=' bg-clip-text text-transparent bg-[linear-gradient(99deg,_#DB0011_10.8%,_#FF6F00_37.8%,_#DB0011_75.86%)] '>Kena Finance</span>.
                Join our waitlist now to gain exclusive early access to our platform.
              </p>
            </div>
            <div className='flex flex-col gap-8 w-full'>
              <div className='flex md:flex-row flex-col gap-8 w-full'>
                <input type='text' className='w-full rounded-2xl border-[0.5px] outline-none px-3 py-[10px]' placeholder='Name' />
                <select id='cars' className='w-full text-[#bbbbbb]  rounded-2xl border-[0.5px] outline-none px-3 py-[10px]' name='cars'>
                  <option value='volvo'>
                    Country
                  </option>
                  <option value='saab'>
                    Saab 95
                  </option>
                  <option value='mercedes'>
                    Mercedes SLK
                  </option>
                  <option value='audi'>
                    Audi TT
                  </option>
                </select>
              </div>
              <div className='w-full '>
                <input type='email' className='w-full outline-none rounded-2xl border-[0.5px] px-3 py-[10px]' placeholder='Type email address' />
              </div>
            </div>
            <button className='px-[32px] py-[14px] bg-[#dd0011] text-white rounded-2xl'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wait_List
