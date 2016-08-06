import React, { PropTypes, Component } from 'react';
import TodoInput from '../components/TodoInput';
import InfoBar from '../components/InfoBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/todo';

const TodoHeader = (props) => {
  return (
    <div>
      <InfoBar {...props} />
      <TodoInput {...props} />
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  };
};

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ addTodo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);
