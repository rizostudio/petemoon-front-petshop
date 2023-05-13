import React from "react";
import moment from "jalali-moment";
export default function OrderDetails({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col items-stretch w-full lg:w-1/2 lg:mr-5">
      <div className="flex flex-col items-stretch w-full py-5 lg:py-10 lg:px-8 lg:bg-white border-b-[2px] border-secondary lg:border-none lg:rounded-[25px]">
        <p className="hidden lg:block text-lg text-black font-black leading-7 before:align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
          جزئیات کاربر
        </p>
        <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4 lg:mt-10">
          <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
            <bdi>سفارش دهنده:</bdi>
          </p>
          <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
            <bdi>{data.user?.name}</bdi>
          </p>
        </div>
        <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
          <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
            <bdi>تاریخ ثبت سفارش:</bdi>
          </p>
          <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
            <bdi>
              {data.user?.order_date &&
                moment(data.user?.order_date, "YYYY/MM/DD")
                  .locale("fa")
                  .format("YYYY/MM/DD")}
            </bdi>
          </p>
        </div>
        <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
          <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
            <bdi>کد سفارش:</bdi>
          </p>
          <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
            <bdi>{data.user?.order_id}</bdi>
          </p>
        </div>
        <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
          <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
            <bdi>تحویل گیرنده:</bdi>
          </p>
          <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
            <bdi>{data.user?.reciver}</bdi>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-stretch w-full lg:mt-5 lg:px-8 lg:py-10 lg:bg-white lg:rounded-[25px]">
        <p className="hidden lg:block text-lg text-black font-black leading-7 before:align-middle before:inline-block before:w-2 before:h-4 before:bg-primary before:ml-1 before:rounded-[2px]">
          جزئیات پرداخت
        </p>
        <div className="flex flex-col items-stretch lg:grid grid-cols-2 lg:mt-10 py-5 lg:py-0 border-b-[2px] border-secondary lg:border-none">
          {/* <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
            <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
              <bdi>مبلغ تخفیف:</bdi>
            </p>
            <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
              <bdi>{(+data.discount).toLocaleString()}</bdi>
            </p>
          </div> */}
          <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
            <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
              <bdi>مبلغ پرداخت:</bdi>
            </p>
            <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
              <bdi>{(+data.products?.total_price).toLocaleString()}</bdi>
            </p>
          </div>
          <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
            <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
              <bdi>نوع پرداخت:</bdi>
            </p>
            <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
              <bdi>اینترنتی</bdi>
            </p>
          </div>
          <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
            <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
              <bdi>درگاه بانکی:</bdi>
            </p>
            <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
              <bdi>زرین پال</bdi>
            </p>
          </div>
          <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
            <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
              <bdi>کد رهگیری:</bdi>
            </p>
            <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
              <bdi>{data.products?.order_id}</bdi>
            </p>
          </div>
          <div className="flex justify-between lg:justify-start items-center w-full my-1 lg:my-4">
            <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
              <bdi>تاریخ پرداخت:</bdi>
            </p>
            <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1">
              <bdi>
                {data.user?.order_date &&
                  moment(data.user?.order_date, "YYYY/MM/DD")
                    .locale("fa")
                    .format("YYYY/MM/DD")}
              </bdi>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full my-1 lg:my-4 py-5 lg:py-0 border-b-[2px] border-secondary lg:border-none">
          <p className="text-base text-gray-400 lg:text-black font-medium leading-6">
            <bdi>توضیحات:</bdi>
          </p>
          <p className="text-base text-black font-medium lg:font-bold leading-6 lg:mr-1 mt-2">
            <bdi>{`" مبلغ کالاهای سفارش شماره ${data.products?.order_id} مورد تایید است. پرداخت موفق آمیز در انتظار تحویل مرسوله",`}</bdi>
          </p>
        </div>
      </div>
    </div>
  );
}
