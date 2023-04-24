import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";
import { v4 } from "uuid";

//media
import product_Image from "@/assets/common/ProductPic1.svg";
import TrashRed_Icon from "../../../assets/common/TrashIconRed.svg";
import Edit2_Icon from "../../../assets/common/EditIcon2.svg";
import addProduct_Icon from "../../../assets/common/shop-addPrimaryIcon.svg";
import submitIcon from "../../../assets/common/tik.svg";
import { editProduct } from "@/services/petShopProducts/editProduct";
import ProductCardForDesktop from "./ProductCardForDesktop";
export default function ProductsListForDesktop({ data }) {
  return (
    <div className="hidden lg:flex flex-col items-stretch bg-[#fff] rounded-[25px] shadow-shadowB">
      <div className="flex justify-between px-10 py-8 w-full">
        <h5 className="text-base text-black font-black leading-7 before:inline-block before:w-2 before:h-4 before:bg-primary before:rounded-[2px] before:ml-2 before:align-middle">
          <bdi>لیست محصولات موجود</bdi>
        </h5>
        <div className="flex">
          <Link
            href="/dashboard/products/add"
            className="flex justify-center items-center px-4 py-3 bg-[#EA635233] border-[1px] border-primary rounded-[12px]"
          >
            <p className="text-sm text-primary font-medium leading-5 ml-3.5">
              محصول جدید
            </p>
            <Image src={addProduct_Icon} alt="Add Product Icon" />
          </Link>
          <select className="text-sm text-primary font-medium leading-5 appearance-none w-[100px] p-3 mx-4 border-[1px] border-primary rounded-[12px] focus:border-primary focus:outline-none focus:ring-0 peer">
            <option>سگ</option>
            <option>سگ</option>
            <option>سگ</option>
          </select>
          <select className="text-sm text-primary font-medium leading-5 w-[100px] p-3 border-[1px] border-primary rounded-[12px] focus:border-primary focus:outline-none focus:ring-0 peer">
            <option>rere</option>
            <option>efef</option>
            <option>yjhjy</option>
          </select>
        </div>
      </div>
      <table>
        <thead className="border-b-[2.5px] border-[#D9D9D9]">
          <tr className="mx-10 py-3.5 text-base text-center text-black font-medium leading-6 opacity-90">
            <th>تصویر کالا</th>
            <th>نام کالا</th>
            <th>شناسه کالا</th>
            <th>قیمت (تومان)</th>
            <th> موجودی</th>
            <th>ویرایش</th>
          </tr>
        </thead>
        <tbody className="text-base text-center text-black font-bold leading-7">
          {data &&
            data.map((item) => (
              <ProductCardForDesktop key={item.id} item={item} />
            ))}
        </tbody>
      </table>
      <div className="w-full h-10"></div>
    </div>
  );
}
