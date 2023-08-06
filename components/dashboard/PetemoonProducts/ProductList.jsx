import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//media
import StarGold_Icon from "@/assets/common/startGold.svg";
import StarEmpty_Icon from "@/assets/common/starEmpty.svg";
//services
import { starsBoxHandler } from "@/services/products/starsOfProduct";
export default function ProductList({ data }) {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between">
      {data.map((item, index) => (
        <div
          key={item.id}
          className="flex lg:flex-col items-stretch lg:justify-between w-full lg:w-[270px] p-4 lg:p-5 m-2 bg-white rounded-[15px] lg:rounded-[25px] shadow-shadowB"
        >
          <div className="w-[120px] lg:w-full h-[120px] lg:h-[220px] overflow-hidden   rounded-[5px] lg:rounded-[25px]">
            <Image
              width={100}
              height={100}
              src={`https://api.petemoon.com${item.picture_url}`}
              alt="Product Picture"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-stretch justify-between ">
            <div className="flex flex-col items-stretch w-full mt-2 lg:mt-5">
              <p className="text-xs lg:text-base text-gray-400 font-normal leading-5 ">
                <bdi>{item.category.pet_category}</bdi>
              </p>
              <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between w-full">
                <h2 className="text-base producatrTitle lg:text-xl text-black font-medium lg:font-bold leading-6">
                  <bdi>{item.name}</bdi>
                </h2>
                <div className="flex items-center lg:mt-1">
                  <div className="hidden lg:flex items-center">
                    {item.rating
                      ? starsBoxHandler(item.rating)
                      : starsBoxHandler(5)}
                  </div>
                  <Image
                    src={StarGold_Icon}
                    alt="Golden Star Icon"
                    className="lg:hidden w-3 h-3 ml-0.5"
                  />
                  <p className="text-[12px] text-gray-400 font-medium leading-4">
                    ({item.rating ? item.rating : 5})
                  </p>
                </div>
              </div>
            </div>

            <Link
              href={`/dashboard/products/add/${item.slug}`}
              className="text-sm lg:text-base text-center text-primary font-medium leading-6 w-full mt-2 lg:mt-5 px-5 transition ease-in-out py-1 bg-[#EA635233] hover:bg-primary hover:text-white rounded-[10px]"
            >
              <bdi>افزودن</bdi>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
