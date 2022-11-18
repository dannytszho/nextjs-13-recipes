'use client'
import Link from 'next/link'
import Button from '../components/Button'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'

type linksType = {
    name: string
    link: string
}

const links = [
    { name: 'Home', link: '/' },
    { name: 'Recipes', link: '/recipes' },
    { name: 'Blog', link: '/recipes' },
    { name: 'About', link: '/about' },
]

export default function Nav() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className="shawdow-md z-[2] fixed w-full top-0 left-0">
            <div className="md:flex bg-white md:py-4 py-10 justify-center">
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                >
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </div>
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-10 md:static bg-white md:z-auto z-[3] left-0 w-full md:w-auto md:pl-0 pl-9 absolute transition-all duration-500 ease-in ${
                        isOpen ? 'top-20' : 'top-[-490px]'
                    }`}
                >
                    {links.map((link: linksType) => (
                        <li
                            key={link.name}
                            className="md:ml-8 text-xl md:my-0 my-7"
                        >
                            <Link
                                href={link.link}
                                className="text-gray-800 hover:text-gray-400 duration-500"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <div className="">
                        <Button>Get Started</Button>
                    </div>
                </ul>
            </div>
        </div>
    )
}
