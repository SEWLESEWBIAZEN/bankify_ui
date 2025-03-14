'use client'
import PageNavBar from "@/app/_components/reusable/PageNavBar";
import { Banknote, BookA, BriefcaseBusiness, GitBranchPlus, Users } from "lucide-react";
import Link from "next/link";
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
      <PageNavBar>
        <div className="top-0 left-0 lg:left-60 right-0 w-full h-auto flex items-center z-10">
          <div className="ms-6 flex flex-wrap items-center gap-6 text-slate-500 px-4 py-2 text-primary-foreground dark:text-slate-100">
            {navItems.map(({ name, icon: Icon, to }) => (
              <Link key={name} href={to} className="flex items-center gap-2 hover:text-primary transition">
                <Icon size={18} className="text-slate-700 dark:text-slate-100" />
                <span className="text-sm font-medium">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </PageNavBar>
      <main className="mt-2 mx-2 relative z-10"> {/* Add z-10 to ensure main content is behind the navbar */}
        Dashboard Page Content
      </main>
    </div>
  );
};

export default Page;
