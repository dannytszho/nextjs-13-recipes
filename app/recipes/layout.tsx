import React from 'react'
import DifferentCuisineImage from '../../public/img/differentCuisine.png'
import Image from 'next/image'

export default function RecipesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="relative">
            <div className="">
                <Image
                    className="w-full h-56 object-cover object-right-bottom"
                    src={DifferentCuisineImage}
                    alt="Picture of different cuisine"
                />
            </div>
            {children}
        </main>
    )
}
