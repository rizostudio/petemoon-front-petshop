import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import clsx from "clsx"; //for dynamic style
import { v4 } from "uuid"; // for produce unique key
//component
import BottomNavigation from "@/components/partials/BottomNavigation";
//media
import Search_Icon from "../assets/common/search-icon.svg";
import ArrowLeft_Icon from "../assets/common/arrow-left.svg";
import Logout_Btn from "../assets/common/logout-btn.svg";
import Petemoon_Logo from "../assets/common/Petemoon.svg";
import SellerPanel_Logo from "../assets/common/SellerPanelLogo.svg";
import ShopWhite_Icon from "../assets/common/shop2white.svg";
import OrdersWhite_Icon from "../assets/common/shopping-cartWhite.svg";
import WalletWhite_Icon from "../assets/common/walletWhiteIcon.svg";
import HomeWhite_Icon from "../assets/common/homeWhiteIcon.svg";
import MessageWhite_Icon from "../assets/common/messageWhiteIcon.svg";
import SupportWhite_Icon from "../assets/common/supportWhiteIcon.svg";
import { getOverview } from "@/services/overview/getOverview";
import AuthContext from "@/store/AuthCtx/AuthContext";
import { isLogin, refreshTokenLS, userDataStorage } from "@/localStorage/auth";
import { logout } from "@/services/auth/logout";
const DashboardLayout = ({ children }) => {
  const [openly, setOpenly] = useState(true); //for open and close dashboard in mobile
  const router = useRouter();
  const [Minify, setMinify] = useState(false); // for minify dashboard
  const [data, setData] = useState({});
  const [user, setuser] = useState({});
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    const getDate = async () => {
      const response = await getOverview();
      if (response.success) {
        console.log(response.data);
        setData(response.data);
      } else {
        console.log(response.errors);
      }
    };
    getDate();
  }, []);
  useEffect(() => {
    setuser(authCtx.userData);
  }, [authCtx]);
  const openHandler = () => {
    setOpenly(true);
  };
  const handleLogout = async () => {
    const response = await logout();
    if (response.success) {
      refreshTokenLS.remove();
      userDataStorage.remove();
      isLogin.remove();
      router.push("/auth/login");
    }
  };
  //dashboard menu
  const menuArr = [
    {
      id: "",
      name: "داشبورد",
      icon: HomeWhite_Icon,
      Activeicon: "/assets/common/home-active.svg",
    },
    {
      id: "products",
      name: "محصولات",
      icon: ShopWhite_Icon,
      Activeicon: "../assets/common/shop-active.svg ",
    },
    {
      id: "orders",
      name: "سفارش های من",
      icon: OrdersWhite_Icon,
      Activeicon: "../assets/common/shopping-cart-active.svg ",
    },
    {
      id: "wallet",
      name: " گزارشات مالی",
      icon: WalletWhite_Icon,
      Activeicon: "../assets/common/empty-wallet-active.svg",
    },
    {
      id: "my-messages",
      name: "پیام های من",
      icon: MessageWhite_Icon,
      Activeicon: "../assets/common/sms-active.svg",
      notification: 10,
    },
    { id: "support", name: "پشتیبانی", icon: SupportWhite_Icon },
  ];
  const pageName = menuArr.find((item) => router.asPath.includes(item.id)); // for showing the title of page in mobile
  return (
    <div className="w-full h-screen flex flex-row justify-between items-stretch relative ">
      {/* Drawer */}
      <div
        id="Drawer"
        className="h-screen w-auto overflow-y-scroll scrollbar hidden lg:flex flex-col justify-between items-stretch py-10 bg-fourth lg:bg-[#313131]"
      >
        {/* LogoBox  */}
        <div className="flex justify-center h-full w-full px-12">
          <Image
            src={SellerPanel_Logo}
            alt="SellerPanelLogo"
            className="w-10 ml-3"
          />
          <Image
            src={Petemoon_Logo}
            alt="PetemoonLogo"
            className={clsx("w-40", {
              block: Minify == false,
              hidden: Minify == true,
            })}
          />
        </div>
        {/* Store Credit */}
        <div
          className={clsx(
            "flex-col mx-10 my-1 border-b-[1px] border-[#eeeeee26] py-3",
            {
              flex: Minify == false,
              hidden: Minify == true,
            }
          )}
        >
          <h3 className="text-lg text-white font-bold leading-8">
            <bdi>اعتبار فروشگاه:</bdi>
          </h3>
          <p className='text-xl text-warning font-extrabold leading-9 self-end mt-1 after:content-["تومان"] after:text-sm after:mr-1'>
            <bdi>{(data.income ? data.income : 0).toLocaleString()}</bdi>
          </p>
        </div>
        {/* menu */}
        <ul className="w-full h-full">
          {menuArr.map((item) => (
            <li
              key={v4()}
              className={clsx(
                "border-b-[1px] border-silver transition ease-in-out solid lg:border-[#eeeeee26] lg:my-0 lg:mx-9 py-4 px-8 lg:px-0",
                {
                  "": Minify == false,
                  "lg:border-none ": Minify == true,
                }
              )}
            >
              <Link
                href={`/dashboard/${item.id}`}
                onClick={openHandler}
                className={clsx(
                  "flex justify-between transition ease-in-out items-center w-full ",
                  {
                    "flex-row ": Minify == false,
                    "flex-row lg:flex-col": Minify == true,
                  }
                )}
              >
                <div className="flex flex-row items-stretch relative">
                  <Image
                    src={
                      router.asPath === `/dashboard/${item.id}`
                        ? item.Activeicon
                        : item.icon
                    }
                    alt={item.name}
                    width="20"
                    height="20"
                  />
                  <p
                    className={clsx(
                      "text-base text-black transition ease-in-out hover:text-primary font-bold w-full mr-3",
                      {
                        block: Minify == false,
                        "lg:hidden": Minify == true,
                        "lg:text-primary":
                          router.asPath === `/dashboard/${item.id}`,
                        "lg:text-secondary":
                          router.asPath !== `/dashboard/${item.id}`,
                      }
                    )}
                  >
                    {item.name}
                  </p>
                </div>
                {/* showing notification numbers for each section */}
                {item.notification > 0 && (
                  <p
                    className={clsx(
                      "hidden absolute transition ease-in-out left-20 lg:relative lg:left-0 text-white text-center text-xs bg-primary px-[5px] py-[3px] rounded-[5px]",
                      {
                        "lg:block": Minify == false,
                        "lg:hidden": Minify == true,
                      }
                    )}
                  >
                    {item.notification}
                  </p>
                )}
                <Image
                  src={ArrowLeft_Icon}
                  alt="ArrowLeftIcon"
                  className="lg:hidden"
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="w-full h-full flex flex-col justify-center items-stretch mt-5">
          {/* user information */}
          <div
            className={clsx("flex-col mr-10", {
              flex: Minify == false,
              hidden: Minify == true,
            })}
          >
            <p className="text-base text-white text-right font-black">
              {`${user?.first_name} ${user?.last_name}`}
            </p>
            <p className="text-base text-gray-400 text-right font-medium">
              {user?.phone_number}
            </p>
          </div>
          {/* logout */}
          <div
            onClick={handleLogout}
            className={clsx(
              "flex cursor-pointer justify-between items-center self-center w-3/4 mx-auto mt-2 py-2 rounded-[12px]",
              {
                "bg-[#3A4750] px-4 py-2 mx-10": Minify == false,
                "bg-transparent flex-col p-0 mx-0": Minify == true,
              }
            )}
          >
            <p
              className={clsx(
                "text-base text-white font-medium leading-7 ml-3",
                {
                  block: Minify == false,
                  hidden: Minify == true,
                }
              )}
            >
              خروج از حساب
            </p>
            <Image src={Logout_Btn} alt="LogOutBtn" width="20" height="20" />
          </div>
        </div>
      </div>
      {/* main box */}
      <div
        className={clsx(
          "lg:flex flex-col justify-between items-stretch w-full h-full bg-fourth",
          {
            hidden: openly == false,
            flex: openly == true,
          }
        )}
      >
        <div className="w-full h-[140px] bg-white hidden lg:flex flex-row justify-between items-center px-12 py-5 relative">
          {/* for minify dashboard in desktop */}
          <Image
            src={ArrowLeft_Icon}
            alt="ArrowLeftIcon"
            onClick={() => setMinify(!Minify)}
            className={clsx(
              "bg-[#eee] p-3 rounded-full w-10 h-10 absolute top-[25%] right-[-2%] transition ease-in-out cursor-pointer rotate-180",
              {
                "rotate-[-180]": Minify == true,
              }
            )}
          />

          <div className="flex flex-col">
            <p className="text-2xl text-black font-black leading-10">
              خوش آمدی، {user?.first_name} عزیز
            </p>
            <p className="text-base text-black font-light opacity-[0.9] leading-7">
              {user?.phone_number}
            </p>
          </div>
          <div className="flex flex-row items-center">
            {/* <div className="flex flex-row h-12 px-5 bg-[#eee] rounded-[10px]">
              <Image src={Search_Icon} alt="SearchIcon" className="invert" />
              <input
                type="text"
                placeholder="جستجو"
                className="text-base text-right text-black opacity-[0.8] font-bold p-2 w-full border-none bg-transparent peer-focus:border-none"
              />
            </div> */}

            <Link href={"/dashboard/products/add"}>
              <button className="text-base hover:bg-[#d85241] text-white font-bold leading-7 px-10 py-2.5 bg-primary rounded-[5px]">
                <bdi>افزودن محصول</bdi>
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-full h-screen overflow-y-scroll p-10 pb-[100px] lg:px-20 lg:py-12 lg:pb-[100px] ">
          {/* for showing page title and return to home */}
          {/* {pageName && 
                        <div className='w-full flex lg:hidden flex-row justify-between items-center mb-10'>
                            <p className='text-lg text-black font-black leading-7 align-middle before:inline-block before:w-2 before:h-5 before:bg-primary before:ml-1 before:rounded-[2px]'>{pageName.name}</p>
                            <Link 
                                href='/dashboard/home' 
                                onClick={() => setOpenly(false)} 
                                className='bg-primary opacity-[0.8] p-4 rounded-[15px]'
                            >
                                <Image 
                                    src={ArrowLeftWhite_Icon} 
                                    alt="ArrowIcon" 
                                    className='w-full'
                                />
                            </Link>
                        </div>
                    } */}

          {children}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};
export default DashboardLayout;
