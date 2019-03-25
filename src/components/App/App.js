import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Question from '../Question/Question'
import Navigation from '../Navigation/Navigation'
import Register from '../Register/Register'
import Result from '../Result/Result'

import { BrowserRouter as Router, Route} from "react-router-dom";
// import axios from 'axios'

class App extends Component {

  // Class bassed componnet - React hoks
  // reserved word, unmutable
  // useState();

  state = {
    questions: [
        {id: 1, question: 'Are you happy?', answer: 1},
        {id: 2, question: 'What about the weather?', answer: 1},
        {id: 3, question: 'Are you happy with your Job?', answer: 1},
    ],
    isFormeEnable: true
  }

  sendHandler = (answer) => {
    console.log('sent::-:)')    
    this.setState({
      questions: [
        {id: 1, question: 'Are you happy?', answer: 4},
        {id: 2, question: 'What about the weather?', answer: 3},
        {id: 3, question: 'Are you happy with your Job?', answer: 3},
      ]
      })
  }

  answersHandler = (event, id) => {
    console.log('answersHandler - :)')

    const questionAnsweredIndex = this.state.questions.findIndex(qa =>{
      return qa.id === id;
    });

    const questionAnswered = {
      ...this.state.questions[questionAnsweredIndex]
    }

    questionAnswered.answer = event.target.value

    const allQuestions = [...this.state.questions]
    allQuestions[questionAnsweredIndex] = questionAnswered
    this.setState({ questions: allQuestions })

    /*
    this.setState({
      questions: [
        {id: 1, question: 'Are you happy?', answer: event.target.value},
        {id: 2, question: 'What about the weather?', answer: event.target.value},
        {id: 3, question: 'Are you happy with your Job?', answer: event.target.value},
      ]
      });
     */ 
  }

  componentDidMount() {
    //console.log('componentDidMount')
    // axios.get('https://feedback-app-83210.firebaseio.com/questions.json')
    //   .then(res => {
    //     let questions_data = res.data;
    //     this.setState({ questions: questions_data });
    //   })
  }

  render() {
    return (
      <Router>
      this.state.isFormeEnable === true ?
      <div className="App">
        <header className="App-header">
          <p>
            Please, answer the questions below with number from 1 to 5.
          </p>
          <Navigation/>
        </header>
        <main className="App-container">
        {this.state.questions.map((question, index) => {
              return <Question
              question={question.question}
              answer={question.answer}
              changed={(event) => this.answersHandler(event, question.id)}
              key={question.id}
              click={this.sendHandler.bind(this, '0')}
              />             
          })}
        <p>
          <button onClick={this.sendHandler}> Send </button>
        </p>
        </main>
      </div>
      : null
        <Route exact path="/" component={App} />
        <Route path="/result" component={Result} />
        <Route path="/user-register" component={Register} />
      </Router>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'FeedBack App'))
  }
}

export default App;