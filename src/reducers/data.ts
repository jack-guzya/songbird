// import shuffle from 'lodash.shuffle';
import { SET_DATA } from '../constants/actionTypes';

// type category = {
//   firstName: string,
//   isActive: boolean,
// }

// type categoryState = {
//   current: number,
//   list: category[]
// }

const DEFAULT_DATA: object = {};

const dataReducer = (
  state = DEFAULT_DATA, { type, data }: { type: string, data: object },
) => {
  switch (type) {
    case SET_DATA:
      return data;

    default:
      return state;
  }
};

export default dataReducer;
