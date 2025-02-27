
import PageContent from '@/app/_components/layout/pageContent'
import Breadcrumb from '@/components/ui/breadcrumb'
import React from 'react'

const Calendar = async () => {
    return (
        <div>
            <Breadcrumb breadcrumbs={[
                { label: 'Calendar', to: '/calendar', active: true }
            ]}
            />
            <PageContent>Calendar</PageContent>
        </div>
    )
}

export default Calendar