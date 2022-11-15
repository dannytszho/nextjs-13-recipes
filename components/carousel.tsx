'use client'
import { blogData } from '../data/blogData'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Carousel() {
    const maxScrollWidth = useRef(0)
    const [currentIndex, setCurrentIndex] = useState(0)
    const carousel = useRef<HTMLUListElement>(null)

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1)
        }
    }

    const next = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <=
                maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1)
        }
    }

    const isDisable = (direction: string) => {
        if (direction === 'prev') {
            return currentIndex <= 0
        }
        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >=
                maxScrollWidth.current
            )
        }
        return false
    }

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft =
                carousel.current.offsetWidth * currentIndex
        }
    }, [currentIndex])

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0
    }, [])

    return (
        <div className="carousel my-20 mx-40">
            <div className="flex relative overflow-hidden">
                <button
                    className="p-4"
                    onClick={prev}
                    disabled={isDisable('prev')}
                >
                    <FaChevronLeft />
                </button>

                <ul
                    ref={carousel}
                    className="carousel-container flex gap-16 relative items-center overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                >
                    {blogData.map((post) => (
                        <li key={post.id}>
                            <div className="carousel-item w-52 bg-slate-50 rounded-lg cursor-pointer hover:scale-105 hover:rounded-xl">
                                <div>
                                    <Image
                                        className="border rounded-tl-lg rounded-tr-lg inline-block"
                                        src="https://baconmockup.com/300/300/"
                                        width={300}
                                        height={300}
                                        alt="Food of different cursine"
                                    />
                                </div>

                                <span className="m-2 bg-teal-300 rounded-full px-2 text-xs inline-block tracking-wide font-semibold text-teal-900">
                                    {post.category}
                                </span>
                                <p className="p-3">{post.title}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <button
                    className="p-4"
                    onClick={next}
                    disabled={isDisable('next')}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}
