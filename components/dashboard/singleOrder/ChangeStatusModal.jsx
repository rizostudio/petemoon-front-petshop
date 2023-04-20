import React from "react";
import Image from "next/image";
//media
import CloseButton_Icon from "@/assets/common/close-button.svg";
import Modal from "@/components/modal/Modal";

export default function ChangeStatusModal({ showeModal, setShowModal }) {
  return (
    <Modal show={showeModal}>
      <div>
        <input type="checkbox" id="Status-modal" className="modal-toggle" />
        <label htmlFor="Status-modal" className="modal cursor-pointer">
          <label className="modal-box w-full absolute lg:relative inset-x-0 bottom-0 px-10 py-4 lg:p-8 mx-auto bg-white rounded-none rounded-t-[15px] lg:rounded-[20px]">
            <div className="w-full flex flex-col justify-between items-stretch">
              <div className="w-full flex flex-row justify-between items-center">
                <p className="text-lg text-black font-medium lg:font-bold leading-7 before:hidden lg:before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-2 before:align-middle before:rounded-[2px]">
                  وضعیت سفارش
                </p>
                <label
                  onClick={() => setShowModal(false)}
                  htmlFor="Status-modal"
                >
                  <Image src={CloseButton_Icon} alt="CloseIcon" />
                </label>
              </div>
              <div className="flex flex-col items-stretch mt-4 mb-10 lg:mt-7">
                <p className="text-base lg:text-lg text-center text-black font-medium leading-6">
                  <bdi>وضعیت سفارش را انتخاب نمایید:</bdi>
                </p>
                <div className="flex flex-wrap items-center justify-center mt-4 lg:mt-6">
                  <p className="text-sm lg:text-base text-center text-gray-400 font-medium leading-5 m-1 lg:m-2 px-6 py-2.5 border-[1px] border-gray-400 rounded-[12px] lg:rounded-[5px] hover:text-info hover:border-info hover:bg-[#EDF7FF]">
                    <bdi>لغو سفارش</bdi>
                  </p>
                  <p className="text-sm lg:text-base text-center text-gray-400 font-medium leading-5 m-1 lg:m-2 px-6 py-2.5 border-[1px] border-gray-400 rounded-[12px] lg:rounded-[5px] hover:text-info hover:border-info hover:bg-[#EDF7FF]">
                    <bdi>منتظر پرداخت</bdi>
                  </p>
                  <p className="text-sm lg:text-base text-center text-gray-400 font-medium leading-5 m-1 lg:m-2 px-6 py-2.5 border-[1px] border-gray-400 rounded-[12px] lg:rounded-[5px] hover:text-info hover:border-info hover:bg-[#EDF7FF]">
                    <bdi>آماده ارسال</bdi>
                  </p>
                  <p className="text-sm lg:text-base text-center text-gray-400 font-medium leading-5 m-1 lg:m-2 px-6 py-2.5 border-[1px] border-gray-400 rounded-[12px] lg:rounded-[5px] hover:text-info hover:border-info hover:bg-[#EDF7FF]">
                    <bdi>ارسال شده</bdi>
                  </p>
                  <p className="text-sm lg:text-base text-center text-gray-400 font-medium leading-5 m-1 lg:m-2 px-6 py-2.5 border-[1px] border-gray-400 rounded-[12px] lg:rounded-[5px] hover:text-info hover:border-info hover:bg-[#EDF7FF]">
                    <bdi>تحویل مشتری</bdi>
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full lg:w-1/2 lg:self-end">
                <label
                  htmlFor="Status-modal"
                  className="w-full text-sm text-white text-center font-semibold py-3 lg:py-2 lg:px-8 rounded-[5px] bg-info ml-2 border-[2px] solid border-info"
                >
                  تایید
                </label>
                <label
                  htmlFor="Status-modal"
                  className="w-full text-sm text-error text-center font-semibold py-3 lg:py-2 rounded-[5px] bg-white border-[2px] solid border-error"
                >
                  انصراف
                </label>
              </div>
            </div>
          </label>
        </label>
      </div>
    </Modal>
  );
}
