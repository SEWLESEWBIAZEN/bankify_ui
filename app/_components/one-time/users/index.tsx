'use client'
import React from 'react'
import { DataTable } from '../../reusable/DataTable'
import columns from './column'
import { Button } from '@/components/ui/button'
import { PlusSquare } from 'lucide-react'
import Link from 'next/link'
const UsersPage = ({users}:{users:any}) => {
  return (
    <div>    
      <Link className='flex flex-1 justify-end mb-4' href="/auth/register">
        <Button className='flex flex-row items-center gap-1 cursor-pointer'><PlusSquare/> Add User</Button>
      </Link>
        <DataTable data={users} columns={columns}/>
    </div>
  )
}

export default UsersPage