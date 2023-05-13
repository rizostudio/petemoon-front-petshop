import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";

//media
import Sort_Icon from "@/assets/common/sortIcon.svg";

export default function SortBoxDialog({
  setMainPageOpen,
  setSortPageOpen,
  sortArr,
  sortValue,
}) {
  return (
    <div className="flex items-center">
      <div
        onClick={() => {
          setSortPageOpen(true);
          setMainPageOpen(false);
        }}
        className="flex items-center"
      >
        <Image
          src={Sort_Icon}
          alt="SortIcon"
          className="cursor-pointer lg:cursor-auto"
        />
        <p className="hidden lg:block text-xl text-black font-medium leading-8 mx-2">
          <bdi>مرتب سازی:</bdi>
        </p>
        <p className="lg:hidden text-xl text-black font-medium leading-8 mx-2 cursor-pointer">
          {sortValue}
        </p>
      </div>
      <ul className="hidden lg:flex items-center">
        {sortArr.map((item) => (
          <li
            key={v4()}
            onClick={() => setSortValue(item.title)}
            className={clsx(
              "text-xl font-medium leading-8 mx-2 cursor-pointer",
              {
                "text-primary": item.title == sortValue,
                "text-gray-400 opacity-80": item.title !== sortValue,
              }
            )}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
