import React, { Component } from 'react'
import './JobHistory.css'
import Jobs from './Jobs'

class JobHistory extends Component {
    render() {
        const job1={
            title: 'International UX Specialist', company: 'DoTerra', dates: 'September 2017 - present', des: 'I run usability tests on DoTerra\'s internal information system to keep it optimal for it\'s international markets. I work with Latin America, China, Canada, Australia, Europe, and Japan. '
        }
        const job2={
            title: 'Church Volunteer', company: 'Church of Jesus Chirst of Latter-Day Saints', dates: 'July 2015 - July 2017', des: 'I spent 2 years volunteering for the LDS church in Japan. I taught interested people the church\'s teachings in Japanese and did any form of service I could fine, the most common being teaching a free English class.'
        }
        const job3={
            title:'Paint Department Crew Member', company: 'Home Depot', dates: 'Febuary 2015 - July 2015', des: 'I helped customers by mixing paint and offering adivce on their walls and or decks.'
        }
        return(
            <div className="main">
                <div className="title">Job History</div>
                <div className="jobs">
                    <Jobs title={job1.title} company={job1.company} dates={job1.dates} des={job1.des}/>
                    <Jobs title={job2.title} company={job2.company} dates={job2.dates} des={job2.des}/>
                    <Jobs title={job3.title} company={job3.company} dates={job3.dates} des={job3.des}/>
                </div>
            </div>
        )
    }
}

export default JobHistory