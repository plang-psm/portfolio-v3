import React from 'react';
import Link from 'next/link';

function Contact() {
  return (
    <div className='mt-16 max-w-[325px] md:max-w-full w-full mx-auto'>
      <div className='container mx-auto md:px-0 w-full text-center md:grid md:grid-cols-2 md:gap-4'>
        <div className='contact-container md:text-start md:px-8 md:py-16 my-auto'>
          <h2 className='text-5xl md:text-6xl pb-2 bg-gradient-to-r from-cyan-300 to-blue-700 bg-clip-text text-transparent inline-block'>
            Get in Touch
          </h2>
          <p className='md:text-md pb-2'>
            I'm currently looking for new opportunities. Reach out if you have a
            question or just want to say hi!
          </p>
          <ul className='flex gap-4'>
            <Link
              href={'https://github.com/plang-psm'}
              className='hover:-translate-y-1 hover:text-cyan-500'
            >
              GitHub
            </Link>
            <Link
              href={'https://www.linkedin.com/in/plang-psm/'}
              className='hover:-translate-y-1 hover:text-cyan-500'
            >
              LinkedIn
            </Link>
          </ul>
        </div>
        <div className='contact-form pt-6'>
          <form
            action='https://formsubmit.co/el/sitena'
            method='POST'
            id='contact'
            className='flex flex-col'
          >
            <input
              type='text'
              id='fullname'
              name='fullname'
              required
              className='p-1'
            />
            <label htmlFor='fullname' className='text-sm text-start py-2'>
              Full name
            </label>
            <input
              type='text'
              id='email'
              name='email'
              required
              className='p-1'
            />
            <label htmlFor='email' className='text-sm text-start py-2 '>
              Email
            </label>
            <textarea
              name=''
              id='message'
              cols={20}
              rows={5}
              className='p-1'
            ></textarea>
            <label
              htmlFor='message'
              className='text-sm text-start content-start py-2'
            >
              Anything to add? (Optional)
            </label>
            <button
              type='submit'
              className='bg-cyan-500 bg-opacity-50 hover:bg-opacity-90'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
