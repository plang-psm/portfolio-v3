'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { TfiClose } from 'react-icons/tfi';
import { RxHamburgerMenu } from 'react-icons/rx';
import LINK_ARR from '@data/LinkData';

const Nav = () => {
  const [nav, setNav] = useState(false);

  // Handler to toggle opening and hiding the nav menu in mobile.
  const handleNav = () => {
    setNav(!nav);
  };

  // Function to hide nav on resize at md breakpoint. Used to manage state so scrolling isn't prevented when changing from mobile to web.
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setNav(false);
    }
  };

  // Set up event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Prevents user from scrolling when modal is open.
  useEffect(() => {
    nav
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [nav]);

  return (
    <nav className='py-4 w-full'>
      {/* Navbar */}
      <div className='flex justify-between'>
        <div className='logo'>
          <Link href={'/'}>
            <h1 className='logo text-2xl font-bold w-100 cursor-pointer hover:text-cyan-500'>
              PLANG-PSM
            </h1>
          </Link>
        </div>
        {/* Mobile Hamburger menu */}
        <div className='hamburger-menu md:hidden cursor-pointer hover:text-cyan-500'>
          <RxHamburgerMenu size={25} onClick={() => handleNav()} />
        </div>
        {/* Desktop navbar listing */}
        <div className='hidden md:flex items-center'>
          <ul className='links flex gap-6'>
            {LINK_ARR.map((item) => (
              <li key={item.index}>
                <Link
                  href={item.link}
                  className={`hover:text-cyan-500 active:border-b-2 active:border-cyan-500 active:font-bold`}
                >
                  <p className='cursor-pointer font-light'>{item.label}</p>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={'/assets/Resume.pdf'}
                className={`hover:text-cyan-500 active:font-bold`}
                target='_blank'
              >
                <p className='cursor-pointer font-light'>Resume</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Navbar mobile pop out */}
      <div
        className={
          nav
            ? 'md:hidden fixed z-50 left-0 top-0 w-full h-full bg-[#0A0A0A] transition-all text-center'
            : 'md:hidden fixed left-[-100%]'
        }
      >
        <div className='nav-open p-4 flex justify-between content-center'>
          <Link href='/'>
            <h1 className='logo text-2xl font-bold w-100 hover:text-cyan-500'>
              PLANG-PSM
            </h1>
          </Link>
          <TfiClose
            size={25}
            className='my-auto mx-4 hover:text-cyan-500 cursor-pointer'
            onClick={handleNav}
          />
        </div>
        <ul className='flex flex-col absolute top-[30%] right-[42%] text-xl'>
          {LINK_ARR.map((item) => (
            <li key={item.index} onClick={handleNav}>
              <Link href={item.link} className='px-4'>
                <p className='cursor-pointer font-light hover:text-cyan-500'>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
          <li className='py-6'>
            <Link
              href={'/assets/Resume.pdf'}
              className='hover:text-cyan-500 active:font-bold'
              target='_blank'
            >
              <p className='cursor-pointer font-light'>Resume</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
