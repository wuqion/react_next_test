import React, { Component } from 'react'
import Head from 'next/head'

export default class MyHead extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>自定义title</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <p>打开控制台看head</p>
            </div>
            
        )
    }
}
