import React, { Component } from 'react'
import './Projects.css'
import Pro from './Pro'
import './Projects.css'

class Projects extends Component {
    state = { 
        project1:{title:'About Me', 
        des:'An app that introduces me.'},
        project2:{title:'Kitchen Components', 
        des: 'Components of a Kitchen that taught me JavaScript Components.', 
        link: 'https://github.com/juniorpalo/kitchen-components'}
    }
    render() {
        
        return(
            <div className="main">
                <div className="title">
                    Projects
                </div>
                <div className="pro1">
                    <Pro githublink='' title={this.state.project1.title} des={this.state.project1.des}/>
                </div>
                <div className="pro2">
                    <Pro githublink={this.state.project2.link} title={this.state.project2.title} des={this.state.project2.des}/>
                </div>
            </div>
        )
    }
}


export default Projects