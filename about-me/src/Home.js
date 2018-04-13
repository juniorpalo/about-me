import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
    render(){
        return(
            <div>
                <div className='top'>
                    <img src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/26904786_1979001635448633_5711903673916576858_n.jpg?_nc_cat=0&oh=3bb05ec5fb50190bc9aeb8bf6e69b7a3&oe=5B6BEC2F" alt="ME"/>
                    <div className='Name'>Juan Carlos Palomino Jr</div>
                </div>
                <div className="home-main">
                <div className='body'>
                    <br/><br/><br/><br/><br/>
                    <div className='Bio'>
                        Bio:
                     </div>
                    <p>21 year old Jr Developer. In my free time I like to make videos and collect music too. I play a lot of video games.<br/>I'm convinced that Japan is the best island on earth.</p>
                    <div className='skills'>
                        Tech Interests / Skills:
                    </div>
                    <ul>
                        <li>HTML/CSS</li>
                        <li>Git</li>
                        <li>JavaScript/Json</li>
                        <li>React</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>RESTful APIs</li>
                        <li>MongoDB</li>
                        <li>Github</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}

export default Home;