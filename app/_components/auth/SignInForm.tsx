'use client';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CircleUserRound, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
export default function SignInForm() {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <form action={""} className="w-full">
                <div className="min-h-screen flex flex-col items-center justify-center w-full py-6 px-4 ">
                    <div className="max-w-md w-full">
                        <div className="p-8 rounded-2xl bg-white shadow w-full">
                            <h2 className="text-gray-800 text-center text-lg font-bold font-lobster">Bankify</h2>
                            <div className="mt-8 space-y-4 w-full">
                                <div className="w-full">
                                    <Label className="text-gray-800  mb-2 block text-sm font-semibold">User name</Label>
                                    <div className="relative flex items-center w-full">
                                        <Input
                                            className="w-full text-sm border border-gray-300 px-4 py-3 rounded-xl outline-primary"
                                            id="username"
                                            type="text"
                                            name="username"
                                            placeholder="Enter your username"
                                        />
                                        <CircleUserRound className="w-4 h-4 absolute right-4 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <Label className="text-gray-800 text-sm font-semibold mb-2 block">Password</Label>
                                    <div className="relative flex items-center">
                                        <Input
                                            className="w-full  text-sm border rounded-xl border-gray-300 px-4 py-3 outline-primary"
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Enter password"
                                            minLength={6}
                                        />
                                        <div className="absolute right-4 cursor-pointer" onClick={() => setShowPassword(prev => !prev)}>
                                            {!showPassword ? <Eye className="w-4 h-4   text-primary" /> : <EyeOff className="w-4 h-4   text-primary" />}

                                        </div>

                                    </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-between gap-4">
                                    <div className="flex items-center">
                                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 accent-primary rounded-2xl text-primary focus:ring-cyan-600 border-gray-300" />
                                        <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div
                                    className="flex h-8 items-end space-x-1"
                                    aria-live="polite"
                                    aria-atomic="true"
                                >
                                    {/* {errorMessage && (
                                        <>
                                            <CircleAlert className="h-5 w-5 text-red-500" />
                                            <p className="text-sm text-red-500">{errorMessage}</p>
                                        </>
                                    )} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}