'use client'
import { deleteUser } from '@/app/_lib/actions/user'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DeleteState } from '@/definitions/type-definitions/common'
import { redirect } from 'next/navigation'
import React, { useActionState, useEffect, useState } from 'react'
import { toast } from 'sonner'

const DeleteUser = ({id}:{id:number}) => {
    const initialState:DeleteState={success:null, submitError:null}   
    const [state, deleteAction, isPending]=useActionState(deleteUser,initialState);
    const [isConfirmed, setIsConfirmed]=useState(false);

useEffect(()=>{
    if(state.success){
        toast.success(state.success??"User Deleted!")
        redirect("/ok/account-managt/users")
    }
    if(state.submitError){
        toast.error(state.submitError??"Error Occured while deleting user!")
    }
},[state])

  return (
    <Dialog>
        <DialogTrigger asChild>  
            <button className="hover:bg-accent flex flex-1 w-full cursor-pointer focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
               Delete
            </button>
        </DialogTrigger>
        <DialogContent>
            <form action={isConfirmed?deleteAction.bind(null,id):""} className=''>
                <DialogTitle>
                    Ask for confirmition to delete.
                </DialogTitle>
                <DialogDescription>
                    Are you aware of the result of deletion a record. You can not restore it again. Please think again before click on Confirm.
                </DialogDescription>
                <Button type='submit' disabled={isPending} onClick={()=>setIsConfirmed(true)} className='mt-10 cursor-pointer'>
                    Confirm
                </Button>
            </form>
        </DialogContent>
    </Dialog>
   
  )
}

export default DeleteUser