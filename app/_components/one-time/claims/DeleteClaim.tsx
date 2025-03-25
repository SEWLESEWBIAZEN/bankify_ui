'use client'
import { deleteAppClaim } from '@/app/_lib/actions/auth'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DeleteState } from '@/definitions/type-definitions/common'
import { Trash } from 'lucide-react'
import { redirect } from 'next/navigation'
import React, { useActionState, useEffect } from 'react'
import { toast } from 'sonner'

const DeleteClaim = ({ id }: { id: number }) => {
    const initialState: DeleteState = { success: null, submitError: null }
    
    const [state, deleteAction, isPending] = useActionState(deleteAppClaim, initialState);

    useEffect(() => {
        if (state.success) {
            toast.success(state.success ?? "Claim deleted!");
            redirect("/ok/account-managt/claims")
        }
        if (state.submitError) {
            toast.error(state.submitError ?? "Error occured");
        }

    }, [state])
    return (
        <Dialog>
            <DialogTrigger>
                <Trash
                    size={18}
                    className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 cursor-pointer"
                />
            </DialogTrigger>
            <DialogContent>
                <form action={deleteAction.bind(null,id)}>
                    <DialogTitle>Delete claim</DialogTitle>
                    <DialogDescription>Please be aware of the result of deleting this claim.</DialogDescription>
                    <div className='flex flex-col mt-6'>
                        <span className=''>
                            Would You like to continue?
                        </span>
                        <div className='flex w-full justify-end'>
                            <Button type='submit' disabled={isPending} className='cursor-pointer'>
                                Yes
                            </Button>
                        </div>
                    </div>

                </form>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteClaim