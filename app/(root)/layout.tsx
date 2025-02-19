
import React from 'react'
export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='w-auto flex flex-1'>
            {children}
        </main>
    )
}
