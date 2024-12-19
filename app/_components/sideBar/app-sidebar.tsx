'use client'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { items } from "./nav-links"
import { useState } from "react"
import { usePathname } from "next/navigation"

// Menu items.
export function AppSidebar() {
    const pathname = usePathname()

    const isActive = (url: string) => {
        if (pathname === url || pathname.startsWith(url)) {
            return true;
        }
        return false;

    }
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-primary dark:text-white font-bold text-[2rem] my-[0.5rem]">Bankify</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}  >
                                    <SidebarMenuButton asChild className={`${isActive(item.url) ? "bg-primary dark:bg-primary dark:text-primary-foreground text-primary-foreground" : ""}`}>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
