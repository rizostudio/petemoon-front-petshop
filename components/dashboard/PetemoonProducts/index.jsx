import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { v4 } from "uuid";
import { useRouter } from "next/router";
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
import { getPetemoonProducts } from "@/services/petemoonProducts/getPetemoonProducts";
import { getProductFilter } from "@/services/petemoonProducts/getProductFilters";

export default function PetemoonProducts() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [brand, setBrand] = useState([]);
  const [petCategory, setPetCategory] = useState([]);

  const [FilterBoxOpen, setFilterBoxOpen] = useState(false);

  //Dynamic
  const [MainPageOpen, setMainPageOpen] = useState(true); //for open & close Main Page in mobile
  const [FilterPageOpen, setFilterPageOpen] = useState(false); //for open & close filter Page in mobile
  const [SortPageOpen, setSortPageOpen] = useState(false); //for open & close Sort Page in mobile
  useEffect(() => {
    const getDate = async () => {
      const queryParams = new URLSearchParams(router.query);
      const response = await getPetemoonProducts(queryParams.toString());
      if (response.success) {
        console.log(response.data);
        setData(response.data.products);
      } else {
        console.log(response.errors);
      }
    };
    getDate();
  }, [router.query]);
  useEffect(() => {
    const getData = async () => {
      const response = await getProductFilter();
      console.log(response);
      setBrand(response.data.brands);
      setPetCategory(response.data.pet_types);
    };
    getData();
  }, []);
  return (
    <div>
      {/* Filter Page */}
      <FilterPage
        setMainPageOpen={setMainPageOpen}
        FilterPageOpen={FilterPageOpen}
        setFilterPageOpen={setFilterPageOpen}
        brand={brand}
        petCategory={petCategory}
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
              petCategory={petCategory}
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
