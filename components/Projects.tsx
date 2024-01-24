'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import PROJECT_DATA from '@data/ProjectsData';
import TabButton from './TabButton';

function Projects() {
  const [projectTab, setProjectTab] = useState('all');

  const filteredData = PROJECT_DATA.filter((project) =>
    project.type.includes(projectTab)
  );
  return (
    <div className='projects my-16'>
      <div className='filter flex text-xl md:text-2xl font-extrabold'>
        <TabButton
          selectTab={() => setProjectTab('all')}
          active={projectTab === 'all'}
        >
          All Projects
        </TabButton>
        <TabButton
          selectTab={() => setProjectTab('professional')}
          active={projectTab === 'professional'}
        >
          Professional
        </TabButton>
        <TabButton
          selectTab={() => setProjectTab('personal')}
          active={projectTab === 'personal'}
        >
          Personal
        </TabButton>
      </div>
      <div className='projects-display overflow-hidden mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filteredData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            alt={project.alt}
            img={project.img}
            type={project.type}
            github={project.github}
            live={project.live}
            tools={project.tools}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
