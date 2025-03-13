"use client"
import Image from 'next/image'
import Link, { LinkProps } from 'next/link'
import React from 'react'
import Navlinks from './Navlinks'

export default function Sidebar() {
    const origin = process.env.AUTH_URL || 'http://localhost:3000';
    return (
        <div className='fixed w-60 shrink-0 md:block h-screen top-0 overflow-hidden z-60'>
            <div className='w-full h-full bg-primary border-r'>
                {/* logo */}
                <a href="/dashboard" className="flex gap-2 p-2">
                    {/* <Image src="/next.svg" alt="logo" width={100} height={70} className="w-12" /> */}
                    <p className="text-md font-semibold text-primary-foreground mt-3 font-lobster">Bankify</p>
                </a>           
                <div className='flex flex-col h-full justify-between'>
                    {/* top */}
                    <Navlinks /> 
                                
                </div>
            </div>
        </div>
    )
}

const NavLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ href, ...props }, ref) => (
        <Link
            ref={ref}
            href={href!}
            className={`flex ${window.location.pathname === href! ? 'text-primary-foreground' : ''} hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2`}
            {...props}
        />
    )
);
NavLink.displayName = 'NavLink';