import React, { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";

//media
import product_Image from "@/assets/common/ProductPic1.svg";
import TrashRed_Icon from "../../../assets/common/TrashIconRed.svg";
import Edit2_Icon from "../../../assets/common/EditIcon2.svg";
import submitIcon from "../../../assets/common/tik.svg";
import { editProduct } from "@/services/petShopProducts/editProduct";
import Link from "next/link";
import { deleteSingleProduct } from "@/services/petShopProducts/deleteSingleProduct";

export default function ProductCardForDesktop({ item, setDeleted }) {
  const deleteHandlear = async () => {
    const response = await deleteSingleProduct(item.id);
    if (response.success) {
      console.log(response);
      setDeleted((prev) => !prev);
    } else {
      console.log(response.errors);
    }
  };
  return (
    <tr className="border-b-[1px] border-[#D9D9D9] mx-5 p-5">
      <td className="inline-block m-1 w-[100px] h-[100px] rounded-[12px] overflow-hidden">
        <Image
          src={
            item.picture && item.picture !== null
              ? `https://api.petemoon.com${item.picture}`
              : "/assets/common/product.jpg"
          }
          alt="Product Image"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </td>
      <td>{item.name}</td>
      <td>{item.slug}</td>
      <td>
        <span
          className={clsx("mr-1", {
            // inline: editMode.status == false,
            // hidden: editMode.status && editMode.index == item.id,
          })}
        >
          {(+item.price).toLocaleString()}
        </span>
        {/* <input
          type="text"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          className={clsx(
            " text-xs border-0   font-medium leading-4 opacity-90 bg-transparent border-t-none pr-1 appearance-none focus:border-t-[0px] focus:border-x-[0px] focus:outline-none focus:ring-0 border-b-2 border-red-500  peer",
            {
              hidden: !editMode.status,
              inline: editMode.status && editMode.index == item.id,
            }
          )}
        /> */}
      </td>
      <td>
        <span
          className={clsx("mr-1", {
            // inline: !editMode.status,
            // hidden: editMode.status && editMode.index == item.id,
          })}
        >
          {(+item.inventory).toLocaleString()}
        </span>
        {/* <input
          type="text"
          value={inventory}
          onChange={(event) => setInventory(event.target.value)}
          className={clsx(
            " text-xs border-0   font-medium leading-4 opacity-90 bg-transparent border-t-none pr-1 appearance-none focus:border-t-[0px] focus:border-x-[0px] focus:outline-none focus:ring-0 border-b-2 border-gray-500  peer",
            {
              hidden: !editMode.status,
              inline: editMode.status && editMode.index == item.id,
            }
          )}
        /> */}
      </td>
      <td className="inline-block">
        <div className="flex items-center justify-center">
          <Link href={`/dashboard/products/edit/${item.id}`}>
            <div className="bg-[#4DA4F41] p-1.5 border-[1px] border-info cursor-pointer rounded-xl">
              <Image src={Edit2_Icon} alt="Edit Icon" />
            </div>
          </Link>
          <div
            onClick={deleteHandlear}
            className="p-1.5 border-[1px] border-error cursor-pointer rounded-xl mr-2"
          >
            <Image src={TrashRed_Icon} alt="Trash Icon" />
          </div>
        </div>
      </td>
    </tr>
  );
}
