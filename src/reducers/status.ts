// Constants
import { SET_STATUS } from '../actions/constants';
// Types
import { Action, StatusType } from '../actions/types';

// type Action = ActionType & { status: StatusType }

const DEFAULT_STATUS: null = null;

const status = (
  state = DEFAULT_STATUS, { type, status }: Action<{ status: StatusType }>,
): StatusType => {
  switch (type) {
    case SET_STATUS:
      return status;

    default:
      return state;
  }
};

export default status;
