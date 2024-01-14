'use client';

import { useState, useTransition } from 'react';

// import Footer from '@components/Footer';
// import Nav from '@components/Nav';
// import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import TabButton from '@components/TabButton';

export default function Home() {
  type Tab = {
    title: string;
    id: string;
    content: any;
  };

  const TAB_DATA: Tab[] = [
    {
      title: 'Skills',
      id: 'skills',
      content: (
        <ul className='flex flex-row flex-wrap '>
          <li className='basis-1/3 md:basis-1/4 text-start'>React.js</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>Next.js</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>JavaScript</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>TypeScript</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>Node.js</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>Express.js</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>SQL</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>MySQL</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>MongoDB</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>Tailwind CSS</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>Material CSS</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>GitHub</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>Agile</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>Figma</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>Postman</li>
          <li className='basis-1/3 md:basis-1/4 text-start'>Passport.js</li>
        </ul>
      ),
    },
    {
      title: 'Education',
      id: 'education',
      content: (
        <div className='education md:pt-0'>
          <div className='wgu md:mt-0 md:pt-0 basis-1/2 text-start'>
            <div className='flex justify-between border-b-2'>
              <h3>Western Governors University</h3>
              <p>Apr 2024</p>
            </div>
            <p className='font-bold pt-2'>
              Bachelors of Science Computer Science
            </p>
            <div className='font-thin'>
              <p>
                Data Structure and Algorithms I and II · Web Development
                Foundations · Scripting and Programming Applications · Discrete
                Mathematics I and II · Software I and II · Data Management
                Foundations · Data Management Applications · Advanced Data
                Management · Computer Architecture.
              </p>
            </div>
          </div>
          <div className='scrimba mt-2 py-2 basis-1/2 text-start'>
            <div className='flex justify-between border-b-2'>
              <h3>Scrimba</h3>
              <p>Jan 2022</p>
            </div>
            <p className='font-bold pt-2'>
              Front End Developers Career Path Bootcamp
            </p>
            <div className='font-thin'>
              <p>
                HTML · Cascading Style Sheets (CSS) · JavaScript · React.js ·
                Responsive Web Design · APIs · GitHub · Front-End Development
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Experience',
      id: 'experience',
      content: (
        <div className='experience md:pt-0'>
          <div className='hack-4-la md:mt-0 md:pt-0 basis-1/2 text-start'>
            <div className='flex justify-between border-b-2'>
              <h3>Hack for LA</h3>
              <p>Aug 2022 - Current</p>
            </div>
            <div className='title flex justify-between items-center pt-2'>
              <p className='font-bold'>hackforla.org</p>
              <div className='links'>
                <a href='' className='github mr-4'>
                  Git
                </a>
                <a href='' className='live'>
                  Link
                </a>
              </div>
            </div>
            <div className='font-thin'>
              <p>HTML · SASS · JavaScript · GitHub · Kanban · Agile · Figma</p>
            </div>
            <div className='title flex justify-between items-center pt-2'>
              <p className='font-bold'>vrms.io</p>
              <div className='links'>
                <a href='' className='github mr-4'>
                  Git
                </a>
                <a href='' className='live'>
                  Link
                </a>
              </div>
            </div>

            <div className='font-thin'>
              <p>
                React.js · Node.js · Express.js · Material UI · CSS · GitHub ·
                Kanban · Agile · Figma · CI/CD
              </p>
            </div>
          </div>
          <div className='freelance mt-2 basis-1/2 text-start'>
            <div className='flex justify-between border-b-2'>
              <h3>Freelance</h3>
              <p>Jan 2024 - Current</p>
            </div>
            <p className='font-bold pt-2'>
              Mementos{' '}
              <span className='font-normal bg-cyan-600 px-1 py-[0.5] text-sm'>
                Coming soon
              </span>
            </p>
            <div className='font-thin'>
              <p>
                React.js · Next.js · TypeScript · Tailwind.css · GitHub · Figma
              </p>
            </div>
            <p className='font-bold pt-2'>
              Adaptive Fields{' '}
              <span className='font-normal bg-cyan-600 px-1 py-[0.5] text-sm'>
                Coming soon
              </span>
            </p>
            <div className='font-thin'>
              <p>
                React.js · Next.js · TypeScript · Tailwind.css · GitHub · Figma
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const displayData = () => {
    const id = TAB_DATA.find((t) => t.id === tab);
    return id?.content;
  };

  return (
    <div className='mt-20 flex flex-col gap-2'>
      {/* Heading */}
      <div className='Heading page'>
        <h1 className='text-xl md:text-2xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent inline-block'>
          Hello, I'm
        </h1>
      </div>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
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
        // style={{ fontSize: '2em' }}
        repeat={Infinity}
        className='text-4xl md:text-6xl lg:text-7xl font-extrabold'
      />
      <div className='flex gap-4'>
        <Link
          href={'https://github.com/plang-psm'}
          className='hover:-translate-y-1 hover:text-cyan-600'
        >
          GitHub
        </Link>
        <Link
          href={'https://www.linkedin.com/in/plang-psm/'}
          className='hover:-translate-y-1 hover:text-cyan-600'
        >
          LinkedIn
        </Link>
        <Link href={''} className='hover:-translate-y-1 hover:text-cyan-600'>
          Contact
        </Link>
      </div>
      <div className='mt-14 text-xl md:text-2xl p-4 text-center'>
        <p className=' bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent inline-block'>
          " The person with the biggest dreams <br></br> is more powerful than
          the person with all the answers. ”
        </p>
        <p className='font-bold'>-Kai Greene </p>
      </div>

      <div className='about-skills'>
        <div className='mt-14'>
          <h2 className='text-xl md:text-2xl font-extrabold'>About Me</h2>
          <p className='pt-2 font-light'>
            My name is Phillip and I am a{' '}
            <span className='font-bold'>Full Stack Developer</span> in the Los
            Angeles area. I have{' '}
            <span className='font-bold'>+1 years of experience</span>{' '}
            volunteering for Hack for LA and freelancing where I've had the
            chance to work with tools and methodologies that include{' '}
            <span className='font-bold'>
              Next.js, TypeScript, React.js, Node.js, Express.js, MongoDB,
              Tailwind CSS, GitHub, Figma, and Agile
            </span>
            to name a few. I am finishing up a{' '}
            <span className='font-bold'>
              Bachelors of Science in Computer Science
            </span>{' '}
            from Western Governors University, and have completed Scrimba's{' '}
            <span className='font-bold'>
              Front End Developer Bootcamp. Currently open to new opportunities!
              and projects!
            </span>
          </p>
        </div>
      </div>

      <div className='skills-education mt-14'>
        <div className='skills-edu flex text-xl md:text-2xl font-extrabold'>
          <TabButton
            selectTab={() => handleTabChange('skills')}
            active={tab === 'skills'}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange('education')}
            active={tab === 'education'}
          >
            Education
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange('experience')}
            active={tab === 'experience'}
          >
            Experience
          </TabButton>
        </div>
        <div className='mt-8 md:mt-0 md:pt-2 md:text-end'>{displayData()}</div>
      </div>
    </div>
  );
}
