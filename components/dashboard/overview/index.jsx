import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
//media
import search_Icon from "@/assets/common/searchIcon3.svg";
import logout_Icon from "@/assets/common/logoutIconRed.svg";
import user_Image from "@/assets/common/user-square.svg";
import Summary from "@/components/dashboard/overview/Summary";
import SaleHistory from "@/components/dashboard/overview/SaleHistory";
import { getOverview } from "@/services/overview/getOverview";
import { logout } from "@/services/auth/logout";
import { isLogin, refreshTokenLS, userDataStorage } from "@/localStorage/auth";
export default function OverView() {
  const [data, setData] = useState({});
  const router = useRouter();
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
  const handleLogout = async () => {
    const response = await logout();
    if (response.success) {
      refreshTokenLS.remove();
      userDataStorage.remove();
      isLogin.remove();
      router.push("/auth/login");
    }
  };
  return (
    <div className="h-screen lg:h-full flex flex-col items-stretch">
      {/* Heading for mobile  */}
      <div className="lg:hidden flex items-center">
        <div className="w-full flex">
          <p className="text-lg ml-2">اعتبار فروشگاه : </p>
          <p className="text-primary text-lg"> 2.250.000 تومان</p>
        </div>
        <Link href={"/dashboard/support"}>
          <div className="p-3 bg-[#F2CDC8] rounded-[15px] mr-1">
            <Image
              width={30}
              height={30}
              src={"/assets/common/headphones.svg"}
              alt="LogOut Icon"
            />
          </div>
        </Link>
        <div
          onClick={handleLogout}
          className="p-3 bg-[#F2CDC8] rounded-[15px] mr-1"
        >
          <Image src={logout_Icon} alt="LogOut Icon" />
        </div>
      </div>
      {/* summary Information */}
      <Summary data={data} />
      <SaleHistory data={data} />
    </div>
  );
}
