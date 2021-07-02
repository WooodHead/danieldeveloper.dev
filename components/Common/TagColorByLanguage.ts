import { ProgrammingLanguages } from "../../config/skills";

type ProgrammingLanguage = {
  [key in keyof typeof ProgrammingLanguages]: string;
};

const programmingLanguageColor: ProgrammingLanguage = {
  react: "cyan",
  javascript: "yellow",
  typescript: "teal",
  php: "gray",
};

export const tagColorByLanguage = (
  language: string,
  defaultColor: string = "blue"
): string => {
  language = language.toLowerCase();

  return programmingLanguageColor[language] || defaultColor;
};
