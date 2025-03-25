import { Role } from '@/definitions/type-definitions/auth'
import { Eye,  Trash } from 'lucide-react'
import React from 'react'
import AddClaim from './AddClaim'
import DeleteRole from './DeleteRole'

const RolePage = ({ role }: { role: Role }) => {
    return (
        <div          
            className="group w-full h-24 p-4 flex items-center justify-between rounded-lg transition-all duration-300 
                   bg-gradient-to-r from-stone-50 to-slate-50 hover:from-stone-100 hover:to-slate-100
                   dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800"
        >
            {/* Role Name */}
            <span className="text-md font-semibold text-primary dark:text-primary-foreground">
                [{role.roleName}]
            </span>
            {/* Actions (Eye and Trash Icons) */}
            <span className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <AddClaim role={role}/>
                <Eye
                    size={18}
                    className="text-gray-500 hover:text-stone-600 dark:text-gray-400 dark:hover:text-stone-400 cursor-pointer"
                />
               <DeleteRole id={role.id}/>
            </span>
        </div>
    )
}

export default RolePage