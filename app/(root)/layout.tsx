"use client"
import React from "react"
import Sidebar from "../_components/one-time/common/Sidebar";
import { useCentralStore } from "../CenteralStore";

const AppLayout = ({ children }: { children: React.ReactNode }) => {  
    const {isSidebarOpen,setIsSidebarOpen}=useCentralStore();  
    return (
        <>           
            <div
                className={`${isSidebarOpen ? 'overflow-hidden' : ''} h-screen`}
                
            >
                {/* backdrop */}
                {isSidebarOpen && (
                    <div

                        onClick={() => setIsSidebarOpen(false)}
                        className='bg-black/60 absolute top-0 left-0 lg:hidden w-full h-screen z-20'
                    />
                )}

                {/* mobile sidebar */}
                {isSidebarOpen && (
                    <div
                        className='absolute lg:hidden z-30 top-0 left-0'
                    >
                        <Sidebar />
                    </div>
                )}

                <div className='grid lg:grid-cols-[240px_1fr] w-screen overflow-x-hidden'>
                    <div className='hidden lg:block '>
                        <Sidebar />
                    </div>

                    <div className='w-full overflow-x-auto'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppLayout;