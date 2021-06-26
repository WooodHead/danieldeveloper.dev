export type TechSkill = {
  name: string;
  description: string;
  link: string;
  type: string;
  image: string;
};

export const skills: TechSkill[] = [
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: "/assets/images/skills/react.png",
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: "/assets/images/skills/javascript.png",
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: "/assets/images/skills/typescript.png",
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: "/assets/images/skills/html-5.png",
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: "/assets/images/skills/css3.png",
  },

  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: "/assets/images/skills/postgresql.png",
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: "/assets/images/skills/mysql.png",
  },
  {
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: "/assets/images/skills/redis.png",
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: "/assets/images/skills/vscode.png",
  },
];
