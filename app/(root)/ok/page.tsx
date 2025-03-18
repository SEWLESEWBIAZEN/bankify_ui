'use client'
import { redirect } from 'next/navigation'
const page = () => {
  return (
    redirect('/ok/dashboard')
  )
}

export default page