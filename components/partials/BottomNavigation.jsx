import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useRouter } from "next/router";
//media
import home_Icon from "../../assets/common/homeIcon2.svg";
import category_Icon from "../../assets/common/categoryIcon.svg";
import search_Icon from "../../assets/common/searchIcon3.svg";
import profile_Icon from "../../assets/common/profileIcon4.svg";
import messageGray_Icon from "../../assets/common/messageIconGray.svg";
import walletGray_Icon from "../../assets/common/walletIconGray.svg";
import ordersGray_Icon from "../../assets/common/shopping-cartGray.svg";
import prodcutsGray_Icon from "../../assets/common/shopGray.svg";
import productAddGray_Icon from "../../assets/common/shop-addGray.svg";

const BottomNavigation = () => {
  const router = useRouter();
  const menuArr = [
    { id: "products", name: "محصولات", icon: prodcutsGray_Icon },
    { id: "orders", name: "سفارش ها", icon: ordersGray_Icon },
    { id: "products/add", name: "محصول جدید", icon: productAddGray_Icon },
    { id: "wallet", name: "گردش مالی", icon: walletGray_Icon },
    {
      id: "my-messages",
      name: "پیام های من",
      icon: messageGray_Icon,
      notification: 10,
    },
  ];
  // const pageName = menuArr.find(item => router.asPath.includes(item.id)) // for showing the title of page in mobile
  return (
    <div className="lg:hidden flex justify-between items-center fixed bottom-0 inset-x-0 px-10 py-3 bg-white shadow-shadowD">
      {menuArr.map((item, index) => (
        <Link
          href={`/dashboard/${item.id}`}
          className="flex flex-col items-center"
        >
          <Image src={item.icon} alt="Home Icon" />
          <h3
            className={clsx(
              `text-sm text-center  font-medium leading-5 mt-1 `,
              {
                "text-primary": router.asPath === `/dashboard/${item.id}`,
                "text-gray-400": router.asPath !== `/dashboard/${item.id}`,
              }
            )}
          >
            <bdi>{item.name}</bdi>
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavigation;
