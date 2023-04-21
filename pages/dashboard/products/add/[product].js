import React from "react";

//component
import DashboardLayout from "@/layout/DashboardLayout";
import SingleProduct from "@/components/dashboard/SingleProduct";

const Product = () => {
  return (
    <DashboardLayout>
      <SingleProduct />
    </DashboardLayout>
  );
};

export default Product;
