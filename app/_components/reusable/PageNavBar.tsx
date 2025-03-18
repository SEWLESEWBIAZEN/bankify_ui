"use client";

import { useCentralStore } from "@/app/CenteralStore";
import { ModeToggle } from "@/components/theme-togle";
import { Menu } from "lucide-react";
import React from "react";

const PageNavbarLeftContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>((props, ref) =>
  <div
    ref={ref}
    className='flex flex-col sm:flex-row items-center justify-start md:justify-between gap-2 h-auto md:h-10'
    {...props} />
);

PageNavbarLeftContent.displayName = 'PageNavbarLeftContent'


const PageNavbarRightContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>((props, ref) =>
  <div
    ref={ref}
    className='text-gray-500 hidden md:flex gap-2'
    {...props} />
);

PageNavbarRightContent.displayName = 'PageNavbarRightContent'


const PageNavbarIconButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>>
  (({ className, ...props }, ref) =>
    <button
      ref={ref}
      className='all-center h-8 w-8 duration-200 hover:bg-gray-100 rounded-lg'
      {...props} />
  )

PageNavbarIconButton.displayName = 'PageNavbarIconButton'

const PageNavbarPrimaryButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>>
  (({ className, ...props }, ref) =>
    <button
      ref={ref}
      className='h-8 gap-1 bg-primary hidden py-1 px-2 duration-200 text-white rounded-lg text-xs md:flex items-center justify-center'
      {...props}
    />
  )
PageNavbarPrimaryButton.displayName = 'PageNavbarPrimaryButton'

function PageNavBar({ children }: { children: React.ReactNode }) {
  const { setIsSidebarOpen } = useCentralStore()
  return (    
      <div className='flex p-4 md:p-6 text-gray-500 justify-between items-center bg-slate-100 dark:bg-black z-30'>
        {children}
        <div className="flex flex-col all-center justify-between gap-6">
          <button onClick={() => setIsSidebarOpen(true)} className='text-gray-500 h-8 w-8 lg:hidden cursor-pointer'>
            <Menu size={16} />
          </button>
          <ModeToggle />
        </div>      
    </div>
  )
}

export default PageNavBar

export { PageNavbarLeftContent, PageNavbarRightContent, PageNavbarIconButton, PageNavbarPrimaryButton }
