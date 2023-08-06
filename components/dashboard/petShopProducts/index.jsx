import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { v4 } from "uuid";
//component
import DashboardLayout from "@/layout/DashboardLayout";
import FilterBoxDialog from "@/components/dashboard/orders/FilterBoxDialog";
//media
import boxRed_Icon from "@/assets/common/box-addIconRed.svg";
import boxWhite_Icon from "@/assets/common/box-addWhiteIcon.svg";
import FilterPage from "./FilterPage";
import SortPage from "./SortPage";
import HeadingForMobile from "./HeadingForMobile";
import SortBoxDialog from "./SortBoxDialog";
import ProductsListForMobile from "./ProductsListForMobile";
import ProductsListForDesktop from "./ProductsListForDesktop";
import { getListProducts } from "@/services/petShopProducts/getListOfProducts";
import { getProductFilter } from "@/services/petemoonProducts/getProductFilters";

export default function PetShopProducts() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const petKind = ["سگ خانگی", "سگ شکارچی", "سگ وحشی", "سگ گله", "سگ نگهبان"];
  // the array of sort options
  const [sortArr, setSortArr] = useState([
    { title: "پرفروش ترین" },
    { title: "محبوب ترین" },
    { title: "جدید ترین" },
    { title: "ارزان ترین" },
    { title: "گران ترین" },
  ]);
  const [brand, setBrand] = useState([]);
  const [petCategory, setPetCategory] = useState([]);
  // for change the color of choosen option in sorting
  const [sortValue, setSortValue] = useState("پرفروش ترین");
  //Dynamic
  const [MainPageOpen, setMainPageOpen] = useState(true); //for open & close Main Page in mobile
  const [FilterPageOpen, setFilterPageOpen] = useState(false); //for open & close filter Page in mobile
  const [SortPageOpen, setSortPageOpen] = useState(false); //for open & close Sort Page in mobile
  useEffect(() => {
    const getDate = async () => {
      const queryParams = new URLSearchParams(router.query);
      const response = await getListProducts(queryParams);
      if (response.success) {
        console.log(response);
        setData(response.data);
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
    <div className="h-screen">
      {/* Filter Page */}
      <FilterPage
        FilterPageOpen={FilterPageOpen}
        setFilterPageOpen={setFilterPageOpen}
        setMainPageOpen={setMainPageOpen}
        brand={brand}
        petKind={petKind}
      />
      {/* Sort Page */}
      <SortPage
        SortPageOpen={SortPageOpen}
        setSortPageOpen={setSortPageOpen}
        sortArr={sortArr}
        sortValue={sortValue}
        setSortValue={setSortValue}
        setMainPageOpen={setMainPageOpen}
      />
      <DashboardLayout>
        <div
          className={clsx(
            "flex flex-col h-full justify-between items-stretch",
            {
              block: MainPageOpen == true,
              hidden: MainPageOpen == false,
            }
          )}
        >
          <div className="flex flex-col items-stretch">
            {/* Heading for mobile  */}
            <HeadingForMobile />
            {!data ? (
              <p className="text-base lg:text-xl text-error font-black leading-9 tracking-tight mt-8">
                <bdi>هنوز هیچ محصولی اضافه نکرده اید!</bdi>
              </p>
            ) : (
              <div>
                <div className="flex flex-col lg:hidden">
                  {/*Arrangment Box*/}
                  <div className="flex mt-5">
                    {/* FilterBox */}
                    <FilterBoxDialog
                      brand={brand}
                      petKind={petKind}
                      setFilterPageOpen={setFilterPageOpen}
                      setMainPageOpen={setMainPageOpen}
                    />
                    {/* Sort Box */}
                    <SortBoxDialog
                      SortPageOpen={SortPageOpen}
                      setSortPageOpen={setSortPageOpen}
                      sortArr={sortArr}
                      sortValue={sortValue}
                      setMainPageOpen={setMainPageOpen}
                    />
                  </div>
                  <ProductsListForMobile data={data} />
                </div>
                <ProductsListForDesktop
                  brand={brand}
                  petCategory={petCategory}
                  data={data}
                />
              </div>
            )}
          </div>

          {/* Add new Product */}
          {!data ? (
            <div className="flex flex-row-reverse lg:flex-col items-center justify-center w-full mt-10 p-5 lg:p-[60px] bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] lg:shadow-shadowB">
              <Image
                src={boxRed_Icon}
                alt="Box Icon"
                className="hidden lg:block"
              />
              <Image
                src={boxWhite_Icon}
                alt="Box Icon"
                className="lg:hidden mr-1"
              />
              <p className="text-base lg:text-2xl lg:text-center text-white lg:text-primary font-medium lg:font-black leading-7 lg:leading-10 lg:mt-10">
                <bdi>ثبت محصول جدید</bdi>
              </p>
            </div>
          ) : (
            <div className="lg:hidden flex flex-row-reverse lg:flex-col items-center justify-center w-full mt-10 p-5 lg:p-[60px] bg-primary lg:bg-white rounded-[12px] lg:rounded-[25px] lg:shadow-shadowB">
              <Image
                src={boxRed_Icon}
                alt="Box Icon"
                className="hidden lg:block"
              />
              <Image
                src={boxWhite_Icon}
                alt="Box Icon"
                className="lg:hidden mr-1"
              />
              <p className="text-base lg:text-2xl lg:text-center text-white lg:text-primary font-medium lg:font-black leading-7 lg:leading-10 lg:mt-10">
                <bdi>ثبت محصول جدید</bdi>
              </p>
            </div>
          )}
        </div>
      </DashboardLayout>
    </div>
  );
}
