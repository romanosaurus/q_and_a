import React, { Component } from 'react';

class QuestionWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { props, state } = this;
    const { children } = props;

    return (
      <div>
        {children[props.questionNbr]}
      </div>
    );
  }
}

export default QuestionWrapper;
