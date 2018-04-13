import React, { Component } from 'react';
import Home from './Home';
import JobHistory from './JobHistory'
import Projects from './Projects'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <nav>
          <Link to ='/'>About Me ||</Link>
          <Link to ='/JobHistory'> Job History ||</Link>
          <Link to ='/Projects'> Projects</Link>
        </nav>
        <Route exact path='/' component={Home}/>
        <Route exact path='/JobHistory' component={JobHistory}/>
        <Route exact path='/Projects' component={Projects}/>
      </div>
      </Router>
    );
  }
}

export default App;
