import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
//layoout
import SignUpLaypout from "@/layout/SignUpLaypout";
//component
import FloatLabelInput from "@/components/partials/input";
import Uploader from "@/components/partials/Uploader";
import NationalInfo from "./NationalInfo";
import ShopInfo from "./ShopInfo";
import CommercialInfo from "./CommercialInfo";
import ContractConfirmation from "./ContractConfirmation";
import UploadDocument from "./UploadDocument";

export default function SignUpForm() {
  const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
  const router = useRouter();
  const [step, setStep] = useState(5);
  const backHandler = () => {
    step > 1 ? setStep(step - 1) : router.push("/");
  };
  const Seller = Yup.object().shape({
    first_name: Yup.string().required("فیلد الزامی است"),
    last_name: Yup.string().required("فیلد الزامی است"),
    gender: Yup.string().required("فیلد الزامی است"),
    national_id: Yup.string().required("فیلد الزامی است"),
    city: Yup.string().required("فیلد الزامی است"),
    postal_region: Yup.string().required("فیلد الزامی است"),
    address: Yup.string().required("فیلد الزامی است"),
    store_name: Yup.string().required("فیلد الزامی است"),
    sheba_number: Yup.string().required("فیلد الزامی است"),
    estimated_item_count: Yup.string().required("فیلد الزامی است"),
  });
  const { handleChange, values, setFieldValue, handleSubmit, errors } =
    useFormik({
      initialValues: {
        first_name: "",
        last_name: "",
        gender: "",
        national_id: "",
        city: "",
        postal_region: "",
        address: "",
        store_name: "",
        sheba_number: "",
        estimated_item_count: "",
        IDCard: "",
        IDCertificate: "",
        SaleCertificate: "",
        SandicaCertificate: "",
        TaxCertificate: "",
      },
      onSubmit: async (values) => {
        // toggleSubmitState();
        // const response = await PatchRegister(values);
        // toggleSubmitState();
        // if (step < 6) {
        //   // if (response.success) setStep(step + 1)
        //   // else console.log("Errors: ", response.errors);
        //   setStep(step + 1);
        // } else {
        //   router.push("/");
        // }
      },
      validationSchema: Seller,
    });

  switch (step) {
    case 1:
      return (
        <SignUpLaypout
          backHandler={backHandler}
          step={step}
          title={"اطلاعات شخصی"}
        >
          <NationalInfo
            handleChange={handleChange}
            values={values}
            setStep={setStep}
            errors={errors}
            // isSubmitting={isSubmitting}
          />
        </SignUpLaypout>
      );
    case 2:
      return (
        <SignUpLaypout
          backHandler={backHandler}
          step={step}
          title={"اطلاعات فروشگاه"}
        >
          <ShopInfo
            handleChange={handleChange}
            values={values}
            setStep={setStep}
            errors={errors}
          />
        </SignUpLaypout>
      );
    case 3:
      return (
        <SignUpLaypout
          backHandler={backHandler}
          step={step}
          title={"اطلاعات تجاری"}
        >
          <CommercialInfo
            handleChange={handleChange}
            values={values}
            setStep={setStep}
            errors={errors}
          />
        </SignUpLaypout>
      );
    case 4:
      return (
        <SignUpLaypout backHandler={backHandler} step={step} title={"قرارداد"}>
          <ContractConfirmation setStep={setStep} />
        </SignUpLaypout>
      );
    case 5:
      return (
        <SignUpLaypout
          backHandler={backHandler}
          step={step}
          title={"بارگزاری مدارک"}
        >
          <UploadDocument
            setFieldValue={setFieldValue}
            values={values}
            setStep={setStep}
            errors={errors}
          />
        </SignUpLaypout>
      );
    case 6:
      return (
        <SignUpLaypout
          backHandler={backHandler}
          step={step}
          title={"فروشنده عزیز، با سپاس از همراهی شما"}
        >
          <div className="w-full">
            <p className="block text-base lg:text-lg text-center text-black font-bold leading-[50px] w-full p-1 lg:p-4 mb-4 border-[1px] border-primary rounded-[10px]">
              بررسی مدارک توسط بازرس پتمون انجام می شود. در صورت{" "}
              <span className="text-verify">تایید</span>، حساب کاربری شما فعال
              خواهد شد.
            </p>
            <button
              onClick={() => router.push("/")}
              className={`btn md:h-[12%] lg:h-[15%] border-0 bg-primary hover:bg-primary-dark active:bg-primary focus:bg-primary w-full mt-4 lg:mt-0 rounded-lg text-base text-white md:text-xl font-normal ${
                isSubmitting && "loading"
              }`}
            >
              بازگشت به صفحه اصلی
            </button>
          </div>
        </SignUpLaypout>
      );
    default:
      console.log("Done");
  }
}
