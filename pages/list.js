import React, { Component } from 'react'

export default class list extends Component {
    state = {
        data:["hello","wrod"]
    }

    render() {
        return (
            <div>d
                {
                    this.state.data.map((item,index)=>
                        <li key={index}>{item}</li>
                    )
                }
            </div>
        )
    }
}
