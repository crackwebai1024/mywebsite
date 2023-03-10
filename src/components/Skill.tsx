import React from "react";
import Image from "next/image";
import { StarIcon } from "./icons/StarIcon";
import { StartEmptyIcon } from "./icons/StartEmptyIcon";
import clsx from "clsx";
interface SkillProps {
  borderColor1: string;
  borderColor2: string;
  backColor: string;
  pic: any;
  picSize: string;
  title: string;
  degree: number;
  degreeColor: string;
}

export const Skill = (props: SkillProps) => {
  const {
    borderColor1,
    borderColor2,
    backColor,
    pic,
    picSize,
    title,
    degree,
    degreeColor,
  } = props;

  const wrapperClass = clsx(
    "relative",
    "sm:h-32",
    "p-3",
    "border-b-4",
    "rounded-lg",
    "shadow",
    borderColor1
  );
  return (
    <div className="w-32 mx-auto text-gray-700 border rounded-lg sm:w-40 ">
      <div className={wrapperClass}>
        <div
          className={`absolute w-12 h-12 sm:w-16 sm:h-16 ${picSize} -mt-8 -ml-8 overflow-hidden ${backColor} border rounded-full ${borderColor2}`}
        >
          <Image
            src={pic}
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>

        <p className="items-center mt-4 text-lg font-hairline text-center ">
          {title}
        </p>

        <div className="relative w-full h-1 mt-8 bg-gray-400 rounded ">
          <div className="absolute right-0 flex p-1 text-sm -top-6 ">
            {degree >= 95 ? (
              [1, 2, 3, 4, 5].map((idx) => (
                <StarIcon
                  key={idx}
                  className="w-3 h-3 text-yellow-300 fill-current"
                />
              ))
            ) : degree >= 90 ? (
              <div className="flex ">
                {[1, 2, 3, 4].map((idx) => (
                  <StarIcon
                    key={idx}
                    className="w-3 h-3 text-yellow-300 fill-current"
                  />
                ))}
                <StartEmptyIcon className="w-3 h-3 text-yellow-300 fill-current" />
              </div>
            ) : (
              <div className="flex ">
                {[1, 2, 3].map((idx) => (
                  <StarIcon
                    key={idx}
                    className="w-3 h-3 text-yellow-300 fill-current"
                  />
                ))}
                {[1, 2].map((idx) => (
                  <StartEmptyIcon
                    key={idx}
                    className="w-3 h-3 text-yellow-300 fill-current"
                  />
                ))}
              </div>
            )}
          </div>
          <div
            className={` ${
              degree > 85
                ? degree > 90
                  ? degree > 95
                    ? "w-full"
                    : "w-11/12"
                  : "w-10/12"
                : "w-9/12"
            } absolute inset-0 h-1 rounded ${degreeColor} `}
          ></div>
        </div>
      </div>
    </div>
  );
};
