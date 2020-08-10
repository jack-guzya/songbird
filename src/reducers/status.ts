import { SET_SUCCESS_STATUS, SET_FAIL_STATUS } from '../constants/actionTypes';

const DEFAULT_STATUS: null = null;

type action = {
  type: string,
}

const status = (state = DEFAULT_STATUS, { type }: action) => {
  switch (type) {
    case SET_FAIL_STATUS:
      return false;

    case SET_SUCCESS_STATUS:
      return true;

    default:
      return state;
  }
};

export default status;
