import Image from 'next/image'
import { FaSearch } from 'react-icons/fa'

interface IProps {
    id: number
    title: string
    image: string
}

// async function fetchRecipes() {
//     const res = await fetch(
//         'https://api.spoonacular.com/recipes/complexSearch',
//         {
//             method: 'GET',
//             headers: {
//                 'X-Api-Key': process.env.API_KEY as string,
//             },
//         }
//     )
//     const recipes = res.json()
//     return recipes
// }

export default async function RecipesPage() {
    // const recipes = await fetchRecipes()
    return (
        <div>
            <section className="grid grid-cols-1 sm:grid-cols-2 sm:divide-x-2 divide-dashed divide-slate-400 text-center">
                <div className="justify-self-center">
                    <p className="">Find a recipe</p>
                    <div className="search-input flex">
                        <input
                            className="border-2 ml-8"
                            placeholder="Search"
                        ></input>
                        <div className="p-2">
                            <FaSearch />
                        </div>
                    </div>
                </div>
                <div className="m-2 md:m-0">
                    <p className="">Create a recipe</p>
                    <button>+</button>
                </div>
            </section>

            {/* <ul className="grid grid-cols-3 m-5">
                {recipes.results.map((recipe: IProps) => (
                    <li key={recipe.id}>
                        <Image
                            src={recipe.image}
                            width={200}
                            height={200}
                            alt="Food of recipes"
                        />
                        <p>{recipe.title}</p>
                    </li>
                ))}
            </ul> */}
        </div>
    )
}
