import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { BiSolidNotepad } from 'react-icons/bi';
import { ProjectProps } from '@app/types';

interface ProjectCardProps {
  project: ProjectProps;
}

function Projects({ project }: ProjectCardProps) {
  const { title, img, alt, type, github, live, tools } = project;

  return (
    <>
      {/* <div className='project text-center max-w-[350px] mx-auto' key={title}>
        <div className='image w-full h-[250px] relative '>
          <Image src={img} alt={alt} fill className='object-cover' /> */}
      <div className='project-container text-center w-[300px] mx-auto' key={title}>
        <div className='image max-w-[300px] h-[250px] relative'>
          <Image
            src={img}
            alt={alt}
            width={300}
            height={250}
            className='object-cover h-full w-full'
          />
          <p className='absolute top-0 right-0 bg-red-600 px-2'>{type}</p>
        </div>
        <div className='description'>
          <div className='title text-2xl pt-2'>{title}</div>
          <div className='links flex gap-2 py-1 justify-center'>
            <Link href='/' className='hover:-translate-y-1'>
              <p>{<BiSolidNotepad size={20} />}</p>
            </Link>
            <Link href='/' className='hover:-translate-y-1'>
              <p>{<FaGithub size={20} />}</p>
            </Link>
            <Link href='/' className='hover:-translate-y-1'>
              <p>{<FaExternalLinkSquareAlt size={20} />}</p>
            </Link>
          </div>
          <div className='tools'>
            <ul className='flex flex-wrap gap-2 justify-center text-sm'>
              {tools.map((tool: string) => (
                <li key={tool} className='pt-1'>
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
