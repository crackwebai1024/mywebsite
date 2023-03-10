import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LinkedinIcon } from "./icons";

export const RecommendDetail = ({ item }: any) => {
  return (
    <div className="grid py-4 sm:py-6 lg:py-14 sm:grid-cols-8">
      <div className=" sm:col-span-1">
        <div className="object-cover object-center w-20 h-20 mx-auto overflow-hidden rounded-full">
          <Image
            src={item.photoUrl}
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className="space-y-2 sm:col-span-2">
        <div>
          <p className="font-bold text-center ">{item.name}</p>
          <p className="text-sm text-center text-gray-500">{item.job}</p>
        </div>

        <Link href={item.contactUrl}>
          <div className="flex justify-center w-full h-full cursor-pointer">
            <LinkedinIcon className="w-8 h-8 fill-current text-lightBlue-600" />
          </div>
        </Link>
      </div>
      <div className="text-sm text-gray-700 sm:col-span-5 md:text-base">
        <p>{item.content}</p>
      </div>
    </div>
  );
};
