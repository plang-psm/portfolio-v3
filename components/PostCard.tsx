import Link from 'next/link';

export type PostData = {
  title: string;
  date: string;
  desc: string;
  slug: string;
};

export default function PostCard(
  { title, date, desc, slug }: PostData,
  key: number
) {
  return (
    <Link href={`/blog/${slug}`} key={key}>
      <div className='bg-gray-800 bg-opacity-60 px-16 py-10 shadow-lg backdrop-blur-md
      
       grid mx-auto md:mx-0 
       hover:bg-opacity-70
       p-6 rounded-xl max-w-[500px] lg:max-w-full min-h-[275px] lg:min-h-[250px] h-full'>
        <div>
          <h2 className='h-full'>{title}</h2>
        </div>
        <div>
          <p>{desc}</p>
        </div>
        <div className='flex justify-between'>
          <p>{date}</p>
          <p>Read More</p>
        </div>
      </div>
    </Link>
  );
}
