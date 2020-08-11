/* eslint-disable no-unused-vars */
// Types
import { ElementNameType } from '../components/ElementName/types';
import { ElementImageType } from '../components/ElementImage/types';
import { ElementTextType } from '../components/ElementText/types';

export type ListType = ElementImageType & ElementNameType & ElementTextType & {
  id?: number,
  audio?: string
}

export type DataType = {
  categories: Array<string>,
  list: Array<Array<ListType>>
}
