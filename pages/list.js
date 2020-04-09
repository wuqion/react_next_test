import React, { Component } from 'react'

export default class List extends Component {
    state = {
        data:["hello","wrodd"]
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((item,index)=>
                        <li key={index}>{item}</li>
                    )
                }
            </div>
        )
    }
}
