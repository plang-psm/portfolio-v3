'use client';

import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@app/utils/send-email';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import { FormData } from '@types';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

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
          <div className='links flex items-center'>
              <Link
                href={''}
                target='_blank'
                aria-label={`'s project github page link.`}
                className='hover:-translate-y-1 mr-4'
              >
                {<FaGithub size={25} />}
              </Link>
              <Link
                href={''}
                target='_blank'
                aria-label={`'s project live page link.`}
                className='hover:-translate-y-1'
              >
                {<FaExternalLinkSquareAlt size={25} />}
              </Link>
            </div>
        </div>
        <div className='contact-form pt-6' id='contact'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col '
            noValidate
          >
            <input
              type='text'
              id='name'
              className='p-1'
              {...register('name', { required: 'Username Required' })}
            />
            <div className='label-div text-start py-2'>
              {errors.name?.message ? (
                <label htmlFor='name' className='text-red-500'>
                  {errors.name?.message}
                </label>
              ) : (
                <label htmlFor='name'>Full name</label>
              )}
            </div>

            <input
              type='email'
              id='email'
              className='p-1'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: 'Invalid Email format',
                },
              })}
            />
            <div className='label-div text-start py-2'>
              {errors.email?.message ? (
                <label htmlFor='name' className='text-red-500'>
                  {errors.email?.message}
                </label>
              ) : (
                <label htmlFor='name'>Email</label>
              )}
            </div>
            <textarea
              cols={20}
              rows={5}
              className='p-1'
              {...register('message', { required: true })}
            ></textarea>
            <label htmlFor='message' className='text-start content-start py-2'>
              Anything to add? (Optional)
            </label>
            <button
              type='submit'
              className='bg-[#1F54D9] hover:bg-opacity-70'
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