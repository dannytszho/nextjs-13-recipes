import '../styles/globals.css'
import React from 'react'
import Nav from './Nav'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head />
            <body>
                <Nav />
                {children}
            </body>
        </html>
    )
}
