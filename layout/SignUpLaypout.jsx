import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";
//component
import PetemoonLogo from "@/components/partials/logo";
//media
import bigPetsImage from "@/assets/signup/signupImage.png";
import backgroundLines from "@/assets/common/signUpLoginLines.png";
import leftArrow from "@/assets/common/leftArrow.png";

export default function SignUpLaypout({ children, backHandler, title, step }) {
  return (
    <div className="flex flex-col lg:flex-row-reverse h-screen w-full bg-white lg:bg-[#F1F1F1] relative">
      <div className="avatar absolute left-0 bottom-0 lg:hidden">
        <div className="w-screen opacity-50">
          <img src={backgroundLines.src} />
        </div>
      </div>
      <div className="hidden lg:flex justify-center items-center w-[58%]">
        <div className="avatar absolute left-0 bottom-0 hidden lg:block w-[58%]">
          <div className="w-full opacity-50">
            <img src={backgroundLines.src} />
          </div>
        </div>
        <div className="flex justify-center z-10">
          <div className="w-[90%]">
            <img src={bigPetsImage.src} />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-[42%] lg:bg-white h-full justify-between items-center space-y-20 lg:space-y-8 z-10 px-8 lg:px-14 lg:py-16 py-12">
        <div className="w-full h-[40%] lg:h-[50%] flex flex-col justify-between lg:justify-center items-center">
          <div className="flex w-full justify-end lg:hidden">
            {step < 6 ? (
              <button
                onClick={backHandler}
                className="btn btn-square btn-md md:btn-lg border-0 rounded-2xl bg-[#ECA299] active:bg-primary focus:bg-primary"
              >
                <img src={leftArrow.src} className="w-[15%]" />
              </button>
            ) : null}
          </div>
          <div className="flex flex-col space-y-4 md:space-y-8">
            <PetemoonLogo />
            <div
              id="header"
              className="font-black text-center text-[#333333] text-xl md:text-[40px] leading-10"
            >
              {title}
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
