import PageContent from '@/app/_components/layout/pageContent'
import Breadcrumb from '@/components/ui/breadcrumb'
import React from 'react'

const Settings = async () => {
    return (
        <div>
            <Breadcrumb breadcrumbs={[
                { label: 'Settings', to: '/settings', active: true }
            ]}
            />
            <PageContent>
                Settings
            </PageContent>
        </div>
    )
}

export default Settings