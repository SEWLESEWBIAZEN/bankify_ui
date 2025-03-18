"use client";
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import Navlinks from './Navlinks';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { logOut } from '@/app/_lib/actions/auth';
import { useCentralStore } from '@/app/CenteralStore';
import { KeyRound, LogOut, User2Icon } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const { fullName } = useCentralStore();

    return (
        <div className='fixed w-60 shrink-0 md:block h-screen top-0 overflow-hidden z-50'>
            <div className='w-full h-full bg-primary border-r'>
                {/* logo */}
                <a href="/ok/dashboard" className="flex gap-2 p-2">
                    <p className="text-md font-semibold text-primary-foreground mt-3 font-lobster">Bankify</p>
                </a>
                <div className='flex flex-col h-full justify-between'>
                    {/* top */}
                    <Navlinks />
                    <div className='h-auto dark:bg-black bg-white z-70 text-primary-foreground m-2 rounded-xl flex flex-col items-start justify-center text-center'>
                        <div className='flex pb-28 justify-between px-4 md:px-6 items-start cursor-pointer hover:pr-5 duration-200 pt-3 font-mono '>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild aria-label="User menu" className='border-y py-2 dark:border-slate-50'>
                                    <div className='flex items-center gap-2 text-primary dark:text-stone-200'>
                                        <User2Icon size={16} />
                                        <div>
                                            <p className='text-sm'>{fullName}</p>
                                        </div>
                                    </div>

                                </DropdownMenuTrigger>
                                <DropdownMenuContent className='bg-slate-100 dark:bg-black dark:text-slate-50 outline-slate-100 text-primary-foreground'>
                                    <div className='text-center items-center justify-center flex flex-col items-center justify-center gap-2'>
                                        <button
                                            type="button"
                                            className='w-full flex flex-row gap-1 items-center p-1 rounded text-primary dark:text-slate-50  font-mono hover:font-semibold text-sm cursor-pointer'
                                        >
                                            <KeyRound size={18} />
                                            Change Password
                                        </button>
                                        <hr className='w-full text-center items-center justify-center mt-4' />
                                        <button
                                            type="button"
                                            onClick={logOut}
                                            className='w-full flex flex-row gap-1 items-center bg-primary p-1 rounded font-mono hover:font-semibold text-sm cursor-pointer'
                                        >
                                            <LogOut size={18} className='rotate-180' />
                                            Sign Out
                                        </button>

                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>
    );
}

const NavLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ href, ...props }, ref) => {
        const pathname = usePathname();
        return (
            <Link
                ref={ref}
                href={href!}
                className={`flex ${pathname === href! ? 'text-primary-foreground' : ''} hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2`}
                {...props}
            />
        );
    }
);
NavLink.displayName = 'NavLink';