import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export type SocialAccount = {
  key: string;
  title: string;
  avatar?: string;
  profile: string;
  color: string;
  icon: React.FC;
};

export const GITHUB: SocialAccount = {
  key: "github",
  title: "Github Account",
  avatar: "https://avatars.githubusercontent.com/u/24314364?v=4",
  profile: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USER}`,
  color: "gray",
  icon: FaGithub,
};

export const LINKEDIN: SocialAccount = {
  key: "linkedin",
  title: "Linkedin Account",
  profile: `https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USER}`,
  color: "linkedin",
  icon: FaLinkedin,
};

export const accounts: SocialAccount[] = [GITHUB, LINKEDIN];
