import { combineReducers } from 'redux';
import todo from './todo';
import notifications from './notifications';

export default combineReducers({
  todo,
  notifications
});
