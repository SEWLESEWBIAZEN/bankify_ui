'use client'
import PageNavBar from "@/app/_components/reusable/PageNavBar";
import { Banknote, BookA, BriefcaseBusiness, GitBranchPlus, Users } from "lucide-react";
import React from "react";

const Page = () => {
  const navItems = [
    { name: "Branches", icon: GitBranchPlus,to:"#" },
    { name: "Users", icon: Users,to:"#" },
    { name: "Accounts", icon: BookA ,to:"#"},
    { name: "Transactions", icon: Banknote,to:"#" },
    { name: "Loans", icon: BriefcaseBusiness,to:"#" },
  ];

  return (
    <div>
      <PageNavBar navItems={navItems} />
      <main className="mt-2 p-4">Dashboard content</main>
    </div>
  );
};

export default Page;
