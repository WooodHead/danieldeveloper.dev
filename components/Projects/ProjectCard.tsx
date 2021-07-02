import { GithubRepositoryType } from "../../lib/network/types/GithubRepositoryType";

interface ProjectCardProps {
  project: GithubRepositoryType;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return <div>proyecto</div>;
};

export default ProjectCard;
