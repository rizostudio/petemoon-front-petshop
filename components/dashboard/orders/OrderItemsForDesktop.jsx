import React from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";
import moment from "jalali-moment";
//media
import downArrowBlack_Icon from "../../../assets/common/downArrowBlackIcon.svg";
import tick_Icon from "../../../assets/common/tickIcon3.png";
import setting_Icon from "../../../assets/common/settingIconBlack.svg";
import calendar_Icon from "../../../assets/common/calendar-search.svg";
const status = {
  SENDING: "در حال ارسال",
  CANCELED: "لغو شده",
  DELIVERED: "  تکمیل شده",
  PAY_PENDING: "در انتظار ",
  PROCESSING: "در حال ",
};
export default function OrderItemsForDesktop({ data }) {
  return (
    <div className="hidden lg:flex flex-col items-stretch bg-[#fff] rounded-[25px] shadow-shadowB">
      <div className="flex justify-between px-10 py-8 w-full">
        <h5 className="text-base text-black font-black leading-7 before:inline-block before:w-2 before:h-4 before:bg-primary before:rounded-[2px] before:ml-2 before:align-middle">
          <bdi>لیست سفارش ها</bdi>
        </h5>
        {/* <div className="flex">
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
        </div> */}
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
                key={item.id}
                className="border-b-[1px] border-[#D9D9D9] mx-5"
              >
                <td className="py-10">{item.product[0]?.user_order}</td>
                <td className="py-10">{item.products_count}</td>
                <td className="py-10">
                  {moment(item.created_at, "YYYY/MM/DD")
                    .locale("fa")
                    .format("YYYY/MM/DD")}
                </td>
                <td>{(+item?.total_price).toLocaleString()}</td>
                <td className="flex justify-center items-center m-auto py-10">
                  <div className="flex items-center justify-center text-xs text-verify font-medium leading-4 w-auto px-2 py-1.5 bg-[#3BD8834D] border-verify border-[1px] rounded-[5px]">
                    <p>{status[item.status]}</p>
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
                <td className="py-10">{item.order_id}</td>
                <td className="py-10">
                  <Link
                    href={`/dashboard/orders/${item.id}`}
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
  );
}
