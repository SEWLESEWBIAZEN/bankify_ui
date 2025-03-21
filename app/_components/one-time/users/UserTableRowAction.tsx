'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Ellipsis } from 'lucide-react'
import React from 'react'
import DeleteUser from './DeleteUser'

const UserTableRowAction = ({id}:{id:number}) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <div className="cursor-pointer hover:text-slate-200"><Ellipsis size={16}/></div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem className='cursor-pointer'>
                View
            </DropdownMenuItem>
            <DropdownMenuItem className='cursor-pointer'>
                Update
            </DropdownMenuItem>
          <DeleteUser id={id}/>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserTableRowAction