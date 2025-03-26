'use client'
import { changePassword, logOut } from '@/app/_lib/actions/auth'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChangePasswordState } from '@/definitions/type-definitions/auth'
import { KeyRound } from 'lucide-react'
import React, { useActionState, useEffect, useState } from 'react'
import { toast } from 'sonner'

const ChangePassword = () => {
    const initialState: ChangePasswordState = { success: null, submitError: null }
    const [state, changePasswordAction, isPending] = useActionState(changePassword, initialState);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        const signOut=async()=>{
            await logOut()
        }
        
        if (state.success) {
            toast.success(state.success ?? "User Deleted!")
            setIsDialogOpen(false) 
            signOut();           
          
        }
        if (state.submitError) {
            toast.error(state.submitError ?? "Error Occured while deleting user!")
        }
    }, [state])

    return (
        <Dialog open={isDialogOpen} onOpenChange={()=>setIsDialogOpen(prev=>!prev)}>
            <DialogTrigger asChild>
                <button
                    type="button"
                    className='w-full flex flex-row gap-1 items-center p-1 rounded text-primary dark:text-slate-50  font-mono hover:font-semibold text-sm cursor-pointer'
                    //onClick={()=>setIsDialogOpen(true)}
                >
                    <KeyRound size={18} />
                    Change Password
                </button>
            </DialogTrigger>
            <DialogContent>
                <form action={changePasswordAction} className=''>
                    <DialogTitle>
                       Change Password
                    </DialogTitle>
                    <DialogDescription>
                        You are changing your current password. Don't forget to memorize the new one.
                    </DialogDescription>
                    <div className='flex flex-col gap-4 mt-8'>
                    <div className='flex flex-col justify-start gap-1'>
                        <Label>Current Password</Label>
                        <Input name="oldPassword" id="oldPassword" type='password'/>
                    </div>
                    <div className='flex flex-col justify-start gap-1'>
                        <Label>New Password</Label>
                        <Input name="newPassword" id="newPassword" type='password'/>
                    </div>
                    <div className='flex flex-col justify-start gap-1'>
                        <Label>Confirm Password</Label>
                        <Input name="confirmPassword" id="confirmPassword" type='password'/>
                    </div>
                    </div>
                    <div className='flex justify-end'>
                    <Button type='submit' disabled={isPending} className='mt-10 cursor-pointer'>
                        Change
                    </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>

    )
}

export default ChangePassword