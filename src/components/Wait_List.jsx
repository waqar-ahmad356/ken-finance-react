import React, { useState } from 'react'
import chat from '../assets/chat.png'

const Wait_List = () => {
  const [inputs,setInputs]=useState({})
  const [option,setOption]=useState("Pakistan")
  const [errors, setErrors] = useState({});
  const onchange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputs(values=>({...values,[name]:value}))
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', 
    }));
  }
  const validate = () => {
    const errors = {};
    if (!inputs.username?.trim()) {
      errors.username = 'Name is required.';
    }
    if (!inputs.email?.trim()) {
      errors.email = 'Email is required.';
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputs.email)
    ) {
      errors.email = 'Invalid email format.';
    }
    return errors;
  };

  
  const onsubmitHandle=(e)=>{
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("Subscribed Successfully")
    setInputs({})
    setOption("")
  }

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
            <form className="w-full" onSubmit={onsubmitHandle}>
      <div className="flex flex-col gap-8 w-full">
        <div className="flex md:flex-row flex-col gap-8 w-full">
          <div className="w-full">
            <input
              type="text"
              name="username"
              value={inputs.username}
              onChange={onchange}
              className="w-full rounded-2xl border-[0.5px] outline-none px-3 py-[10px] placeholder:text-[#bbbbbb]"
              placeholder="Name"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-2">{errors.username}</p>
            )}
          </div>

          <div className="w-full">
            <select
              id="cars"
              value={option}
              onChange={(e) => setOption(e.target.value)}
              className="w-full rounded-2xl border-[0.5px] outline-none px-3 py-[13px] placeholder:text-[#bbbbbb]"
            >
              <option value="Pk" >Pakistan</option>
              <option value="Ch">China</option>
              <option value="Uk">UK</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={onchange}
            className="w-full text-[#212121] placeholder:text-[#bbbbbb] outline-none rounded-2xl border-[0.5px] px-3 py-[10px]"
            placeholder="Type Email address"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-2">{errors.email}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="px-[32px] mt-[48px] py-[14px] bg-[#dd0011] text-white rounded-2xl"
      >
        Subscribe
      </button>
    </form>
           
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wait_List
