import React, { Component } from 'react'
import styles from './List.module.css'
export default class List extends Component {
    state = {
        data:["hello","wrodd"]
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((item,index)=>
                        <li key={index} className={styles.error}>{item}</li>
                    )
                }
                <p style={{ color: 'red' ,}}>CSS-in-JS（内连样式）</p>
                <style jsx>
                    {`
                    h1{
                        background: red;
                    }
                    `}
                </style>
                <h1>jsx 样式</h1>
            </div>
        )
    }
}
