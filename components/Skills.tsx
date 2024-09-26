'use client';
import React, { useState } from 'react';
import TabButton from '@components/TabButton';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

export interface Tab {
  title: string;
  id: string;
  content: any;
}

const SKILL_TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='flex flex-row flex-wrap font-light pt-4'>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>React.js</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>Next.js</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>JavaScript</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>TypeScript</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>Java</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>Springboot</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>Node.js</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>Express.js</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>SQL</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>PostgresSQL</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>MySQL</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>MongoDB</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>TailwindCSS</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>MaterialCSS</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>Cypress</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>Jest</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>GitHub</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>Agile</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>Figma</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>Postman</li>
        <li className='basis-1/2 md:basis-1/4 text-center pb-4'>Passport.js</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <div className='education pt-4 '>
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
      <div className='experience pt-4'>
        <div className='freelance my-2 basis-1/2 text-start'>
          <div className='flex justify-between border-b-2'>
            <h3>Information Technology</h3>
            <p>Aug 2023 - Current</p>
          </div>
          <div className='title flex justify-between items-center pt-2'>
            <p className='font-bold'>LAUSD</p>
            <div className='links flex items-center'>
              <Link
                href={'https://torreshaaths.lausd.org/'}
                target='_blank'
                aria-label={`Memento's project live page link.`}
                className='hover:-translate-y-1'
              >
                {<FaExternalLinkSquareAlt size={25} />}
              </Link>
            </div>
          </div>
          <div className='font-normal'>IT Support Tech</div>
          <div className='font-thin'>
            <p>
              Remedy · Edlio · Microsoft Intune · PowerBI
            </p>
          </div>
        </div>
        <div className='freelance my-2 basis-1/2 text-start'>
          <div className='flex justify-between border-b-2'>
            <h3>Web Developer</h3>
            <p>Feb 2024 - May 2024</p>
          </div>
          <div className='title flex justify-between items-center pt-2'>
            <p className='font-bold'>Mementos Photo Booth</p>
            <div className='links flex items-center'>
              <Link
                href={'https://github.com/plang-psm/mementos'}
                target='_blank'
                aria-label={`Mementos's project github page link.`}
                className='hover:-translate-y-1 mr-4'
              >
                {<FaGithub size={25} />}
              </Link>
              <Link
                href={'https://mementosla.vercel.app/'}
                target='_blank'
                aria-label={`Memento's project live page link.`}
                className='hover:-translate-y-1'
              >
                {<FaExternalLinkSquareAlt size={25} />}
              </Link>
            </div>
          </div>
          <div className='font-normal'>Web Developer</div>
          <div className='font-thin'>
            <p>
              React.js · Next.js · TypeScript · Tailwind.css · GitHub · Figma
            </p>
          </div>
        </div>
        <div className='hack-4-la my-2 md:pt-0 basis-1/2 text-start'>
          <div className='flex justify-between border-b-2'>
            <h3>Hack for LA</h3>
            <p>Aug 2022 - Oct 2023</p>
          </div>
          <div className='title flex justify-between items-center pt-2'>
            <p className='font-bold'>hackforla.org</p>
            <div className='links flex items-center'>
              <Link
                href={'https://github.com/plang-psm/website'}
                target='_blank'
                aria-label={`Hack for LA's project github page link.`}
                className='hover:-translate-y-1 mr-4'
              >
                {<FaGithub size={25} />}
              </Link>
              <Link
                href={'https://www.hackforla.org/'}
                target='_blank'
                aria-label={`Hack for LA's project live page link.`}
                className='hover:-translate-y-1'
              >
                {<FaExternalLinkSquareAlt size={25} />}
              </Link>
            </div>
          </div>
          <div className='font-normal'>Front End Developer</div>

          <div className='font-thin'>
            <p>HTML · SASS · JavaScript · GitHub · Kanban · Agile · Figma</p>
          </div>
          <div className='title flex justify-between items-center pt-2'>
            <p className='font-bold'>vrms.io</p>
            <div className='links flex items-center'>
              <Link
                href={'https://github.com/plang-psm/VRMS'}
                target='_blank'
                aria-label={`VRMS's project github page link.`}
                className='hover:-translate-y-1 mr-4'
              >
                {<FaGithub size={25} />}
              </Link>
              <Link
                href={'https://www.vrms.io/'}
                target='_blank'
                aria-label={`VRMS's project live page link.`}
                className='hover:-translate-y-1'
              >
                {<FaExternalLinkSquareAlt size={25} />}
              </Link>
            </div>
          </div>
          <div className='font-normal'>Full Stack Developer</div>
          <div className='font-thin'>
            <p>
              React.js · Node.js · Express.js · Material UI · CSS · GitHub ·
              Kanban · Agile · Figma
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
    <div className='skills-education h-[700px] md:h-[550px] my-8'>
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
      <div className='md:text-end'>
        {displayData(SKILL_TAB_DATA, skillTab)}
      </div>
    </div>
  );
}

export default Skills;
