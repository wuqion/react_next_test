import React, { Component } from 'react'
import axios from 'axios'

export default class films extends Component {
    //不用用于组建，只能用于页面，
    static async getInitialProps(){
        const res = await axios.get("https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=933944",{
            headers:{
               "X-Host": "mall.film-ticket.film.list"
            }
        });
        console.log();
        return{
            films:res.data.data.films
        }
    }
    render() {
        console.log(this.props.films);
        
        return (
            <div>
                {this.props.films.map((item)=>
                    <div key={item.filmId}>
                        <p>{item.name}</p>
                        <img src={item.poster}></img>
                    </div>
                    
                )}
            </div>
        )
    }
}
