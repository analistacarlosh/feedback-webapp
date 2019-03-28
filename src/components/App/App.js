import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import QuestionPage from '../Question/QuestionPage'
import ResultPage from '../Result/ResultPage'
import LoginPage from '../Login/LoginPage'
import Navigation from '../Navigation/Navigation'

class App extends Component {

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Feedback App</h1>
            <Navigation/>
          </header>
        </div>
        <Route path="/" exact component={QuestionPage} />
        <Route path="/result/" component={ResultPage} />
        <Route path="/login/" component={LoginPage} />
      </Router>
    );
  }
}

export default App;