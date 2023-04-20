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
import OrderDetails from "./OrderDetails";
import OrdersProduct from "./OrdersProduct";

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
        <OrderDetails data={data} />
        <OrdersProduct data={data} />
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
