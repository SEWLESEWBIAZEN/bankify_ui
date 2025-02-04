import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import React from 'react'

export type Account = {
    id: number;
    name: string;
    balance: number;
    accountNumber: string;
}

const Account = ({ account }: { account: Account }) => {
    return (<Card>
            <CardTitle>
                <h2>{account.name}</h2>
            </CardTitle>
            <CardContent>
                <div className='flex flex-row'>
                    <p> {account.accountNumber}</p>
                    <p> ${account.balance.toFixed(2)}</p>
                </div>
            </CardContent>
            <CardFooter>
                View Details <br />
                Transactions
            </CardFooter>
        </Card >
    )
}

export default Account