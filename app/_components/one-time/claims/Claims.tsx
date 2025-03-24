import { Claim } from '@/definitions/type-definitions/auth'
import React from 'react'
import ClaimPage from './Claim'
import { Plus } from 'lucide-react'

const Claims = ({ allClaims }: { allClaims: Claim[] }) => {
    return (
        <div>
            <div className='flex justify-end'>
                <div className=' flex flex-row gap-1 items-end mb-4 py-2 px-4 rounded-md hover:bg-primary-foreground hover:text-stone-600 dark:hover:text-stone-200 dark:hover:bg-primary  cursor-pointer'>
                   <span className='hidden sm:block'> New Claim</span>
                    <Plus />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {allClaims?.map((claim: Claim) => (
                    <div key={claim.id}>
                        <ClaimPage claim={claim} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Claims