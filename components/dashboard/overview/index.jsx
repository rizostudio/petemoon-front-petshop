import React, { useEffect, useState } from "react";
import Image from "next/image";
//media
import search_Icon from "@/assets/common/searchIcon3.svg";
import logout_Icon from "@/assets/common/logoutIconRed.svg";
import user_Image from "@/assets/common/user-square.svg";
import Summary from "@/components/dashboard/overview/Summary";
import SaleHistory from "@/components/dashboard/overview/SaleHistory";
import { getOverview } from "@/services/overview/getOverview";

export default function OverView() {
  const [data, setData] = useState({});
  const data2 = [
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
  ];
  // for select the date
  const [monthSelected, setMonthSelected] = useState("فروردین");
  const [yearSelected, setYearSelected] = useState(1401);
  // const dataSelected = data.filter((item) => item.month == monthSelected)[0];

  // for open and close the box
  const [dateShowBox, setDateShowBox] = useState(true);
  const [monthselectorBox, setMonthSelectorBox] = useState(false);
  const [yearselectorBox, setYearSelectorBox] = useState(false);
  useEffect(() => {
    const getDate = async () => {
      const response = await getOverview();
      if (response.success) {
        console.log(response.data);
        setData(response.data);
      } else {
        console.log(response.errors);
      }
    };
    getDate();
  }, []);
  return (
    <div className="h-screen lg:h-full flex flex-col items-stretch">
      {/* Heading for mobile  */}
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
      {/* summary Information */}
      <Summary data={data} />
      <SaleHistory data={data} />
    </div>
  );
}
