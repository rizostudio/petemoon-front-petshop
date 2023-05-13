import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "@/components/partials/loading";
import { checkUserValidation } from "@/services/auth/checkUserValidation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const validateUser = async () => {
      const response = await checkUserValidation();
      if (response.success) {
        router.push("/dashboard");
      } else {
        router.push("/auth/login");
      }
    };
    validateUser();
  });
  return <Loading />;
}
