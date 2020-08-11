/* eslint-disable no-unused-vars */
import { ElementNameType } from '../ElementName/types';
import { ElementIdType } from '../ElementDescription/types';

export type HandleClickType = (e: React.MouseEvent<HTMLLIElement>) => void

export type ElementIsSuccessType = boolean

export type ElementOfListType = ElementNameType & {
  id?: ElementIdType
  isSuccess?: ElementIsSuccessType
}

export type ElementsListType = Array<ElementOfListType>

export type ElementsListPropsType = {
  list: Array<ElementOfListType>
  handleClick?: HandleClickType
}

export type ElementOfListPropsType = ElementOfListType & {
  handleClick?: HandleClickType
}
