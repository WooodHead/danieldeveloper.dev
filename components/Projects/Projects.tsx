import { SimpleGrid } from "@chakra-ui/react";
import { ProjectCardDisplay } from ".";
import { GithubRepositoryType } from "../../lib/network/types/GithubRepositoryType";
import { MotionBox, PageTransitions } from "../Common";

interface ProjectsProps {
  projects: GithubRepositoryType[];
  displayOption: "card" | "grid";
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <PageTransitions.PageSlideFade>
      <PageTransitions.StaggerChildren>
        <SimpleGrid columns={[1, 2, 2]} spacing={4} mt={12}>
          {projects.map((project) => (
            <MotionBox whileHover={{ y: -5 }} key={project.name}>
              <ProjectCardDisplay project={project} />
            </MotionBox>
          ))}
        </SimpleGrid>
      </PageTransitions.StaggerChildren>
    </PageTransitions.PageSlideFade>
  );
};

export default Projects;
