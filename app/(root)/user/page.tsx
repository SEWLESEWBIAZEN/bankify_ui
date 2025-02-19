import React from 'react'
import PageContent from '@/app/_components/layout/pageContent';
import Users from '@/app/_components/users';
import Breadcrumb from '@/components/ui/breadcrumb';

const User = async () => {
    return (
        <div className=''>
            <Breadcrumb breadcrumbs={[
                { label: 'User', to: '/user', active: true }
            ]}
            />
            <PageContent>
                <Users />
            </PageContent>
        </div>
    )
}

export default User