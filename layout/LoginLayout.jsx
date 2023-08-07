import React from "react";
//media
import backgroundLines from "@/assets/common/signUpLoginLines.png";
import leftArrow from "@/assets/common/leftArrow.png";
import bigPetsImage from "@/assets/signup/signupImage.png";
import smallPetsImage from "@/assets/login/loginImage.png";
//component
import PetemoonLogo from "@/components/partials/logo";
//formik
import { useFormik } from "formik";
import ToatContainer from "@/components/partials/toast/ToatContainer";
export default function AuthLayout({ children }) {
  return (
    <>
      <ToatContainer />
      <div className="flex flex-col lg:flex-row-reverse h-screen w-full bg-white lg:bg-[#F1F1F1]">
        <div className="hidden lg:flex justify-center items-center w-[58%]">
          {/* <div className="avatar absolute left-0 bottom-0 hidden lg:block w-[58%]">
            <div className="w-full opacity-50">
              <img src={backgroundLines.src} />
            </div>
          </div> */}
          <div className="flex justify-center z-10">
            <div className="w-[90%] h-[80vh]">
              <img src={"/assets/signup/signupImage.png"} />
            </div>
          </div>
        </div>
        <div className="flex relative justify-center items-center lg:hidden w-full p-10 h-[55%] z-10 bg-gradient-to-br from-primary via-primary to-[#acd4f7]">
          <div className="absolute left-10 top-10 lg:hidden">
            <div className="flex w-full justify-end lg:hidden">
              <button
                onClick={() => router.push("/")}
                className="btn btn-square btn-md md:btn-lg border-0 rounded-2xl bg-[#ECA299] active:bg-primary focus:bg-primary"
              >
                <img src={leftArrow.src} className="w-[15%]" />
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-full h-[40vh]">
              <img src={"/assets/signup/signupImage.png"} />
            </div>
          </div>
        </div>
        <div className="bg-white w-full lg:w-[42%] pt-4 pb-16 px-10 lg:px-24 h-[45%] lg:h-full flex flex-col justify-between lg:justify-center items-center relative">
          {/* <div className="avatar absolute left-0 bottom-0 w-full lg:hidden">
            <div className="opacity-50">
              <img src={backgroundLines.src} />
            </div>
          </div> */}
          <div className="w-full h-full z-10">
            <div className="flex flex-col lg:justify-center items-center space-y-4 md:space-y-8 h-[50%]">
              <PetemoonLogo />
              <div
                id="header"
                className="font-black text-[#333333] text-xl md:text-[40px]"
              >
                فروشنده عزیز، خوش آمدید
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
