import '../styles/globals.css'
import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

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
                <div className="mt-24">{children}</div>
                <footer>
                    <Footer />
                </footer>
            </body>
        </html>
    )
}
