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
       hover:bg-opacity-70 hover:text-[#02ec88]
       p-6 rounded-xl max-w-[500px] lg:max-w-full min-h-[275px] lg:min-h-[250px] h-full'>
        <div>
          <h3 className='h-full'>{title}</h3>
        </div>
        <div className='md:py-2 lg:py-4 font-light'>
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
