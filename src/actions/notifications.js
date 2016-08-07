import { NOTIFICATION_COMPLETE } from '../core/actiontypes';

export function notificationComplete(metaType) {
  return {
    type: NOTIFICATION_COMPLETE,
    metaType
  };
}
