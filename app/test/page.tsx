"use client";
import { getOrders } from "@/dal/get-orders";
// import { requireAuth } from "@/lib/auth";
import { useAuthStore } from "@/stores";
import React, { useEffect } from "react";

const page = () => {
    const {company} =  useAuthStore()
  useEffect(() => {
    console.log("useEffect");
    getOrders(company)
  }, [company]);

  return <div>page</div>;
};

export default page;
