import React, { useState, useEffect } from "react";
//component
import FloatLabelInput from "../partials/input";
import data from "../../staticJsonData/provinces.json";
export default function ShopInfo({ errors, setStep, handleChange, values }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cities, setCities] = useState([]);
  const handleSubbmit = () => {
    if (
      values.store_name &&
      values.city &&
      values.postal_region &&
      values.address &&
      values.province
    ) {
      setStep((prev) => prev + 1);
    }
  };
  useEffect(() => {
    data.find((item) => {
      if (item.name === values.province) {
        setCities(item.cities);
        console.log(item.cities);
      }
    });
  }, [values.province]);
  return (
    <div
      // onSubmit={formik.handleSubmit}
      className="w-full h-[60%] lg:h-[60%] lg:w-[100%]"
    >
      <div className="flex flex-col h-full space-y-3 items-center space-y-3 justify-between">
        <FloatLabelInput
          type={"text"}
          placeholder={"نام فروشگاه"}
          name="store_name"
          onChange={handleChange}
          value={values.store_name}
          required={true}
          h={"h-12"}
        />
        {errors.store_name ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.store_name}</bdi>
          </p>
        ) : null}
        <FloatLabelInput
          type={"select"}
          placeholder={"  استان"}
          name="province"
          onChange={handleChange}
          value={values.province}
          required={true}
          list="provinces"
          h={"h-12"}
        >
          <option selected className="hidden"></option>
          {data.map((item) => (
            <option id={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </FloatLabelInput>
        {/* </select> */}
        {errors.province && (
          <p className="text-[12px] text-error font-semibold leading-5 ml-auto ">
            <bdi>{errors.province}</bdi>
          </p>
        )}

        <FloatLabelInput
          type={"select"}
          placeholder={"  شهر"}
          name="city"
          onChange={handleChange}
          value={values.city}
          required={true}
          h={"h-12"}
        >
          <option selected className="hidden"></option>
          {cities.map((item) => (
            <option id={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </FloatLabelInput>
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
          h={"h-12"}
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
          h={"h-[150px]"}
          py={"py-4"}
        />
        {errors.address ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>{errors.address}</bdi>
          </p>
        ) : null}
        <button
          onClick={handleSubbmit}
          className={`btn h-12 disabled:text-primary border-0 disabled:border disabled:border-primary bg-primary disabled:bg-white hover:bg-[#d85241] text-[#fff] active:bg-primary focus:bg-primary w-full rounded-lg text-base md:text-xl font-normal 
`}
        >
          ادامه
        </button>
      </div>
    </div>
  );
}
