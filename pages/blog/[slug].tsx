import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import { MDXPost } from "../../types/types";
import MDXComponents from "../../components/MDX";

const Post: React.FC<MDXPost> = ({ post: { mdxSource, frontMatter } }) => {
  return (
    <div>
      <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug);

  console.log("the post on server ", post);

  return { props: { post } };
}

export default Post;
