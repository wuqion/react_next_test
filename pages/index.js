import React, { Component } from 'react'
import Layout from './component/Layout'
import Router from 'next/router'

export default class Index extends Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>第一个组建</h1>
                </div>
                <button onClick={()=>{
                    Router.push('/detail?op=cs','/detail?op=cs',{"dd":"po"});
                }}>跳转详情</button>
            </Layout>
            
        )
    }
}
