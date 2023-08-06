import React, { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";
import moment from "jalali-moment";

//media
import BagTick_Icon from "../../../assets/common/bag-tick2.svg";
import CartTotal_Icon from "../../../assets/common/card-receive2.svg";
import search_Icon from "../../../assets/common/searchIcon3.svg";
import logout_Icon from "../../../assets/common/logoutIconRed.svg";
// import datebg from "../../../assets/common/date.png";
import { finantialReport } from "@/services/finantialReport/finantialReport";
const startDate = new Date("2022-04-04");
const endDate = new Date();
export default function index() {
  const [data, setData] = useState([
    {
      month: "فروردین",
      sumIncome: "57600500",
      sumSaleAmount: "7654",
      salesDetail: [
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
      ],
    },
    {
      month: "اردیبهشت",
      sumIncome: "57600500",
      sumSaleAmount: "7654",
      salesDetail: [
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
      ],
    },
    {
      month: "خرداد",
      sumIncome: "57600500",
      sumSaleAmount: "7654",
      salesDetail: [
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
      ],
    },
    {
      month: "تیر",
      sumIncome: "57600500",
      sumSaleAmount: "7654",
      salesDetail: [
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
      ],
    },
    ,
    { month: "مرداد", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    { month: "شهریور", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    { month: "مهر", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    { month: "آبان", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    { month: "آذر", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    {
      month: "دی",
      sumIncome: "57600500",
      sumSaleAmount: "7654",
      salesDetail: [
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
        {
          date: "۰۸/۱۰/۱۴۰۱",
          sumSale: 220000,
          benefit: 125000,
          checkoutDate: "۱۸ آبان ۱۴۰۱",
          checkoutStatus: "تسویه شده",
        },
      ],
    },
    { month: "بهمن", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
    { month: "اسفند", sumIncome: "", sumSaleAmount: "", salesDetail: [] },
  ]);
  const months = [
    { id: "01", name: "فروردین", daysOfMoon: 31 },
    { id: "02", name: "اردیبهشت", daysOfMoon: 31 },
    { id: "03", name: "خرداد", daysOfMoon: 31 },
    { id: "04", name: "تیر", daysOfMoon: 31 },
    { id: "05", name: "مرداد", daysOfMoon: 31 },
    { id: "06", name: "شهریور", daysOfMoon: 31 },
    { id: "07", name: "مهر", daysOfMoon: 30 },
    { id: "08", name: "آبان", daysOfMoon: 30 },
    { id: "09", name: "آذر", daysOfMoon: 30 },
    { id: "10", name: "دی", daysOfMoon: 30 },
    { id: "11", name: "بهمن", daysOfMoon: 29 },
    { id: "12", name: "اسفند", daysOfMoon: 29 },
  ];
  const years = [];
  for (
    let i = moment(startDate, "YYYY/MM/DD")
      .locale("fa")
      .format("YYYY/MM/DD")
      .split("/")[0];
    i <=
    moment(endDate, "YYYY/MM/DD")
      .locale("fa")
      .format("YYYY/MM/DD")
      .split("/")[0];
    i++
  ) {
    years.push(i);
  }
  // for select the date
  const [monthSelected, setMonthSelected] = useState(
    months.find(
      (item) =>
        item.id ===
        moment(endDate, "YYYY/MM/DD")
          .locale("fa")
          .format("YYYY/MM/DD")
          .split("/")[1]
    )
  );
  const [yearSelected, setYearSelected] = useState(
    moment(endDate, "YYYY/MM/DD")
      .locale("fa")
      .format("YYYY/MM/DD")
      .split("/")[0]
  );
  // const data = months.filter((item) => item.name == monthSelected.name)[0];

  // for open and close the box
  const [dateShowBox, setDateShowBox] = useState(true);
  const [monthselectorBox, setMonthSelectorBox] = useState(false);
  const [yearselectorBox, setYearSelectorBox] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const queryParams = new URLSearchParams();
      queryParams.set(
        "start_date",
        new Date(
          moment
            .from(`${yearSelected}-${monthSelected.id}-01`, "fa", "YYYY-MM-DD")
            .locale("en")
            .format("YYYY-MM-DD")
        ).toISOString()
      );
      queryParams.set(
        "end_date",
        new Date(
          moment
            .from(
              `${yearSelected}-${monthSelected.id}-${monthSelected.daysOfMoon}`,
              "fa",
              "YYYY-MM-DD"
            )
            .locale("en")
            .format("YYYY-MM-DD")
        ).toISOString()
      );
      const response = await finantialReport(queryParams.toString());
      if (response) {
        console.log(response);
        setData(response.data);
      }
    };
    getData();
  }, [monthSelected]);
  return (
    <div className="h-screen lg:h-full flex flex-col items-stretch">
      {/* Heading for mobile  */}
      <div className="lg:hidden flex items-center">
        <div className="flex h-12 w-full px-5 py-3 bg-[#F2CDC8] rounded-[15px]">
          <input
            type="text"
            placeholder="جستجوی محصول، فروشگاه و..."
            className="h-full w-full text-base text-right text-white placeholder:text-primary placeholder:opacity-50 font-bold border-none bg-transparent appearance-none focus:ring-0 focus:outline-none focus:border-none peer"
          />
          <Image src={search_Icon} alt="SearchIcon" />
        </div>
        <div className="p-3 bg-[#F2CDC8] rounded-[15px] mr-1">
          <Image src={logout_Icon} alt="LogOut Icon" />
        </div>
      </div>
      {/* summary Information */}
      <div className="flex flex-col lg:flex-row items-stretch lg:justify-center mt-10">
        {/* orders sum */}
        <div className="order-2 lg:order-1 w-full lg:w-1/4 h-full flex flex-row-reverse lg:flex-col justify-between items-stretch bg-white px-6 py-5 lg:py-7.5  rounded-[15px] lg:rounded-[25px] shadow-shadowB ">
          <Image src={CartTotal_Icon} alt="CartTotalIcon" />
          <div className="text-right flex flex-col lg:mt-10">
            <p className="text-base lg:text-lg text-[#3A4750] font-bold leading-6">
              مجموع درآمد فروشگاه
            </p>
            <p className='text-xl lg:text-2xl text-[#3A4750] font-extrabold leading-10 mt-1.5 after:content-["تومان"] after:text-sm after:mr-2'>
              <bdi>{(+data?.total_incom).toLocaleString()}</bdi>
            </p>
          </div>
          <p className="hidden lg:block text-base text-black font-noramal opacity-60 mt-4 self-end">
            <bdi>{monthSelected.name}</bdi>
          </p>
        </div>
        {/* Date Show Box  */}
        <div
          className={clsx(
            "order-1 lg:order-2 w-full lg:w-2/4 h-full flex-col justify-between items-stretch relative  py-3 px-7 lg:px-10 lg:mr-5 my-1 lg:my-0 lg:mx-5 rounded-[15px] lg:rounded-[25px] shadow-shadowB imgBg",
            {
              flex: dateShowBox,
              hidden: dateShowBox == false,
            }
          )}
        >
          <p></p>
          <p className="text-xl lg:text-3xl text-black font-black leading-10 opacity-90 self-center">
            <bdi>{monthSelected?.name + " " + yearSelected}</bdi>
          </p>
          <button
            onClick={() => {
              setMonthSelectorBox(true);
              setDateShowBox(false);
            }}
            className="self-end text-base lg:text-lg text-info font-normal leading-8 opacity-90"
          >
            <bdi>انتخاب ماه</bdi>
          </button>
        </div>
        {/* Month Selector Box  */}
        <div
          className={clsx(
            "order-1 lg:order-2 w-full lg:w-2/4 h-full grid-cols-4 justify-between items-stretch relative bg-white p-6 lg:p-10 lg:mr-5 my-1 lg:my-0 lg:mx-5 border-[1px] border-primary rounded-[15px] lg:rounded-[25px] shadow-shadowB",
            {
              grid: monthselectorBox,
              hidden: monthselectorBox == false,
            }
          )}
        >
          {months.map((item, index) => (
            <p
              key={v4()}
              onClick={() => {
                setMonthSelected(item);
                setMonthSelectorBox(false);
                setDateShowBox(true);
              }}
              className={clsx(
                "text-base lg:text-xl font-medium cursor-pointer leading-7",
                {
                  "text-primary": item.name == monthSelected.name,
                  "text-black": item.name !== monthSelected.name,
                }
              )}
            >
              <bdi>{item.name}</bdi>
            </p>
          ))}
          <button
            onClick={() => {
              setYearSelectorBox(true);
              setMonthSelectorBox(false);
            }}
            className="text-base lg:text-lg text-info font-normal leading-8 opacity-90 absolute bottom-3 left-3 lg:bottom-5 lg:left-10"
          >
            <bdi>{yearSelected}</bdi>
          </button>
        </div>
        {/* Year Selector Box  */}
        <div
          className={clsx(
            "order-1 lg:order-2 w-full lg:w-2/4 h-full  grid-cols-4 justify-between items-stretch relative bg-white p-6 lg:p-10 lg:mr-5 my-1 lg:my-0 lg:mx-5 border-[1px] border-primary rounded-[15px] lg:rounded-[25px] shadow-shadowB",
            {
              grid: yearselectorBox,
              hidden: yearselectorBox == false,
            }
          )}
        >
          {years.map((item, index) => (
            <p
              key={v4()}
              onClick={() => {
                setYearSelected(item);
                setMonthSelectorBox(true);
                setYearSelectorBox(false);
              }}
              className={clsx(
                "text-base lg:text-xl cursor-pointer font-medium leading-7",
                {
                  "text-primary": item == yearSelected,
                  "text-black": item !== yearSelected,
                }
              )}
            >
              <bdi>{item}</bdi>
            </p>
          ))}
        </div>
        {/* orders number */}
        <div className="order-2 lg:order-3 w-full lg:w-1/4 h-full flex flex-row-reverse lg:flex-col justify-between items-stretch bg-white px-6 py-5 lg:py-7.5  rounded-[15px] lg:rounded-[25px] shadow-shadowB">
          <Image src={BagTick_Icon} alt="BagTickIcon" />
          <div className="text-right flex flex-col lg:mt-10">
            <p className="text-base lg:text-lg text-[#3A4750] font-bold leading-6">
              تعداد سفارشات فروشگاه
            </p>
            <p className='text-xl lg:text-2xl text-[#3A4750] font-extrabold leading-10 mt-1.5 after:content-["عدد"] after:text-sm after:mr-2'>
              <bdi>{(+data?.orders_count).toLocaleString()}</bdi>
            </p>
          </div>
          <p className="hidden lg:block text-base text-black font-noramal opacity-60 mt-4 self-end">
            <bdi>{monthSelected.name}</bdi>
          </p>
        </div>
      </div>
      {/* Sales Details */}
      <div className="flex flex-col my-2 lg:my-4 mb-[100px]">
        {data?.salesDetail?.length ? (
          data?.salesDetail.map((item, index) => (
            <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full p-5 lg:px-[65px] lg:py-[75px] my-1 lg:my-2 bg-white border-[1px] border-secondary lg:border-none rounded-[15px] lg:rounded-[25px] shadow-shadowB">
              <p className="text-xs lg:text-xl text-black font-extrabold leading-6 opacity-90 before:inline-block before:align-middle before:w-2.5 lg:before:w-2 before:h-2.5 lg:before:h-4 before:bg-primary before:rounded-full lg:before:rounded-[2px] before:ml-1 lg:before:mr-2">
                <bdi>{item.date}</bdi>
              </p>
              {/* mobile */}
              <div
                key={v4()}
                className="lg:hidden flex text-[10px] xs:text-sm sm:text-base mt-4"
              >
                <div className="flex flex-col text-[10px] xs:text-sm sm:text-base">
                  <div className="flex items-center">
                    <p className="text-black font-medium leading-7 opacity-95">
                      <bdi>مجموع فروش</bdi>
                    </p>
                    <p className='text-gray-400 font-medium leading-8 mr-2 after:content-["تومان"] after:text-xs after:mr-1'>
                      <bdi>{(+item.sumSale).toLocaleString()}</bdi>
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <p className="text-black font-medium leading-7 opacity-95">
                      <bdi>تاریخ تسویه</bdi>
                    </p>
                    <p className="text-gray-400 font-medium leading-8 mr-2">
                      <bdi>{item.checkoutDate}</bdi>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col mr-2 sm:mr-[80px]">
                  <div className="flex items-center">
                    <p className="text-black font-medium leading-7 opacity-95">
                      <bdi>سود شما</bdi>
                    </p>
                    <p className='text-gray-400 font-medium leading-8 mr-2 after:content-["تومان"] after:text-xs after:mr-1'>
                      <bdi>{(+item.benefit).toLocaleString()}</bdi>
                    </p>
                  </div>
                  <div className="flex items-center mt-2">
                    <p className="text-black font-medium leading-7 opacity-95">
                      <bdi>وضعیت</bdi>
                    </p>
                    <p className="text-gray-400 font-medium leading-8 mr-2">
                      <bdi>{item.checkoutStatus}</bdi>
                    </p>
                  </div>
                </div>
              </div>
              {/* desktop */}
              <div key={v4()} className="hidden lg:flex mr-10">
                <div className="flex lg:flex-col items-center">
                  <p className="text-base text-black font-medium leading-7 opacity-95 pb-4 px-3 xl:px-10 2xl:px-[100px] mx-0 border-b-[2.5px] border-[#D9D9D9]">
                    <bdi>مجموع فروش</bdi>
                  </p>
                  <p className="text-lg text-[#3A4750] font-extrabold leading-8 pt-4">
                    <bdi>{(+item.total_incom).toLocaleString()}</bdi>
                  </p>
                </div>
                <div className="flex lg:flex-col items-center">
                  <p className="text-base text-black font-medium leading-7 opacity-95 pb-4 px-3 xl:px-10 2xl:px-[100px] mx-0 border-b-[2.5px] border-[#D9D9D9]">
                    <bdi>سود شما</bdi>
                  </p>
                  <p className="text-lg text-[#3A4750] font-extrabold leading-8 pt-4">
                    <bdi>{(+item.benefit).toLocaleString()}</bdi>
                  </p>
                </div>
                <div className="flex lg:flex-col items-center">
                  <p className="text-base text-black font-medium leading-7 opacity-95 pb-4 px-3 xl:px-10 2xl:px-[100px] mx-0 border-b-[2.5px] border-[#D9D9D9]">
                    <bdi>تاریخ تسویه</bdi>
                  </p>
                  <p className="text-lg text-[#3A4750] font-extrabold leading-8 pt-4">
                    <bdi>{item.checkoutDate}</bdi>
                  </p>
                </div>
                <div className="flex lg:flex-col items-center">
                  <p className="text-base text-black font-medium leading-7 opacity-95 pb-4 px-3 xl:px-10 2xl:px-[100px] mx-0 border-b-[2.5px] border-[#D9D9D9]">
                    <bdi>وضعیت</bdi>
                  </p>
                  <p className="text-lg text-[#3A4750] font-extrabold leading-8 pt-4">
                    <bdi>{item.checkoutStatus}</bdi>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-base lg:text-xl text-error font-black leading-10 mt-10">
            <bdi>در این ماه هیچ سفارشی برای فروشگاه شما ثبت نشده است!</bdi>
          </p>
        )}
      </div>
    </div>
  );
}
