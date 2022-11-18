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
                <div className="">{children}</div>
                <footer className="fixed bottom-0">
                    <Footer />
                </footer>
            </body>
        </html>
    )
}
