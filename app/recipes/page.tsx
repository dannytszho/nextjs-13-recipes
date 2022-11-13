import { blogData } from '../../data/blogData'
export default function RecipesPage() {
    return (
        <div>
            {blogData.map((post) => (
                <>
                    <p>{post.id}</p>
                    <p>{post.title}</p>
                    <p>{post.content}</p>
                </>
            ))}
        </div>
    )
}
