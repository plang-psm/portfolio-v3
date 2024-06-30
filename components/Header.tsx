'use client';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

function Header() {
  return (
    <div className='Heading page '>
      <div className='div flex flex-col'>
        <h1 className='pb-2 text-xl md:text-2xl font-normal bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent inline-block'>
          Hello, I'm
        </h1>
      </div>
      <TypeAnimation
        sequence={[
          'Front End Developer',
          1000,
          'Full Stack Developer',
          1000,
          'Web Developer',
          1000,
          'Phillip',
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        className='text-3xl md:text-6xl lg:text-7xl font-extrabold'
      />
      <div className='pt-2 flex gap-4'>
        <Link
          href={'https://github.com/plang-psm'}
          className='hover:-translate-y-1 hover:text-cyan-500'
          target='_blank'
        >
          GitHub
        </Link>
        <Link
          href={'https://www.linkedin.com/in/plang-psm/'}
          className='hover:-translate-y-1 hover:text-cyan-500'
          target='_blank'
        >
          LinkedIn
        </Link>
        <Link
          href={'/assets/Resume.pdf'}
          className='hover:-translate-y-1 hover:text-cyan-500'
          target='_blank'
        >
          Resume
        </Link>
      </div>
      <div className='mt-14 text-xl md:text-2xl p-4 text-center'>
        <p className='max-w-[600px] bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent inline-block'>
          "The person with the biggest dreams is more powerful than the person
          with all the answers.”
        </p>
        <p className='font-bold pt-2'>-Kai Greene </p>
      </div>
    </div>
  );
}

export default Header;
