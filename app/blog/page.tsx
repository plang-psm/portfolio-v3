import { getPostMetadata } from '@app/lib/getPostMetadata';
import PostCard from '@components/PostCard';
import React from 'react';

export default function Blog() {
  const postMetadata = getPostMetadata('blogs');
  return (
    <main className='my-8'>
      <div className='header mb-12 pb-6 border-b border-gray-600'>
        <div className='flex justify-between items-center'>
          <h1 className='pb-4'>Blog.</h1>
          <h3>{postMetadata.length} Articles</h3>
        </div>
        <h4 className='font-semibold'>Tech. Life. & Everything in between.</h4>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {postMetadata.map(({ title, date, desc, slug }, index: number) => {
          return (
            <div className=''>
              <PostCard
                key={index}
                title={title}
                date={date}
                desc={desc}
                slug={slug}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
