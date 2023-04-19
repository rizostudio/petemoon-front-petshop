import DashboardLayout from "@/layout/DashboardLayout";
import React from "react";
//media
import OverView from "@/components/dashboard/overview";
export default function index() {
  return (
    <DashboardLayout>
      <OverView />
    </DashboardLayout>
  );
}
