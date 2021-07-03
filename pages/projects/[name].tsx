import { GetStaticPaths, GetStaticProps, NextPageContext } from "next";
import { GithubRepository } from "../../lib/network/services";

interface ProjectsProps {
  project: object;
}

const Project: React.FC<ProjectsProps> = ({ project }) => {
  return <div>project</div>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const githubApi = new GithubRepository();

  const response = await githubApi.getUserRepository({
    username: process.env.NEXT_PUBLIC_GITHUB_USER,
    repository: params.name.toString().trim(),
  });

  return {
    props: {
      project: response.data || {},
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (
  context: NextPageContext
) => {
  const githubApi = new GithubRepository();

  const response = await githubApi.getUserRepositories({
    username: process.env.NEXT_PUBLIC_GITHUB_USER,
  });

  return {
    paths: response.data.map((project) => ({ params: { name: project.name } })),
    fallback: "blocking",
  };
};

export default Project;
