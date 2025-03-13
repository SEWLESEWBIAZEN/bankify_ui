'use client'
import UsersPage from "@/app/_components/one-time/users";
import PageNavBar from "@/app/_components/reusable/PageNavBar";
import { Banknote, BookA,  IdCard,  Smartphone,  User,  UserCheck,  Users } from "lucide-react";
import React from "react";

const Page = () => {
  const navItems = [
    { name: "All", icon: Users,to:"#" },
    { name: "Managers", icon: User,to:"#" },
    { name: "Customers", icon: UserCheck ,to:"#"},
    { name: "Card Users", icon: IdCard,to:"#" },
    { name: "Mobile Banking Users", icon: Smartphone,to:"#" },
  ];

  return (
    <div>
      <PageNavBar navItems={navItems} />
      <main className="mt-2 p-4">
        <UsersPage/>
      </main>
    </div>
  );
};

export default Page;
