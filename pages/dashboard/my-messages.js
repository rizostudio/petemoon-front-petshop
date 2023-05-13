import React from "react";
//component
import DashboardLayout from "@/layout/DashboardLayout";
import Messages from "@/components/dashboard/messages";
const MyMessage = () => {
  return (
    <DashboardLayout>
      <Messages />
    </DashboardLayout>
  );
};

export default MyMessage;
