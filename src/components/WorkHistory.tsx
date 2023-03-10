import React from "react";
import { StandardReactProps } from "../utils/interface";

interface WorkHistoryProps extends StandardReactProps {
  period: string;
  children: any;
}

export const WorkHistory = (props: WorkHistoryProps) => {
  const { children, period } = props;

  return (
    <div className="container flex flex-wrap p-2 mx-auto ">
      <div className="flex flex-wrap w-full">
        <div className="flex w-full">
          <div className="relative flex lg:w-2/5">
            <div className="absolute inset-0 flex items-center justify-center w-2 h-full mt-6">
              <div
                className="h-full bg-gray-200 pointer-events-none"
                style={{ width: "2px" }}
              />
            </div>
            <div className="flex-shrink-0 w-2 h-2 mt-2 bg-gray-500 rounded-full "></div>
            <div className="flex-grow hidden mt-1 ml-4 lg:flex">
              <h2 className="text-sm font-medium tracking-wider text-gray-600 ">
                {period}
              </h2>
            </div>
          </div>
          <div className="w-full ml-8 text-gray-600 lg:ml-24 ">
            <h2 className="pb-2 text-sm font-medium tracking-wider text-gray-600 lg:hidden">
              {period}
            </h2>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
