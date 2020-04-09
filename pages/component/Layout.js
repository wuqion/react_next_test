import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'

export default function ({children}) {
    return (
        <div>
            <Link href='router'>link跳转->router跳转</Link>
            <button onClick={()=>{
                Router.push('/')
            }}>跳回首页</button>
            {children}
            
        </div>
    )
}
