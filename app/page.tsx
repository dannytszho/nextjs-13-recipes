import Image from 'next/image'
import Carousel from '../components/Carousel'
import HeaderImage from '../public/img/header.png'

export default function HomePage() {
    return (
        <div>
            <div>
                <Image
                    src={HeaderImage}
                    sizes="(max-width: 2000px) 100vw"
                    alt="Picture of a bowl of chicken wings"
                />
            </div>
            <div className="flex flex-col m-5 sm:m-10 md:m-28 lg:mx-64">
                <div>
                    <h1 className="text-5xl">Secret Menu</h1>
                    <p className="md:mr-40 lg:mr-60">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
            <Carousel />
        </div>
    )
}
