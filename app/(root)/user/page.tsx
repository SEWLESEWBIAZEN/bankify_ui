
import PageContent from '@/app/_components/layout/pageContent'
import Breadcrumb from '@/components/ui/breadcrumb'
import React from 'react'

const User = async () => {
    return (
        <div>
            <Breadcrumb breadcrumbs={[
                { label: 'User', to: '/user', active: true }
            ]}
            />
            <PageContent>User</PageContent>
        </div>
    )
}

export default User