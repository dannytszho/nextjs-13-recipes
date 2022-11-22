import '../styles/globals.css'
import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Inter } from '@next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <head />
            <body>
                <Nav />
                <div className="">{children}</div>
                <footer className="fixed bottom-0">
                    <Footer />
                </footer>
            </body>
        </html>
    )
}
