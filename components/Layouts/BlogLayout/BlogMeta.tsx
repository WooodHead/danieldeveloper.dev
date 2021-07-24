import { useRouter } from "next/router";
import Head from "next/head";

import { PostMatter } from "../../../types/types";

interface BlogMetaProps {
  frontMatter: PostMatter;
}

export const BlogMeta: React.FC<BlogMetaProps> = ({ frontMatter }) => {
  const router = useRouter();

  return (
    <Head>
      <title>{frontMatter.title}</title>
      <meta name="description" content={frontMatter.summary} />
      <meta name="keywords" content={frontMatter.keywords} />
      <meta name="robots" content="follow, index" />
      <meta
        property="og:url"
        content={`https://danieldeveloper.dev${router.asPath}`}
      />
      <link
        rel="canonical"
        href={`https://danieldeveloper.dev${router.asPath}`}
      />
      <meta property="og:site_name" content="Daniel Developer" />
      <meta property="og:description" content={frontMatter.summary} />
      <meta property="og:title" content={frontMatter.title} />
      {frontMatter.image && (
        <meta property="og:image" content={frontMatter.image} />
      )}

      {frontMatter.publishedAt && (
        <meta
          property="article:published_time"
          content={frontMatter.publishedAt}
        />
      )}
    </Head>
  );
};
