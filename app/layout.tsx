import React from 'react'
import Nav from './nav'

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
