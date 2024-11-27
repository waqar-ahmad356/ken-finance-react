import React, { useState ,useEffect} from 'react';
import logo from '../assets/logo.png';




const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if scrolled down
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
    <header className={`flex justify-between items-center bg-[#fff] fixed ${isScrolled?'top-[6px]':'top-[16px]'} ${isScrolled?'lg:top-[8px]':'lg:top-[16px]'}   ${isScrolled?'lg:top-[8px]':'lg:top-[32px]'}  z-[999] rounded-[32px] transition-[top] duration-1000 ease-in-out  max-w-[1270px] w-full p-[8px] sm:p-[12px] md:p-[16px]  left-[50%] -translate-x-1/2` }>
      
        
          <img src={logo} className='max-w-[100%] h-auto w-[100px] lg:w-[230px]' width="230" height="48" alt="logo" />
          {/* Hamburger Menu */}
          <div className="md:hidden flex items-center gap-2">
          <div className="  md:hidden">
            <button className='rounded-[16px] border-0 md:py-4 py-2 px-2 text-[12px] md:px-8 md:text-[18px] leading-6 font-medium bg-[#db0011] text-white '>Download App</button>
          </div>
            <button onClick={toggleMenu} className="focus:outline-none text-[#db0011]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
               
                  
              
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
               
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:items-center md:gap-2 xl:gap-4">
            <li>
              <a
                href='#'
                className="text-[16px] text-[#181818] leading-6 font-normal"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-[#181818] leading-6 font-normal"
              >
                Features
              </a>
            </li>
            <li>
              <a href='#'
               
                className="text-[16px]  text-[#181818] leading-6 font-normal"
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[16px] text-[#181818] leading-6 font-normal"
              >
                Blog
              </a>
            </li>
            
          </ul>
          <div className=" hidden md:block">
            <button className='rounded-[16px] border-0 md:py-4 py-2 px-2 text-[12px] md:px-8 md:text-[18px] leading-6 font-medium bg-[#db0011] text-white '>Download App</button>
          </div>
       
   

      {/* Right Sidebar for Mobile */}
      <div
        className={`fixed top-[80px] right-0 h-full  w-64 shadow-lg transform duration-1000 ease-in-out transition-transform ${
          isOpen ? 'translate-x-0 right-8 ' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-4 flex justify-between items-center rounded-t-3xl  bg-white">
          <img className='max-w-[100%] w-[160px] h-auto' src={logo} alt='logo'/>
         
            
          
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          
        </div>
        <ul className="space-y-4 px-4 pb-4  bg-white rounded-b-3xl">
          <li>
            <a href="#" className="block text-[#181818] text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block text-[#181818] text-lg">
             Features
            </a>
          </li>
          <li>
            <a href="#" className="block text-[#181818] text-lg">
            How it Works
            </a>
          </li>
          <li>
            <a href="#" className="block text-[#181818] text-lg">
              Blog
            </a>
          </li>
         
        </ul>
      </div>
    </header>
    </div>
  );
};

export default Header;