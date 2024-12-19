import PageContent from '@/app/_components/layout/pageContent'
import { Metadata } from 'next';
import React from 'react'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const metadata: Metadata = {
    title: 'Home Page| Bankify-SewLabs',
    description: 'Bankify is a digital banking solution that simplifies banking and transactions for individuals and businesses.',
    keywords: 'bankify, bank, financial, services, system'
};

const Home = async () => {
    return (
        <PageContent>Home</PageContent>
    )
}

export default Home