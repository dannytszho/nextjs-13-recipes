'use client'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

createBrowserSupabaseClient

export async function createNewRecipe({
    title,
    description,
    cuisine_type,
    prep_time,
    cook_time,
    ingredient_1,
}: any) {
    const supabase = createBrowserSupabaseClient()
    let { error, data } = await supabase.from('recipes').insert([
        {
            title,
            description,
            cuisine_type,
            prep_time,
            cook_time,
            ingredient_1,
        },
    ])

    if (error) {
        throw error
    }
    return data
}
