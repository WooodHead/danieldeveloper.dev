import { SimpleGrid } from '@chakra-ui/layout';
import { PostCard } from '../../components/Blog';
import { MotionBox } from '../../components/Common';
import { PresentationLayout } from '../../components/Layouts/PresentationLayout';
import { getAllFilesFrontMatter } from '../../lib/mdx';
import { PostMatter } from '../../types/types';

interface BlogPageProps {
  posts: PostMatter[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <PresentationLayout
      title="Blog"
      subtitle="Read the latest blog posts on cutting edge technologies"
    >
      <SimpleGrid columns={[1, 1, 1]} spacing={4} mt={12}>
        {posts.map((post) => (
          <MotionBox whileHover={{ y: -5 }} key={post.slug} padding="5">
            <PostCard post={post} />
          </MotionBox>
        ))}
      </SimpleGrid>
    </PresentationLayout>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}

export default BlogPage;
