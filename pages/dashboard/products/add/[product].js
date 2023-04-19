import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";
import Link from "next/link";
//component
import DashboardLayout from "@/layout/DashboardLayout";
// media
import StarEmpty_Icon from "@/assets/common/starEmpty.svg";
import StarGold_Icon from "@/assets/common/startGold.svg";
import ShopBagRedMobile_Icon from "@/assets/common/shopping-cartRedIcon2.svg";
import leftArrow_Icon from "@/assets/common/leftArrowWhite.svg";
import Bookmark_Icon from "@/assets/common/BookmarkBlackIcon.svg";
import Notification_Icon from "@/assets/common/notificationIcon.svg";
import Share_Icon from "@/assets/common/shareIcon.svg";
import Info_Icon from "@/assets/common/info-circle.svg";
import Properties_Icon from "@/assets/common/PropertiesIcon.svg";
import StoreAlt_Logo from "@/assets/common/StoreLogoAlt.svg";
import ProfileAlt_Pic from "@/assets/common/profilePicAlt.svg";
// import CarouselProduct from '@/components/common/CarouselProduct';

const SingleProduct = () => {
  //fake data
  const data = {
    name: "غذای خشک سگ های خانگی",
    group: "دسته خوراکی / سگ",
    commentsNumber: 250,
    stars: 3,
    price: 123000,
    discount: 20,
    amount: 10,
    property: [
      { name: "for", title: "مخصوص", value: "سگ خانگی" },
      { name: "kind", title: "نوع", value: "خوراکی حیوانی" },
      { name: "MadeIn", title: "کشور سازنده", value: "تایوان" },
      { name: "dimension", title: "ابعاد", value: "۲۰۰۰*۱۰۰۰" },
      { name: "weight", title: "وزن", value: 2000 },
    ],
    description:
      "فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد. در این فرمول از حبوبات نیز استفاده شده که باعث هضم آرام غذا میشود. سگ های بالغ ، طعم و سایز کوچک غذای خشک را دوست خواهند داشت و شما هم ازاین غذا رضایتمند خواهید بود. شرکت پروتیین ایمن تاب در سال 1393 با ایده تولید غذای حیوانات خانگی با توجه به استاندارد های روز جهانی تاسیس و شروع به فعالیت نموده است. این شرکت از مجهزترین و بروز ترین ماشین آلات درکارخانه خود استفاده کرده و بعلاوه از بهترین مواد اولیه شرکتهای اروپایی و آمریکایی و کمک علمی آن ها بهره مند می باشد.",
    seller: [
      { name: "شهر پت", logo: StoreAlt_Logo, price: 135000 },
      { name: "پتمون", logo: StoreAlt_Logo, price: 140000 },
      { name: "پتجا", logo: StoreAlt_Logo, price: 150000 },
    ],
    comments: [
      {
        title: "عالی و بی نظیر",
        stars: 5,
        profilePic: ProfileAlt_Pic,
        author: "حسین محمدی",
        date: "۱۲ أذر ۱۴۰۱",
        text: "بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت",
      },
      {
        title: "عالی و بی نظیر",
        stars: 5,
        profilePic: ProfileAlt_Pic,
        author: "حسین محمدی",
        date: "۱۲ أذر ۱۴۰۱",
        text: "بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت",
      },
      {
        title: "عالی و بی نظیر",
        stars: 5,
        profilePic: ProfileAlt_Pic,
        author: "حسین محمدی",
        date: "۱۲ أذر ۱۴۰۱",
        text: "بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت",
      },
      {
        title: "عالی و بی نظیر",
        stars: 5,
        profilePic: ProfileAlt_Pic,
        author: "حسین محمدی",
        date: "۱۲ أذر ۱۴۰۱",
        text: "بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت. بسیار عالی و باکیفیت بود مناسب سگ و بسیار دوست داشت",
      },
    ],
    similarProduct: [
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 4,
        store: "فروشگاه پتیار",
        amount: 0,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 5,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 3,
        store: "فروشگاه پتیار",
        amount: 0,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 2,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 1,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
      {
        title: "غذای خشک سگ",
        group: "دسته خوراکی",
        stars: 0,
        store: "فروشگاه پتیار",
        amount: 2,
        discount: 20,
        price: 125000,
      },
    ],
  };
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

  return (
    <DashboardLayout>
      <div className="w-full h-full flex flex-col justify-between items-stretch lg:px-10 lg:py-5">
        {/* Main */}
        <div className="flex flex-col justify-between items-stretch w-full">
          {/*Heading for mobile */}
          <div className="flex lg:hidden flex-row justify-between items-center py-5">
            <div className="flex flex-col justify-end">
              <div className="flex flex-row items-center">
                <h2 className="text-base text-black font-black leading-7 opacity-90 before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:align-middle before:rounded-[2px]">
                  {data.name}
                </h2>
                <div className="flex flex-row items-center mr-1">
                  <Image src={StarGold_Icon} alt="GoldenStarIcon" />
                  <p className="text-base text-gray-400 font-medium leading-7 mr-[2px]">{`(${data.stars})`}</p>
                </div>
              </div>
            </div>
            <Link
              href="/dashboard/products/add"
              className="p-3 px-4 mr-2 bg-[#ECA299] border-[1px] border-primary solid rounded-[15px]"
            >
              <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
            </Link>
          </div>
          {/* Summary box */}
          <div className="w-full flex flex-col lg:flex-row lg:justify-evenly items-stretch py-5 lg:py-10 border-b-[2px] border-secondary">
            {/* Gallery */}
            <div className="self-center w-full lg:w-[450px] h-[200px] lg:h-[600px] rounded-[15px] border-[2px] border-primary solid"></div>
            <div className="xl:w-full flex flex-col lg:mr-10">
              {/* Heading for desktop */}
              <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start py-4  lg:px-4 border-b-[2px] border-none lg:border-solid border-secondary">
                <div className="flex flex-col">
                  <p className="text-base lg:text-lg text-gray-400 font-normal leading-6">
                    <bdi>{data.group}</bdi>
                  </p>
                  <div className="w-full hidden lg:flex flex-row items-center justify-between mt-2">
                    <h2 className="text-3xl text-black font-bold leading-10 before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-2  before:rounded-[2px]">
                      {data.name}
                    </h2>
                    {data.discount > 0 && (
                      <p className='text-base text-white font-medium leading-8 px-2 py-1 mr-3 rounded-[10px] bg-primary before:content-["%"] before:text-[14px]'>
                        <bdi>{data.discount}</bdi>
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start lg:mt-10">
                  <div className="hidden lg:flex flex-row items-center">
                    <div className="flex flex-row items-center">
                      {starsBoxHandler(data.stars)}
                    </div>
                    <p className="text-xl text-gray-400 font-medium leading-6 mr-2 align-middle">{`(${data.stars})`}</p>
                  </div>
                  <Link
                    href="#cutomersComent"
                    className="text-base lg:text-lg text-info font-normal leading-6 lg:mt-2"
                  >
                    <bdi>{`${data.commentsNumber} دیدگاه`}</bdi>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-between mt-5">
                {/* Summary Propertiese */}
                <div className="pb-3 my-2 order-2 lg:order-1 border-none lg:border-solid border-b-[2px] border-secondary">
                  <div className="flex flex-row items-center mb-1">
                    <Image src={Properties_Icon} alt="PropertiesIcon" />
                    <p className="text-lg lg:text-xl text-black font-bold leading-8 opacity-90 mr-1">
                      <bdi>ویژگی ها</bdi>
                    </p>
                  </div>
                  {data.property.map((item, index) => (
                    <div
                      key={index}
                      className="lg:hidden flex flex-row items-center align-middle my-1 mr-5"
                    >
                      <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
                        <bdi>{item.title}</bdi>
                      </p>
                      <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
                        <bdi>{item.value}</bdi>
                      </p>
                    </div>
                  ))}
                  {data.property.slice(0, 2).map((item, index) => (
                    <div
                      key={index}
                      className="hidden lg:flex flex-row items-center align-middle my-1 mr-5"
                    >
                      <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
                        <bdi>{item.title}</bdi>
                      </p>
                      <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
                        <bdi>{item.value}</bdi>
                      </p>
                    </div>
                  ))}
                </div>
                {/* Add Prodcut for desktop */}
                <div className="hidden lg:flex flex-col items-stretch order-1 w-full mb-3 py-5">
                  <div className="flex items-center justify-between w-full my-2 px-5 py-0.5 border-[1px] border-primary rounded-[15px]">
                    <p className="text-lg text-primary font-bold leading-7">
                      <bdi>قیمت را وارد نمایید:</bdi>
                    </p>
                    <div className="flex items-center">
                      <input
                        type="number"
                        className="text-2xl text-primary font-medium leading-10 opacity-90 w-[100px] bg-transparent appearance-none border-none focus:outline-none focus:ring-0 focus:border-none peer"
                      />
                      <p className="text-sm text-primary font-normal leading-7">
                        <bdi>تومان</bdi>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full my-2 px-5 py-0.5 border-[1px] border-primary rounded-[15px]">
                    <p className="text-lg text-primary font-bold leading-7">
                      <bdi>موجودی را وارد نمایید:</bdi>
                    </p>
                    <div className="flex items-center">
                      <input
                        type="number"
                        className="text-2xl text-primary font-medium leading-10 opacity-90 w-[100px] bg-transparent appearance-none border-none focus:outline-none focus:ring-0 focus:border-none peer"
                      />
                      <p className="text-sm text-primary font-normal leading-7">
                        <bdi>عدد</bdi>
                      </p>
                    </div>
                  </div>
                  <button className="text-base text-white font-bold leading-7 w-full px-5 py-3 mt-5 bg-primary rounded-[15px]">
                    <bdi>افزودن به محصولات</bdi>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          {/* <div className='text-right py-5 lg:py-10 border-solid border-b-[2px] border-secondary'>
                        <h5 className='text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]'>توضیح جامع</h5>
                        <p><bdi>فرمولی که سلبن برای سگ های بالغ نژاد کوچک ارائه کرده برای حیوانی فعال و بالغ مناسب است . در این فرمول علاوه بر ویتامین ها و مواد معدنی لازم از گلوکزامین و ال کارنتین استفاده شده که بهترین انتخاب برای سگ بالغ شما می باشد و وضعیت بدنی و وزنی حیوان را در جایگاهی سالم با تغذیه مناسب نگه می دارد. در این فرمول از حبوبات نیز استفاده شده که باعث هضم آرام غذا میشود. سگ های بالغ ، طعم و سایز کوچک غذای خشک را دوست خواهند داشت و شما هم ازاین غذا رضایتمند خواهید بود. شرکت پروتیین ایمن تاب در سال 1393 با ایده تولید غذای حیوانات خانگی با توجه به استاندارد های روز جهانی تاسیس و شروع به فعالیت نموده است. این شرکت از مجهزترین و بروز ترین ماشین آلات درکارخانه خود استفاده کرده و بعلاوه از بهترین مواد اولیه شرکتهای اروپایی و آمریکایی و کمک علمی آن ها بهره مند می باشد.</bdi></p>
                    </div> */}
          {/* Propertiese  for desktop*/}
          {/* <div className='hidden lg:block py-10'>
                        <h5 className='text-2xl text-black font-black leading-8 mb-4 lg:mb-8 before:inline-block before:w-2 lg:before:w-5 before:h-5 lg:before:h-2 before:bg-primary before:ml-1 before:rounded-[2px]'>ویژگی ها</h5>
                        <div className='grid grid-cols-2'>
                            {data.property.map((item,index) => 
                                <div key={index} className='flex flex-row items-center align-middle my-1 mr-5'>
                                    <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'><bdi>{item.title}</bdi></p>
                                    <p className='text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom'><bdi>{item.value}</bdi></p>
                                </div>
                            )}
                        </div>
                    </div> */}

          {/* Add Prodcut for mobile */}
          <div className="lg:hidden flex flex-col items-stretch justify-between w-full h-full mt-10 mb-[100px]">
            <div className="flex flex-col items-stretch">
              <div className="flex items-center justify-between w-full my-2 px-5 py-0.5 border-[1px] border-primary rounded-[15px]">
                <p className="text-base lg:text-lg text-primary font-bold leading-7">
                  <bdi>قیمت را وارد نمایید:</bdi>
                </p>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="text-base lg:text-2xl text-primary font-medium leading-10 opacity-90 w-[100px] bg-transparent appearance-none border-none focus:outline-none focus:ring-0 focus:border-none peer"
                  />
                  <p className="text-sm text-primary font-normal leading-7">
                    <bdi>تومان</bdi>
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full my-2 px-5 py-0.5 border-[1px] border-primary rounded-[15px]">
                <p className="text-base lg:text-lg text-primary font-bold leading-7">
                  <bdi>موجودی را وارد نمایید:</bdi>
                </p>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="text-base lg:text-2xl text-primary font-medium leading-10 opacity-90 w-[100px] bg-transparent appearance-none border-none focus:outline-none focus:ring-0 focus:border-none peer"
                  />
                  <p className="text-sm text-primary font-normal leading-7">
                    <bdi>عدد</bdi>
                  </p>
                </div>
              </div>
            </div>
            <button className="text-base text-white font-bold leading-7 w-full px-5 py-3 mt-5 bg-primary rounded-[15px]">
              <bdi>افزودن به محصولات</bdi>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SingleProduct;
