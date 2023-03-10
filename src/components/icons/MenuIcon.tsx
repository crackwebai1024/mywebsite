import React from "react";
import { StandardReactProps } from "../../utils/interface";

export const MenuIcon = (props: StandardReactProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={props.className}
    >
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
  );
};
