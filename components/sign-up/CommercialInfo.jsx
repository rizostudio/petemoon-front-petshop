import React, { useState } from "react";
//component
import FloatLabelInput from "../partials/input";
export default function CommercialInfo({
  errors,
  setStep,
  handleChange,
  values,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = () => {
    if (values.sheba_number && values.estimated_item_count) {
      setStep((prev) => prev + 1);
    }
  };
  return (
    <div
      // onSubmit={formik.handleSubmit}
      className="w-full h-[60%] lg:h-[50%] lg:w-[80%]"
    >
      <div className="flex flex-col h-full items-center justify-between">
        <FloatLabelInput
          type={"text"}
          placeholder={"شماره شبا"}
          name="sheba_number"
          onChange={handleChange}
          value={values.sheba_number}
          required={true}
          h={"h-[12%] lg:h-[15%]"}
        />
        {errors.sheba_number ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.sheba_number}</bdi>
          </p>
        ) : null}
        <FloatLabelInput
          type={"text"}
          placeholder={"تعداد حدودی کالا"}
          name="estimated_item_count"
          onChange={handleChange}
          value={values.estimated_item_count}
          required={true}
          h={"h-[12%] lg:h-[15%]"}
        />
        {errors.estimated_item_count ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.estimated_item_count}</bdi>
          </p>
        ) : null}
        <button
          onClick={handleSubmit}
          className={`btn md:h-[12%] lg:h-[15%] border-0 bg-primary hover:bg-primary-dark active:bg-primary focus:bg-primary w-full  lg:mt-1 rounded-lg text-base md:text-xl text-white mb-4 font-normal ${
            isSubmitting && "loading"
          }`}
        >
          ادامه
        </button>
      </div>
    </div>
  );
}
