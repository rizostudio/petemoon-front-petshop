import React from "react";
import Image from "next/image";

//media
import search_Icon from "@/assets/common/SearchRedIcon.svg";
import logout_Icon from "@/assets/common/logoutIconRed.svg";

export default function HeadingForMobile() {
  return (
    <div className="lg:hidden flex items-center">
      <div className="flex h-12 w-full px-5 py-3 bg-[#F2CDC8] rounded-[15px]">
        <input
          type="text"
          placeholder="جستجوی محصول، فروشگاه و..."
          className="h-full w-full text-base text-right text-white placeholder:text-primary placeholder:opacity-50 font-bold border-none bg-transparent appearance-none focus:ring-0 focus:outline-none focus:border-none peer"
        />
        <Image src={search_Icon} alt="SearchIcon" />
      </div>
      <div className="p-3 bg-[#F2CDC8] rounded-[15px] mr-1">
        <Image src={logout_Icon} alt="LogOut Icon" />
      </div>
    </div>
  );
}
