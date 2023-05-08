import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { v4 } from "uuid";
import { useRouter } from "next/router";
//component
import DashboardLayout from "@/layout/DashboardLayout";
import FilterBoxDialog from "@/components/dashboard/orders/FilterBoxDialog";
//media
import search_Icon from "@/assets/common/SearchRedIcon.svg";
import logout_Icon from "@/assets/common/logoutIconRed.svg";
import product_Image from "@/assets/common/ProductPic1.svg";
import Filter_Icon from "@/assets/common/filterIcon.svg";
import downArrowBlack_Icon from "../../../assets/common/downArrowBlackIcon.svg";
import Sort_Icon from "@/assets/common/sortIcon.svg";
import leftArrow_Icon from "@/assets/common/leftArrowWhite.svg";
import tick_Icon from "../../../assets/common/tickIcon3.png";
import setting_Icon from "../../../assets/common/settingIconBlack.svg";
import calendar_Icon from "../../../assets/common/calendar-search.svg";
import FilterPage from "./FilterPage";
import SortPage from "./SortPage";
import OrderItemsForMobile from "./OrderItemsForMobile";
import OrderItemsForDesktop from "./OrderItemsForDesktop";
import { getListorders } from "@/services/order/getListOfOrders";

export default function OrdersList() {
  const router = useRouter();
  const [data, setData] = useState([]);
  // the array of sort options
  const [sortArr, setSortArr] = useState([
    { title: "پرفروش ترین" },
    { title: "محبوب ترین" },
    { title: "جدید ترین" },
    { title: "ارزان ترین" },
    { title: "گران ترین" },
  ]);
  // for change the color of choosen option in sorting
  const [sortValue, setSortValue] = useState("پرفروش ترین");

  // for remove data from list

  const brand = [
    { name: "پت بازار", id: "petBazzar" },
    { name: "پت شاپ۱", id: "petShop1" },
    { name: "پت ایران", id: "petIran" },
    { name: "تهران پت", id: "tehranPet" },
    { name: "کافه پت", id: "petCafe" },
  ];
  const petKind = ["سگ خانگی", "سگ شکارچی", "سگ وحشی", "سگ گله", "سگ نگهبان"];

  //Dynamic
  const [MainPageOpen, setMainPageOpen] = useState(true); //for open & close Main Page in mobile
  const [FilterPageOpen, setFilterPageOpen] = useState(false); //for open & close filter Page in mobile
  const [SortPageOpen, setSortPageOpen] = useState(false); //for open & close Sort Page in mobile
  useEffect(() => {
    const queryParams = new URLSearchParams(router.query);
    const getDta = async () => {
      const response = await getListorders(queryParams);
      console.log(response.data);
      setData(response.data);
    };
    getDta();
  }, [router.query]);
  return (
    <div>
      {/* Filter Page */}
      {/* <FilterPage
        setMainPageOpen={setMainPageOpen}
        brand={brand}
        petKind={petKind}
        FilterPageOpen={FilterPageOpen}
        setFilterPageOpen={setFilterPageOpen}
      /> */}
      {/* Sort Page */}
      {/* <SortPage
        setMainPageOpen={setMainPageOpen}
        setSortPageOpen={setSortPageOpen}
        sortValue={sortValue}
        sortArr={sortArr}
        SortPageOpen={SortPageOpen}
        setSortValue={setSortValue}
      /> */}
      <DashboardLayout>
        {/* Main page */}
        <div
          className={clsx("flex flex-col h-full items-stretch", {
            block: MainPageOpen == true,
            hidden: MainPageOpen == false,
          })}
        >
          {/* Heading for mobiel */}
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

          {!data ? (
            <div className="flex flex-col items-stretch">
              <p className="text-base lg:text-2xl text-error font-black leading-8">
                <bdi>هنوز هیچ سفارشی برای فروشگاه شما ثبت نشده است!</bdi>
              </p>
              <p className="text-xl text-gray-400 font-normal leading-10 mt-8">
                <bdi>
                  مشاهده{" "}
                  <Link href="/" className="text-info underline">
                    سفارش های تکمیل شده
                  </Link>
                </bdi>
              </p>
            </div>
          ) : (
            <div>
              <div className="flex flex-col lg:hidden">
                {/*Arrangment Box*/}
                <div className="flex mt-5">
                  {/* FilterBox */}
                  {/* <FilterBoxDialog
                    brand={brand}
                    petKind={petKind}
                    setFilterPageOpen={setFilterPageOpen}
                    setMainPageOpen={setMainPageOpen}
                  /> */}
                  {/* Sort Box */}
                  {/* <div className="flex items-center">
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
                              "text-gray-400 opacity-80":
                                item.title !== sortValue,
                            }
                          )}
                        >
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
                <OrderItemsForMobile data={data} />
              </div>
              <OrderItemsForDesktop data={data} />
            </div>
          )}
        </div>
      </DashboardLayout>
    </div>
  );
}
