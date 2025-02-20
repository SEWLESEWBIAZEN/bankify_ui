import getAllUsers from '@/app/_lib/data/users';
import React from 'react'
import { DataTable } from '../ui/DataTable';
import { columns } from './columns';

const Users = async () => {
    const users = await getAllUsers();
    return (
        <div className='flex overflow-x-auto'>
            <DataTable data={users ?? []} columns={columns} />
        </div>
    )
}

export default Users