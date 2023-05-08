import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import Router, { useRouter } from "next/router";
import * as Yup from "yup";
// media
import Properties_Icon from "@/assets/common/PropertiesIcon.svg";
import HeadingForMobile from "./HeadingForMobile";
import { starsBoxHandler } from "@/services/products/starsOfProduct";
import { getSingleProduct } from "@/services/petemoonProducts/getSingleProduct";
import { createNewProduct } from "@/services/petShopProducts/createNewProduct";
export default function SingleProduct({ query }) {
  const [data, setDate] = useState({ property: [] });
  const router = useRouter();
  useEffect(() => {
    console.log(query);
    const getData = async () => {
      const response = await getSingleProduct(query);
      if (response.success) {
        console.log(response);
        setDate(response.data);
      } else {
        console.log(response.errors);
      }
    };
    getData();
  }, []);
  const product = Yup.object().shape({
    price: Yup.string().required("فیلد الزامی است"),
    inventory: Yup.string().required("فیلد الزامی است"),
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      product_id: data.id,
      price: "",
      price_after_sale: "",
      inventory: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const response = await createNewProduct({
        product_id: values.product_id,
        price: values.price,
        price_after_sale: values.price,
        inventory: values.inventory,
      });
      if (response.success) {
        console.log(response);
        router.push("/dashboard/products");
      }
    },
    validationSchema: product,
  });

  return (
    <div className="w-full h-full flex flex-col justify-between items-stretch lg:px-10 lg:py-5">
      {/* Main */}
      <div className="flex flex-col justify-between items-stretch w-full">
        {/*Heading for mobile */}
        <HeadingForMobile data={data} />
        {/* Summary box */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-evenly items-stretch py-5 lg:py-10 border-b-[2px] border-secondary">
          {/* Gallery */}
          <div className="self-center w-full lg:w-[450px] h-[200px] lg:h-[600px] rounded-[15px] border-[2px] border-primary solid">
            <Image
              style={{ width: "100%", height: "100%" }}
              width={100}
              height={100}
              src={`https://api.petemoon.com${data.picture}`}
            />
          </div>
          <div className="xl:w-full flex flex-col lg:mr-10">
            {/* Heading for desktop */}
            <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start py-4  lg:px-4 border-b-[2px] border-none lg:border-solid border-secondary">
              <div className="flex flex-col">
                <p className="text-base lg:text-lg text-gray-400 font-normal leading-6">
                  <bdi>
                    {data.category}/{data.pet_type}
                  </bdi>
                </p>
                <div className="w-full hidden lg:flex flex-row items-center justify-between mt-2">
                  <h2 className="text-3xl text-black font-bold leading-10 before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-2  before:rounded-[2px]">
                    {data.name}
                  </h2>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col justify-between items-center lg:items-start lg:mt-10">
                <div className="hidden lg:flex flex-row items-center">
                  <div className="flex flex-row items-center">
                    {data.rating
                      ? starsBoxHandler(data.rating)
                      : starsBoxHandler(5)}
                  </div>
                  <p className="text-xl text-gray-400 font-medium leading-6 mr-2 align-middle">{`(${
                    data.rating ? data.rating : 5
                  })`}</p>
                </div>
                <Link
                  href="#cutomersComent"
                  className="text-base lg:text-lg text-info font-normal leading-6 lg:mt-2"
                >
                  <bdi>{`${data.comments?.length} دیدگاه`}</bdi>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between mt-5">
              {/* Summary Propertiese */}
              <div className="pb-3 my-2 order-2 lg:order-1 border-none lg:border-solid border-b-[2px] border-secondary">
                <div className="flex flex-row items-center mb-1">
                  <Image src={Properties_Icon} alt="PropertiesIcon" />
                  <p className="text-lg lg:text-xl text-black font-bold leading-8 opacity-90 mr-1">
                    <bdi>ویژگی ها</bdi>
                  </p>
                </div>

                <div className="lg:hidden flex flex-row items-center align-middle my-1 mr-5">
                  <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
                    <bdi>مخصوص:</bdi>
                  </p>
                  <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
                    <bdi>{data.pet_type}</bdi>
                  </p>
                </div>
                <div className="lg:hidden flex flex-row items-center align-middle my-1 mr-5">
                  <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
                    <bdi>نوع:</bdi>
                  </p>
                  <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
                    <bdi>{data.category}</bdi>
                  </p>
                </div>
                <div className="hidden lg:flex flex-row items-center align-middle my-1 mr-5">
                  <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
                    <bdi>مخصوص:</bdi>
                  </p>
                  <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
                    <bdi> {data.pet_type}</bdi>
                  </p>
                </div>
                <div className="hidden lg:flex flex-row items-center align-middle my-1 mr-5">
                  <p className='text-base lg:text-lg text-gray-400 font-bold leading-7 opacity-90 before:content-["."] before:text-4xl before:ml-2'>
                    <bdi>نوع:</bdi>
                  </p>
                  <p className="text-base lg:text-lg text-black font-bold leading-7 opacity-90 mr-4 lg:mr-2 align-bottom">
                    <bdi> {data.category}</bdi>
                  </p>
                </div>
              </div>
              {/* Add Prodcut for desktop */}
              <div className="hidden lg:flex flex-col items-stretch order-1 w-full mb-3 py-5">
                <div className="flex items-center justify-between w-full my-2 px-5 py-0.5 border-[1px] border-primary rounded-[15px]">
                  <p className="text-lg text-primary font-bold leading-7">
                    <bdi>قیمت را وارد نمایید:</bdi>
                  </p>
                  <div className="flex items-center">
                    <input
                      name="price"
                      type="number"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      className="text-2xl text-primary font-medium leading-10 opacity-90 w-[100px] bg-transparent appearance-none border-none focus:outline-none focus:ring-0 focus:border-none peer"
                    />
                    <p className="text-sm text-primary font-normal leading-7">
                      <bdi>تومان</bdi>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full my-2 px-5 py-0.5 border-[1px] border-primary rounded-[15px]">
                  <p className="text-lg text-primary font-bold leading-7">
                    <bdi>موجودی را وارد نمایید:</bdi>
                  </p>
                  <div className="flex items-center">
                    <input
                      name="inventory"
                      value={formik.values.inventory}
                      onChange={formik.handleChange}
                      type="number"
                      className="text-2xl text-primary font-medium leading-10 opacity-90 w-[100px] bg-transparent appearance-none border-none focus:outline-none focus:ring-0 focus:border-none peer"
                    />
                    <p className="text-sm text-primary font-normal leading-7">
                      <bdi>عدد</bdi>
                    </p>
                  </div>
                </div>
                <button
                  onClick={formik.handleSubmit}
                  className="text-base text-white font-bold leading-7 w-full px-5 py-3 mt-5 bg-primary rounded-[15px]"
                >
                  <bdi>افزودن به محصولات</bdi>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Add Prodcut for mobile */}
        <div className="lg:hidden flex flex-col items-stretch justify-between w-full h-full mt-10 mb-[100px]">
          <div className="flex flex-col items-stretch">
            <div className="flex items-center justify-between w-full my-2 px-5 py-0.5 border-[1px] border-primary rounded-[15px]">
              <p className="text-base lg:text-lg text-primary font-bold leading-7">
                <bdi>قیمت را وارد نمایید:</bdi>
              </p>
              <div className="flex items-center">
                <input
                  name="price"
                  type="number"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  className="text-base lg:text-2xl text-primary font-medium leading-10 opacity-90 w-[100px] bg-transparent appearance-none border-none focus:outline-none focus:ring-0 focus:border-none peer"
                />
                <p className="text-sm text-primary font-normal leading-7">
                  <bdi>تومان</bdi>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between w-full my-2 px-5 py-0.5 border-[1px] border-primary rounded-[15px]">
              <p className="text-base lg:text-lg text-primary font-bold leading-7">
                <bdi>موجودی را وارد نمایید:</bdi>
              </p>
              <div className="flex items-center">
                <input
                  name="inventory"
                  value={formik.values.inventory}
                  onChange={formik.handleChange}
                  type="number"
                  className="text-base lg:text-2xl text-primary font-medium leading-10 opacity-90 w-[100px] bg-transparent appearance-none border-none focus:outline-none focus:ring-0 focus:border-none peer"
                />
                <p className="text-sm text-primary font-normal leading-7">
                  <bdi>عدد</bdi>
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={formik.handleSubmit}
            className="text-base text-white font-bold leading-7 w-full px-5 py-3 mt-5 bg-primary rounded-[15px]"
          >
            <bdi>افزودن به محصولات</bdi>
          </button>
        </div>
      </div>
    </div>
  );
}
