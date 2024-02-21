import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { BiSolidNotepad } from 'react-icons/bi';
import { ProjectProps } from '@types';

function Projects({ title, img, alt, type, github, live, tools } : ProjectProps) {
  return (
    <>
      <div
        className='mx-auto md:mx-0 pt-4 project-container text-center w-[325px]'
        key={title}
      >
        <div className='image max-w-[325px] h-[250px] relative'>
          <Image
            src={img}
            alt={alt}
            width={300}
            height={250}
            className='object-cover w-full h-full'
          />
        </div>
        <div className='description'>
          <div className='title text-2xl pt-2'>{title}</div>
          <div className='links flex gap-2 py-1 justify-center'>
            {/* Coming soon - Write up. 
            <Link href='/' target='_blank' aria-label={`${title}'s project breakdown page link.`} className='hover:-translate-y-1'>
              {<BiSolidNotepad size={32} />}
            </Link> */}
            <Link
              href={github}
              target='_blank'
              aria-label={`${title}'s project github page link.`}
              className='hover:-translate-y-1'
            >
              {<FaGithub size={25} />}
            </Link>
            {live && (
              <Link
                href={live}
                target='_blank'
                aria-label={`${title}'s project live page link.`}
                className='hover:-translate-y-1'
              >
                {<FaExternalLinkSquareAlt size={25} />}
              </Link>
            )}
          </div>
          <div className='tools'>
            <ul className='flex flex-wrap gap-2 justify-center text-sm'>
              {tools.map((tool: string) => (
                <li key={tool} className=''>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
