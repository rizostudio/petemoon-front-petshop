import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { v4 } from "uuid";

//component
import DashboardLayout from "@/layout/DashboardLayout";

//media
import product_Image from "@/assets/common/ProductPic1.svg";
import logout_Icon from "@/assets/common/logoutIconRed.svg";
import search_Icon from "@/assets/common/SearchRedIcon.svg";
import Search2_Icon from "@/assets/common/search-icon.svg";
import StarGold_Icon from "@/assets/common/startGold.svg";
import StarEmpty_Icon from "@/assets/common/starEmpty.svg";
import filter_Icon from "@/assets/common/filterIcon.svg";
import petBig_Icon from "@/assets/common/petBigIcon.svg";
import searchPlus_Icon from "@/assets/common/search-zoom-in.svg";
import leftArrow_Icon from "@/assets/common/leftArrowWhite.svg";
import FilterBoxDialog from "./FilterBoxDialog";
import FilterPage from "./FilterPage";
import EmptyResult from "./EmptyResult";
import ProductList from "./ProductList";

export default function PetemoonProducts() {
  const [data, setData] = useState([
    {
      title: "غذای سگ خشک 700 گرمی",
      Image: product_Image,
      code: "#750GH",
      price: 75000,
      availabilityAmount: 60,
      group: "دسته خوراکی",
      score: 4,
    },
    {
      title: "غذای سگ خشک 700 گرمی",
      Image: product_Image,
      code: "#750GH",
      price: 75000,
      availabilityAmount: 60,
      group: "دسته خوراکی",
      score: 3,
    },
    {
      title: "غذای سگ خشک 700 گرمی",
      Image: product_Image,
      code: "#750GH",
      price: 75000,
      availabilityAmount: 60,
      group: "دسته خوراکی",
      score: 5,
    },
    {
      title: "غذای سگ خشک 700 گرمی",
      Image: product_Image,
      code: "#750GH",
      price: 75000,
      availabilityAmount: 60,
      group: "دسته خوراکی",
      score: 2,
    },
    {
      title: "غذای سگ خشک 700 گرمی",
      Image: product_Image,
      code: "#750GH",
      price: 75000,
      availabilityAmount: 0,
      group: "دسته خوراکی",
      score: 1,
    },
  ]);
  const brand = [
    { name: "پت بازار", id: "petBazzar" },
    { name: "پت شاپ۱", id: "petShop1" },
    { name: "پت ایران", id: "petIran" },
    { name: "تهران پت", id: "tehranPet" },
    { name: "کافه پت", id: "petCafe" },
  ];
  const petKind = ["سگ خانگی", "سگ شکارچی", "سگ وحشی", "سگ گله", "سگ نگهبان"];
  const [FilterBoxOpen, setFilterBoxOpen] = useState(false);

  // for showing stars
  const starsBoxHandler = (stars) => {
    const starsBox = [];
    for (let i = 0; i < stars; i++) {
      starsBox.push(<Image src={StarGold_Icon} alt="GoldenStarIcon" />);
    }
    for (let i = 0; i < 5 - stars; i++) {
      starsBox.push(<Image src={StarEmpty_Icon} alt="EmptyStarIcon" />);
    }
    return starsBox;
  };

  //Dynamic
  const [MainPageOpen, setMainPageOpen] = useState(true); //for open & close Main Page in mobile
  const [FilterPageOpen, setFilterPageOpen] = useState(false); //for open & close filter Page in mobile
  const [SortPageOpen, setSortPageOpen] = useState(false); //for open & close Sort Page in mobile
  return (
    <div>
      {/* Filter Page */}
      <FilterPage
        setMainPageOpen={setMainPageOpen}
        FilterPageOpen={FilterPageOpen}
        setFilterPageOpen={setFilterPageOpen}
        brand={brand}
        petKind={petKind}
      />
      <DashboardLayout>
        {/* Main Page */}
        <div
          className={clsx("flex-col h-full items-stretch", {
            flex: MainPageOpen == true,
            "hidden lg:flex": MainPageOpen == false,
          })}
        >
          {/* Heading for mobile  */}
          <div className="lg:hidden flex items-center justify-center w-full h-[44px] mb-4">
            <div
              onClick={() => {
                setFilterPageOpen(true);
                setMainPageOpen(false);
              }}
              className="flex flex-col items-center justify-center cursot-pointer w-1/5 h-full bg-[#F2CDC8] rounded-[15px]"
            >
              <Image src={filter_Icon} alt="Filter Icon" />
            </div>
            <div className="flex items-center w-4/5 h-full px-5 bg-[#F2CDC8] rounded-[15px] mx-2">
              <input
                type="text"
                placeholder="جستجوی محصول، فروشگاه و..."
                className="h-full w-full text-base text-right text-white placeholder:text-primary placeholder:opacity-50 font-bold border-none bg-transparent appearance-none focus:ring-0 focus:outline-none focus:border-none peer"
              />
              <Image src={search_Icon} alt="SearchIcon" />
            </div>
            <div className="flex flex-col items-center justify-center w-1/5 h-full bg-[#F2CDC8] rounded-[15px]">
              <Image src={logout_Icon} alt="LogOut Icon" />
            </div>
          </div>
          {/* Heading for desktop */}
          <div className="hidden lg:flex items-center mb-5">
            <FilterBoxDialog
              brand={brand}
              petKind={petKind}
              FilterBoxOpen={FilterBoxOpen}
              setFilterBoxOpen={setFilterBoxOpen}
              setFilterPageOpen={setFilterPageOpen}
              setMainPageOpen={setMainPageOpen}
            />
            <div className="flex items-center w-4/5 h-full px-5 bg-white rounded-[20px] shadow-shadowB mr-5">
              <Image src={Search2_Icon} alt="SearchIcon" className="invert" />
              <input
                type="text"
                placeholder="جستجو"
                className="h-full w-full text-base text-right text-black placeholder:text-black placeholder:opacity-50 font-medium leading-7 border-none bg-transparent appearance-none focus:ring-0 focus:outline-none focus:border-none peer"
              />
            </div>
          </div>
          {!data.length ? <EmptyResult /> : <ProductList data={data} />}
        </div>
      </DashboardLayout>
    </div>
  );
}
