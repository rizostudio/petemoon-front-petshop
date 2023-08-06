import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//component
import FloatLabelInput from "../partials/input";
//formik
import { useFormik } from "formik";
import * as Yup from "yup";
//login service
import { login } from "@/services/auth/login";
//localStorage
import { OtpId } from "@/localStorage/auth";
//toast
import { toast } from "react-toastify";

export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
  const router = useRouter();
  const inputValidation = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, "فرمت شماره همراه درست نیست")
      .length(11, "فرمت شماره همراه درست نیست"),
  });
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: async (value) => {
      console.log(value);
      // back();
      toggleSubmitState();
      const response = await login(value.phoneNumber);
      console.log(response);
      toggleSubmitState();
      if (response.success) {
        console.log("otp code: ", response.data);
        OtpId.set(response.data.otp_id);
        router.push("/auth/validation");
      } else {
        console.log("Error: ", response.errors[0]);
        if (response.errors[0] === "user registered with different user type") {
          console.log("first");
          toast.error("این شماره از قبل در سیستم موجود است", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    },
    validationSchema: inputValidation,
    validateOnMount: false,
    validateOnChange: false,
    validateOnBlur: false,
  });
  return (
    <form onSubmit={formik.handleSubmit} className="w-full h-[50%] lg:h-[50%]">
      <div className="flex flex-col h-full items-center justify-end lg:justify-center space-y-5 ">
        <div className="w-full">
          <FloatLabelInput
            noneHolder={true}
            type={"text"}
            placeholder={"شماره همراه"}
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            h={"h-12"}
            dir={"ltr"}
          />
          <p className="text-[12px] text-error font-semibold leading-5 ml-auto ">
            <bdi>{formik.errors.phoneNumber}</bdi>
          </p>
        </div>
        <button
          type="submit"
          className={`btn h-12 disabled:text-primary border-0 disabled:border disabled:border-primary bg-primary disabled:bg-white hover:bg-[#d85241] text-[#fff] active:bg-primary focus:bg-primary w-full rounded-lg text-base md:text-xl font-normal 
`}
          disabled={formik.values.phoneNumber.length !== 11}
        >
          {isSubmitting && (
            <svg
              aria-hidden="true"
              role="status"
              class="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          )}
          ارسال کد
        </button>
      </div>
    </form>
  );
}
