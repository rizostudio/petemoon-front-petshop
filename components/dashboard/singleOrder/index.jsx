import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";
import { useRouter } from "next/router";
//media
import ArrowLeftWhite_Icon from "@/assets/common/leftArrowWhite.svg";
import product_Image from "@/assets/common/ProductPic1.svg";
import setting_Icon from "@/assets/common/settingIconRed.svg";
import CloseButton_Icon from "@/assets/common/close-button.svg";
import ChangeStatusModal from "./ChangeStatusModal";
import OrderDetails from "./OrderDetails";
import OrdersProduct from "./OrdersProduct";
import { getSingelorder } from "@/services/order/getSingleOrder";
const status = {
  SENDING: "در حال ارسال",
  CANCELED: "لغو شده",
  DELIVERED: "  تکمیل شده",
  PAY_PENDING: "در انتظار ",
  PROCESSING: "  در حال  آماده سازی",
};
export default function SingleOrder() {
  const [showeModal, setShowModal] = useState(false);
  const router = useRouter();
  const [orderData, setOrderData] = useState({});

  useEffect(() => {
    const { order } = router.query;

    const getData = async () => {
      const response = await getSingelorder(order);
      if (response.success) {
        console.log(response.data);
        setOrderData(response.data);
      }
    };
    getData();
  }, [router.query]);
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
        <OrderDetails data={orderData} />
        <OrdersProduct data={orderData} />
      </div>
      {/* benefit & Status Box */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-stretch w-full lg:px-8 lg:py-10 mt-5 lg:bg-white lg:rounded-[25px]">
        <div className="flex justify-between items-center w-full py-5 px-10 lg:p-0">
          <p className="text-base text-black font-black leading-6 before:align-middle before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
            <bdi>سود از این سفارش:</bdi>
          </p>
          <p className='text-base lg:text-xl text-warning font-semibold leading-8 lg:mr-10 after:content-["تومان"] after:mr-1 after:text-xs'>
            <bdi>{orderData.finance?.toLocaleString()}</bdi>
          </p>
        </div>
        <div className="lg:hidden w-full h-[2px] bg-secondary my-5"></div>
        <label
          // onClick={() => setShowModal(true)}
          htmlFor="Status-modal"
          className={`flex items-center justify-center w-full lg:mr-10 px-10 lg:px-3 py-3 lg:py-2.5  border-[1px] rounded-[12px] ${
            orderData.products?.status === "SENDING"
              ? "border-cyan-600"
              : orderData.products?.status === "CANCELLED"
              ? "border-rose-700"
              : orderData.products?.status === "DELIVERED"
              ? "bborder-green-600"
              : orderData.products?.status === "PAY_PENDING"
              ? "border-yellow-400"
              : orderData.products?.status === "PROCESSING"
              ? "border-neutral-600"
              : "border-neutral-600"
          }}`}
        >
          <p className="text-base text-primary font-medium leading-8 ml-2">
            <bdi> {status[orderData.products?.status]}</bdi>
          </p>
          <Image src={setting_Icon} alt="Order Status" />
        </label>
      </div>
      {/* Modal  */}
      {/* <ChangeStatusModal showeModal={showeModal} setShowModal={setShowModal} /> */}
    </div>
  );
}
