import React from "react";

export type Link = {
  name: string;
  path: string;
  icon?: any;
  mobile?: boolean;
  nested?: Link[];
};
