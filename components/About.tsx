import React from 'react'

function About() {
  return (
    <div className='about-skills'>
    <div className='py-16'>
      <h2 className='text-xl text-center md:text-start md:text-2xl font-extrabold'>About Me</h2>
      <p className='pt-2 font-light text-center md:text-start'>
        My name is Phillip and I am a{' '}
        <span className='font-bold'>Full Stack Developer</span> with an emphasis on the <span className='font-bold'>Front End</span> in the Los
        Angeles area. I have{' '}
        <span className='font-bold'>+1 years of experience</span>{' '}
        volunteering for Hack for LA and freelancing where I've had the
        chance to work with tools and methodologies that include{' '}
        <span className='font-bold'>
          Next.js, TypeScript, React.js, Node.js, Express.js, MongoDB,
          Tailwind CSS, GitHub, Figma, and Agile
        </span>
        {' '}to name a few. I am finishing up a{' '}
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
  )
}

export default About
