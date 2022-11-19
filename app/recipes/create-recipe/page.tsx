'use client'
import { ChangeEvent, useState } from 'react'

export default function CreateRecipePage() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [cuisineType, setCuisineType] = useState('')
    const [prepTime, setPrepTime] = useState(0)
    const [cookTime, setCookTime] = useState(0)
    const [cookUnit, setCookUnit] = useState('')
    const [prepUnit, setPrepUnit] = useState('')
    const totalTime = prepTime + cookTime

    const handleCookUnitChange = () => {
        const selectedUnit = (
            document.getElementById('CookTimeUnit') as HTMLInputElement
        )?.value
        setCookUnit(selectedUnit)
    }
    const handlePrepUnitChange = () => {
        const selectedUnit = (
            document.getElementById('PrepTimeUnit') as HTMLInputElement
        )?.value
        setPrepUnit(selectedUnit)
    }

    const convertMinsToDaysHrsMins = (
        prepTime: number,
        prepUnit: string,
        cookTime: number,
        cookUnit: string
    ) => {
        if (cookUnit === 'days') {
            cookTime = cookTime * 60 * 24
        }
        if (cookUnit === 'hours') {
            cookTime *= 60
        }
        if (prepUnit === 'days') {
            prepTime = prepTime * 60 * 24
        }
        if (prepUnit === 'hours') {
            prepTime *= 60
        }

        const totalmins = cookTime + prepTime
        let d = Math.floor(totalmins / 60 / 24)
        let h = Math.floor(totalmins / 60)
        h = h - d * 24
        let m = Math.floor(totalmins % 60)
        const formats = [d, h, m]
        console.log(formats)
        return formats
            .map((format: any, index) => {
                if (format) {
                    if (index === 0) {
                        format = pluralTimeUnit(format, 'day')
                    } else if (index === 1) {
                        format = pluralTimeUnit(format, 'hour')
                    } else if (index === 2) {
                        format = pluralTimeUnit(format, 'minute')
                    }
                    return format
                }
            })
            .join(' ')
    }

    const pluralTimeUnit = (value: number, unit: string) => {
        if (value === 1) {
            return value + ' ' + unit
        } else if (value > 1) {
            return value + ' ' + unit + 's'
        }
    }

    const [ingredientList, setIngredientList] = useState([{ ingredient: '' }])

    const handleAddIngredient = () => {
        setIngredientList([...ingredientList, { ingredient: '' }])
    }

    const handleRemoveIngredient = (index: number) => {
        const list = [...ingredientList]
        list.splice(index, 1)
        setIngredientList(list)
    }

    const handleIngredientChange = (
        e: ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        e.preventDefault()
        const { value } = e.target
        const list = [...ingredientList]
        list[index].ingredient = value
        setIngredientList(list)
        console.log(list)
    }

    return (
        <div className="max-w-2xl mr-2 bg-white p-16">
            <form className="p-8 border justify-center top-52 md:left-48 lg:left-72 left-6 right-6 md:right-48 lg:right-72 absolute bg-white">
                <div className="grid grid-cols-1 divide-y gap-6 w-full">
                    <div>
                        <h1 className="text-lg font-bold underline decoration-orange-400 decoration-8">
                            Create a Recipe
                        </h1>
                        <p className="text-xs">
                            Uploading personal recipes is easy! Add yours, share
                            with family and friends.
                        </p>
                    </div>
                    <div>
                        <label className="block mt-4">Recipe Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2 mb-4"
                            placeholder="recipe's title"
                            required
                        />

                        <label>Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 mt-2 mb-4"
                            placeholder="Description"
                            required
                        />

                        <label className="text-sm font-regular text-gray-900 block">
                            Select Cuisine Type
                        </label>
                        <select
                            id="post-cuisine-types"
                            value={cuisineType}
                            onChange={(e) => setCuisineType(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-light rounded-lg block w-full p-2.5 mb-6 mt-2"
                        >
                            <option>American</option>
                            <option>Indian</option>
                            <option>French</option>
                            <option>Chinese</option>
                            <option>Japanese</option>
                            <option>Italian</option>
                            <option>Spanish</option>
                            <option>Greek</option>
                            <option>Mediterranean</option>
                            <option>Lebanese</option>
                            <option>Moroccan</option>
                            <option>Turkish</option>
                            <option>Thai</option>
                            <option>Cajun</option>
                            <option>Mexican</option>
                            <option>Caribbean</option>
                            <option>German</option>
                            <option>Russian</option>
                            <option>Hungarian</option>
                        </select>
                    </div>

                    {/* <!--Ingredients--> */}
                    <div id="post-ingredients-group" className="mb-4">
                        <label className="text-sm font-semibold text-gray-900 block mt-4 mb-2">
                            Ingredients
                        </label>
                        <p className="text-xs">
                            Enter one ingredient per line. Include the quantity
                            (i.e. cups, tablespoons) and any special preparation
                            (i.e. sifted, softened, chopped).
                        </p>
                        {ingredientList.map((ingre, index) => (
                            <div className="flex">
                                <div
                                    id="post-ingredients-inputs"
                                    key={index}
                                    className="mb-2 flex-grow"
                                >
                                    <input
                                        type="text"
                                        value={ingre.ingredient}
                                        onChange={(e) =>
                                            handleIngredientChange(e, index)
                                        }
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm font-light rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 mb-2"
                                        placeholder={`Ingredient ${index + 1}`}
                                        required
                                    />
                                    {ingredientList.length - 1 === index && (
                                        <button
                                            type="button"
                                            id="post-add-ingredients"
                                            onClick={handleAddIngredient}
                                            className="flex flex-row items-center bg-blue-100 hover:bg-blue-200 text-gray-900 text-sm font-regular py-2 px-4 rounded-full"
                                        >
                                            <svg
                                                className="w-5 h-5 mr-2"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                ></path>
                                            </svg>
                                            Add Ingredient
                                        </button>
                                    )}
                                </div>
                                {ingredientList.length > 1 && (
                                    <div>
                                        <button
                                            onClick={() =>
                                                handleRemoveIngredient(index)
                                            }
                                            className="pl-10 pt-2"
                                        >
                                            ❌
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Directions section */}
                    <div>
                        <h2 className="font-semibold mt-4 mb-2">Directions</h2>
                        <p className="text-xs">
                            Explain how to make your recipe, including oven
                            temperatures, baking or cooking times, and pan
                            sizes, etc. Use optional headers to organize the
                            different parts of the recipe (i.e. Prep, Bake,
                            Decorate).
                        </p>
                        <label>Step 1</label>
                        <textarea
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g. Preheat oven to 400 degrees F..."
                            required
                        ></textarea>
                        <label>Step 2</label>
                        <textarea
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g. Preheat oven to 400 degrees F..."
                            required
                        ></textarea>
                        <label>Step 3</label>
                        <textarea
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="e.g. Preheat oven to 400 degrees F..."
                            required
                        ></textarea>
                    </div>

                    {/* Prep, Cook time section */}
                    <div className="pt-4">
                        <div className="flex gap-4 my-2">
                            <p className="grow">Prep Time</p>
                            <input
                                type="number"
                                value={prepTime}
                                onChange={(e) =>
                                    setPrepTime(e.target.valueAsNumber)
                                }
                                min="0"
                                className="lg:w-40 md:w-28 w-16 h-8 bg-50 border border-gray-300 rounded-lg"
                            />
                            <select
                                name="convert1"
                                id="PrepTimeUnit"
                                onChange={handlePrepUnitChange}
                                className="lg:w-72 md:w-48 w-24 h-8 border border-gray-300 rounded-lg"
                            >
                                <option>mins</option>
                                <option>hours</option>
                                <option>days</option>
                            </select>
                        </div>
                        <div className="flex gap-4 my-2">
                            <p className="grow">Cook Time</p>
                            <input
                                type="number"
                                value={cookTime}
                                onChange={(e) =>
                                    setCookTime(e.target.valueAsNumber)
                                }
                                min="0"
                                className="lg:w-40 md:w-28 w-16 h-8 bg-50 border border-gray-300 rounded-lg"
                            />
                            <select
                                name="convert2"
                                id="CookTimeUnit"
                                onChange={handleCookUnitChange}
                                className="lg:w-72 md:w-48 w-24 h-8 border border-gray-300 rounded-lg"
                            >
                                <option value="mins">mins</option>
                                <option value="hours">hours</option>
                                <option value="days">days</option>
                            </select>
                        </div>
                        <div className="flex gap-10">
                            <p>Total Time</p>
                            <span>
                                {convertMinsToDaysHrsMins(
                                    prepTime,
                                    prepUnit,
                                    cookTime,
                                    cookUnit
                                )}
                            </span>
                        </div>
                    </div>

                    {/* Submit buttons section */}
                    <div className="flex justify-end space-x-6 pt-4">
                        <button>CANCEL</button>
                        <button
                            className="bg-red-500 text-white px-6 py-2 rounded-md"
                            onClick={() => {
                                alert(
                                    JSON.stringify({
                                        title,
                                        description,
                                        cuisineType,
                                    })
                                )
                            }}
                        >
                            Submit Recipe
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
