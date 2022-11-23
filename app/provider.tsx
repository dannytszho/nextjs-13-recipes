'use client'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'

import React, { ReactNode, useState } from 'react'

type ProviderProps = {
    children: ReactNode
}

export default function Provider({ children }: ProviderProps) {
    const [supabase] = useState(() => createBrowserSupabaseClient())
    return (
        <SessionContextProvider supabaseClient={supabase}>
            {children}
        </SessionContextProvider>
    )
}
