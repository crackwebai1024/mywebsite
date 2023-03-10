import React from "react";
import Image from "next/image";
// import { StarIcon } from "./icons/StarIcon";
// import { StartEmptyIcon } from "./icons/StartEmptyIcon";
interface SubSkillProps {
  borderColor1: string;
  borderColor2: string;
  backColor: string;
  pic: any;
  picSize: string;
  title: string;
}

export const SubSkill = (props: SubSkillProps) => {
  const { borderColor1, borderColor2, backColor, pic, title } = props;
  return (
    <div className="w-32 mx-auto text-gray-700 border rounded-full sm:w-40 overflow-hidden">
      <div
        className={`${borderColor1} relative h-12 p-3 border-b-4  rounded-lg shadow `}
      >
        <div
          className={`absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 overflow-hidden ${backColor} border ${borderColor2} rounded-full`}
        >
          <Image
            src={pic}
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>

        <p className="items-center ml-5 text-lg font-hairline text-center ">
          {title}
        </p>
      </div>
    </div>
  );
};
