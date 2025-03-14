
import LoginForm from "@/app/_components/one-time/auth/loginForm";
import { ModeToggle } from "@/components/theme-togle";
import { Metadata } from "next";

export const metadata:Metadata={
    title:"login | Bankify"
}
export default function LoginPage(){
    return(
        <main className="flex items-center justify-center md:h-screen" >
            <div className="fixed top-1 right-1">
            <ModeToggle />
            </div>
            <div className="relative mx-auto flex w-full max-w-[600px] flex-col space-y-2.5 p-4 md:-mt-32">
                <LoginForm/>
            </div>
        </main>
    )
}