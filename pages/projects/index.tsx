import { GetStaticProps } from "next";
import { GithubRepository } from "../../lib/network";

interface ProjectsProps {
  projects: [];
}

const Project: React.FC<ProjectsProps> = ({ projects }) => {
  console.log("props", projects);
  return <div>proyectos</div>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const githubApi = new GithubRepository();

  const response = await githubApi.getUserRepositories({
    username: process.env.NEXT_PUBLIC_GITHUB_USER,
  });

  return {
    props: {
      projects: response.data || [],
    },
  };
};

export default Project;
