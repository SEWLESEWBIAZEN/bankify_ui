'use client'
import React, { useEffect, useState } from 'react'
import { DataTable } from '../../reusable/DataTable'
import columns from './column'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
const UsersPage = ({ users }: { users: any }) => {
  const [searchText, setSearchText] = useState('')
  const [filteredUsers, setFilteredUsers] = useState<any[]>(users ?? [])

  //filtering claims based on search text
  useEffect(() => {
    if (users?.length > 0) {
      const userss = users?.filter((user: any) =>
        user.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
        user.email.toLowerCase().includes(searchText.toLowerCase())
      )
      setFilteredUsers(userss)
    }
  }, [searchText])
  return (
    <div>
      <div className='flex flex-row items-center justify-between gap-4 md:gap-0'>
        <Input placeholder='Search Users...' value={searchText} onChange={(e) => setSearchText(e.target.value)} className='md:w-[25%]' />
        <Link className='flex flex-row items-center gap-1 cursor-pointer my-4 text-[14px]' href="/auth/register">
          <Plus size={16} />
          <span className='hidden sm:block text-nowrap'>Add User</span>
        </Link>
      </div>
      <DataTable data={filteredUsers??[]} columns={columns} />
    </div>
  )
}
export default UsersPage