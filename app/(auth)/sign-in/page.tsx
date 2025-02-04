import SignInForm from '@/app/_components/auth/SignInForm'
import { Metadata } from 'next'
import React from 'react'
export const metadata: Metadata = {
    title: "signin | Bankify"
}
const SignIn = () => {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[1000px] flex-col space-y-2.5 p-4 md:-mt-32">
                <SignInForm />
            </div>
        </main>
    )
}

export default SignIn