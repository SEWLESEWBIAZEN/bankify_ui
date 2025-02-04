import PageContent from '@/app/_components/layout/pageContent'
import Breadcrumb from '@/components/ui/breadcrumb'
import React from 'react'

const Search = async () => {
    return (
        <div>
            <Breadcrumb breadcrumbs={[
                { label: 'Search', to: '/search', active: true }
            ]}
            />
            <PageContent>
                Search
            </PageContent>
        </div>
    )
}

export default Search