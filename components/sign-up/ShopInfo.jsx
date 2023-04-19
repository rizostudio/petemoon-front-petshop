import React, { useState } from "react";
//component
import FloatLabelInput from "../partials/input";
export default function ShopInfo({ errors, setStep, handleChange, values }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubbmit = () => {
    if (
      values.store_name &&
      values.city &&
      values.postal_region &&
      values.address
    ) {
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
          placeholder={"نام فروشگاه"}
          name="store_name"
          onChange={handleChange}
          value={values.store_name}
          required={true}
          h={"h-[12%] lg:h-[15%]"}
        />
        {errors.store_name ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.store_name}</bdi>
          </p>
        ) : null}
        <FloatLabelInput
          type={"text"}
          placeholder={"استان / شهر"}
          name="city"
          onChange={handleChange}
          value={values.city}
          required={true}
          h={"h-[12%] lg:h-[15%]"}
        />
        {errors.city ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.city}</bdi>
          </p>
        ) : null}
        <FloatLabelInput
          type={"text"}
          placeholder={"منطقه پستی"}
          name="postal_region"
          onChange={handleChange}
          value={values.postal_region}
          required={true}
          h={"h-[12%] lg:h-[15%]"}
        />
        {errors.postal_region ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.postal_region}</bdi>
          </p>
        ) : null}
        <FloatLabelInput
          type={"text"}
          placeholder={"آدرس"}
          name="address"
          onChange={handleChange}
          value={values.address}
          required={true}
          h={"h-[12%] lg:h-[15%]"}
          py={"py-4"}
        />
        {errors.address ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.address}</bdi>
          </p>
        ) : null}
        <button
          onClick={handleSubbmit}
          // type="submit"
          className={`btn md:h-[12%] lg:h-[15%] border-0 bg-primary hover:bg-primary-dark active:bg-primary focus:bg-primary w-full mt-4 lg:mt-0 rounded-lg text-base md:text-xl text-white mb-4 font-normal ${
            isSubmitting && "loading"
          }`}
        >
          ادامه
        </button>
      </div>
    </div>
  );
}
