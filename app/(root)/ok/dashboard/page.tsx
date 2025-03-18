
import PageNavBar from "@/app/_components/reusable/PageNavBar";
import TopNavbar from "@/app/_components/reusable/TopNavbar";
import { Banknote, BookA, BriefcaseBusiness, GitBranchPlus, Users } from "lucide-react";
import React from "react";

export default async function Page ()  {
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
          <TopNavbar navbarItems={navItems}/>
        </div>
      </PageNavBar>
      <main className="mt-2 mx-2 relative z-10"> {/* Add z-10 to ensure main content is behind the navbar */}
        Dashboard Page Content
      </main>
    </div>
  );
};


