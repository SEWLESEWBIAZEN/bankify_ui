'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Ellipsis } from 'lucide-react'
import React from 'react'
import DeleteUser from './DeleteUser'
import Link from 'next/link'
import ManageRoles from '../auth/roles/ManageRoles'

const UserTableRowAction = ({ id }: { id: number }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer hover:text-slate-200"><Ellipsis size={16} /></div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='me-4'>
        <DropdownMenuItem className='cursor-pointer'>
          View
        </DropdownMenuItem>
        <DropdownMenuItem className='cursor-pointer'>
          <Link href={`/ok/users/edit/${id}`}>
            Update
          </Link>
        </DropdownMenuItem>
        <DeleteUser id={id} />
        <ManageRoles id={id}/>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserTableRowAction