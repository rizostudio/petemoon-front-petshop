import React, { useState } from "react";

export default function ContractConfirmation({ setStep }) {
  const [check, setCheck] = useState(false);
  const hanleSubmit = () => {
    if (check) {
      setStep((prev) => prev + 1);
    }
  };
  return (
    <div
      // onSubmit={formik.handleSubmit}
      className="w-full h-[60%] lg:h-[50%] lg:w-[100%]"
    >
      <div className="flex flex-col h-full items-center justify-between">
        <div className="w-full h-[75%] p-3 lg:p-5 border-[1px] border-gray-400 rounded-[12px] overflow-y-scroll">
          <p className="text-sm lg:text-base text-right text-black font-medium leading-6 lg:tracking-wider">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید
            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
            و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف به
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <label
            // htmlFor="contractCheck"
            className="text-sm lg:text-base text-right text-black font-medium leading-6"
          >
            <bdi>متن قرارداد را مطالعه کردم و با مفاد آن موافق هستم</bdi>
          </label>
          <input
            // id="contractCheck"
            type="checkbox"
            checked={check}
            onClick={() => setCheck((prev) => !prev)}
            className="h-4 w-4 text-primary border-primary focus:ring-transparent rounded-[4px]"
          />
        </div>
        {!check ? (
          <p className="text-[12px] text-error font-semibold leading-5  ml-auto">
            <bdi>فیلد الزامی است </bdi>
          </p>
        ) : null}
        <button
          onClick={hanleSubmit}
          className={`btn h-12 disabled:text-primary border-0 disabled:border disabled:border-primary bg-primary disabled:bg-white hover:bg-[#d85241] text-[#fff] active:bg-primary focus:bg-primary w-full rounded-lg text-base md:text-xl font-normal 
`}
        >
          ادامه
        </button>
      </div>
    </div>
  );
}
