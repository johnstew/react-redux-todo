import React, { PropTypes, Component } from 'react';

import TextField from 'material-ui/textfield';

class InputContainer extends Component {
  constructor() {
    super();

    this.state = { value: '', placeholder: 'Learn more React!' };

    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.refs.todoInput.input.placeholder = this.state.placeholder;
  }

  handleInputKeyDown(e) {
    let { addTodo } = this.props;

    if (e.keyCode === 13) {
      addTodo(this.state.value);
      this.setState({ value: '' });
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div>
        <TextField
          name="todo-input"
          ref="todoInput"
          className="todo__input"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleInputKeyDown}
          autoFocus
        />
      </div>
    );
  }
}

export default InputContainer;
