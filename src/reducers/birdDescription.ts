import { SHOW_BIRD_DESCRIPTION } from '../constants/actionTypes'
import { birdDataType } from '../data/birdsData';

type action = {
  type: string,
  description: birdDataType,
}

const DEFAULT_STATE: null = null;


const birdDescription = (state = DEFAULT_STATE, { type, description }: action) => {
  switch (type) {
    case SHOW_BIRD_DESCRIPTION:
      return description;

    default:
      return state;
  }
}

export default birdDescription
