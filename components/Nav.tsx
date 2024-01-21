'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TfiClose } from 'react-icons/tfi';
import { RxHamburgerMenu } from 'react-icons/rx';
import LINK_ARR from '@data/LinkData';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  // Handler to toggle opening and hiding the nav menu in mobile.
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className='py-4 w-full'>
      {/* Top Gradient bg blur */}
      <div className='gradient-top fixed top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 z-[100] w-full blur-[50px]'>
        .
      </div>
      {/* Navbar */}
      <div className='flex justify-between'>
        <div className='logo'>
          <h1 className='logo text-2xl font-bold w-100 cursor-pointer hover:text-cyan-500'>
            PLANG-PSM
          </h1>
        </div>
        {/* Mobile Hamburger menu */}
        <div className='hamburger-menu md:hidden cursor-pointer hover:text-cyan-500'>
          <RxHamburgerMenu size={25} onClick={() => setOpenNav(!openNav)} />
        </div>
        {/* Desktop navbar listing */}
        <div className='hidden md:flex items-center'>
          <ul className='links flex gap-6'>
            {LINK_ARR.map((item) => (
              <li key={item.index}>
                <Link
                  href={item.link}
                  className='hover:text-cyan-500 active:font-bold'
                >
                  <p className='cursor-pointer  font-light'>{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Navbar mobile pop out */}
      <div
        className={
          openNav
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
        <ul className='flex flex-col absolute top-[30%] right-[43%]'>
          {LINK_ARR.map((item) => (
            <li key={item.index} className=''>
              <Link href={item.link} className='px-4'>
                <p className='cursor-pointer font-light hover:text-cyan-500'>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
