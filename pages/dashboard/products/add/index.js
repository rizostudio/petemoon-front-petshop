import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { v4 } from "uuid";

//component
import DashboardLayout from "@/layout/DashboardLayout";

//media
import logout_Icon from "@/assets/common/logoutIconRed.svg";
import search_Icon from "@/assets/common/SearchRedIcon.svg";
import Search2_Icon from "@/assets/common/search-icon.svg";

import filter_Icon from "@/assets/common/filterIcon.svg";
import petBig_Icon from "@/assets/common/petBigIcon.svg";
import searchPlus_Icon from "@/assets/common/search-zoom-in.svg";
import StarGold_Icon from "@/assets/common/startGold.svg";
import StarEmpty_Icon from "@/assets/common/starEmpty.svg";

import boxRed_Icon from "@/assets/common/box-addIconRed.svg";
import boxWhite_Icon from "@/assets/common/box-addWhiteIcon.svg";
import product_Image from "@/assets/common/ProductPic1.svg";
import DownArrow_Icon from "@/assets/common/downArrow.svg";
import Sort_Icon from "@/assets/common/sortIcon.svg";
import leftArrow_Icon from "@/assets/common/leftArrowWhite.svg";
import more_Icon from "@/assets/common/more.svg";
import TrashRed_Icon from "@/assets/common/TrashIconRed.svg";
import CloseButton_Icon from "@/assets/common/close-button.svg";
import Edit2_Icon from "@/assets/common/EditIcon2.svg";
import addProduct_Icon from "@/assets/common/shop-addPrimaryIcon.svg";

//for open & close filterBox in desktop
//it's defined out of main component, for prevent re-render other components
const FilterBoxDialog = ({
  brand,
  petKind,
  setFilterPageOpen,
  setMainPageOpen,
}) => {
  const [FilterBoxOpen, setFilterBoxOpen] = useState(false);
  return (
    <div
      className={clsx("lg:w-[300px] lg:bg-white rounded-t-[25px] relative", {
        "rounded-b-[25px]": FilterBoxOpen == false,
      })}
    >
      <div className="flex justify-between items-center lg:px-6 py-2">
        <div
          className="flex items-center cursor-pointer lg:cursor-auto"
          onClick={() => {
            setFilterPageOpen(true);
            setMainPageOpen(false);
          }}
        >
          <Image src={filter_Icon} alt="FilterIcon" />
          <p className="text-xl lg:text-base text-black font-medium leading-7 mr-2">
            فیلترها
          </p>
        </div>
        <Image
          src={DownArrow_Icon}
          alt="DownArrowIcon"
          onClick={() => setFilterBoxOpen(!FilterBoxOpen)}
          className={clsx(`hidden lg:block cursor-pointer`, {
            "rotate-0": FilterBoxOpen == false,
            "rotate-180": FilterBoxOpen == true,
          })}
        />
      </div>
      <div
        className={clsx(
          "hidden w-full px-6 py-2 bg-white absolute z-20 rounded-b-[25px]",
          {
            "lg:block": FilterBoxOpen == true,
          }
        )}
      >
        <div className="flex flex-col items-stretch">
          <p className="text-base text-black font-medium leading-7 ">برند</p>
          <div>
            {brand.map((item, index) => (
              <div key={v4()} className="flex items-center">
                <input
                  id={`brand${index}`}
                  type="checkbox"
                  className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                />
                <label htmlFor={`brand${index}`} className="mr-2 ">
                  <bdi>{item.name}</bdi>
                </label>
              </div>
            ))}
          </div>
          <label className="text-base text-black font-medium leading-7 mt-6">
            بازه قیمتی
          </label>
          <div className="w-full flex justify-between text-xs px-2">
            <span>0</span>
            <span></span>
            <span></span>
            <span></span>
            <span>2500</span>
          </div>
          <style jsx>{``}</style>
          <input className="" type="range" min="1" max="100" step="1" />
          <p className="text-base text-black font-medium leading-7 mt-6">
            نوع پت
          </p>
          <div>
            {petKind.map((item, index) => (
              <div key={v4()} className="flex items-center">
                <input
                  id={`kind${index}`}
                  type="checkbox"
                  className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                />
                <label htmlFor={`kind${index}`} className="mr-2">
                  {item}
                </label>
              </div>
            ))}
          </div>
          <p
            onClick={() => setFilterBoxOpen(false)}
            className="self-end text-base text-gray-400 font-medium leading-7 mt-5 cursor-pointer"
          >
            حذف فیلترها
          </p>
        </div>
      </div>
    </div>
  );
};

const add = () => {
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
      <div
        className={clsx("lg:hidden w-full h-screen bg-white", {
          block: FilterPageOpen == true,
          hidden: FilterPageOpen == false,
        })}
      >
        <div className="h-[40px] w-full flex lg:hidden justify-between items-center p-10">
          <div className="flex items-center">
            <Image src={filter_Icon} alt="FilterIcon" />
            <p className="text-xl lg:text-base text-black font-medium leading-7 mr-2">
              فیلترها
            </p>
          </div>
          <div
            onClick={() => {
              setFilterPageOpen(false);
              setMainPageOpen(true);
            }}
            className="px-4 py-3 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer"
          >
            <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between items-stretch mt-5">
            <div className="px-10 py-4 border-b-[1px] border-solid border-secondary">
              <p className="text-base text-black font-medium leading-7 ">
                برند
              </p>
              <div>
                {brand.map((item, index) => (
                  <div key={v4()} className="flex items-center">
                    <input
                      id={`brand${index}`}
                      type="checkbox"
                      className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                    />
                    <label htmlFor={`brand${index}`} className="mr-2">
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="px-10 py-4 border-b-[1px] border-solid border-secondary mt-2">
              <label className="text-base text-black font-medium leading-7">
                بازه قیمتی
              </label>
              <div className="w-full flex justify-between text-xs px-2">
                <span>0</span>
                <span></span>
                <span></span>
                <span></span>
                <span>2500</span>
              </div>
              <input
                className="w-full border-[3px] border-red-500"
                type="range"
                min="1"
                max="100"
                step="1"
              />
            </div>
            <div className="px-10 py-4 flex flex-col border-b-[1px] border-solid border-secondary pb-10">
              <p className="text-base text-black font-medium leading-7 mt-2">
                نوع پت
              </p>
              <div>
                {petKind.map((item, index) => (
                  <div key={v4()} className="flex items-center">
                    <input
                      id={`kind${index}`}
                      type="checkbox"
                      className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                    />
                    <label htmlFor={`kind${index}`} className="mr-2">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex justify-between items-center px-10 py-5">
              <button className="w-2/3 text-base text-center text-black font-medium leading-7 p-3 bg-[#CFEBD8] border-[1px] border-solid border-verify rounded-[12px]">
                اعمال
              </button>
              <p className="w-1/3 text-base text-center text-black font-medium leading-7 p-3 cursor-pointer">
                حذف فیلترها
              </p>
            </div>
          </div>
        </div>
      </div>
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
          {!data.length ? (
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
                <bdi>
                  محصول مورد نظر خود را از میان بیش از 2000 کالا جستجو نمایید.
                </bdi>
              </p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex lg:flex-col items-stretch lg:justify-between w-full lg:w-[290px] p-4 lg:p-5 m-2 bg-white rounded-[15px] lg:rounded-[25px] shadow-shadowB"
                >
                  <div className="w-[120px] lg:w-full h-[120px] lg:h-[220px] overflow-hidden border-[1px] border-primary rounded-[15px] lg:rounded-[25px]">
                    <Image
                      src={item.Image}
                      alt="Product Picture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-stretch justify-between mr-5">
                    <div className="flex flex-col items-stretch w-full mt-2 lg:mt-5">
                      <p className="text-xs lg:text-base text-gray-400 font-normal leading-5 ">
                        <bdi>{item.group}</bdi>
                      </p>
                      <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between w-full">
                        <h2 className="text-base lg:text-xl text-black font-medium lg:font-bold leading-6">
                          <bdi>{item.title}</bdi>
                        </h2>
                        <div className="flex items-center lg:mt-1">
                          <div className="hidden lg:flex items-center">
                            {" "}
                            {starsBoxHandler(item.score)}{" "}
                          </div>
                          <Image
                            src={StarGold_Icon}
                            alt="Golden Star Icon"
                            className="lg:hidden w-3 h-3 ml-0.5"
                          />
                          <p className="text-[12px] text-gray-400 font-medium leading-4">
                            ({item.score})
                          </p>
                        </div>
                      </div>
                    </div>
                    {item.availabilityAmount ? (
                      <Link
                        href={`/dashboard/products/add/${index}`}
                        className="text-sm lg:text-base text-center text-primary font-medium leading-6 w-full mt-2 lg:mt-5 px-5 py-1 bg-[#EA635233] rounded-[10px]"
                      >
                        <bdi>افزودن</bdi>
                      </Link>
                    ) : (
                      <Link
                        href={`/dashboard/products/add/${index}`}
                        className="text-sm lg:text-base text-center text-gray-400 font-medium leading-6 w-full mt-2 lg:mt-5 px-5 py-1 bg-secondary rounded-[10px]"
                      >
                        <bdi>موجود در فروشگاه</bdi>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DashboardLayout>
    </div>
  );
};

export default add;
