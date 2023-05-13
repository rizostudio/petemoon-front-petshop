import React from "react";
import Image from "next/image";
import Link from "next/link";
// media
import StarGold_Icon from "@/assets/common/startGold.svg";
import leftArrow_Icon from "@/assets/common/leftArrowWhite.svg";

export default function HeadingForMobile({ data }) {
  return (
    <div className="flex lg:hidden flex-row justify-between items-center py-5">
      <div className="flex flex-col justify-end">
        <div className="flex flex-row items-center">
          <h2 className="text-base text-black font-black leading-7 opacity-90 before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:align-middle before:rounded-[2px]">
            {data.name}
          </h2>
          <div className="flex flex-row items-center mr-1">
            <Image src={StarGold_Icon} alt="GoldenStarIcon" />
            <p className="text-base text-gray-400 font-medium leading-7 mr-[2px]">{`(${data.stars})`}</p>
          </div>
        </div>
      </div>
      <Link
        href="/dashboard/products/add"
        className="p-3 px-4 mr-2 bg-[#ECA299] border-[1px] border-primary solid rounded-[15px]"
      >
        <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
      </Link>
    </div>
  );
}
