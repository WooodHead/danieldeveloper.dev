import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Link = {
  name: string;
  path: string;
  icon?: any;
  mobile?: boolean;
  nested?: Link[];
};

export type PostMatter = {
  title: string;
  summary: string;
  publishedAt: string;
  slug: string;
  meta: any;
  isNew?: boolean;
  image?: string;
};

export interface MDXPost {
  post: {
    mdxSource: MDXRemoteSerializeResult;
    frontMatter: PostMatter;
  };
}
