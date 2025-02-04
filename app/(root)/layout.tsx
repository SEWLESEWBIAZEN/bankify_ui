import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { AppSidebar } from '../_components/sideBar/app-sidebar'
export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-1 justify-start items-start'>
            <SidebarProvider>
                <AppSidebar />
                <main>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarProvider>
        </div>
    )
}
