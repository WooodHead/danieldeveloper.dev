import { Link } from "../types/types";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { MdPermIdentity, MdTimeline } from "react-icons/md";

export const navbarLinks: Link[] = [
  { name: "Blog", path: "/blog", mobile: true, icon: BsBook },
  { name: "About", path: "/about", mobile: true, icon: MdPermIdentity },
  {
    name: "Links",
    path: "",
    nested: [
      {
        name: "Tech Stack",
        path: "/tech-stack",
        icon: AiTwotoneThunderbolt,
        mobile: true,
      },
      {
        name: "Developer story",
        path: "/developer-story",
        icon: MdTimeline,
        mobile: true,
      },
    ],
    mobile: true,
  },
];
