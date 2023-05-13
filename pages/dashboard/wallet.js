import React, { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import { v4 } from "uuid";
//component
import DashboardLayout from "@/layout/DashboardLayout";
//media
import BagTick_Icon from "../../assets/common/bag-tick2.svg";
import CartTotal_Icon from "../../assets/common/card-receive2.svg";
import search_Icon from "../../assets/common/searchIcon3.svg";
import logout_Icon from "../../assets/common/logoutIconRed.svg";
import FinantialReport from "@/components/dashboard/finantialReport";
const wallet = () => {
  return (
    <DashboardLayout>
      <FinantialReport />
    </DashboardLayout>
  );
};

export default wallet;
