import React, { Component } from 'react';
// import React, { useState } from 'react';
import './App.css';
import Question from './components/Question/Question'

class App extends Component {

  // useState();

  // Class bassed componnet - React hoks
  // reserved word
  // unmutable
  state = {
    answers: [
        {question: 'Are you happy?', answer: 1},
        {question: 'What about the weather?', answer: 1},
        {question: 'Are you happy with your Job?', answer: 1},
    ]
  }

  sendHandler = (answer) => {
    console.log('sent::-:)');    
    // this.state.answers[0].question;
    this.setState({
      answers: [
        {question: 'Are you happy?', answer: 4},
        {question: 'What about the weather?', answer: 3},
        {question: 'Are you happy with your Job?', answer: 3},
      ]
      }
    )
  }

  answersHandler = (event) => {
    console.log('answersHandler::-:)');    
    this.setState({
      answers: [
        {question: 'Are you happy?', answer: event.target.value},
        {question: 'What about the weather?', answer: event.target.value},
        {question: 'Are you happy with your Job?', answer: 3},
      ]
      }
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Please, answer the questions below with number from 1 to 5.
          </p>
          
          <Question
            question={this.state.answers[0].question}
            answer={this.state.answers[0].answer}
            changed={this.answersHandler}
            click={this.sendHandler.bind(this, '0')}
          > -
          </Question>

          <p>
            <button onClick={this.sendHandler}> Send </button>
            <button onClick={ () => this.sendHandler}> Send </button>
          </p>

        </header>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'FeedBack App'))
  }
}

export default App;
