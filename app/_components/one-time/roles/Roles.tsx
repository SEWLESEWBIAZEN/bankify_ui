
import React from 'react'
import { Role } from '@/definitions/type-definitions/auth';
import RolePage from './Role';
import { Plus } from 'lucide-react';
import CreateRole from './CreateRole';

const Roles = ({ allRoles }: { allRoles: Role[] }) => {
    return (
        <div>
             <div className='flex justify-end'>
               <CreateRole/>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {allRoles?.map((role: Role) => (
                <div  key={role.id}>
                <RolePage role={role}/>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Roles