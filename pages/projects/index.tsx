import { GetStaticProps, NextPageContext } from "next";
import { GithubRepository } from "../../lib/network/services";
import { GithubRepositoryType } from "../../lib/network/types/GithubRepositoryType";
import { ProjectCardSkeleton, Projects } from "../../components/Projects";
import { PresentationLayout } from "../../components/Layouts/PresentationLayout";
interface ProjectsPageProps {
  projects: GithubRepositoryType[];
  skeletonLoaders: number;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projects = [],
  skeletonLoaders = 8,
}) => {
  return (
    <PresentationLayout
      title="Open Source Projects"
      subtitle="This page lists some of the open source repositories I have published
      or contributed to."
    >
      {projects.length > 0 ? (
        <Projects projects={projects} />
      ) : (
        [...Array(skeletonLoaders).keys()].map((index) => (
          <ProjectCardSkeleton key={index} />
        ))
      )}
    </PresentationLayout>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: NextPageContext
) => {
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

export default ProjectsPage;
