import React, { Component } from 'react'

class Job extends Component {
    render(){
        return(
            <div>
                <h3>
                    {this.props.title}
                </h3>
                <p>
                    {this.props.company}
                </p>
                <p>
                    {this.props.dates}
                </p>
                <p>
                    {this.props.des}
                </p>
            </div>
        )
    }
}

export default Job