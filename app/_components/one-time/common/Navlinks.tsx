"use client";
import React from "react";
import { ChartSpline, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navlinks = () => {
    const pathname = usePathname();
    const links = [
        {
            label: "Dashboard",
            to: "/dashboard",
            icon: ChartSpline,
        },
        {
            label: "Users",
            to: "/users",
            icon:Users,
        },
    ];

    return (
        <nav className="pt-6 text-sm font-semibold text-slate-100 md:px-2">
            {links.map(({ label, to, icon: Icon }) => (
                <Link
                    key={label}
                    href={to}
                    className={`flex items-center gap-2 px-4 py-2 ${
                        pathname === to ? "text-primary-foreground" : "hover:text-primary-foreground"
                    }`}
                >
                    <Icon size={18} />
                    {label}
                </Link>
            ))}
        </nav>
    );
};

export default Navlinks;
