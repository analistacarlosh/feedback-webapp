import React, {Component} from 'react'
import Question from '../Question/Question'
import axios from 'axios'

class QuestionPage extends Component {

  state = {
    questions: [
        {id: 1, question: 'Are you happy?', answer: 1},
        {id: 2, question: 'What about the weather?', answer: 1},
        {id: 3, question: 'Are you happy with your Job?', answer: 1},
    ],
    isFormeEnable: true
  }

  sendHandler = () => {
    this.setState({
      questions: [
        {id: 1, question: 'Are you happy?', answer: 4},
        {id: 2, question: 'What about the weather?', answer: 3},
        {id: 3, question: 'Are you happy with your Job?', answer: 3},
      ]
      })
  }

  answersHandler = (event, id) => {

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
  }

  // Life cycle, mounting 
  componentDidMount() {
    //console.log('componentDidMount')
    axios.get('https://feedback-app-83210.firebaseio.com/questions.json')
      .then(res => {
        let questions_data = res.data;
        this.setState({ questions: questions_data });
      })
  }

  render() {
    return (
      this.state.isFormeEnable === true ?
      <div className="App">
        <header className="App-header">
          <p>
            Please, answer the questions below with number from 1 to 5.
          </p>
        </header>
        <main className="App-container">
            {this.state.questions.map((q, index) => {
              return <Question
                question={q.question} 
                answer={q.answer}
                changed={(event) => this.answersHandler(event, q.id)}
                key={q.id}
                />
            })}
        <p>
          <button onClick={this.sendHandler}> Send </button>
        </p>
        </main>
      </div>
      : null
    );
  }
}

export default QuestionPage;