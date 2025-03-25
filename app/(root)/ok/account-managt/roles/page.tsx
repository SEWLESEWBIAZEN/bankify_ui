import Roles from "@/app/_components/one-time/roles/Roles";
import { getAllRoles } from "@/app/_lib/data/auth";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Roles | Bankify",
  description: "Bankify - Minimal banking system by finetech",
};

export default async function Page() {
  const allRoles = await getAllRoles(true);
  return (
   <Roles allRoles={allRoles??[]}/>

  );
};