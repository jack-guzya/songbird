import { SHOW_DESCRIPTION } from '../constants/actionTypes';

// Types
// eslint-disable-next-line no-unused-vars
import { elementDescriptionProps } from '../components/ElementDescription/ElementDescription';

type action = {
  type: string,
  description: elementDescriptionProps,
}

const DEFAULT_STATE: null = null;

const birdDescription = (state = DEFAULT_STATE, { type, description }: action) => {
  switch (type) {
    case SHOW_DESCRIPTION:
      return description;

    default:
      return state;
  }
};

export default birdDescription;
