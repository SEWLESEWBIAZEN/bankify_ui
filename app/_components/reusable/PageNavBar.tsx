"use client";

import { useCentralStore } from "@/app/CenteralStore";
import Link from "next/link";
import { Menu } from "lucide-react";
import React from "react";
import { ModeToggle } from "@/components/theme-togle";

type NavLink = {
  name: string;
  icon: React.ElementType;
  to:string
};

const PageNavBar = ({ navItems }: { navItems: NavLink[] }) => {
  const { setIsSidebarOpen } = useCentralStore();

  return (
    <header className="top-0 left-0 lg:left-60 right-0 w-full h-auto py-4 flex items-center bg-slate-100 dark:bg-black shadow-sm shadow-primary z-50">
      <nav className="ms-6 flex flex-wrap items-center gap-6 text-slate-500 px-4 py-1 text-primary-foreground dark:text-slate-100">
        {navItems.map(({ name, icon: Icon,to }) => (
          <Link key={name} href={to} className="flex items-center gap-2 hover:text-primary transition">
            <Icon size={18} className="text-slate-700 dark:text-slate-100" />
            <span className="text-sm font-medium">{name}</span>
          </Link>
        ))}
      </nav>

      {/* Sidebar toggle button (only visible on small screens) */}
      <div className="fixed right-1  flex flex-col justify-between items-center">
      <button 
        onClick={() => setIsSidebarOpen(true)} 
        className="lg:hidden text-gray-500 h-8 w-8 flex items-center justify-center"
      >
        <Menu size={16} />
      </button>      
      <ModeToggle/>
      </div>
    </header>
  );
};

export default PageNavBar;
