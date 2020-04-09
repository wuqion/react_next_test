import React from 'react'
import Head from 'next/head'

export default function ({children}) {
    return (
        <div>
            <Head>
                <title>通用head</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            {children}
            
        </div>
    )
}
