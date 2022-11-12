import { blogData } from '../../../data/blogData'

type Post = {
    id: number
    title: string
    content: string
}

type PageProps = {
    params: {
        slug: string
    }
}

export default function IndividualPostPage({ params }: PageProps) {
    const { slug } = params
    const posts: Post[] = blogData

    return posts.map((post) => (
        <>
            {post.id.toString() === slug ? (
                <>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                </>
            ) : (
                ''
            )}
        </>
    ))
}

export async function generateStaticParams() {
    return blogData.map((post) => ({
        slug: post.id.toString(),
    }))
}
