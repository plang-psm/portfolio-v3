'use client';
import { useState } from 'react';
import Link from 'next/link';
import { TfiClose } from 'react-icons/tfi';
import { RxHamburgerMenu } from 'react-icons/rx';

// import ThemeToggle from './ThemeToggle';

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  type Link = {
    index: number;
    label: string;
    link: string;
  };

  // Dynamic link array
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

  // Handler to toggle opening and hiding the nav menu in mobile.
  const handleNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className='py-4'>
      <div className='gradient-top fixed top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 z-[100] w-full blur-[50px]'>
        .
      </div>

      {/* Mobile */}
      <div className='mobile w-full flex justify-between'>
        <Link href={'/'} className='logo text-2xl font-bold'>PLANG-PSM</Link>
        <div className='theme-nav text-2xl md:hidden flex items-center'>
          <div className='theme-toggle pr-6'>
            {/* <ThemeToggle /> */}
          </div>
          <RxHamburgerMenu className='' onClick={() => setOpenNav(!openNav)} />
        </div>
        {/* Desktop */}
        <div className='hidden md:flex items-center'>
          <div className='links flex'>
            {linkArr.map((item) => (
              <Link
                key={item.index}
                href={item.link}
                className='hover:text-cyan-500 px-4'
              >
                <p className='cursor-pointer uppercase font-light'>
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
          <div className='theme-toggle pl-4'>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </div>
      {/* Hamburger menu options
            - Links with an onClick that closes upon selection
            - Close icon that closes the nav
      */}
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
            <Link
              key={item.index}
              href={item.link}
              onClick={handleNav}
              className='hover:text-cyan-500'
            >
              <li className=' cursor-pointer uppercase font-light'>
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
