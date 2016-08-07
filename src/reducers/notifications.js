import {
  ADD_TODO,
  COMPLETE_TODO,
  NOTIFICATION_COMPLETE
} from '../core/actiontypes';

import {
  ADD_MESSAGE,
  COMPLETE_MESSAGE
} from '../core/messages';

const initState = {
  type: null,
  message: '',
  open: false
};

export default function notifications(state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return _.assign({}, state, {
        type: ADD_TODO,
        message: ADD_MESSAGE,
        open: true
      });
    case COMPLETE_TODO:
      return _.assign({}, state, {
        type: COMPLETE_TODO,
        message: COMPLETE_MESSAGE,
        open: true
      });
    case NOTIFICATION_COMPLETE:
      return _.assign({}, state, {
        type: action.metaType,
        message: action.metaType === ADD_TODO ? ADD_MESSAGE : COMPLETE_MESSAGE,
        open: false
      });
    default:
      return state;
  }
}
