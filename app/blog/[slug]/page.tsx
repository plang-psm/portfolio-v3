import React from 'react';
import Markdown from 'markdown-to-jsx';
import { getPostMetadata } from '@app/lib/getPostMetadata';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import NotFound from '@components/NotFound';

export type ParamProps = {
  params: {
    slug?: string;
  };
  searchParams?: string;
};

function getPostContent(slug: string) {
  const folder = 'app/blogs/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf-8');

  const result = matter(content);
  return result;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata('blogs');
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }: ParamProps) {
  const id = params?.slug ? params?.slug : '';
  return {
    title: `Blog ${id.replaceAll('_', ' ')}`,
  };
}

const BlogPage = (props: ParamProps) => {
  const blogSlug = props.params.slug;
  if (!blogSlug) return <NotFound title='Slug' />;
  const post = getPostContent(blogSlug);
  if (!post) return <NotFound title='Posts' />;

  return (
    <main className='my-8'>
      <div className='header pb-6 border-b border-gray-600'>
        <Link href={'/blog/'}>
          <h1 className='hover:opacity-70 pb-4'>Blog.</h1>
        </Link>
        <h3 className='font-semibold text-[#02ec88]'>Tech. Life. & Everything in between.</h3>
      </div>
      <h2 className='font-semibold pt-6 text-center'>{post.data.title}</h2>
      <article className='max-w-[800px] mx-auto'>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
};

export default BlogPage;
