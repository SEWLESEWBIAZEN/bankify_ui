'use client'
import PageNavBar from "@/app/_components/reusable/PageNavBar";
import TopNavbar from "@/app/_components/reusable/TopNavbar";
import {LockKeyholeOpen, ShieldCheck, Users } from "lucide-react";
import React from "react";

export default function AccountLayout ({
  children,
}: Readonly<{
  children: React.ReactNode
}>)  {
  const navItems = [
    { name: "Users", icon: Users,to:"/ok/account-managt/users" },
    { name: "Roles", icon: LockKeyholeOpen,to:"/ok/account-managt/roles" },
    { name: "Claims", icon: ShieldCheck  ,to:"/ok/account-managt/claims"},
    
  ];

  return (
    <div>
      <PageNavBar>
        <div className="top-0 left-0 lg:left-60 right-0 w-full h-auto flex items-center z-20">
          <TopNavbar navbarItems={navItems}/>
        </div>
      </PageNavBar>
      <main className="mt-2 mx-2 relative z-10"> {/* Add z-10 to ensure main content is behind the navbar */}
       {children}
      </main>
    </div>
  );
};