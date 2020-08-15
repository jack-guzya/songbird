/* eslint-disable no-unused-vars */
// Types
import { IElementName } from '../components/ElementName/types';
import { IElementImage } from '../components/ElementImage/types';
import { IElementText } from '../components/ElementText/types';

export type ListType = IElementImage & IElementName & IElementText & {
  id?: number,
  audio?: string
}

export type DataType = {
  categories: Array<string>,
  list: Array<Array<ListType>>
}
