'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TfiClose } from 'react-icons/tfi';
import { RxHamburgerMenu } from 'react-icons/rx';

import ThemeToggle from './ThemeToggle';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  type Link = {
    index: number;
    label: string;
    link: string;
  }

  // const dynamic link array
  const linkArr: Link[] = [
    {
      index: 0,
      label: 'Home',
      link: '/',
    },
    {
      index: 1,
      label: 'About',
      link: '/about',
    },
    {
      index: 2,
      label: 'Projects',
      link: '/projects',
    },
    {
      index: 3,
      label: 'Contact',
      link: '/contact',
    },
    {
      index: 4,
      label: 'Resume',
      link: '/resume',
    },
  ];

  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className='p-4'>
      {/* Mobile app */}
      <div className='mobile w-full flex justify-between'>
        <div className='logo text-2xl font-bold'>PLANG-PSM</div>
        <div
          className='hamburger md:hidden flex items-center'
          onClick={() => setOpenNav(!openNav)}
        >
          <RxHamburgerMenu className='text-2xl' />
        </div>
        <div
          className='hidden md:flex items-center'
        >
          {linkArr.map((item) => (
            <Link href={item.link} className='hover:text-gray-300 px-4'>
              <p className='cursor-pointer capitalize'>{item.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className='hamburger-theme flex gap-2'>
        <ul
          className={`links ${
            !openNav ? 'hidden' : ''
          } flex flex-col justify-center absolute top-0 left-0 gap-10 items-center list-none align-middle bg-black bg-opacity-80 backdrop-blur-sm h-full w-full text-white text-xl`}
        >
          <li className=' absolute p-5 top-0 right-0' onClick={handleNav}>
            <TfiClose />
          </li>
          {linkArr.map((item) => (
            <Link href={item.link} onClick={handleNav} className='hover:text-gray-300'>
              <li className=' cursor-pointer capitalize'>{item.label}</li>
            </Link>
          ))}
        </ul>
        {/* <div className='theme'>
            <ThemeToggle />
        </div> */}
      </div>
    </nav>
  );
};

export default Nav;
