'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MdLightbulbOutline } from 'react-icons/md';
import { MdLightbulb } from 'react-icons/md';

const Nav = () => {
  // Logo
  // Links
    // Home link
    // About
    // Projects
    // Contact
    // Resume

  return (
    <nav className='m-3 w-100 flex justify-between'>
      <div className='logo font-bold'>PLANG-PSM</div>
      <div className='links flex gap-5 list-none '>
        <Link href={'/'}>
          <li>Home</li>
        </Link>
        <Link href={'/about'}>
          <li>About</li>
        </Link>
        <Link href={'/projects'}>
          <li>Projects</li>
        </Link>
        <Link href={'/contact'}>
          <li>Contact</li>
        </Link>
        <Link href={'/resume'}>
          <li>Resume</li>
        </Link>
        <i 
          className='m-auto'
          >
          {/* {dark ? <MdLightbulb /> : <MdLightbulbOutline />} */}
        </i>
      </div>
    </nav>
  );
};

export default Nav;
