import Link from 'next/link'
export default function Nav() {
    return (
        <ul className="flex justify-center m-10 space-x-40">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    )
}
