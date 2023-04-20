import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";

//media
import ArrowLeftWhite_Icon from "@/assets/common/leftArrowWhite.svg";
import product_Image from "@/assets/common/ProductPic1.svg";
import setting_Icon from "@/assets/common/settingIconRed.svg";
import CloseButton_Icon from "@/assets/common/close-button.svg";
import ChangeStatusModal from "./ChangeStatusModal";

export default function SingleOrder() {
  const [showeModal, setShowModal] = useState(false);
  const data = {
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
        discount: 5000,
        price: 75000,
        amount: 60,
      },
      {
        title: "غذای سگ خشک 700 گرمی",
        Image: product_Image,
        code: "#750GH",
        discount: 5000,
        price: 75000,
        amount: 60,
      },
      {
        title: "غذای سگ خشک 700 گرمی",
        Image: product_Image,
        code: "#750GH",
        discount: 5000,
        price: 75000,
        amount: 60,
      },
    ],
  };
  return (
    <div>
      {/* Heading for mobile */}
      <div className="w-full flex lg:hidden flex-row justify-between items-center mb-3">
        <p className="text-lg text-black font-black leading-7 before:align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
          جزئیات سفارش
        </p>
        <Link
          href="/dashboard/orders"
          className="bg-primary opacity-[0.8] p-4 rounded-[15px]"
        >
          <Image src={ArrowLeftWhite_Icon} alt="ArrowIcon" className="w-full" />
        </Link>
      </div>
      {/* Main */}
      <div className="flex flex-col lg:flex-row-reverse items-stretch w-full">
        <div className="flex flex-col items-stretch w-full lg:w-1/2 lg:mr-5">
          <div className="flex flex-col items-stretch w-full py-5 lg:py-10 lg:px-8 lg:bg-white border-b-[2px] border-secondary lg:border-none lg:rounded-[25px]">
            <p className="hidden lg:block text-lg text-black font-black leading-7 before:align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
              جزئیات کاربر
            </p>
            <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4 lg:mt-10">
              <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
                <bdi>سفارش دهنده:</bdi>
              </p>
              <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
                <bdi>{data.userFullname}</bdi>
              </p>
            </div>
            <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
              <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
                <bdi>تاریخ ثبت سفارش:</bdi>
              </p>
              <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
                <bdi>{data.date}</bdi>
              </p>
            </div>
            <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
              <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
                <bdi>کد سفارش:</bdi>
              </p>
              <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
                <bdi>{data.orderCode}</bdi>
              </p>
            </div>
            <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
              <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
                <bdi>تحویل گیرنده:</bdi>
              </p>
              <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
                <bdi>{data.receiverFullName}</bdi>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-full lg:mt-5 lg:px-8 lg:py-10 lg:bg-white lg:rounded-[25px]">
            <p className="hidden lg:block text-lg text-black font-black leading-7 before:align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
              جزئیات پرداخت
            </p>
            <div className="flex flex-col items-stretch lg:grid grid-cols-2 lg:mt-10 py-5 lg:py-0 border-b-[2px] border-secondary lg:border-none">
              <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
                <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
                  <bdi>مبلغ تخفیف:</bdi>
                </p>
                <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
                  <bdi>{(+data.discount).toLocaleString()}</bdi>
                </p>
              </div>
              <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
                <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
                  <bdi>مبلغ پرداخت:</bdi>
                </p>
                <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
                  <bdi>{(+data.paymentAmount).toLocaleString()}</bdi>
                </p>
              </div>
              <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
                <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
                  <bdi>نوع پرداخت:</bdi>
                </p>
                <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
                  <bdi>{data.paymentkind}</bdi>
                </p>
              </div>
              <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
                <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
                  <bdi>درگاه بانکی:</bdi>
                </p>
                <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
                  <bdi>{data.paymentGate}</bdi>
                </p>
              </div>
              <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
                <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
                  <bdi>کد رهگیری:</bdi>
                </p>
                <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
                  <bdi>{data.paymentCode}</bdi>
                </p>
              </div>
              <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
                <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
                  <bdi>تاریخ پرداخت:</bdi>
                </p>
                <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
                  <bdi>{data.paymentDate}</bdi>
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full my-1 lg:my-4 py-5 lg:py-0 border-b-[2px] border-secondary lg:border-none">
              <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
                <bdi>توضیحات:</bdi>
              </p>
              <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1 mt-2">
                <bdi>{data.description}</bdi>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-full lg:w-1/2 lg:py-10 lg:bg-white lg:rounded-[25px]">
          <div className="lg:hidden flex flex-col items-stretch w-full lg:px-8">
            {data.orderList.map((item, index) => (
              <div className="flex items-center w-full py-5 border-b-[1px] border-secondary">
                <div className="w-[100px] h-[100px] overflow-hidden border-[1px] border-primary rounded-[10px]">
                  <Image
                    src={item.Image}
                    alt="Product Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between items-stretch w-full h-full mr-8">
                  <h3 className="text-base text-black font-medium leading-6 opacity-90">
                    <bdi>{item.title}</bdi>
                  </h3>
                  <div className="grid grid-cols-2 mt-2">
                    <p className="text-xs text-gray-400 font-medium leading-4">
                      <bdi>
                        شناسه: <span className="mr-1">{item.code}</span>
                      </bdi>
                    </p>
                    <p className="text-xs text-gray-400 font-medium leading-4">
                      <bdi>
                        تخفیف:{" "}
                        <span className='mr-1 after:content-["تومان"] after:text-[10px] after:mr-1'>
                          {(+item.discount).toLocaleString()}
                        </span>
                      </bdi>
                    </p>
                    <p className="text-xs text-gray-400 font-medium leading-4">
                      <bdi>
                        تعداد: <span className="mr-1">{item.amount}</span>
                      </bdi>
                    </p>
                    <p className="text-xs text-gray-400 font-medium leading-4">
                      <bdi>
                        قیمت:{" "}
                        <span className='mr-1 text-sm text-black after:content-["تومان"] after:text-[10px] after:mr-1'>
                          {(+item.price).toLocaleString()}
                        </span>
                      </bdi>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex flex-col items-stretch w-full">
            <p className="hidden lg:block text-lg text-black font-black leading-7 mr-8 mb-10 before:align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
              لیست کالاها
            </p>
            <table>
              <thead className="border-b-[2.5px] border-[#D9D9D9]">
                <tr className="text-base text-center text-black font-medium leading-6 opacity-80">
                  <th className="py-3">ردیف</th>
                  <th className="py-3">تصویر کالا</th>
                  <th className="py-3">نام کالا</th>
                  <th className="py-3">تعداد</th>
                  <th className="py-3">تخفیف</th>
                  <th className="py-3">جمع مبلغ</th>
                </tr>
              </thead>
              <tbody className="text-sm text-center text-black font-bold leading-8 opacity-95">
                {data.orderList.map((item, index) => (
                  <tr
                    key={v4()}
                    className="border-b-[1px] border-[#D9D9D9] mx-5"
                  >
                    <td className="py-10">{index + 1}.</td>
                    <td className="py-10 flex items-center justify-center">
                      <div className="w-[70px] h-[70px] rounded-[15px] overflow-hidden">
                        <Image
                          src={item.Image}
                          alt="Product Image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-10">{item.title}</td>
                    <td className="py-10">{item.amount}</td>
                    <td>{(+item.discount).toLocaleString()}</td>
                    <td>{(+item.price).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* benefit & Status Box */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-stretch w-full lg:px-8 lg:py-10 mt-5 lg:bg-white lg:rounded-[25px]">
        <div className="flex justify-between items-center w-full py-5 px-10 lg:p-0">
          <p className="text-base text-black font-black leading-6 before:align-middle before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
            <bdi>سود از این سفارش:</bdi>
          </p>
          <p className='text-base lg:text-xl text-warning font-semibold leading-8 lg:mr-10 after:content-["تومان"] after:mr-1 after:text-xs'>
            <bdi>{(+data.benefit).toLocaleString()}</bdi>
          </p>
        </div>
        <div className="lg:hidden w-full h-[2px] bg-secondary my-5"></div>
        <label
          onClick={() => setShowModal(true)}
          htmlFor="Status-modal"
          className="flex items-center justify-center w-full lg:mr-10 px-10 lg:px-3 py-3 lg:py-2.5 bg-[#EA635233] border-[1px] border-primary rounded-[12px]"
        >
          <p className="text-base text-primary font-medium leading-8 ml-2">
            <bdi>وضعیت سفارش</bdi>
          </p>
          <Image src={setting_Icon} alt="Order Status" />
        </label>
      </div>
      {/* Modal  */}
      <ChangeStatusModal showeModal={showeModal} setShowModal={setShowModal} />
    </div>
  );
}
