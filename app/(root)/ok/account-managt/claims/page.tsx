import Claims from "@/app/_components/one-time/claims/Claims";
import { getAllClaims } from "@/app/_lib/data/auth";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Claims | Bankify",
  description: "Bankify - Minimal banking system by finetech",
};
export default async function Page() {
  const allClaims = await getAllClaims();
  return (
   <Claims allClaims={allClaims??[]}/>
  );
};