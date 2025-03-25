'use client'
import React, { useEffect, useState } from 'react'
import { Role } from '@/definitions/type-definitions/auth';
import RolePage from './Role';
import CreateRole from './CreateRole';
import { Input } from '@/components/ui/input';

const Roles = ({ allRoles }: { allRoles: Role[] }) => {
    const [searchText, setSearchText]=useState('')
    const [filteredRoles, setFilteredRoles]=useState<Role[]>(allRoles??[])

    //filtering claims based on search text
    useEffect(()=>{
        if(allRoles?.length>0){
            const claims=allRoles?.filter((role:Role)=>role.roleName.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRoles(claims)
        }
    },[searchText])
    return (
        <div>
             <div className='flex justify-between'>
             <Input placeholder='Search Roles...' value={searchText} onChange={(e)=>setSearchText(e.target.value)} className='md:w-[25%]'/>
               <CreateRole/>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredRoles?.length>0 &&
            filteredRoles?.map((role: Role) => (
                <div  key={role.id}>
                <RolePage role={role}/>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Roles