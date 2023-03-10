import React from "react";
import { StandardReactProps } from "../../utils/interface";

export const LinkIcon = (props: StandardReactProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={props.className}
    >
      <path d="M13.723 18.654l-3.61 3.609a5.921 5.921 0 01-8.378 0A5.878 5.878 0 010 18.075c0-1.582.615-3.07 1.734-4.189L6.6 9.021c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592a3.86 3.86 0 00-.964-1.652c-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865a3.85 3.85 0 000 5.44 3.849 3.849 0 005.442 0l2.425-2.424a7.482 7.482 0 002.654.284zm.161-16.918L10.31 5.312a7.57 7.57 0 012.653.283l2.393-2.389a3.85 3.85 0 015.44-.001 3.85 3.85 0 010 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002a3.767 3.767 0 01-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831a5.92 5.92 0 00-.001-8.377 5.92 5.92 0 00-8.379-.002z"></path>
    </svg>
  );
};
