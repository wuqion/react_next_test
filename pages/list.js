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
            </div>
        )
    }
}
