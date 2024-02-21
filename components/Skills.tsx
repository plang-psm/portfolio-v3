'use client';
import React, { useState } from 'react';
import TabButton from '@components/TabButton';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { Tab } from '@types';

const SKILL_TAB_DATA = [
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
        <li className='basis-1/3 md:basis-1/4 text-start'>Cypress</li>
        <li className='basis-1/3 md:basis-1/4 text-start'>Jest</li>
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
            <div className='links flex items-center'>
              <Link
                href={'https://github.com/plang-psm/website'}
                target='_blank'
                aria-label={`'s project github page link.`}
                className='hover:-translate-y-1 mr-4'
              >
                {<FaGithub size={25} />}
              </Link>
              <Link
                href={'https://www.hackforla.org/'}
                target='_blank'
                aria-label={`'s project live page link.`}
                className='hover:-translate-y-1'
              >
                {<FaExternalLinkSquareAlt size={25} />}
              </Link>
            </div>
          </div>
          <div className='font-thin'>
            <p>HTML · SASS · JavaScript · GitHub · Kanban · Agile · Figma</p>
          </div>
          <div className='title flex justify-between items-center pt-2'>
            <p className='font-bold'>vrms.io</p>
            <div className='links flex items-center'>
              <Link
                href={'https://github.com/plang-psm/VRMS'}
                target='_blank'
                aria-label={`'s project github page link.`}
                className='hover:-translate-y-1 mr-4'
              >
                {<FaGithub size={25} />}
              </Link>
              <Link
                href={'https://www.vrms.io/'}
                target='_blank'
                aria-label={`'s project live page link.`}
                className='hover:-translate-y-1'
              >
                {<FaExternalLinkSquareAlt size={25} />}
              </Link>
            </div>
          </div>

          <div className='font-thin'>
            <p>
              React.js · Node.js · Express.js · Material UI · CSS · GitHub ·
              Kanban · Agile · Figma
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

function Skills() {
  const [skillTab, setSkillTab] = useState('experience');

  // Displays the SKILLS TAB DATA content -- skills, edu and experience
  const displayData = (data: Tab[], tab: string) => {
    const id = data.find((t) => t.id === tab);
    return id?.content;
  };

  return (
    <div className='skills-education py-16 h-[500px]'>
      <div className='skills-edu flex text-xl md:text-2xl font-extrabold'>
        <TabButton
          selectTab={() => setSkillTab('experience')}
          active={skillTab === 'experience'}
        >
          Experience
        </TabButton>
        <TabButton
          selectTab={() => setSkillTab('skills')}
          active={skillTab === 'skills'}
        >
          Skills
        </TabButton>
        <TabButton
          selectTab={() => setSkillTab('education')}
          active={skillTab === 'education'}
        >
          Education
        </TabButton>
      </div>
      <div className='mt-8 md:mt-0 md:pt-2 md:text-end'>
        {displayData(SKILL_TAB_DATA, skillTab)}
      </div>
    </div>
  );
}

export default Skills;
