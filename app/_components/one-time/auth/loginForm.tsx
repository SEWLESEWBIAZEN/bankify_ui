'use client';
import { useActionState,  useState } from 'react';
// import { authenticate } from '@/app/_lib/actions/auth';
import { CircleAlert, CircleUserRound, Eye, EyeOff } from 'lucide-react';
import { ThreeDot } from 'react-loading-indicators';
import { useCentralStore } from '@/app/CenteralStore';
import { authenticate } from '@/app/_lib/actions/auth';

export default function LoginForm() {
  const origin = process.env.AUTH_URL || 'http://localhost:3000';
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
  const { accessToken, setAccessToken } = useCentralStore();
  const [showPassword, setShowPassword] = useState(false)  

  const accessTokenValue = accessToken || ''; // Fallback value
  return (
    <>
      <form action={formAction} className="">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <div className="p-8 rounded-2xl bg-transparent border-primary text-primary dark:text-primary-foreground shadow-sm dark:shadow-lg shadow-primary">             
              <h2 className=" text-center text-lg font-bold font-lobster">Bankify</h2>
              <div className="mt-8 space-y-4">
                <input type='hidden' name='accessToken' value={accessTokenValue} />             
                <div>
                  <label className="  mb-2 block text-sm font-semibold ">User name</label>
                  <div className="relative flex items-center">
                    <input
                      className="w-full  text-sm border border-gray-300 px-4 py-3 rounded-xl outline-primary"
                      id="username"
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                    />
                    <CircleUserRound className="w-4 h-4 absolute right-4 " />
                  </div>
                </div>
                <div>
                  <label className=" text-sm font-semibold mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input
                      className="w-full text-sm border rounded-xl border-gray-300 px-4 py-3 outline-primary"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter password"
                      minLength={6}
                    />
                    <div className="absolute right-4 cursor-pointer" onClick={() => setShowPassword(prev => !prev)}>
                      {!showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}

                    </div>

                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 accent-primary rounded-2xl text-primary focus:ring-cyan-600 border-gray-300" />
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
                <div className="!mt-8">

                  <button disabled={isPending} className="w-full py-3 px-4 text-sm tracking-wide rounded-xl text-white bg-primary hover:bg-stone-500 cursor-pointer focus:outline-none items-center">
                    {isPending ? "Signing" : "Sign In"} {isPending ? <ThreeDot size='small' color="white" /> : ""}
                  </button>
                </div>
                <div
                  className="flex h-8 items-end space-x-1"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {errorMessage && (
                    <>
                      <CircleAlert className="h-5 w-5 text-red-500" />
                      <p className="text-sm text-red-500">{errorMessage}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}