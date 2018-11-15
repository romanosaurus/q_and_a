import React, { Component } from 'react';
import logo from './logo.svg';
import QuestionWrapper from './components/QuestionWrapper';
import Question from './components/Question';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questionNbr: 0,
    };
    this.handleNewQuestion = this.handleNewQuestion.bind(this);
  }

  handleNewQuestion() {
    let { questionNbr } = this.state;

    this.setState({ questionNbr: questionNbr += 1})
  }

  render() {
    return (
      <div className="App">
        <QuestionWrapper questionNbr={this.state.questionNbr}>
          <Question
            changeQuestion={this.handleNewQuestion}
            question="🧙‍♂️ + 🐈"
            answer="Animaux Fantastiques 2"
            questionNbr="1"
          />
          <Question
            changeQuestion={this.handleNewQuestion}
            question="🧙‍♂️ + "
            answer="Animaux Fantastiques 2"
            questionNbr="2"
          />
        </QuestionWrapper>
      </div>
    );
  }
}

export default App;
