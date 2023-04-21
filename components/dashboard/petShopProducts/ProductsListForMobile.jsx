import React, { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";

//media
import product_Image from "@/assets/common/ProductPic1.svg";
import more_Icon from "@/assets/common/more.svg";
import TrashRed_Icon from "../../../assets/common/TrashIconRed.svg";
import CloseButton_Icon from "../../../assets/common/close-button.svg";
import Edit2_Icon from "../../../assets/common/EditIcon2.svg";

export default function ProductsListForMobile({ data, editMode }) {
  return (
    <div className="flex lg:hidden flex-col mt-4">
      {data &&
        data.map((item, index) => (
          <div
            key={v4()}
            className="flex w-full my-1 px-5 py-4 bg-white border-[1px] border-secondary rounded-[15px] shadow-shadowB"
          >
            <div className="w-[100px] h-[100px] border-[1px] border-primary rounded-[12px] overflow-hidden">
              <Image
                src={product_Image}
                alt="Product Image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between w-full mr-3.5">
              <div className="flex flex-row justify-between items-start w-full">
                <h1 className="text-base text-black font-medium leading-5">
                  <bdi>{item.title}</bdi>
                </h1>
                <label htmlFor="More-modal">
                  <Image src={more_Icon} alt="More Icon" className="" />
                </label>
              </div>
              <div className="flex justify-between w-full mt-2">
                <div className="flex flex-col">
                  <p className="text-xs text-primary font-medium leading-4 opacity-90 mb-2">
                    <bdi>{`شناسه: ${item.code}`}</bdi>
                  </p>
                  <p
                    className={clsx(
                      "text-xs text-primary font-medium leading-4 opacity-90",
                      {
                        "border-b-[1px] border-gray-800":
                          editMode.status && editMode.index == index,
                      }
                    )}
                  >
                    <bdi>
                      موجودی:
                      <span
                        className={clsx("mr-1", {
                          // "inline" : editMode.status == false,
                          // "hidden" : editMode.status && editMode.index == index
                        })}
                      >
                        {item.availabilityAmount}
                      </span>
                      <input
                        type="number"
                        // value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        className={clsx(
                          "hidden text-xs text-gray-400 font-medium leading-4 opacity-90 bg-transparent border-none pr-1 appearance-none focus:border-[0px] focus:outline-none focus:ring-0 peer",
                          {
                            // "hidden" : editMode.status == false,
                            // "inline" : editMode.status && editMode.index == index
                          }
                        )}
                      />
                    </bdi>
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-primary font-medium leading-4 opacity-90 mb-2">
                    <bdi>قیمت:</bdi>
                  </p>
                  <p
                    className={clsx(
                      'text-sm text-primary font-medium leading-4 opacity-90 after:content-["تومان"] after:text-xs after:mr-1',
                      {
                        // "border-b-[1px] border-gray-800" : editMode.status && editMode.index == index
                      }
                    )}
                  >
                    <bdi>
                      <span
                        className={clsx("mr-1", {
                          // "inline" : editMode.status == false,
                          // "hidden" : editMode.status && editMode.index == index
                        })}
                      >
                        {item.price.toLocaleString()}
                      </span>
                      <input
                        type="number"
                        // value={price}
                        onChange={(event) => setPrice(event.target.value)}
                        className={clsx(
                          "hidden text-xs text-gray-400 font-medium leading-4 opacity-90 bg-transparent border-none pr-1 appearance-none focus:border-[0px] focus:outline-none focus:ring-0 peer",
                          {
                            // "hidden" : editMode.status == false,
                            // "inline" : editMode.status && editMode.index == index
                          }
                        )}
                      />
                    </bdi>
                  </p>
                </div>
              </div>
            </div>
            {/* Modals */}
            <div>
              {/* for'More-modal  */}
              <input type="checkbox" id="More-modal" className="modal-toggle" />
              <label htmlFor="More-modal" className="modal cursor-pointer">
                <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 mx-auto p-0 bg-white rounded-none">
                  <div className="w-full flex flex-col justify-between items-end">
                    <label
                      htmlFor="Trash-modal"
                      className="w-full flex flex-row items-center px-10 py-4 border-b-[1px] border-gray-400 solid"
                    >
                      <Image
                        src={TrashRed_Icon}
                        alt="TrashIcon"
                        width={15}
                        height={15}
                      />
                      <p className="text-base text-black font-medium leading-8 mr-2">
                        حذف محصول
                      </p>
                    </label>
                    <label
                      htmlFor="More-modal"
                      className="w-full flex flex-row items-center px-9 py-3"
                    >
                      <button
                        // htmlFor='More-modal'
                        // onClick={() => setEditMode({status:true, index})}
                        className="flex flex-row"
                      >
                        <Image
                          src={Edit2_Icon}
                          alt="EditIcon"
                          width={15}
                          height={15}
                        />
                        <p className="text-base text-black font-medium leading-8 mr-2">
                          ویرایش محصول
                        </p>
                      </button>
                    </label>
                  </div>
                </label>
              </label>
              {/* for trash-modal  */}
              <input
                type="checkbox"
                id="Trash-modal"
                className="modal-toggle"
              />
              <label htmlFor="Trash-modal" className="modal cursor-pointer">
                <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 px-10 py-4 lg:p-8 mx-auto bg-white rounded-none rounded-t-[15px] lg:rounded-[20px]">
                  <div className="w-full flex flex-col justify-between items-stretch">
                    <div className="w-full flex flex-row justify-between items-center">
                      <p className='text-lg text-black font-medium lg:font-bold leading-7 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:text-primary before:content-[""] before:ml-2 before:align-middle before:rounded-[2px]'>
                        حذف محصول
                      </p>
                      <label htmlFor="Trash-modal">
                        <Image src={CloseButton_Icon} alt="CloseIcon" />
                      </label>
                    </div>
                    <p className="text-base lg:text-xl text-gray-400 text-right font-medium leading-8 my-2 lg:my-5">
                      آیا از حذف این محصول از لیست محصول ها، اطمینان دارید؟
                    </p>
                    <div className="flex flex-row items-center justify-between w-full lg:w-1/2">
                      <label
                        htmlFor="Trash-modal"
                        onClick={() => TrashHandler(index)}
                        className="w-full text-sm text-white text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-error ml-2 border-[2px] solid border-error"
                      >
                        حذف محصول
                      </label>
                      <label
                        htmlFor="Trash-modal"
                        className="w-full text-sm text-error text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-white border-[2px] solid border-error"
                      >
                        انصراف
                      </label>
                    </div>
                  </div>
                </label>
              </label>
            </div>
          </div>
        ))}
    </div>
  );
}
