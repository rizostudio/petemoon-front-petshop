import React, { useState } from "react";
import Image from "next/image";
import { v4 } from "uuid";
//media
import user_Image from "@/assets/common/user-square.svg";

export default function SaleHistory() {
  const [data, setData] = useState([
    {
      month: "فروردین",
      sumIncome: "57600500",
      sumSaleAmount: "7654",
      salesDetail: [
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
      ],
    },
    {
      month: "اردیبهشت",
      sumIncome: "57600500",
      sumSaleAmount: "7654",
      salesDetail: [
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
      ],
    },
    {
      month: "خرداد",
      sumIncome: "57600500",
      sumSaleAmount: "7654",
      salesDetail: [
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
      ],
    },
    {
      month: "تیر",
      sumIncome: "57600500",
      sumSaleAmount: "7654",
      salesDetail: [
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
      ],
    },
    ,
    { month: "مرداد", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    { month: "شهریور", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    { month: "مهر", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    { month: "آبان", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    { month: "آذر", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    {
      month: "دی",
      sumIncome: "57600500",
      sumSaleAmount: "7654",
      salesDetail: [
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
      ],
    },
    { month: "بهمن", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    { month: "اسفند", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
  ]);
  const data2 = [
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
    {
      userFullname: "علی محبیان",
      userImage: user_Image,
      sumSaleAmount: 756000,
      date: "۲۵ بهمن ۱۴۰۰",
      status: "تراکنش موفق",
    },
  ];
  return (
    <div>
      <div>
        <div className="flex flex-col lg:hidden">
          {/*Arrangment Box*/}
          <div className="flex mt-5">
            {/* FilterBox */}
            {/* <FilterBoxDialog 
                                    brand={brand} 
                                    petKind={petKind} 
                                    setFilterPageOpen={setFilterPageOpen}
                                    setMainPageOpen={setMainPageOpen}
                                /> */}
            {/* Sort Box */}
            {/* <div className='flex items-center'>
                                    <div
                                        onClick={() => {setSortPageOpen(true); setMainPageOpen(false)}} 
                                        className='flex items-center'
                                    >
                                        <Image 
                                            src={Sort_Icon} 
                                            alt="SortIcon"
                                            className='cursor-pointer lg:cursor-auto'
                                        />
                                        <p 
                                            className='hidden lg:block text-xl text-black font-medium leading-8 mx-2'
                                        ><bdi>مرتب سازی:</bdi></p>
                                        <p 
                                            className='lg:hidden text-xl text-black font-medium leading-8 mx-2 cursor-pointer'
                                        >{sortValue}</p>
                                    </div>
                                    <ul className='hidden lg:flex items-center'>
                                        {sortArr.map(item => 
                                            <li  
                                                key={v4()}
                                                onClick={() => setSortValue(item.title)}
                                                className={clsx('text-xl font-medium leading-8 mx-2 cursor-pointer',{
                                                    'text-primary' : item.title == sortValue ,
                                                    'text-gray-400 opacity-80' : item.title !== sortValue
                                                })}
                                            >{item.title}</li> 
                                        )}
                                        
                                    </ul>
                                </div> */}
          </div>
          <div className="flex lg:hidden flex-col mt-4">
            {data2 &&
              data2.map((item, index) => (
                <div
                  key={v4()}
                  className="flex flex-col items-stretch w-full my-1 p-5 bg-white border-[1px] border-secondary rounded-[15px] shadow-shadowB"
                >
                  <div className="grid grid-cols-2 gap-y-1">
                    <p className="text-base text-black font-medium leading-5 ml-2">
                      <bdi>{item.userFullname}</bdi>
                    </p>
                    <p className="text-base text-black font-medium leading-5 ml-2">
                      <bdi>{item.sumSaleAmount.toLocaleString()}</bdi>
                    </p>
                    <p className="text-base text-black font-medium leading-5 ml-2">
                      <bdi>{item.date}</bdi>
                    </p>
                    <p className="text-base text-verify font-medium leading-5 ml-2">
                      <bdi>{item.status}</bdi>
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="hidden lg:flex flex-col items-stretch bg-[#fff] rounded-[25px] shadow-shadowB mt-8">
          <div className="flex justify-between px-[54px] py-10 w-full">
            <h5 className="text-xl text-black font-black leading-7 before:inline-block before:w-2 before:h-4 before:bg-primary before:rounded-[2px] before:ml-2 before:align-middle">
              <bdi>تاریخچه فروش</bdi>
            </h5>
            <div className="flex">
              <select className="text-sm text-primary font-medium leading-5 w-[100px] p-3 border-[1px] border-primary rounded-[12px] focus:border-primary focus:outline-none focus:ring-0 peer">
                <option>۳۰ روز گذشته</option>
                <option>efef</option>
                <option>yjhjy</option>
              </select>
              <select className="text-sm text-primary font-medium leading-5 w-[100px] p-3 mr-2 border-[1px] border-primary rounded-[12px] focus:border-primary focus:outline-none focus:ring-0 peer">
                <option>تراکنش موفق</option>
                <option>efef</option>
                <option>yjhjy</option>
              </select>
            </div>
          </div>
          <table>
            <tbody className="text-base text-center text-[#3A4750] font-medium leading-7">
              {data2 &&
                data2.map((item, index) => (
                  <tr
                    key={v4()}
                    className="border-b-[1px] border-[#D9D9D9] mx-5"
                  >
                    <td className="py-10 flex items-center justify-center">
                      <div className="w-[50px] h-[50px] rounded-full bg-black overflow-hidden">
                        <Image
                          src={item.userImage}
                          alt="User Image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-10">{item.userFullname}</td>
                    <td className="py-10">
                      {(+item.sumSaleAmount).toLocaleString()}
                    </td>
                    <td className="py-10">{item.date}</td>
                    <td className="py-10 text-verify">{item.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
