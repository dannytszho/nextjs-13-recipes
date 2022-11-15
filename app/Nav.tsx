import Link from 'next/link'

export default function Nav() {
    return (
        <div className="w-full top-0 left-0">
            <ul className="flex justify-center m-10 space-x-40">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/recipes">Recipes</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}
