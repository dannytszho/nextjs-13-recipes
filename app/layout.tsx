import '../styles/globals.css'
import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Inter } from '@next/font/google'
import Provider from './provider'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    // const supabaseClient = useSupabaseClient()
    // console.log(supabaseClient)
    return (
        <html lang="en" className={`${inter.variable}`}>
            <head />
            <body>
                <Nav />
                <Provider>
                    <div className="">{children}</div>
                </Provider>
                <footer className="fixed bottom-0">
                    <Footer />
                </footer>
            </body>
        </html>
    )
}
