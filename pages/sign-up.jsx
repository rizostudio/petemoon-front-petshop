import { useFormik } from "formik";
import { useState } from "react";
import { useRouter } from "next/router";
import clsx from "clsx";
//component
import FloatLabelInput from "@/components/partials/input";
import { PatchRegister } from "@/services/signup";
import Layout from "@/components/sign-up/Layout";

//media
import bigPetsImage from "@/assets/signup/signupImage.png";
import backgroundLines from "@/assets/common/signUpLoginLines.png";
import leftArrow from "@/assets/common/leftArrow.png";
import Uploader from "@/components/Uploader";

export default function SignUp() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toggleSubmitState = () => setIsSubmitting((currState) => !currState);
  const router = useRouter();
  const [step, setStep] = useState(5);
  const backHandler = () => {
    step > 1 ? setStep(step - 1) : router.push("/");
  };
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      sex: "",
      email: "",
      refCode: "",
      storeName: "",
      stateAndCity: "",
      postRegion: "",
      address: "",
      bankAccountNumber: "",
      productAmount: "",
      contractCheck: "",
    },
    onSubmit: async (values) => {
      // toggleSubmitState();
      // const response = await PatchRegister(values);
      // toggleSubmitState();
      if (step < 6) {
        // if (response.success) setStep(step + 1)
        // else console.log("Errors: ", response.errors);
        setStep(step + 1);
      } else {
        router.push("/");
      }
    },
  });
  const [tab, setTab] = useState("IDCard"); //toggle between Tabs

  switch (step) {
    case 1:
      return (
        <Layout backHandler={backHandler} step={step} title={"اطلاعات شخصی"}>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full h-[60%] lg:h-[50%]"
          >
            <div className="flex flex-col h-full items-center justify-between">
              <FloatLabelInput
                type={"text"}
                placeholder={"نام"}
                name="firstname"
                onChange={formik.handleChange}
                value={formik.values.firstname}
                required={true}
                h={"h-[12%] lg:h-[15%]"}
              />
              <FloatLabelInput
                type={"text"}
                placeholder={"نام خانوادگی"}
                name="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
                required={true}
                h={"h-[12%] lg:h-[15%]"}
              />
              <FloatLabelInput
                type={"text"}
                placeholder={"جنسیت"}
                name="sex"
                onChange={formik.handleChange}
                value={formik.values.sex}
                required={true}
                h={"h-[12%] lg:h-[15%]"}
              />
              <FloatLabelInput
                type={"number"}
                placeholder={"کد ملی"}
                name="refCode"
                onChange={formik.handleChange}
                value={formik.values.refCode}
                required={true}
                h={"h-[12%] lg:h-[15%]"}
              />
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
        </Layout>
      );
    case 2:
      return (
        <Layout backHandler={backHandler} step={step} title={"اطلاعات فروشگاه"}>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full h-[60%] lg:h-[50%]"
          >
            <div className="flex flex-col h-full items-center justify-between">
              <FloatLabelInput
                type={"text"}
                placeholder={"نام فروشگاه"}
                name="storeName"
                onChange={formik.handleChange}
                value={formik.values.storeName}
                required={true}
                h={"h-[12%] lg:h-[15%]"}
              />
              <FloatLabelInput
                type={"text"}
                placeholder={"استان / شهر"}
                name="stateAndCity"
                onChange={formik.handleChange}
                value={formik.values.stateAndCity}
                required={true}
                h={"h-[12%] lg:h-[15%]"}
              />
              <FloatLabelInput
                type={"text"}
                placeholder={"منطقه پستی"}
                name="postRegion"
                onChange={formik.handleChange}
                value={formik.values.postRegion}
                required={true}
                h={"h-[12%] lg:h-[15%]"}
              />
              <FloatLabelInput
                type={"text"}
                placeholder={"آدرس"}
                name="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                required={true}
                h={"h-[12%] lg:h-[15%]"}
                py={"py-4"}
              />
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
        </Layout>
      );
    case 3:
      return (
        <Layout backHandler={backHandler} step={step} title={"اطلاعات تجاری"}>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full h-[60%] lg:h-[50%]"
          >
            <div className="flex flex-col h-full items-center justify-between">
              <FloatLabelInput
                type={"text"}
                placeholder={"شماره شبا"}
                name="bankAccountNumber"
                onChange={formik.handleChange}
                value={formik.values.bankAccountNumber}
                required={true}
                h={"h-[12%] lg:h-[15%]"}
              />
              <FloatLabelInput
                type={"number"}
                placeholder={"تعداد حدودی کالا"}
                name="productAmount"
                onChange={formik.handleChange}
                value={formik.values.productAmount}
                required={true}
                h={"h-[12%] lg:h-[15%]"}
              />
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
        </Layout>
      );
    case 4:
      return (
        <Layout backHandler={backHandler} step={step} title={"قرارداد"}>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full h-[60%] lg:h-[50%]"
          >
            <div className="flex flex-col h-full items-center justify-between">
              <div className="w-full h-[75%] p-3 lg:p-5 border-[1px] border-gray-400 rounded-[12px] overflow-y-scroll">
                <p className="text-sm lg:text-base text-right text-black font-medium leading-6 lg:tracking-wider">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                  صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                  راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                  حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
                  موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن
                  ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                  طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
                  و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
                  و کاربردهای متنوع با هدف به
                </p>
              </div>
              <div className="flex justify-between items-center w-full">
                <label
                  htmlFor="contractCheck"
                  className="text-sm lg:text-base text-right text-black font-medium leading-6"
                >
                  <bdi>متن قرارداد را مطالعه کردم و با مفاد آن موافق هستم</bdi>
                </label>
                <input
                  id="contractCheck"
                  type="checkbox"
                  // onChange={formik.handleChange}
                  // value={formik.values.contractCheck}
                  className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
                />
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
        </Layout>
      );
    case 5:
      return (
        <Layout backHandler={backHandler} step={step} title={"بارگزاری مدارک"}>
          <form
            onSubmit={formik.handleSubmit}
            className="w-full h-[60%] lg:h-[50%]"
          >
            <div className="flex flex-col h-full items-center justify-between">
              {/* toggle between Tabs */}
              <div className="tabs self-center flex flex-row justify-center lg:justify-start w-full text-xs xl:text-sm text-black font-medium leading-6 my-3">
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
                <Uploader />
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
        </Layout>
      );
    case 6:
      return (
        <Layout
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
        </Layout>
      );
    default:
      console.log("Done");
  }
}
