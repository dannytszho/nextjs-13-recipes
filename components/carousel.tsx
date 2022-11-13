import { blogData } from '../data/blogData'
import Image from 'next/image'
import HeaderImage from '../public/img/header.png'

export default function Carousel() {
    return (
        <div>
            {blogData.map((post) => (
                <div key={post.id} className="carousel-item flex">
                    <p>{post.category}</p>
                    <p>{post.title}</p>
                    <div>
                        <Image
                            src="https://placekitten.com/300/300"
                            width={300}
                            height={400}
                            alt="Food of different cursine"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
