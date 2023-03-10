import React from "react";
import { StandardReactProps } from "../utils/interface";

interface CardProps extends StandardReactProps {
  id?: string;
  children: any;
}

export const Card = (props: CardProps) => {
  const { id, children } = props;
  return (
    <div
      id={id}
      className="container w-full max-w-5xl mx-auto bg-white shadow-sm"
    >
      <div className="p-10 space-y-4 lg:space-y-10 lg:p-16">{children}</div>
    </div>
  );
};
