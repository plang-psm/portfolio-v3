import fs from 'fs';
import matter from 'gray-matter';

export function getPostMetadata(basePath: string) {
  const folder = 'app/' + basePath + '/';
  const files = fs.readdirSync(folder);
  const mdPosts = files.filter((file) => file.endsWith('.md'));

  const posts = mdPosts.map((filename) => {
    const fileContents = fs.readFileSync(
      `app/${basePath}/${filename}`,
      'utf-8'
    );
    const result = matter(fileContents);
    return {
      title: result.data.title,
      date: result.data.date,
      desc: result.data.desc,
      slug: filename.replace('.md', ''),
    };
  });

  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
