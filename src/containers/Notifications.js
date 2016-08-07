import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notificationComplete } from '../actions/notifications';
import { ADD_TODO, COMPLETE_TODO } from '../core/actiontypes';
import Snackbar from 'material-ui/Snackbar';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    let { notificationComplete, notifications } = this.props;
    notificationComplete(notifications.type);
  }

  render() {
    let { open, type, message } = this.props.notifications;

    const styles = {
      fontFamily: 'Roboto'
    };

    return (
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={3000}
        onRequestClose={this.handleRequestClose}
        bodyStyle={styles}
      />
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  };
};

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ notificationComplete }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
