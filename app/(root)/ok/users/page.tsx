
import UsersPage from "@/app/_components/one-time/users";
import PageNavBar from "@/app/_components/reusable/PageNavBar";
import TopNavbar from "@/app/_components/reusable/TopNavbar";
import { getAllUsers } from "@/app/_lib/data/users";
import { Globe, IdCard, Smartphone, User, UserCheck, Users } from "lucide-react";
import React from "react";

export default async function Page() {
  const users = await getAllUsers();
  
  const navItems = [
    { name: "All", icon: Users, to: "/ok/users?recordType=all" },
    { name: "Employees", icon: User, to: "/ok/users?recordType=employees" },
    { name: "IFB Users", icon: UserCheck, to:"/ok/users?recordType=ifbusers" },
    { name: "Card Users", icon: IdCard, to: "/ok/users?recordType=cardusers" },
    { name: "MB Users", icon: Smartphone, to: "/ok/users?recordType=mbusers" },
    { name: "IB Users", icon: Globe, to: "/ok/users?recordType=ibusers" },
  ];
  return (
    <div>
      <PageNavBar>
        <div className="top-0 left-0 lg:left-60 right-0 w-full h-auto flex items-center z-10">
         <TopNavbar navbarItems={navItems}/>
        </div>
      </PageNavBar>
      <main className="mt-2 mx-2 relative z-10"> {/* Add z-10 to ensure main content is behind the navbar */}
        <UsersPage users={users} />
      </main>
    </div>
  );
};


