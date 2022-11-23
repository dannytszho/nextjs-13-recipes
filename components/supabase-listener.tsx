'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'

export default function SupabaseListener({
    accessToken,
}: {
    accessToken?: string
}) {
    const [supabase] = useState(() => createBrowserSupabaseClient())
    const router = useRouter()

    useEffect(() => {
        supabase.auth.onAuthStateChange((event, session) => {
            if (session?.access_token !== accessToken) {
                router.refresh()
            }
        })
    }, [accessToken])

    return null
}
