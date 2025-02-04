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
import { usePathname } from "next/navigation"
import Link from "next/link"

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
                                        <Link href={item.url} passHref>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
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
