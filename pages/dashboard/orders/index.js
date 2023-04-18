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
import search_Icon from "@/assets/common/SearchRedIcon.svg";
import logout_Icon from "@/assets/common/logoutIconRed.svg";
import boxRed_Icon from "@/assets/common/box-addIconRed.svg";
import boxWhite_Icon from "@/assets/common/box-addWhiteIcon.svg";
import product_Image from "@/assets/common/ProductPic1.svg";
import Filter_Icon from "@/assets/common/filterIcon.svg";
import downArrow_Icon from "@/assets/common/downArrow.svg";
import downArrowBlack_Icon from "../../../assets/common/downArrowBlackIcon.svg";
import Sort_Icon from "@/assets/common/sortIcon.svg";
import leftArrow_Icon from "@/assets/common/leftArrowWhite.svg";
import more_Icon from "@/assets/common/more.svg";
import TrashRed_Icon from "../../../assets/common/TrashIconRed.svg";
import CloseButton_Icon from "../../../assets/common/close-button.svg";
import Edit2_Icon from "../../../assets/common/EditIcon2.svg";
import addProduct_Icon from "../../../assets/common/shop-addPrimaryIcon.svg";
import tick_Icon from "../../../assets/common/tickIcon3.png";
import setting_Icon from "../../../assets/common/settingIconBlack.svg";
import calendar_Icon from "../../../assets/common/calendar-search.svg";
import FilterPage from "@/components/dashboard/orders/FilterPage";
import SortPage from "@/components/dashboard/orders/SortPage";

const Orders = () => {
  const data = [
    {
      userFullname: "علی کریمی",
      receiverFullName: "علی حسینی",
      ordersCount: 5,
      date: "23 آذر ۱۴۰۱",
      ordersSum: 56000,
      orderStatus: { title: "تحویل مشتری", value: "delivered" },
      orderCode: "#750GH",
      discount: 10000,
      paymentAmount: 40000,
      paymentkind: "اینترنتی",
      paymentGate: "درگاه زرین پال",
      paymentCode: 122456,
      paymentDate: "۱۲ اسفند ۱۴۰۱",
      description:
        " مبلغ کالاهای سفارش شماره 750BV مورد تایید است. پرداخت موفق آمیز در انتظار تحویل مرسوله",
      benefit: 10000,
      orderList: [
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
      ],
    },
    {
      userFullname: "علی کریمی",
      receiverFullName: "علی حسینی",
      ordersCount: 5,
      date: "23 آذر ۱۴۰۱",
      ordersSum: 56000,
      orderStatus: { title: "تحویل مشتری", value: "delivered" },
      orderCode: "#750GH",
      discount: 10000,
      paymentAmount: 40000,
      paymentkind: "اینترنتی",
      paymentGate: "درگاه زرین پال",
      paymentCode: 122456,
      paymentDate: "۱۲ اسفند ۱۴۰۱",
      description:
        " مبلغ کالاهای سفارش شماره 750BV مورد تایید است. پرداخت موفق آمیز در انتظار تحویل مرسوله",
      benefit: 10000,
      orderList: [
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
      ],
    },
    {
      userFullname: "علی کریمی",
      receiverFullName: "علی حسینی",
      ordersCount: 5,
      date: "23 آذر ۱۴۰۱",
      ordersSum: 56000,
      orderStatus: { title: "تحویل مشتری", value: "delivered" },
      orderCode: "#750GH",
      discount: 10000,
      paymentAmount: 40000,
      paymentkind: "اینترنتی",
      paymentGate: "درگاه زرین پال",
      paymentCode: 122456,
      paymentDate: "۱۲ اسفند ۱۴۰۱",
      description:
        " مبلغ کالاهای سفارش شماره 750BV مورد تایید است. پرداخت موفق آمیز در انتظار تحویل مرسوله",
      benefit: 10000,
      orderList: [
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
      ],
    },
    {
      userFullname: "علی کریمی",
      receiverFullName: "علی حسینی",
      ordersCount: 5,
      date: "23 آذر ۱۴۰۱",
      ordersSum: 56000,
      orderStatus: { title: "تحویل مشتری", value: "delivered" },
      orderCode: "#750GH",
      discount: 10000,
      paymentAmount: 40000,
      paymentkind: "اینترنتی",
      paymentGate: "درگاه زرین پال",
      paymentCode: 122456,
      paymentDate: "۱۲ اسفند ۱۴۰۱",
      description:
        " مبلغ کالاهای سفارش شماره 750BV مورد تایید است. پرداخت موفق آمیز در انتظار تحویل مرسوله",
      benefit: 10000,
      orderList: [
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
        {
          title: "غذای سگ خشک 700 گرمی",
          Image: product_Image,
          code: "#750GH",
          price: "75000",
          availabilityAmount: "60",
        },
      ],
    },
  ];
  const brand = [
    { name: "پت بازار", id: "petBazzar" },
    { name: "پت شاپ۱", id: "petShop1" },
    { name: "پت ایران", id: "petIran" },
    { name: "تهران پت", id: "tehranPet" },
    { name: "کافه پت", id: "petCafe" },
  ];
  const petKind = ["سگ خانگی", "سگ شکارچی", "سگ وحشی", "سگ گله", "سگ نگهبان"];

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
  const TrashHandler = (index) => {
    const newArr = [...data];
    newArr.splice(1, index);
    setData(newArr);
    console.log("remove" + data);
  };
  // for edit the data
  const [amount, setAmount] = useState(""); //for set the new amount
  const [price, setPrice] = useState(""); // for set the new price
  const [editMode, setEditMode] = useState({ status: false, index: "" });
  console.log(editMode.index);
  const editHandler = () => {};
  const saveEditHandler = (index) => {
    setEditMode({ status: false, index });
    const newArr = [...data];
    newArr[index].availabilityAmount = amount;
    newArr[index].price = price;
    setData(newArr);
    setAmount("");
    setPrice("");
    console.log("edit" + data);
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
            <Image src={Filter_Icon} alt="FilterIcon" />
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
      {/* Sort Page */}
      <div
        className={clsx("lg:hidden w-full h-screen bg-white", {
          block: SortPageOpen == true,
          hidden: SortPageOpen == false,
        })}
      >
        <div className="h-[40px] w-full p-10 flex lg:hidden justify-between items-center">
          <div className="flex items-center">
            <Image src={Sort_Icon} alt="SortIcon" />
            <p className="text-xl text-black font-medium leading-8 mx-2">
              مرتب سازی
            </p>
          </div>
          <div
            onClick={() => {
              setSortPageOpen(false);
              setMainPageOpen(true);
            }}
            className="h-full px-4 py-5 mr-2 bg-[#ECA299] rounded-[15px] cursor-pointer flex justify-center items-center"
          >
            <Image src={leftArrow_Icon} alt="LeftArrowIcon" />
          </div>
        </div>
        <div className="flex flex-col">
          {sortArr.map((item) => (
            <p
              key={v4()}
              onClick={() => {
                setSortValue(item.title);
                setSortPageOpen(false);
                setMainPageOpen(true);
              }}
              className={clsx(
                "text-base font-medium leading-6 opacity-90 cursor-pointer px-10 py-4 border-b-[1px] border-solid border-secondary",
                {
                  "text-primary": item.title == sortValue,
                  "text-black opacity-80": item.title !== sortValue,
                }
              )}
            >
              {item.title}
            </p>
          ))}
        </div>
      </div>
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
                  <FilterBoxDialog
                    brand={brand}
                    petKind={petKind}
                    setFilterPageOpen={setFilterPageOpen}
                    setMainPageOpen={setMainPageOpen}
                  />
                  {/* Sort Box */}
                  <div className="flex items-center">
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
                  </div>
                </div>
                <div className="flex lg:hidden flex-col mt-4">
                  {data &&
                    data.map((item, index) => (
                      <div
                        key={v4()}
                        className="flex flex-col items-stretch w-full my-1 p-5 bg-white border-[1px] border-secondary rounded-[15px] shadow-shadowB"
                      >
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-black font-black leading-4 before:inline-block before:w-2 before:h-2 before:bg-verify before:ml-1 before:rounded-full before:align-middle">
                            <bdi>{item.orderStatus.title}</bdi>
                          </p>
                          <Link
                            href={`/dashboard/orders/${index}`}
                            className="text-xs text-info font-normal leading-4 opacity-70"
                          >
                            <bdi>جزئیات سفارش</bdi>
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-y-1 mt-4">
                          <div className="flex items-center">
                            <p className="text-sm text-black font-medium leading-5 ml-2">
                              <bdi>کد سفارش</bdi>
                            </p>
                            <p className="text-xs text-gray-400 font-medium leading-4">
                              <bdi>{item.orderCode}</bdi>
                            </p>
                          </div>
                          <div className="flex items-center">
                            <p className="text-sm text-black font-medium leading-5 ml-2">
                              <bdi>نام کاربر</bdi>
                            </p>
                            <p className="text-xs text-gray-400 font-medium leading-4">
                              <bdi>{item.userFullname}</bdi>
                            </p>
                          </div>
                          <div className="flex items-center">
                            <p className="text-sm text-black font-medium leading-5 ml-2">
                              <bdi>مبلغ</bdi>
                            </p>
                            <p className='text-xs text-gray-400 font-medium leading-4 after:content-["تومان"] after:text-[10px] after:mr-1'>
                              <bdi>{(+item.ordersSum).toLocaleString()}</bdi>
                            </p>
                          </div>
                          <div className="flex items-center">
                            <p className="text-sm text-black font-medium leading-5 ml-2">
                              <bdi>تخفیف</bdi>
                            </p>
                            <p className='text-xs text-gray-400 font-medium leading-4 after:content-["تومان"] after:text-[10px] after:mr-1'>
                              <bdi>{(+item.discount).toLocaleString()}</bdi>
                            </p>
                          </div>
                          <div className="flex items-center">
                            <p className="text-sm text-black font-medium leading-5 ml-2">
                              <bdi>تاریخ</bdi>
                            </p>
                            <p className="text-xs text-gray-400 font-medium leading-4">
                              <bdi>{item.date}</bdi>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="hidden lg:flex flex-col items-stretch bg-[#fff] rounded-[25px] shadow-shadowB">
                <div className="flex justify-between px-10 py-8 w-full">
                  <h5 className="text-base text-black font-black leading-7 before:inline-block before:w-2 before:h-4 before:bg-primary before:rounded-[2px] before:ml-2 before:align-middle">
                    <bdi>لیست سفارش ها</bdi>
                  </h5>
                  <div className="flex">
                    <div className="flex items-center px-3 py-2 ml-2 border-[1px] border-primary rounded-[12px]">
                      <p className="text-base text-primary font-medium leading-5 ml-10">
                        <bdi>فیلتر تاریخ</bdi>
                      </p>
                      <Image src={calendar_Icon} alt="Calendar Icon" />
                    </div>
                    <select className="text-sm text-primary font-medium leading-5 w-[100px] p-3 border-[1px] border-primary rounded-[12px] focus:border-primary focus:outline-none focus:ring-0 peer">
                      <option>ترتیب نمایش</option>
                      <option>efef</option>
                      <option>yjhjy</option>
                    </select>
                  </div>
                </div>
                <table>
                  <thead className="border-b-[2.5px] border-[#D9D9D9]">
                    <tr className="mx-10 py-3.5 text-base text-center text-[#252C34] font-medium leading-6 opacity-80">
                      <th className="py-3">نام کاربر</th>
                      <th className="py-3">تعداد کالا</th>
                      <th className="py-3">
                        <div className="flex justify-center items-center">
                          <p>
                            <bdi>تاریخ</bdi>
                          </p>
                          <Image
                            src={downArrowBlack_Icon}
                            alt="Down Arrow Icon"
                            className="mr-1.5 cursor-pointer"
                          />
                        </div>
                      </th>
                      <th className="py-3">
                        <div className="flex justify-center items-center">
                          <p>
                            <bdi>مجموع خرید (تومان)</bdi>
                          </p>
                          <Image
                            src={downArrowBlack_Icon}
                            alt="Down Arrow Icon"
                            className="mr-1.5 cursor-pointer"
                          />
                        </div>
                      </th>
                      <th className="py-3">
                        <div className="flex justify-center items-center">
                          <p>
                            <bdi>وضعیت سفارش</bdi>
                          </p>
                          <Image
                            src={downArrowBlack_Icon}
                            alt="Down Arrow Icon"
                            className="mr-1.5 cursor-pointer"
                          />
                        </div>
                      </th>
                      <th className="py-3">شناسه سفارش</th>
                      <th className="py-3">جزئیات</th>
                    </tr>
                  </thead>
                  <tbody className="text-base text-center text-[#252C34] font-bold leading-7 opacity-95">
                    {data &&
                      data.map((item, index) => (
                        <tr
                          key={v4()}
                          className="border-b-[1px] border-[#D9D9D9] mx-5"
                        >
                          <td className="py-10">{item.userFullname}</td>
                          <td className="py-10">{item.ordersCount}</td>
                          <td className="py-10">{item.date}</td>
                          <td>{(+item.ordersSum).toLocaleString()}</td>
                          <td className="flex justify-center items-center m-auto py-10">
                            <div className="flex items-center justify-center text-xs text-verify font-medium leading-4 w-auto px-2 py-1.5 bg-[#3BD8834D] border-verify border-[1px] rounded-[5px]">
                              <p>{item.orderStatus.title}</p>
                              <Image
                                src={tick_Icon}
                                alt="Order Status"
                                className="mr-5"
                              />
                            </div>
                            <div className="mr-0.5 p-1 border-[0.5px] border-[#3A4750] rounded-[5px]">
                              <Image src={setting_Icon} alt="Setting Icon" />
                            </div>
                          </td>
                          <td className="py-10">{item.orderCode}</td>
                          <td className="py-10">
                            <Link
                              href={`/dashboard/orders/${index}`}
                              className="text-xs text-[#252C34] font-medium leading-4 px-5 py-1 bg-[#3BD8831A] border-[1px] border-verify rounded-[5px]"
                            >
                              <bdi>نمایش</bdi>
                            </Link>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    </div>
  );
};

export default Orders;
