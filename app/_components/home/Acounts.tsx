import React from 'react'
import Account from './Account'

const accountsData = [
    {
        id: 1,
        accountNumber: "100000000000000000001",
        name: 'Savings Account',
        balance: 1000
    },
    {
        id: 2,
        accountNumber: "100000000000000000012",
        name: 'Checking Account',
        balance: 1000
    },
    {
        id: 3,
        accountNumber: "100000000000000000021",
        name: 'Loan Account',
        balance: 1000
    },
]

const Accounts = () => {
    return (
        <div className='w-full flex flex-row flex-wrap items-start'>
            {accountsData?.map((accountData: any) => {
                return <Account key={accountData.id} account={accountData} />
            })}
        </div>
    )
}

export default Accounts