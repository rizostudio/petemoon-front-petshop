import { getListMessage } from "@/services/message/getList";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logout_Icon from "../../../assets/common/logoutIconRed.svg";
import MessageItem from "./MessageItem";
import { logout } from "@/services/auth/logout";
import { isLogin, refreshTokenLS, userDataStorage } from "@/localStorage/auth";
export default function Messages() {
  const [messageList, setMessageList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const getData = async () => {
      const response = await getListMessage();
      setMessageList(response.data);
    };
    getData();
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
    <div className="flex flex-col items-stretch">
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
      {messageList.length ? (
        <>
          {messageList.map((item) => (
            <MessageItem key={item.id} item={item} />
          ))}
        </>
      ) : (
        <p className="text-lg  lg:text-3xl text-primary">
          تا کنون پیامی از جانب پتمون دریافت نکرده اید
        </p>
      )}
    </div>
  );
}
