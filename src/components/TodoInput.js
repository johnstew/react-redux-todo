import React, { PropTypes, Component } from 'react';

import TextField from 'material-ui/textfield';

class InputContainer extends Component {
  constructor() {
    super();
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
  }

  handleInputKeyDown(e) {
    let { addTodo } = this.props;

    if (e.keyCode === 13) {
      addTodo(this.refs.todoInput.input.value);
      this.refs.todoInput.input.value = '';
    }
  }

  render() {
    return (
      <div>
        <TextField
          name="todo-input"
          ref="todoInput"
          className="todo__input"
          hintText="Learn more React + Redux!"
          onKeyDown={this.handleInputKeyDown}
          autoFocus
        />
      </div>
    );
  }
}

export default InputContainer;
