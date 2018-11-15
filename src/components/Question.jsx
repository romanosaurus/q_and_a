import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answered: false,
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onComponentDidMount() {
    this.setState({ input: '' });
  }
  handleChange(e) {
    const { state, props } = this;
    const { answer } = props;

    this.setState({ input: e.target.value });
    if (state.input.toLowerCase() === answer.toLowerCase()) {
      props.changeQuestion();
      this.setState({ input: '' })
    }
  }

  render() {
    const { props } = this;
    const { question } = props;

    return (
      <div>
        <h1>{question}</h1>
        <TextField
          id={props.questionNbr}
          placeholder="Réponse..."
          onChange={this.handleChange}
          value={this.state.input}
        />
      </div>
    );
  }
}

export default Question;
