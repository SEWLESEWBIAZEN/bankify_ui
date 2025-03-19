'use client'

import { registerUser } from '@/app/_lib/actions/auth';
import { CircleUserRound, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import React, { useActionState, useState } from 'react'
import { ThreeDot } from 'react-loading-indicators';

const RegisterForm = () => {
    const [state, formAction, isPending] = useActionState(registerUser, null);
    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''

    })
  return (
    <div>
         <form action={formAction} className="">
            <div className="min-h-screen flex flex-col items-center justify-center  py-6 px-4">
                <div className="max-w-md w-full">
                    <div className="p-8 rounded-2xl  bg-transparent border-primary text-primary dark:text-primary-foreground">
                        <h2 className=" text-center text-lg font-bold font-lobster">Bankify Register</h2>
                        <div className="mt-8 space-y-4">
                            <div>
                                <label className="  mb-2 block text-sm font-semibold ">Email</label>
                                <div className="relative flex items-center">
                                    <input
                                        className="w-full text-sm bg-transparent focus:bg-transparent active:bg-transparent rounded-none px-4 py-3"
                                        id="email"
                                        type="text"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                                    />
                                    <CircleUserRound className="w-4 h-4 absolute right-4 " />
                                </div>
                            </div>
                            <div>
                                <label className=" text-sm font-semibold mb-2 block">Password</label>
                                <div className="relative flex items-center">
                                    <input
                                        className="w-full text-sm rounded-none px-4 py-3 bg-transparent"
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Enter password"
                                        minLength={6}
                                        value={formData.password}
                                        onChange={(e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))}
                                    />
                                    <div className="absolute right-4 cursor-pointer" onClick={() => setShowPassword(prev => !prev)}>
                                        {!showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 accent-primary rounded-none text-primary focus:ring-cyan-600 border-gray-300" />
                                    <label htmlFor="remember-me" className="ml-3 block text-sm">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a className="text-600  hover:text-primary cursor-pointer ml-auto transition-colors transition-duration-300" href={``}>
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="!mt-8 flex flex-row justify-between gap-6">
                                <button disabled={isPending} className=" py-2 px-6 text-sm tracking-wide rounded-none text-white bg-primary hover:bg-stone-500 cursor-pointer focus:outline-none items-center">
                                    {isPending ? "Signing" : "Sign In"} {isPending ? <ThreeDot size='small' color="white" /> : ""}
                                </button>
                                <button className='w-full/3 font-semibold cursor-pointer hover:bg-slate-100 px-6 rounded-none -py-1 dark:hover:bg-slate-900  hover:bg-slate-100'>Cancel</button>
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
                <span className='w-full px-8 flex flex-row gap-2 items-start justify-start text-start font-mono'>Already have account? <Link href="/auth/login" className='text-primary font-semibold'>Login</Link></span>
            </div>
        </form>
    </div>
  )
}

export default RegisterForm