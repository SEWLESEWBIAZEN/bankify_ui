
'use client'
import { Claim } from '@/definitions/type-definitions/auth'
import React, { useEffect, useState } from 'react'
import ClaimPage from './Claim'
import CreateClaim from './CreateClaim'
import { Input } from '@/components/ui/input'

const Claims = ({ allClaims }: { allClaims: Claim[] }) => {
    const [searchText, setSearchText]=useState('')
    const [filteredClaims, setFilteredClaims]=useState<Claim[]>(allClaims??[])

    //filtering claims based on search text
    useEffect(()=>{
        if(allClaims?.length>0){
            const claims=allClaims?.filter((claim:Claim)=>claim.claimString.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredClaims(claims)
        }
    },[searchText])
    return (
        <div>
            <div className='flex flex-row gap-2 justify-between'>
                <Input placeholder='Search Claims...' value={searchText} onChange={(e)=>setSearchText(e.target.value)} className='md:w-[25%]'/>
                {/* <div className='w-full'> */}
                <CreateClaim />
                {/* </div> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredClaims?.length>0&&
                filteredClaims?.map((claim: Claim) => (
                    <div key={claim.id}>
                        <ClaimPage claim={claim} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Claims