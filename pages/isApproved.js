import React from "react";
import SignUpLaypout from "@/layout/SignUpLaypout";
import Link from "next/link";
export default function isApproved() {
  return (
    <SignUpLaypout step={6} title={"فروشنده عزیز، با سپاس از همراهی شما"}>
      <div className="w-full">
        <p className="block text-base lg:text-lg text-center text-black font-bold leading-[50px] w-full p-1 lg:p-4 mb-4 border-[1px] border-primary rounded-[10px]">
          بررسی مدارک توسط بازرس پتمون انجام می شود. در صورت{" "}
          <span className="text-verify">تایید</span>، حساب کاربری شما فعال خواهد
          شد.
        </p>
        <Link href={"https://petemoon.com"}>
          <button
            className={`btn md:h-[12%] lg:h-[15%] border-0 bg-primary hover:bg-primary-dark active:bg-primary focus:bg-primary w-full mt-4 lg:mt-0 rounded-lg text-base text-white md:text-xl font-normal`}
          >
            بازگشت به صفحه اصلی
          </button>
        </Link>
      </div>
    </SignUpLaypout>
  );
}
