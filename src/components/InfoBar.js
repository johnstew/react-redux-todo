import React, { PropTypes, Component } from 'react';
import Chip from 'material-ui/Chip';
import {redA200, blue600, teal500} from 'material-ui/styles/colors';

const InfoBar = (props) => {
  let { todos } = props;
  return (
    <div className="infobar">
      <Chip
        className="infobar__chips infobar__chips--remaining"
        backgroundColor={redA200}
        labelColor="#FFFFFF"
        >
        {todos.filter((t) => !t.completed).length} Remaining
      </Chip>
      <Chip
        className="infobar__chips infobar__chips--completed"
        backgroundColor={blue600}
        labelColor="#FFFFFF"
        >
        {todos.filter((t) => t.completed).length} Completed
      </Chip>
      <Chip
        className="infobar__chips infobar__chips--total"
        backgroundColor={teal500}
        labelColor="#FFFFFF"
        >
        {todos.length} Total
      </Chip>
    </div>
  );
};

export default InfoBar;
