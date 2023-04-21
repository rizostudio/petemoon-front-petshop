import React, { useState } from "react";
import Image from "next/image";

//media
import petBig_Icon from "@/assets/common/petBigIcon.svg";
import searchPlus_Icon from "@/assets/common/search-zoom-in.svg";

export default function EmptyResult() {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[150px] h-[150px] xs:w-[250px] xs:h-[250px] lg:w-[400px] lg:h-[400px] mt-[60px]">
        <Image
          src={petBig_Icon}
          alt="Big Pet Icon"
          className="w-full h-full object-cover"
        />
        <Image
          src={searchPlus_Icon}
          alt="Search Plus Icon"
          className="absolute bottom-5 left-12 xs:bottom-[25%] xs:left-[40%]"
        />
      </div>
      <p className="text-xl text-center text-primary font-black leading-10 mt-10">
        <bdi>محصول مورد نظر خود را از میان بیش از 2000 کالا جستجو نمایید.</bdi>
      </p>
    </div>
  );
}
