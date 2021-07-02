import ProjectCardSkeleton from "./ProjectCardSkeleton";
import ProjectCardDisplay from "./ProjectCardDisplay";
import Projects from "./Projects";
import { GithubRepositoryType } from "../../lib/network/types/GithubRepositoryType";

export interface ProjectCardProps {
  project: GithubRepositoryType;
}

export { Projects, ProjectCardDisplay, ProjectCardSkeleton };
