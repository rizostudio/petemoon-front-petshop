import React from "react";
import Image from "next/image";
import { v4 } from "uuid";

export default function OrdersProduct({ data }) {
  return (
    <div className="flex flex-col items-stretch w-full lg:w-1/2 lg:py-10 lg:bg-white lg:rounded-[25px]">
      <div className="lg:hidden flex flex-col items-stretch w-full lg:px-8">
        {data.products?.product?.map((item, index) => (
          <div
            key={item.id}
            className="flex items-center w-full py-5 border-b-[1px] border-secondary"
          >
            <div className="w-[100px] h-[100px] overflow-hidden border-[1px] border-primary rounded-[10px]">
              <Image
                src={item.Image}
                alt="Product Picture"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between items-stretch w-full h-full mr-8">
              <h3 className="text-base text-black font-medium leading-6 opacity-90">
                <bdi>{item.product?.id}</bdi>
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
                      {(+item.product.price_after_sale).toLocaleString()}
                    </span>
                  </bdi>
                </p>
                <p className="text-xs text-gray-400 font-medium leading-4">
                  <bdi>
                    تعداد:{" "}
                    <span className="mr-1">{data.products.products_count}</span>
                  </bdi>
                </p>
                <p className="text-xs text-gray-400 font-medium leading-4">
                  <bdi>
                    قیمت:{" "}
                    <span className='mr-1 text-sm text-black after:content-["تومان"] after:text-[10px] after:mr-1'>
                      {(+item.product.price).toLocaleString()}
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
            {data.products?.product?.map((item, index) => (
              <tr key={v4()} className="border-b-[1px] border-[#D9D9D9] mx-5">
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
                <td className="py-10">{item.product?.id}</td>
                <td className="py-10">{data.products.products_count}</td>
                <td> {(+item.product.price_after_sale).toLocaleString()}</td>
                <td>{(+data.products.total_price).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
