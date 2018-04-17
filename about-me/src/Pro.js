import React, { Component } from 'react'
import './Pro.css'

class Pro extends Component{
    render(){
        return(
            <div>
                <h3>
                    <a href={this.props.githublink} target='_blank'>
                    {this.props.title}</a>
                </h3>
                <p>
                    {this.props.des}
                </p>
            </div>
        )
    }
}

export default Pro