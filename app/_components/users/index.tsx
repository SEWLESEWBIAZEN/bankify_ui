import getAllUsers from '@/app/_lib/data/users';
import React from 'react'
import { DataTable } from '../ui/DataTable';
import { columns } from './columns';

const Users = async () => {
    const users = await getAllUsers();
    return (
        <div className='flex flex-1 justify-center w-[500px] md:w-[600px] lg:w-[700px] xl:w-[1000px] overflow-x-auto'>
            <DataTable data={users ?? []} columns={columns} />
        </div>
    )
}

export default Users