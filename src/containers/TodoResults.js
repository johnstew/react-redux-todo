import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import { completeTodo } from '../actions/todo';

const TodoResults = (props) => {
  let { todos, completeTodo } = props;
  return (
    <div className="todo__results">
      <List>
        {
          todos.map((t,i) => {
            if (!t.completed) {
              return <ListItem
                primaryText={t.task}
                key={i}
                onClick={() => completeTodo(i)}
              />
            }
          })
        }
      </List>
    </div>
  );
};

export const mapStateToProps = (state) => {
  return {
    todos: state.todo.todos
  };
};

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ completeTodo }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoResults);
