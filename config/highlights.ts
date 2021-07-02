export type HighLight = {
  href: string;
  title: string;
  badge?: {
    color: string;
    text: string;
  };
};

export const highLights: HighLight[] = [
  {
    href: "/tech-stack",
    title: "Tech stack",
    badge: {
      color: "green",
      text: "New",
    },
  },
  {
    href: "/projects",
    title: "Open Source Projects",
  },
];
