"use client"
import React from 'react'
import ViewPDF from '../components/ViewPDF'
import { useSearchParams } from 'next/navigation'

const page = () => {
    const searchParams = useSearchParams()
    const file = searchParams?.get('file')

    const linkUrl = `${window.location.origin}/exam/${file}`

    return (
        <div>{
            file ? <ViewPDF fileUrl={linkUrl} /> : null
        }
        </div>
    )
}

export default page