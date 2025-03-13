'use client'
import React, { useEffect, useState } from 'react'
import { getAllUsers } from '@/app/_lib/data/users'
import { DataTable } from '../../reusable/DataTable'
import columns from './column'

const UsersPage = () => {

    const [users, setUsers]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const response=await getAllUsers()
            setUsers(response)
        }
        fetchData()
    },[])
    console.log(users)

  return (
    <div>
        <DataTable data={users??[]} columns={columns}/>
    </div>
  )
}

export default UsersPage