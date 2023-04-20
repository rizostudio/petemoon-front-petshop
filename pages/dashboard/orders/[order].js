import React from "react";
import Image from "next/image";
import Link from "next/link";
import { v4 } from "uuid";

//component
import DashboardLayout from "@/layout/DashboardLayout";

//media
import ArrowLeftWhite_Icon from "../../../assets/common/leftArrowWhite.svg";
import product_Image from "../../../assets/common/ProductPic1.svg";
import setting_Icon from "../../../assets/common/settingIconRed.svg";
import CloseButton_Icon from "../../../assets/common/close-button.svg";
import SingleOrder from "@/components/dashboard/singleOrder";

const order = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <DashboardLayout>
        <SingleOrder />
      </DashboardLayout>
    </div>
  );
};

export default order;
