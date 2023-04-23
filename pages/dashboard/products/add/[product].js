import React from "react";
import { useRouter } from "next/router";
//component
import DashboardLayout from "@/layout/DashboardLayout";
import SingleProduct from "@/components/dashboard/SingleProduct";

const Product = () => {
  const router = useRouter();
  console.log(router.query.product);
  return (
    <DashboardLayout>
      <SingleProduct query={router.query.product} />
    </DashboardLayout>
  );
};

export default Product;
