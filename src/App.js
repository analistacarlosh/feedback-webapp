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
        {id: 1, question: 'Are you happy?', answer: 1},
        {id: 2, question: 'What about the weather?', answer: 1},
        {id: 3, question: 'Are you happy with your Job?', answer: 1},
    ],
    isFormeEnable: true
  }

  sendHandler = (answer) => {
    console.log('sent::-:)');    
    // this.state.answers[0].question;
    this.setState({
      answers: [
        {id: 1, question: 'Are you happy?', answer: 4},
        {id: 2, question: 'What about the weather?', answer: 3},
        {id: 3, question: 'Are you happy with your Job?', answer: 3},
      ]
      }
    )
  }

  answersHandler = (event, id) => {

    console.log('answersHandler::-:)');    

    const questionAnsweredIndex = this.state.answers.findIndex(qa =>{
      return qa.id === id;
    });

    const questionAnswered = {
      ...this.state.answers[questionAnsweredIndex]
    };

    questionAnswered.answer = event.target.value;

    const allQuestions = [...this.state.answers];
    allQuestions[questionAnsweredIndex] = questionAnswered;
    this.setState({ answers: allQuestions });

    /*
    this.setState({
      answers: [
        {id: 1, question: 'Are you happy?', answer: event.target.value},
        {id: 2, question: 'What about the weather?', answer: event.target.value},
        {id: 3, question: 'Are you happy with your Job?', answer: event.target.value},
      ]
      });
     */ 
  }

  render() {
    
    // You can write JS code here

    return (
      this.state.isFormeEnable === true ?
      <div className="App">
        <header className="App-header">
          <p>
            Please, answer the questions below with number from 1 to 5.
          </p>

          {this.state.answers.map((question, index) => {
              return <Question
              question={question.question}
              answer={question.answer}
              changed={(event) => this.answersHandler(event, question.id)}
              click={this.sendHandler.bind(this, '0')}
              key={question.id}
              />             
          })}

          <p>
            <button onClick={this.sendHandler}> Send </button>
            <button onClick={ () => this.sendHandler}> Send </button>
          </p>
          
        </header>
      </div>
      : null
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'FeedBack App'))
  }
}

export default App;
