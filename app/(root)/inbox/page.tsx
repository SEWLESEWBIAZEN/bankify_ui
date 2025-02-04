
import PageContent from '@/app/_components/layout/pageContent'
import Breadcrumb from '@/components/ui/breadcrumb'
import React from 'react'

const Inbox = async () => {
    return (
        <div>
            <Breadcrumb breadcrumbs={[
                { label: 'Inbox', to: '/inbox', active: true }
            ]} />
            <PageContent>Inbox</PageContent>
        </div>
    )
}

export default Inbox