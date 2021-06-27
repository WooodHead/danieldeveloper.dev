export enum SkillType {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  DEVOPS = "DEVOPS",
  GENERAL = "GENERAL",
}

export type TechSkill = {
  name: string;
  description: string;
  link: string;
  image: string;
};

const IMAGE_PATH = "/assets/images/skills";

export type SkillList = {
  [key in keyof typeof SkillType]: TechSkill[];
};

export const skills: SkillList = {
  [SkillType.FRONTEND]: [
    {
      name: "HTML5",
      description: "Web layouts",
      link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
      image: `${IMAGE_PATH}/html-5.png`,
    },
    {
      name: "CSS3",
      description: "Web design",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      image: `${IMAGE_PATH}/css3.png`,
    },
    {
      name: "Javascript",
      description: "Web development",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      image: `${IMAGE_PATH}/javascript.png`,
    },
    {
      name: "Typescript",
      description: "Web development",
      link: "https://www.typescriptlang.org/",
      image: `${IMAGE_PATH}/typescript.png`,
    },
    {
      name: "React",
      description: "Web development",
      link: "https://reactjs.org/",
      image: `${IMAGE_PATH}/react.png`,
    },
  ],
  [SkillType.BACKEND]: [
    {
      name: "PHP",
      description: "Programming language",
      link: "https://php.net/",
      image: `${IMAGE_PATH}/php.png`,
    },
    {
      name: "Laravel",
      description: "A php framework",
      link: "https://laravel.com/",
      image: `${IMAGE_PATH}/laravel.png`,
    },
    {
      name: "Node JS",
      description: "Server side with javascript",
      link: "https://nodejs.org/",
      image: `${IMAGE_PATH}/node.png`,
    },
    {
      name: "Postgres",
      description: "Database",
      link: "https://www.postgresql.org/",
      image: `${IMAGE_PATH}/postgresql.png`,
    },
    {
      name: "Mysql",
      description: "Database",
      link: "https://www.mysql.com/",
      image: `${IMAGE_PATH}/mysql.png`,
    },
    {
      name: "Redis",
      description: "Database",
      link: "https://redis.io/",
      image: `${IMAGE_PATH}/redis.png`,
    },
  ],
  [SkillType.GENERAL]: [
    {
      name: "Git",
      description: "Version control system",
      link: "https://git-scm.com/",
      image: `${IMAGE_PATH}/git.png`,
    },
    {
      name: "Visual Studio Code",
      description: "Code editor of choice",
      link: "https://code.visualstudio.com/",
      image: `${IMAGE_PATH}/vscode.png`,
    },
    {
      name: "Docker",
      description: "Containers for Development, Shipment and Deployment",
      link: "https://www.docker.com/products/docker-desktop/",
      image: `${IMAGE_PATH}/docker.png`,
    },
    {
      name: "Linux",
      description: "The operating system",
      link: "https://www.linux.com/",
      image: `${IMAGE_PATH}/linux.png`,
    },
  ],
  [SkillType.DEVOPS]: [],
};
