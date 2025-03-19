import { ModeToggle } from '@/components/theme-togle';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    return(
        <main className="flex items-center justify-center md:h-screen" >
            <div className="fixed top-1 right-1">
            <ModeToggle />
            </div>
            {children}
        </main>
  )
}

export default layout