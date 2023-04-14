import React, { useState } from "react";
import clsx from "clsx";
//component
import Uploader from "@/components/partials/Uploader";
export default function UploadDocument({
  setFieldValue,
  isSubmitting,
  values,
}) {
  const [tab, setTab] = useState("IDCard"); //toggle between Tabs
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
              "tab-active": tab == "IDCard",
            })}
            onClick={() => setTab("IDCard")}
          >
            کارت ملی
          </a>
          <a
            className={clsx("tab tab-bordered", {
              "tab-active": tab == "IDCertificate",
            })}
            onClick={() => setTab("IDCertificate")}
          >
            شناسنامه
          </a>
          <a
            className={clsx("tab tab-bordered", {
              "tab-active": tab == "SaleCertificate",
            })}
            onClick={() => setTab("SaleCertificate")}
          >
            پروانه کسب
          </a>
          <a
            className={clsx("tab tab-bordered", {
              "tab-active": tab == "SandicaCertificate",
            })}
            onClick={() => setTab("SandicaCertificate")}
          >
            مجوز اتحادیه
          </a>
          <a
            className={clsx("tab tab-bordered", {
              "tab-active": tab == "TaxCertificate",
            })}
            onClick={() => setTab("TaxCertificate")}
          >
            گواهی مالیات
          </a>
        </div>
        <div>
          {(() => {
            switch (tab) {
              case "IDCard":
                return (
                  <Uploader
                    values={values}
                    id={"IDCard"}
                    setFieldValue={setFieldValue}
                  />
                );
              case "IDCertificate":
                return (
                  <Uploader
                    values={values}
                    id={"IDCertificate"}
                    setFieldValue={setFieldValue}
                  />
                );
              case "SaleCertificate":
                return (
                  <Uploader
                    values={values}
                    id={"SaleCertificate"}
                    setFieldValue={setFieldValue}
                  />
                );
              case "SandicaCertificate":
                return (
                  <Uploader
                    values={values}
                    id={"SandicaCertificate"}
                    setFieldValue={setFieldValue}
                  />
                );
              case "TaxCertificate":
                return (
                  <Uploader
                    values={values}
                    id={"TaxCertificate"}
                    setFieldValue={setFieldValue}
                  />
                );
            }
          })()}
        </div>

        <button
          type="submit"
          className={`btn md:h-[12%] lg:h-[15%] border-0 bg-primary hover:bg-primary-dark active:bg-primary focus:bg-primary w-full mt-4 lg:mt-0 rounded-lg text-base md:text-xl text-white font-normal ${
            isSubmitting && "loading"
          }`}
        >
          ادامه
        </button>
      </div>
    </form>
  );
}
