import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import mdxPrism from 'mdx-prism';
import readingTime from 'reading-time';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export async function getFiles(type: string) {
  return fs.readdirSync(path.join(root, 'data', type));
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(root, 'data', type));

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'data', type, postSlug),
      'utf8'
    );
    const { content, data } = matter(source);

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
        meta: readingTime(content)
      },
      ...allPosts
    ];
  }, []);
}

export async function getFileBySlug(type: string, slug: string) {
  const source = fs.readFileSync(
    path.join(root, 'data', type, `${slug}.mdx`),
    'utf8'
  );

  const { data, content } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['anchor']
            }
          }
        ],
        require('remark-code-titles')
      ],
      rehypePlugins: [mdxPrism]
    }
  });

  return {
    mdxSource,
    frontMatter: {
      meta: { ...readingTime(content) },
      slug,
      ...data
    }
  };
}

export const mapPostsToStaticPaths = (
  posts: string[],
  locales: string[]
): object[] =>
  posts
    .map((post) =>
      locales.map((locale: string) => ({
        params: {
          slug: post.replace(/\.mdx/, '')
        },
        locale
      }))
    )
    .flat();
