//react&next
import React, { useState } from "react";
import { useRouter } from "next/router";
//component
import OtpInput from "../partials/otpInput";
//services
import { validationOtp } from "@/services/auth/validation";
//localStorage
import { OtpId, refreshTokenLS } from "@/localStorage/auth";
//formik
import { useFormik } from "formik";
//count of otp
const OTP_COUNT = 4;

export default function ValidationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      confirmationCode: new Array(OTP_COUNT).fill(""),
    },
    onSubmit: async (values) => {
      toggleSubmitState();
      const response = await validationOtp(values.confirmationCode);
      toggleSubmitState();
      if (response.success) {
        OtpId.remove();
        refreshTokenLS.set(response.data.refreshToken);
        if (response.data.isRegistered) router.push("/dashboard");
        else router.push("/auth/signUp");
      } else if (
        response.errors[0] === "Petshop user has not been approved yet!"
      ) {
        router.push("/isApproved");
      } else {
        console.log(response.errors[0]);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-full h-[50%] lg:h-[50%]">
      <div className="flex flex-col h-full items-center justify-around py-2 lg:justify-around space-y-3">
        <div className="flex flex-col w-full items-center space-y-4 lg:space-y-6">
          <OtpInput
            label={"کد ۴ رقمی خود را وارد کنید"}
            value={formik.values.confirmationCode}
            setValue={(newValue) =>
              formik.setFieldValue("confirmationCode", newValue)
            }
            size={OTP_COUNT}
          />
          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-secondary text-xs">۰۰:۰۰</p>
            <p
              className="text-primary text-sm lg:text-xl"
              onClick={() => console.log("again!")}
            >
              ارسال مجدد کد
            </p>
          </div>
        </div>

        <button
          type="submit"
          className={`btn h-12 disabled:text-primary border-0 disabled:border disabled:border-primary bg-primary disabled:bg-white hover:bg-primary-dark active:bg-primary focus:bg-primary w-full rounded-lg text-base md:text-xl font-normal ${
            isSubmitting && "loading"
          }`}
          disabled={formik.values.confirmationCode.join("").length < OTP_COUNT}
        >
          تایید
        </button>
      </div>
    </form>
  );
}
