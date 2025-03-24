'use client'
import { updateRoleClaims } from '@/app/_lib/actions/auth'
import { getAllClaims, getRoleClaims } from '@/app/_lib/data/auth'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Claim, Role, UpdateRoleClaimState } from '@/definitions/type-definitions/auth'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Plus } from 'lucide-react'
import { redirect } from 'next/navigation'
import React, { useActionState, useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'

const AddClaim = ({ role }: { role: Role }) => {
    const [allClaims, setAllClaims] = useState<Claim[]>([]);
    const [roleClaims, setRoleClaims] = useState<number[]>([]);

    const initialState: UpdateRoleClaimState = { errors: {}, success: null, submitError: null };
    const [state, updateAction, isPending] = useActionState(updateRoleClaims, initialState);

    const isAllSelected = allClaims?.length === roleClaims.length;
    const isClaimSelected = useCallback((claimId: number) => roleClaims.includes(claimId), [roleClaims]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [fetchedClaims, fetchedRoleClaims] = await Promise.all([
                    getAllClaims(),
                    getRoleClaims(role.id),
                ]);
                setAllClaims(fetchedClaims);

                if (fetchedRoleClaims) {
                    setRoleClaims(fetchedRoleClaims?.map((claim: Claim) => claim.id));
                }

            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };
        fetchData();
    }, [role]);


    const selectAllHandler = useCallback(() => {
        setRoleClaims(isAllSelected ? [] : allClaims?.map((claim: Claim) => claim.id) ?? []);
    }, [isAllSelected, allClaims]);

    const handleAddRoleClaims = useCallback((id: number) => {
        setRoleClaims((prevClaims) =>
            prevClaims.includes(id) ? prevClaims.filter((claim) => claim !== id) : [...prevClaims, id]
        );
    }, []);
 
    const handleSubmit = useCallback(async (formData: FormData) => {
        formData.append("roleId", role?.id.toString());
        roleClaims.forEach((claimId: number) => {
            formData.append("claimIds", claimId.toString());
        });
        await updateAction(formData);
    }, [role, roleClaims, updateAction]);

    useEffect(() => {
        if (state.success) {
            toast.success(state.success ?? " Role claim Updated!");
            redirect("/ok/account-managt/roles");
        }
        if (state.submitError) {
            toast.error(state.submitError ?? "Error Occurred!");
        }
    }, [state]);

    return (
        <Dialog>
            <DialogTrigger>
                <Plus
                    size={18}
                    className="text-gray-500 hover:text-stone-600 dark:text-gray-400 dark:hover:text-stone-400 cursor-pointer"
                />
            </DialogTrigger>
            <DialogContent>
                <form action={handleSubmit}>
                    <div>
                        <DialogTitle className=''>
                            Add Claims  to [{role.roleName}]
                        </DialogTitle>
                        <DialogDescription>
                            You can add all claims once or one by one when needed.
                        </DialogDescription>
                    </div>
                    <div className='mt-6 flex flex-row gap-1 items-center '>
                        <Checkbox onCheckedChange={selectAllHandler} checked={isAllSelected} />
                        <p className='font-semibold text-gray-600 text-[16px] '>Select All</p>
                    </div>

                    <div className="grid grid-flow-row grid-cols-3 gap-2 justify-start mt-6">
                        {allClaims?.map((claim: Claim, index: number) => (
                            <div key={index} className='flex flex-row gap-1 items-start text-[14px]'>
                                <Checkbox
                                    onCheckedChange={() => handleAddRoleClaims(claim.id)}
                                    checked={isClaimSelected(claim.id)}
                                />
                                {claim.claimString}
                            </div>
                        ))}
                    </div>
                    <span>
                        {
                            state.errors && state.errors.appRoleId && state.errors.appRoleId.map((error: string,index:number) => {
                                return (
                                    <li key={index} className='text-red-500 text-[12px] italic'>{error}</li>
                                )
                            })
                        }
                    </span>
                    <span>
                        {
                            state.errors && state.errors.appClaimsId && state.errors.appClaimsId.map((error: string,index:number) => {
                                return (
                                    <li key={index} className='text-red-500 text-[12px] italic'>{error}</li>
                                )
                            })
                        }
                    </span>
                    <div className='flex w-full justify-end '>
                        <Button disabled={isPending} type='submit' className='cursor-pointer mt-10 '>
                            Update
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default React.memo(AddClaim)