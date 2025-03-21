'use client';
import { updateUserRoles } from '@/app/_lib/actions/auth';
import { getAllRoles, getUserRoles } from '@/app/_lib/data/auth';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Role, UpdateUserRoleState } from '@/definitions/type-definitions/auth';
import { Settings } from 'lucide-react';
import { redirect } from 'next/navigation';
import React, { useEffect, useState, useCallback, useMemo, useActionState } from 'react';
import { toast } from 'sonner';

const ManageRoles = ({ id }: { id: number }) => {
    // const [previousRoles, setPreviousRoles] = useState<Role[]>([]);
    const [roles, setRoles] = useState<Role[]>();
    const [userRoles, setUserRoles] = useState<number[]>([]);

    const initialState: UpdateUserRoleState = { errors: {}, success: null, submitError: null };
    const [state, updateAction, isPending] = useActionState(updateUserRoles, initialState);

    const isRoleSelected = useCallback((roleId: number) => userRoles.includes(roleId), [userRoles]);
    const isAllSelected = roles?.length === userRoles.length;

    const handleAddUserRoles = useCallback((id: number) => {
        setUserRoles((prevRoles) =>
            prevRoles.includes(id) ? prevRoles.filter((role) => role !== id) : [...prevRoles, id]
        );
    }, []);

    const selectAllHandler = useCallback(() => {
        setUserRoles(isAllSelected ? [] : roles?.map((role: Role) => role.id) ?? []);
    }, [isAllSelected, roles]);

    const handleSubmit = useCallback(async (formData: FormData) => {
        formData.append("userId", id.toString());
        userRoles.forEach((roleId: number) => {
            formData.append("roleIds", roleId.toString());
        });
        await updateAction(formData);
    }, [id, userRoles, updateAction]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [fetchedRoles, fetchedUserRoles] = await Promise.all([
                    getAllRoles(true),
                    getUserRoles(id),
                ]);
                setRoles(fetchedRoles);
                // setPreviousRoles(fetchedUserRoles.payload);
                            
                if(fetchedUserRoles.success){
                    setUserRoles(fetchedUserRoles?.payload?.map((role: Role) => role.id));
                }
                
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        if (state.success) {
            toast.success(state.success ?? "User Role Updated!");
            redirect("/ok/account-managt/users");
        }
        if (state.submitError) {
            toast.error(state.submitError ?? "Error Occurred!");
        }
    }, [state]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className='mt-1 cursor-pointer text-slate-500 flex flex-row items-center gap-2 text-[15px] justify-start'>
                    <Settings size={15} /> Manage Roles
                </Button>
            </DialogTrigger>
            <DialogContent className='min-w-[525px] overflow-x-auto'>
                <form action={handleSubmit} className=' '>
                    <DialogTitle>Manage Roles</DialogTitle>
                    <DialogDescription>Add new role, update or revoke roles.</DialogDescription>
                    <hr/>
                    <div className='mt-6 flex flex-row gap-1 items-center '>
                        <Checkbox onCheckedChange={selectAllHandler} checked={isAllSelected} />
                        <p className='font-semibold text-gray-600 text-[16px] '>Select All</p>
                    </div>
                    <div className="grid grid-flow-row grid-cols-3 gap-2 justify-start mt-6">
                        {roles?.map((role: Role, index: number) => (
                            <div key={index} className='flex flex-row gap-1 items-start text-[14px]'>
                                <Checkbox
                                    onCheckedChange={() => handleAddUserRoles(role.id)}
                                    checked={isRoleSelected(role.id)}
                                />
                                {role.roleName}
                            </div>
                        ))}
                    </div>
                    <span>
                        {
                            state.errors && state.errors.userId && state.errors.userId.map((error: string,index:number) => {
                                return (
                                    <li key={index} className='text-red-500 text-[12px] italic'>{error}</li>
                                )
                            })
                        }
                    </span>
                    <span>
                        {
                            state.errors && state.errors.roleIds && state.errors.roleIds.map((error: string,index:number) => {
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
    );
};

export default React.memo(ManageRoles);