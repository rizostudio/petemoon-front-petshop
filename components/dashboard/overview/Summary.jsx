import DashboardLayout from "@/layout/DashboardLayout";
import React, { useState } from "react";
import Image from "next/image";

//media
import BagTick_Icon from "@/assets/common/bag-tick2.svg";
import CartTotal_Icon from "@/assets/common/card-receive2.svg";
import shop_Icon from "@/assets/common/shopIcon3.svg";
import message_Icon from "@/assets/common/messageIcon3.svg";

export default function Summary({ data }) {
  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:justify-center mt-10">
      {/* orders sum */}
      <div className="order-2 lg:order-1 w-full lg:w-1/4 h-full flex flex-row-reverse lg:flex-col justify-between items-stretch bg-white px-6 py-5 lg:py-7.5 my-1 lg:ml-5 rounded-[15px] lg:rounded-[25px] shadow-shadowB">
        <Image src={CartTotal_Icon} alt="CartTotalIcon" />
        <div className="text-right flex flex-col lg:mt-10">
          <p className="text-base lg:text-lg text-[#3A4750] font-bold leading-6">
            مجموع درآمد فروشگاه
          </p>
          <p className='text-xl lg:text-2xl text-[#3A4750] font-extrabold leading-10 mt-1.5 after:content-["تومان"] after:text-sm after:mr-2'>
            <bdi>{data.income ? data.income : 0}</bdi>
          </p>
        </div>
        <p className="hidden lg:block text-base text-black font-noramal opacity-60 mt-4 self-end">
          <bdi>در یک ماه گذشته</bdi>
        </p>
      </div>
      {/* orders Amount */}
      <div className="order-2 lg:order-3 w-full lg:w-1/4 h-full flex flex-row-reverse lg:flex-col justify-between items-stretch bg-white px-6 py-5 lg:py-7.5 my-1 lg:mx-5 rounded-[15px] lg:rounded-[25px] shadow-shadowB">
        <Image src={BagTick_Icon} alt="BagTickIcon" />
        <div className="text-right flex flex-col lg:mt-10">
          <p className="text-base lg:text-lg text-[#3A4750] font-bold leading-6">
            تعداد سفارشات فروشگاه
          </p>
          <p className='text-xl lg:text-2xl text-[#3A4750] font-extrabold leading-10 mt-1.5 after:content-["عدد"] after:text-sm after:mr-2'>
            <bdi>{data.orders_count ? data.orders_count : 0}</bdi>
          </p>
        </div>
        <p className="hidden lg:block text-base text-black font-noramal opacity-60 mt-4 self-end">
          <bdi>در یک ماه گذشته</bdi>
        </p>
      </div>
      {/* products Amount */}
      <div className="order-2 lg:order-3 w-full lg:w-1/4 h-full flex flex-row-reverse lg:flex-col justify-between items-stretch bg-white px-6 py-5 lg:py-7.5 my-1 lg:mx-5 rounded-[15px] lg:rounded-[25px] shadow-shadowB">
        <Image src={shop_Icon} alt="Shop Icon" />
        <div className="text-right flex flex-col lg:mt-10">
          <p className="text-base lg:text-lg text-[#3A4750] font-bold leading-6">
            تعداد اجناس فروشگاه
          </p>
          <p className='text-xl lg:text-2xl text-[#3A4750] font-extrabold leading-10 mt-1.5 after:content-["عدد"] after:text-sm after:mr-2'>
            <bdi>{data.products_count ? data.products_count : 0}</bdi>
          </p>
        </div>
        <p className="hidden lg:block text-base text-black font-noramal opacity-60 mt-4 self-end">
          <bdi>در یک ماه گذشته</bdi>
        </p>
      </div>
      {/* Messages Amount */}
      <div className="order-2 lg:order-3 w-full lg:w-1/4 h-full flex flex-row-reverse lg:flex-col justify-between items-stretch bg-white px-6 py-5 lg:py-7.5 my-1 lg:mr-5 rounded-[15px] lg:rounded-[25px] shadow-shadowB">
        <Image src={message_Icon} alt="Message Icon" />
        <div className="text-right flex flex-col lg:mt-10">
          <p className="text-base lg:text-lg text-[#3A4750] font-bold leading-6">
            تعداد پیام های فروشگاه
          </p>
          <p className='text-xl lg:text-2xl text-[#3A4750] font-extrabold leading-10 mt-1.5 after:content-["عدد"] after:text-sm after:mr-2'>
            <bdi>{data.messages?.length ? data.messages?.length : 0}</bdi>
          </p>
        </div>
        <p className="hidden lg:block text-base text-black font-noramal opacity-60 mt-4 self-end">
          <bdi>در یک ماه گذشته</bdi>
        </p>
      </div>
    </div>
  );
}
