import React from "react";
import Link from "next/link";
import { v4 } from "uuid";

export default function OrderItemsForMobile({ data }) {
  return (
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
  );
}
