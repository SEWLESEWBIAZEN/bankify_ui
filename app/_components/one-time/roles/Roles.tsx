
import React from 'react'
import { Eye, Plus, Trash } from "lucide-react";
import { Role } from '@/definitions/type-definitions/auth';
import RolePage from './Role';

const Roles = ({ allRoles }: { allRoles: Role[] }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {allRoles?.map((role: any) => (
                <div  key={role.id}>
                <RolePage role={role}/>
                </div>
            ))}
        </div>
    )
}

export default Roles