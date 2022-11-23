import '../styles/globals.css'
import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Inter } from '@next/font/google'
import Provider from './provider'
import createClient from '../utils/supabase-server'
import SupabaseListener from '../components/supabase-listener'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export const revalidate = 0

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = createClient()
    const {
        data: { session },
    } = await supabase.auth.getSession()

    console.log(supabase)
    console.log({ session })

    return (
        <html lang="en" className={`${inter.variable}`}>
            <head />
            <body>
                <Nav />
                <div className="">
                    <SupabaseListener accessToken={session?.access_token} />
                    {children}
                </div>
                <footer className="fixed bottom-0">
                    <Footer />
                </footer>
            </body>
        </html>
    )
}
