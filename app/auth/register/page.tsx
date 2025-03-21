import RegisterForm from "@/app/_components/one-time/auth/registerForm";
import { Metadata } from "next";

export const metadata:Metadata={
    title:"register | Bankify"
}
export default function RegisterPage(){
    return(
    <div className="relative mx-auto flex w-full max-w-[600px] flex-col space-y-2.5 p-4 md:-mt-32">
        <RegisterForm/>
    </div>
    )
}