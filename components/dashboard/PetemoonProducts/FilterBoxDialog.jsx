import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import filter_Icon from "@/assets/common/filterIcon.svg";
import DownArrow_Icon from "@/assets/common/downArrow.svg";
//services
import * as queryString from "@/services/queryString";
export default function FilterBoxDialog({
  brand,
  petCategory,
  setFilterPageOpen,
  setMainPageOpen,
  FilterBoxOpen,
  setFilterBoxOpen,
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
  const filterPriceProduct = (event, title, slug) => {
    const query = event.target.value
      ? queryString.addQueryArg(router.query, title, slug)
      : queryString.removeListQueryArg(router.query, title, slug);
    router.push({
      pathname: router.pathname,
      query,
    });
  };
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
                  checked={router.query?.brand?.includes(item.slug)}
                  onChange={(e) => {
                    filterProducts(e, "brand", item.slug);
                  }}
                  type="checkbox"
                  className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                />
                <label htmlFor={`brand${index}`} className="mr-2 ">
                  <bdi>{item.name}</bdi>
                </label>
              </div>
            ))}
          </div>
          {/* <label className="text-base text-black font-medium leading-7 mt-6">
            بازه قیمتی
          </label>
          <div className="w-full flex justify-between text-xs px-2">
            <span>0</span>
            <span></span>
            <span></span>
            <span></span>
            <span>2500</span>
          </div> */}

          {/* <input className="" type="range" min="1" max="100" step="1" /> */}
          <p className="text-base text-black font-medium leading-7 mt-6">
            نوع پت
          </p>
          <div>
            {petCategory.map((item, index) => (
              <div key={v4()} className="flex items-center">
                <input
                  id={`kind${index}`}
                  type="checkbox"
                  checked={router?.query?.pet_types?.includes(item.slug)}
                  onChange={(e) => {
                    filterProducts(e, "pet_types", item.slug);
                  }}
                  className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                />
                <label htmlFor={`kind${index}`} className="mr-2">
                  {item.pet_category}
                </label>
              </div>
            ))}
          </div>
          <p
            onClick={() => {
              router.push("/dashboard/products/add");
              setFilterBoxOpen(false);
            }}
            className="self-end text-base text-gray-400 font-medium leading-7 mt-5 cursor-pointer"
          >
            حذف فیلترها
          </p>
        </div>
      </div>
    </div>
  );
}
