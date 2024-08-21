import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { BiSolidNotepad } from 'react-icons/bi';

export interface ProjectProps {
  key: number;
  title: string;
  alt: string;
  img: string;
  type: string[];
  github: string;
  live: string;
  tools: string[];
}

function Projects({ title, img, alt, github, live, tools }: ProjectProps) {
  return (
    <>
      <div
        className='mx-auto md:mx-0 py-4 project-container text-center w-[350px]'
        key={title}
      >
        <div className='image max-w-[350px] h-[250px]'>
          <Image
            src={img}
            alt={alt}
            width={350}
            height={250}
            className='object-cover object-top w-full h-full'
          />
        </div>
        <div className='description'>
          <div className='title text-2xl pt-2'>{title}</div>
          <div className='links flex gap-2 py-1 justify-center'>
            <Link
              href={`/blog/${title.replaceAll(' ', '-').toLowerCase()}`}
              aria-label={`${title}'s project breakdown page link.`}
              className='hover:-translate-y-1'
            >
              {<BiSolidNotepad size={32} />}
            </Link>
            <Link
              href={github}
              target='_blank'
              aria-label={`${title}'s project github page link.`}
              className='hover:-translate-y-1 mr-2'
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
