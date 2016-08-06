import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Paper from 'material-ui/paper';
import TodoHeader from '../containers/TodoHeader';
import Divider from 'material-ui/Divider';
import TodoResults from '../containers/TodoResults';
import AppBar from 'material-ui/AppBar';

const Todo = () => {
  return (
    <div>
      <AppBar
        title="React + Redux Todo"
        showMenuIconButton={false}
      />
      <div className="todo">
        <Paper>
          <TodoHeader />
          <Divider />
          <TodoResults />
        </Paper>
      </div>
    </div>
  );
};

export default Todo;
