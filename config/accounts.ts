import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

type SocialAccount = {
  key: string;
  title: string;
  avatar?: string;
  profile: string;
  icon: React.FC;
};

export const GITHUB: SocialAccount = {
  key: "github",
  title: "Github Account",
  avatar: "https://avatars.githubusercontent.com/u/24314364?v=4",
  profile: "https://github.com/Ranacode",
  icon: FaGithub,
};

export const LINKEDIN: SocialAccount = {
  key: "linkedin",
  title: "Linkedin Account",
  profile: "https://www.linkedin.com/in/romerodeveloper",
  icon: FaLinkedin,
};

export const accounts: SocialAccount[] = [GITHUB, LINKEDIN];
