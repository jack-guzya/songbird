/* eslint-disable no-unused-vars */
import { IElementName } from '../ElementName/types';
import { ElementDescriptionType, ElementIdType } from '../../containers/ElementDescription/types';

export type HandleClickType = (e: React.MouseEvent<HTMLLIElement>) => void

export type ElementIsSuccessType = boolean

export type CurrentElementType = number | null

export type ElementOfListType = ElementDescriptionType & {
  isSuccess?: ElementIsSuccessType
  id?: ElementIdType
}

export type ElementsListType = Array<ElementOfListType>

export type ElementsListPropsType = {
  list: ElementsListType
  handleClick?: HandleClickType
}

export type ElementOfListPropsType = ElementOfListType & {
  handleClick?: HandleClickType
}
