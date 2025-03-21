'use client'
import React from 'react'
import { DataTable } from '../../reusable/DataTable'
import columns from './column'
import { Plus } from 'lucide-react'
import Link from 'next/link'
const UsersPage = ({ users }: { users: any }) => {
  return (
    <div>
      <Link className='flex flex-row items-center justify-end gap-1 cursor-pointer my-4 text-[14px]' href="/auth/register">
        <Plus size={16} /> Add User
      </Link>
      <DataTable data={users} columns={columns} />
    </div>
  )
}

export default UsersPage