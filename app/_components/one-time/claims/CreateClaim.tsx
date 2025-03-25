'use client'
import { addNewClaim} from '@/app/_lib/actions/auth'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AddNewClaimState } from '@/definitions/type-definitions/auth'

import { Plus } from 'lucide-react'
import { redirect } from 'next/navigation'
import React, { useActionState, useEffect } from 'react'
import { toast } from 'sonner'

const CreateClaim = () => {
    const initialState: AddNewClaimState = { errors: {}, success: null, submitError: null }
    const [state, createAction, isPending] = useActionState(addNewClaim, initialState);

    useEffect(() => {
        if (state.success) {
            toast.success(state.success ?? "New Claim Added!");
            redirect("/ok/account-managt/claims")
        }
        if (state.submitError) {
            toast.error(state.submitError ?? "Error Occured.");
        }
    }, [state])
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className=' flex flex-row flex-nowrap gap-1 items-end mb-4 py-2 px-4 rounded-md hover:bg-primary-foreground hover:text-stone-600 dark:hover:text-stone-200 dark:hover:bg-primary  cursor-pointer'>
                    <span className='hidden sm:block text-nowrap'>New Claim</span>
                    <Plus className='' />
                </div>
            </DialogTrigger>
            <DialogContent>
                <form action={createAction}>
                    <DialogTitle>
                        New Claim
                    </DialogTitle>
                    <DialogDescription>
                        Give it a name and click on Add button
                    </DialogDescription>
                    <div className='flex flex-col justify-start my-6 w-full'>
                    <Label htmlFor='claimname' id='claimnamelabel' >Name</Label>
                    <Input name='claimname' id='claimname' placeholder='enter claim name....' className='w-full mt-1' />
                    {
                        state?.errors && state.errors.claimName &&
                        <span>
                            {state?.errors?.claimName?.map((error: string) => <li key={error} className='text-[11px] italic text-red-500 my-1'>{error}</li>)}
                        </span>
                    }
                    </div>
                    <DialogFooter className='flex justify-end items-end'>
                        <Button disabled={isPending} type='submit' className='cursor-pointer'>
                            Add
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
export default CreateClaim