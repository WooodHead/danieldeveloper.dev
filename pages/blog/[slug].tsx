import { MDXRemote } from 'next-mdx-remote';
import { getFileBySlug, getFiles, mapPostsToStaticPaths } from '../../lib/mdx';
import { MDXPost } from '../../types/types';
import { BlogLayout } from '../../components/Layouts/BlogLayout';
import MDXComponents from '../../components/MDX';

const Post: React.FC<MDXPost> = ({ post: { mdxSource, frontMatter } }) => {
  return (
    <BlogLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
    </BlogLayout>
  );
};

export async function getStaticPaths({ locales }) {
  const posts = await getFiles('blog');

  return {
    paths: mapPostsToStaticPaths(posts, locales),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);

  return { props: { post } };
}

export default Post;
