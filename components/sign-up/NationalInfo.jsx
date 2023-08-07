import React, { useState } from "react";

//component
import FloatLabelInput from "../partials/input";
export default function NationalInfo({
  errors,
  setStep,
  handleChange,
  values,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = () => {
    if (
      values.first_name &&
      values.last_name &&
      values.gender &&
      values.national_id
    ) {
      setStep((prev) => prev + 1);
    }
  };
  return (
    <div className="w-full h-[60%] lg:h-[50%] lg:w-[80%]">
      <div className="flex flex-col h-full items-center justify-between">
        <FloatLabelInput
          type={"text"}
          placeholder={"نام"}
          name="first_name"
          onChange={handleChange}
          value={values.first_name}
          required={true}
          h={"h-12"}
        />
        {errors.first_name ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.first_name}</bdi>
          </p>
        ) : null}
        <FloatLabelInput
          type={"text"}
          placeholder={"نام خانوادگی"}
          name="last_name"
          onChange={handleChange}
          value={values.last_name}
          required={true}
          h={"h-12"}
        />
        {errors.last_name ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.last_name}</bdi>
          </p>
        ) : null}
        <FloatLabelInput
          type={"select"}
          placeholder={"جنسیت"}
          name="gender"
          onChange={handleChange}
          value={values.gender}
          h={"h-12"}
          py={"3"}
          dir={"rtl"}
        >
          <option value={"مرد"}>مرد</option>
          <option value={"زن"}>زن</option>
        </FloatLabelInput>
        {errors.gender ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.gender}</bdi>
          </p>
        ) : null}
        <FloatLabelInput
          type={"text"}
          placeholder={"کد ملی"}
          name="national_id"
          onChange={handleChange}
          value={values.national_id}
          required={true}
          h={"h-12"}
        />
        {errors.national_id ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.national_id}</bdi>
          </p>
        ) : null}
        <button
          onClick={handleSubmit}
          className={`btn h-12 disabled:text-primary border-0 disabled:border disabled:border-primary bg-primary disabled:bg-white hover:bg-[#d85241] text-[#fff] active:bg-primary focus:bg-primary w-full rounded-lg text-base md:text-xl font-normal 
`}
        >
          ادامه
        </button>
      </div>
    </div>
  );
}
