import React, { useState } from "react";
import clsx from "clsx";
//component
import Uploader from "@/components/partials/Uploader";
export default function UploadDocument({
  setFieldValue,
  isSubmitting,
  values,
  handleSubmit,
  errors,
}) {
  const [tab, setTab] = useState("national_card"); //toggle between Tabs
  return (
    <form
      // onSubmit={formik.handleSubmit}
      className="w-full h-[60%] lg:h-[50%] lg:w-[80%]"
    >
      <div className="flex flex-col h-full items-center justify-between">
        {/* toggle between Tabs */}
        <div className="tabs self-center flex flex-row justify-center  w-full text-xs xl:text-sm text-black font-medium leading-6 my-3">
          <a
            className={clsx("tab tab-bordered", {
              "tab-active": tab == "national_card",
            })}
            onClick={() => setTab("national_card")}
          >
            کارت ملی
          </a>
          <a
            className={clsx("tab tab-bordered", {
              "tab-active": tab == "birth_certificate",
            })}
            onClick={() => setTab("birth_certificate")}
          >
            شناسنامه
          </a>
          <a
            className={clsx("tab tab-bordered", {
              "tab-active": tab == "business_license",
            })}
            onClick={() => setTab("business_license")}
          >
            پروانه کسب
          </a>
          <a
            className={clsx("tab tab-bordered", {
              "tab-active": tab == "union_license",
            })}
            onClick={() => setTab("union_license")}
          >
            مجوز اتحادیه
          </a>
          <a
            className={clsx("tab tab-bordered", {
              "tab-active": tab == "tax_certificate",
            })}
            onClick={() => setTab("tax_certificate")}
          >
            گواهی مالیات
          </a>
        </div>
        <div>
          {(() => {
            switch (tab) {
              case "national_card":
                return (
                  <>
                    <Uploader
                      values={values}
                      id={"national_card"}
                      setFieldValue={setFieldValue}
                      errors={errors.national_card}
                    />
                    {errors.national_card ? (
                      <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
                        <bdi>{errors.national_card}</bdi>
                      </p>
                    ) : null}
                  </>
                );
              case "birth_certificate":
                return (
                  <>
                    <Uploader
                      values={values}
                      id={"birth_certificate"}
                      setFieldValue={setFieldValue}
                      errors={errors.birth_certificate}
                    />
                    {errors.birth_certificate ? (
                      <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
                        <bdi>{errors.birth_certificate}</bdi>
                      </p>
                    ) : null}
                  </>
                );
              case "business_license":
                return (
                  <>
                    <Uploader
                      values={values}
                      id={"business_license"}
                      setFieldValue={setFieldValue}
                      errors={errors.business_license}
                    />
                    {errors.business_license ? (
                      <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
                        <bdi>{errors.business_license}</bdi>
                      </p>
                    ) : null}
                  </>
                );
              case "union_license":
                return (
                  <>
                    <Uploader
                      values={values}
                      id={"union_license"}
                      setFieldValue={setFieldValue}
                      errors={errors.union_license}
                    />
                    {errors.union_license ? (
                      <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
                        <bdi>{errors.union_license}</bdi>
                      </p>
                    ) : null}
                  </>
                );
              case "tax_certificate":
                return (
                  <>
                    <Uploader
                      values={values}
                      id={"tax_certificate"}
                      setFieldValue={setFieldValue}
                    />
                    {errors.tax_certificate ? (
                      <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
                        <bdi>{errors.tax_certificate}</bdi>
                      </p>
                    ) : null}
                  </>
                );
            }
          })()}
        </div>

        <button
          onClick={handleSubmit}
          // type="submit"
          className={`btn h-12 disabled:text-primary border-0 disabled:border disabled:border-primary bg-primary disabled:bg-white hover:bg-[#d85241] text-[#fff] active:bg-primary focus:bg-primary w-full rounded-lg text-base md:text-xl font-normal ${
            isSubmitting && "loading"
          }`}
        >
          ادامه
        </button>
      </div>
    </form>
  );
}
