import React, { useState } from "react";
import { LinkIcon } from "./icons/LinkIcon";
import Image from "next/image";
export const ProjectItem = ({ item }: any) => {
  function checkLiveSite() {
    window.open(item.siteUrl, "_blank");
  }
  const [hoveredEle, setHover] = useState(false);

  return (
    <div className="mx-auto lg:p-4 ">
      <div className="container flex items-center justify-center max-w-sm mx-auto overflow-hidden transition duration-100 ease-in-out transform rounded-md shadow cursor-pointer hover:-translate-y-1 hover:scale-105 cardBg">
        <div
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => setHover(false)}
          className="relative"
        >
          {hoveredEle && (
            <div className="absolute z-20 flex items-center justify-center flex-1 w-full h-full">
              <div>
                <button
                  onClick={checkLiveSite}
                  className="flex items-center p-3 rounded-lg linkBg"
                >
                  <LinkIcon className="w-4 h-4 text-gray-600 fill-current linkBg" />
                  <p className="mx-2 font-sans font-semibold text-gray-600 linkBg">
                    LEARN MORE
                  </p>
                </button>
              </div>
            </div>
          )}
          <div className="absolute w-full image-cover rounded-t-md">
            <div className="float-left w-16 h-16 p-2 m-4 text-center text-white bg-gray-800 rounded-full ">
              <span className="font-sans text-xs font-bold tracking-wide">
                {item.period?.year}
              </span>
              <span className="block font-sans text-xs font-bold tracking-wide uppercase border-t border-white">
                {item.period?.month}
              </span>
            </div>
          </div>
          <Image
            src={item.img}
            alt="Picture of the author"
            width={500}
            height={300}
          />

          <div className="p-4 bg-white rounded-b-md description">
            <span className="block text-lg font-bold tracking-wide text-gray-800">
              {item.siteName}
            </span>
            <span className="block text-sm text-gray-600">
              {item.description}
            </span>

            <span className="block text-sm font-bold tracking-wide text-gray-800">
              Tech Stack:
            </span>

            <span className="block text-sm text-gray-600">
              {item.techStack}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
