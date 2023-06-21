import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx";
import { v4 } from "uuid";

//media
import filter_Icon from "@/assets/common/filterIcon.svg";
import leftArrow_Icon from "@/assets/common/leftArrowWhite.svg";
//services
import * as queryString from "@/services/queryString";
export default function FilterPage({
  FilterPageOpen,
  brand,
  petCategory,
  setFilterPageOpen,
  setMainPageOpen,
}) {
  const router = useRouter();
  const filterProducts = (event, title, slug) => {
    const query = event.target.checked
      ? queryString.addListQueryArg(router.query, title, slug)
      : queryString.removeListQueryArg(router.query, title, slug);
    router.push({
      pathname: router.pathname,
      query,
    });
  };
  return (
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
            <p className="text-base text-black font-medium leading-7 ">برند</p>
            <div>
              {brand.map((item, index) => (
                <div key={v4()} className="flex items-center">
                  <input
                    id={`brand${index}`}
                    type="checkbox"
                    checked={router.query?.brand?.includes(item.slug)}
                    onChange={(e) => {
                      filterProducts(e, "brand", item.slug);
                    }}
                    className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                  />
                  <label htmlFor={`brand${index}`} className="mr-2">
                    {item.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="px-10 py-4 border-b-[1px] border-solid border-secondary mt-2">
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
          </div> */}
          <div className="px-10 py-4 flex flex-col border-b-[1px] border-solid border-secondary pb-10">
            <p className="text-base text-black font-medium leading-7 mt-2">
              نوع پت
            </p>
            <div>
              {petCategory.map((item, index) => (
                <div key={v4()} className="flex items-center">
                  <input
                    id={`kind${index}`}
                    checked={router?.query?.pet_types?.includes(item.slug)}
                    onChange={(e) => {
                      filterProducts(e, "pet_types", item.slug);
                    }}
                    type="checkbox"
                    className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                  />
                  <label htmlFor={`kind${index}`} className="mr-2">
                    {item.pet_category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-between items-center px-10 py-5">
            <button
              onClick={() => {
                router.push("/dashboard/products/add");
                setFilterPageOpen(false);
                setMainPageOpen(true);
              }}
              className="w-2/3 text-base text-center text-black font-medium leading-7 p-3 bg-[#CFEBD8] border-[1px] border-solid border-verify rounded-[12px]"
            >
              اعمال
            </button>
            <p className="w-1/3 text-base text-center text-black font-medium leading-7 p-3 cursor-pointer">
              حذف فیلترها
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
